(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#futer{\r\n    min-height: 400px;\r\n    width: 100%;\r\n    background-color: #4f6639;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar border-bottom border-warning fixed-top navbar-dark navbar-expand-sm\">\n  <div class=\"container\">\n    <a routerLink=\"/\" class=\"navbar-brand\">SZR Ugao</a>\n    <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#topnav\" >\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse float-left\" id=\"topnav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\"><a routerLink=\"/\"  class=\"nav-link\">\n          <button class=\"btn btn-link text-light \" >Pocetna</button></a></li>\n        <li class=\"nav-item\"><a routerLink=\"/galerija\" class=\"nav-link\">\n          <button class=\"btn btn-link text-light\">Galerija</button></a></li>\n            <li class=\"nav-item\" *ngIf=\"!pr\"  ><a routerLink=\"/signup\" class=\"nav-link\">\n              <button class=\"btn btn-link text-light\">Registracija</button></a></li>\n            <li class=\"nav-item\" *ngIf=\"!pr\" ><a routerLink=\"/login\"  class=\"nav-link\">\n              <button class=\"btn btn-link text-light\">Prijava</button></a></li>\n        <div *ngIf=\"pr\">\n            <li class=\"nav-item\"><a href=\"/\" class=\"nav-link\">\n              <button (click)=\"odj()\" class=\"btn btn-link text-light\">Odjavi se</button></a></li>\n        </div>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div id=\"pewpew\">\n  <router-outlet></router-outlet>\n</div>\n\n<footer><div id=\"futer\" class=\"border-top border-warning\">\n</div></footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SZR Ugao';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.pr = this.prijavljen();
    };
    AppComponent.prototype.odj = function () {
        localStorage.clear();
    };
    AppComponent.prototype.prijavljen = function () {
        if (localStorage.getItem('admin') == "da" || localStorage.getItem('admin') == "ne")
            return true;
        else
            return false;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_galerija_galerija_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/galerija/galerija.component */ "./src/app/components/galerija/galerija.component.ts");
