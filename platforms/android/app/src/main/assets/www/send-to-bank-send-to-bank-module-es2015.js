(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["send-to-bank-send-to-bank-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/send-to-bank/send-to-bank.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/send-to-bank/send-to-bank.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{'send_to_bank' | translate}}</ion-title>\n    </ion-toolbar>\n    <div class=\"banner\">\n        <h2>{{'available_balance' | translate}}</h2>\n        <h1>{{currency_icon}}{{balance}}</h1>\n    </div>\n</ion-header>\n\n<ion-content class=\"bg_color\" fullscreen>\n    <div class=\"form\">\n        <ion-list lines=\"none\">\n            <ion-card>\n                <h2>{{'bank_info' | translate}}</h2>\n                <ion-item lines=\"none\">\n                    <ion-label mode=\"md\" position=\"stacked\">{{\"bank_name\" | translate}}</ion-label>\n                    <ion-input mode=\"md\" type=\"text\" [(ngModel)]=\"payourRequest.bank_name\"></ion-input>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                    <ion-label mode=\"md\" position=\"stacked\">{{\"bank_account_name\" | translate}}</ion-label>\n                    <ion-input mode=\"md\" type=\"text\" [(ngModel)]=\"payourRequest.bank_account_name\"></ion-input>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                    <ion-label mode=\"md\" position=\"stacked\">{{\"bank_account_number\" | translate}}</ion-label>\n                    <ion-input mode=\"md\" type=\"text\" [(ngModel)]=\"payourRequest.bank_account_number\"></ion-input>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                    <ion-label mode=\"md\" position=\"stacked\">{{\"bank_code\" | translate}}</ion-label>\n                    <ion-input mode=\"md\" type=\"text\" [(ngModel)]=\"payourRequest.bank_code\"></ion-input>\n                </ion-item>\n            </ion-card>\n\n        </ion-list>\n    </div>\n    <div class=\"form\">\n        <ion-list lines=\"none\">\n            <ion-card>\n                <ion-item lines=\"none\">\n                    <ion-label mode=\"md\" position=\"stacked\">{{'enter_amount_transfer' | translate}}</ion-label>\n                    <ion-input mode=\"md\" type=\"number\" [(ngModel)]=\"payourRequest.amount\"></ion-input>\n                </ion-item>\n            </ion-card>\n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n    <ion-button size=\"large\" expand=\"full\" class=\"btn\" (click)=\"submit()\">\n        {{'send_to_bank' | translate}}\n    </ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/send-to-bank/send-to-bank-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/send-to-bank/send-to-bank-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SendToBankPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendToBankPageRoutingModule", function() { return SendToBankPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _send_to_bank_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./send-to-bank.page */ "./src/app/send-to-bank/send-to-bank.page.ts");




const routes = [
    {
        path: '',
        component: _send_to_bank_page__WEBPACK_IMPORTED_MODULE_3__["SendToBankPage"]
    }
];
let SendToBankPageRoutingModule = class SendToBankPageRoutingModule {
};
SendToBankPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SendToBankPageRoutingModule);



/***/ }),

/***/ "./src/app/send-to-bank/send-to-bank.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/send-to-bank/send-to-bank.module.ts ***!
  \*****************************************************/
/*! exports provided: SendToBankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendToBankPageModule", function() { return SendToBankPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _send_to_bank_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-to-bank-routing.module */ "./src/app/send-to-bank/send-to-bank-routing.module.ts");
/* harmony import */ var _send_to_bank_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./send-to-bank.page */ "./src/app/send-to-bank/send-to-bank.page.ts");








let SendToBankPageModule = class SendToBankPageModule {
};
SendToBankPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _send_to_bank_routing_module__WEBPACK_IMPORTED_MODULE_6__["SendToBankPageRoutingModule"]
        ],
        declarations: [_send_to_bank_page__WEBPACK_IMPORTED_MODULE_7__["SendToBankPage"]]
    })
], SendToBankPageModule);



/***/ }),

