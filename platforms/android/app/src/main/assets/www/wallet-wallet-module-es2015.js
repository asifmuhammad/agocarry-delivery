(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-wallet-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>{{'wallet' | translate}}</ion-title>\n    </ion-toolbar>\n    <div class=\"banner\">\n        <h2>{{'available_balance' | translate}}</h2>\n        <h1>{{currency_icon}} {{balance}}</h1>\n    </div>\n</ion-header>\n\n<ion-content class=\"bg_color\" fullscreen>\n    <ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"navBankTransfer()\">\n        {{'send_to_bank' | translate}}\n    </ion-button>\n\n    <div class=\"empty-view\" *ngIf=\"!isLoading && (!transactions || !transactions.length)\">\n        <div style=\"text-align:center\">\n            <img src=\"assets/images/empty_wallet.png\" alt=\"no offers\" />\n            <span style=\"color:#9E9E9E; font-weight:bold;\">\n                {{'empty_transactions' | translate}}\n            </span>\n        </div>\n    </div>\n    <ion-list lines=\"none\">\n        <h2 *ngIf=\"transactions && transactions.length\">{{'recent' | translate}}</h2>\n        <ion-item *ngFor=\"let transaction of transactions\">\n            <div class=\"item_inner\">\n                <ion-row *ngIf=\"transaction.meta && transaction.meta.source_payment_type\">\n                    <ion-col size=\"6\">\n                        <h3>\n                            <strong *ngIf=\"transaction.type == 'payout'\">{{'sent_to_bank' | translate}}</strong>\n                            <strong *ngIf=\"transaction.type != 'payout'\">{{transaction.meta.description}}</strong>\n                        </h3>\n                        <p>{{transaction.created_at}}</p>\n                    </ion-col>\n                    <ion-col size=\"3\" class=\"ion-text-end\">\n                        <h3>{{currency_icon}}{{transaction.meta.source_amount}}</h3>\n                        <p>{{transaction.meta.source_payment_type}}</p>\n                    </ion-col>\n                    <ion-col size=\"3\" class=\"ion-text-end\">\n                        <h3>{{currency_icon}}{{transaction.amount}}</h3>\n                        <p *ngIf=\"transaction.type == 'payout' || transaction.type == 'withdraw'\">\n                            {{'payout' | translate}}\n                        </p>\n                        <p *ngIf=\"!(transaction.type == 'payout' || transaction.type == 'withdraw')\">\n                            {{'earning' | translate}}\n                        </p>\n                    </ion-col>\n                </ion-row>\n                <ion-row *ngIf=\"!(transaction.meta && transaction.meta.source_payment_type)\">\n                    <ion-col size=\"6\">\n                        <h3>\n                            <strong *ngIf=\"transaction.type == 'payout'\">{{'sent_to_bank' | translate}}</strong>\n                            <strong *ngIf=\"transaction.type != 'payout'\">{{transaction.meta.description}}</strong>\n                        </h3>\n                        <p>{{transaction.created_at}}</p>\n                    </ion-col>\n\n                    <ion-col size=\"6\" class=\"ion-text-end\">\n                        <h3>{{currency_icon}}{{transaction.amount}}</h3>\n                        <p *ngIf=\"transaction.type == 'payout' || transaction.type == 'withdraw'\">\n                            {{'payout' | translate}}\n                        </p>\n                        <p *ngIf=\"!(transaction.type == 'payout' || transaction.type == 'withdraw')\">\n                            {{'earning' | translate}}\n                        </p>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-item>\n\n    </ion-list>\n    <ion-infinite-scroll (ionInfinite)=\"doInfiniteTransactions($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"{{'loading' | translate}}\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>");

/***/ }),

/***/ "./src/app/wallet/wallet-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/wallet/wallet-routing.module.ts ***!
  \*************************************************/
/*! exports provided: WalletPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageRoutingModule", function() { return WalletPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet.page */ "./src/app/wallet/wallet.page.ts");




const routes = [
    {
        path: '',
        component: _wallet_page__WEBPACK_IMPORTED_MODULE_3__["WalletPage"]
    }
];
let WalletPageRoutingModule = class WalletPageRoutingModule {
};
WalletPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WalletPageRoutingModule);



