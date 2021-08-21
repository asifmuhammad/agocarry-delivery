(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["insight-insight-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/insight/insight.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/insight/insight.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            <div class=\"title_inner d-flex\">\n                <span> {{'insight' | translate}}</span>\n                <ion-select class=\"end\" interface=\"popover\" [(ngModel)]=\"duration\" (ionChange)=\"loadInsight()\">\n                    <ion-select-option value=\"today\">{{'today' | translate}}</ion-select-option>\n                    <ion-select-option value=\"week\">{{'this_week' | translate}}</ion-select-option>\n                    <ion-select-option value=\"month\">{{'this_month' | translate}} </ion-select-option>\n                    <ion-select-option value=\"year\">{{'this_year' | translate}}</ion-select-option>\n                </ion-select>\n            </div>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg_color\">\n    <div class=\"all_delivery\">\n        <ion-row class=\"ion-text-center\">\n            <ion-col size=\"4\">\n                <h2>{{insightsOrder.orders_count}}</h2>\n                <h3>{{'orders' | translate}}</h3>\n            </ion-col>\n            <ion-col size=\"4\">\n                <h2>{{insightsOrder.distance_travelled}} {{distance_metric | translate}}</h2>\n                <h3>{{'ride' | translate}}</h3>\n            </ion-col>\n            <ion-col size=\"4\">\n                <h2>{{currency_icon}}{{insightsOrder.earnings}}</h2>\n                <h3>{{'earnings' | translate}}</h3>\n            </ion-col>\n        </ion-row>\n    </div>\n    <ion-card>\n        <div class=\"card_containt\">\n            <h1>{{'earnings' | translate}}</h1>\n            <div class=\"graph_container d-flex\">\n                <div class=\"text_container\">\n                    <p *ngFor=\"let pr of priceRangeEarning\" class=\"ion-text-end\"><span>{{pr}}</span></p>\n                </div>\n                <div class=\"graph end\">\n                    <div *ngFor=\"let cd of chartDataParsedEarning\" class=\"bar_box\">\n                        <h4>{{cd.date}}</h4>\n                        <div class=\"bar\" [style.height]=\"cd.percent+'%'\">\n                            <h5>{{cd.price}}</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <h3 class=\"ion-text-center\" (click)=\"navTransactions()\">\n                {{'view_all_transactions' | translate}}\n            </h3>\n        </div>\n    </ion-card>\n\n    <ion-card>\n        <div class=\"card_containt\">\n            <h1>{{'orders' | translate}}</h1>\n            <div class=\"graph_container d-flex\">\n                <div class=\"text_container\">\n                    <p *ngFor=\"let pr of priceRangeOrder\" class=\"ion-text-end\"><span>{{pr}}</span></p>\n                </div>\n                <div class=\"graph end\">\n                    <div *ngFor=\"let cd of chartDataParsedOrder\" class=\"bar_box\">\n                        <h4>{{cd.date}}</h4>\n                        <div class=\"bar\" [style.height]=\"cd.percent+'%'\">\n                            <h5>{{cd.price}}</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- <h3 class=\"ion-text-center\">{{'view_all_orders' | translate}}</h3> -->\n        </div>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/insight/insight-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/insight/insight-routing.module.ts ***!
  \***************************************************/
/*! exports provided: InsightPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsightPageRoutingModule", function() { return InsightPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _insight_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insight.page */ "./src/app/insight/insight.page.ts");




const routes = [
    {
        path: '',
        component: _insight_page__WEBPACK_IMPORTED_MODULE_3__["InsightPage"]
    }
];
let InsightPageRoutingModule = class InsightPageRoutingModule {
};
InsightPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InsightPageRoutingModule);



/***/ }),

/***/ "./src/app/insight/insight.module.ts":
/*!*******************************************!*\
  !*** ./src/app/insight/insight.module.ts ***!
  \*******************************************/
/*! exports provided: InsightPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsightPageModule", function() { return InsightPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _insight_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insight-routing.module */ "./src/app/insight/insight-routing.module.ts");
/* harmony import */ var _insight_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./insight.page */ "./src/app/insight/insight.page.ts");








