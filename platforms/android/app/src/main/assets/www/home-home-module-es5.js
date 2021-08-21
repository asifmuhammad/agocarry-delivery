function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html": function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"bg_transparent\">\n    <ion-toolbar>\n        <div class=\"toolbar_inner d-flex\">\n            <ion-buttons slot=\"start\">\n                <ion-menu-button></ion-menu-button>\n            </ion-buttons>\n            <ion-title>\n                <div class=\"d-flex title_inner\">\n                    <div class=\"profile_img center_img\">\n                        <img *ngIf=\"profile && profile.user.image_url\" [src]=\"profile.user.image_url\" class=\"crop_img\">\n                        <img *ngIf=\"!profile || !profile.user.image_url\" src=\"assets/images/empty_dp.png\"\n                            class=\"crop_img\">\n                    </div>\n\n                    <div class=\"text_box\">\n                        <h2>{{profileSummary.orders_count}} {{'orders' | translate}} <span>|</span>\n                            {{currency_icon}}{{profileSummary.earnings}}</h2>\n                        <h3>{{'today' | translate}}</h3>\n                    </div>\n                </div>\n                <!--\n                <div class=\"d-flex title_inner\">\n                    <span *ngIf=\"profile.is_online!=1\">{{'you_are_offline' | translate}}</span>\n                    <span *ngIf=\"profile.is_online==1\">{{'you_are_online' | translate}}</span>\n\n                    <div *ngIf=\"profile.is_online!=1\" class=\"online_button online end\" (click)=\"toggleOnline()\">\n                        {{'go_online' | translate}}\n                    </div>\n                    <div *ngIf=\"profile.is_online==1\" class=\"online_button offline end\" (click)=\"toggleOnline()\">\n                        {{'go_offline' | translate}}\n                    </div>\n                </div>\n-->\n            </ion-title>\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n    <div #map id=\"map\" class=\"map\">\n        <!-- <ion-spinner></ion-spinner> -->\n    </div>\n    <div #pleaseConnect id=\"please-connect\">\n        <!-- <p>{{'loading' | translate}}</p> -->\n    </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\" [ngClass]=\"expandedFooter ? 'active' : ''\">\n    <div *ngIf=\"profile.is_online!=1\" class=\"GoOnline\" (click)=\"toggleOnline()\">\n        <h2 class=\"ion-text-center\">{{'go' | translate}}<br>{{'online' | translate}}</h2>\n    </div>\n    <!--\n    <div class=\"all_delivery\">\n        <ion-row class=\"ion-text-center\">\n            <ion-col size=\"4\">\n                <h2>{{profileSummary.orders_count}}</h2>\n                <h3>{{'orders' | translate}}</h3>\n            </ion-col>\n            <ion-col size=\"4\">\n                <h2 *ngIf=\"profileSummary.distance_travelled\">{{profileSummary.distance_travelled}} km</h2>\n                <h3 *ngIf=\"profileSummary.distance_travelled\">{{'ride' | translate}}</h3>\n            </ion-col>\n            <ion-col size=\"4\">\n                <h2>{{currency_icon}}{{profileSummary.earnings}}</h2>\n                <h3>{{'earnings' | translate}}</h3>\n            </ion-col>\n        </ion-row>\n    </div>\n-->\n\n    <div class=\"online_offile_option d-flex\">\n        <div class=\"text_box\" *ngIf=\"profile.is_online==1\">\n            <h2 class=\"d-flex online\">\n                <span></span>\n                &nbsp;&nbsp;&nbsp;\n                <small>{{'you_are_online' | translate}}</small>\n            </h2>\n            <h2 class=\"d-flex offline\" (click)=\"toggleOnline()\">\n                <span></span>\n                &nbsp;&nbsp;&nbsp;\n                <small>{{'go_offline' | translate}} </small>\n            </h2>\n        </div>\n\n        <div class=\"text_box\" *ngIf=\"profile.is_online!=1\">\n            <h2 class=\"d-flex offline\">\n                <span></span>\n                &nbsp;&nbsp;&nbsp;\n                <small>{{'you_are_offline' | translate}}</small>\n            </h2>\n            <h2 class=\"d-flex online\" (click)=\"toggleOnline()\">\n                <span></span>\n                &nbsp;&nbsp;&nbsp;\n                <small>{{'go_online' | translate}}</small>\n            </h2>\n        </div>\n        <ion-icon class=\"zmdi zmdi-chevron-up\" (click)=\"toggleFooterExpansion()\"></ion-icon>\n    </div>\n\n    <ion-button *ngIf=\"profile.is_online==1\" size=\"large\" expand=\"full\" class=\"btn\" (click)=\"checkDeliveryRequest()\">\n        {{'check_delivery' | translate}}\n    </ion-button>\n\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts": function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts": function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/network/google-maps.service */
    "./src/app/services/network/google-maps.service.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
      providers: [_services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsService"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss": function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  padding-top: 21px;\n}\nion-header::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n  background: linear-gradient(180deg, white 5%, rgba(252, 196, 27, 0) 100%);\n}\nion-header ion-toolbar .toolbar_inner {\n  align-items: flex-start;\n}\nion-header ion-toolbar .toolbar_inner ion-title {\n  position: relative !important;\n  top: 0;\n}\nion-header ion-toolbar .toolbar_inner ion-title .title_inner {\n  width: 100%;\n  text-align: initial;\n  align-items: flex-start;\n}\nion-header ion-toolbar .toolbar_inner ion-title .title_inner .profile_img {\n  min-width: 61px;\n  height: 61px;\n  border-radius: 10px;\n  margin-right: 16px;\n}\nion-header ion-toolbar .toolbar_inner ion-title .title_inner .text_box {\n  width: 100%;\n  padding-top: 4px;\n}\nion-header ion-toolbar .toolbar_inner ion-title .title_inner .text_box h2 {\n  margin: 0;\n  color: var(--text-black);\n  font-size: 1.1rem;\n  padding-bottom: 7px;\n  font-weight: 600;\n}\nion-header ion-toolbar .toolbar_inner ion-title .title_inner .text_box h2 span {\n  color: var(--primary);\n  font-weight: 500;\n}\nion-header ion-toolbar .toolbar_inner ion-title .title_inner .text_box h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.95rem;\n}\nion-header ion-toolbar .toolbar_inner ion-title .online_button {\n  border-radius: 50px;\n  height: 31px;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  font-weight: 500;\n  line-height: 31px;\n  padding: 0 10px;\n  min-width: 108px;\n  text-align: center;\n}\nion-header ion-toolbar .toolbar_inner ion-title .online_button.online {\n  background: var(--secondary);\n}\nion-header ion-toolbar .toolbar_inner ion-title .online_button.offline {\n  background: var(--red_color);\n}\n.map {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.delivery_location {\n  position: absolute;\n  width: 22px;\n}\nion-footer {\n  min-height: 166px;\n  position: absolute;\n  bottom: 0;\n}\nion-footer .GoOnline {\n  margin: 0 auto;\n  margin: 0 auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  align-items: center;\n  position: relative;\n  border-radius: 50%;\n  min-width: 95px;\n  height: 95px;\n  top: -8px;\n}\nion-footer .GoOnline::before, ion-footer .GoOnline::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  background: var(--primary);\n  opacity: 0.5;\n  border-radius: 50%;\n}\nion-footer .GoOnline::after {\n  width: calc(100% - 15px);\n  height: calc(100% - 15px);\n  opacity: 1;\n}\nion-footer .GoOnline h2 {\n  position: relative;\n  z-index: 99;\n  display: block;\n  margin: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  color: var(--white);\n  font-size: 1.1rem;\n  font-weight: 400;\n  letter-spacing: 0.5px;\n}\nion-footer .online_offile_option {\n  background: var(--white);\n  border-radius: 10px 10px 0 0;\n  width: calc(100% - 30px);\n  margin: 0 auto;\n  padding: 6px 0;\n  height: 116px;\n  position: relative;\n  bottom: -50px;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n  transition: all 0.2s;\n}\nion-footer .online_offile_option ion-icon {\n  position: absolute;\n  right: 21px;\n  top: 19px;\n  font-size: 1.7rem;\n  text-align: center;\n  transition: all 0.2s;\n}\nion-footer .online_offile_option .text_box {\n  width: 100%;\n  height: 110px;\n  position: relative;\n  overflow: hidden;\n}\nion-footer .online_offile_option h2 {\n  margin: 0 auto;\n  width: 100%;\n  color: var(--text-black);\n  padding: 13px 22px;\n  position: relative;\n}\nion-footer .online_offile_option h2 small {\n  display: block;\n  font-size: 1.2rem;\n}\nion-footer .online_offile_option h2 span {\n  display: block;\n  position: relative;\n  min-width: 80px;\n  height: 10px;\n}\nion-footer .online_offile_option h2 span::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\nion-footer .online_offile_option h2.offline span::after {\n  background: var(--red_color);\n}\nion-footer .online_offile_option h2.online span::after {\n  background: var(--green_color);\n}\nion-footer .button.btn {\n  position: relative;\n  width: 100%;\n  transition: all 0.5s;\n}\nion-footer.active .all_delivery {\n  bottom: -100%;\n}\nion-footer.active .button.btn {\n  bottom: 0%;\n}\nion-footer.active .online_offile_option {\n  bottom: 0;\n}\nion-footer.active .online_offile_option ion-icon {\n  transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9GOlxcZml2ZXJcXEJlcm5hcmRcXEFnb2NhcnJ5XFxhZ29jYXJyeS1kZWxpdmVyeS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlFQUFBO0FDQ1I7QURHUTtFQUNJLHVCQUFBO0FDRFo7QURHWTtFQUNJLDZCQUFBO0VBQ0EsTUFBQTtBQ0RoQjtBREdnQjtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRHBCO0FER29CO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRHhCO0FESW9CO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDRnhCO0FESXdCO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRjVCO0FESTRCO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBQ0ZoQztBRE13QjtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FDSjVCO0FEU2dCO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1BwQjtBRFNvQjtFQUNJLDRCQUFBO0FDUHhCO0FEVW9CO0VBQ0ksNEJBQUE7QUNSeEI7QURnQkE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNiSjtBRGdCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ2JKO0FEZ0JBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNiSjtBRGVJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDYlI7QURlUTtFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2RaO0FEaUJRO0VBQ0ksd0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUNmWjtBRGtCUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNoQlo7QURvQkk7RUFDSSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNsQlI7QURvQlE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDbEJaO0FEcUJRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDbkJaO0FEc0JRO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNwQlo7QURzQlk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNwQmhCO0FEdUJZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNyQmhCO0FEdUJnQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ3JCcEI7QUQ2Qm9CO0VBQ0ksNEJBQUE7QUMzQnhCO0FEb0NvQjtFQUNJLDhCQUFBO0FDbEN4QjtBRHlDSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FDdkNSO0FEMkNRO0VBQ0ksYUFBQTtBQ3pDWjtBRDRDUTtFQUNJLFVBQUE7QUMxQ1o7QUQ2Q1E7RUFDSSxTQUFBO0FDM0NaO0FENkNZO0VBQ0kseUJBQUE7QUMzQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIHBhZGRpbmctdG9wOiAyMXB4O1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDUlLCByZ2JhKDI1MiwgMTk2LCAyNywgMCkgMTAwJSk7XG4gICAgfVxuXG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICAudG9vbGJhcl9pbm5lciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgICAgICAgaW9uLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG5cbiAgICAgICAgICAgICAgICAudGl0bGVfaW5uZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLnByb2ZpbGVfaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNjFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudGV4dF9ib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm9ubGluZV9idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMxcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzFweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwOHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgJi5vbmxpbmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICYub2ZmbGluZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWRfY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubWFwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZGVsaXZlcnlfbG9jYXRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjJweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gICAgbWluLWhlaWdodDogMTY2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcblxuICAgIC5Hb09ubGluZSB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWluLXdpZHRoOiA5NXB4O1xuICAgICAgICBoZWlnaHQ6IDk1cHg7XG4gICAgICAgIHRvcDogLThweDtcblxuICAgICAgICAmOjpiZWZvcmUsXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1cHgpO1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNXB4KTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5vbmxpbmVfb2ZmaWxlX29wdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogNnB4IDA7XG4gICAgICAgIGhlaWdodDogMTE2cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm90dG9tOiAtNTBweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAyMXB4O1xuICAgICAgICAgICAgdG9wOiAxOXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0X2JveCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEzcHggMjJweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgc21hbGwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcblxuICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLm9mZmxpbmUge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIHRvcDogNnB4O1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXJlZF9jb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYub25saW5lIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICBib3R0b206IDZweDtcblxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbl9jb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYnV0dG9uLmJ0biB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgLmFsbF9kZWxpdmVyeSB7XG4gICAgICAgICAgICBib3R0b206IC0xMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbi5idG4ge1xuICAgICAgICAgICAgYm90dG9tOiAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5vbmxpbmVfb2ZmaWxlX29wdGlvbiB7XG4gICAgICAgICAgICBib3R0b206IDA7XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW9uLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAyMXB4O1xufVxuaW9uLWhlYWRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB3aGl0ZSA1JSwgcmdiYSgyNTIsIDE5NiwgMjcsIDApIDEwMCUpO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciAudG9vbGJhcl9pbm5lciB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciAudG9vbGJhcl9pbm5lciBpb24tdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgdG9wOiAwO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciAudG9vbGJhcl9pbm5lciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGluaXRpYWw7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciAudG9vbGJhcl9pbm5lciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIC5wcm9maWxlX2ltZyB7XG4gIG1pbi13aWR0aDogNjFweDtcbiAgaGVpZ2h0OiA2MXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIC50b29sYmFyX2lubmVyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgLnRleHRfYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIC50b29sYmFyX2lubmVyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgLnRleHRfYm94IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciAudG9vbGJhcl9pbm5lciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIC50ZXh0X2JveCBoMiBzcGFuIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciAudG9vbGJhcl9pbm5lciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIC50ZXh0X2JveCBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIC50b29sYmFyX2lubmVyIGlvbi10aXRsZSAub25saW5lX2J1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogMzFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIG1pbi13aWR0aDogMTA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLnRvb2xiYXJfaW5uZXIgaW9uLXRpdGxlIC5vbmxpbmVfYnV0dG9uLm9ubGluZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIC50b29sYmFyX2lubmVyIGlvbi10aXRsZSAub25saW5lX2J1dHRvbi5vZmZsaW5lIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkX2NvbG9yKTtcbn1cblxuLm1hcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZGVsaXZlcnlfbG9jYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMnB4O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgbWluLWhlaWdodDogMTY2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuaW9uLWZvb3RlciAuR29PbmxpbmUge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1pbi13aWR0aDogOTVweDtcbiAgaGVpZ2h0OiA5NXB4O1xuICB0b3A6IC04cHg7XG59XG5pb24tZm9vdGVyIC5Hb09ubGluZTo6YmVmb3JlLCBpb24tZm9vdGVyIC5Hb09ubGluZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgb3BhY2l0eTogMC41O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5pb24tZm9vdGVyIC5Hb09ubGluZTo6YWZ0ZXIge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTVweCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTVweCk7XG4gIG9wYWNpdHk6IDE7XG59XG5pb24tZm9vdGVyIC5Hb09ubGluZSBoMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbmlvbi1mb290ZXIgLm9ubGluZV9vZmZpbGVfb3B0aW9uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA2cHggMDtcbiAgaGVpZ2h0OiAxMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IC01MHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5pb24tZm9vdGVyIC5vbmxpbmVfb2ZmaWxlX29wdGlvbiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIxcHg7XG4gIHRvcDogMTlweDtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5pb24tZm9vdGVyIC5vbmxpbmVfb2ZmaWxlX29wdGlvbiAudGV4dF9ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW9uLWZvb3RlciAub25saW5lX29mZmlsZV9vcHRpb24gaDIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgcGFkZGluZzogMTNweCAyMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24tZm9vdGVyIC5vbmxpbmVfb2ZmaWxlX29wdGlvbiBoMiBzbWFsbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbmlvbi1mb290ZXIgLm9ubGluZV9vZmZpbGVfb3B0aW9uIGgyIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIGhlaWdodDogMTBweDtcbn1cbmlvbi1mb290ZXIgLm9ubGluZV9vZmZpbGVfb3B0aW9uIGgyIHNwYW46OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5pb24tZm9vdGVyIC5vbmxpbmVfb2ZmaWxlX29wdGlvbiBoMi5vZmZsaW5lIHNwYW46OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkX2NvbG9yKTtcbn1cbmlvbi1mb290ZXIgLm9ubGluZV9vZmZpbGVfb3B0aW9uIGgyLm9ubGluZSBzcGFuOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuX2NvbG9yKTtcbn1cbmlvbi1mb290ZXIgLmJ1dHRvbi5idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbmlvbi1mb290ZXIuYWN0aXZlIC5hbGxfZGVsaXZlcnkge1xuICBib3R0b206IC0xMDAlO1xufVxuaW9uLWZvb3Rlci5hY3RpdmUgLmJ1dHRvbi5idG4ge1xuICBib3R0b206IDAlO1xufVxuaW9uLWZvb3Rlci5hY3RpdmUgLm9ubGluZV9vZmZpbGVfb3B0aW9uIHtcbiAgYm90dG9tOiAwO1xufVxuaW9uLWZvb3Rlci5hY3RpdmUgLm9ubGluZV9vZmZpbGVfb3B0aW9uIGlvbi1pY29uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts": function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var src_models_profile_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/models/profile.models */
    "./src/models/profile.models.ts");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/events/my-events.service */
    "./src/app/services/events/my-events.service.ts");
    /* harmony import */


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");
    /* harmony import */


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/network/google-maps.service */
    "./src/app/services/network/google-maps.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_models_insight_order_models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/models/insight-order.models */
    "./src/models/insight-order.models.ts");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(route, navCtrl, translate, myEvent, uiElementService, apiService, maps) {
        _classCallCheck(this, HomePage);

        this.route = route;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.myEvent = myEvent;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.maps = maps;
        this.subscriptions = new Array();
        this.initialized = false;
        this.profile = new src_models_profile_models__WEBPACK_IMPORTED_MODULE_3__["Profile"]();
        this.profileSummary = new src_models_insight_order_models__WEBPACK_IMPORTED_MODULE_11__["OrderInsight"]();
        this.expandedFooter = false;
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.subscriptions.push(this.myEvent.getLocationObservable().subscribe(function (location) {
            if (_this.initialized && location != null) _this.plotMarker(new google.maps.LatLng(Number(location.latitude), Number(location.longitude)));
          }));
          this.loadDeliverySummary();
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
          var _this2 = this;

          this.profile = src_models_helper_models__WEBPACK_IMPORTED_MODULE_4__["Helper"].getProfile();

          if (!this.initialized) {
            var selectedLocation = src_models_helper_models__WEBPACK_IMPORTED_MODULE_4__["Helper"].getLocation();
            var mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement, selectedLocation).then(function () {
              _this2.initialized = true;
              if (selectedLocation != null) _this2.plotMarker(new google.maps.LatLng(Number(selectedLocation.latitude), Number(selectedLocation.longitude)));
            })["catch"](function (err) {
              return console.log(err);
            });
            mapLoaded["catch"](function (err) {
              return console.log(err);
            });
          }

          var recheck = window.localStorage.getItem("recheck");
          if (recheck != null) this.checkDeliveryRequest();
          window.localStorage.removeItem("recheck");
        }
      }, {
        key: "plotMarker",
        value: function plotMarker(pos) {
          if (!this.markerMe) {
            this.markerMe = new google.maps.Marker({
              position: pos,
              map: this.maps.map
            });
          } else {
            this.markerMe.setPosition(pos);
            this.markerMe.setMap(this.maps.map);
          }

          this.maps.map.panTo(pos);
        }
      }, {
        key: "toggleOnline",
        value: function toggleOnline() {
          var _this3 = this;

          if (this.profile == null || this.profile.id == null) this.profile = src_models_helper_models__WEBPACK_IMPORTED_MODULE_4__["Helper"].getProfile();
          this.translate.get(["updating", "something_wrong"]).subscribe(function (values) {
            _this3.uiElementService.presentLoading(values["updating"]);

            _this3.subscriptions.push(_this3.apiService.updateProfile({
              is_online: _this3.profile.is_online == 1 ? 0 : 1
            }, _this3.profile.id).subscribe(function (res) {
              _this3.profile = res;

              _this3.uiElementService.dismissLoading();

              if (_this3.profile.is_online != 1) {
                _this3.loadDeliverySummary();

                _this3.clearMap();
              }

              _this3.myEvent.setProfileData(res);
            }, function (err) {
              console.log("updateOrder", err);

              _this3.uiElementService.presentToast(values["something_wrong"], "top");

              _this3.uiElementService.dismissLoading();
            }));
          });
          this.expandedFooter = false;
        }
      }, {
        key: "clearMap",
        value: function clearMap() {
          if (this.markerMe != null) {
            this.markerMe.setMap(null);
          }
        }
      }, {
        key: "loadDeliverySummary",
        value: function loadDeliverySummary() {
          var _this4 = this;

          this.currency_icon = src_models_helper_models__WEBPACK_IMPORTED_MODULE_4__["Helper"].getSettingValue("currency_icon");
          if (this.profile == null || this.profile.id == null) this.profile = src_models_helper_models__WEBPACK_IMPORTED_MODULE_4__["Helper"].getProfile();
          this.subscriptions.push(this.apiService.getInsightOrder(String(this.profile.id), {
            duration: "hours",
            limit: 24
          }).subscribe(function (res) {
            return _this4.profileSummary = res;
          }, function (err) {
            return console.log("getSummary", err);
          }));
        }
      }, {
        key: "checkDeliveryRequest",
        value: function checkDeliveryRequest() {
          var _this5 = this;

          if (this.profile == null || this.profile.id == null) this.profile = src_models_helper_models__WEBPACK_IMPORTED_MODULE_4__["Helper"].getProfile();
          this.translate.get(["just_moment", "something_wrong"]).subscribe(function (values) {
            _this5.uiElementService.presentLoading(values["just_moment"]);

            _this5.subscriptions.push(_this5.apiService.updateProfile({
              is_online: 1
            }, _this5.profile.id).subscribe(function (res) {
              _this5.profile = res;

              _this5.uiElementService.dismissLoading();

              _this5.myEvent.setProfileData(res);
            }, function (err) {
              console.log("updateOrder", err);

              _this5.uiElementService.presentToast(values["something_wrong"], "top");

              _this5.uiElementService.dismissLoading();
            }));
          });
        }
      }, {
        key: "toggleFooterExpansion",
        value: function toggleFooterExpansion() {
          this.expandedFooter = !this.expandedFooter;
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_6__["MyEventsService"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_7__["UiElementsService"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
      }, {
        type: _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_9__["GoogleMapsService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("pleaseConnect", {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], HomePage.prototype, "pleaseConnect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("map", {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], HomePage.prototype, "mapElement", void 0);
    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_6__["MyEventsService"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_7__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"], _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_9__["GoogleMapsService"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map