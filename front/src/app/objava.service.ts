import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObjavaService {

  uri = "http://localhost:4000";


  constructor(private http: HttpClient) { }


  uzmiSveObjave(){
    return this.http.get(this.uri+'/galerija');
  }

  uzmiObjavu(id){
    return this.http.get(this.uri+`/galerija/detalji/${id}`);
  }

  dodajObjavu(f){
    var h:HttpHeaders;
    h = this.kh();
    alert("objava dodata");
    return this.http.post(this.uri+'/galerija/dodaj', f, {headers:h});
  }

  izmeniObjavu(f, id){
    var h:HttpHeaders;
    h = this.kh();
    alert("izmena:  " + id);
    return this.http.post(this.uri+`/galerija/izmeni/${id}`, f, {headers:h});
  }

  obrisiObjavu(id){
    var h:HttpHeaders;
    h = this.kh();
    alert("brisanje:  " + id);
    return this.http.get(this.uri+`/galerija/obrisi/${id}`, {headers:h});
  }

  posaljiPoruku(f){
    return this.http.post(this.uri+'/posaljiporuku', f);
  }

  uzmiPoruke(){
    var h:HttpHeaders;
    h = this.kh();
    return this.http.get(this.uri+"/admin", {headers: h});
  }
  
  signup(nk){
    return this.http.post(this.uri+"/signup", nk);
  }

  login(k){
    return this.http.post(this.uri+"/login", k).subscribe((res) =>{
      var t = res['t'];
      localStorage.setItem("token", t);
      if(res['i']=="admin") localStorage.setItem("admin", "da");
      else localStorage.setItem("admin", "ne");
    });
  }

  korisnik(){
    return localStorage.getItem('token');
  }

  odjava(){
    localStorage.clear();
  }

  kh(){
    var h = new HttpHeaders({"Authorization": `Bearer ${localStorage.getItem("token")}` })
    return h;
  }


}
