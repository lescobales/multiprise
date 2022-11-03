import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ParametersComponent } from './home/parameters/parameters.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'parameter/:id', component: ParametersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
