import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '../public/public.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    PublicModule,
    RouterModule
  ],
  exports: [
    PageNotFoundComponent,
    NavBarComponent
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
     throw new Error('CoreModule is already loaded.');
    }
   }
}
