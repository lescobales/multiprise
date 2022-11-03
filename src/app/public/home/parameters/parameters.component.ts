import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MaxValidator, Validators } from '@angular/forms';


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

  constructor(private fb: FormBuilder) { }
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
        type: [],
        onOff: [],
        name: []
      }),
      temperature: this.fb.group({
        sensorId: ['',[
          Validators.required
        ]],

        actifMin1: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]],
        actifMax1: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]],
        actifEntreMin1: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]],
        actifEntreMax1: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]],
        inactifEntreMin1: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]],
        inactifEntreMax1: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]],

        actifMin2: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]],
        actifMax2: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]],
        actifEntreMin2: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]],
        actifEntreMax2: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]],
        inactifEntreMin2: ['',[
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]],
        inactifEntreMax2: ['',[
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

        jOff: ['',[
          Validators.required
        ]],
        hOff: ['',[
          Validators.required
        ]],
        mOff: ['',[
          Validators.required
        ]]
      })
    });  
  }

  onChangeCycle(event: any) {
    switch (event) {
      case 'cycle':
        this.changeMode(event)
        break;
      case 'temperature':
        this.changeMode(event)
        break;
        case 'humidite':
          this.changeMode(event)
          break;
        case 'date':
          this.changeMode(event)
          break;
    }
  }
  
  changeMode(mode: string) {
   let isMode = this.listMode.map((acc) => {acc.mode == mode ? acc.checked = true : acc.checked = false;
                                              return acc.checked})                             
  this.isCycle = isMode[0]
  this.isTemperature = isMode[1]
  this.isDate = isMode[2]
  this.isHumidite = isMode[3]
  }
}

