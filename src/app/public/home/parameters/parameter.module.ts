import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CycleComponent } from './cycle/cycle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { HumiditeComponent } from './humidite/humidite.component';
import { DateComponent } from './date/date.component';



@NgModule({
  declarations: [
    CycleComponent,
    SelectComponent,
    TemperatureComponent,
    HumiditeComponent,
    DateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CycleComponent,
    SelectComponent,
    TemperatureComponent,
    HumiditeComponent,
    DateComponent
  ]
})
export class ParameterModule { }