/***/ "./src/app/send-to-bank/send-to-bank.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/send-to-bank/send-to-bank.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  background: var(--white);\n}\nion-header ion-toolbar ion-title .title_inner {\n  position: relative;\n  min-height: 60px;\n}\nion-header ion-toolbar ion-title span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\nion-header ion-toolbar ion-title ion-icon {\n  font-size: 1.4rem;\n  padding: 0 1px;\n  min-width: 20px;\n}\nion-header .banner {\n  position: relative;\n  z-index: 99;\n  padding: 20px;\n}\nion-header .banner h2 {\n  margin: 0;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  font-weight: 400;\n  letter-spacing: 1px;\n  padding-bottom: 4px;\n  color: var(--text-light2);\n}\nion-header .banner h1 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 2.35rem;\n  color: var(--text-black);\n}\n.form {\n  width: 100%;\n  margin-top: 8px;\n}\n.form ion-list ion-card {\n  width: 100%;\n  border-radius: 0;\n  background: var(--white);\n  margin: 0;\n  box-shadow: none;\n  margin-bottom: 10px;\n  padding: 19px 20px;\n}\n.form ion-list ion-card:last-child {\n  margin-bottom: 0;\n}\n.form ion-list ion-card h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.94rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  padding-bottom: 15px;\n  text-transform: uppercase;\n}\n.form ion-list ion-card ion-item {\n  margin-bottom: 0px;\n  background: none;\n  border-radius: 0;\n  padding: 0;\n}\n.form ion-list ion-card ion-item .item_inner {\n  width: 100%;\n}\n.form ion-list ion-card ion-item ion-label {\n  font-weight: 400;\n  font-size: 0.95rem !important;\n  margin-bottom: 0 !important;\n  letter-spacing: 0px !important;\n  color: var(--text-light) !important;\n  width: 100% !important;\n  max-width: 100% !important;\n  transition: unset;\n  transform: unset;\n}\n.form ion-list ion-card ion-item ion-input {\n  background: var(--info_field_bg);\n  border-radius: 6px;\n  padding: 0 16px !important;\n  min-height: 50px;\n  color: var(--text-dark);\n  font-size: 0.95rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC10by1iYW5rL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWRlbGl2ZXJ5L3NyY1xcYXBwXFxzZW5kLXRvLWJhbmtcXHNlbmQtdG8tYmFuay5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlbmQtdG8tYmFuay9zZW5kLXRvLWJhbmsucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7QUNDSjtBREVRO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0FaO0FER1E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNEWjtBRElRO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0ZaO0FETUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDSlI7QURNUTtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNKWjtBRE9RO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ0xaO0FEV0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ1JKO0FEV1E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNUWjtBRFdZO0VBQ0ksZ0JBQUE7QUNUaEI7QURZWTtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUNWaEI7QURhWTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNYaEI7QURhZ0I7RUFDSSxXQUFBO0FDWHBCO0FEY2dCO0VBQ0ksZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDWnBCO0FEZWdCO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FDYnBCIiwiZmlsZSI6InNyYy9hcHAvc2VuZC10by1iYW5rL3NlbmQtdG8tYmFuay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG5cbiAgICBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICAgICAgICAudGl0bGVfaW5uZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDFweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5iYW5uZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjM1cmVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi5mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTlweCAyMHB4O1xuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTRyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgICAgICAgLml0ZW1faW5uZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdW5zZXQ7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdW5zZXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5mb19maWVsZF9iZyk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC45NXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBwYWRkaW5nOiAwIDFweDtcbiAgbWluLXdpZHRoOiAyMHB4O1xufVxuaW9uLWhlYWRlciAuYmFubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbiAgcGFkZGluZzogMjBweDtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG59XG5pb24taGVhZGVyIC5iYW5uZXIgaDEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMi4zNXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xufVxuXG4uZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMTlweCAyMHB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQ6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC1zaXplOiAwLjk0cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCBpb24taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1jYXJkIGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuOTVyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogdW5zZXQ7XG4gIHRyYW5zZm9ybTogdW5zZXQ7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCBpb24taXRlbSBpb24taW5wdXQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmZvX2ZpZWxkX2JnKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAwIDE2cHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIGZvbnQtc2l6ZTogMC45NXJlbSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/send-to-bank/send-to-bank.page.ts":
/*!***************************************************!*\
  !*** ./src/app/send-to-bank/send-to-bank.page.ts ***!
  \***************************************************/
