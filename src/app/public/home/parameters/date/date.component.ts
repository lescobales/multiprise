import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { PriseService } from 'src/app/core/services/prise.service';

@Component({
  selector: 'mltp-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  @Input() formGroupName: string;
  dateForm: FormGroup;

  @Output() sendValue = new EventEmitter<string>();

  isSameDate: boolean = false
  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.dateForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;

  }

  submit() {
    this.sendValue.emit('date')
  }

  get dayOn() {
    return this.dateForm.get('jOn');
    
  }
  get hOn() {
    return this.dateForm.get('hOn');
    
  }
  get mOn() {
    return this.dateForm.get('mOn');
    
  }

  get onOff() {
    return this.dateForm.get('onOff');
    
  }
}
