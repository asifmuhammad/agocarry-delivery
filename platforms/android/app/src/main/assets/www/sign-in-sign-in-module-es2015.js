(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n<ion-header>\n  <ion-toolbar>\n    <ion-title>sign-in</ion-title>\n  </ion-toolbar>\n</ion-header>\n-->\n\n<ion-content class=\"bg_color\">\n    <div class=\"banner\">\n        <div class=\"logo_box\">\n            <img src=\"assets/images/logo.png\">\n        </div>\n\n        <div class=\"banner_images\">\n            <img src=\"assets/images/hero_image.png\">\n        </div>\n\n        <div class=\"form\">\n            <ion-list lines=\"none\">\n                <ion-item lines=\"none\">\n                    <div class=\"ite_inner d-flex\">\n                        <ion-icon class=\"zmdi zmdi-globe-alt ion-text-start\"></ion-icon>\n                        <ion-label mode=\"md\" position=\"fixed\">{{\"select_country\" | translate}}</ion-label>\n                        <ion-select placeholder=\"{{'select_country' | translate}}\" mode=\"md\" [(ngModel)]=\"countryCode\" multiple=\"false\" [okText]=\"'okay' | translate\" [cancelText]=\"'cancel' | translate\" (ionChange)=\"changeHint()\">\n                            <ion-select-option *ngFor=\"let country of countries\" [value]=\"country.callingCodes[0]\">\n                                {{country.name}}\n                            </ion-select-option>\n                        </ion-select>\n                    </div>\n                </ion-item>\n                <ion-item lines=\"none\">\n                    <div class=\"ite_inner d-flex\">\n                        <ion-icon class=\"zmdi zmdi-smartphone-iphone ion-text-start\"></ion-icon>\n                        <ion-input type=\"tel\" [(ngModel)]=\"phoneNumber\" (keyup.enter)=\"alertPhone()\" placeholder=\"{{phoneNumberHint}}\">\n                        </ion-input>\n                    </div>\n                </ion-item>\n                <ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"alertPhone()\">\n                    {{'continue' | translate}}\n                </ion-button>\n            </ion-list>\n        </div>\n    </div>\n\n    <!-- <div class=\"quick_signin\">\n        <h4 class=\"ion-text-center\">{{'or_quick_continue_withh' | translate}}</h4>\n        <ion-row>\n            <ion-col size=\"6\">\n                <ion-button size=\"large\" shape=\"block\" class=\"btn facebook\" (click)=\"tabs()\">\n                    <img slot=\"start\" src=\"assets/images/fb.png\">\n                    {{'facebook' | translate}}\n                </ion-button>\n            </ion-col>\n\n            <ion-col size=\"6\">\n                <ion-button size=\"large\" shape=\"block\" class=\"btn gmail\" (click)=\"tabs()\">\n                    <img slot=\"start\" src=\"assets/images/google.png\">\n                    {{'gmail' | translate}}\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </div> -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/sign-in/sign-in-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/sign-in/sign-in-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SignInPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageRoutingModule", function() { return SignInPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/sign-in/sign-in.page.ts");




const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_3__["SignInPage"]
    }
];
let SignInPageRoutingModule = class SignInPageRoutingModule {
};
SignInPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignInPageRoutingModule);



/***/ }),

/***/ "./src/app/sign-in/sign-in.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.module.ts ***!
  \*******************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in-routing.module */ "./src/app/sign-in/sign-in-routing.module.ts");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/sign-in/sign-in.page.ts");








let SignInPageModule = class SignInPageModule {
};
SignInPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignInPageRoutingModule"]
        ],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_7__["SignInPage"]]
    })
], SignInPageModule);



/***/ }),

