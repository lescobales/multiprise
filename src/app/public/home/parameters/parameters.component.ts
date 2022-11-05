import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MaxValidator, Validators } from '@angular/forms';
import { PriseService } from 'src/app/core/services/prise.service';


@Component({
  selector: 'mltp-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {
  listMode = [
    {mode: 'cycle', checked: false},
    {mode: 'temperature', checked: false},
    {mode: 'date', checked: false},

    {mode: 'humidite', checked: false}]

  isCycle: boolean = false
  isTemperature: boolean = false
  isDate: boolean = false
  isHumidite: boolean = false

  parameterForm :FormGroup

  constructor(private fb: FormBuilder,
              private priseService : PriseService) { }
  ngOnInit(): void {
    this.parameterForm = this.fb.group({
      cycle: this.fb.group({
        jOn: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2}$')
        ]],
        hOn: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2}$')
        ]],
        mOn: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2}$')
        ]],
        sOn: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2}$')
        ]],
        jOff:['',[
          Validators.required,
          Validators.pattern('^[0-9]{2}$')
        ]],
        hOff:['',[
          Validators.required,
          Validators.pattern('^[0-9]{2}$')
        ]],
        mOff:['',[
          Validators.required,
          Validators.pattern('^[0-9]{2}$')
        ]],
        sOff:['',[
          Validators.required,
          Validators.pattern('^[0-9]{2}$')
        ]]
      }),
      select: this.fb.group({
        id: [],
        type: [],
        onOff: [],
        name: []
      }),
      temperature: this.fb.group({
        sensorId: [],
        radio: [],

        actifSup: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]],
        actifInf: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]],
        actifEntreMin: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]],
        actifEntreMax: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]],
        inactifEntreMin: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]],
        inactifEntreMax: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]]
      }),
      humidite: this.fb.group({
        radio: [],

        actifSup: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]],
        actifInf: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]],
        actifEntreMin: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]],
        actifEntreMax: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]],
        inactifEntreMin: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]],
        inactifEntreMax: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]]
      }),
      date: this.fb.group({
        jOn: ['',[
          Validators.required
        ]],
        hOn: ['',[
          Validators.required
        ]],
        mOn: ['',[
          Validators.required
        ]],
        onOff: ['',[
          Validators.required
        ]]
      })
    });  
  }

  sendValue(event:any){
    
    let value = { ...this.parameterForm.controls['select'].value,
                  ...this.parameterForm.controls[event].value};
    this.priseService.getValue(value)
  }

  

  onChangeCycle(mode: any) {
    let isMode = this.listMode.map((acc) => {acc.mode == mode ? acc.checked = true : acc.checked = false;
      return acc.checked})                             
    this.isCycle = isMode[0]
    this.isTemperature = isMode[1]
    this.isDate = isMode[2]
    this.isHumidite = isMode[3]
}
}
  
 


