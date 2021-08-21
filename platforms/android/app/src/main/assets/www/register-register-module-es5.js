function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html": function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{'register_now' | translate}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n    <div class=\"form\">\n        <p class=\"ion-text-center\">{{'register_now_message' | translate}} <br>{{'register_now_message2' | translate}}\n        </p>\n\n        <ion-list lines=\"none\">\n            <ion-item lines=\"none\">\n\n                <div class=\"item_inner d-flex\">\n                    <ion-icon class=\"zmdi zmdi-globe-alt ion-text-start\"></ion-icon>\n\n                    <ion-select mode=\"md\" [(ngModel)]=\"countryCode\" multiple=\"false\" [value]=\"countryCode\"\n                        placeholder=\"{{'select_country' | translate}}\" [okText]=\"'okay' | translate\"\n                        [cancelText]=\"'cancel' | translate\" (ionChange)=\"changeHint()\"\n                        [selectedText]=\"countryCodeCountryText\">\n                        <ion-select-option *ngFor=\"let country of countries\" [value]=\"country.callingCodes[0]\">\n                            {{country.name}}\n                        </ion-select-option>\n                    </ion-select>\n\n                </div>\n            </ion-item>\n            <ion-item lines=\"none\">\n                <div class=\"item_inner d-flex\">\n                    <!--                    <ion-label position=\"fixed\">{{phoneNumberHint}}</ion-label>-->\n                    <ion-icon class=\"zmdi  zmdi-smartphone-iphone ion-text-start\"></ion-icon>\n                    <ion-input placeholder=\"{{phoneNumberHint}}\" type=\"tel\" [(ngModel)]=\"phoneNumber\"></ion-input>\n                </div>\n            </ion-item>\n            <ion-item lines=\"none\">\n                <div class=\"item_inner d-flex\">\n                    <!--                 <ion-label position=\"fixed\">{{'full_name' | translate}}</ion-label>-->\n                    <ion-icon class=\" zmdi zmdi-account ion-text-start\">\n                    </ion-icon>\n                    <ion-input placeholder=\"{{'full_name' | translate}}\" type=\"text\" [(ngModel)]=\"signUpRequest.name\">\n                    </ion-input>\n                </div>\n            </ion-item>\n            <ion-item lines=\"none\">\n                <div class=\"item_inner d-flex\">\n                    <!--                    <ion-label position=\"fixed\">{{'email_address' | translate}}</ion-label>-->\n                    <ion-icon class=\"zmdi zmdi-email ion-text-start\"></ion-icon>\n                    <ion-input placeholder=\"{{'email_address' | translate}}\" type=\"email\"\n                        [(ngModel)]=\"signUpRequest.email\"></ion-input>\n                </div>\n            </ion-item>\n            <ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"requestSignUp()\">\n                {{'continue' | translate}}\n            </ion-button>\n        </ion-list>\n        <h4 class=\"ion-text-center\" (click)=\"goBack()\">\n            {{'back_to_sign_in' | translate}}\n        </h4>\n        <div class=\"form\">\n            <p class=\"ion-text-center\">{{'will_send_an_otp_on_above' | translate}}\n                <br>{{'given_phone_number' | translate}}\n            </p>\n        </div>\n    </div>\n\n</ion-content>\n\n<!-- <ion-footer class=\"ion-no-border\">\n\t<div class=\"form\">\n\t\t<p class=\"ion-text-center\">{{'will_send_an_otp_on_above' | translate}} <br>{{'given_phone_number' | translate}}\n\t\t</p>\n\t</div>\n</ion-footer> -->";
    /***/
  },

  /***/
  "./src/app/register/register-routing.module.ts": function srcAppRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
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


    var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];

    var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    };

    RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/register/register.module.ts": function srcAppRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
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


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/register/register-routing.module.ts");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_6__["RegisterPageRoutingModule"]],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_7__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/register/register.page.scss": function srcAppRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form {\n  padding-top: 50px;\n}\n.form ion-item {\n  background: var(--info_field_bg);\n}\n.form ion-item.item-input ion-label {\n  max-width: unset !important;\n  width: -webkit-fit-content !important;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.form ion-item.item-select {\n  padding: 2px 13px;\n}\n.form ion-item.item-select ion-label {\n  display: none;\n}\n.form p {\n  color: var(--text-light) !important;\n  margin: 0;\n  font-size: 1rem !important;\n  letter-spacing: 0;\n  font-weight: 500;\n  line-height: 19px;\n  margin-bottom: 50px;\n  opacity: 0.8;\n}\n.form .button.btn.button-block {\n  margin-top: 25px;\n}\n.form ion-list {\n  margin-bottom: 28px;\n}\n.form h4 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n}\nion-footer .form {\n  padding-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRjpcXGZpdmVyXFxCZXJuYXJkXFxBZ29jYXJyeVxcYWdvY2FycnktZGVsaXZlcnkvc3JjXFxhcHBcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNJLGlCQUFBO0FDUko7QURVSTtFQUNJLGdDQUFBO0FDUlI7QURZWTtFQUNJLDJCQUFBO0VBQ0EscUNBQUE7RUFBQSxrQ0FBQTtFQUFBLDZCQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0FDVmhCO0FEY1E7RUFDSSxpQkFBQTtBQ1paO0FEY1k7RUFDSSxhQUFBO0FDWmhCO0FEaUJJO0VBQ0ksbUNBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNmUjtBRGtCSTtFQUNJLGdCQUFBO0FDaEJSO0FEbUJJO0VBQ0ksbUJBQUE7QUNqQlI7QURvQkk7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDbEJSO0FEdUJJO0VBQ0ksMkJBQUE7QUNwQlIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2lvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbi8vICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuLy8gICAgbGVmdDogMDtcbi8vICAgIHRvcDogMDtcbi8vICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG4vL31cblxuLmZvcm0ge1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmZvX2ZpZWxkX2JnKTtcbiAgICAgICAgLy8gICAgICAgIHBhZGRpbmc6IDJweCAyMHB4O1xuXG4gICAgICAgICYuaXRlbS1pbnB1dCB7XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5pdGVtLXNlbGVjdCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHggMTNweDtcblxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG5cbiAgICAuYnV0dG9uLmJ0bi5idXR0b24tYmxvY2sge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIH1cblxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgICB9XG5cbiAgICBoNCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gICAgLmZvcm0ge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuIiwiLmZvcm0ge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cbi5mb3JtIGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW5mb19maWVsZF9iZyk7XG59XG4uZm9ybSBpb24taXRlbS5pdGVtLWlucHV0IGlvbi1sYWJlbCB7XG4gIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG59XG4uZm9ybSBpb24taXRlbS5pdGVtLXNlbGVjdCB7XG4gIHBhZGRpbmc6IDJweCAxM3B4O1xufVxuLmZvcm0gaW9uLWl0ZW0uaXRlbS1zZWxlY3QgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5mb3JtIHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBvcGFjaXR5OiAwLjg7XG59XG4uZm9ybSAuYnV0dG9uLmJ0bi5idXR0b24tYmxvY2sge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLmZvcm0gaW9uLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuLmZvcm0gaDQge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLWZvb3RlciAuZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/register/register.page.ts": function srcAppRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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


    var src_models_auth_signup_request_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/models/auth-signup-request.models */
    "./src/models/auth-signup-request.models.ts");
    /* harmony import */


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");
    /* harmony import */


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(navCtrl, uiElementService, apiService, route, translate, alertCtrl) {
        _classCallCheck(this, RegisterPage);

        this.navCtrl = navCtrl;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.route = route;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.signUpRequest = new src_models_auth_signup_request_models__WEBPACK_IMPORTED_MODULE_3__["SignUpRequest"]();
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.changeHint();
          this.route.queryParams.subscribe(function (params) {
            var code = params["code"];
            var phone = params["phone"];
            var name = params["name"];
            var email = params["email"];
            if (code && code.length) _this.countryCode = code;
            if (phone && phone.length) _this.phoneNumber = phone;
            if (name && name.length) _this.signUpRequest.name = name;
            if (email && email.length) _this.signUpRequest.email = email;

            _this.apiService.getCountries().subscribe(function (res) {
              _this.countries = res;
              _this.countryCode = _this.countryCode;

              _this.changeHint(true);
            });
          });
          this.apiService.getCountries().subscribe(function (res) {
            _this.countries = res;

            _this.changeHint(true);
          });
        }
      }, {
        key: "changeHint",
        value: function changeHint(clearPhoneSkip) {
          var _this2 = this;

          this.phoneNumber = clearPhoneSkip ? this.phoneNumber : "";

          if (this.countryCode && this.countryCode.length) {
            var _iterator = _createForOfIteratorHelper(this.countries),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var country = _step.value;
                if (country.callingCodes[0] && country.callingCodes[0] == this.countryCode) this.countryCodeCountryText = country.name;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.translate.get('enter_phone_number_exluding').subscribe(function (value) {
              return _this2.phoneNumberHint = value + " (+" + _this2.countryCode + ")";
            });
          } else {
            this.translate.get('enter_phone_number').subscribe(function (value) {
              return _this2.phoneNumberHint = value;
            });
          }
        }
      }, {
        key: "requestSignUp",
        value: function requestSignUp() {
          var _this3 = this;

          var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

          if (this.signUpRequest.name.length < 2) {
            this.translate.get("err_valid_name").subscribe(function (value) {
              return _this3.uiElementService.presentToast(value);
            });
          } else if (this.signUpRequest.email.length <= 5 || !reg.test(this.signUpRequest.email)) {
            this.translate.get("err_valid_email").subscribe(function (value) {
              return _this3.uiElementService.presentToast(value);
            });
          } else if (!this.countryCode || !this.countryCode.length || !this.phoneNumber || !this.phoneNumber.length) {
            this.translate.get("err_valid_phone").subscribe(function (value) {
              return _this3.uiElementService.presentToast(value);
            });
          } else {
            this.alertPhone();
          }
        }
      }, {
        key: "alertPhone",
        value: function alertPhone() {
          var _this4 = this;

          this.translate.get(['alert_phone', 'no', 'yes']).subscribe(function (text) {
            _this4.phoneNumberFull = "+" + _this4.countryCode + src_models_helper_models__WEBPACK_IMPORTED_MODULE_8__["Helper"].formatPhone(_this4.phoneNumber);

            _this4.alertCtrl.create({
              header: _this4.phoneNumberFull,
              message: text['alert_phone'],
              buttons: [{
                text: text['no'],
                role: 'cancel',
                handler: function handler() {
                  console.log('Cancel clicked');
                }
              }, {
                text: text['yes'],
                handler: function handler() {
                  _this4.signUpRequest.password = String(Math.floor(100000 + Math.random() * 900000));
                  _this4.signUpRequest.mobile_number = _this4.phoneNumberFull;

                  _this4.signUp();
                }
              }]
            }).then(function (alert) {
              return alert.present();
            });
          });
        }
      }, {
        key: "signUp",
        value: function signUp() {
          var _this5 = this;

          this.translate.get('signing_up').subscribe(function (value) {
            _this5.uiElementService.presentLoading(value);

            _this5.apiService.createUser(_this5.signUpRequest).subscribe(function (res) {
              console.log(res);

              _this5.uiElementService.dismissLoading();

              var navigationExtras = {
                queryParams: {
                  phoneNumberFull: res.user.mobile_number
                }
              };

              _this5.navCtrl.navigateForward(['./verification'], navigationExtras);
            }, function (err) {
              console.log(err);

              _this5.uiElementService.dismissLoading();

              var errMsg;

              _this5.translate.get(['invalid_credentials', 'invalid_credential_email', 'invalid_credential_phone', 'invalid_credential_password']).subscribe(function (value) {
                errMsg = value['invalid_credentials'];

                if (err && err.error && err.error.errors) {
                  if (err.error.errors.email) {
                    errMsg = value['invalid_credential_email'];
                  } else if (err.error.errors.mobile_number) {
                    errMsg = value['invalid_credential_phone'];
                  } else if (err.error.errors.password) {
                    errMsg = value['invalid_credential_password'];
                  }
                }

                _this5.uiElementService.presentErrorAlert(errMsg);
              });
            });
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.pop();
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/register/register.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], RegisterPage);
    /***/
  },

  /***/
  "./src/models/auth-signup-request.models.ts": function srcModelsAuthSignupRequestModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpRequest", function () {
      return SignUpRequest;
    });
    /* harmony import */


    var _constants_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./constants.models */
    "./src/models/constants.models.ts");

    var SignUpRequest = function SignUpRequest() {
      _classCallCheck(this, SignUpRequest);

      this.name = "";
      this.email = "";
      this.password = "";
      this.mobile_number = "";
      this.role = _constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].ROLE_DELIVERY;
    };
    /***/

  }
}]);
//# sourceMappingURL=register-register-module-es5.js.map