/***/ "./src/app/sign-in/sign-in.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  --background: none !important;\n}\n\n.banner {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.banner::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 168px);\n  background: var(--bg-secondary);\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.banner .logo_box {\n  position: relative;\n  z-index: 99;\n  display: flex;\n  align-items: center;\n  height: 200px;\n}\n\n.banner .logo_box img {\n  width: 145px;\n  display: block;\n  margin: auto;\n}\n\n.banner .welcome_text {\n  position: relative;\n  z-index: 99;\n  color: var(--white);\n  padding: 0 20px;\n  margin-bottom: 60px;\n}\n\n.banner .welcome_text h2 {\n  margin: 0;\n  font-size: 1.35rem;\n  font-weight: 400;\n  margin-bottom: 13px;\n}\n\n.banner .welcome_text h3 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 400;\n}\n\n.banner .banner_images {\n  position: relative;\n}\n\n.banner .banner_images img {\n  display: block;\n  margin: 0 auto;\n  width: 300px;\n}\n\n.banner .form ion-item {\n  background: var(--white);\n}\n\n.banner .form ion-item.item-input ion-label {\n  max-width: unset !important;\n  width: -webkit-fit-content !important;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\n.banner .form ion-item.item-select {\n  padding: 2px 13px;\n}\n\n.banner .form ion-item.item-select ion-label {\n  display: none;\n}\n\n.banner .button.btn.button-block {\n  margin-top: 20px !important;\n}\n\n.quick_signin {\n  width: calc(100% - 40px);\n  margin: 0 auto;\n}\n\n.quick_signin h4 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  margin-bottom: 25px;\n}\n\n.quick_signin ion-row {\n  margin: 0 -10px;\n}\n\n.quick_signin ion-row ion-col {\n  padding: 0 10px !important;\n}\n\n.quick_signin .button.btn {\n  font-size: 1rem !important;\n}\n\n.quick_signin .button.btn img {\n  width: 18px;\n  position: relative;\n  left: -11px;\n}\n\n.quick_signin .button.btn.facebook {\n  --background: #3c5a9a !important;\n}\n\n.quick_signin .button.btn.gmail {\n  --background: #fff !important;\n  color: #000 !important;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi9GOlxcZml2ZXJcXEJlcm5hcmRcXEFnb2NhcnJ5XFxhZ29jYXJyeS1kZWxpdmVyeS9zcmNcXGFwcFxcc2lnbi1pblxcc2lnbi1pbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUVBLG1CQUFBO0FDQUo7O0FERUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDQVI7O0FER0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDRFI7O0FER1E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNEWjs7QURLSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDSFI7O0FES1E7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSFo7O0FETVE7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSlo7O0FEUUk7RUFDSSxrQkFBQTtBQ05SOztBRFFRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDTlo7O0FEVUk7RUFDSSx3QkFBQTtBQ1JSOztBRFlZO0VBQ0ksMkJBQUE7RUFDQSxxQ0FBQTtFQUFBLGtDQUFBO0VBQUEsNkJBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUNWaEI7O0FEYVE7RUFDSSxpQkFBQTtBQ1haOztBRFlZO0VBQ0ksYUFBQTtBQ1ZoQjs7QURlSTtFQUNJLDJCQUFBO0FDYlI7O0FEaUJBO0VBQ0ksd0JBQUE7RUFDQSxjQUFBO0FDZEo7O0FEZ0JJO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDZFI7O0FEaUJJO0VBQ0ksZUFBQTtBQ2ZSOztBRGlCUTtFQUNJLDBCQUFBO0FDZlo7O0FEbUJJO0VBQ0ksMEJBQUE7QUNqQlI7O0FEbUJRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ2pCWjs7QURvQlE7RUFDSSxnQ0FBQTtBQ2xCWjs7QURxQlE7RUFDSSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNuQloiLCJmaWxlIjoic3JjL2FwcC9zaWduLWluL3NpZ24taW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIC0tYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYmFubmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTY4cHgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuXG4gICAgLmxvZ29fYm94IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDE0NXB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAud2VsY29tZV90ZXh0IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5iYW5uZXJfaW1hZ2VzIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmZvcm0gaW9uLWl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIC8vICAgICAgICBwYWRkaW5nOiAycHggMjBweDtcblxuICAgICAgICAmLml0ZW0taW5wdXQge1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLml0ZW0tc2VsZWN0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCAxM3B4O1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJ1dHRvbi5idG4uYnV0dG9uLWJsb2NrIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLnF1aWNrX3NpZ25pbiB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgaDQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICB9XG5cbiAgICBpb24tcm93IHtcbiAgICAgICAgbWFyZ2luOiAwIC0xMHB4O1xuXG4gICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYnV0dG9uLmJ0biB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGxlZnQ6IC0xMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5mYWNlYm9vayB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMzYzVhOWEgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuZ21haWwge1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIC0tYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYmFubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5iYW5uZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNjhweCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5iYW5uZXIgLmxvZ29fYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbi5iYW5uZXIgLmxvZ29fYm94IGltZyB7XG4gIHdpZHRoOiAxNDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5iYW5uZXIgLndlbGNvbWVfdGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbn1cbi5iYW5uZXIgLndlbGNvbWVfdGV4dCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xufVxuLmJhbm5lciAud2VsY29tZV90ZXh0IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uYmFubmVyIC5iYW5uZXJfaW1hZ2VzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJhbm5lciAuYmFubmVyX2ltYWdlcyBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAzMDBweDtcbn1cbi5iYW5uZXIgLmZvcm0gaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG59XG4uYmFubmVyIC5mb3JtIGlvbi1pdGVtLml0ZW0taW5wdXQgaW9uLWxhYmVsIHtcbiAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5iYW5uZXIgLmZvcm0gaW9uLWl0ZW0uaXRlbS1zZWxlY3Qge1xuICBwYWRkaW5nOiAycHggMTNweDtcbn1cbi5iYW5uZXIgLmZvcm0gaW9uLWl0ZW0uaXRlbS1zZWxlY3QgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5iYW5uZXIgLmJ1dHRvbi5idG4uYnV0dG9uLWJsb2NrIHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ucXVpY2tfc2lnbmluIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5xdWlja19zaWduaW4gaDQge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5xdWlja19zaWduaW4gaW9uLXJvdyB7XG4gIG1hcmdpbjogMCAtMTBweDtcbn1cbi5xdWlja19zaWduaW4gaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XG59XG4ucXVpY2tfc2lnbmluIC5idXR0b24uYnRuIHtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG59XG4ucXVpY2tfc2lnbmluIC5idXR0b24uYnRuIGltZyB7XG4gIHdpZHRoOiAxOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xMXB4O1xufVxuLnF1aWNrX3NpZ25pbiAuYnV0dG9uLmJ0bi5mYWNlYm9vayB7XG4gIC0tYmFja2dyb3VuZDogIzNjNWE5YSAhaW1wb3J0YW50O1xufVxuLnF1aWNrX3NpZ25pbiAuYnV0dG9uLmJ0bi5nbWFpbCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/sign-in/sign-in.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sign-in/sign-in.page.ts ***!
  \*****************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/events/my-events.service */ "./src/app/services/events/my-events.service.ts");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/network/api.service */ "./src/app/services/network/api.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_models_constants_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/models/constants.models */ "./src/models/constants.models.ts");
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");










