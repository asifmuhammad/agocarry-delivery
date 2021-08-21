(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accepted-accepted-module"],{

/***/ "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js ***!
  \***************************************************************************/
/*! exports provided: PhotoViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoViewer", function() { return PhotoViewer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");




var PhotoViewer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PhotoViewer, _super);
    function PhotoViewer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhotoViewer.prototype.show = function (url, title, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "show", { "sync": true }, arguments); };
    PhotoViewer.pluginName = "PhotoViewer";
    PhotoViewer.plugin = "com-sarriaroman-photoviewer";
    PhotoViewer.pluginRef = "PhotoViewer";
    PhotoViewer.repo = "https://github.com/sarriaroman/photoviewer";
    PhotoViewer.platforms = ["Android", "iOS"];
PhotoViewer.ɵfac = function PhotoViewer_Factory(t) { return ɵPhotoViewer_BaseFactory(t || PhotoViewer); };
PhotoViewer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PhotoViewer, factory: function (t) { return PhotoViewer.ɵfac(t); } });
var ɵPhotoViewer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](PhotoViewer);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PhotoViewer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return PhotoViewer;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvcGhvdG8tdmlld2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztBQUN4RTtBQUdRLElBb0R5QiwrQkFBaUI7QUFBQztBQUU5QjtBQUVSO0FBQU0sSUFJakIsMEJBQUksYUFBQyxHQUFXLEVBQUUsS0FBYyxFQUFFLE9BQTRCO0FBRVg7QUFBNEM7QUFBd0Q7QUFBMkM7QUFBcUU7K0NBWHhRLFVBQVU7Ozs7OzBCQUNMO0FBQUMsc0JBekRQO0FBQUUsRUF5RCtCLGlCQUFpQjtBQUNqRCxTQURZLFdBQVc7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBob3RvVmlld2VyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGUgc2hhcmUgYnV0dG9uIChBbmRyb2lkIG9ubHkpLiBEZWZhdWx0OiB0cnVlXG4gICAqL1xuICBzaGFyZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBZGQgSFRUUCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0LiAgVXNlZnVsIGZvciBhdXRoZW50aWNhdGVkIHBhZ2VzLlxuICAgKiBUaGUgdmFsdWUgaXMgYSBzdHJpbmcgaW4gYSBKU09OIGZvcm1hdC4gIERlZmF1bHQ6ICcnXG4gICAqL1xuICBoZWFkZXJzPzogc3RyaW5nO1xuICAvKipcbiAgICogT3B0aW9uIGZvciBjbG9zZSBidXR0b24gdmlzaWJpbGl0eSB3aGVuIHNoYXJlIGZhbHNlIFtPTkxZIEZPUiBpT1NdXG4gICAqL1xuICBjbG9zZUJ1dHRvbj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBJZiB5b3UgbmVlZCB0byBjb3B5IGltYWdlIHRvIHJlZmVyZW5jZSBiZWZvcmUgc2hvdyB0aGVuIHNldCBpdCB0cnVlIFtPTkxZIEZPUiBpT1NdXG4gICAqL1xuICBjb3B5VG9SZWZlcmVuY2U/OiBib29sZWFuO1xuICAvKipcbiAgICogRW5hYmxlIG9yIERpc2FibGUgUGljYXNzbyBPcHRpb25zICggT25seSBBbmRyb2lkICk6IGZpdCwgY2VudGVySW5zaWRlLCBjZW50ZXJDcm9wLlxuICAgKi9cbiAgcGljY2Fzb09wdGlvbnM/OiB7XG4gICAgZml0PzogYm9vbGVhbjtcbiAgICBjZW50ZXJJbnNpZGU/OiBib29sZWFuO1xuICAgIGNlbnRlckNyb3A/OiBib29sZWFuO1xuICB9O1xufVxuXG4vKipcbiAqIEBuYW1lIFBob3RvIFZpZXdlclxuICogQGRlc2NyaXB0aW9uIFRoaXMgcGx1Z2luIGNhbiBkaXNwbGF5IHlvdXIgaW1hZ2UgaW4gZnVsbCBzY3JlZW4gd2l0aCB0aGUgYWJpbGl0eSB0byBwYW4sIHpvb20sIGFuZCBzaGFyZSB0aGUgaW1hZ2UuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFBob3RvVmlld2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9waG90by12aWV3ZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHBob3RvVmlld2VyOiBQaG90b1ZpZXdlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5waG90b1ZpZXdlci5zaG93KCdodHRwczovL215c2l0ZS5jb20vcGF0aC90by9pbWFnZS5qcGcnKTtcbiAqXG4gKiB0aGlzLnBob3RvVmlld2VyLnNob3coJ2h0dHBzOi8vbXlzaXRlLmNvbS9wYXRoL3RvL2ltYWdlLmpwZycsICdNeSBpbWFnZSB0aXRsZScsIHtzaGFyZTogZmFsc2V9KTtcbiAqXG4gKiB0aGlzLnBob3RvVmlld2VyLnNob3coJ2h0dHBzOi8vbXlzZWN1cmVzaXRlLmNvbS9wYXRoL3RvL2ltYWdlLmpwZycsICdNeSBpbWFnZSB0aXRsZScsIHtzaGFyZTogZmFsc2UsIGhlYWRlcnM6ICd7dXNlcm5hbWU6Zm9vLHBhc3N3b3JkOmJhcn0nfSk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdQaG90b1ZpZXdlcicsXG4gIHBsdWdpbjogJ2NvbS1zYXJyaWFyb21hbi1waG90b3ZpZXdlcicsXG4gIHBsdWdpblJlZjogJ1Bob3RvVmlld2VyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYXJyaWFyb21hbi9waG90b3ZpZXdlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQaG90b1ZpZXdlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNob3dzIGFuIGltYWdlIGluIGZ1bGwgc2NyZWVuXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVVJMIG9yIHBhdGggdG8gaW1hZ2VcbiAgICogQHBhcmFtIHRpdGxlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBvcHRpb25zIHtQaG90b1ZpZXdlck9wdGlvbnN9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2hvdyh1cmw6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG9wdGlvbnM/OiBQaG90b1ZpZXdlck9wdGlvbnMpOiB2b2lkIHt9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/accepted/accepted.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accepted/accepted.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"bg_transparent\">\n    <ion-toolbar>\n        <ion-title>\n            <div class=\"d-flex title_inner\" [ngClass]=\"fabAction ? 'active' : ''\">\n                <span>{{'order_id' | translate}}{{order.id}}</span>\n\n                <div class=\"order_info_button end\" (click)=\"toggleFab()\">\n                    <span class=\"info\">\n                        <ion-icon class=\"zmdi zmdi-shopping-basket ion-text-center\"></ion-icon>\n                    </span>\n                    <span class=\"cloes\">\n                        <ion-icon class=\"zmdi zmdi-close ion-text-center\"></ion-icon>\n                    </span>\n                </div>\n            </div>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n    <div class=\"order_info\" [ngClass]=\"fabAction ? 'active' : ''\">\n        <div class=\"item_container\">\n            <div *ngFor=\"let product of order.products\" class=\"item\">\n                <h2 class=\"d-flex\">\n                    {{product.vendor_product.product.title}}\n                    <img *ngIf=\"product.prescription_required\" src=\"assets/images/px.png\">\n                </h2>\n                <p class=\"d-flex\">\n                    {{'qnt' | translate}}. {{product.quantity}}\n                    <span class=\"end\">{{product.vendor_product.product.priceToShow}}</span>\n                </p>\n            </div>\n        </div>\n        <div class=\"payment_detail\">\n            <h2 class=\"d-flex\">\n                {{order.payment.payment_method.title}}\n                <span class=\"end ion-text-end\">{{order.total_toshow}}</span>\n            </h2>\n        </div>\n        <div *ngIf=\"prescriptionLink != null\" class=\"upload_prescription d-flex\">\n            <div class=\"item_img\">\n                <img src=\"assets/images/px.png\">\n            </div>\n            <h2 class=\"d-flex\">\n                {{'prescription_uploaded' | translate}}\n                <span class=\"icon_box end\" (click)=\"viewPresciption()\">\n                    <ion-icon class=\"zmdi zmdi-eye ion-text-end\"></ion-icon>\n                </span>\n            </h2>\n        </div>\n    </div>\n\n    <div #map id=\"map\" class=\"map\">\n        <ion-spinner></ion-spinner>\n    </div>\n    <div #pleaseConnect id=\"please-connect\">\n        <!-- <p>{{'loading' | translate}}</p> -->\n    </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n    <ion-card>\n        <div class=\"card_header d-flex\">\n            <div class=\"text_box\">\n                <h3>{{distanceToShow}} {{distance_metric | translate}} <span>({{durationToShow}})</span></h3>\n            </div>\n            <!-- <div class=\"direction end\" (click)=\"confirmNavigation()\">\n                <ion-icon class=\"zmdi zmdi-navigation ion-text-start\"></ion-icon>\n                {{'direction' | translate}}\n            </div> -->\n        </div>\n\n        <div class=\"delivery_details\">\n            <div class=\"delivery_address d-flex\">\n                <ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\n                <div class=\"text_box\">\n                    <h2>{{order.vendor.name}}</h2>\n                    <p>{{order.vendor.address}}</p>\n                </div>\n                <div class=\"iocn_box end d-flex\">\n                    <ion-icon class=\"zmdi zmdi-navigation ion-text-start\" (click)=\"navVendor()\"></ion-icon>\n                    <ion-icon class=\"zmdi zmdi-comment-alt-text ion-text-end\" (click)=\"navChat('vendor')\"></ion-icon>\n                </div>\n                <div class=\"dotted\">\n                    <span></span>\n                    <span></span>\n                    <span></span>\n                </div>\n            </div>\n            <div class=\"delivery_address d-flex\">\n                <ion-icon class=\"zmdi zmdi-navigation ion-text-start\"></ion-icon>\n                <div class=\"text_box\">\n                    <h2>{{order.user.name}}</h2>\n                    <p>{{order.address.formatted_address}}</p>\n                </div>\n                <div class=\"iocn_box end d-flex\">\n                    <ion-icon class=\"zmdi zmdi-navigation ion-text-start\" (click)=\"navCustomer()\"></ion-icon>\n                    <ion-icon class=\"zmdi zmdi-comment-alt-text ion-text-end end\" (click)=\"navChat('customer')\"></ion-icon>\n                </div>\n            </div>\n        </div>\n    </ion-card>\n    <ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"actionOrder()\">\n        {{actionText}}\n    </ion-button>\n    <!--</ion-footer>-->");

/***/ }),

