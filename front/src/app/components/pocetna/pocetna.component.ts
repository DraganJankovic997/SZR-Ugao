import { Component, OnInit } from '@angular/core';
import { ObjavaService } from '../../objava.service';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  mail: String;
  ime: String;
  broj: String;
  poruka;

  constructor(private objavaService: ObjavaService) { }

  ngOnInit() {
    
  }
  
  posaljiPoruku(){
    var f = new FormData();

    var n = this.ime + '|' + this.broj +  '|' + this.mail;
    f.append("naziv", n);
    f.append("opis", this.poruka);
    this.objavaService.posaljiPoruku(f).subscribe(()=> {
      alert('Poruka je poslata, odgovor cete dobiti uskoro na ' + this.mail);
    });
  }

}