/* harmony import */ var _components_dodaj_dodaj_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dodaj/dodaj.component */ "./src/app/components/dodaj/dodaj.component.ts");
/* harmony import */ var _components_izmeni_izmeni_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/izmeni/izmeni.component */ "./src/app/components/izmeni/izmeni.component.ts");
/* harmony import */ var _components_pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pocetna/pocetna.component */ "./src/app/components/pocetna/pocetna.component.ts");
/* harmony import */ var _components_detalji_detalji_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/detalji/detalji.component */ "./src/app/components/detalji/detalji.component.ts");
/* harmony import */ var _objava_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./objava.service */ "./src/app/objava.service.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', component: _components_pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_9__["PocetnaComponent"], pathMatch: 'full' },
    { path: 'galerija', component: _components_galerija_galerija_component__WEBPACK_IMPORTED_MODULE_6__["GalerijaComponent"] },
    { path: 'galerija/izmeni/:id', component: _components_izmeni_izmeni_component__WEBPACK_IMPORTED_MODULE_8__["IzmeniComponent"] },
    { path: 'galerija/dodaj', component: _components_dodaj_dodaj_component__WEBPACK_IMPORTED_MODULE_7__["DodajComponent"] },
    { path: 'galerija/detalji/:id', component: _components_detalji_detalji_component__WEBPACK_IMPORTED_MODULE_10__["DetaljiComponent"] },
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_galerija_galerija_component__WEBPACK_IMPORTED_MODULE_6__["GalerijaComponent"],
                _components_dodaj_dodaj_component__WEBPACK_IMPORTED_MODULE_7__["DodajComponent"],
                _components_izmeni_izmeni_component__WEBPACK_IMPORTED_MODULE_8__["IzmeniComponent"],
                _components_pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_9__["PocetnaComponent"],
                _components_detalji_detalji_component__WEBPACK_IMPORTED_MODULE_10__["DetaljiComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            providers: [_objava_service__WEBPACK_IMPORTED_MODULE_11__["ObjavaService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5 pt-5\" *ngIf=\"isadm()\"  >\n  <button class=\"btn btn-primary btn-lg\" (click)=\"dodajNP()\"  >+ Dodaj novi proizvod</button>\n\n\n  <div class=\"card text-dark bg-light mt-5\" *ngFor=\"let p of poruke\"  >\n    <div class=\"card-body\">\n      <div class=\"container\">\n            <p class=\"card-text mx-3 my-1\"><strong>Ime: </strong>{{p.ime}}</p>\n            <p class=\"card-text mx-3 my-1\"><strong>Broj: </strong>{{p.broj}}</p>\n            <p class=\"card-text mx-3 my-1\"><strong>E-mail: </strong>{{p.mail}}</p>\n            <p class=\"card-text mx-3 my-1\"><strong>Poruka:</strong>{{p.poruka}}</p>\n\n            <button (click)=\"obrisiPoruku(p.id)\" class=\"float-right btn btn-danger\">Obrisi</button>\n      </div>\n  </div>\n  </div>\n</div>\n\n<div class=\"container mt-5 pt-5\" *ngIf=\"!isadm()\">\n  <h1>Stranica ne postoji</h1>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _objava_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../objava.service */ "./src/app/objava.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(objavaService, router) {
        this.objavaService = objavaService;
        this.router = router;
        this.poruke = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.uzmi();
        this.adm = localStorage.getItem("admin");
    };
    AdminComponent.prototype.isadm = function () {
        if (this.adm == "da")
            return true;
        else
            return false;
    };
    AdminComponent.prototype.obrisiPoruku = function (id) {
        console.log("brisanje");
        this.objavaService.obrisiObjavu(id);
    };
    AdminComponent.prototype.uzmi = function () {
        var _this = this;
        this.objavaService.uzmiPoruke().subscribe(function (odg) {
            _this.objave = odg;
            _this.pretvori();
        });
    };
    AdminComponent.prototype.dodajNP = function () {
        return this.router.navigate(['/galerija/dodaj']);
    };
    AdminComponent.prototype.pretvori = function () {
        console.log(this.objave);
        for (var _i = 0, _a = this.objave; _i < _a.length; _i++) {
            var x = _a[_i];
            var info = x.naziv.split('|');
            var np = {
                "id": x._id,
                "ime": info[0],
                "mail": info[2],
                "broj": info[1],
                "poruka": x.opis,
            };
            this.poruke.push(np);
        }
        console.log(this.poruke);
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_objava_service__WEBPACK_IMPORTED_MODULE_2__["ObjavaService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/detalji/detalji.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/detalji/detalji.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    margin-top: 50px;\r\n}\r\n\r\n.top-right{\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 20px;\r\n}\r\n\r\n#slajd .carousel-inner {\r\n    background-color: rgba(131, 131, 131);\r\n}\r\n\r\n.dd{\r\n    width: 100px;\r\n}\r\n\r\n.carousel-item img {\r\n    height: 450px !important;\r\n    width: 850px !important;\r\n    margin: auto;\r\n}"

/***/ }),

/***/ "./src/app/components/detalji/detalji.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/detalji/detalji.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"obj\">\n    <div class=\"card border-warning text-dark bg-light\">\n        <div class=\"card-header\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h1 class=\"display-4\">{{obj.naziv}}</h1>\n                        <h1 class=\"display-5\">{{obj.kategorija}}</h1>        \n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"float-right mr-3 mt-3\" *ngIf=\"isadm()\">\n                            <button (click)=\"izmeniObj(obj._id)\" class=\"mb-2 d-block btn btn-primary dd\">Izmeni</button>\n                            <button (click)=\"obrisiObj(obj._id)\" class=\"d-block btn btn-danger dd\">Obrisi</button>            \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card-body\">\n            <div class=\"container\">\n                <div class=\"row\" style=\"margin-bottom: 100px\">\n                    <div class=\"col-md-6 align-self-top justify-self-center\">\n                        <img src=\"http://localhost:4000/{{obj.glavnaslika}}\" class=\"img-fluid mb-3 mt-5 my-3\">\n                    </div>\n                    <div class=\"col-md-6 align-self-top pt-5 justify-self-left\">\n                        {{obj.opis}}\n                    </div>\n                </div>\n\n                \n                <div id=\"slajd\" class=\"carousel slide\"\n                    data-ride=\"carousel\"\n                    data-keyboard=\"true\"\n                    data-interval=\"false\"\n                    data-wrap=\"true\"\n                    >\n                    <ol class=\"carousel-indicators\" >\n                      <li data-target=\"#slajd\" data-slide-to=\"0\" class=\"active\"></li>\n                      <li data-target=\"#slajd\" *ngFor=\"let s of slike; let i = index\" [attr.data-slide-to]=\"i+1\"></li>\n                    </ol>\n                    <div class=\"carousel-inner\">\n                        <div class=\"carousel-item active\">\n                            <img class=\"d-block cp\" src=\"http://localhost:4000/{{obj.glavnaslika}}\" alt=\"Slika proizvoda\" >\n                        </div>\n                        <div class=\"carousel-item\" *ngFor=\"let s of slike\">\n                            <img class=\"d-block cp\" src=\"http://localhost:4000/{{s}}\" alt=\"Slika proizvoda\" >\n                        </div>\n                    <a class=\"carousel-control-prev\" href=\"#slajd\" role=\"button\" data-slide=\"prev\">\n                      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                      <span class=\"sr-only\">Previous</span>\n                    </a>\n                    <a class=\"carousel-control-next\" href=\"#slajd\" role=\"button\" data-slide=\"next\">\n                      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                      <span class=\"sr-only\">Next</span>\n                    </a>\n                  </div>\n\n\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n<div class=\"jumbotron\" *ngIf=\"!obj\">\n    <h1>Objava ne postoji</h1>\n    <a routerLink=\"/galerija\" class=\"btn btn-primary btn-lg\">GALERIJA</a>\n</div>"

/***/ }),