/***/ "./src/app/accepted/accepted-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/accepted/accepted-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AcceptedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptedPageRoutingModule", function() { return AcceptedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _accepted_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accepted.page */ "./src/app/accepted/accepted.page.ts");




const routes = [
    {
        path: '',
        component: _accepted_page__WEBPACK_IMPORTED_MODULE_3__["AcceptedPage"]
    }
];
let AcceptedPageRoutingModule = class AcceptedPageRoutingModule {
};
AcceptedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AcceptedPageRoutingModule);



/***/ }),

/***/ "./src/app/accepted/accepted.module.ts":
/*!*********************************************!*\
  !*** ./src/app/accepted/accepted.module.ts ***!
  \*********************************************/
/*! exports provided: AcceptedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptedPageModule", function() { return AcceptedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _accepted_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accepted-routing.module */ "./src/app/accepted/accepted-routing.module.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _accepted_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accepted.page */ "./src/app/accepted/accepted.page.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/network/google-maps.service */ "./src/app/services/network/google-maps.service.ts");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");












let AcceptedPageModule = class AcceptedPageModule {
};
AcceptedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _accepted_routing_module__WEBPACK_IMPORTED_MODULE_6__["AcceptedPageRoutingModule"]
        ], providers: [_services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_10__["GoogleMapsService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__["PhotoViewer"]],
        declarations: [_accepted_page__WEBPACK_IMPORTED_MODULE_8__["AcceptedPage"]]
    })
], AcceptedPageModule);