/***/ }),

/***/ "./src/app/wallet/wallet.module.ts":
/*!*****************************************!*\
  !*** ./src/app/wallet/wallet.module.ts ***!
  \*****************************************/
/*! exports provided: WalletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageModule", function() { return WalletPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _wallet_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallet-routing.module */ "./src/app/wallet/wallet-routing.module.ts");
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wallet.page */ "./src/app/wallet/wallet.page.ts");








let WalletPageModule = class WalletPageModule {
};
WalletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _wallet_routing_module__WEBPACK_IMPORTED_MODULE_6__["WalletPageRoutingModule"]
        ],
        declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_7__["WalletPage"]]
    })
], WalletPageModule);



/***/ }),

/***/ "./src/app/wallet/wallet.page.scss":
/*!*****************************************!*\
  !*** ./src/app/wallet/wallet.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  background: var(--white);\n}\nion-header ion-toolbar ion-title .title_inner {\n  position: relative;\n  min-height: 60px;\n}\nion-header ion-toolbar ion-title span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\nion-header ion-toolbar ion-title ion-icon {\n  font-size: 1.4rem;\n  padding: 0 1px;\n  min-width: 20px;\n}\nion-header .banner {\n  position: relative;\n  z-index: 99;\n  padding: 20px;\n}\nion-header .banner h2 {\n  margin: 0;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  font-weight: 400;\n  letter-spacing: 1px;\n  padding-bottom: 4px;\n  color: var(--text-light2);\n}\nion-header .banner h1 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 2.35rem;\n  color: var(--text-black);\n}\nion-content .button.btn {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: fixed;\n  top: 143px;\n  z-index: 9999;\n  right: 16px;\n  font-size: 0.95rem;\n  min-width: 140px;\n  height: 48px;\n  text-transform: none;\n  font-weight: 400;\n}\nion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n}\nion-list h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 0.95rem;\n  padding: 15px;\n}\nion-list ion-item {\n  padding: 16px 15px 16px 15px;\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  margin-bottom: 5px;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n}\nion-list ion-item .item_inner ion-row {\n  margin: 0 -5px;\n}\nion-list ion-item .item_inner ion-row ion-col {\n  padding: 0 5px;\n}\nion-list ion-item .item_inner ion-row ion-col h3 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  padding-bottom: 8px;\n  color: var(--text-black);\n}\nion-list ion-item .item_inner ion-row ion-col p {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.85rem;\n  overflow: hidden;\n  font-weight: 400;\n  letter-spacing: 0;\n}\n.empty-view {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  top: 10%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 10%;\n  max-width: calc(100% - 30px);\n}\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FsbGV0L0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWRlbGl2ZXJ5L3NyY1xcYXBwXFx3YWxsZXRcXHdhbGxldC5wYWdlLnNjc3MiLCJzcmMvYXBwL3dhbGxldC93YWxsZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7QUNDSjtBREVRO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0FaO0FER1E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNEWjtBRElRO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0ZaO0FETUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDSlI7QURNUTtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNKWjtBRE9RO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ0xaO0FEV0k7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDUlI7QURZQTtFQUNJLHlDQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNUSjtBRFdJO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNUUjtBRFlJO0VBQ0ksNEJBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7RUFDQSxrQkFBQTtBQ1ZSO0FEWVE7RUFDSSxXQUFBO0FDVlo7QURZWTtFQUNJLGNBQUE7QUNWaEI7QURZZ0I7RUFDSSxjQUFBO0FDVnBCO0FEWW9CO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FDVnhCO0FEYW9CO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNYeEI7QURtQkE7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUNoQko7QURrQkk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ2hCUjtBRG1CSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ2pCUjtBRG9CSTtFQUNJLGdCQUFBO0FDbEJSO0FEb0JRO0VBQ0kseUJBQUE7QUNsQloiLCJmaWxlIjoic3JjL2FwcC93YWxsZXQvd2FsbGV0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcblxuICAgIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gICAgICAgIC50aXRsZV9pbm5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMXB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJhbm5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuMzVyZW07XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAuYnV0dG9uLmJ0biB7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDE0M3B4O1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgICBtaW4td2lkdGg6IDE0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbn1cblxuaW9uLWxpc3Qge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgaDIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICB9XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMTVweCAxNnB4IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG5cbiAgICAgICAgLml0ZW1faW5uZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAtNXB4O1xuXG4gICAgICAgICAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuXG4gICAgICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZW1wdHktdmlldyB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHRvcDogMTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMTAlO1xuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG5cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIHBhZGRpbmc6IDAgMXB4O1xuICBtaW4td2lkdGg6IDIwcHg7XG59XG5pb24taGVhZGVyIC5iYW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuaW9uLWhlYWRlciAuYmFubmVyIGgyIHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciBoMSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyLjM1cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG59XG5cbmlvbi1jb250ZW50IC5idXR0b24uYnRuIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTQzcHg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHJpZ2h0OiAxNnB4O1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIG1pbi13aWR0aDogMTQwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbmlvbi1saXN0IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDE2cHggMTVweCAxNnB4IDE1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaW9uLXJvdyB7XG4gIG1hcmdpbjogMCAtNXB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBpb24tcm93IGlvbi1jb2wgaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaW9uLXJvdyBpb24tY29sIHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLmVtcHR5LXZpZXcge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgdG9wOiAxMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMTAlO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xufVxuLmVtcHR5LXZpZXcgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uZW1wdHktdmlldyBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5lbXB0eS12aWV3IGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uZW1wdHktdmlldyBidXR0b24gc3BhbiB7XG4gIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/wallet/wallet.page.ts":
/*!***************************************!*\
  !*** ./src/app/wallet/wallet.page.ts ***!
  \***************************************/
