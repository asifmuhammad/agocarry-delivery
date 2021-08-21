function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-us-contact-us-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.page.html": function node_modulesRawLoaderDistCjsJsSrcAppContactUsContactUsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>{{'contact_us' | translate}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"form\">\n        <h1>{{'your_words' | translate}}<br>{{'means_a_lot' | translate}}<br>{{'to_us' | translate}} !</h1>\n        <h2>{{'let_us_know_queries_feedback' | translate}}</h2>\n        <ion-list lines=\"none\">\n            <ion-item lines=\"none\">\n                <div class=\"item_inner d-flex\">\n<!--                    <ion-label position=\"fixed\">{{'full_name' | translate}}</ion-label>-->\n                    <ion-icon class=\"zmdi zmdi-account ion-text-start\"></ion-icon>\n                    <ion-input placeholder=\"{{'full_name' | translate}}\"disabled=\"true\" [(ngModel)]=\"supportRequest.name\"></ion-input>\n                </div>\n            </ion-item>\n            <ion-item lines=\"none\">\n                <div class=\"item_inner d-flex\">\n<!--                    <ion-label position=\"fixed\">{{'email_address' | translate}}</ion-label>-->\n                    <ion-icon class=\"zmdi zmdi-email ion-text-start\"></ion-icon>\n                    <ion-input placeholder=\"{{'email_address' | translate}}\" disabled=\"true\" [(ngModel)]=\"supportRequest.email\"></ion-input>\n                </div>\n            </ion-item>\n\n            <ion-item lines=\"none\">\n                <div class=\"item_inner d-flex\">\n                    <ion-icon class=\"zmdi zmdi-edit ion-text-start\"></ion-icon>\n                    <ion-textarea type=\"name\" rows=\"3\" [(ngModel)]=\"supportRequest.message\" maxlength=\"500\" placeholder=\"{{'enter_your_message' | translate}}\"></ion-textarea>\n                </div>\n            </ion-item>\n            <ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"submit()\">\n                {{'submit' | translate}}\n            </ion-button>\n        </ion-list>\n    </div>\n\n    <div class=\"footer_banner\">\n        <img src=\"assets/images/hero_image.png\">\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/contact-us/contact-us-routing.module.ts": function srcAppContactUsContactUsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsPageRoutingModule", function () {
      return ContactUsPageRoutingModule;
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


    var _contact_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contact-us.page */
    "./src/app/contact-us/contact-us.page.ts");

    var routes = [{
      path: '',
      component: _contact_us_page__WEBPACK_IMPORTED_MODULE_3__["ContactUsPage"]
    }];

    var ContactUsPageRoutingModule = function ContactUsPageRoutingModule() {
      _classCallCheck(this, ContactUsPageRoutingModule);
    };

    ContactUsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContactUsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/contact-us/contact-us.module.ts": function srcAppContactUsContactUsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function () {
      return ContactUsPageModule;
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


    var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact-us-routing.module */
    "./src/app/contact-us/contact-us-routing.module.ts");
    /* harmony import */


    var _contact_us_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./contact-us.page */
    "./src/app/contact-us/contact-us.page.ts");

    var ContactUsPageModule = function ContactUsPageModule() {
      _classCallCheck(this, ContactUsPageModule);
    };

    ContactUsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_6__["ContactUsPageRoutingModule"]],
      declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_7__["ContactUsPage"]]
    })], ContactUsPageModule);
    /***/
  },

  /***/
  "./src/app/contact-us/contact-us.page.scss": function srcAppContactUsContactUsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form {\n  padding-top: 15px;\n  margin-bottom: 65px;\n}\n.form h1 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 1.85rem;\n  line-height: 31px;\n  margin-bottom: 15px;\n}\n.form h2 {\n  color: var(--text-light) !important;\n  margin: 0;\n  font-size: 1rem !important;\n  letter-spacing: 0;\n  font-weight: 500;\n  line-height: 19px;\n  margin-bottom: 50px;\n}\n.form ion-list ion-item.item-textarea .item_inner {\n  align-items: flex-start;\n}\n.form ion-list ion-item.item-textarea .item_inner ion-icon {\n  position: relative;\n  top: 15px;\n}\n.form ion-list ion-item.item-textarea .item_inner ion-textarea {\n  margin: 0 !important;\n}\n.footer_banner img {\n  display: block;\n  margin: auto;\n  width: 270px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9GOlxcZml2ZXJcXEJlcm5hcmRcXEFnb2NhcnJ5XFxhZ29jYXJyeS1kZWxpdmVyeS9zcmNcXGFwcFxcY29udGFjdC11c1xcY29udGFjdC11cy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURDSTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NSO0FERUk7RUFDSSxtQ0FBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQVI7QURNZ0I7RUFDSSx1QkFBQTtBQ0pwQjtBRE1vQjtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ0p4QjtBRE9vQjtFQUNJLG9CQUFBO0FDTHhCO0FEY0k7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNYUiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNjVweDtcblxuICAgIGgxIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEuODVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7IFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7IFxuICAgIH1cblxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgJi5pdGVtLXRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICAuaXRlbV9pbm5lciB7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlvbi10ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZvb3Rlcl9iYW5uZXIge1xuICAgIGltZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHdpZHRoOiAyNzBweDtcbiAgICB9XG59IiwiLmZvcm0ge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNjVweDtcbn1cbi5mb3JtIGgxIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuODVyZW07XG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmZvcm0gaDIge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0uaXRlbS10ZXh0YXJlYSAuaXRlbV9pbm5lciB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0uaXRlbS10ZXh0YXJlYSAuaXRlbV9pbm5lciBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxNXB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0uaXRlbS10ZXh0YXJlYSAuaXRlbV9pbm5lciBpb24tdGV4dGFyZWEge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLmZvb3Rlcl9iYW5uZXIgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDI3MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/contact-us/contact-us.page.ts": function srcAppContactUsContactUsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsPage", function () {
      return ContactUsPage;
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


    var src_models_support_request_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/models/support-request.models */
    "./src/models/support-request.models.ts");
    /* harmony import */


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");

    var ContactUsPage = /*#__PURE__*/function () {
      function ContactUsPage(navCtrl, translate, uiElementService, apiService) {
        _classCallCheck(this, ContactUsPage);

        this.navCtrl = navCtrl;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.subscriptions = new Array();
        var userMe = src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].getLoggedInUser();
        this.supportRequest = new src_models_support_request_models__WEBPACK_IMPORTED_MODULE_2__["SupportRequest"](userMe.name, userMe.email);
      }

      _createClass(ContactUsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
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
        key: "submit",
        value: function submit() {
          var _this = this;

          if (this.supportRequest && this.supportRequest.message) {
            this.translate.get(["supporting", "supporting_success", "something_wrong"]).subscribe(function (values) {
              _this.uiElementService.presentLoading(values["supporting"]);

              _this.subscriptions.push(_this.apiService.submitSupport(_this.supportRequest).subscribe(function (res) {
                _this.uiElementService.dismissLoading();

                _this.uiElementService.presentToast(values["supporting_success"]);

                _this.navCtrl.navigateRoot(["/home"]);
              }, function (err) {
                console.log("submitSupport", err);

                _this.uiElementService.dismissLoading();

                _this.uiElementService.presentToast(values["something_wrong"]);
              }));
            });
          } else {
            this.translate.get("err_valid_support_msg").subscribe(function (value) {
              return _this.uiElementService.presentToast(value);
            });
          }
        }
      }]);

      return ContactUsPage;
    }();

    ContactUsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__["UiElementsService"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    ContactUsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-us',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./contact-us.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./contact-us.page.scss */
      "./src/app/contact-us/contact-us.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], ContactUsPage);
    /***/
  },

  /***/
  "./src/models/support-request.models.ts": function srcModelsSupportRequestModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportRequest", function () {
      return SupportRequest;
    });

    var SupportRequest = function SupportRequest(name, email) {
      _classCallCheck(this, SupportRequest);

      this.name = name;
      this.email = email;
      this.message = "";
    };
    /***/

  }
}]);
//# sourceMappingURL=contact-us-contact-us-module-es5.js.map