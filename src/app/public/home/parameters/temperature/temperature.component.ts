import { Component, Input, OnInit } from '@angular/core';
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
  
  constructor(private rootFormGroup: FormGroupDirective,
              private priseService: PriseService) { }

  ngOnInit(): void {
    this.temperatureForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
    this.temperatureForm.patchValue({sensorId:'sensor1'})
    this.disabledSensorInput()
    
  }

  disabledSensorInput () {
    if(this.sensorTempState?.value == 'sensor1') {
      this.temperatureForm.controls['actifMin2'].disable();
      this.temperatureForm.controls['actifMax2'].disable();
      this.temperatureForm.controls['actifEntreMin2'].disable();
      this.temperatureForm.controls['actifEntreMax2'].disable();
      this.temperatureForm.controls['inactifEntreMin2'].disable();
      this.temperatureForm.controls['inactifEntreMax2'].disable();

      this.temperatureForm.controls['actifMin1'].enable();
      this.temperatureForm.controls['actifMax1'].enable();
      this.temperatureForm.controls['actifEntreMin1'].enable();
      this.temperatureForm.controls['actifEntreMax1'].enable();
      this.temperatureForm.controls['inactifEntreMin1'].enable();
      this.temperatureForm.controls['inactifEntreMax1'].enable();

    } else if(this.sensorTempState?.value == 'sensor2'){
      this.temperatureForm.controls['actifMin1'].disable();
      this.temperatureForm.controls['actifMax1'].disable();
      this.temperatureForm.controls['actifEntreMin1'].disable();
      this.temperatureForm.controls['actifEntreMax1'].disable();
      this.temperatureForm.controls['inactifEntreMin1'].disable();
      this.temperatureForm.controls['inactifEntreMax1'].disable();

      this.temperatureForm.controls['actifMin2'].enable();
      this.temperatureForm.controls['actifMax2'].enable();
      this.temperatureForm.controls['actifEntreMin2'].enable();
      this.temperatureForm.controls['actifEntreMax2'].enable();
      this.temperatureForm.controls['inactifEntreMin2'].enable();
      this.temperatureForm.controls['inactifEntreMax2'].enable();

    }
  }

  setSensor(sensor: any) {
    console.log(this.sensorTempState?.value)
    this.disabledSensorInput()
  }

  submit(){
    console.log('temperature')
  }
  get sensorTempState() {
    return this.temperatureForm.get('sensorId');
    
  }

}
