import { Component, OnInit } from '@angular/core';
import { ObjavaService } from '../../objava.service';
import { Router } from '@angular/router';
import { Objava } from '../../objava.model';



@Component({
  selector: 'app-galerija',
  templateUrl: './galerija.component.html',
  styleUrls: ['./galerija.component.css']
})
export class GalerijaComponent implements OnInit {

  objave;
  prikaz: Objava[];
  slike:boolean = false;
  nizslika:String[];
  sveKategorije = [
    ["Kupatilo" , false],
    ["Kuhinja" , false],
    ["Dnevna soba" , false],
    ["Spavaca soba" , false],
    ["Restoran" , false],
    ["Orman" , false],
    ["Terasa" , false],
    ["Hodnik" , false],
    ["Ostalo" , false]
  ]
  constructor(private objavaService: ObjavaService, private router: Router) { }
  ngOnInit() {
    this.uzmiObjave();
  }
  vrstaprikaza(){
    this.slike = !this.slike;
  }


  filter(){
    this.prikaz = [];
    var pr = [];
    for(let k of this.sveKategorije){
      if(k[1]) pr.push(k[0]);
    }
    if(pr.length == 0) this.prikaz = this.objave;
    else {
      for(let o of this.objave){
        for(let p of pr){
          if(o.kategorija == p) this.prikaz.push(o);
        }
      }
    }    
  }

  promeni(el){
    for(let k of this.sveKategorije){
      if(k[0] == el ) k[1] = !k[1];
    }
  }


  uzmiObjave(){
    this.objavaService.uzmiSveObjave().subscribe((data) => {
      this.objave = data;
      this.prikaz = this.objave;
      for(let o of this.prikaz){
        this.nizslika.push(o.glavnaslika);
        for(let s of o.sveslike){
          this.nizslika.push(s);
        }
      }
    }); 
  }

  naDetalje(id){
    return this.router.navigate([`/galerija/detalji/${id}`]);
  }

}
