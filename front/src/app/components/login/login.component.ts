import { Component, OnInit } from '@angular/core';
import { ObjavaService } from '../../objava.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private objavaService:ObjavaService, private router: Router) { }
  korisnickoime;
  sifra;
  ngOnInit() {
  }
  login(){
    const korisnik = {
      "korisnickoime": this.korisnickoime,
      "sifra":this.sifra
    }
    this.objavaService.login(korisnik);
  }

}