let SignInPage = class SignInPage {
    constructor(config, navCtrl, myEvent, uiElementService, apiService, translate, alertCtrl, platform) {
        this.config = config;
        this.navCtrl = navCtrl;
        this.myEvent = myEvent;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
    }
    ngOnInit() {
        this.changeHint();
        this.apiService.getCountries().subscribe(res => { this.countries = res; this.changeHint(); });
    }
    // ionViewDidEnter() {
    //   this.changeHint();
    // }
    changeHint() {
        this.phoneNumber = "";
        if (this.countryCode && this.countryCode.length) {
            this.translate.get('enter_phone_number_exluding').subscribe(value => this.phoneNumberHint = (value + " (+" + this.countryCode + ")"));
        }
        else {
            this.translate.get('enter_phone_number').subscribe(value => this.phoneNumberHint = value);
        }
    }
    alertPhone() {
        if (!this.countryCode || !this.countryCode.length) {
            this.translate.get("select_country").subscribe(value => this.uiElementService.presentToast(value));
            return;
        }
        if (!this.phoneNumber || !this.phoneNumber.length) {
            this.uiElementService.presentToast(this.phoneNumberHint);
            return;
        }
        this.translate.get(['alert_phone', 'no', 'yes']).subscribe(text => {
            this.phoneNumberFull = "+" + this.countryCode + +src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatPhone(this.phoneNumber);
            this.alertCtrl.create({
                header: this.phoneNumberFull,
                message: text['alert_phone'],
                buttons: [{
                        text: text['no'],
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }, {
                        text: text['yes'],
                        handler: () => {
                            this.checkIfExists();
                        }
                    }]
            }).then(alert => alert.present());
        });
    }
    checkIfExists() {
        this.translate.get('just_moment').subscribe(value => {
            this.uiElementService.presentLoading(value);
            this.apiService.checkUser({ mobile_number: this.phoneNumberFull, role: src_models_constants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].ROLE_DELIVERY }).subscribe(res => {
                console.log(res);
                this.uiElementService.dismissLoading();
                let navigationExtras = { queryParams: { phoneNumberFull: this.phoneNumberFull } };
                this.navCtrl.navigateForward(['./verification'], navigationExtras);
            }, err => {
                console.log(err);
                this.uiElementService.dismissLoading();
                let navigationExtras = { queryParams: { code: this.countryCode, phone: this.phoneNumber } };
                this.navCtrl.navigateForward(['./register'], navigationExtras);
            });
        });
    }
};
SignInPage.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"],] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_4__["MyEventsService"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"] },
    { type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
SignInPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sign-in.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sign-in.page.scss */ "./src/app/sign-in/sign-in.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_4__["MyEventsService"],
        _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], SignInPage);



/***/ })

}]);
//# sourceMappingURL=sign-in-sign-in-module-es2015.js.map