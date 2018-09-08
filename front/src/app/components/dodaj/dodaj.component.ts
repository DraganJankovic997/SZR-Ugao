import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



import { ObjavaService } from '../../objava.service';

@Component({
  selector: 'app-dodaj',
  templateUrl: './dodaj.component.html',
  styleUrls: ['./dodaj.component.css']
})
export class DodajComponent implements OnInit {

  naziv;
  kategorija;
  opis ;
  slika = null;
  sveslike = [];
  adm: String;
  svekategorije = ['Kupatilo', 'Kuhinja', 'Dnevna soba', 'Spavaca soba', 'Restoran', 'Orman', 'Terasa', 'Hodnik', 'Ostalo'];
  constructor(private objavaService: ObjavaService, private fb: FormBuilder, private router: Router) {
  }
  isadm(){
    if(this.adm == "da") return true;
    else return false;
  }

  dodajSliku(event){
    this.slika = event.target.files[0];
  }
  dodajSs(event){
    this.sveslike = event.target.files;
  }
  dodajObjavu(){
    var f = new FormData();

    f.append("naziv", this.naziv);
    f.append("kategorija", this.kategorija);
    f.append("opis", this.opis);
    f.append("slika", this.slika);
    for (var x = 0; x < this.sveslike.length; x++) {
      f.append("sveslike", this.sveslike[x]);
    }
    this.objavaService.dodajObjavu(f).subscribe(() => {
      this.router.navigate(['/galerija']);
    }, error => {
      console.log(error);
    });
  }


  ngOnInit() {
    this.adm = localStorage.getItem("admin");
  }

}
