function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delivered-succesfully-delivered-succesfully-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/delivered-succesfully/delivered-succesfully.page.html": function node_modulesRawLoaderDistCjsJsSrcAppDeliveredSuccesfullyDeliveredSuccesfullyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--\n<ion-header>\n  <ion-toolbar>\n    <ion-title>delivered-succesfully</ion-title>\n  </ion-toolbar>\n</ion-header>\n-->\n\n<ion-content>\n\t<div class=\"container\">\n\t\t<div class=\"img_box\">\n\t\t\t<img src=\"assets/images/delivery_completed.png\">\n\t\t</div>\n\t\t<h1 class=\"ion-text-center\">\n\t\t\t{{'delivered_successfully' | translate}}<br>\n\t\t\t<small> {{'thank_you_for_delivery_safely_on_time' | translate}}</small>\n\t\t</h1>\n\t\t<div class=\"order_info\">\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t<h2>{{'your_drived' | translate}}</h2>\n\t\t\t\t\t<h3>{{distanceToShow}} {{distance_metric | translate}} ({{durationToShow}})</h3>\n\t\t\t\t\t<!-- <h4 (click)=\"order_info()\">{{'view_order_info' | translate}}</h4> -->\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t<h2>{{'your_earning' | translate}}</h2>\n\t\t\t\t\t<h3>{{delivery_fee}}</h3>\n\t\t\t\t\t<!-- <h4 (click)=\"view_earnings()\">{{'view_earnings' | translate}}</h4> -->\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</div>\n\t</div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n\t<ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"goHome()\">\n\t\t{{'back_to_home' | translate}}\n\t</ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/delivered-succesfully/delivered-succesfully-routing.module.ts": function srcAppDeliveredSuccesfullyDeliveredSuccesfullyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeliveredSuccesfullyPageRoutingModule", function () {
      return DeliveredSuccesfullyPageRoutingModule;
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


    var _delivered_succesfully_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./delivered-succesfully.page */
    "./src/app/delivered-succesfully/delivered-succesfully.page.ts");

    var routes = [{
      path: '',
      component: _delivered_succesfully_page__WEBPACK_IMPORTED_MODULE_3__["DeliveredSuccesfullyPage"]
    }];

    var DeliveredSuccesfullyPageRoutingModule = function DeliveredSuccesfullyPageRoutingModule() {
      _classCallCheck(this, DeliveredSuccesfullyPageRoutingModule);
    };

    DeliveredSuccesfullyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DeliveredSuccesfullyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/delivered-succesfully/delivered-succesfully.module.ts": function srcAppDeliveredSuccesfullyDeliveredSuccesfullyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeliveredSuccesfullyPageModule", function () {
      return DeliveredSuccesfullyPageModule;
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


    var _delivered_succesfully_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./delivered-succesfully-routing.module */
    "./src/app/delivered-succesfully/delivered-succesfully-routing.module.ts");
    /* harmony import */


    var _delivered_succesfully_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./delivered-succesfully.page */
    "./src/app/delivered-succesfully/delivered-succesfully.page.ts");

    var DeliveredSuccesfullyPageModule = function DeliveredSuccesfullyPageModule() {
      _classCallCheck(this, DeliveredSuccesfullyPageModule);
    };

    DeliveredSuccesfullyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _delivered_succesfully_routing_module__WEBPACK_IMPORTED_MODULE_6__["DeliveredSuccesfullyPageRoutingModule"]],
      declarations: [_delivered_succesfully_page__WEBPACK_IMPORTED_MODULE_7__["DeliveredSuccesfullyPage"]]
    })], DeliveredSuccesfullyPageModule);
    /***/
  },

  /***/
  "./src/app/delivered-succesfully/delivered-succesfully.page.scss": function srcAppDeliveredSuccesfullyDeliveredSuccesfullyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  width: calc(100% - 40px);\n  margin: 0 auto;\n}\n.container .img_box {\n  width: 100%;\n  margin: 0 auto;\n  margin-top: 44%;\n  max-width: 310px;\n}\n.container h1 {\n  color: var(--text-black);\n  margin: 0;\n  font-size: 1.3rem;\n  font-weight: 600;\n}\n.container h1 small {\n  display: block;\n  font-weight: 400;\n  font-size: 1rem;\n  padding-top: 4px;\n}\n.container .order_info {\n  padding: 0 10px;\n  padding-top: 30%;\n}\n.container .order_info ion-row {\n  margin: 0 -5px;\n}\n.container .order_info ion-row h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.9rem;\n  font-weight: 400;\n  padding-bottom: 5px;\n}\n.container .order_info ion-row h3 {\n  margin: 0;\n  color: var(--text-black);\n  font-size: 1.1rem;\n  font-weight: 600;\n  padding-bottom: 5px;\n}\n.container .order_info ion-row h4 {\n  margin: 0;\n  color: var(--primary);\n  font-weight: 400;\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsaXZlcmVkLXN1Y2Nlc2Z1bGx5L0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWRlbGl2ZXJ5L3NyY1xcYXBwXFxkZWxpdmVyZWQtc3VjY2VzZnVsbHlcXGRlbGl2ZXJlZC1zdWNjZXNmdWxseS5wYWdlLnNjc3MiLCJzcmMvYXBwL2RlbGl2ZXJlZC1zdWNjZXNmdWxseS9kZWxpdmVyZWQtc3VjY2VzZnVsbHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxjQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ1I7QURFSTtFQUNJLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREVRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQVo7QURJSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0ZSO0FESVE7RUFDSSxjQUFBO0FDRlo7QURJWTtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZoQjtBREtZO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSGhCO0FETVk7RUFDSSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSmhCIiwiZmlsZSI6InNyYy9hcHAvZGVsaXZlcmVkLXN1Y2Nlc2Z1bGx5L2RlbGl2ZXJlZC1zdWNjZXNmdWxseS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAuaW1nX2JveCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogNDQlO1xuICAgICAgICBtYXgtd2lkdGg6IDMxMHB4O1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgICAgIHNtYWxsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAub3JkZXJfaW5mbyB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwJTtcblxuICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAtNXB4O1xuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbnRhaW5lciAuaW1nX2JveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogNDQlO1xuICBtYXgtd2lkdGg6IDMxMHB4O1xufVxuLmNvbnRhaW5lciBoMSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5jb250YWluZXIgaDEgc21hbGwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuLmNvbnRhaW5lciAub3JkZXJfaW5mbyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgcGFkZGluZy10b3A6IDMwJTtcbn1cbi5jb250YWluZXIgLm9yZGVyX2luZm8gaW9uLXJvdyB7XG4gIG1hcmdpbjogMCAtNXB4O1xufVxuLmNvbnRhaW5lciAub3JkZXJfaW5mbyBpb24tcm93IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmNvbnRhaW5lciAub3JkZXJfaW5mbyBpb24tcm93IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmNvbnRhaW5lciAub3JkZXJfaW5mbyBpb24tcm93IGg0IHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/delivered-succesfully/delivered-succesfully.page.ts": function srcAppDeliveredSuccesfullyDeliveredSuccesfullyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeliveredSuccesfullyPage", function () {
      return DeliveredSuccesfullyPage;
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


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);

    var DeliveredSuccesfullyPage = /*#__PURE__*/function () {
      function DeliveredSuccesfullyPage(navCtrl, route) {
        _classCallCheck(this, DeliveredSuccesfullyPage);

        this.navCtrl = navCtrl;
        this.route = route;
        this.distanceToShow = "--";
        this.durationToShow = "-- min";
        this.distance_metric = "km";
      }

      _createClass(DeliveredSuccesfullyPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var dm = src_models_helper_models__WEBPACK_IMPORTED_MODULE_4__["Helper"].getSettingValue("distance_metric");
          if (dm != null) this.distance_metric = dm.toLowerCase();
          this.route.queryParams.subscribe(function (params) {
            var order_id = params["order_id"];
            _this.delivery_fee = params["delivery_fee"];
            var dm = src_models_helper_models__WEBPACK_IMPORTED_MODULE_4__["Helper"].getOrderDistanceDuration(Number(order_id));

            if (dm != null) {
              _this.distanceToShow = src_models_helper_models__WEBPACK_IMPORTED_MODULE_4__["Helper"].formatDistance(dm.distance, _this.distance_metric);
              _this.durationToShow = src_models_helper_models__WEBPACK_IMPORTED_MODULE_4__["Helper"].formatDuration(dm.duration); //let refDeliveryStat = firebase.database().ref().child("deliveries").child(String(Helper.getProfile().id)).child("delivery_stat");
              //refOrderStat.set({ distance: totalDistance, duration: totalDuration });

              var refDeliveryStat = firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref().child("deliveries").child(String(src_models_helper_models__WEBPACK_IMPORTED_MODULE_4__["Helper"].getProfile().id)).child("delivery_stat");
              refDeliveryStat.once('value').then(function (snapshot) {
                var deliveryStat = snapshot.val();
                refDeliveryStat.set({
                  distance: deliveryStat ? deliveryStat.distance + dm.distance : dm.distance,
                  duration: deliveryStat ? deliveryStat.duration + dm.duration : dm.duration
                });
              });
            }
          });
        }
      }, {
        key: "goHome",
        value: function goHome() {
          window.localStorage.setItem("recheck", "true");
          this.navCtrl.navigateRoot(['./home']);
        }
      }, {
        key: "order_info",
        value: function order_info() {//this.route.navigate(['./order-history']);
        }
      }, {
        key: "view_earnings",
        value: function view_earnings() {//this.navCtrl.navigateRoot(['./wallet']);
        }
      }]);

      return DeliveredSuccesfullyPage;
    }();

    DeliveredSuccesfullyPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    DeliveredSuccesfullyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-delivered-succesfully',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./delivered-succesfully.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/delivered-succesfully/delivered-succesfully.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./delivered-succesfully.page.scss */
      "./src/app/delivered-succesfully/delivered-succesfully.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], DeliveredSuccesfullyPage);
    /***/
  }
}]);
//# sourceMappingURL=delivered-succesfully-delivered-succesfully-module-es5.js.map