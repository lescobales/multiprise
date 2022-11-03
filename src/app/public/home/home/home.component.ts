import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PriseService } from 'src/app/core/services/prise.service';

@Component({
  selector: 'mltp-home',
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {

  message: string = "Hello";
  
  constructor(private priseService: PriseService,
              private router: Router) {  }

  ngOnInit(): void {
    this.setMessage(this.message);
    
  }

  sendValue() {
    this.priseService.sendValue('','gresq').subscribe(() => {});
  }

  setMessage(msg: string) {
     this.message = msg;
  }

}