/*! exports provided: WalletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPage", function() { return WalletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/network/api.service */ "./src/app/services/network/api.service.ts");
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");







let WalletPage = class WalletPage {
    constructor(navCtrl, translate, uiElementService, apiService) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.subscriptions = new Array();
        this.isLoading = true;
        this.transactions = new Array();
        this.balance = 0;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        for (let sub of this.subscriptions)
            sub.unsubscribe();
        this.uiElementService.dismissLoading();
    }
    ionViewDidEnter() {
        this.currency_icon = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getSettingValue("currency_icon");
        this.refreshBalance();
    }
    refreshBalance() {
        this.subscriptions.push(this.apiService.getBalance().subscribe(res => {
            if (res.balance != this.balance || ((!this.transactions || !this.transactions.length) && res.balance != 0)) {
                this.transactions = [];
                this.isLoading = true;
                this.subscriptions.push(this.apiService.getTransactions().subscribe(res => this.handleTransactionRes(res), err => this.handleTransactionErr(err)));
            }
            else {
                this.isLoading = false;
            }
            this.balance = res.balance;
        }, err => {
            console.log("getBalance", err);
            this.isLoading = false;
        }));
    }
    handleTransactionRes(res) {
        this.transactions = this.transactions.concat(res.data);
        this.nextUrl = res.links.next;
        if (this.infiniteScrollEvent)
            this.infiniteScrollEvent.target.complete();
        this.isLoading = false;
        this.uiElementService.dismissLoading();
    }
    handleTransactionErr(err) {
        console.log("handleTransactionErr", err);
        this.uiElementService.dismissLoading();
        if (this.infiniteScrollEvent)
            this.infiniteScrollEvent.target.complete();
        this.isLoading = false;
    }
    doInfiniteTransactions(event) {
        if (this.nextUrl == null) {
            event.target.complete();
        }
        else {
            this.infiniteScrollEvent = event;
            this.subscriptions.push(this.apiService.getURL(this.nextUrl).subscribe(res => {
                if (res && res.data && res.data.length)
                    for (let trans of res.data)
                        this.apiService.setupTransaction(trans);
                this.handleTransactionRes(res);
            }, err => this.handleTransactionErr(err)));
        }
    }
    navBankTransfer() {
        this.navCtrl.navigateForward(['./send-to-bank']);
    }
};
WalletPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"] },
    { type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
WalletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wallet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./wallet.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./wallet.page.scss */ "./src/app/wallet/wallet.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
], WalletPage);



/***/ })

}]);
//# sourceMappingURL=wallet-wallet-module-es2015.js.map