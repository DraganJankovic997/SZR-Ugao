import { Component, OnInit } from '@angular/core';
import { ObjavaService } from '../../objava.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Objava } from '../../objava.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalji',
  templateUrl: './detalji.component.html',
  styleUrls: ['./detalji.component.css']
})
export class DetaljiComponent implements OnInit {
  obj: Objava;
  slike =[];
  constructor(private objavaService: ObjavaService, private ar: ActivatedRoute, private router: Router) { }
  adm: String;
  ngOnInit() {
    this.uzmiObjavu();
    this.adm = localStorage.getItem("admin");
  }

  isadm(){
    if(this.adm == "da") return true;
    else return false;
  }
  uzmiObjavu(){
      this.ar.params.subscribe((par: Params) => {
        var id = par['id'];
        this.objavaService.uzmiObjavu(id).subscribe((data: Objava) => {
          this.obj = data;
          for(let x of this.obj.sveslike){
            this.slike.push(x);
          }
          console.log(this.obj);
          console.log(this.slike);
        });
      });
  }

  obrisiObj(id){
    var x = confirm("Da li ste sigurni?");
    if(x == true){
      this.objavaService.obrisiObjavu(id).subscribe(()=> {
        return this.router.navigate([`/galerija`]);
      });
    }
  }

  izmeniObj(id){
    return this.router.navigate([`/galerija/izmeni/${id}`]);
  }

}
