import { Component, Inject, OnInit } from '@angular/core';
import { PriseService } from 'src/app/core/services/prise.service';
import { Prise } from 'src/app/shared/models/prise';

@Component({
  selector: 'mltp-home-features',
  templateUrl: './home-features.component.html'
})

export class HomeFeaturesComponent {

  constructor(private priseService: PriseService) { }
   listPrise = this.priseService.getPriseList();

  goToPrise(prise: Prise) {
    
    //console.log(prise);
  }

  onONOFFChange(id: number) {
    if(this.listPrise[id].isActive) {
      this.listPrise[id].isActive = false
    } else {
      this.listPrise[id].isActive = true
    }
    console.log(this.listPrise[id])
  }

  onNameChange(name: string[]) {
    this.listPrise[+name[1]].name = name[0]
  }

    
    

}