/***/ }),

/***/ "./src/app/accepted/accepted.page.scss":
/*!*********************************************!*\
  !*** ./src/app/accepted/accepted.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n  background: linear-gradient(180deg, white 5%, rgba(252, 196, 27, 0) 100%);\n}\nion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n}\nion-header ion-toolbar ion-title .title_inner .order_info_button {\n  border-radius: 50%;\n  height: 37px;\n  width: 37px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: var(--white);\n  background: var(--primary);\n  text-align: center;\n}\nion-header ion-toolbar ion-title .title_inner .order_info_button ion-icon {\n  font-size: 1.15rem;\n  margin: 0 auto;\n  line-height: 37px;\n  height: 37px;\n}\nion-header ion-toolbar ion-title .title_inner .order_info_button span {\n  transition: all 3s;\n  opacity: 0.1;\n}\nion-header ion-toolbar ion-title .title_inner .order_info_button span.info {\n  display: block;\n  opacity: 1;\n}\nion-header ion-toolbar ion-title .title_inner .order_info_button span.cloes {\n  display: none;\n}\nion-header ion-toolbar ion-title .title_inner.active .order_info_button span.info {\n  display: none;\n  opacity: 0.1;\n}\nion-header ion-toolbar ion-title .title_inner.active .order_info_button span.cloes {\n  display: block;\n  align-items: center;\n  opacity: 1;\n}\n.map {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.map .delivery_location {\n  position: absolute;\n  width: 22px;\n}\n.map ion-icon {\n  position: absolute;\n  z-index: 99;\n  background: var(--secondary);\n  color: var(--white);\n  border-radius: 50%;\n  position: absolute;\n  z-index: 99;\n  background: var(--secondary);\n  color: var(--white);\n  border-radius: 50%;\n  width: 42px;\n  height: 42px;\n  line-height: 42px;\n  font-size: 1.3rem;\n}\n.order_info {\n  position: absolute;\n  top: 64px;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  background: var(--white);\n  margin: 0 auto;\n  width: calc(100% - 30px);\n  border-radius: 4px;\n  overflow: hidden;\n  height: 0;\n  transition: all 0.3s;\n}\n.order_info .item_container {\n  position: relative;\n  z-index: 9999;\n  max-height: 201px;\n  overflow: hidden;\n  overflow-y: scroll;\n  padding-top: 10px;\n}\n.order_info .item_container .item {\n  padding: 9px 19px;\n}\n.order_info .item_container .item h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 1rem;\n  letter-spacing: 0;\n  font-weight: 500;\n  padding-bottom: 6px;\n}\n.order_info .item_container .item h2 img {\n  min-width: 20px;\n  width: 20px;\n  margin-left: 20px;\n  display: block;\n}\n.order_info .item_container .item p {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.85rem;\n  font-weight: 400;\n}\n.order_info .item_container .item p span {\n  color: var(--text-black);\n  font-size: 0.98rem;\n  font-weight: 500;\n}\n.order_info .payment_detail {\n  background: var(--bg-color);\n  padding: 13px 19px;\n  position: relative;\n  z-index: 9999;\n}\n.order_info .payment_detail h2 {\n  margin: 0;\n  color: var(--primary);\n  font-size: 1rem;\n}\n.order_info .upload_prescription {\n  background: var(--white);\n  padding: 15px 19px;\n}\n.order_info .upload_prescription .item_img {\n  min-width: 20px;\n  width: 20px;\n  margin-right: 15px;\n}\n.order_info .upload_prescription .item_img img {\n  display: block;\n  width: 20px;\n}\n.order_info .upload_prescription h2 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-black);\n  padding: 0;\n}\n.order_info .upload_prescription h2 .icon_box ion-icon {\n  color: var(--primary);\n  font-size: 1.35rem;\n  min-width: 28px;\n}\n.order_info.active {\n  height: auto;\n}\nion-footer {\n  background: var(--white);\n  margin: 0 auto;\n  width: calc(100% - 30px);\n  margin-bottom: 15px;\n  border-radius: 15px;\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\nion-footer ion-card {\n  margin: 0;\n  border-radius: 0;\n  background: var(--white);\n  padding: 0px;\n  box-shadow: none;\n}\nion-footer ion-card .card_header {\n  background: var(--bg-color);\n  padding: 10px 19px;\n}\nion-footer ion-card .card_header h3 {\n  margin: 0;\n  color: var(--text-black);\n  font-size: 1rem;\n  font-weight: 600;\n}\nion-footer ion-card .card_header h3 span {\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 0.9rem;\n}\nion-footer ion-card .card_header .direction {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 36px;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  align-items: center;\n  color: var(--primary);\n  display: flex;\n  background: var(--bg-color);\n  letter-spacing: 0.5px;\n}\nion-footer ion-card .card_header .direction ion-icon {\n  font-size: 1.1rem;\n  min-width: 23px;\n}\nion-footer ion-card .delivery_details {\n  position: relative;\n  padding: 19px 19px;\n}\nion-footer ion-card .delivery_details .dotted {\n  display: block;\n  position: absolute;\n  top: 13px;\n  left: -8px;\n}\nion-footer ion-card .delivery_details .dotted span {\n  position: relative;\n  min-width: 30px;\n  height: 12px;\n  display: block;\n}\nion-footer ion-card .delivery_details .dotted span::after {\n  content: \"\";\n  position: absolute;\n  top: 27px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-radius: 50%;\n  height: 4px;\n  width: 4px;\n  background: var(--primary);\n  margin: auto;\n}\nion-footer ion-card .delivery_details .delivery_address {\n  position: relative;\n  align-items: flex-start;\n  min-height: 75px;\n}\nion-footer ion-card .delivery_details .delivery_address:last-child {\n  min-height: unset;\n}\nion-footer ion-card .delivery_details .delivery_address ion-icon.zmdi-navigation, ion-footer ion-card .delivery_details .delivery_address ion-icon.zmdi-pin {\n  color: var(--primary);\n  font-size: 1.2rem;\n  min-width: 33px;\n  position: relative;\n  background: var(--white);\n  padding: 0 1px;\n}\nion-footer ion-card .delivery_details .delivery_address .text_box h2 {\n  margin: 0;\n  color: var(--text-black);\n  font-weight: 500;\n  font-size: 0.93rem;\n  letter-spacing: 0.4px;\n  padding-bottom: 5px;\n}\nion-footer ion-card .delivery_details .delivery_address .text_box p {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.8rem;\n  font-weight: 400;\n  position: relative;\n  z-index: 99;\n}\nion-footer ion-card .delivery_details .delivery_address .iocn_box {\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-top: 12px;\n}\nion-footer ion-card .delivery_details .delivery_address .iocn_box ion-icon {\n  color: var(--primary);\n  font-size: 1rem;\n  min-width: 20px;\n}\nion-footer ion-row ion-col {\n  padding: 0;\n}\nion-footer ion-row ion-col .button.btn {\n  font-weight: 400;\n  height: 58px;\n}\nion-footer ion-row ion-col .button.btn.danger {\n  --background: var(--red_color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjZXB0ZWQvRjpcXGZpdmVyXFxCZXJuYXJkXFxBZ29jYXJyeVxcYWdvY2FycnktZGVsaXZlcnkvc3JjXFxhcHBcXGFjY2VwdGVkXFxhY2NlcHRlZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FjY2VwdGVkL2FjY2VwdGVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUVBQUE7QUNBUjtBREdJO0VBQ0ksMEJBQUE7QUNEUjtBRElZO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNGaEI7QURJZ0I7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNGcEI7QURLZ0I7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNIcEI7QURLb0I7RUFDSSxjQUFBO0VBQ0EsVUFBQTtBQ0h4QjtBRE1vQjtFQUNJLGFBQUE7QUNKeEI7QURZd0I7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ1Y1QjtBRGF3QjtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNYNUI7QURvQkE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNqQko7QURtQkk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNqQlI7QURvQkk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNsQlI7QURzQkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7QUNuQko7QURxQkk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ25CUjtBRHFCUTtFQUNJLGlCQUFBO0FDbkJaO0FEcUJZO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ25CaEI7QURxQmdCO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNuQnBCO0FEdUJZO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ3JCaEI7QUR1QmdCO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDckJwQjtBRDJCSTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUN6QlI7QUQyQlE7RUFDSSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDekJaO0FENkJJO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtBQzNCUjtBRDZCUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUMzQlo7QUQ2Qlk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQzNCaEI7QUQrQlE7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0FDN0JaO0FEZ0NnQjtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDOUJwQjtBRG9DSTtFQUNJLFlBQUE7QUNsQ1I7QURzQ0E7RUFDSSx3QkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDbkNKO0FEcUNJO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNuQ1I7QURxQ1E7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0FDbkNaO0FEcUNZO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDbkNoQjtBRHFDZ0I7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNuQ3BCO0FEdUNZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7QUNyQ2hCO0FEdUNnQjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ3JDcEI7QUQwQ1E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDeENaO0FEMENZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUN4Q2hCO0FEMENnQjtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDeENwQjtBRDBDb0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtBQ3hDeEI7QUQ2Q1k7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUMzQ2hCO0FENkNnQjtFQUNJLGlCQUFBO0FDM0NwQjtBRCtDb0I7RUFFSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDOUN4QjtBRG1Eb0I7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ2pEeEI7QURvRG9CO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ2xEeEI7QURzRGdCO0VBQ0ksOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNwRHBCO0FEc0RvQjtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNwRHhCO0FENERRO0VBQ0ksVUFBQTtBQzFEWjtBRDREWTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQzFEaEI7QUQ0RGdCO0VBQ0ksOEJBQUE7QUMxRHBCIiwiZmlsZSI6InNyYy9hcHAvYWNjZXB0ZWQvYWNjZXB0ZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDUlLCByZ2JhKDI1MiwgMTk2LCAyNywgMCkgMTAwJSk7XG4gICAgfVxuXG4gICAgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgICAgICAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgLnRpdGxlX2lubmVyIHtcbiAgICAgICAgICAgIC5vcmRlcl9pbmZvX2J1dHRvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzdweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzdweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjE1cmVtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzdweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDNzO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjE7XG5cbiAgICAgICAgICAgICAgICAgICAgJi5pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICYuY2xvZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIC5vcmRlcl9pbmZvX2J1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJi5pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJi5jbG9lcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubWFwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLmRlbGl2ZXJ5X2xvY2F0aW9uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMjJweDtcbiAgICB9XG5cbiAgICBpb24taWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogNDJweDtcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDJweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgfVxufVxuXG4ub3JkZXJfaW5mbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjRweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAuaXRlbV9jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMXB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuXG4gICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDlweCAxOXB4O1xuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOThyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnBheW1lbnRfZGV0YWlsIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xuICAgICAgICBwYWRkaW5nOiAxM3B4IDE5cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogOTk5OTtcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudXBsb2FkX3ByZXNjcmlwdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgcGFkZGluZzogMTVweCAxOXB4O1xuXG4gICAgICAgIC5pdGVtX2ltZyB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgICAuaWNvbl9ib3gge1xuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMzVyZW07XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjhweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG59XG5cbmlvbi1mb290ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuXG4gICAgaW9uLWNhcmQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuXG4gICAgICAgIC5jYXJkX2hlYWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE5cHg7XG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRpcmVjdGlvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIzcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRlbGl2ZXJ5X2RldGFpbHMge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgcGFkZGluZzogMTlweCAxOXB4O1xuXG4gICAgICAgICAgICAuZG90dGVkIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxM3B4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC04cHg7XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMjdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGVsaXZlcnlfYWRkcmVzcyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDc1cHg7XG5cbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiB1bnNldDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICYuem1kaS1uYXZpZ2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICAmLnptZGktcGluIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGV4dF9ib3gge1xuICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjkzcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmlvY25fYm94IHtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1yb3cge1xuICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgICAgIC5idXR0b24uYnRuIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNThweDtcblxuICAgICAgICAgICAgICAgICYuZGFuZ2VyIHtcbiAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1yZWRfY29sb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImlvbi1oZWFkZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgd2hpdGUgNSUsIHJnYmEoMjUyLCAxOTYsIDI3LCAwKSAxMDAlKTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgLm9yZGVyX2luZm9fYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDM3cHg7XG4gIHdpZHRoOiAzN3B4O1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgLm9yZGVyX2luZm9fYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gIGhlaWdodDogMzdweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciAub3JkZXJfaW5mb19idXR0b24gc3BhbiB7XG4gIHRyYW5zaXRpb246IGFsbCAzcztcbiAgb3BhY2l0eTogMC4xO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIC5vcmRlcl9pbmZvX2J1dHRvbiBzcGFuLmluZm8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciAub3JkZXJfaW5mb19idXR0b24gc3Bhbi5jbG9lcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIuYWN0aXZlIC5vcmRlcl9pbmZvX2J1dHRvbiBzcGFuLmluZm8ge1xuICBkaXNwbGF5OiBub25lO1xuICBvcGFjaXR5OiAwLjE7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIuYWN0aXZlIC5vcmRlcl9pbmZvX2J1dHRvbiBzcGFuLmNsb2VzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5tYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYXAgLmRlbGl2ZXJ5X2xvY2F0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjJweDtcbn1cbi5tYXAgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDQycHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ub3JkZXJfaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2NHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ub3JkZXJfaW5mbyAuaXRlbV9jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIG1heC1oZWlnaHQ6IDIwMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLm9yZGVyX2luZm8gLml0ZW1fY29udGFpbmVyIC5pdGVtIHtcbiAgcGFkZGluZzogOXB4IDE5cHg7XG59XG4ub3JkZXJfaW5mbyAuaXRlbV9jb250YWluZXIgLml0ZW0gaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbn1cbi5vcmRlcl9pbmZvIC5pdGVtX2NvbnRhaW5lciAuaXRlbSBoMiBpbWcge1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ub3JkZXJfaW5mbyAuaXRlbV9jb250YWluZXIgLml0ZW0gcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLm9yZGVyX2luZm8gLml0ZW1fY29udGFpbmVyIC5pdGVtIHAgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgZm9udC1zaXplOiAwLjk4cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLm9yZGVyX2luZm8gLnBheW1lbnRfZGV0YWlsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xuICBwYWRkaW5nOiAxM3B4IDE5cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk5OTtcbn1cbi5vcmRlcl9pbmZvIC5wYXltZW50X2RldGFpbCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDFyZW07XG59XG4ub3JkZXJfaW5mbyAudXBsb2FkX3ByZXNjcmlwdGlvbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgcGFkZGluZzogMTVweCAxOXB4O1xufVxuLm9yZGVyX2luZm8gLnVwbG9hZF9wcmVzY3JpcHRpb24gLml0ZW1faW1nIHtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLm9yZGVyX2luZm8gLnVwbG9hZF9wcmVzY3JpcHRpb24gLml0ZW1faW1nIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjBweDtcbn1cbi5vcmRlcl9pbmZvIC51cGxvYWRfcHJlc2NyaXB0aW9uIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgcGFkZGluZzogMDtcbn1cbi5vcmRlcl9pbmZvIC51cGxvYWRfcHJlc2NyaXB0aW9uIGgyIC5pY29uX2JveCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xuICBtaW4td2lkdGg6IDI4cHg7XG59XG4ub3JkZXJfaW5mby5hY3RpdmUge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbmlvbi1mb290ZXIgaW9uLWNhcmQge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgcGFkZGluZzogMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuaW9uLWZvb3RlciBpb24tY2FyZCAuY2FyZF9oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4gIHBhZGRpbmc6IDEwcHggMTlweDtcbn1cbmlvbi1mb290ZXIgaW9uLWNhcmQgLmNhcmRfaGVhZGVyIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmlvbi1mb290ZXIgaW9uLWNhcmQgLmNhcmRfaGVhZGVyIGgzIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbmlvbi1mb290ZXIgaW9uLWNhcmQgLmNhcmRfaGVhZGVyIC5kaXJlY3Rpb24ge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuaW9uLWZvb3RlciBpb24tY2FyZCAuY2FyZF9oZWFkZXIgLmRpcmVjdGlvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBtaW4td2lkdGg6IDIzcHg7XG59XG5pb24tZm9vdGVyIGlvbi1jYXJkIC5kZWxpdmVyeV9kZXRhaWxzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxOXB4IDE5cHg7XG59XG5pb24tZm9vdGVyIGlvbi1jYXJkIC5kZWxpdmVyeV9kZXRhaWxzIC5kb3R0ZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEzcHg7XG4gIGxlZnQ6IC04cHg7XG59XG5pb24tZm9vdGVyIGlvbi1jYXJkIC5kZWxpdmVyeV9kZXRhaWxzIC5kb3R0ZWQgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWZvb3RlciBpb24tY2FyZCAuZGVsaXZlcnlfZGV0YWlscyAuZG90dGVkIHNwYW46OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI3cHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIHdpZHRoOiA0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBtYXJnaW46IGF1dG87XG59XG5pb24tZm9vdGVyIGlvbi1jYXJkIC5kZWxpdmVyeV9kZXRhaWxzIC5kZWxpdmVyeV9hZGRyZXNzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWluLWhlaWdodDogNzVweDtcbn1cbmlvbi1mb290ZXIgaW9uLWNhcmQgLmRlbGl2ZXJ5X2RldGFpbHMgLmRlbGl2ZXJ5X2FkZHJlc3M6bGFzdC1jaGlsZCB7XG4gIG1pbi1oZWlnaHQ6IHVuc2V0O1xufVxuaW9uLWZvb3RlciBpb24tY2FyZCAuZGVsaXZlcnlfZGV0YWlscyAuZGVsaXZlcnlfYWRkcmVzcyBpb24taWNvbi56bWRpLW5hdmlnYXRpb24sIGlvbi1mb290ZXIgaW9uLWNhcmQgLmRlbGl2ZXJ5X2RldGFpbHMgLmRlbGl2ZXJ5X2FkZHJlc3MgaW9uLWljb24uem1kaS1waW4ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBtaW4td2lkdGg6IDMzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nOiAwIDFweDtcbn1cbmlvbi1mb290ZXIgaW9uLWNhcmQgLmRlbGl2ZXJ5X2RldGFpbHMgLmRlbGl2ZXJ5X2FkZHJlc3MgLnRleHRfYm94IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMC45M3JlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuaW9uLWZvb3RlciBpb24tY2FyZCAuZGVsaXZlcnlfZGV0YWlscyAuZGVsaXZlcnlfYWRkcmVzcyAudGV4dF9ib3ggcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk7XG59XG5pb24tZm9vdGVyIGlvbi1jYXJkIC5kZWxpdmVyeV9kZXRhaWxzIC5kZWxpdmVyeV9hZGRyZXNzIC5pb2NuX2JveCB7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbmlvbi1mb290ZXIgaW9uLWNhcmQgLmRlbGl2ZXJ5X2RldGFpbHMgLmRlbGl2ZXJ5X2FkZHJlc3MgLmlvY25fYm94IGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1pbi13aWR0aDogMjBweDtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMDtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tY29sIC5idXR0b24uYnRuIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgaGVpZ2h0OiA1OHB4O1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1jb2wgLmJ1dHRvbi5idG4uZGFuZ2VyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1yZWRfY29sb3IpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/accepted/accepted.page.ts":
/*!*******************************************!*\
  !*** ./src/app/accepted/accepted.page.ts ***!
  \*******************************************/
