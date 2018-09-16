import { Component, OnInit } from '@angular/core';
import { ObjavaService } from './objava.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SZR Ugao';
  router: Router;
  pr: Boolean;

  ngOnInit(){
    this.pr = this.prijavljen();
  }


  odj(){
    localStorage.clear();
  }

  prijavljen(){
    if(localStorage.getItem('admin') =="da" || localStorage.getItem('admin') =="ne" ) return true;
    else return false;
  }
}