/*! exports provided: SendToBankPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendToBankPage", function() { return SendToBankPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/network/api.service */ "./src/app/services/network/api.service.ts");
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");
/* harmony import */ var src_models_payout_request_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/payout-request.models */ "./src/models/payout-request.models.ts");








let SendToBankPage = class SendToBankPage {
    constructor(navCtrl, translate, uiElementService, apiService) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.subscriptions = new Array();
        this.balance = 0;
        this.payourRequest = new src_models_payout_request_models__WEBPACK_IMPORTED_MODULE_7__["PayoutRequest"]();
    }
    ngOnInit() {
        this.currency_icon = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getSettingValue("currency_icon");
        this.refreshBalance();
    }
    ngOnDestroy() {
        for (let sub of this.subscriptions)
            sub.unsubscribe();
        this.uiElementService.dismissLoading();
    }
    refreshBalance() {
        this.subscriptions.push(this.apiService.getBalance().subscribe(res => this.balance = res.balance, err => console.log("getBalance", err)));
    }
    submit() {
        if (!this.payourRequest.bank_name || !this.payourRequest.bank_name.length) {
            this.translate.get("err_field_bank_name").subscribe(value => this.uiElementService.presentToast(value));
        }
        else if (!this.payourRequest.bank_account_name || !this.payourRequest.bank_account_name.length) {
            this.translate.get("err_field_bank_account_name").subscribe(value => this.uiElementService.presentToast(value));
        }
        else if (!this.payourRequest.bank_account_number || !this.payourRequest.bank_account_number.length) {
            this.translate.get("err_field_bank_account_number").subscribe(value => this.uiElementService.presentToast(value));
        }
        else if (!this.payourRequest.bank_code || !this.payourRequest.bank_code.length) {
            this.translate.get("err_field_bank_code").subscribe(value => this.uiElementService.presentToast(value));
        }
        else if (!this.payourRequest.amount || (this.payourRequest.amount > this.balance || this.payourRequest.amount < 0)) {
            this.translate.get("err_field_amount").subscribe(value => this.uiElementService.presentToast(value));
        }
        else {
            this.translate.get(["just_moment", "something_wrong"]).subscribe(values => {
                this.uiElementService.presentLoading(values["just_moment"]);
                this.subscriptions.push(this.apiService.walletTransfer(this.payourRequest).subscribe(res => {
                    src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].setBankDetail({
                        bank_name: this.payourRequest.bank_name,
                        bank_account_name: this.payourRequest.bank_account_name,
                        bank_account_number: this.payourRequest.bank_account_number
                    });
                    this.uiElementService.dismissLoading();
                    this.navCtrl.pop();
                }, err => {
                    console.log("updateOrder", err);
                    this.uiElementService.presentToast(values["something_wrong"]);
                    this.uiElementService.dismissLoading();
                    this.navCtrl.pop();
                }));
            });
        }
    }
};
SendToBankPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"] },
    { type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
SendToBankPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-send-to-bank',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./send-to-bank.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/send-to-bank/send-to-bank.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./send-to-bank.page.scss */ "./src/app/send-to-bank/send-to-bank.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
], SendToBankPage);



/***/ }),

/***/ "./src/models/payout-request.models.ts":
/*!*********************************************!*\
  !*** ./src/models/payout-request.models.ts ***!
  \*********************************************/
/*! exports provided: PayoutRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayoutRequest", function() { return PayoutRequest; });
/* harmony import */ var _helper_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.models */ "./src/models/helper.models.ts");

class PayoutRequest {
    constructor() {
        let savedBankDetail = _helper_models__WEBPACK_IMPORTED_MODULE_0__["Helper"].getBankDetail();
        if (savedBankDetail != null) {
            this.bank_name = savedBankDetail.bank_name;
            this.bank_account_name = savedBankDetail.bank_account_name;
            this.bank_account_number = savedBankDetail.bank_account_number;
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=send-to-bank-send-to-bank-module-es2015.js.map