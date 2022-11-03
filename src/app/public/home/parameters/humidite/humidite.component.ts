import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'mltp-humidite',
  templateUrl: './humidite.component.html',
  styleUrls: ['./humidite.component.css']
})
export class HumiditeComponent implements OnInit {
  @Input() formGroupName: string;
  humiditeForm: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.humiditeForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
    this.humiditeForm.patchValue({radio:'actifSup'})
    this.disabledSensorInput('actifSup')
  }

  disabledSensorInput(property: string) {
    if(this.sensor?.value == property){
      for (const elmt in this.humiditeForm.value) {
        if(elmt != 'radio'){
          if(elmt == 'actifEntre'){
            this.humiditeForm.controls['inactifEntreMin'].disable();
            this.humiditeForm.controls['inactifEntreMax'].disable();
          }
          else if(elmt == 'inactifEntre'){
            this.humiditeForm.controls['actifEntreMin'].disable();
            this.humiditeForm.controls['actifEntreMax'].disable();
          }
          
          else 
            this.humiditeForm.controls[elmt].disable();
        }
      }
    }
    if(property == 'actifEntre'){
      this.humiditeForm.controls['actifEntreMin'].enable();
      this.humiditeForm.controls['actifEntreMax'].enable();
    }
    else if(property == 'inactifEntre'){
      this.humiditeForm.controls['inactifEntreMin'].enable();
      this.humiditeForm.controls['inactifEntreMax'].enable();
    }else {
      this.humiditeForm.controls[property].enable();
    } 
  }

  setSensor(event: any){
    console.log(event.radio)
    this.disabledSensorInput(event.radio)
  }

  submit() {
    
  }

  get sensor() {
    return this.humiditeForm.get('radio');
    
  }

}
