import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormGroupDirective} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PriseService } from 'src/app/core/services/prise.service';
import { Prise } from 'src/app/shared/models/prise';

@Component({
  selector: 'mltp-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
 
})

export class SelectComponent implements OnInit {
  @Input() formGroupName: string;
  selectForm: FormGroup;
  
  @Output() changeCycle = new EventEmitter<string>();

  prise: Prise;
  unicode: string;
  isActive: boolean = false;
  typeList: Array<string>;
  isNameChange: boolean = false;

  constructor(private route: ActivatedRoute,
              private priseService: PriseService,
              private rootFormGroup: FormGroupDirective
              ) { }
  
  ngOnInit(): void {
    this.selectForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
    const priseId: string | null =  this.route.snapshot.paramMap.get('id'); 
    
    if(priseId){
      this.prise = this.priseService.getPriseById(+priseId);  
      this.typeList = this.priseService.getType();
      this.unicode = this.priseService.getUnicode(this.prise.type)
      this.hasType(this.typeList)
      this.cycleChange(this.prise.type)
      this.selectForm.patchValue({onOff: this.prise.isActive})
      this.selectForm.patchValue({name:this.prise.name})
    }
  }
  
  setOnOff(){
    if(this.isActive) {
      this.isActive = false;
      this.prise.isActive = this.isActive
    } else {
      this.isActive = true;
      this.prise.isActive = this.isActive
    }
    this.priseService.setPrise(this.prise)
  }

  setTypeRadio(radio: any) {
    this.selectForm.patchValue({type:radio.type}) 
    this.cycleChange(radio.type);
    this. unicode = this.priseService.getUnicode(radio.type)
    this.prise.type = radio.type
    this.priseService.setPrise(this.prise)
  }

  cycleChange(type: string) {
    this.changeCycle.emit(type);
  }

  setName(name: string){
    this.prise.name = name
    this.isNameChange = false
  }

  changeName() {
    this.isNameChange = true
  }

  hasType(listType: Array<string>) {
   let type = listType.filter((type) => {return this.prise.type == type})
   if(type) {
    this.selectForm.patchValue({type:type[0]})
    this.prise.type = type[0]  
   }  
  }

  submit() {

  }

  get typeRadio() {
    return this.selectForm.get('type');
    
  }
  get onOffSwitch() {
    return this.selectForm.get('onOff');
  }

  get namePrise() {
    return this.selectForm.get('name'); 
  }
}