/***/ "./src/app/components/detalji/detalji.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/detalji/detalji.component.ts ***!
  \*********************************************************/
/*! exports provided: DetaljiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetaljiComponent", function() { return DetaljiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objava_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objava.service */ "./src/app/objava.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetaljiComponent = /** @class */ (function () {
    function DetaljiComponent(objavaService, ar, router) {
        this.objavaService = objavaService;
        this.ar = ar;
        this.router = router;
        this.slike = [];
    }
    DetaljiComponent.prototype.ngOnInit = function () {
        this.uzmiObjavu();
        this.adm = localStorage.getItem("admin");
    };
    DetaljiComponent.prototype.isadm = function () {
        if (this.adm == "da")
            return true;
        else
            return false;
    };
    DetaljiComponent.prototype.uzmiObjavu = function () {
        var _this = this;
        this.ar.params.subscribe(function (par) {
            var id = par['id'];
            _this.objavaService.uzmiObjavu(id).subscribe(function (data) {
                _this.obj = data;
                for (var _i = 0, _a = _this.obj.sveslike; _i < _a.length; _i++) {
                    var x = _a[_i];
                    _this.slike.push(x);
                }
                console.log(_this.obj);
                console.log(_this.slike);
            });
        });
    };
    DetaljiComponent.prototype.obrisiObj = function (id) {
        var _this = this;
        var x = confirm("Da li ste sigurni?");
        if (x == true) {
            this.objavaService.obrisiObjavu(id).subscribe(function () {
                return _this.router.navigate(["/galerija"]);
            });
        }
    };
    DetaljiComponent.prototype.izmeniObj = function (id) {
        return this.router.navigate(["/galerija/izmeni/" + id]);
    };
    DetaljiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalji',
            template: __webpack_require__(/*! ./detalji.component.html */ "./src/app/components/detalji/detalji.component.html"),
            styles: [__webpack_require__(/*! ./detalji.component.css */ "./src/app/components/detalji/detalji.component.css")]
        }),
        __metadata("design:paramtypes", [_objava_service__WEBPACK_IMPORTED_MODULE_1__["ObjavaService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetaljiComponent);
    return DetaljiComponent;
}());



/***/ }),

/***/ "./src/app/components/dodaj/dodaj.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/dodaj/dodaj.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dodaj/dodaj.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/dodaj/dodaj.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"isadm()\">\r\n    <form enctype=\"multipart/form-data\" action=\"/galerija/dodaj\" method=\"POST\" >\r\n        <div class=\"form-group\">\r\n            <label for=\"naziv\">Naziv</label>\r\n            <input type=\"text\" name=\"naziv\" id=\"naziv\" [(ngModel)]=\"naziv\" >\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"kategorija\">Kategorija</label>\r\n            <select class=\"custom-select\" name=\"kategorija\" id=\"kategorija\" [(ngModel)]=\"kategorija\" >\r\n                <option *ngFor=\"let k of svekategorije\" [value]=\"k\">{{k}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"opis\">Opis</label>\r\n            <textarea class=\"form-control\" name=\"opis\" id=\"opis\" rows=\"5\" [(ngModel)]=\"opis\"></textarea>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"slika\">Glavna slika</label>\r\n            <input type=\"file\" class=\"form-control-file\" id=\"slika\" name=\"slika\" (change)=\"dodajSliku($event)\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"slika\">Slike: </label>\r\n            <input type=\"file\" class=\"form-control-file\" id=\"ss\" name=\"ss\" (change)=\"dodajSs($event)\" multiple >\r\n        </div>\r\n        <button class=\"btn btn-success\"\r\n            (click)=\"dodajObjavu()\"\r\n        >\r\n            Sacuvaj\r\n        </button>\r\n    </form>\r\n</div>\r\n\r\n\r\n<div class=\"container mt-5 pt-5\" *ngIf=\"!isadm()\">\r\n        <h1>Stranica ne postoji</h1>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dodaj/dodaj.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/dodaj/dodaj.component.ts ***!
  \*****************************************************/