/*! exports provided: AcceptedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptedPage", function() { return AcceptedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/events/my-events.service */ "./src/app/services/events/my-events.service.ts");
/* harmony import */ var _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/network/api.service */ "./src/app/services/network/api.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_models_order_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/models/order.models */ "./src/models/order.models.ts");
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");
/* harmony import */ var _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/network/google-maps.service */ "./src/app/services/network/google-maps.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _chat_chat_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../chat/chat.page */ "./src/app/chat/chat.page.ts");
/* harmony import */ var src_models_constants_models__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/models/constants.models */ "./src/models/constants.models.ts");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_models_chat_models__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/models/chat.models */ "./src/models/chat.models.ts");

















let AcceptedPage = class AcceptedPage {
    constructor(route, uiElementService, myEvent, photoViewer, iab, alertCtrl, callNumber, modalController, apiService, translate, navCtrl, maps) {
        this.route = route;
        this.uiElementService = uiElementService;
        this.myEvent = myEvent;
        this.photoViewer = photoViewer;
        this.iab = iab;
        this.alertCtrl = alertCtrl;
        this.callNumber = callNumber;
        this.modalController = modalController;
        this.apiService = apiService;
        this.translate = translate;
        this.navCtrl = navCtrl;
        this.maps = maps;
        this.subscriptions = new Array();
        this.initialized = false;
        this.order = new src_models_order_models__WEBPACK_IMPORTED_MODULE_8__["Order"]();
        this.fabAction = false;
        this.distanceToShow = "--";
        this.durationToShow = "-- min";
        this.distance_metric = "km";
        // setTimeout(() => {
        //   this.updateOrder("complete");
        // }, 10000);
    }
    ngOnInit() {
        let dm = src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__["Helper"].getSettingValue("distance_metric");
        if (dm != null)
            this.distance_metric = dm.toLowerCase();
        this.route.queryParams.subscribe(params => {
            let order_id = params["order_id"];
            //if (order_id == null) order_id = "3";
            this.subscriptions.push(this.apiService.getOrderById(order_id).subscribe(res => {
                if (!res.delivery)
                    res.delivery = {};
                this.order = res;
                this.setupActionText();
                if (this.order.meta && this.order.meta[src_models_constants_models__WEBPACK_IMPORTED_MODULE_14__["Constants"].KEY_PRESCRIPTION_URL])
                    this.prescriptionLink = this.order.meta[src_models_constants_models__WEBPACK_IMPORTED_MODULE_14__["Constants"].KEY_PRESCRIPTION_URL];
                setTimeout(() => {
                    this.plotMarkers(this.locationMe != null ? new google.maps.LatLng(Number(this.locationMe.latitude), Number(this.locationMe.longitude)) : null, new google.maps.LatLng(Number(this.order.vendor.latitude), Number(this.order.vendor.longitude)), new google.maps.LatLng(Number(this.order.address.latitude), Number(this.order.address.longitude)));
                }, 200);
            }, err => {
                console.log("getOrderById", err);
                this.navCtrl.navigateRoot(['./home']);
            }));
        });
    }
    ngOnDestroy() {
        for (let sub of this.subscriptions)
            sub.unsubscribe();
        this.uiElementService.dismissLoading();
    }
    ionViewDidEnter() {
        if (!this.initialized) {
            this.locationMe = src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__["Helper"].getLocation();
            let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement, this.locationMe).then(() => {
                this.initialized = true;
            }).catch(err => console.log(err));
            mapLoaded.catch(err => console.log(err));
        }
    }
    viewPresciption() {
        this.photoViewer.show(this.prescriptionLink);
    }
    plotMarkers(markerMePos, markerSourcePos, markerDestinationPos) {
        const component = this;
        if (this.initialized) {
            if (markerMePos != null)
                new google.maps.Marker({ position: markerMePos, map: this.maps.map, icon: 'assets/images/marker_map_me.png' });
            if (markerSourcePos != null)
                new google.maps.Marker({ position: markerSourcePos, map: this.maps.map, icon: 'assets/images/marker_map_src.png' });
            if (markerDestinationPos != null)
                new google.maps.Marker({ position: markerDestinationPos, map: this.maps.map, icon: 'assets/images/marker_map_dest.png' });
            let posBonds = new google.maps.LatLngBounds();
            if (markerMePos != null)
                posBonds.extend(markerMePos);
            if (markerSourcePos != null)
                posBonds.extend(markerSourcePos);
            if (markerDestinationPos != null)
                posBonds.extend(markerDestinationPos);
            if (!posBonds.isEmpty())
                setTimeout(() => this.maps.map.panTo(posBonds.getCenter()), 200);
            let directionsService = new google.maps.DirectionsService();
            let directionsDisplay = new google.maps.DirectionsRenderer({
                map: this.maps.map,
                polylineOptions: {
                    strokeColor: '#279411',
                    strokeOpacity: 1.0,
                    strokeWeight: 5
                },
                markerOptions: {
                    opacity: 0,
                    clickable: false,
                    position: markerSourcePos
                }
            });
            let dirReq = {
                origin: markerSourcePos,
                destination: markerDestinationPos,
                travelMode: google.maps.TravelMode.DRIVING
            };
            directionsService.route(dirReq, function (result, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(result);
                    component.computeTotalDistance(result);
                }
            });
        }
    }
    toggleFab() {
        this.fabAction = !this.fabAction;
    }
    confirmNavigation() {
        this.translate.get(["directions_title", "directions_message", "directions_customer", "directions_vendor"]).subscribe(values => {
            this.alertCtrl.create({
                header: values["directions_title"],
                message: values["directions_message"],
                buttons: [{
                        text: values["directions_vendor"],
                        handler: () => {
                            this.iab.create(("http://maps.google.com/maps?daddr=" + (this.order.vendor.latitude + "," + this.order.vendor.longitude)), "_system");
                        }
                    }, {
                        text: values["directions_customer"],
                        handler: () => {
                            this.iab.create(("http://maps.google.com/maps?daddr=" + (this.order.address.latitude + "," + this.order.address.longitude)), "_system");
                        }
                    }]
            }).then(alert => alert.present());
        });
    }
    navVendor() {
        this.iab.create(("http://maps.google.com/maps?daddr=" + (this.order.vendor.latitude + "," + this.order.vendor.longitude)), "_system");
    }
    navCustomer() {
        this.iab.create(("http://maps.google.com/maps?daddr=" + (this.order.address.latitude + "," + this.order.address.longitude)), "_system");
    }
    dialVendor() {
        this.callNumber.callNumber(this.order.vendor.user.mobile_number, false).then(res => console.log('Launched dialer!', res)).catch(err => console.log('Error launching dialer', err));
    }
    dialCustomer() {
        this.callNumber.callNumber(this.order.user.mobile_number, false).then(res => console.log('Launched dialer!', res)).catch(err => console.log('Error launching dialer', err));
    }
    setupActionText() {
        let transKey = "order_action_allotted";
        if (this.order.delivery.status == "started") {
            transKey = "order_action_started";
        }
        else if (this.order.delivery.status == "pickup") {
            transKey = "order_action_pickup";
        }
        else if (this.order.delivery.status == "complete") {
            transKey = "order_action_complete";
        }
        this.translate.get(transKey).subscribe(value => this.actionText = value);
    }
    actionOrder() {
        let toUpdate = null;
        if (this.order.delivery.status == "allotted") {
            toUpdate = "pickup";
        }
        else if (this.order.delivery.status == "pickup") {
            toUpdate = "started";
        }
        else if (this.order.delivery.status == "started") {
            toUpdate = "complete";
        }
        if (toUpdate != null) {
            if (toUpdate == "started") {
                this.translate.get(["just_moment", "something_wrong", "dispatched_na"]).subscribe(values => {
                    this.uiElementService.presentLoading(values["just_moment"]);
                    this.subscriptions.push(this.apiService.getOrderById(this.order.id).subscribe(res => {
                        this.uiElementService.dismissLoading();
                        if (res.status == "dispatched") {
                            this.updateOrder("started");
                        }
                        else {
                            this.uiElementService.presentToast(values["dispatched_na"]);
                        }
                    }, err => {
                        console.log("getOrderById", err);
                        this.uiElementService.dismissLoading();
                        this.uiElementService.presentToast(values["something_wrong"]);
                    }));
                });
            }
            else {
                this.updateOrder(toUpdate);
            }
        }
        else if (this.order.delivery.status == "complete") {
            // let navigationExtras: NavigationExtras = { state: { order: this.order } };
            let navigationExtras = { queryParams: { order_id: this.order.id, delivery_fee: this.order.delivery_fee_toshow } };
            this.navCtrl.navigateForward(['./delivered-succesfully'], navigationExtras);
        }
    }
    updateOrder(status) {
        this.translate.get(["updating", "something_wrong"]).subscribe(values => {
            this.uiElementService.presentLoading(values["updating"]);
            this.subscriptions.push(this.apiService.updateOrder({ delivery_status: status }, this.order.id).subscribe(res => {
                this.order = res;
                this.setupActionText();
                this.uiElementService.dismissLoading();
                if (this.order.delivery.status == "complete") {
                    let navigationExtras = { queryParams: { order_id: res.id, delivery_fee: this.order.delivery_fee_toshow } };
                    this.navCtrl.navigateForward(['./delivered-succesfully'], navigationExtras);
                }
            }, err => {
                console.log("updateOrder", err);
                this.uiElementService.presentToast(values["something_wrong"]);
                this.uiElementService.dismissLoading();
            }));
        });
    }
    computeTotalDistance(result) {
        let totalDistance = 0, totalDuration = 0;
        const myroute = result.routes[0];
        for (let i = 0; i < myroute.legs.length; i++) {
            totalDistance += myroute.legs[i].distance.value;
            totalDuration += myroute.legs[i].duration.value;
        }
        src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__["Helper"].setOrderDistanceDuration(this.order.id, { distance: totalDistance, duration: totalDuration });
        this.distanceToShow = src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatDistance(totalDistance, this.distance_metric);
        this.durationToShow = src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatDuration(totalDuration);
    }
    navChat(role) {
        let chat = new src_models_chat_models__WEBPACK_IMPORTED_MODULE_16__["Chat"]();
        chat.chatId = role == "vendor" ? (this.order.vendor.user_id + src_models_constants_models__WEBPACK_IMPORTED_MODULE_14__["Constants"].ROLE_VENDOR) : (this.order.user_id + src_models_constants_models__WEBPACK_IMPORTED_MODULE_14__["Constants"].ROLE_USER);
        chat.chatImage = role == "vendor" ? this.order.vendor.image : this.order.user.image_url;
        chat.chatName = role == "vendor" ? this.order.vendor.name : this.order.user.name;
        chat.chatStatus = role == "vendor" ? src_models_constants_models__WEBPACK_IMPORTED_MODULE_14__["Constants"].ROLE_VENDOR : src_models_constants_models__WEBPACK_IMPORTED_MODULE_14__["Constants"].ROLE_USER;
        chat.myId = this.order.user_id + src_models_constants_models__WEBPACK_IMPORTED_MODULE_14__["Constants"].ROLE_DELIVERY;
        this.modalController.create({ component: _chat_chat_page__WEBPACK_IMPORTED_MODULE_13__["ChatPage"], componentProps: { chat: chat, mobile_number: (role == "vendor" ? this.order.vendor.user.mobile_number : this.order.user.mobile_number) } }).then((modalElement) => modalElement.present());
    }
};
AcceptedPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"] },
    { type: _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_5__["MyEventsService"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_15__["PhotoViewer"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_12__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_10__["GoogleMapsService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("pleaseConnect", { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AcceptedPage.prototype, "pleaseConnect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("map", { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AcceptedPage.prototype, "mapElement", void 0);
AcceptedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accepted',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./accepted.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/accepted/accepted.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./accepted.page.scss */ "./src/app/accepted/accepted.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"], _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_5__["MyEventsService"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_15__["PhotoViewer"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_12__["CallNumber"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_10__["GoogleMapsService"]])
], AcceptedPage);



/***/ }),

/***/ "./src/models/order.models.ts":
/*!************************************!*\
  !*** ./src/models/order.models.ts ***!
  \************************************/
/*! exports provided: OrderProductVendor, OrderProduct, OrderPayment, Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderProductVendor", function() { return OrderProductVendor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderProduct", function() { return OrderProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPayment", function() { return OrderPayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var _payment_method_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-method.models */ "./src/models/payment-method.models.ts");
/* harmony import */ var _address_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address.models */ "./src/models/address.models.ts");
/* harmony import */ var _user_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.models */ "./src/models/user.models.ts");
/* harmony import */ var _vendor_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor.models */ "./src/models/vendor.models.ts");




class OrderProductVendor {
}
class OrderProduct {
}
class OrderPayment {
}
class Order {
    constructor() {
        this.products = [];
        this.vendor = new _vendor_models__WEBPACK_IMPORTED_MODULE_3__["Vendor"]();
        this.vendor.user = new _user_models__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.user = new _user_models__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.address = new _address_models__WEBPACK_IMPORTED_MODULE_1__["MyAddress"]();
        this.payment = new OrderPayment();
        this.payment.payment_method = new _payment_method_models__WEBPACK_IMPORTED_MODULE_0__["PaymentMethod"]();
        this.delivery = {};
    }
}


/***/ }),

/***/ "./src/models/payment-method.models.ts":
/*!*********************************************!*\
  !*** ./src/models/payment-method.models.ts ***!
  \*********************************************/
/*! exports provided: PaymentMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethod", function() { return PaymentMethod; });
class PaymentMethod {
}


/***/ }),

/***/ "./src/models/vendor.models.ts":
/*!*************************************!*\
  !*** ./src/models/vendor.models.ts ***!
  \*************************************/
/*! exports provided: Vendor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vendor", function() { return Vendor; });
class Vendor {
}


/***/ })

}]);
//# sourceMappingURL=accepted-accepted-module-es2015.js.map