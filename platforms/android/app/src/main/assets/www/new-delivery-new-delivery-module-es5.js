function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-delivery-new-delivery-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-delivery/new-delivery.page.html": function node_modulesRawLoaderDistCjsJsSrcAppNewDeliveryNewDeliveryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"bg_transparent\">\n    <ion-toolbar>\n        <ion-title>{{'new_delivery_task' | translate}}({{'order_id' | translate}}{{order_request.order.id}})</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n    <div #map id=\"map\" class=\"map\">\n        <ion-spinner></ion-spinner>\n    </div>\n    <div #pleaseConnect id=\"please-connect\">\n        <!-- <p>{{'loading' | translate}}</p> -->\n    </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n    <ion-card *ngIf=\"order_request\">\n        <div class=\"card_header d-flex\">\n            <h3>{{distanceToShow}} {{distance_metric | translate}} <span>&nbsp;({{durationToShow}})</span></h3>\n            <div class=\"direction end\" (click)=\"navigateOrder()\">\n                <ion-icon class=\"zmdi zmdi-navigation ion-text-start\"></ion-icon>\n                {{'direction' | translate}}\n            </div>\n        </div>\n        <div class=\"delivery_details\">\n            <div class=\"delivery_address d-flex\">\n                <ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\n                <div class=\"text_box\">\n                    <h2>{{order_request.order.vendor.name}}</h2>\n                    <p>{{order_request.order.vendor.address}}</p>\n                </div>\n\n                <!--\n\t\t\t\t<div class=\"iocn_box end d-flex\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-phone ion-text-end end\"></ion-icon>\n\t\t\t\t</div>\n-->\n                <div class=\"dotted\">\n                    <span></span>\n                    <span></span>\n                    <span></span>\n                </div>\n\n            </div>\n            <div class=\"delivery_address d-flex\">\n                <ion-icon class=\"zmdi zmdi-navigation ion-text-start\"></ion-icon>\n                <div class=\"text_box\">\n                    <h2>{{order_request.order.user.name}}</h2>\n                    <p>{{order_request.order.address.formatted_address}}</p>\n                </div>\n                <!--\n\n\t\t\t\t<div class=\"iocn_box end d-flex\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-phone ion-text-end end\"></ion-icon>\n\t\t\t\t</div>\n-->\n\n            </div>\n        </div>\n    </ion-card>\n\n    <ion-row>\n        <ion-col size=\"6\">\n            <ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"confirmUpdate('accepted')\">\n                {{'accept' | translate}}\n            </ion-button>\n        </ion-col>\n\n        <ion-col size=\"6\">\n            <ion-button size=\"large\" shape=\"full\" class=\"btn danger\" (click)=\"confirmUpdate('rejected')\">\n                {{'reject' | translate}}\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/new-delivery/new-delivery-routing.module.ts": function srcAppNewDeliveryNewDeliveryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewDeliveryPageRoutingModule", function () {
      return NewDeliveryPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _new_delivery_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./new-delivery.page */
    "./src/app/new-delivery/new-delivery.page.ts");

    var routes = [{
      path: '',
      component: _new_delivery_page__WEBPACK_IMPORTED_MODULE_3__["NewDeliveryPage"]
    }];

    var NewDeliveryPageRoutingModule = function NewDeliveryPageRoutingModule() {
      _classCallCheck(this, NewDeliveryPageRoutingModule);
    };

    NewDeliveryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NewDeliveryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/new-delivery/new-delivery.module.ts": function srcAppNewDeliveryNewDeliveryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewDeliveryPageModule", function () {
      return NewDeliveryPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _new_delivery_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./new-delivery-routing.module */
    "./src/app/new-delivery/new-delivery-routing.module.ts");
    /* harmony import */


    var _new_delivery_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./new-delivery.page */
    "./src/app/new-delivery/new-delivery.page.ts");
    /* harmony import */


    var _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/network/google-maps.service */
    "./src/app/services/network/google-maps.service.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    var NewDeliveryPageModule = function NewDeliveryPageModule() {
      _classCallCheck(this, NewDeliveryPageModule);
    };

    NewDeliveryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _new_delivery_routing_module__WEBPACK_IMPORTED_MODULE_6__["NewDeliveryPageRoutingModule"]],
      providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"], _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsService"]],
      declarations: [_new_delivery_page__WEBPACK_IMPORTED_MODULE_7__["NewDeliveryPage"]]
    })], NewDeliveryPageModule);
    /***/
  },

  /***/
  "./src/app/new-delivery/new-delivery.page.scss": function srcAppNewDeliveryNewDeliveryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n  background: linear-gradient(180deg, white 5%, rgba(252, 196, 27, 0) 100%);\n}\n\n.map {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.map .delivery_location {\n  position: absolute;\n  width: 22px;\n}\n\n.map ion-icon {\n  position: absolute;\n  z-index: 99;\n  background: var(--secondary);\n  color: var(--white);\n  border-radius: 50%;\n  position: absolute;\n  z-index: 99;\n  background: var(--secondary);\n  color: var(--white);\n  border-radius: 50%;\n  width: 42px;\n  height: 42px;\n  line-height: 42px;\n  font-size: 1.3rem;\n}\n\nion-footer {\n  background: var(--white);\n  margin: 0 auto;\n  width: calc(100% - 30px);\n  margin-bottom: 15px;\n  border-radius: 10px;\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\nion-footer ion-card {\n  margin: 0;\n  border-radius: 0;\n  background: var(--white);\n  padding: 0px;\n  box-shadow: none;\n}\n\nion-footer ion-card .card_header {\n  background: var(--bg-color);\n  padding: 10px 19px;\n}\n\nion-footer ion-card .card_header h3 {\n  margin: 0;\n  color: var(--text-black);\n  font-size: 1rem;\n  font-weight: 600;\n}\n\nion-footer ion-card .card_header h3 span {\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 0.9rem;\n}\n\nion-footer ion-card .card_header .direction {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 36px;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  align-items: center;\n  color: var(--primary);\n  display: flex;\n  background: var(--bg-color);\n  letter-spacing: 0.5px;\n}\n\nion-footer ion-card .card_header .direction ion-icon {\n  font-size: 1.1rem;\n  min-width: 23px;\n}\n\nion-footer ion-card .delivery_details {\n  position: relative;\n  padding: 19px 19px;\n}\n\nion-footer ion-card .delivery_details .dotted {\n  display: block;\n  position: absolute;\n  top: 13px;\n  left: -8px;\n}\n\nion-footer ion-card .delivery_details .dotted span {\n  position: relative;\n  min-width: 30px;\n  height: 12px;\n  display: block;\n}\n\nion-footer ion-card .delivery_details .dotted span::after {\n  content: \"\";\n  position: absolute;\n  top: 27px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-radius: 50%;\n  height: 4px;\n  width: 4px;\n  background: var(--primary);\n  margin: auto;\n}\n\nion-footer ion-card .delivery_details .delivery_address {\n  position: relative;\n  align-items: flex-start;\n  min-height: 75px;\n}\n\nion-footer ion-card .delivery_details .delivery_address:last-child {\n  min-height: unset;\n}\n\nion-footer ion-card .delivery_details .delivery_address ion-icon.zmdi-navigation, ion-footer ion-card .delivery_details .delivery_address ion-icon.zmdi-pin {\n  color: var(--primary);\n  font-size: 1.2rem;\n  min-width: 33px;\n  position: relative;\n  background: var(--white);\n  padding: 0 1px;\n}\n\nion-footer ion-card .delivery_details .delivery_address .text_box h2 {\n  margin: 0;\n  color: var(--text-black);\n  font-weight: 500;\n  font-size: 0.93rem;\n  letter-spacing: 0.4px;\n  padding-bottom: 5px;\n}\n\nion-footer ion-card .delivery_details .delivery_address .text_box p {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.8rem;\n  font-weight: 400;\n  position: relative;\n  z-index: 99;\n}\n\nion-footer ion-card .delivery_details .delivery_address .iocn_box {\n  min-width: 60px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-top: 12px;\n}\n\nion-footer ion-card .delivery_details .delivery_address .iocn_box ion-icon {\n  color: var(--primary);\n  font-size: 1rem;\n  min-width: 26px;\n}\n\nion-footer ion-row ion-col {\n  padding: 0;\n}\n\nion-footer ion-row ion-col .button.btn {\n  font-weight: 400;\n  height: 58px;\n}\n\nion-footer ion-row ion-col .button.btn.danger {\n  --background: var(--red_color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWRlbGl2ZXJ5L0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWRlbGl2ZXJ5L3NyY1xcYXBwXFxuZXctZGVsaXZlcnlcXG5ldy1kZWxpdmVyeS5wYWdlLnNjc3MiLCJzcmMvYXBwL25ldy1kZWxpdmVyeS9uZXctZGVsaXZlcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5RUFBQTtBQ0FSOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREo7O0FER0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNEUjs7QURJSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0ZSOztBRE1BO0VBQ0ksd0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ0hKOztBREtJO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNIUjs7QURLUTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7QUNIWjs7QURLWTtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hoQjs7QURLZ0I7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNIcEI7O0FET1k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQ0xoQjs7QURPZ0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNMcEI7O0FEVVE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDUlo7O0FEVVk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ1JoQjs7QURVZ0I7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ1JwQjs7QURVb0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtBQ1J4Qjs7QURhWTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ1hoQjs7QURhZ0I7RUFDSSxpQkFBQTtBQ1hwQjs7QURlb0I7RUFFSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDZHhCOztBRG1Cb0I7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ2pCeEI7O0FEb0JvQjtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNsQnhCOztBRHNCZ0I7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNwQnBCOztBRHNCb0I7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDcEJ4Qjs7QUQ0QlE7RUFDSSxVQUFBO0FDMUJaOztBRDRCWTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQzFCaEI7O0FENEJnQjtFQUNJLDhCQUFBO0FDMUJwQiIsImZpbGUiOiJzcmMvYXBwL25ldy1kZWxpdmVyeS9uZXctZGVsaXZlcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDUlLCByZ2JhKDI1MiwgMTk2LCAyNywgMCkgMTAwJSk7XG4gICAgfVxufVxuXG4ubWFwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLmRlbGl2ZXJ5X2xvY2F0aW9uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMjJweDtcbiAgICB9XG5cbiAgICBpb24taWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogNDJweDtcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDJweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcblxuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcblxuICAgICAgICAuY2FyZF9oZWFkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxOXB4O1xuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kaXJlY3Rpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5kZWxpdmVyeV9kZXRhaWxzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE5cHggMTlweDtcblxuICAgICAgICAgICAgLmRvdHRlZCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMTNweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtOHB4O1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDI3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRlbGl2ZXJ5X2FkZHJlc3Mge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA3NXB4O1xuXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogdW5zZXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAmLnptZGktbmF2aWdhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgJi56bWRpLXBpbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRleHRfYm94IHtcbiAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45M3JlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pb2NuX2JveCB7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1yb3cge1xuICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgICAgIC5idXR0b24uYnRuIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNThweDtcblxuICAgICAgICAgICAgICAgICYuZGFuZ2VyIHtcbiAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1yZWRfY29sb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImlvbi1oZWFkZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgd2hpdGUgNSUsIHJnYmEoMjUyLCAxOTYsIDI3LCAwKSAxMDAlKTtcbn1cblxuLm1hcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1hcCAuZGVsaXZlcnlfbG9jYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMnB4O1xufVxuLm1hcCBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogNDJweDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbmlvbi1mb290ZXIgaW9uLWNhcmQge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgcGFkZGluZzogMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuaW9uLWZvb3RlciBpb24tY2FyZCAuY2FyZF9oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4gIHBhZGRpbmc6IDEwcHggMTlweDtcbn1cbmlvbi1mb290ZXIgaW9uLWNhcmQgLmNhcmRfaGVhZGVyIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmlvbi1mb290ZXIgaW9uLWNhcmQgLmNhcmRfaGVhZGVyIGgzIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbmlvbi1mb290ZXIgaW9uLWNhcmQgLmNhcmRfaGVhZGVyIC5kaXJlY3Rpb24ge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuaW9uLWZvb3RlciBpb24tY2FyZCAuY2FyZF9oZWFkZXIgLmRpcmVjdGlvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBtaW4td2lkdGg6IDIzcHg7XG59XG5pb24tZm9vdGVyIGlvbi1jYXJkIC5kZWxpdmVyeV9kZXRhaWxzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxOXB4IDE5cHg7XG59XG5pb24tZm9vdGVyIGlvbi1jYXJkIC5kZWxpdmVyeV9kZXRhaWxzIC5kb3R0ZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEzcHg7XG4gIGxlZnQ6IC04cHg7XG59XG5pb24tZm9vdGVyIGlvbi1jYXJkIC5kZWxpdmVyeV9kZXRhaWxzIC5kb3R0ZWQgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWZvb3RlciBpb24tY2FyZCAuZGVsaXZlcnlfZGV0YWlscyAuZG90dGVkIHNwYW46OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI3cHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIHdpZHRoOiA0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBtYXJnaW46IGF1dG87XG59XG5pb24tZm9vdGVyIGlvbi1jYXJkIC5kZWxpdmVyeV9kZXRhaWxzIC5kZWxpdmVyeV9hZGRyZXNzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWluLWhlaWdodDogNzVweDtcbn1cbmlvbi1mb290ZXIgaW9uLWNhcmQgLmRlbGl2ZXJ5X2RldGFpbHMgLmRlbGl2ZXJ5X2FkZHJlc3M6bGFzdC1jaGlsZCB7XG4gIG1pbi1oZWlnaHQ6IHVuc2V0O1xufVxuaW9uLWZvb3RlciBpb24tY2FyZCAuZGVsaXZlcnlfZGV0YWlscyAuZGVsaXZlcnlfYWRkcmVzcyBpb24taWNvbi56bWRpLW5hdmlnYXRpb24sIGlvbi1mb290ZXIgaW9uLWNhcmQgLmRlbGl2ZXJ5X2RldGFpbHMgLmRlbGl2ZXJ5X2FkZHJlc3MgaW9uLWljb24uem1kaS1waW4ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBtaW4td2lkdGg6IDMzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nOiAwIDFweDtcbn1cbmlvbi1mb290ZXIgaW9uLWNhcmQgLmRlbGl2ZXJ5X2RldGFpbHMgLmRlbGl2ZXJ5X2FkZHJlc3MgLnRleHRfYm94IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMC45M3JlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuaW9uLWZvb3RlciBpb24tY2FyZCAuZGVsaXZlcnlfZGV0YWlscyAuZGVsaXZlcnlfYWRkcmVzcyAudGV4dF9ib3ggcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk7XG59XG5pb24tZm9vdGVyIGlvbi1jYXJkIC5kZWxpdmVyeV9kZXRhaWxzIC5kZWxpdmVyeV9hZGRyZXNzIC5pb2NuX2JveCB7XG4gIG1pbi13aWR0aDogNjBweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuaW9uLWZvb3RlciBpb24tY2FyZCAuZGVsaXZlcnlfZGV0YWlscyAuZGVsaXZlcnlfYWRkcmVzcyAuaW9jbl9ib3ggaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWluLXdpZHRoOiAyNnB4O1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1jb2wgLmJ1dHRvbi5idG4ge1xuICBmb250LXdlaWdodDogNDAwO1xuICBoZWlnaHQ6IDU4cHg7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWNvbCAuYnV0dG9uLmJ0bi5kYW5nZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXJlZF9jb2xvcik7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/new-delivery/new-delivery.page.ts": function srcAppNewDeliveryNewDeliveryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewDeliveryPage", function () {
      return NewDeliveryPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/network/google-maps.service */
    "./src/app/services/network/google-maps.service.ts");
    /* harmony import */


    var _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/events/my-events.service */
    "./src/app/services/events/my-events.service.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_11__);

    var NewDeliveryPage = /*#__PURE__*/function () {
      function NewDeliveryPage(navCtrl, translate, router, maps, iab, apiService, uiElementService, alertCtrl, myEvent) {
        _classCallCheck(this, NewDeliveryPage);

        this.navCtrl = navCtrl;
        this.translate = translate;
        this.router = router;
        this.maps = maps;
        this.iab = iab;
        this.apiService = apiService;
        this.uiElementService = uiElementService;
        this.alertCtrl = alertCtrl;
        this.myEvent = myEvent;
        this.subscriptions = new Array();
        this.initialized = false;
        this.distanceToShow = "--";
        this.durationToShow = "-- min";
        this.distance_metric = "km";
      }

      _createClass(NewDeliveryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var dm = src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].getSettingValue("distance_metric");
          if (dm != null) this.distance_metric = dm.toLowerCase();
          this.profileMe = src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].getProfile();
          if (this.router.getCurrentNavigation().extras.state) this.order_request = this.router.getCurrentNavigation().extras.state.order_request;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _iterator = _createForOfIteratorHelper(this.subscriptions),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var sub = _step.value;
              sub.unsubscribe();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this.uiElementService.dismissLoading();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          if (!this.initialized) {
            var selectedLocation = src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].getLocation();
            var mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement, selectedLocation).then(function () {
              _this.initialized = true;

              _this.plotMarkers(selectedLocation != null ? new google.maps.LatLng(Number(selectedLocation.latitude), Number(selectedLocation.longitude)) : null, new google.maps.LatLng(Number(_this.order_request.order.vendor.latitude), Number(_this.order_request.order.vendor.longitude)), new google.maps.LatLng(Number(_this.order_request.order.address.latitude), Number(_this.order_request.order.address.longitude)));
            })["catch"](function (err) {
              return console.log(err);
            });
            mapLoaded["catch"](function (err) {
              return console.log(err);
            });
          }
        }
      }, {
        key: "navigateOrder",
        value: function navigateOrder() {
          this.iab.create("http://maps.google.com/maps?saddr=" + (this.order_request.order.vendor.latitude + "," + this.order_request.order.vendor.longitude) + "&daddr=" + (this.order_request.order.address.latitude + "," + this.order_request.order.address.longitude), "_system");
        }
      }, {
        key: "plotMarkers",
        value: function plotMarkers(markerMePos, markerSourcePos, markerDestinationPos) {
          var _this2 = this;

          var component = this;

          if (this.initialized) {
            if (markerMePos != null) new google.maps.Marker({
              position: markerMePos,
              map: this.maps.map,
              icon: 'assets/images/marker_map_me.png'
            });
            if (markerSourcePos != null) new google.maps.Marker({
              position: markerSourcePos,
              map: this.maps.map,
              icon: 'assets/images/marker_map_src.png'
            });
            if (markerDestinationPos != null) new google.maps.Marker({
              position: markerDestinationPos,
              map: this.maps.map,
              icon: 'assets/images/marker_map_dest.png'
            });
            var posBonds = new google.maps.LatLngBounds();
            if (markerMePos != null) posBonds.extend(markerMePos);
            if (markerSourcePos != null) posBonds.extend(markerSourcePos);
            if (markerDestinationPos != null) posBonds.extend(markerDestinationPos);
            if (!posBonds.isEmpty()) setTimeout(function () {
              return _this2.maps.map.panTo(posBonds.getCenter());
            }, 200);
            var directionsService = new google.maps.DirectionsService();
            var directionsDisplay = new google.maps.DirectionsRenderer({
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
            var dirReq = {
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
      }, {
        key: "confirmUpdate",
        value: function confirmUpdate(status) {
          var _this3 = this;

          var keyTitle = status == "accepted" ? "confirm_accept_title" : "confirm_reject_title";
          var keyMessage = status == "accepted" ? "confirm_accept_message" : "confirm_reject_message";
          this.translate.get([keyTitle, keyMessage, "yes", "no"]).subscribe(function (values) {
            _this3.alertCtrl.create({
              header: values[keyTitle],
              message: values[keyMessage],
              buttons: [{
                text: values["no"],
                handler: function handler() {}
              }, {
                text: values["yes"],
                handler: function handler() {
                  _this3.updateRequest(status);
                }
              }]
            }).then(function (alert) {
              return alert.present();
            });
          });
        }
      }, {
        key: "updateRequest",
        value: function updateRequest(status) {
          var _this4 = this;

          this.translate.get(["updating", "something_wrong"]).subscribe(function (values) {
            _this4.uiElementService.presentLoading(values["updating"]);

            firebase__WEBPACK_IMPORTED_MODULE_11__["database"]().ref("deliveries").child(String(_this4.order_request.delivery.id)).child("order-request").child("status").set(status);

            _this4.subscriptions.push(_this4.apiService.updateOrderRequest({
              status: status
            }, _this4.order_request.id).subscribe(function (res) {
              _this4.apiService.updateProfile({
                is_online: 1
              }, _this4.profileMe.id).subscribe(function (res) {
                _this4.uiElementService.dismissLoading();

                _this4.navCtrl.pop();

                _this4.myEvent.setProfileData(res);
              }, function (err) {
                console.log("updateOrder", err);

                _this4.uiElementService.presentToast(values["something_wrong"]);

                _this4.uiElementService.dismissLoading();

                _this4.navCtrl.pop();
              });
            }, function (err) {
              console.log("updateOrder", err);

              _this4.uiElementService.presentToast(values["something_wrong"]);

              _this4.uiElementService.dismissLoading();

              _this4.navCtrl.pop();
            }));
          });
        }
      }, {
        key: "computeTotalDistance",
        value: function computeTotalDistance(result) {
          var totalDistance = 0,
              totalDuration = 0;
          var myroute = result.routes[0];

          for (var i = 0; i < myroute.legs.length; i++) {
            totalDistance += myroute.legs[i].distance.value;
            totalDuration += myroute.legs[i].duration.value;
          }

          src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].setOrderDistanceDuration(this.order_request.order.id, {
            distance: totalDistance,
            duration: totalDuration
          });
          this.distanceToShow = src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].formatDistance(totalDistance, this.distance_metric);
          this.durationToShow = src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].formatDuration(totalDuration);
          var refOrderStat = firebase__WEBPACK_IMPORTED_MODULE_11__["database"]().ref().child("deliveries").child(String(this.profileMe.id)).child("order_stats").child(String(this.order_request.order.id));
          refOrderStat.set({
            distance: totalDistance,
            duration: totalDuration
          });
        }
      }]);

      return NewDeliveryPage;
    }();

    NewDeliveryPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsService"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__["UiElementsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_9__["MyEventsService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("pleaseConnect", {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], NewDeliveryPage.prototype, "pleaseConnect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("map", {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], NewDeliveryPage.prototype, "mapElement", void 0);
    NewDeliveryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-delivery',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./new-delivery.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-delivery/new-delivery.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./new-delivery.page.scss */
      "./src/app/new-delivery/new-delivery.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__["UiElementsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_9__["MyEventsService"]])], NewDeliveryPage);
    /***/
  }
}]);
//# sourceMappingURL=new-delivery-new-delivery-module-es5.js.map