/*! exports provided: DodajComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DodajComponent", function() { return DodajComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _objava_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../objava.service */ "./src/app/objava.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DodajComponent = /** @class */ (function () {
    function DodajComponent(objavaService, fb, router) {
        this.objavaService = objavaService;
        this.fb = fb;
        this.router = router;
        this.slika = null;
        this.sveslike = [];
        this.svekategorije = ['Kupatilo', 'Kuhinja', 'Dnevna soba', 'Spavaca soba', 'Restoran', 'Orman', 'Terasa', 'Hodnik', 'Ostalo'];
    }
    DodajComponent.prototype.isadm = function () {
        if (this.adm == "da")
            return true;
        else
            return false;
    };
    DodajComponent.prototype.dodajSliku = function (event) {
        this.slika = event.target.files[0];
    };
    DodajComponent.prototype.dodajSs = function (event) {
        this.sveslike = event.target.files;
    };
    DodajComponent.prototype.dodajObjavu = function () {
        var _this = this;
        var f = new FormData();
        f.append("naziv", this.naziv);
        f.append("kategorija", this.kategorija);
        f.append("opis", this.opis);
        f.append("slika", this.slika);
        for (var x = 0; x < this.sveslike.length; x++) {
            f.append("sveslike", this.sveslike[x]);
        }
        this.objavaService.dodajObjavu(f).subscribe(function () {
            _this.router.navigate(['/galerija']);
        }, function (error) {
            console.log(error);
        });
    };
    DodajComponent.prototype.ngOnInit = function () {
        this.adm = localStorage.getItem("admin");
    };
    DodajComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dodaj',
            template: __webpack_require__(/*! ./dodaj.component.html */ "./src/app/components/dodaj/dodaj.component.html"),
            styles: [__webpack_require__(/*! ./dodaj.component.css */ "./src/app/components/dodaj/dodaj.component.css")]
        }),
        __metadata("design:paramtypes", [_objava_service__WEBPACK_IMPORTED_MODULE_3__["ObjavaService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DodajComponent);
    return DodajComponent;
}());



/***/ }),

/***/ "./src/app/components/galerija/galerija.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/galerija/galerija.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#fch{\r\n    width: 200px;\r\n}"

/***/ }),

/***/ "./src/app/components/galerija/galerija.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/galerija/galerija.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n    <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"card float-md-right mb-3 text-dark bg-light\" id=\"fch\">\n                    <div class=\"container\">\n                        <form class=\"m-3\">\n                            <div class=\"form-check\" (change)=\"promeni(k[0])\" *ngFor=\"let k of sveKategorije\" >\n                                <input class=\"form-check-input\" type=\"checkbox\" value=\"{{k[0]}}\" id=\"{{k[0]}}\">\n                                <label class=\"form-check-label\" for=\"{{k[0]}}\">\n                                    {{k[0]}}\n                                </label>\n                            </div>\n\n                            <button class=\"btn btn-secondary float-right my-3\" (click)=\"filter()\">Potvrdi</button>\n                        </form>  \n                    </div>\n                </div>\n            </div>\n\n        <div class=\"col-md-8\">\n            <div class=\"card text-dark bg-light mb-5\" *ngFor=\"let o of prikaz\">\n                <div class=\"card-header\">\n                    <div class=\"container d-flex flex-row\">\n                        <div class=\"align-self-start\">\n                            <div class=\"d-block\">{{o.naziv}}</div>\n                            <small>{{o.kategorija}}</small>\n                        </div>\n\n                        <div class=\"align-self-end ml-auto\">\n                            <button class=\"btn btn-warning\" (click)=\"naDetalje(o._id)\">Detalji</button> \n                        </div>\n                        \n                    </div>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"container row\">\n                        <div class=\"col-sm-6 float-top float-sm-left\">\n                            <img src=\"http://localhost:4000/{{o.glavnaslika}}\" class=\"img-fluid my-3\">\n                        </div>\n                        <div class=\"col-sm-6 float-sm-right\">\n                                <p class=\"card-text mx-3 my-3\">{{o.opis}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/galerija/galerija.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/galerija/galerija.component.ts ***!
  \***********************************************************/
/*! exports provided: GalerijaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalerijaComponent", function() { return GalerijaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objava_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objava.service */ "./src/app/objava.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalerijaComponent = /** @class */ (function () {
    function GalerijaComponent(objavaService, router) {
        this.objavaService = objavaService;
        this.router = router;
        this.sveKategorije = [
            ["Kupatilo", false],
            ["Kuhinja", false],
            ["Dnevna soba", false],
            ["Spavaca soba", false],
            ["Restoran", false],
            ["Orman", false],
            ["Terasa", false],
            ["Hodnik", false],
            ["Ostalo", false]
        ];
    }
    GalerijaComponent.prototype.ngOnInit = function () {
        this.uzmiObjave();
    };
    GalerijaComponent.prototype.filter = function () {
        this.prikaz = [];
        var pr = [];
        for (var _i = 0, _a = this.sveKategorije; _i < _a.length; _i++) {
            var k = _a[_i];
            if (k[1])
                pr.push(k[0]);
        }
        console.log(pr);
        if (pr.length == 0)
            this.prikaz = this.objave;
        else {
            for (var _b = 0, _c = this.objave; _b < _c.length; _b++) {
                var o = _c[_b];
                for (var _d = 0, pr_1 = pr; _d < pr_1.length; _d++) {
                    var p = pr_1[_d];
                    if (o.kategorija == p)
                        this.prikaz.push(o);
                }
            }
        }
        console.log(this.prikaz);
    };
    GalerijaComponent.prototype.promeni = function (el) {
        for (var _i = 0, _a = this.sveKategorije; _i < _a.length; _i++) {
            var k = _a[_i];
            if (k[0] == el)
                k[1] = !k[1];
        }
    };
    GalerijaComponent.prototype.uzmiObjave = function () {
        var _this = this;
        this.objavaService.uzmiSveObjave().subscribe(function (data) {
            _this.objave = data;
            _this.prikaz = _this.objave;
        });
    };
    GalerijaComponent.prototype.naDetalje = function (id) {
        return this.router.navigate(["/galerija/detalji/" + id]);
    };
    GalerijaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-galerija',
            template: __webpack_require__(/*! ./galerija.component.html */ "./src/app/components/galerija/galerija.component.html"),
            styles: [__webpack_require__(/*! ./galerija.component.css */ "./src/app/components/galerija/galerija.component.css")]
        }),
        __metadata("design:paramtypes", [_objava_service__WEBPACK_IMPORTED_MODULE_1__["ObjavaService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GalerijaComponent);
    return GalerijaComponent;
}());



/***/ }),

