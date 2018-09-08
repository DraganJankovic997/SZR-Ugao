import { Component, OnInit } from '@angular/core';
import { ObjavaService } from '../../objava.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Objava } from '../../objava.model';


@Component({
  selector: 'app-izmeni',
  templateUrl: './izmeni.component.html',
  styleUrls: ['./izmeni.component.css']
})
export class IzmeniComponent implements OnInit {

  constructor(private objavaService: ObjavaService, private ar: ActivatedRoute, private router: Router) { }

  naziv;
  kategorija;
  opis;
  slika;
  sveslike;
  id;
  svekategorije = ['Kupatilo', 'Kuhinja', 'Dnevna soba', 'Spavaca soba', 'Restoran', 'Orman', 'Terasa', 'Hodnik', 'Ostalo'];
  adm: String;

  ngOnInit() {
    this.uzmiObjavu();
    this.adm = localStorage.getItem("admin");
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

  uzmiObjavu(){
    this.ar.params.subscribe((par: Params) => {
      this.id = par['id'];
      this.objavaService.uzmiObjavu(this.id).subscribe((data: Objava) => {
        this.naziv = data.naziv;
        this.kategorija = data.kategorija;
        this.opis = data.opis;
        this.slika = data.glavnaslika;
        this.sveslike = data.sveslike;
      });
    });
  }

  izmeniObjavu(){
    var f = new FormData();

    f.append("naziv", this.naziv);
    f.append("kategorija", this.kategorija);
    f.append("opis", this.opis);
    f.append("slika", this.slika);
    for (var x = 0; x < this.sveslike.length; x++) {
      f.append("sveslike", this.sveslike[x]);
    }
    console.log(f);
    this.objavaService.izmeniObjavu(f, this.id).subscribe(() => {
      this.router.navigate(['/galerija']);
    }, error => {
      console.log(error);
    });
  }

}

