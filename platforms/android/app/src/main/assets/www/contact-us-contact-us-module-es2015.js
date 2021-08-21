(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-us-contact-us-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>{{'contact_us' | translate}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"form\">\n        <h1>{{'your_words' | translate}}<br>{{'means_a_lot' | translate}}<br>{{'to_us' | translate}} !</h1>\n        <h2>{{'let_us_know_queries_feedback' | translate}}</h2>\n        <ion-list lines=\"none\">\n            <ion-item lines=\"none\">\n                <div class=\"item_inner d-flex\">\n<!--                    <ion-label position=\"fixed\">{{'full_name' | translate}}</ion-label>-->\n                    <ion-icon class=\"zmdi zmdi-account ion-text-start\"></ion-icon>\n                    <ion-input placeholder=\"{{'full_name' | translate}}\"disabled=\"true\" [(ngModel)]=\"supportRequest.name\"></ion-input>\n                </div>\n            </ion-item>\n            <ion-item lines=\"none\">\n                <div class=\"item_inner d-flex\">\n<!--                    <ion-label position=\"fixed\">{{'email_address' | translate}}</ion-label>-->\n                    <ion-icon class=\"zmdi zmdi-email ion-text-start\"></ion-icon>\n                    <ion-input placeholder=\"{{'email_address' | translate}}\" disabled=\"true\" [(ngModel)]=\"supportRequest.email\"></ion-input>\n                </div>\n            </ion-item>\n\n            <ion-item lines=\"none\">\n                <div class=\"item_inner d-flex\">\n                    <ion-icon class=\"zmdi zmdi-edit ion-text-start\"></ion-icon>\n                    <ion-textarea type=\"name\" rows=\"3\" [(ngModel)]=\"supportRequest.message\" maxlength=\"500\" placeholder=\"{{'enter_your_message' | translate}}\"></ion-textarea>\n                </div>\n            </ion-item>\n            <ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"submit()\">\n                {{'submit' | translate}}\n            </ion-button>\n        </ion-list>\n    </div>\n\n    <div class=\"footer_banner\">\n        <img src=\"assets/images/hero_image.png\">\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/contact-us/contact-us-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/contact-us/contact-us-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ContactUsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageRoutingModule", function() { return ContactUsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us.page */ "./src/app/contact-us/contact-us.page.ts");




const routes = [
    {
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_3__["ContactUsPage"]
    }
];
let ContactUsPageRoutingModule = class ContactUsPageRoutingModule {
};
ContactUsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactUsPageRoutingModule);



/***/ }),

/***/ "./src/app/contact-us/contact-us.module.ts":
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.module.ts ***!
  \*************************************************/
/*! exports provided: ContactUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us-routing.module */ "./src/app/contact-us/contact-us-routing.module.ts");
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-us.page */ "./src/app/contact-us/contact-us.page.ts");








let ContactUsPageModule = class ContactUsPageModule {
};
ContactUsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_6__["ContactUsPageRoutingModule"]
        ],
        declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_7__["ContactUsPage"]]
    })
], ContactUsPageModule);



/***/ }),