let InsightPageModule = class InsightPageModule {
};
InsightPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _insight_routing_module__WEBPACK_IMPORTED_MODULE_6__["InsightPageRoutingModule"]
        ],
        declarations: [_insight_page__WEBPACK_IMPORTED_MODULE_7__["InsightPage"]]
    })
], InsightPageModule);



/***/ }),

/***/ "./src/app/insight/insight.page.scss":
/*!*******************************************!*\
  !*** ./src/app/insight/insight.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar ion-title .title_inner {\n  position: relative;\n}\nion-header ion-toolbar ion-title .title_inner span {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\nion-header ion-select {\n  padding: 0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  align-items: center;\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1.5px;\n  font-size: 1rem;\n  line-height: 50px;\n  color: var(--primary);\n}\n.all_delivery {\n  background: var(--white);\n  padding: 14px 0px;\n  margin: 8px 0;\n}\n.all_delivery ion-row ion-col h2 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.all_delivery ion-row ion-col h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.95rem;\n  font-weight: 500;\n  padding-top: 5px;\n}\nion-card {\n  border-radius: 0px;\n  width: calc(100% - 0px);\n  margin: 0 auto;\n  background: var(--white);\n  margin-bottom: 15px;\n  box-shadow: none;\n  padding: 17px 16px;\n}\nion-card h1 {\n  margin: 0;\n  color: var(--text-black);\n  text-transform: uppercase;\n  font-size: 1.1rem;\n  font-weight: 600;\n  letter-spacing: 1px;\n  padding-bottom: 20px;\n}\nion-card .card_containt h3 {\n  margin: 0;\n  color: var(--primary);\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  padding-top: 14px;\n  padding-bottom: 5px;\n  letter-spacing: 1px;\n}\nion-card .graph_container {\n  position: relative;\n  overflow: hidden;\n  min-height: 220px;\n  padding-bottom: 30px;\n}\nion-card .graph_container .text_container {\n  position: absolute;\n  bottom: -22px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\nion-card .graph_container .text_container p {\n  position: relative;\n  width: 100%;\n  margin: 0;\n  padding-bottom: 18px;\n  color: var(--text-black);\n}\nion-card .graph_container .text_container p span {\n  display: block;\n  color: var(--text-black);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 0.8rem;\n  font-weight: 500;\n  min-width: 40px;\n  text-align: right;\n  z-index: 999;\n  position: relative;\n}\nion-card .graph_container .text_container p::before {\n  content: \"\";\n  position: absolute;\n  top: -4px;\n  bottom: 0;\n  right: 0;\n  margin: 0 auto;\n  width: calc(100% - 0px);\n  height: 1px;\n  background: #ccc;\n  opacity: 0.7;\n}\nion-card .graph_container .graph {\n  position: absolute;\n  bottom: 0px;\n  right: 0;\n  width: calc(100% - 40px);\n  height: calc(100% - 16px);\n  display: flex;\n  align-items: flex-end;\n  z-index: 9999;\n  overflow-x: scroll;\n  white-space: nowrap;\n  padding-bottom: 8px;\n}\nion-card .graph_container .graph .bar_box {\n  display: inline-block;\n  position: relative;\n  height: calc(100% - 11px);\n  margin: 0 5px;\n  width: 30px;\n  min-width: 30px;\n  overflow: visible !important;\n}\nion-card .graph_container .graph .bar_box h4 {\n  color: var(--text-black);\n  font-size: 0.8rem;\n  font-weight: 500;\n  text-align: center;\n  margin: 0;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\nion-card .graph_container .graph .bar_box .bar {\n  position: absolute;\n  bottom: 8px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  z-index: 999;\n  width: 100%;\n  max-height: calc(100% - 1px);\n  transition: all 0.3s;\n}\nion-card .graph_container .graph .bar_box .bar h5 {\n  position: absolute;\n  top: -3px;\n  right: 0;\n  left: 0;\n  z-index: 99;\n  color: var(--text-black);\n  font-size: 0.55rem;\n  font-weight: 500;\n  text-align: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n}\nion-card .graph_container .graph .bar_box .bar::before {\n  content: \"\";\n  position: absolute;\n  top: 11px;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: calc(100% - 25px);\n  margin: auto;\n  background: linear-gradient(to bottom, #0fc1a7 35%, rgba(255, 255, 255, 0.89) 100%);\n}\nion-card .graph_container .graph .bar_box:first-child {\n  margin-left: 15px;\n}\nion-card .graph_container .graph .bar_box:last-child {\n  margin-right: 15px;\n}\nion-card .graph_container .graph .bar_box.bg_white .bar::before {\n  background: linear-gradient(to bottom, #ffc000 35%, rgba(255, 255, 255, 0.89) 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zaWdodC9GOlxcZml2ZXJcXEJlcm5hcmRcXEFnb2NhcnJ5XFxhZ29jYXJyeS1kZWxpdmVyeS9zcmNcXGFwcFxcaW5zaWdodFxcaW5zaWdodC5wYWdlLnNjc3MiLCJzcmMvYXBwL2luc2lnaHQvaW5zaWdodC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxrQkFBQTtBQ0RaO0FER1k7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ0RoQjtBRE1JO0VBQ0ksVUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDSlI7QURRQTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDTEo7QURTWTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDUGhCO0FEVVk7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNSaEI7QURjQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNYSjtBRGFJO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ1hSO0FEZVE7RUFDSSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDYlo7QURpQkk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ2ZSO0FEaUJRO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDZlo7QURpQlk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtBQ2ZoQjtBRGlCZ0I7RUFDSSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDZnBCO0FEa0JnQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNoQnBCO0FEcUJRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDbkJaO0FEcUJZO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUNuQmhCO0FEcUJnQjtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FDbkJwQjtBRHNCZ0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QUNwQnBCO0FEdUJvQjtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtBQ3JCeEI7QUR3Qm9CO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1GQUFBO0FDdEJ4QjtBRDJCZ0I7RUFDSSxpQkFBQTtBQ3pCcEI7QUQ2QmdCO0VBQ0ksa0JBQUE7QUMzQnBCO0FEK0JvQjtFQUNJLG1GQUFBO0FDN0J4QiIsImZpbGUiOiJzcmMvYXBwL2luc2lnaHQvaW5zaWdodC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICAgICAgICAudGl0bGVfaW5uZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLXNlbGVjdCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgfVxufVxuXG4uYWxsX2RlbGl2ZXJ5IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgcGFkZGluZzogMTRweCAwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcblxuICAgIGlvbi1yb3cge1xuICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOTVyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAwcHgpO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgcGFkZGluZzogMTdweCAxNnB4O1xuXG4gICAgaDEge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIC5jYXJkX2NvbnRhaW50IHtcbiAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTRweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmdyYXBoX2NvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWluLWhlaWdodDogMjIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuXG4gICAgICAgIC50ZXh0X2NvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IC0yMnB4O1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcblxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTRweDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAwcHgpO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2NjYztcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmdyYXBoIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcblxuICAgICAgICAgICAgLmJhcl9ib3gge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMXB4KTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5iYXIge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogOHB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDFweCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG5cblxuICAgICAgICAgICAgICAgICAgICBoNSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0zcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjU1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDI1cHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgxNSwgMTkzLCAxNjcsIDEpIDM1JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg5KSAxMDAlKTtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYuYmdfd2hpdGUge1xuICAgICAgICAgICAgICAgICAgICAuYmFyOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDE5MiwgMCwgMSkgMzUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODkpIDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbmlvbi1oZWFkZXIgaW9uLXNlbGVjdCB7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5hbGxfZGVsaXZlcnkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmc6IDE0cHggMHB4O1xuICBtYXJnaW46IDhweCAwO1xufVxuLmFsbF9kZWxpdmVyeSBpb24tcm93IGlvbi1jb2wgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmFsbF9kZWxpdmVyeSBpb24tcm93IGlvbi1jb2wgaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDBweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDE3cHggMTZweDtcbn1cbmlvbi1jYXJkIGgxIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbmlvbi1jYXJkIC5jYXJkX2NvbnRhaW50IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nLXRvcDogMTRweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbmlvbi1jYXJkIC5ncmFwaF9jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1pbi1oZWlnaHQ6IDIyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cbmlvbi1jYXJkIC5ncmFwaF9jb250YWluZXIgLnRleHRfY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0yMnB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLWNhcmQgLmdyYXBoX2NvbnRhaW5lciAudGV4dF9jb250YWluZXIgcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1ib3R0b206IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbn1cbmlvbi1jYXJkIC5ncmFwaF9jb250YWluZXIgLnRleHRfY29udGFpbmVyIHAgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1pbi13aWR0aDogNDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWNhcmQgLmdyYXBoX2NvbnRhaW5lciAudGV4dF9jb250YWluZXIgcDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMHB4KTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIG9wYWNpdHk6IDAuNztcbn1cbmlvbi1jYXJkIC5ncmFwaF9jb250YWluZXIgLmdyYXBoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICB6LWluZGV4OiA5OTk5O1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5pb24tY2FyZCAuZ3JhcGhfY29udGFpbmVyIC5ncmFwaCAuYmFyX2JveCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDExcHgpO1xuICBtYXJnaW46IDAgNXB4O1xuICB3aWR0aDogMzBweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuaW9uLWNhcmQgLmdyYXBoX2NvbnRhaW5lciAuZ3JhcGggLmJhcl9ib3ggaDQge1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNhcmQgLmdyYXBoX2NvbnRhaW5lciAuZ3JhcGggLmJhcl9ib3ggLmJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA4cHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMXB4KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5pb24tY2FyZCAuZ3JhcGhfY29udGFpbmVyIC5ncmFwaCAuYmFyX2JveCAuYmFyIGg1IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0zcHg7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBmb250LXNpemU6IDAuNTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbmlvbi1jYXJkIC5ncmFwaF9jb250YWluZXIgLmdyYXBoIC5iYXJfYm94IC5iYXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMXB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMjVweCk7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzBmYzFhNyAzNSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OSkgMTAwJSk7XG59XG5pb24tY2FyZCAuZ3JhcGhfY29udGFpbmVyIC5ncmFwaCAuYmFyX2JveDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuaW9uLWNhcmQgLmdyYXBoX2NvbnRhaW5lciAuZ3JhcGggLmJhcl9ib3g6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbmlvbi1jYXJkIC5ncmFwaF9jb250YWluZXIgLmdyYXBoIC5iYXJfYm94LmJnX3doaXRlIC5iYXI6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmMwMDAgMzUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODkpIDEwMCUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/insight/insight.page.ts":
/*!*****************************************!*\
  !*** ./src/app/insight/insight.page.ts ***!
  \*****************************************/
