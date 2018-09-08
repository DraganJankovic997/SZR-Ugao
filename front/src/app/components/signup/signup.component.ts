import { Component, OnInit } from '@angular/core';
import { ObjavaService } from '../../objava.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private objavaService: ObjavaService, private router: Router) { }

  sifra;
  korisnickoime;
  ngOnInit() {
  }

  registracija(){
    const noviKorisnik = {
      "korisnickoime" : this.korisnickoime,
      "sifra" : this.sifra
    }
    this.objavaService.signup(noviKorisnik).subscribe(()=>{
    })
  }

}
