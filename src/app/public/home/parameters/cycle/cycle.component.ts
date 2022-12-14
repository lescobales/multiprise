import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'mltp-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css']
})
export class CycleComponent implements OnInit {
  @Input() formGroupName: string;
  cycleForm: FormGroup;

  @Output() sendValue = new EventEmitter<string>();

  constructor(private rootFormGroup: FormGroupDirective) { }
  
  ngOnInit(): void {
    this.cycleForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

  submit(){
    this.sendValue.emit('cycle')
  }

}
