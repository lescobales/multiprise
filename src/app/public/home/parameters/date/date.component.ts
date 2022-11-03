import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'mltp-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  @Input() formGroupName: string;
  dateForm: FormGroup;

  isSameDate: boolean = false
  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.dateForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;

  }

  compareDate() {
    this.isSameDate=false
    if(this.dayOn?.value == this.dayOff?.value) {
      if(this.hOn?.value == this.hOff?.value){
        if(this.mOn?.value == this.mOff?.value) {
          this.isSameDate=true
        }
      }
    }
  }

  submit() {
    this.compareDate()
  }

  getDay() {

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
  get dayOff() {
    return this.dateForm.get('jOff');
    
  }

  get hOff() {
    return this.dateForm.get('hOff');
    
  }

  get mOff() {
    return this.dateForm.get('mOff');
    
  }

}