/***/ "./src/app/contact-us/contact-us.page.scss":
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form {\n  padding-top: 15px;\n  margin-bottom: 65px;\n}\n.form h1 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 1.85rem;\n  line-height: 31px;\n  margin-bottom: 15px;\n}\n.form h2 {\n  color: var(--text-light) !important;\n  margin: 0;\n  font-size: 1rem !important;\n  letter-spacing: 0;\n  font-weight: 500;\n  line-height: 19px;\n  margin-bottom: 50px;\n}\n.form ion-list ion-item.item-textarea .item_inner {\n  align-items: flex-start;\n}\n.form ion-list ion-item.item-textarea .item_inner ion-icon {\n  position: relative;\n  top: 15px;\n}\n.form ion-list ion-item.item-textarea .item_inner ion-textarea {\n  margin: 0 !important;\n}\n.footer_banner img {\n  display: block;\n  margin: auto;\n  width: 270px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9GOlxcZml2ZXJcXEJlcm5hcmRcXEFnb2NhcnJ5XFxhZ29jYXJyeS1kZWxpdmVyeS9zcmNcXGFwcFxcY29udGFjdC11c1xcY29udGFjdC11cy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURDSTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NSO0FERUk7RUFDSSxtQ0FBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQVI7QURNZ0I7RUFDSSx1QkFBQTtBQ0pwQjtBRE1vQjtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ0p4QjtBRE9vQjtFQUNJLG9CQUFBO0FDTHhCO0FEY0k7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNYUiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNjVweDtcblxuICAgIGgxIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEuODVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7IFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7IFxuICAgIH1cblxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgJi5pdGVtLXRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICAuaXRlbV9pbm5lciB7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlvbi10ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZvb3Rlcl9iYW5uZXIge1xuICAgIGltZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHdpZHRoOiAyNzBweDtcbiAgICB9XG59IiwiLmZvcm0ge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNjVweDtcbn1cbi5mb3JtIGgxIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuODVyZW07XG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmZvcm0gaDIge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0uaXRlbS10ZXh0YXJlYSAuaXRlbV9pbm5lciB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0uaXRlbS10ZXh0YXJlYSAuaXRlbV9pbm5lciBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxNXB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0uaXRlbS10ZXh0YXJlYSAuaXRlbV9pbm5lciBpb24tdGV4dGFyZWEge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLmZvb3Rlcl9iYW5uZXIgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDI3MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/contact-us/contact-us.page.ts":
/*!***********************************************!*\
  !*** ./src/app/contact-us/contact-us.page.ts ***!
  \***********************************************/
/*! exports provided: ContactUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPage", function() { return ContactUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_models_support_request_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/support-request.models */ "./src/models/support-request.models.ts");
/* harmony import */ var _services_network_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/network/api.service */ "./src/app/services/network/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");








let ContactUsPage = class ContactUsPage {
    constructor(navCtrl, translate, uiElementService, apiService) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.subscriptions = new Array();
        let userMe = src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].getLoggedInUser();
        this.supportRequest = new src_models_support_request_models__WEBPACK_IMPORTED_MODULE_2__["SupportRequest"](userMe.name, userMe.email);
    }
    ngOnInit() { }
    ngOnDestroy() {
        for (let sub of this.subscriptions)
            sub.unsubscribe();
        this.uiElementService.dismissLoading();
    }
    submit() {
        if (this.supportRequest && this.supportRequest.message) {
            this.translate.get(["supporting", "supporting_success", "something_wrong"]).subscribe(values => {
                this.uiElementService.presentLoading(values["supporting"]);
                this.subscriptions.push(this.apiService.submitSupport(this.supportRequest).subscribe(res => {
                    this.uiElementService.dismissLoading();
                    this.uiElementService.presentToast(values["supporting_success"]);
                    this.navCtrl.navigateRoot(["/home"]);
                }, err => {
                    console.log("submitSupport", err);
                    this.uiElementService.dismissLoading();
                    this.uiElementService.presentToast(values["something_wrong"]);
                }));
            });
        }
        else {
            this.translate.get("err_valid_support_msg").subscribe(value => this.uiElementService.presentToast(value));
        }
    }
};
ContactUsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__["UiElementsService"] },
    { type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
ContactUsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contact-us.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contact-us.page.scss */ "./src/app/contact-us/contact-us.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], ContactUsPage);



/***/ }),

/***/ "./src/models/support-request.models.ts":
/*!**********************************************!*\
  !*** ./src/models/support-request.models.ts ***!
  \**********************************************/
/*! exports provided: SupportRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportRequest", function() { return SupportRequest; });
class SupportRequest {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.message = "";
    }
}


/***/ })

}]);
//# sourceMappingURL=contact-us-contact-us-module-es2015.js.map