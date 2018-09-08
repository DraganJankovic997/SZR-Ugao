import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GalerijaComponent } from './components/galerija/galerija.component';
import { DodajComponent } from './components/dodaj/dodaj.component';
import { IzmeniComponent } from './components/izmeni/izmeni.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { DetaljiComponent } from './components/detalji/detalji.component';
import { ObjavaService } from './objava.service';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  {path: '', component: PocetnaComponent, pathMatch: 'full' },
  {path: 'galerija', component: GalerijaComponent},
  {path: 'galerija/izmeni/:id', component: IzmeniComponent},
  {path: 'galerija/dodaj', component: DodajComponent},
  {path: 'galerija/detalji/:id', component: DetaljiComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GalerijaComponent,
    DodajComponent,
    IzmeniComponent,
    PocetnaComponent,
    DetaljiComponent,
    AdminComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ObjavaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
