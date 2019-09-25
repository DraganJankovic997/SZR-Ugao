import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObjavaService } from '../../objava.service';
import { Objava } from '../../objava.model';

type Poruka = {
  ime: String;
  mail: String;
  broj: String;
  poruka: String;
}



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public objavaService: ObjavaService, public router: Router) { }
  objave: Objava[];
  poruke = [];
  adm:String;
  ngOnInit() {
    this.uzmi();
    this.adm = localStorage.getItem("admin");
  }

  odj(){
    localStorage.clear();
  }

  isadm(){
    if(this.adm == "da") return true;
    else return false;
  }

  obrisiPoruku(id){
    console.log("brisanje");
    this.objavaService.obrisiObjavu(id);
  }



  uzmi(){
    this.objavaService.uzmiPoruke().subscribe((odg: Objava[]) => {
      this.objave = odg;
      this.pretvori();
    }); 
  }

  dodajNP(){
    return this.router.navigate(['/galerija/dodaj']);
  }

  pretvori(){
    console.log(this.objave)
    for (let x of this.objave){
      var info = x.naziv.split('|');
      var np = {
        "id": x._id,
        "ime" : info[0],
        "mail": info[2],
        "broj": info[1],
        "poruka": x.opis,
      }
      this.poruke.push(np);
      
    }
    console.log(this.poruke);
  }
  

}