/***/ "./src/app/components/izmeni/izmeni.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/izmeni/izmeni.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/izmeni/izmeni.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/izmeni/izmeni.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"isadm()\">\n  <form enctype=\"multipart/form-data\" action=\"/galerija/izmeni\" method=\"POST\" >\n      <div class=\"form-group\">\n          <label for=\"naziv\">Naziv</label>\n          <input type=\"text\" name=\"naziv\" id=\"naziv\" [(ngModel)]=\"naziv\" >\n      </div>\n      <div class=\"form-group\">\n          <label for=\"kategorija\">Kategorija</label>\n          <select class=\"custom-select\" name=\"kategorija\" id=\"kategorija\" [(ngModel)]=\"kategorija\" >\n              <option *ngFor=\"let k of svekategorije\" [value]=\"k\">{{k}}</option>\n          </select>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"opis\">Opis</label>\n          <textarea class=\"form-control\" name=\"opis\" id=\"opis\" rows=\"5\" [(ngModel)]=\"opis\"></textarea>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"slika\">Glavna slika</label>\n          <input type=\"file\" class=\"form-control-file\" id=\"slika\" name=\"slika\" (change)=\"dodajSliku($event)\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"slika\">Slike: </label>\n          <input type=\"file\" class=\"form-control-file\" id=\"ss\" name=\"ss\" (change)=\"dodajSs($event)\" multiple >\n      </div>\n      <button class=\"btn btn-success\"\n          (click)=\"izmeniObjavu()\"\n      >\n          Sacuvaj\n      </button>\n  </form>\n</div>\n\n<div class=\"container pt-5 mt-5\" *ngIf=\"!isadm()\">\n        <h1>Stranica ne postoji</h1>\n</div>"

/***/ }),

/***/ "./src/app/components/izmeni/izmeni.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/izmeni/izmeni.component.ts ***!
  \*******************************************************/
