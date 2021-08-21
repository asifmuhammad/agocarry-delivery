function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faq-faq-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.page.html": function node_modulesRawLoaderDistCjsJsSrcAppFaqFaqPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button></ion-menu-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{'faqs' | translate}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg_color\">\n\t<ion-list lines=\"none\">\n\t\t<ion-item *ngFor=\"let faq of faqs\" [ngClass]=\"faq.id == curFaqId ? 'active' : '' \" (click)=\"expandFaq(faq)\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h2>{{faq.title}}</h2>\n\t\t\t\t<div class=\"text_box\">\n\t\t\t\t\t<p *ngIf=\"faq.id != curFaqId\">{{faq.short_description}}</p>\n\t\t\t\t\t<p *ngIf=\"faq.id == curFaqId\">{{faq.description}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/faq/faq-routing.module.ts": function srcAppFaqFaqRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqPageRoutingModule", function () {
      return FaqPageRoutingModule;
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


    var _faq_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./faq.page */
    "./src/app/faq/faq.page.ts");

    var routes = [{
      path: '',
      component: _faq_page__WEBPACK_IMPORTED_MODULE_3__["FaqPage"]
    }];

    var FaqPageRoutingModule = function FaqPageRoutingModule() {
      _classCallCheck(this, FaqPageRoutingModule);
    };

    FaqPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FaqPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/faq/faq.module.ts": function srcAppFaqFaqModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqPageModule", function () {
      return FaqPageModule;
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


    var _faq_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./faq-routing.module */
    "./src/app/faq/faq-routing.module.ts");
    /* harmony import */


    var _faq_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./faq.page */
    "./src/app/faq/faq.page.ts");

    var FaqPageModule = function FaqPageModule() {
      _classCallCheck(this, FaqPageModule);
    };

    FaqPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _faq_routing_module__WEBPACK_IMPORTED_MODULE_6__["FaqPageRoutingModule"]],
      declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_7__["FaqPage"]]
    })], FaqPageModule);
    /***/
  },

  /***/
  "./src/app/faq/faq.page.scss": function srcAppFaqFaqPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 4px;\n}\nion-list ion-item {\n  padding: 15px 20px;\n  min-height: unset !important;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  margin-bottom: 4px;\n  background: var(--white);\n  transition: all 0.5s;\n}\nion-list ion-item .item_inner {\n  align-items: flex-start;\n}\nion-list ion-item .item_inner h2 {\n  margin: 0;\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--text-black);\n}\nion-list ion-item .item_inner h3 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--text-black);\n}\nion-list ion-item .item_inner .text_box {\n  height: 0px;\n  overflow: hidden;\n  transition: all 0.5s;\n}\nion-list ion-item .item_inner .text_box p {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  padding-top: 13px;\n  line-height: 23px;\n  color: var(--text-light);\n}\nion-list ion-item.active {\n  transition: all 0.5s;\n}\nion-list ion-item.active .item_inner .text_box {\n  height: auto;\n  transition: all 0.5s;\n}\n.empty-view {\n  width: 200px;\n  margin: auto;\n  height: 200px;\n  top: 10%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 10%;\n}\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFxL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWRlbGl2ZXJ5L3NyY1xcYXBwXFxmYXFcXGZhcS5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZhcS9mYXEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDSTtFQUNJLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0FDQ1I7QURDUTtFQUNJLHVCQUFBO0FDQ1o7QURDWTtFQUNJLFNBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FDQ2hCO0FERVk7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FDQWhCO0FER1k7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0RoQjtBREdnQjtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUNEcEI7QURNUTtFQUNJLG9CQUFBO0FDSlo7QURPWTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtBQ0xoQjtBRFdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDUko7QURVSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDUlI7QURXSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ1RSO0FEWUk7RUFDSSxnQkFBQTtBQ1ZSO0FEWVE7RUFDSSx5QkFBQTtBQ1ZaIiwiZmlsZSI6InNyYy9hcHAvZmFxL2ZhcS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy10b3A6IDRweDtcblxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgLS1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcblxuICAgICAgICAuaXRlbV9pbm5lciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50ZXh0X2JveCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcblxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEzcHg7IFxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuXG4gICAgICAgICAgICAvL3BhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgICAgICAgICAuaXRlbV9pbm5lciAudGV4dF9ib3gge1xuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmVtcHR5LXZpZXcge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB0b3A6IDEwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDEwJTtcblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufSIsImlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3gge1xuICBoZWlnaHQ6IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nLXRvcDogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtLmFjdGl2ZSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0uYWN0aXZlIC5pdGVtX2lubmVyIC50ZXh0X2JveCB7XG4gIGhlaWdodDogYXV0bztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5lbXB0eS12aWV3IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMjAwcHg7XG4gIHRvcDogMTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDEwJTtcbn1cbi5lbXB0eS12aWV3IGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmVtcHR5LXZpZXcgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZW1wdHktdmlldyBidXR0b24ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmVtcHR5LXZpZXcgYnV0dG9uIHNwYW4ge1xuICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/faq/faq.page.ts": function srcAppFaqFaqPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqPage", function () {
      return FaqPage;
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


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");

    var FaqPage = /*#__PURE__*/function () {
      function FaqPage(apiService) {
        _classCallCheck(this, FaqPage);

        this.apiService = apiService;
        this.subscriptions = new Array();
        this.isLoading = true;
        this.faqs = src_models_helper_models__WEBPACK_IMPORTED_MODULE_3__["Helper"].getFaqs();
      }

      _createClass(FaqPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.apiService.getFaqs().subscribe(function (res) {
            _this.faqs = res;
            src_models_helper_models__WEBPACK_IMPORTED_MODULE_3__["Helper"].setFaqs(_this.faqs);
          }, function (err) {
            console.log("getFaqs", err);
          });
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
            } //this.uiElementService.dismissLoading();

          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }, {
        key: "expandFaq",
        value: function expandFaq(faq) {
          this.curFaqId = this.curFaqId == faq.id ? -1 : faq.id;
        }
      }]);

      return FaqPage;
    }();

    FaqPage.ctorParameters = function () {
      return [{
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    FaqPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-faq',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./faq.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./faq.page.scss */
      "./src/app/faq/faq.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_network_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])], FaqPage);
    /***/
  }
}]);
//# sourceMappingURL=faq-faq-module-es5.js.map