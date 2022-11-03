import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeFeaturesComponent } from './home-features/home-features.component';
import { HomeFeaturesCardComponent } from './home-features-card/home-features-card.component';
import { ParametersComponent } from './parameters/parameters.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParameterModule } from './parameters/parameter.module';



@NgModule({
  declarations: [
    HomeComponent,
    HomeFeaturesComponent,
    HomeFeaturesCardComponent,
    ParametersComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    ParameterModule
  ]
})
export class HomeModule { }