/*! exports provided: IzmeniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IzmeniComponent", function() { return IzmeniComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objava_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objava.service */ "./src/app/objava.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IzmeniComponent = /** @class */ (function () {
    function IzmeniComponent(objavaService, ar, router) {
        this.objavaService = objavaService;
        this.ar = ar;
        this.router = router;
        this.svekategorije = ['Kupatilo', 'Kuhinja', 'Dnevna soba', 'Spavaca soba', 'Restoran', 'Orman', 'Terasa', 'Hodnik', 'Ostalo'];
    }
    IzmeniComponent.prototype.ngOnInit = function () {
        this.uzmiObjavu();
        this.adm = localStorage.getItem("admin");
    };
    IzmeniComponent.prototype.isadm = function () {
        if (this.adm == "da")
            return true;
        else
            return false;
    };
    IzmeniComponent.prototype.dodajSliku = function (event) {
        this.slika = event.target.files[0];
    };
    IzmeniComponent.prototype.dodajSs = function (event) {
        this.sveslike = event.target.files;
    };
    IzmeniComponent.prototype.uzmiObjavu = function () {
        var _this = this;
        this.ar.params.subscribe(function (par) {
            _this.id = par['id'];
            _this.objavaService.uzmiObjavu(_this.id).subscribe(function (data) {
                _this.naziv = data.naziv;
                _this.kategorija = data.kategorija;
                _this.opis = data.opis;
                _this.slika = data.glavnaslika;
                _this.sveslike = data.sveslike;
            });
        });
    };
    IzmeniComponent.prototype.izmeniObjavu = function () {
        var _this = this;
        var f = new FormData();
        f.append("naziv", this.naziv);
        f.append("kategorija", this.kategorija);
        f.append("opis", this.opis);
        f.append("slika", this.slika);
        for (var x = 0; x < this.sveslike.length; x++) {
            f.append("sveslike", this.sveslike[x]);
        }
        console.log(f);
        this.objavaService.izmeniObjavu(f, this.id).subscribe(function () {
            _this.router.navigate(['/galerija']);
        }, function (error) {
            console.log(error);
        });
    };
    IzmeniComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-izmeni',
            template: __webpack_require__(/*! ./izmeni.component.html */ "./src/app/components/izmeni/izmeni.component.html"),
            styles: [__webpack_require__(/*! ./izmeni.component.css */ "./src/app/components/izmeni/izmeni.component.css")]
        }),
        __metadata("design:paramtypes", [_objava_service__WEBPACK_IMPORTED_MODULE_1__["ObjavaService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IzmeniComponent);
    return IzmeniComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <form action=\"/signup\" method=\"POST\">\n        <div class=\"form-group\">\n          <label for=\"korisnickoime\"> Korisnicko ime :</label>\n          <input type=\"text\" id=\"korisnickoime\" name=\"korisnickoime\" class=\"form-control\" [(ngModel)]=\"korisnickoime\"  >\n        </div>\n        <div class=\"form-group\">\n          <label for=\"sifra\"> Sifra :</label>\n          <input type=\"password\" id=\"sifra\" name=\"sifra\" class=\"form-control\" [(ngModel)]=\"sifra\"  >\n        </div>\n        <a href=\"/\"><button (click)=\"login()\" class=\"btn btn-primary btn-lg\">Prijavi se</button></a>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objava_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objava.service */ "./src/app/objava.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(objavaService, router) {
        this.objavaService = objavaService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var korisnik = {
            "korisnickoime": this.korisnickoime,
            "sifra": this.sifra
        };
        this.objavaService.login(korisnik);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_objava_service__WEBPACK_IMPORTED_MODULE_1__["ObjavaService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/pocetna/pocetna.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/pocetna/pocetna.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#vrh {\r\n    background: url(\"/assets/images/pocetna_naslovna.jpg\") no-repeat;\r\n    background-size: cover;\r\n    background-attachment: scroll;\r\n    margin: 0;\r\n    min-height: 850px;\r\n}\r\n#vrh .dark-overlay {\r\n    background-color: rgba(0,0,0,0.8);\r\n    min-height: 850px;\r\n    width: 100%;\r\n    color: #fff;\r\n}\r\n#vrh .fa {\r\n    color: #385000;\r\n    background-color: #fff;\r\n    font-size: 40px;\r\n    width: 40px;\r\n    border-radius: 5px;\r\n}\r\n#vrh #top-tekst {\r\n    padding-top: 90px;\r\n    padding-bottom: 10px;\r\n}\r\n#o-nama-head {\r\n    padding-top: 1px;\r\n}\r\n#o-nama-body{\r\n    padding: 1px;\r\n    margin-top: 10px;\r\n}\r\n.naslov{\r\n    background-color: #5b7444;\r\n}\r\n#kontakt-head {\r\n    padding-top: 1px;\r\n}\r\n#kontakt-body{\r\n    padding: 1px;\r\n    margin-top: 10px;\r\n}\r\n#kontakt-body #mala-mapa {\r\n    width: 50%;\r\n    height: auto;\r\n}\r\n#kontakt-body #zoom-dugme {\r\n    position: absolute;\r\n    top: 100px;\r\n    left: 20px;\r\n    font-size: 20px;\r\n}"

/***/ }),

/***/ "./src/app/components/pocetna/pocetna.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/pocetna/pocetna.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"vrh\">\n  <div class=\"dark-overlay\">\n    <div class=\"header-slika\">\n        <div class=\"container\">\n            <div class=\"row\" id=\"top-tekst\">\n                <div class=\"col-md-7\">\n                    <h1 class=\"display-3\"><strong>Za dom po vasoj meri</strong></h1>\n\n                    <div class=\"d-flex flex-row\">\n                        <div class=\"p-4 align-self-start\">\n                            <i class=\"fa fa-check\"></i>\n                        </div>\n                        <div class=\"p-4 align-self-end\">\n                            <h1 class=\"display-5\">Unikatan namestaj stvoren da ispuni sve vase zelje.</h1>\n                        </div>\n                    </div>\n                    <div class=\"d-flex flex-row\">\n                        <div class=\"p-4 align-self-start\">\n                            <i class=\"fa fa-check\"></i>\n                        </div>\n                        <div class=\"p-4 align-self-end\">\n                            <h1 class=\"display-5\">Usluge dostave i montaze u najkracem vremenskom roku. </h1>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container float-lg-right\">\n        <div class=\"d-md-flex flex-row\">\n            <div><h1 class=\"display-5\">Pronadjite ideju u galeriji nasih radova!</h1></div>\n            <div class=\"align-self-end pl-3 pb-2\"><a routerLink=\"/galerija\" class=\"btn btn-lg btn-outline-success\">Galerija</a></div>\n        </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"o-nama\">\n    <div class=\"naslov\" id=\"o-nama-head\">\n        <div class=\"container\">\n            <div class=\"col text-center justify-self-center\">\n                <h1 class=\"py-5 display-3\"><strong>O nama</strong></h1>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"o-nama-body\">\n        <div class=\"container\">\n            <div class=\"pt-4 row\">\n                <div class=\"col-md-6 align-self-center justify-self-center\">\n                    <img src=\"/assets/images/pocetna_onama.jpg\" alt=\"o-nama\" class=\"img-fluid mb-3 rounded-circle\">\n                </div>\n                <div class=\"col-md-6\">\n                    <h3 class=\"display-5\"><strong>Lorem ipsum dolor sit amet.</strong></h3>\n                    <div class=\"d-flex flex-row\">\n                        <div class=\"p-4 align-self-start\">\n                            <i class=\"fa fa-check\"></i>\n                        </div>\n                        <div class=\"p-4 align-self-end\">\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, architecto, quaerat. Quis cum eius itaque ipsa magni quam, illo molestias\n                        </div>\n                    </div>\n                    <div class=\"d-flex flex-row\">\n                        <div class=\"p-4 align-self-start\">\n                            <i class=\"fa fa-check\"></i>\n                        </div>\n                        <div class=\"p-4 align-self-end\">\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, architecto, quaerat. Quis cum eius itaque ipsa magni quam, illo molestias\n                        </div>\n                    </div>\n                    <div class=\"d-flex flex-row\">\n                        <div class=\"p-4 align-self-start\">\n                            <i class=\"fa fa-check\"></i>\n                        </div>\n                        <div class=\"p-4 align-self-end\">\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, architecto, quaerat. Quis cum eius itaque ipsa magni quam, illo molestias\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div id=\"kontakt\" class=\"mb-5\">\n    <div class=\"naslov\" id=\"kontakt-head\">\n        <div class=\"container\">\n            <div class=\"col text-center justify-self-center\">\n                <h1 class=\"py-5 display-3\"><strong>Kontakt</strong></h1>\n            </div>\n        </div>\n    </div>\n    <div class=\"container pt-4\" id=\"kontakt-body\">\n        <div class=\"row\">\n            <div class=\"col-md-6 align-self-center mx-auto\">\n                <strong>Broj telefona:</strong> 060/000-00-00 <br>\n                <strong>Adresa:</strong> Pere perica 32, Novi Sad (Klisa)<br>\n                <strong>Mail adresa:</strong> szrugao@gmail.com<br>\n                <br>\n                <img src=\"/assets/images/mm.jpg\" alt=\"mala-mapa\" id=\"mala-mapa\" class=\"img-fluid img-thumbnail\">\n                <button class=\"btn btn-dark\" data-toggle=\"modal\" data-target=\"#mapa\" id=\"zoom-dugme\"><i class=\"fa fa-search-plus\"></i></button>\n                \n                <div class=\"modal\" id=\"mapa\">\n                    <div class=\"modal-dialog modal-lg\">\n                        <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                                <h4 class=\"modal-title\">Adresa radionice</h4>\n                                <button class=\"close\" data-dismiss=\"modal\">&times;</button>\n                            </div>\n                            <div class=\"modal-body\">\n                                <img src=\"/assets/images/mv.jpg\" alt=\"velika-mapa\" class=\"img-thumbnail img-fluid\">\n                            </div>\n                            <div class=\"modal-footer\">\n                                <button class=\"btn btn-warning\" data-dismiss=\"modal\">Zatvori</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                        \n                    \n            </div>\n            <div class=\"col-md-6\">\n                <h3 class=\"display-5\">Kontaktirajte nas:</h3>\n                <form action=\"/\" method=\"POST\" >\n                    <div class=\"form-group\">\n                        <label for=\"ime\">Ime</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ime\" name=\"ime\" id=\"ime\" placeholder=\"Unesite ime...\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"mail\">Mail adresa</label>\n                        <input type=\"text\" class=\"form-control\" name=\"mail\" [(ngModel)]=\"mail\" id=\"mail\" placeholder=\"Unesite vasu e-mail adresu...\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"telefon\">Broj telefona</label>\n                        <input type=\"text\" class=\"form-control\" name=\"broj\" id=\"broj\" [(ngModel)]=\"broj\" placeholder=\"Unesite broj telefona...\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"poruka\">Poruka</label>\n                        <textarea class=\"form-control\" id=\"poruka\" name=\"poruka\" [(ngModel)]=\"poruka\" placeholder=\"Unesite poruku...\" rows=\"5\"></textarea>\n                    </div>\n                    <button type=\"submit\" (click)=\"posaljiPoruku()\" class=\"btn btn-primary float-right\">Posalji</button>\n                </form>\n                \n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/pocetna/pocetna.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pocetna/pocetna.component.ts ***!
  \*********************************************************/
/*! exports provided: PocetnaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PocetnaComponent", function() { return PocetnaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objava_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objava.service */ "./src/app/objava.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PocetnaComponent = /** @class */ (function () {
    function PocetnaComponent(objavaService) {
        this.objavaService = objavaService;
    }
    PocetnaComponent.prototype.ngOnInit = function () {
    };
    PocetnaComponent.prototype.posaljiPoruku = function () {
        var _this = this;
        var f = new FormData();
        var n = this.ime + '|' + this.broj + '|' + this.mail;
        f.append("naziv", n);
        f.append("opis", this.poruka);
        this.objavaService.posaljiPoruku(f).subscribe(function () {
            alert('Poruka je poslata, odgovor cete dobiti uskoro na ' + _this.mail);
        });
    };
    PocetnaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pocetna',
            template: __webpack_require__(/*! ./pocetna.component.html */ "./src/app/components/pocetna/pocetna.component.html"),
            styles: [__webpack_require__(/*! ./pocetna.component.css */ "./src/app/components/pocetna/pocetna.component.css")]
        }),
        __metadata("design:paramtypes", [_objava_service__WEBPACK_IMPORTED_MODULE_1__["ObjavaService"]])
    ], PocetnaComponent);
    return PocetnaComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <form action=\"/signup\" method=\"POST\">\n        <div class=\"form-group\">\n          <label for=\"korisnickoime\"> Korisnicko ime :</label>\n          <input type=\"text\" id=\"korisnickoime\" name=\"korisnickoime\" class=\"form-control\" [(ngModel)]=\"korisnickoime\"  >\n        </div>\n        <div class=\"form-group\">\n          <label for=\"sifra\"> Sifra :</label>\n          <input type=\"password\" id=\"sifra\" name=\"sifra\" class=\"form-control\" [(ngModel)]=\"sifra\"  >\n        </div>\n        <a href=\"/\"><button (click)=\"registracija()\" class=\"btn btn-primary btn-lg\">Prijavi se</button></a>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objava_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objava.service */ "./src/app/objava.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(objavaService, router) {
        this.objavaService = objavaService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.registracija = function () {
        var noviKorisnik = {
            "korisnickoime": this.korisnickoime,
            "sifra": this.sifra
        };
        this.objavaService.signup(noviKorisnik).subscribe(function () {
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_objava_service__WEBPACK_IMPORTED_MODULE_1__["ObjavaService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/objava.service.ts":
/*!***********************************!*\
  !*** ./src/app/objava.service.ts ***!
  \***********************************/
/*! exports provided: ObjavaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjavaService", function() { return ObjavaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ObjavaService = /** @class */ (function () {
    function ObjavaService(http) {
        this.http = http;
        this.uri = "http://localhost:4000";
    }
    ObjavaService.prototype.uzmiSveObjave = function () {
        return this.http.get(this.uri + '/galerija');
    };
    ObjavaService.prototype.uzmiObjavu = function (id) {
        return this.http.get(this.uri + ("/galerija/detalji/" + id));
    };
    ObjavaService.prototype.dodajObjavu = function (f) {
        var h;
        h = this.kh();
        alert("objava dodata");
        return this.http.post(this.uri + '/galerija/dodaj', f, { headers: h });
    };
    ObjavaService.prototype.izmeniObjavu = function (f, id) {
        var h;
        h = this.kh();
        alert("izmena:  " + id);
        return this.http.post(this.uri + ("/galerija/izmeni/" + id), f, { headers: h });
    };
    ObjavaService.prototype.obrisiObjavu = function (id) {
        var h;
        h = this.kh();
        alert("brisanje:  " + id);
        return this.http.get(this.uri + ("/galerija/obrisi/" + id), { headers: h });
    };
    ObjavaService.prototype.posaljiPoruku = function (f) {
        return this.http.post(this.uri + '/posaljiporuku', f);
    };
    ObjavaService.prototype.uzmiPoruke = function () {
        var h;
        h = this.kh();
        return this.http.get(this.uri + "/admin", { headers: h });
    };
    ObjavaService.prototype.signup = function (nk) {
        return this.http.post(this.uri + "/signup", nk);
    };
    ObjavaService.prototype.login = function (k) {
        return this.http.post(this.uri + "/login", k).subscribe(function (res) {
            var t = res['t'];
            localStorage.setItem("token", t);
            if (res['i'] == "admin")
                localStorage.setItem("admin", "da");
            else
                localStorage.setItem("admin", "ne");
        });
    };
    ObjavaService.prototype.korisnik = function () {
        return localStorage.getItem('token');
    };
    ObjavaService.prototype.odjava = function () {
        localStorage.clear();
    };
    ObjavaService.prototype.kh = function () {
        console.log(localStorage.getItem('token'));
        var h = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Authorization": "Bearer " + localStorage.getItem("token") });
        return h;
    };
    ObjavaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ObjavaService);
    return ObjavaService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Gagi\Desktop\duletovsajt\front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map