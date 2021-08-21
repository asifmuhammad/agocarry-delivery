(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tnc-tnc-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tnc/tnc.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tnc/tnc.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button></ion-menu-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{'terms_conditions' | translate}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"container\">\n\t\t<p [innerHTML]=\"privacy_policy\"></p>\n\t</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/tnc/tnc-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/tnc/tnc-routing.module.ts ***!
  \*******************************************/
/*! exports provided: TncPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TncPageRoutingModule", function() { return TncPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tnc_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tnc.page */ "./src/app/tnc/tnc.page.ts");




const routes = [
    {
        path: '',
        component: _tnc_page__WEBPACK_IMPORTED_MODULE_3__["TncPage"]
    }
];
let TncPageRoutingModule = class TncPageRoutingModule {
};
TncPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TncPageRoutingModule);



/***/ }),

/***/ "./src/app/tnc/tnc.module.ts":
/*!***********************************!*\
  !*** ./src/app/tnc/tnc.module.ts ***!
  \***********************************/
/*! exports provided: TncPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TncPageModule", function() { return TncPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tnc_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tnc-routing.module */ "./src/app/tnc/tnc-routing.module.ts");
/* harmony import */ var _tnc_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tnc.page */ "./src/app/tnc/tnc.page.ts");








let TncPageModule = class TncPageModule {
};
TncPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _tnc_routing_module__WEBPACK_IMPORTED_MODULE_6__["TncPageRoutingModule"]
        ],
        declarations: [_tnc_page__WEBPACK_IMPORTED_MODULE_7__["TncPage"]]
    })
], TncPageModule);



/***/ }),

/***/ "./src/app/tnc/tnc.page.scss":
/*!***********************************!*\
  !*** ./src/app/tnc/tnc.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: calc(100% - 45px);\n  margin: 0 auto;\n  padding-top: 20px;\n}\n.container p {\n  margin: 0;\n  margin-bottom: 20px;\n  font-weight: 400;\n  font-size: 1.1rem;\n  line-height: 23px;\n  letter-spacing: 0.3px;\n  color: var(--text-black);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG5jL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWRlbGl2ZXJ5L3NyY1xcYXBwXFx0bmNcXHRuYy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RuYy90bmMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRENJO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvdG5jL3RuYy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDVweCk7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuM3B4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gICAgfVxufSAiLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ1cHgpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uY29udGFpbmVyIHAge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG59Il19 */");

/***/ }),

/***/ "./src/app/tnc/tnc.page.ts":
/*!*********************************!*\
  !*** ./src/app/tnc/tnc.page.ts ***!
  \*********************************/
/*! exports provided: TncPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TncPage", function() { return TncPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");



let TncPage = class TncPage {
    constructor() { }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.privacy_policy = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__["Helper"].getSettingValue("terms");
    }
};
TncPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tnc',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tnc.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tnc/tnc.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tnc.page.scss */ "./src/app/tnc/tnc.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TncPage);



/***/ })

}]);
//# sourceMappingURL=tnc-tnc-module-es2015.js.map