import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { PriseService } from 'src/app/core/services/prise.service';
import { SensorTemperature } from 'src/app/shared/models/sensor';

@Component({
  selector: 'mltp-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  @Input() formGroupName: string;
  temperatureForm: FormGroup;

  @Output() sendValue = new EventEmitter<string>();
  
  constructor(private rootFormGroup: FormGroupDirective,
              private priseService: PriseService) { }

  ngOnInit(): void {
    this.temperatureForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
    this.temperatureForm.patchValue({sensorId:'sensor1'})
    this.temperatureForm.patchValue({radio:'actifSup'})
    this.disabledSensorInput('actifSup')
    
  }

  setSensor(sensor: any) {
    //console.log(sensor.radio)
    this.disabledSensorInput(sensor.radio)
  }

  disabledSensorInput(property: string) {
    if(this.mode?.value == property){
      for (const elmt in this.temperatureForm.value) {
        if(elmt != 'radio'){
          if(elmt == 'actifEntre'){
            this.temperatureForm.controls['inactifEntreMin'].disable();
            this.temperatureForm.controls['inactifEntreMax'].disable();
          }
          else if(elmt == 'inactifEntre'){
            this.temperatureForm.controls['actifEntreMin'].disable();
            this.temperatureForm.controls['actifEntreMax'].disable();
          }
          
          else 
            this.temperatureForm.controls[elmt].disable();
        }
      }
    }
    if(property == 'actifEntre'){
      this.temperatureForm.controls['actifEntreMin'].enable();
      this.temperatureForm.controls['actifEntreMax'].enable();
    }
    else if(property == 'inactifEntre'){
      this.temperatureForm.controls['inactifEntreMin'].enable();
      this.temperatureForm.controls['inactifEntreMax'].enable();
    }else {
      this.temperatureForm.controls[property].enable();
    }
    this.temperatureForm.controls['sensorId'].enable();
  }

  submit(){
    this.sendValue.emit('temperature')
  }
  get sensorTempState() {
    return this.temperatureForm.get('sensorId');
    
  }

  get mode() {
    return this.temperatureForm.get('radio');
    
  }

}