/*! exports provided: InsightPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsightPage", function() { return InsightPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/network/api.service */ "./src/app/services/network/api.service.ts");
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");
/* harmony import */ var src_models_insight_earning_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/insight-earning.models */ "./src/models/insight-earning.models.ts");
/* harmony import */ var src_models_insight_order_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/models/insight-order.models */ "./src/models/insight-order.models.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











let InsightPage = class InsightPage {
    constructor(navCtrl, translate, uiElementService, apiService) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.subscriptions = new Array();
        this.duration = "today";
        this.distance_metric = "km";
        this.deliveryStats = new Array();
    }
    ngOnInit() {
        let values = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getSettingsValue(["currency_icon", "distance_metric"]);
        if (values && values[0])
            this.currency_icon = values[0];
        if (values && values[1])
            this.distance_metric = values[1].toLowerCase();
        this.setupDefaultInsightsEarning();
        this.setupDefaultInsightsOrder();
        this.loadInsight();
        //this.loadDeliverySummary();
        const component = this;
        let refDeliveryStatAll = firebase__WEBPACK_IMPORTED_MODULE_9__["database"]().ref().child("deliveries").child(String(src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getProfile().id)).child("order_stats");
        refDeliveryStatAll.once('value').then(function (snapshot) {
            let data = snapshot.val();
            if (data != null) {
                for (var prop in data)
                    if (Object.prototype.hasOwnProperty.call(data, prop))
                        component.deliveryStats.push(data[prop]);
                component.reFilterTravelledStat();
            }
        });
    }
    ngOnDestroy() {
        for (let sub of this.subscriptions)
            sub.unsubscribe();
        this.uiElementService.dismissLoading();
    }
    reFilterTravelledStat() {
        let totalDistance = 0;
        if (this.insightsOrder.orders_count && this.deliveryStats) {
            let limit = this.insightsOrder.orders_count > this.deliveryStats.length ? this.deliveryStats.length : this.insightsOrder.orders_count;
            for (let i = 0; i < limit; i++)
                totalDistance += this.deliveryStats[i].distance;
        }
        this.insightsOrder.distance_travelled = Number(src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].formatDistance(totalDistance, this.distance_metric));
    }
    setupDefaultInsightsOrder() {
        this.insightsOrder = new src_models_insight_order_models__WEBPACK_IMPORTED_MODULE_8__["OrderInsight"]();
        if (this.insightsOrder && this.insightsOrder.orders_chart_data.length) {
            let maxEarning = 100;
            let breaker = maxEarning / 5;
            this.priceRangeOrder = [];
            for (let i = 0; i <= 5; i++)
                this.priceRangeOrder.push(Number((((i == 0) ? maxEarning : (this.priceRangeOrder[i - 1] - breaker))).toFixed(2)));
            this.chartDataParsedOrder = [];
            for (let cd of this.insightsOrder.orders_chart_data)
                this.chartDataParsedOrder.push({ date: "0", percent: String(((Number(cd.total) * 100) / maxEarning)), price: "" });
        }
    }
    setupDefaultInsightsEarning() {
        this.insightsEarning = new src_models_insight_earning_models__WEBPACK_IMPORTED_MODULE_7__["EarningInsight"]();
        if (this.insightsEarning && this.insightsEarning.earnings_chart_data.length) {
            let maxEarning = 100;
            let breaker = maxEarning / 5;
            this.priceRangeEarning = [];
            for (let i = 0; i <= 5; i++)
                this.priceRangeEarning.push(Number((((i == 0) ? maxEarning : (this.priceRangeEarning[i - 1] - breaker))).toFixed(2)));
            this.chartDataParsedEarning = [];
            for (let cd of this.insightsEarning.earnings_chart_data)
                this.chartDataParsedEarning.push({ date: "0", percent: String(((Number(cd.total) * 100) / maxEarning)), price: "" });
        }
    }
    loadInsight() {
        this.loadInsightEarnings();
        this.loadInsightOrders();
    }
    loadInsightEarnings() {
        this.translate.get("loading").subscribe(value => {
            this.uiElementService.presentToast(value);
            let insightRequest = this.getInsightRequest();
            this.subscriptions.push(this.apiService.getInsightEarning(insightRequest).subscribe(res => {
                if (!res.total_earnings)
                    res.total_earnings = 0;
                res.total_earnings = Number(Number(res.total_earnings).toFixed(2));
                this.insightsEarning = res;
                if (this.insightsEarning && this.insightsEarning.earnings_chart_data.length) {
                    let maxEarning = 0;
                    for (let cd of this.insightsEarning.earnings_chart_data)
                        if (Number(cd.total) > maxEarning)
                            maxEarning = Number(cd.total);
                    let breaker = maxEarning / 5;
                    this.priceRangeEarning = [];
                    for (let i = 0; i <= 5; i++)
                        this.priceRangeEarning.push(Number((((i == 0) ? maxEarning : (this.priceRangeEarning[i - 1] - breaker))).toFixed(2)));
                    this.chartDataParsedEarning = [];
                    for (let cd of this.insightsEarning.earnings_chart_data)
                        this.chartDataParsedEarning.push({ date: this.getPeriodText(cd.period, insightRequest), percent: String(((Number(cd.total) * 100) / maxEarning)), price: this.currency_icon + " " + Number(cd.total).toFixed() });
                }
                else {
                    this.setupDefaultInsightsEarning();
                }
                this.uiElementService.dismissLoading();
            }, err => {
                console.log("insights", err);
                this.uiElementService.dismissLoading();
            }));
        });
    }
    loadInsightOrders() {
        let insightRequest = this.getInsightRequest();
        this.subscriptions.push(this.apiService.getInsightOrder(src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getProfile().id, insightRequest).subscribe(res => {
            //if (!res.total_earnings) res.total_earnings = 0; res.total_earnings = Number(Number(res.total_earnings).toFixed(2));
            this.insightsOrder = res;
            if (this.insightsOrder && this.insightsOrder.orders_chart_data.length) {
                let maxEarning = 0;
                for (let cd of this.insightsOrder.orders_chart_data)
                    if (Number(cd.total) > maxEarning)
                        maxEarning = Number(cd.total);
                let breaker = maxEarning / 5;
                this.priceRangeOrder = [];
                for (let i = 0; i <= 5; i++)
                    this.priceRangeOrder.push(Number((((i == 0) ? maxEarning : (this.priceRangeOrder[i - 1] - breaker))).toFixed(2)));
                this.chartDataParsedOrder = [];
                for (let cd of this.insightsOrder.orders_chart_data)
                    this.chartDataParsedOrder.push({ date: this.getPeriodText(cd.period, insightRequest), percent: String(((Number(cd.total) * 100) / maxEarning)), price: Number(cd.total).toFixed() });
            }
            else {
                this.setupDefaultInsightsOrder();
            }
            this.reFilterTravelledStat();
            this.uiElementService.dismissLoading();
        }, err => {
            console.log("insights", err);
            this.uiElementService.dismissLoading();
        }));
    }
    // loadDeliverySummary() {
    //   let profile = Helper.getProfile();
    //   this.subscriptions.push(this.apiService.getSummary(String(profile.id)).subscribe(res => {
    //     this.profileSummary = res;
    //     Helper.setProfileSummary(this.profileSummary);
    //   }, err => {
    //     console.log("getSummary", err);
    //   }));
    // }
    navTransactions() {
        this.navCtrl.navigateRoot(['/wallet']);
    }
    getInsightRequest() {
        //  'duration' => 'required|in:hours,days,months,years',
        //  'limit' => 'required|numeric'
        let toReturn = { duration: "", limit: 0 };
        switch (this.duration) {
            case "today":
                toReturn.duration = "hours";
                toReturn.limit = 24;
                break;
            case "week":
                toReturn.duration = "days";
                toReturn.limit = 7;
                break;
            case "month":
                toReturn.duration = "months";
                toReturn.limit = 12;
                break;
            case "year":
                toReturn.duration = "years";
                toReturn.limit = 12;
                break;
        }
        return toReturn;
    }
    getPeriodText(period, ir) {
        let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
        let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        let toReturn = String(period);
        if (toReturn.includes("-")) {
            return moment__WEBPACK_IMPORTED_MODULE_10__(toReturn).format("DD/MM");
        }
        else {
            switch (ir.duration) {
                case "hours":
                    if (toReturn.length == 1)
                        toReturn = "0" + toReturn;
                    break;
                case "months":
                    let index = Number(toReturn);
                    toReturn = this.translate.instant(months[index > 0 ? index - 1 : index]);
                    break;
            }
        }
        return toReturn;
    }
};
InsightPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"] },
    { type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
InsightPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-insight',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./insight.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/insight/insight.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./insight.page.scss */ "./src/app/insight/insight.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
], InsightPage);



/***/ }),

/***/ "./src/models/insight-earning.models.ts":
/*!**********************************************!*\
  !*** ./src/models/insight-earning.models.ts ***!
  \**********************************************/
/*! exports provided: EarningInsight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningInsight", function() { return EarningInsight; });
class EarningInsight {
    constructor() {
        this.total_earnings = 0;
        this.earnings_chart_data = [{ period: "0", total: "10" }, { period: "0", total: "10" }, { period: "0", total: "10" }, { period: "0", total: "10" }, { period: "0", total: "10" }];
    }
}


/***/ })

}]);
//# sourceMappingURL=insight-insight-module-es2015.js.map