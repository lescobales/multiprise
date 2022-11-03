import { Component, EventEmitter, Inject, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PriseService } from 'src/app/core/services/prise.service';
import { Prise } from 'src/app/shared/models/prise';

@Component({
  selector: 'mltp-home-features-card',
  templateUrl: './home-features-card.component.html',

})
export class HomeFeaturesCardComponent implements OnInit{

  constructor(private priseService: PriseService,
              private router: Router) {
    
  }
  
  @Input() id: number;

  @Output() onONOFFChange = new EventEmitter<number>();
  @Output() onNameChange = new EventEmitter<string[]>();

  
  homeForm = new FormGroup({
    onOff: new FormControl()
  });

  isNameChange: boolean = false;
  isPriseChange: boolean = false;
  unicode: string;
  msgInfoONOFF: string = '';
  msgInfoName: string = '';
  prise: Prise;
  isActive: boolean
  name: string;

  ngOnInit(): void {
    this.prise = this.priseService.getPriseById(this.id)
    this.unicode = this.priseService.getUnicode(this.prise.type)
    this.isActive = this.prise.isActive
    this.name = this.prise.name
    this.homeForm.patchValue({onOff: this.prise.isActive})
  }

  setOnOff() {
    if(this.isActive) {
      this.prise.isActive = this.isActive
      this.isActive = false;
    } else {
      this.prise.isActive = this.isActive
      this.isActive = true;
    }
    this.onONOFFChange.emit(this.id)
    this.isPriseChange = true
    this.setInfoMessage()
    }
  
  setIsChangeName() {
    if(this.isNameChange){
      this.isNameChange = false
    }else{
      this.isNameChange = true
    }    
  this.isPriseChange = true
  }

  setMode(){
   
    this.isPriseChange = true
  }

  setName(name: string) {
    this.name = name;
    this.prise.name = name
    this.onNameChange.emit([name,String(this.id)])
    this.setInfoMessage()
    this.setIsChangeName()
  }

  setInfoMessage(){
    if(this.isActive && this.isNameChange) {
      this.msgInfoONOFF = 'Prise en fonctionnement.';
      this.msgInfoName = `Le nom de la prise est ${this.name}`;
    } else if(!this.isActive && !this.isNameChange) {
      this.msgInfoONOFF = 'Prise éteinte.';
      this.msgInfoName = `Le nom de la prise est ${this.name}`;
    }
    else if(this.isActive && !this.isNameChange) {
      this.msgInfoONOFF = 'Prise en fonctionnement.';
      this.msgInfoName = `Le nom de la prise est ${this.name}`;
    } else if(!this.isActive && this.isNameChange) {
      this.msgInfoONOFF = 'Prise éteinte.';
      this.msgInfoName = `Le nom de la prise est ${this.name}`;
    }
  }

  validPrise() {
    this.isPriseChange = false;
    let data = `priseIndex[${this.prise.id}],stateEnable[${this.prise.isActive}]`
    this.priseService.sendValue('api/multiprise',data).subscribe(() => {});
    
  }

  goToParameter() {
    console.log('go to parameter')
    this.priseService.setPrise(this.prise)
    this.router.navigate(['parameter', this.id])
  }

 }
