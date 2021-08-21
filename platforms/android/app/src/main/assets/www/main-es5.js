function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$": function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$": function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app [dir]=\"rtlSide\">\n    <!--<ion-app  dir=\"rtl\">-->\n    <ion-split-pane contentId=\"main-content\">\n        <ion-menu *ngIf=\"showSideMenu\" [side]=\"rtlSideMenu\" contentId=\"main-content\" type=\"overlay\">\n            <ion-header>\n                <ion-toolbar>\n                    <ion-title>\n                        <div class=\"title_inner d-flex\">\n                            <div class=\"close_button\">\n                                <ion-menu-toggle auto-hide=\"false\">\n                                    <ion-icon class=\"zmdi zmdi-close\"></ion-icon>\n                                </ion-menu-toggle>\n                            </div>\n                            <span> {{'account' | translate}}</span>\n                        </div>\n                    </ion-title>\n                </ion-toolbar>\n\n\n                <ion-menu-toggle auto-hide=\"false\" (click)=\"viewProfile()\">\n                    <div class=\"banner\">\n                        <div class=\"profile_details d-flex\">\n                            <div class=\"img_box center_img\">\n                                <img *ngIf=\"profileMe && profileMe.user.image_url\" [src]=\"profileMe.user.image_url\"\n                                    class=\"crop_img\">\n                                <img *ngIf=\"!profileMe || !profileMe.user.image_url\" src=\"assets/images/empty_dp.png\"\n                                    class=\"crop_img\">\n                            </div>\n                            <div *ngIf=\"profileMe\" class=\"text_box\">\n                                <h2>{{profileMe.user.name}}</h2>\n                                <p>{{profileMe.user.mobile_number}}</p>\n                                <p>{{'view_profile' | translate}}</p>\n                            </div>\n                            <div *ngIf=\"!profileMe\" class=\"text_box\">\n                                <h2>{{'hey_guest' | translate}}</h2>\n                                <p [innerHTML]=\"'alert_login_msg' | translate\"></p>\n                            </div>\n                        </div>\n                    </div>\n                </ion-menu-toggle>\n            </ion-header>\n\n            <ion-content>\n\n                <ion-list lines=\"none\">\n                    <!--\n                    <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPagesToUse\">\n                        <ion-item mode=\"ios\" detail-icon=\"string\" (click)=\"onNavItemClick(p)\">\n                            <div class=\"item_inner d-flex\">\n                                <ion-icon class=\"ion-text-start\" slot=\"start\" [class]=\"p.icon\"></ion-icon>\n                                <h2>{{ p.title | translate}}</h2>\n                            </div>\n                        </ion-item>\n                    </ion-menu-toggle>\n-->\n\n                    <ion-row>\n                        <ion-col size=\"6\" detail-icon=\"string\" *ngFor=\"let p of appPagesToUse\">\n                            <ion-menu-toggle auto-hide=\"false\">\n                                <div class=\"menu_box\" (click)=\"onNavItemClick(p)\">\n                                    <h2>{{ p.title | translate}}</h2>\n                                    <h3>{{ p.sub_title | translate}}</h3>\n                                    <ion-icon class=\"ion-text-end\" slot=\"start\" [class]=\"p.icon\"></ion-icon>\n                                </div>\n                            </ion-menu-toggle>\n                        </ion-col>\n                    </ion-row>\n\n                </ion-list>\n            </ion-content>\n            <div class=\"buy_this_app\" (click)=\"buyAppAction()\" *ngIf=\"config.demoMode\">\n                <ion-menu-toggle auto-hide=\"false\">\n                    <h2>\n                        {{\"buy_this_app\" | translate}}\n                    </h2>\n                </ion-menu-toggle>\n            </div>\n            <ion-footer class=\"ion-no-border\" *ngIf=\"config.demoMode\">\n                <div class=\"developed_by d-flex\" (click)=\"developed_by()\">\n                    <h2>{{\"developed_by\" | translate}}</h2>\n                    <div class=\"img_box ion-text-end\">\n                        <img src=\"assets/images/vt_white.png\">\n                    </div>\n                </div>\n            </ion-footer>\n        </ion-menu>\n        <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n    </ion-split-pane>\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html": function node_modulesRawLoaderDistCjsJsSrcAppChatChatPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<div class=\"close_button\">\n\t\t<ion-icon class=\"zmdi zmdi-chevron-down\" (click)=\"dismiss()\"></ion-icon>\n\t</div>\n\t<div class=\"customer_detail d-flex\">\n\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-start\"></ion-icon>\n\t\t<div class=\"text_box\">\n\t\t\t<h2>{{chatObj.chatName}}</h2>\n\t\t\t<p>{{chatObj.chatStatus}}</p>\n\t\t</div>\n\t\t<ion-icon class=\"zmdi zmdi-phone ion-text-end end\" (click)=\"dialNum()\"></ion-icon>\n\t</div>\n</ion-header>\n\n<ion-content fullsereen #myContent>\n\t<div class=\"chat_container d-flex\">\n\t\t<div *ngFor=\"let msg of messages\"\n\t\t\t[ngClass]=\"(chatObj.myId == msg.senderId) ? 'chat_box d-flex send' : 'chat_box d-flex received'\">\n\t\t\t<div class=\"chat\">\n\t\t\t\t<h2>{{msg.body}}</h2>\n\t\t\t\t<p>{{msg.timeDiff}}</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n\t<div class=\"form\">\n\t\t<ion-list lines=\"none d-flex\">\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-input type=\"text\" [(ngModel)]=\"newMessageText\" placeholder=\"{{'type_your_message' | translate}}\">\n\t\t\t\t</ion-input>\n\t\t\t</ion-item>\n\t\t\t<div class=\"send_btn end\" (click)=\"send()\">\n\t\t\t\t<ion-icon class=\"zmdi zmdi-mail-send\"></ion-icon>\n\t\t\t</div>\n\t\t</ion-list>\n\t</div>\n</ion-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vt-popup/vt-popup.page.html": function node_modulesRawLoaderDistCjsJsSrcAppVtPopupVtPopupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"cloes_btn ion-text-end\" > \n      <ion-icon name=\"close-outline\" (click)=\"dismiss()\"></ion-icon>\n  </div>\n\n  <ion-card>\n      <div class=\"img_box\">\n          <img src=\"https://opuslabs.nyc3.digitaloceanspaces.com/AAFixItems/Other/popup_img_head.png\">\n      </div>\n\n      <div class=\"text_box\">\n          <h2>Stay in touch.</h2>\n          <p>Stay connected for Future <br>updates and new products.</p>\n      </div>\n      <ion-list lines=\"none\">\n\n          <ion-item lines=\"none\">\n              <ion-input type=\"email\" placeholder=\"Enter your email address\" [(ngModel)]=\"email_Id\"></ion-input>\n          </ion-item>\n\n          <ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"onSubscribe()\">\n              Subscribe Now\n          </ion-button>\n\n      </ion-list>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      redirectTo: 'sign-in',
      pathMatch: 'full'
    }, {
      path: 'sign-in',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sign-in-sign-in-module */
        "sign-in-sign-in-module").then(__webpack_require__.bind(null,
        /*! ./sign-in/sign-in.module */
        "./src/app/sign-in/sign-in.module.ts")).then(function (m) {
          return m.SignInPageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | register-register-module */
        "register-register-module").then(__webpack_require__.bind(null,
        /*! ./register/register.module */
        "./src/app/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      }
    }, {
      path: 'tnc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tnc-tnc-module */
        "tnc-tnc-module").then(__webpack_require__.bind(null,
        /*! ./tnc/tnc.module */
        "./src/app/tnc/tnc.module.ts")).then(function (m) {
          return m.TncPageModule;
        });
      }
    }, {
      path: 'faq',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | faq-faq-module */
        "faq-faq-module").then(__webpack_require__.bind(null,
        /*! ./faq/faq.module */
        "./src/app/faq/faq.module.ts")).then(function (m) {
          return m.FaqPageModule;
        });
      }
    }, {
      path: 'contact-us',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | contact-us-contact-us-module */
        "contact-us-contact-us-module").then(__webpack_require__.bind(null,
        /*! ./contact-us/contact-us.module */
        "./src/app/contact-us/contact-us.module.ts")).then(function (m) {
          return m.ContactUsPageModule;
        });
      }
    }, {
      path: 'verification',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | verification-verification-module */
        "verification-verification-module").then(__webpack_require__.bind(null,
        /*! ./verification/verification.module */
        "./src/app/verification/verification.module.ts")).then(function (m) {
          return m.VerificationPageModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | home-home-module */
        [__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'chat',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./chat/chat.module */
        "./src/app/chat/chat.module.ts")).then(function (m) {
          return m.ChatPageModule;
        });
      }
    }, {
      path: 'delivered-succesfully',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | delivered-succesfully-delivered-succesfully-module */
        "delivered-succesfully-delivered-succesfully-module").then(__webpack_require__.bind(null,
        /*! ./delivered-succesfully/delivered-succesfully.module */
        "./src/app/delivered-succesfully/delivered-succesfully.module.ts")).then(function (m) {
          return m.DeliveredSuccesfullyPageModule;
        });
      }
    }, {
      path: 'wallet',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | wallet-wallet-module */
        "wallet-wallet-module").then(__webpack_require__.bind(null,
        /*! ./wallet/wallet.module */
        "./src/app/wallet/wallet.module.ts")).then(function (m) {
          return m.WalletPageModule;
        });
      }
    }, {
      path: 'send-to-bank',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | send-to-bank-send-to-bank-module */
        "send-to-bank-send-to-bank-module").then(__webpack_require__.bind(null,
        /*! ./send-to-bank/send-to-bank.module */
        "./src/app/send-to-bank/send-to-bank.module.ts")).then(function (m) {
          return m.SendToBankPageModule;
        });
      }
    }, {
      path: 'order-history',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | order-history-order-history-module */
        "order-history-order-history-module").then(__webpack_require__.bind(null,
        /*! ./order-history/order-history.module */
        "./src/app/order-history/order-history.module.ts")).then(function (m) {
          return m.OrderHistoryPageModule;
        });
      }
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | profile-profile-module */
        [__webpack_require__.e("common"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null,
        /*! ./profile/profile.module */
        "./src/app/profile/profile.module.ts")).then(function (m) {
          return m.ProfilePageModule;
        });
      }
    }, {
      path: 'insight',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | insight-insight-module */
        [__webpack_require__.e("common"), __webpack_require__.e("insight-insight-module")]).then(__webpack_require__.bind(null,
        /*! ./insight/insight.module */
        "./src/app/insight/insight.module.ts")).then(function (m) {
          return m.InsightPageModule;
        });
      }
    }, {
      path: 'new-delivery',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | new-delivery-new-delivery-module */
        [__webpack_require__.e("common"), __webpack_require__.e("new-delivery-new-delivery-module")]).then(__webpack_require__.bind(null,
        /*! ./new-delivery/new-delivery.module */
        "./src/app/new-delivery/new-delivery.module.ts")).then(function (m) {
          return m.NewDeliveryPageModule;
        });
      }
    }, {
      path: 'accepted',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | accepted-accepted-module */
        [__webpack_require__.e("common"), __webpack_require__.e("accepted-accepted-module")]).then(__webpack_require__.bind(null,
        /*! ./accepted/accepted.module */
        "./src/app/accepted/accepted.module.ts")).then(function (m) {
          return m.AcceptedPageModule;
        });
      }
    }, {
      path: 'change-language',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | change-language-change-language-module */
        "change-language-change-language-module").then(__webpack_require__.bind(null,
        /*! ./change-language/change-language.module */
        "./src/app/change-language/change-language.module.ts")).then(function (m) {
          return m.ChangeLanguagePageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss": function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Italic.woff2') format(\"woff2\"), url('GoogleSans-Italic.woff') format(\"woff\");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Regular.woff2') format(\"woff2\"), url('GoogleSans-Regular.woff') format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-BoldItalic.woff2') format(\"woff2\"), url('GoogleSans-BoldItalic.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Bold.woff2') format(\"woff2\"), url('GoogleSans-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-MediumItalic.woff2') format(\"woff2\"), url('GoogleSans-MediumItalic.woff') format(\"woff\");\n  font-weight: 500;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Medium.woff2') format(\"woff2\"), url('GoogleSans-Medium.woff') format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n}\n*,\nbody,\nhtml,\np,\nspan,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nstrong,\nli {\n  --ion-font-family: \"Google Sans\";\n  font-family: \"Google Sans\";\n}\n.zmdi {\n  font: normal normal normal 14px/1 \"Material-Design-Iconic-Font\";\n}\nion-menu {\n  --width: 100%;\n  --background: #0000;\n}\nion-menu ion-header {\n  padding-top: 14px;\n  background: var(--white);\n}\nion-menu ion-header ion-toolbar {\n  margin-bottom: 14px;\n}\nion-menu ion-header ion-toolbar ion-title .title_inner span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n}\nion-menu ion-header ion-toolbar ion-title .title_inner .close_button {\n  display: block;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  position: relative;\n  top: 7px;\n}\nion-menu ion-header ion-toolbar ion-title .title_inner .close_button ion-icon {\n  color: var(--primary);\n  font-size: 1.5rem;\n}\nion-menu ion-header .banner {\n  background: var(--white);\n  padding: 10px 18px 18px 18px;\n}\nion-menu ion-header .banner .profile_details {\n  width: 100%;\n  align-items: flex-start;\n}\nion-menu ion-header .banner .profile_details .img_box {\n  width: 100%;\n  max-width: 150px;\n  height: 150px;\n  border-radius: 11px;\n  margin-right: 18px;\n  min-width: 150px;\n}\nion-menu ion-header .banner .profile_details .text_box {\n  padding-top: 5px;\n}\nion-menu ion-header .banner .profile_details .text_box h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1.53rem;\n  font-weight: 600;\n  line-height: 31px;\n  margin-bottom: 10px;\n  overflow: hidden;\n}\nion-menu ion-header .banner .profile_details .text_box p {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.94rem;\n  font-weight: 400;\n  padding-bottom: 7px;\n}\nion-menu ion-content {\n  --background: rgba(238, 238, 238, 0);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n}\nion-menu ion-content:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #838383b8;\n  display: block !important;\n}\nion-menu ion-list {\n  background: var(--bg-color) !important;\n  padding: 0;\n  width: calc(100% - 0px);\n  margin: 0 auto;\n  padding: 0;\n}\nion-menu ion-list ion-row {\n  padding: 7px 7px;\n}\nion-menu ion-list ion-row ion-col {\n  padding: 7px 7px;\n}\nion-menu ion-list ion-row ion-col .menu_box {\n  background: var(--white);\n  padding: 20px 15px;\n  border-radius: 4px;\n  position: relative;\n  width: 100%;\n  height: 100px;\n  overflow: hidden;\n}\nion-menu ion-list ion-row ion-col .menu_box h2 {\n  margin: 0;\n  color: var(--text-black);\n  font-size: 1.1rem;\n  font-weight: 700;\n  padding-bottom: 7px;\n}\nion-menu ion-list ion-row ion-col .menu_box h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 0.85rem;\n  white-space: nowrap;\n}\nion-menu ion-list ion-row ion-col .menu_box ion-icon {\n  font-size: 2rem;\n  opacity: 0.2;\n  color: var(--text-light2);\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n}\nion-menu ion-list ion-menu-toggle:nth-child(1) ion-item {\n  background: var(--bg-color);\n  margin-bottom: 14px;\n  padding: 22px 24px;\n}\nion-menu ion-list ion-menu-toggle:nth-child(1) ion-item h2 {\n  color: var(--primary);\n}\nion-menu .buy_this_app {\n  background: var(--primary);\n  border-radius: 50px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  min-width: 143px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 0 20px;\n  position: fixed;\n  z-index: 9999;\n  top: 235px;\n  right: 20px;\n}\nion-menu .buy_this_app h2 {\n  color: var(--white) !important;\n  font-size: 1.1rem !important;\n  font-weight: 500 !important;\n  margin: 0 auto !important;\n  display: flex;\n  align-items: center;\n  letter-spacing: 0 !important;\n}\nion-menu .buy_this_app h2 ion-icon {\n  font-size: 1rem;\n  min-width: 23px;\n}\nion-menu ion-footer {\n  background: var(--primary);\n  z-index: 999;\n  position: relative;\n}\nion-menu ion-footer .developed_by {\n  padding: 2% 5% 2% 5%;\n}\nion-menu ion-footer .developed_by h2 {\n  margin: 0;\n  color: var(--white);\n  font-size: 1rem;\n  font-weight: 500;\n  min-width: 41%;\n  letter-spacing: 0;\n}\nion-menu ion-footer .developed_by .img_box {\n  width: 100%;\n}\nion-menu ion-footer .developed_by .img_box img {\n  max-width: 160px;\n}\nion-menu ion-footer .developed_by .img_box img.dark-theme-logo {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXGZpdmVyXFxCZXJuYXJkXFxBZ29jYXJyeVxcYWdvY2FycnktZGVsaXZlcnkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSxpR0FBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREdBO0VBQ0ksMEJBQUE7RUFDQSxtR0FBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNGSjtBREtBO0VBQ0ksMEJBQUE7RUFDQSx5R0FBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUNKSjtBRE9BO0VBQ0ksMEJBQUE7RUFDQSw2RkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUNOSjtBRFNBO0VBQ0ksMEJBQUE7RUFDQSw2R0FBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUNSSjtBRFdBO0VBQ0ksMEJBQUE7RUFDQSxpR0FBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUNWSjtBRGFBOzs7Ozs7Ozs7Ozs7O0VBYUksZ0NBQUE7RUFDQSwwQkFBQTtBQ1hKO0FEZUE7RUFDSSwrREFBQTtBQ1pKO0FEZUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNaSjtBRGNJO0VBQ0ksaUJBQUE7RUFDQSx3QkFBQTtBQ1pSO0FEY1E7RUFDSSxtQkFBQTtBQ1paO0FEZ0JvQjtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtBQ2R4QjtBRGlCb0I7RUFDSSxjQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDZnhCO0FEaUJ3QjtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUNmNUI7QURzQlE7RUFDSSx3QkFBQTtFQUNBLDRCQUFBO0FDcEJaO0FEc0JZO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0FDcEJoQjtBRHNCZ0I7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDcEJwQjtBRHVCZ0I7RUFDSSxnQkFBQTtBQ3JCcEI7QUR1Qm9CO0VBQ0ksU0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ3JCeEI7QUQyQm9CO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDekJ4QjtBRGdDSTtFQUNJLG9DQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQzlCUjtBRGdDUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDOUJaO0FEa0NJO0VBQ0ksc0NBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ2hDUjtBRGtDUTtFQUNJLGdCQUFBO0FDaENaO0FEa0NZO0VBQ0ksZ0JBQUE7QUNoQ2hCO0FEa0NnQjtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ2hDcEI7QURrQ29CO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDaEN4QjtBRG1Db0I7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNqQ3hCO0FEb0NvQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDbEN4QjtBRDBDZ0I7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUN4Q3BCO0FEMENvQjtFQUNJLHFCQUFBO0FDeEN4QjtBRCtDSTtFQUVJLDBCQUFBO0VBQ04sbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzlDRjtBRGdERTtFQUNDLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUM5Q0g7QURnREc7RUFDQyxlQUFBO0VBQ0EsZUFBQTtBQzlDSjtBRG1ERTtFQUNNLDBCQUFBO0VBRU4sWUFBQTtFQUNBLGtCQUFBO0FDbERGO0FEb0RFO0VBQ0Msb0JBQUE7QUNsREg7QURvREc7RUFDQyxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNsREo7QURxREc7RUFDQyxXQUFBO0FDbkRKO0FEcURJO0VBQ0MsZ0JBQUE7QUNuREw7QURxREs7RUFDQyxhQUFBO0FDbkROIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIjtcbiAgICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtSXRhbGljLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgICB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCI7XG4gICAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICAgIHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCI7XG4gICAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUJvbGRJdGFsaWMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICAgIHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtQm9sZEl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xuICAgIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgICB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIjtcbiAgICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtTWVkaXVtSXRhbGljLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgICB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLU1lZGl1bUl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCI7XG4gICAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLU1lZGl1bS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgICAgdXJsKFwiLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1NZWRpdW0ud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4qLFxuYm9keSxcbmh0bWwsXG5wLFxuc3BhbixcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnN0cm9uZyxcbmxpIHtcbiAgICAtLWlvbi1mb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xuICAgIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCI7XG4gICAgLy9sZXR0ZXItc3BhY2luZzogLjA1cmVtO1xufVxuXG4uem1kaSB7XG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIFwiTWF0ZXJpYWwtRGVzaWduLUljb25pYy1Gb250XCI7XG59XG5cbmlvbi1tZW51IHtcbiAgICAtLXdpZHRoOiAxMDAlO1xuICAgIC0tYmFja2dyb3VuZDogIzAwMDA7XG5cbiAgICBpb24taGVhZGVyIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDE0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcblxuICAgICAgICBpb24tdG9vbGJhciB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuXG4gICAgICAgICAgICBpb24tdGl0bGUge1xuICAgICAgICAgICAgICAgIC50aXRsZV9pbm5lciB7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY2xvc2VfYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogN3B4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmJhbm5lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE4cHggMThweCAxOHB4O1xuXG4gICAgICAgICAgICAucHJvZmlsZV9kZXRhaWxzIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgICAgICAgICAgIC5pbWdfYm94IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMThweDtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGV4dF9ib3gge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuXG4gICAgICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjUzcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTRyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDdweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIzOCwgMjM4LCAyMzgsIDApO1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcblxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzgzODM4M2I4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAwcHgpO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweCA3cHg7XG5cbiAgICAgICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweCA3cHg7XG5cbiAgICAgICAgICAgICAgICAubWVudV9ib3gge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTVweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLW1lbnUtdG9nZ2xlIHtcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjJweCAyNHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5idXlfdGhpc19hcHAge1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS1yZWRfY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcblx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdGhlaWdodDogNDVweDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0bWluLXdpZHRoOiAxNDNweDtcblx0XHR3aWR0aDogZml0LWNvbnRlbnQ7XG5cdFx0cGFkZGluZzogMCAyMHB4O1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHR6LWluZGV4OiA5OTk5O1xuXHRcdHRvcDogMjM1cHg7XG5cdFx0cmlnaHQ6IDIwcHg7XG5cblx0XHRoMiB7XG5cdFx0XHRjb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XG5cdFx0XHRmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuXHRcdFx0bWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAgIWltcG9ydGFudDtcblxuXHRcdFx0aW9uLWljb24ge1xuXHRcdFx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0XHRcdG1pbi13aWR0aDogMjNweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cdFxuXG5cdCBpb24tZm9vdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcblx0XHR6LWluZGV4OiA5OTk7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXG5cdFx0LmRldmVsb3BlZF9ieSB7XG5cdFx0XHRwYWRkaW5nOiAyJSA1JSAyJSA1JTtcblxuXHRcdFx0aDIge1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0bWluLXdpZHRoOiA0MSU7XG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwO1xuXHRcdFx0fVxuXG5cdFx0XHQuaW1nX2JveCB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXG5cdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0bWF4LXdpZHRoOiAxNjBweDtcblxuXHRcdFx0XHRcdCYuZGFyay10aGVtZS1sb2dvIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9XG5cdH1cbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIjtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUl0YWxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1JdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIjtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtQm9sZEl0YWxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1Cb2xkSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtTWVkaXVtSXRhbGljLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLU1lZGl1bUl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtTWVkaXVtLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLU1lZGl1bS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbiosXG5ib2R5LFxuaHRtbCxcbnAsXG5zcGFuLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuc3Ryb25nLFxubGkge1xuICAtLWlvbi1mb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xuICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xufVxuXG4uem1kaSB7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBcIk1hdGVyaWFsLURlc2lnbi1JY29uaWMtRm9udFwiO1xufVxuXG5pb24tbWVudSB7XG4gIC0td2lkdGg6IDEwMCU7XG4gIC0tYmFja2dyb3VuZDogIzAwMDA7XG59XG5pb24tbWVudSBpb24taGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbn1cbmlvbi1tZW51IGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuaW9uLW1lbnUgaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5pb24tbWVudSBpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgLmNsb3NlX2J1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogN3B4O1xufVxuaW9uLW1lbnUgaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIC5jbG9zZV9idXR0b24gaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuaW9uLW1lbnUgaW9uLWhlYWRlciAuYmFubmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nOiAxMHB4IDE4cHggMThweCAxOHB4O1xufVxuaW9uLW1lbnUgaW9uLWhlYWRlciAuYmFubmVyIC5wcm9maWxlX2RldGFpbHMge1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5pb24tbWVudSBpb24taGVhZGVyIC5iYW5uZXIgLnByb2ZpbGVfZGV0YWlscyAuaW1nX2JveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG4gIG1pbi13aWR0aDogMTUwcHg7XG59XG5pb24tbWVudSBpb24taGVhZGVyIC5iYW5uZXIgLnByb2ZpbGVfZGV0YWlscyAudGV4dF9ib3gge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuaW9uLW1lbnUgaW9uLWhlYWRlciAuYmFubmVyIC5wcm9maWxlX2RldGFpbHMgLnRleHRfYm94IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC1zaXplOiAxLjUzcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMzFweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi1tZW51IGlvbi1oZWFkZXIgLmJhbm5lciAucHJvZmlsZV9kZXRhaWxzIC50ZXh0X2JveCBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXNpemU6IDAuOTRyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG59XG5pb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyMzgsIDIzOCwgMjM4LCAwKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG59XG5pb24tbWVudSBpb24tY29udGVudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzgzODM4M2I4O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuaW9uLW1lbnUgaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcikgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDBweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLW1lbnUgaW9uLWxpc3QgaW9uLXJvdyB7XG4gIHBhZGRpbmc6IDdweCA3cHg7XG59XG5pb24tbWVudSBpb24tbGlzdCBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiA3cHggN3B4O1xufVxuaW9uLW1lbnUgaW9uLWxpc3QgaW9uLXJvdyBpb24tY29sIC5tZW51X2JveCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgcGFkZGluZzogMjBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5pb24tbWVudSBpb24tbGlzdCBpb24tcm93IGlvbi1jb2wgLm1lbnVfYm94IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xufVxuaW9uLW1lbnUgaW9uLWxpc3QgaW9uLXJvdyBpb24tY29sIC5tZW51X2JveCBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuaW9uLW1lbnUgaW9uLWxpc3QgaW9uLXJvdyBpb24tY29sIC5tZW51X2JveCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgb3BhY2l0eTogMC4yO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXB4O1xuICByaWdodDogNXB4O1xufVxuaW9uLW1lbnUgaW9uLWxpc3QgaW9uLW1lbnUtdG9nZ2xlOm50aC1jaGlsZCgxKSBpb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgcGFkZGluZzogMjJweCAyNHB4O1xufVxuaW9uLW1lbnUgaW9uLWxpc3QgaW9uLW1lbnUtdG9nZ2xlOm50aC1jaGlsZCgxKSBpb24taXRlbSBoMiB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cbmlvbi1tZW51IC5idXlfdGhpc19hcHAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4td2lkdGg6IDE0M3B4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5O1xuICB0b3A6IDIzNXB4O1xuICByaWdodDogMjBweDtcbn1cbmlvbi1tZW51IC5idXlfdGhpc19hcHAgaDIge1xuICBjb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAgIWltcG9ydGFudDtcbn1cbmlvbi1tZW51IC5idXlfdGhpc19hcHAgaDIgaW9uLWljb24ge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1pbi13aWR0aDogMjNweDtcbn1cbmlvbi1tZW51IGlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgei1pbmRleDogOTk5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24tbWVudSBpb24tZm9vdGVyIC5kZXZlbG9wZWRfYnkge1xuICBwYWRkaW5nOiAyJSA1JSAyJSA1JTtcbn1cbmlvbi1tZW51IGlvbi1mb290ZXIgLmRldmVsb3BlZF9ieSBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtaW4td2lkdGg6IDQxJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5pb24tbWVudSBpb24tZm9vdGVyIC5kZXZlbG9wZWRfYnkgLmltZ19ib3gge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1tZW51IGlvbi1mb290ZXIgLmRldmVsb3BlZF9ieSAuaW1nX2JveCBpbWcge1xuICBtYXgtd2lkdGg6IDE2MHB4O1xufVxuaW9uLW1lbnUgaW9uLWZvb3RlciAuZGV2ZWxvcGVkX2J5IC5pbWdfYm94IGltZy5kYXJrLXRoZW1lLWxvZ28ge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var src_models_constants_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/models/constants.models */
    "./src/models/constants.models.ts");
    /* harmony import */


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/events/my-events.service */
    "./src/app/services/events/my-events.service.ts");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");
    /* harmony import */


    var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/diagnostic/ngx */
    "./node_modules/@ionic-native/diagnostic/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_models_address_models__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/models/address.models */
    "./src/models/address.models.ts");
    /* harmony import */


    var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/location-accuracy/ngx */
    "./node_modules/@ionic-native/location-accuracy/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _vt_popup_vt_popup_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./vt-popup/vt-popup.page */
    "./src/app/vt-popup/vt-popup.page.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(config, alertCtrl, diagnostic, platform, navCtrl, device, menu, splashScreen, apiService, uiElementService, statusBar, oneSignal, locationAccuracy, modalController, translate, myEvent, inAppBrowser) {
        _classCallCheck(this, AppComponent);

        //moc location update after 5 secs
        // setTimeout(() => {
        //   let loc = new MyAddress();
        //   loc.latitude = "28.7041";
        //   loc.longitude = "77.1025";
        //   loc.title = "delhi";
        //   loc.formatted_address = "delhi";
        //   this.onNewLocation(loc);
        // }, 5000);
        this.config = config;
        this.alertCtrl = alertCtrl;
        this.diagnostic = diagnostic;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.device = device;
        this.menu = menu;
        this.splashScreen = splashScreen;
        this.apiService = apiService;
        this.uiElementService = uiElementService;
        this.statusBar = statusBar;
        this.oneSignal = oneSignal;
        this.locationAccuracy = locationAccuracy;
        this.modalController = modalController;
        this.translate = translate;
        this.myEvent = myEvent;
        this.inAppBrowser = inAppBrowser;
        this.rtlSide = "ltr";
        this.rtlSideMenu = "start";
        this.appPagesToUse = [];
        this.showSideMenu = false;
        this.subscriptions = new Array();
        this.watchingLocation = false;
        this.appPagesLoggedIn = [{
          title: 'home',
          sub_title: 'your_delivery',
          url: '/home',
          icon: 'zmdi zmdi-home'
        }, {
          title: 'wallet',
          sub_title: 'quick_payments',
          url: '/wallet',
          icon: 'zmdi zmdi-balance-wallet'
        }, {
          title: 'insight',
          sub_title: 'ride_overview',
          url: '/insight',
          icon: 'zmdi zmdi-chart'
        }, {
          title: 'language',
          sub_title: 'choose_language',
          url: '/change-language',
          icon: 'zmdi zmdi-globe'
        }, {
          title: 'contact_us',
          sub_title: 'let_us_help_you',
          url: '/contact-us',
          icon: 'zmdi zmdi-email'
        }, {
          title: 't_c',
          sub_title: 'company_policies',
          url: '/tnc',
          icon: 'zmdi zmdi-assignment'
        }, {
          title: 'faqs',
          sub_title: 'quick_answers',
          url: '/faq',
          icon: 'zmdi zmdi-assignment-alert'
        }, {
          title: 'logout',
          sub_title: 'see_you_soon',
          url: '/sign-in',
          icon: 'zmdi zmdi-open-in-new'
        }];
        this.appPagesLoggedOut = [{
          title: 'login',
          sub_title: 'see_you_soon',
          url: '/sign-in',
          icon: 'zmdi zmdi-open-in-new'
        }, {
          title: 'Language',
          sub_title: 'choose_language',
          url: '/change-language',
          icon: 'zmdi zmdi-globe'
        }, {
          title: 't_c',
          sub_title: 'company_policies',
          url: '/tnc',
          icon: 'zmdi zmdi-assignment'
        }, {
          title: 'faqs',
          sub_title: 'quick_answers',
          url: '/faq',
          icon: 'zmdi zmdi-assignment-alert'
        }]; // let order = JSON.parse(JSON.stringify({
        //   "id": 1,
        //   "notes": null,
        //   "meta": [
        //   ],
        //   "subtotal": 1,
        //   "taxes": 0.1,
        //   "delivery_fee": 25,
        //   "total": 26.1,
        //   "discount": 0,
        //   "type": "ASAP",
        //   "scheduled_on": "2020-09-15 08:13:39",
        //   "status": "new",
        //   "vendor_id": 1,
        //   "user_id": 3,
        //   "created_at": "2020-09-15T08:13:39.000000Z",
        //   "updated_at": "2020-09-15T08:13:39.000000Z",
        //   "products": [
        //     {
        //       "id": 1,
        //       "quantity": 1,
        //       "total": 1,
        //       "subtotal": null,
        //       "order_id": 1,
        //       "vendor_product_id": null,
        //       "vendor_product": {
        //         "id": 1,
        //         "price": 1,
        //         "sale_price": null,
        //         "sale_price_from": null,
        //         "sale_price_to": null,
        //         "stock_quantity": 0,
        //         "stock_low_threshold": 0,
        //         "product_id": 1,
        //         "vendor_id": 1,
        //         "vendor": {
        //           "id": 1,
        //           "name": "Sabzi Wala",
        //           "tagline": "",
        //           "details": "",
        //           "meta": {
        //             "closing_time": "2020-09-14T22:05:42.847+05:30",
        //             "opening_time": "2020-09-14T06:15:42.846+05:30"
        //           },
        //           "mediaurls": {
        //             "images": [
        //               {
        //                 "default": "https:\/\/foodoz.vtlabs.dev\/storage\/11\/36633512-ripe-vegetables-and-fruits-organic-produce-square-composition-.jpg"
        //               }
        //             ]
        //           },
        //           "minimum_order": 0,
        //           "delivery_fee": 0,
        //           "area": null,
        //           "address": "Delhi, India",
        //           "longitude": 77.2217831,
        //           "latitude": 28.6862738,
        //           "is_verified": 1,
        //           "user_id": 2,
        //           "created_at": "2020-09-14T00:43:47.000000Z",
        //           "updated_at": "2020-09-14T00:50:01.000000Z",
        //           "categories": [
        //             {
        //               "id": 2,
        //               "slug": "vegetables",
        //               "title": "Vegetables",
        //               "title_translations": {
        //                 "en": "Vegetables"
        //               },
        //               "meta": {
        //                 "scope": "ecommerce"
        //               },
        //               "sort_order": 2,
        //               "mediaurls": {
        //                 "images": [
        //                   {
        //                     "default": "https:\/\/foodoz.vtlabs.dev\/storage\/2\/veg.png",
        //                     "thumb": "https:\/\/foodoz.vtlabs.dev\/storage\/2\/conversions\/veg-thumb.jpg"
        //                   }
        //                 ]
        //               },
        //               "parent_id": null
        //             }
        //           ],
        //           "user": {
        //             "id": 2,
        //             "name": "Test Seller",
        //             "email": "testseller@foodoz.com",
        //             "mobile_number": "+918787878787",
        //             "mobile_verified": 1,
        //             "active": 1,
        //             "language": "en",
        //             "notification": null,
        //             "meta": null,
        //             "remember_token": null,
        //             "created_at": "2020-09-14 00:43:47",
        //             "updated_at": "2020-09-14 00:44:16"
        //           },
        //           "ratings": 4,
        //           "ratings_count": 1,
        //           "favourite_count": 0,
        //           "is_favourite": false
        //         },
        //         "product": {
        //           "id": 1,
        //           "title": "Aalu",
        //           "detail": "empty_detail",
        //           "meta": {
        //             "food_type": "veg"
        //           },
        //           "price": 1,
        //           "owner": "vendor",
        //           "parent_id": null,
        //           "attribute_term_id": null,
        //           "mediaurls": {
        //             "images": [
        //               {
        //                 "default": "https:\/\/foodoz.vtlabs.dev\/storage\/40\/potato-250x250.jpg"
        //               }
        //             ]
        //           },
        //           "created_at": "2020-09-14T03:04:07.000000Z",
        //           "updated_at": "2020-09-15T06:59:44.000000Z"
        //         }
        //       },
        //       "addon_choices": [
        //       ]
        //     }
        //   ],
        //   "vendor": {
        //     "id": 1,
        //     "name": "Sabzi Wala",
        //     "tagline": "",
        //     "details": "",
        //     "meta": {
        //       "closing_time": "2020-09-14T22:05:42.847+05:30",
        //       "opening_time": "2020-09-14T06:15:42.846+05:30"
        //     },
        //     "mediaurls": {
        //       "images": [
        //         {
        //           "default": "https:\/\/foodoz.vtlabs.dev\/storage\/11\/36633512-ripe-vegetables-and-fruits-organic-produce-square-composition-.jpg"
        //         }
        //       ]
        //     },
        //     "minimum_order": 0,
        //     "delivery_fee": 0,
        //     "area": null,
        //     "address": "Delhi, India",
        //     "longitude": 77.2217831,
        //     "latitude": 28.6862738,
        //     "is_verified": 1,
        //     "user_id": 2,
        //     "created_at": "2020-09-14T00:43:47.000000Z",
        //     "updated_at": "2020-09-14T00:50:01.000000Z",
        //     "categories": [
        //       {
        //         "id": 2,
        //         "slug": "vegetables",
        //         "title": "Vegetables",
        //         "title_translations": {
        //           "en": "Vegetables"
        //         },
        //         "meta": {
        //           "scope": "ecommerce"
        //         },
        //         "sort_order": 2,
        //         "mediaurls": {
        //           "images": [
        //             {
        //               "default": "https:\/\/foodoz.vtlabs.dev\/storage\/2\/veg.png",
        //               "thumb": "https:\/\/foodoz.vtlabs.dev\/storage\/2\/conversions\/veg-thumb.jpg"
        //             }
        //           ]
        //         },
        //         "parent_id": null
        //       }
        //     ],
        //     "user": {
        //       "id": 2,
        //       "name": "Test Seller",
        //       "email": "testseller@foodoz.com",
        //       "mobile_number": "+918787878787",
        //       "mobile_verified": 1,
        //       "active": 1,
        //       "language": "en",
        //       "notification": null,
        //       "meta": null,
        //       "remember_token": null,
        //       "created_at": "2020-09-14 00:43:47",
        //       "updated_at": "2020-09-14 00:44:16"
        //     },
        //     "ratings": 4,
        //     "ratings_count": 1,
        //     "favourite_count": 0,
        //     "is_favourite": false
        //   },
        //   "user": {
        //     "id": 3,
        //     "name": "Test User",
        //     "email": "testuser@foodoz.com",
        //     "mobile_number": "+919898989898",
        //     "mobile_verified": 1,
        //     "active": 1,
        //     "language": "en",
        //     "notification": null,
        //     "meta": null,
        //     "mediaurls": {
        //     },
        //     "balance": 0,
        //     "wallet": {
        //       "id": 2,
        //       "user_id": 3,
        //       "balance": 0,
        //       "created_at": "2020-09-14 04:21:42",
        //       "updated_at": "2020-09-14 04:21:42"
        //     }
        //   },
        //   "address": {
        //     "id": 1,
        //     "formatted_address": "Delhi, India",
        //     "longitude": 77.2217831,
        //     "latitude": 28.6862738,
        //     "order_id": 1
        //   },
        //   "delivery": null,
        //   "payment": {
        //     "id": 1,
        //     "payable_id": 1,
        //     "payer_id": 3,
        //     "amount": 1,
        //     "status": "postpaid",
        //     "payment_method": {
        //       "id": 1,
        //       "slug": "cod",
        //       "title": "Cash On Delivery",
        //       "title_translations": {
        //         "en": "Cash On Delivery"
        //       },
        //       "meta": null,
        //       "enabled": 1,
        //       "type": "postpaid"
        //     }
        //   }
        // }));
        // setTimeout(() => {
        //   this.apiService.setupOrder(order);
        //   let res = new OrderRequest();
        //   res.order = order;
        //   res.delivery = this.profileMe;
        //   res.id = 0;
        //   res.status = "new";
        //   res.delivery_profile_id = res.delivery.id;
        //   res.created_at = "creted at";
        //   let navigationExtras: NavigationExtras = { state: { order_request: res } };
        //   this.navCtrl.navigateForward(['./new-delivery'], navigationExtras);
        // }, 5000);
        // setTimeout(() => {
        //   let navigationExtras: NavigationExtras = { queryParams: { order_id: "32" } };
        //   this.navCtrl.navigateForward(['./accepted'], navigationExtras);
        // }, 5000);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (this.config.demoMode) setTimeout(function () {
            return _this.presentModal();
          }, 15000);
          this.initializeApp();
          this.myEvent.getLanguageObservable().subscribe(function (value) {
            console.log("getLanguageObservable", value);

            _this.globalize(value);

            _this.subscriptions.push(_this.apiService.updateUser({
              language: value
            }).subscribe(function (res) {
              return console.log('updateUser', res);
            }, function (err) {
              return console.log('updateUser', err);
            }));

            _this.apiService.setupHeaders();

            _this.onNavItemClick(_this.appPagesToUse[0]);
          });
          this.myEvent.getLoginObservable().subscribe(function (loginRes) {
            if (loginRes == null) {
              _this.profileMe = null;
              _this.appPagesToUse = _this.profileMe ? _this.appPagesLoggedIn : _this.appPagesLoggedOut;

              _this.onNavItemClick(_this.appPagesToUse[0]);

              _this.unRegisterRequestUpdates();
            } else if (loginRes && loginRes.token && loginRes.user) {
              _this.translate.get(["verifying_profile", "something_wrong"]).subscribe(function (values) {
                _this.uiElementService.presentLoading(values["verifying_profile"]);

                src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].setLoggedInUserResponse(loginRes);

                _this.apiService.setupHeaders(loginRes.token);

                _this.subscriptions.push(_this.apiService.getProfile().subscribe(function (resProfile) {
                  if (resProfile && resProfile.user && resProfile.meta.document_url && resProfile.meta.document_url.length) {
                    _this.myEvent.setProfileData(resProfile);
                  } else {
                    _this.translate.get("setup_profile").subscribe(function (value) {
                      return _this.uiElementService.presentToast(value);
                    });

                    var navigationExtras = {
                      state: {
                        fresh_profile: true
                      }
                    };

                    _this.navCtrl.navigateForward(['./profile'], navigationExtras);
                  }

                  _this.uiElementService.dismissLoading();
                }, function (err) {
                  console.log("getProfile", err);

                  _this.apiService.setupHeaders(null);

                  _this.uiElementService.dismissLoading();

                  _this.uiElementService.presentToast(values["something_wrong"]);
                }));
              });
            }
          });
          this.myEvent.getProfileObservable().subscribe(function (profile) {
            _this.profileMe = profile;
            src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].setProfile(profile);
            _this.appPagesToUse = _this.profileMe ? _this.appPagesLoggedIn : _this.appPagesLoggedOut;

            _this.onNavItemClick(_this.appPagesToUse[0]);

            if (_this.platform.is('cordova') && _this.profileMe) _this.updatePlayerId();

            _this.onProfileInit();
          });
        }
      }, {
        key: "presentModal",
        value: function presentModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _vt_popup_vt_popup_page__WEBPACK_IMPORTED_MODULE_19__["VtPopupPage"]
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this2 = this;

          this.platform.ready().then(function () {
            _this2.statusBar.styleDefault();

            _this2.splashScreen.show();

            firebase__WEBPACK_IMPORTED_MODULE_17__["initializeApp"]({
              apiKey: _this2.config.firebaseConfig.apiKey,
              authDomain: _this2.config.firebaseConfig.authDomain,
              databaseURL: _this2.config.firebaseConfig.databaseURL,
              projectId: _this2.config.firebaseConfig.projectId,
              storageBucket: _this2.config.firebaseConfig.storageBucket,
              messagingSenderId: _this2.config.firebaseConfig.messagingSenderId
            });
            if (_this2.platform.is('cordova')) _this2.initOneSignal();

            _this2.apiService.setUuidAndPlatform(_this2.device.uuid, _this2.device.platform);

            _this2.refreshSettings();

            _this2.profileMe = src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].getProfile();
            _this2.appPagesToUse = _this2.profileMe ? _this2.appPagesLoggedIn : _this2.appPagesLoggedOut;

            _this2.onNavItemClick(_this2.appPagesToUse[0]);

            if (_this2.profileMe) _this2.subscriptions.push(_this2.apiService.getProfile().subscribe(function (res) {
              _this2.profileMe = res;
              src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].setProfile(_this2.profileMe);
            }, function (err) {
              return console.log("getProfile", err);
            }));
            setTimeout(function () {
              if (_this2.profileMe == null) {
                var token = src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].getToken();

                if (token != null) {
                  var navigationExtras = {
                    state: {
                      fresh_profile: true
                    }
                  };

                  _this2.navCtrl.navigateForward(['./profile'], navigationExtras);
                }
              }

              _this2.splashScreen.hide();

              if (_this2.platform.is('cordova') && _this2.profileMe) _this2.updatePlayerId();

              _this2.onProfileInit();

              _this2.globalize(src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].getLanguageDefault());
            }, 3000);

            _this2.globalize(src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].getLanguageDefault());

            _this2.platform.backButton.subscribe(function () {
              if (_this2.routerOutlets && _this2.routerOutlets.canGoBack()) {
                _this2.routerOutlets.pop();
              } else {
                var currPathName = window.location.pathname;

                if (currPathName && currPathName.includes(_this2.appPagesToUse[0].url)) {
                  navigator['app'].exitApp();
                } else {
                  _this2.navCtrl.navigateRoot([_this2.appPagesToUse[0].url]);
                }
              }
            });
          });
        }
      }, {
        key: "globalize",
        value: function globalize(languagePriority) {
          this.translate.setDefaultLang("en");
          var defaultLangCode = this.config.availableLanguages[0].code;
          this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
          this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
          src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].setLocale(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
          src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].setLanguageDefault(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
        }
      }, {
        key: "setDirectionAccordingly",
        value: function setDirectionAccordingly(lang) {
          var _this3 = this;

          this.showSideMenu = false;

          switch (lang) {
            case 'iw':
            case 'ar':
              this.rtlSide = "rtl";
              this.rtlSideMenu = "end";
              break;

            default:
              this.rtlSide = "ltr";
              this.rtlSideMenu = "start";
              break;
          }

          setTimeout(function () {
            return _this3.showSideMenu = true;
          }, 100);
        }
      }, {
        key: "onProfileInit",
        value: function onProfileInit() {
          if (this.profileMe != null) {
            this.registerRequestUpdates();

            if (this.profileMe.is_online == 1) {
              if (this.profileMe.assigned == 1) {
                this.refreshCurrentOrder(this.profileMe.id);
              } else {
                this.refreshDeliveryRequest(this.profileMe.id);
              }

              this.checkAndWatchLocation();
            } else {
              this.unWatchLocation();
            }
          } else {
            this.unRegisterRequestUpdates();
          }
        }
      }, {
        key: "initOneSignal",
        value: function initOneSignal() {
          if (this.config.oneSignalAppId && this.config.oneSignalAppId.length && this.config.oneSignalGPSenderId && this.config.oneSignalGPSenderId.length) {
            this.oneSignal.startInit(this.config.oneSignalAppId, this.config.oneSignalGPSenderId);
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
            this.oneSignal.handleNotificationReceived().subscribe(function (data) {
              console.log(data);
              src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].saveNotification(data.payload.additionalData && data.payload.additionalData.title ? data.payload.additionalData.title : data.payload.title, data.payload.additionalData && data.payload.additionalData.body ? data.payload.additionalData.body : data.payload.body, String(new Date().getTime()));
              var noti_ids_processed = JSON.parse(window.localStorage.getItem("noti_ids_processed"));
              if (!noti_ids_processed) noti_ids_processed = new Array();
              noti_ids_processed.push(data.payload.notificationID);
              window.localStorage.setItem("noti_ids_processed", JSON.stringify(noti_ids_processed));
            });
            this.oneSignal.handleNotificationOpened().subscribe(function (data) {
              var noti_ids_processed = JSON.parse(window.localStorage.getItem("noti_ids_processed"));
              if (!noti_ids_processed) noti_ids_processed = new Array();
              var index = noti_ids_processed.indexOf(data.notification.payload.notificationID);

              if (index == -1) {
                src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].saveNotification(data.notification.payload.additionalData && data.notification.payload.additionalData.title ? data.notification.payload.additionalData.title : data.notification.payload.title, data.notification.payload.additionalData && data.notification.payload.additionalData.body ? data.notification.payload.additionalData.body : data.notification.payload.body, String(new Date().getTime()));
              } else {
                noti_ids_processed.splice(index, 1);
                window.localStorage.setItem("noti_ids_processed", JSON.stringify(noti_ids_processed));
              }
            });
            this.oneSignal.endInit();
          }
        }
      }, {
        key: "updatePlayerId",
        value: function updatePlayerId() {
          var _this4 = this;

          this.oneSignal.getIds().then(function (id) {
            if (id && id.userId) {
              var defaultLang = src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].getLanguageDefault();

              _this4.subscriptions.push(_this4.apiService.updateUser({
                notification: "{\"" + src_models_constants_models__WEBPACK_IMPORTED_MODULE_7__["Constants"].ROLE_DELIVERY + "\":\"" + id.userId + "\"}",
                language: defaultLang && defaultLang.length ? defaultLang : _this4.config.availableLanguages[0].code
              }).subscribe(function (res) {
                return console.log('updateUser', res);
              }, function (err) {
                return console.log('updateUser', err);
              }));

              firebase__WEBPACK_IMPORTED_MODULE_17__["database"]().ref(src_models_constants_models__WEBPACK_IMPORTED_MODULE_7__["Constants"].REF_USERS_FCM_IDS).child(_this4.profileMe.user.id + src_models_constants_models__WEBPACK_IMPORTED_MODULE_7__["Constants"].ROLE_DELIVERY).set(id.userId);
            }
          });
        }
      }, {
        key: "refreshSettings",
        value: function refreshSettings() {
          var _this5 = this;

          this.subscriptions.push(this.apiService.getSettings().subscribe(function (res) {
            console.log('getSettings', res);
            src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].setSettings(res);

            _this5.apiService.reloadSetting();
          }, function (err) {
            return console.log('getSettings', err);
          }));
        }
      }, {
        key: "onNavItemClick",
        value: function onNavItemClick(navItem) {
          var _this6 = this;

          if (navItem.title == "logout") {
            this.translate.get(["logout_title", "logout_message", "no", "yes"]).subscribe(function (values) {
              _this6.alertCtrl.create({
                header: values["logout_title"],
                message: values["logout_message"],
                buttons: [{
                  text: values["no"],
                  handler: function handler() {}
                }, {
                  text: values["yes"],
                  handler: function handler() {
                    try {
                      window.FirebasePlugin.signOutUser(function () {
                        console.log("User signed out");
                      }, function (error) {
                        console.error("Failed to sign out user: " + error);
                      });
                    } catch (e) {
                      console.log("fireSignout", e);
                    }

                    try {
                      firebase__WEBPACK_IMPORTED_MODULE_17__["auth"]().signOut().then(function () {
                        console.log('Signed Out');
                      }, function (error) {
                        console.error('Sign Out Error', error);
                      });
                    } catch (e) {
                      console.log("fireSignout", e);
                    }

                    _this6.unRegisterRequestUpdates();

                    src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].setLoggedInUserResponse(null);

                    _this6.myEvent.setLoginData(null);
                  }
                }]
              }).then(function (alert) {
                return alert.present();
              });
            });
          } else if (navItem.title == "my_profile") {
            this.viewProfile();
          } else {
            var currPathName = window.location.pathname;

            if (!currPathName || !currPathName.includes(navItem.url)) {
              this.navCtrl.navigateRoot([navItem.url]);
            }
          }
        }
      }, {
        key: "viewProfile",
        value: function viewProfile() {
          if (this.profileMe != null) {
            this.navCtrl.navigateRoot(['./profile']);
          } else {
            this.navCtrl.navigateForward(['./sign-in']);
          }
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

          this.unRegisterRequestUpdates();
          this.unWatchLocation();
        }
      }, {
        key: "refreshCurrentOrder",
        value: function refreshCurrentOrder(profileId) {
          var _this7 = this;

          this.translate.get("refreshing").subscribe(function (value) {
            _this7.uiElementService.presentLoading(value);

            _this7.subscriptions.push(_this7.apiService.getOrder(profileId).subscribe(function (res) {
              _this7.uiElementService.dismissLoading();

              var navigationExtras = {
                queryParams: {
                  order_id: res.id
                }
              };

              _this7.navCtrl.navigateForward(['./accepted'], navigationExtras);
            }, function (err) {
              console.log("getOrder", err);

              _this7.uiElementService.dismissLoading();
            }));
          });
        }
      }, {
        key: "refreshDeliveryRequest",
        value: function refreshDeliveryRequest(profileId) {
          var _this8 = this;

          this.translate.get(["refreshing", "delivery_request_na"]).subscribe(function (values) {
            _this8.uiElementService.presentLoading(values["refreshing"]);

            _this8.subscriptions.push(_this8.apiService.getOrderRequest(profileId).subscribe(function (res) {
              _this8.uiElementService.dismissLoading();

              if (res && res.order && res.delivery.id == _this8.profileMe.id) {
                var navigationExtras = {
                  state: {
                    order_request: res
                  }
                };

                _this8.navCtrl.navigateForward(['./new-delivery'], navigationExtras);
              } else {
                _this8.uiElementService.presentToast(values["delivery_request_na"], "top");
              }
            }, function (err) {
              console.log("getOrderRequest", err);

              _this8.uiElementService.dismissLoading();

              _this8.uiElementService.presentToast(values["delivery_request_na"], "top");
            }));
          });
        }
      }, {
        key: "checkAndWatchLocation",
        value: function checkAndWatchLocation() {
          var _this9 = this;

          this.diagnostic.isLocationEnabled().then(function (isAvailable) {
            if (!isAvailable) _this9.alertLocationServices();
          })["catch"](function (e) {
            console.error(e);

            _this9.alertLocationServices();
          });
          this.watchLocation();
        }
      }, {
        key: "watchLocation",
        value: function watchLocation() {
          var _this10 = this;

          var component = this;

          if (!this.watchingLocation) {
            this.watchingLocation = true;
            this.translate.get(["location_noti_title", "location_noti_body"]).subscribe(function (values) {
              try {
                window.BackgroundGeolocation.checkStatus(function (status) {
                  console.log('[INFO] BackgroundGeolocation service is running', status.isRunning);
                  console.log('[INFO] BackgroundGeolocation services enabled', status.locationServicesEnabled);
                  console.log('[INFO] BackgroundGeolocation auth status: ' + status.authorization); // you don't need to check status before start (this is just the example)

                  if (!status.isRunning) {
                    var config = {
                      desiredAccuracy: 0,
                      stationaryRadius: 20,
                      distanceFilter: 30,
                      interval: 10000,
                      fastestInterval: 5000,
                      startForeground: true,
                      notificationTitle: values["location_noti_title"],
                      notificationText: values["location_noti_body"],
                      debug: false,
                      stopOnTerminate: true
                    };
                    var defaultConfig = {
                      locationProvider: window.BackgroundGeolocation.DISTANCE_FILTER_PROVIDER,
                      desiredAccuracy: window.BackgroundGeolocation.HIGH_ACCURACY,
                      stationaryRadius: 50,
                      distanceFilter: 50,
                      notificationTitle: values["location_noti_title"],
                      notificationText: values["location_noti_body"],
                      debug: true,
                      interval: 10000,
                      fastestInterval: 5000,
                      activitiesInterval: 10000,
                      url: 'http://192.168.81.15:3000/location',
                      httpHeaders: {
                        'X-FOO': 'bar'
                      },
                      // customize post properties
                      postTemplate: {
                        lat: '@latitude',
                        lon: '@longitude',
                        foo: 'bar' // you can also add your own properties

                      }
                    };
                    var myConfig = {
                      locationProvider: window.BackgroundGeolocation.DISTANCE_FILTER_PROVIDER,
                      desiredAccuracy: window.BackgroundGeolocation.HIGH_ACCURACY,
                      stationaryRadius: 50,
                      distanceFilter: 50,
                      notificationTitle: values["location_noti_title"],
                      notificationText: values["location_noti_body"],
                      debug: false,
                      interval: 10000,
                      fastestInterval: 10000,
                      activitiesInterval: 10000
                    };
                    window.BackgroundGeolocation.configure(myConfig);
                    window.BackgroundGeolocation.on('location', function (locationData) {
                      console.log("location", JSON.stringify(locationData));
                      var location = new src_models_address_models__WEBPACK_IMPORTED_MODULE_14__["MyAddress"]();
                      location.latitude = String(locationData.latitude);
                      location.longitude = String(locationData.longitude);
                      component.onNewLocation(location); // handle your locations here
                      // to perform long running operation on iOS
                      // you need to create background task

                      window.BackgroundGeolocation.startTask(function (taskKey) {
                        // execute long running task
                        // eg. ajax post location
                        // IMPORTANT: task has to be ended by endTask
                        var location = new src_models_address_models__WEBPACK_IMPORTED_MODULE_14__["MyAddress"]();
                        location.latitude = String(locationData.latitude);
                        location.longitude = String(locationData.longitude);
                        component.onNewLocation(location);
                        window.BackgroundGeolocation.endTask(taskKey);
                      });
                    });
                    window.BackgroundGeolocation.start();
                  }
                });
              } catch (ex) {
                console.log("ex", ex);
                _this10.watchingLocation = false;
              }
            });
          }
        }
      }, {
        key: "unWatchLocation",
        value: function unWatchLocation() {
          try {
            // If you wish to turn OFF background-tracking, call the #stop method.
            window.BackgroundGeolocation.stop();
            this.watchingLocation = false;
          } catch (ex) {
            console.log("ex", ex);
          }
        }
      }, {
        key: "onNewLocation",
        value: function onNewLocation(location) {
          if (this.profileMe == null) this.profileMe = src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].getProfile();

          if (this.profileMe != null && this.profileMe.user != null && this.profileMe.id != null) {
            var prevLoc = src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].getLocation();

            if (prevLoc == null || prevLoc.latitude != location.latitude || prevLoc.longitude != location.longitude) {
              src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].setLocation(location);
              this.subscriptions.push(this.apiService.updateProfile({
                latitude: location.latitude,
                longitude: location.longitude
              }, this.profileMe.id).subscribe(function (res) {
                return src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].setProfile(res);
              }, function (err) {
                return console.log("updateOrder", err);
              }));
              var refLocation = firebase__WEBPACK_IMPORTED_MODULE_17__["database"]().ref().child("deliveries").child(String(this.profileMe.id)).child("location");
              refLocation.set(location);
              this.myEvent.setLocationData(location);
            }
          }
        }
      }, {
        key: "alertLocationServices",
        value: function alertLocationServices() {
          var _this11 = this;

          this.translate.get(['location_services_title', 'location_services_message', 'okay']).subscribe(function (text) {
            _this11.alertCtrl.create({
              header: text['location_services_title'],
              message: text['location_services_message'],
              buttons: [{
                text: text['okay'],
                role: 'cancel',
                handler: function handler() {
                  _this11.locationAccuracy.canRequest().then(function (canRequest) {
                    if (canRequest) {
                      // the accuracy option will be ignored by iOS
                      _this11.locationAccuracy.request(_this11.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
                        return console.log('Request successful');
                      }, function (error) {
                        return console.log('Error requesting location permissions', error);
                      });
                    }
                  });
                }
              }]
            }).then(function (alert) {
              return alert.present();
            });
          });
        }
      }, {
        key: "navSubscription",
        value: function navSubscription() {
          this.navCtrl.navigateRoot(['./subscription']);
        }
      }, {
        key: "addFireOrderRequest",
        value: function addFireOrderRequest(data) {
          if (data.status == "pending") {
            var locale = src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].getLocale();
            data.created_at = src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].formatTimestampDate(data.created_at, locale);
            data.updated_at = src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].formatTimestampDate(data.updated_at, locale);
            this.apiService.setupOrder(data.order);
            this.navCtrl.navigateRoot(['./home']);

            if (data && data.order && data.delivery.id == this.profileMe.id) {
              var navigationExtras = {
                state: {
                  order_request: data
                }
              };
              this.navCtrl.navigateForward(['./new-delivery'], navigationExtras);
            }
          }
        }
      }, {
        key: "unRegisterRequestUpdates",
        value: function unRegisterRequestUpdates() {
          try {
            if (this.myRequestsRef != null) this.myRequestsRef.off();
            this.myRequestsRef = null;
          } catch (ex) {
            console.log(ex);
            this.myRequestsRef = null;
          }
        }
      }, {
        key: "registerRequestUpdates",
        value: function registerRequestUpdates() {
          var component = this;

          if (this.myRequestsRef == null) {
            this.myRequestsRef = firebase__WEBPACK_IMPORTED_MODULE_17__["database"]().ref("deliveries").child(String(this.profileMe.id)).child("order-request");
            this.myRequestsRef.on('value', function (data) {
              var fireRequest = data.val();
              console.log("value_Or", fireRequest);
              if (fireRequest != null && fireRequest.order != null && fireRequest.delivery != null) component.addFireOrderRequest(fireRequest);
            });
          }
        }
      }, {
        key: "buyAppAction",
        value: function buyAppAction() {
          var _this12 = this;

          this.menu.close();
          this.translate.get("just_moment").subscribe(function (value) {
            _this12.uiElementService.presentLoading(value);

            _this12.apiService.getContactLink().subscribe(function (res) {
              _this12.uiElementService.dismissLoading();

              _this12.inAppBrowser.create(res.link ? res.link : "https://bit.ly/cc_DoctoWorld", "_system");
            }, function (err) {
              console.log("getContactLink", err);

              _this12.uiElementService.dismissLoading();

              _this12.inAppBrowser.create("https://bit.ly/cc_DoctoWorld", "_system");
            });
          });
        }
      }, {
        key: "developed_by",
        value: function developed_by() {
          this.menu.close();
          this.inAppBrowser.create("https://verbosetechlabs.com/", "_system");
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_app_config__WEBPACK_IMPORTED_MODULE_6__["APP_CONFIG"]]
        }]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_13__["Diagnostic"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_16__["Device"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_12__["UiElementsService"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"]
      }, {
        type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_15__["LocationAccuracy"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_10__["MyEventsService"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_18__["InAppBrowser"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"], {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"])], AppComponent.prototype, "routerOutlets", void 0);
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_6__["APP_CONFIG"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_13__["Diagnostic"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_16__["Device"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_12__["UiElementsService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_15__["LocationAccuracy"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_10__["MyEventsService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_18__["InAppBrowser"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.config.ts": function srcAppAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function () {
      return APP_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseAppConfig", function () {
      return BaseAppConfig;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("app.config");
    var BaseAppConfig = {
      appName: "YourDeliveryAppName",
      apiBase: "http://192.168.0.115:8001/",
      googleApiKey: "AIzaSyDLMJOClhhQjkfepu0R8iOCIt7bUpUF0nU",
      oneSignalAppId: "14a71c55-8888-4373-afa7-f69c79bfdda7",
      oneSignalGPSenderId: "971942122749",
      availableLanguages: [{
        code: 'en',
        name: 'English'
      }, {
        code: 'ar',
        name: 'Arabic'
      }, {
        code: 'fr',
        name: 'French'
      }, {
        code: 'es',
        name: 'Spanish'
      }, {
        code: 'id',
        name: 'Indonesian'
      }, {
        code: 'pt',
        name: 'Portuguese'
      }, {
        code: 'tr',
        name: 'Turkish'
      }, {
        code: 'it',
        name: 'Italian'
      }, {
        code: 'sw',
        name: 'Swahili'
      }],
      demoMode: false,
      firebaseConfig: {
        apiKey: "AIzaSyBzkgi5R1M_owyTrPzfkw8-4OJw7vEcMGU",
        authDomain: "customer-cookfu.firebaseapp.com",
        databaseURL: "https://customer-cookfu-default-rtdb.firebaseio.com",
        projectId: "customer-cookfu",
        storageBucket: "customer-cookfu.appspot.com",
        messagingSenderId: "971942122749",
        webApplicationId: "1:971942122749:web:83d41cd821a538d1a7da94"
      }
    };
    /***/
  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _chat_chat_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./chat/chat.module */
    "./src/app/chat/chat.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/diagnostic/ngx */
    "./node_modules/@ionic-native/diagnostic/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/location-accuracy/ngx */
    "./node_modules/@ionic-native/location-accuracy/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _vt_popup_vt_popup_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./vt-popup/vt-popup.module */
    "./src/app/vt-popup/vt-popup.module.ts");

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _chat_chat_module__WEBPACK_IMPORTED_MODULE_7__["ChatPageModule"], _vt_popup_vt_popup_module__WEBPACK_IMPORTED_MODULE_21__["VtPopupPageModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
        }
      })],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_15__["Network"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_14__["OneSignal"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_16__["File"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_17__["Diagnostic"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_18__["LocationAccuracy"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_19__["Device"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_20__["InAppBrowser"], {
        provide: _app_config__WEBPACK_IMPORTED_MODULE_13__["APP_CONFIG"],
        useValue: _app_config__WEBPACK_IMPORTED_MODULE_13__["BaseAppConfig"]
      }, {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/chat/chat-routing.module.ts": function srcAppChatChatRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPageRoutingModule", function () {
      return ChatPageRoutingModule;
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


    var _chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat.page */
    "./src/app/chat/chat.page.ts");

    var routes = [{
      path: '',
      component: _chat_page__WEBPACK_IMPORTED_MODULE_3__["ChatPage"]
    }];

    var ChatPageRoutingModule = function ChatPageRoutingModule() {
      _classCallCheck(this, ChatPageRoutingModule);
    };

    ChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChatPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/chat/chat.module.ts": function srcAppChatChatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPageModule", function () {
      return ChatPageModule;
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


    var _chat_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat-routing.module */
    "./src/app/chat/chat-routing.module.ts");
    /* harmony import */


    var _chat_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./chat.page */
    "./src/app/chat/chat.page.ts");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");

    var ChatPageModule = function ChatPageModule() {
      _classCallCheck(this, ChatPageModule);
    };

    ChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _chat_routing_module__WEBPACK_IMPORTED_MODULE_6__["ChatPageRoutingModule"]],
      providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"]],
      declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_7__["ChatPage"]]
    })], ChatPageModule);
    /***/
  },

  /***/
  "./src/app/chat/chat.page.scss": function srcAppChatChatPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  box-shadow: 0 -4px 10px 5px rgba(0, 0, 0, 0.1);\n  background: var(--white);\n  padding: 9px 19px;\n}\nion-header .close_button {\n  padding: 8px 0px;\n}\nion-header .close_button ion-icon {\n  font-size: 2rem;\n}\nion-header .customer_detail {\n  align-items: flex-start;\n  padding-bottom: 10px;\n}\nion-header .customer_detail ion-icon.zmdi-navigation {\n  color: var(--primary);\n  font-size: 1.5rem;\n  min-width: 34px;\n}\nion-header .customer_detail ion-icon.zmdi-phone {\n  font-size: 1.3rem;\n  min-width: 30px;\n  color: var(--primary);\n}\nion-header .customer_detail .text_box {\n  width: calc(100% - 60px);\n  overflow: hidden;\n  white-space: nowrap;\n}\nion-header .customer_detail .text_box h2 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  padding: 0;\n  color: var(--text-dark);\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  padding-bottom: 4px;\n}\nion-header .customer_detail .text_box p {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.8rem;\n  overflow: hidden;\n}\nion-content {\n  --background: rgba(255, 255, 255, 0);\n}\nion-content::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.75);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n}\n.chat_container {\n  padding: 15px 15px;\n  flex-wrap: wrap;\n}\n.chat_container .chat_box {\n  width: auto !important;\n  margin-bottom: 20px;\n  min-width: 70%;\n  align-items: flex-start;\n}\n.chat_container .chat_box .chat {\n  min-width: 90px;\n  border-radius: 3px;\n  max-width: 100%;\n}\n.chat_container .chat_box .chat h2 {\n  margin: 0;\n  font-size: 0.95rem;\n  color: var(--text-black);\n  line-height: 18px;\n  padding-bottom: 8px;\n}\n.chat_container .chat_box p {\n  margin: 0;\n  font-size: 0.8rem;\n  font-weight: 400;\n  color: var(--text-light2);\n}\n.chat_container .chat_box.received .chat {\n  background: var(--white);\n  padding: 9px 50px 10px 14px;\n}\n.chat_container .chat_box.send {\n  margin-left: auto;\n  margin-right: 0;\n}\n.chat_container .chat_box.send .chat {\n  background: var(--primary);\n  padding: 9px 14px 10px 50px;\n  margin-left: auto;\n  margin-right: 0;\n}\n.chat_container .chat_box.send .chat h2 {\n  text-align: right;\n  color: var(--white);\n  font-weight: 400;\n}\n.chat_container .chat_box.send .chat p {\n  text-align: right;\n  color: var(--white);\n  opacity: 0.4;\n}\nion-footer {\n  background: var(--white);\n  box-shadow: 0 1px 38px 10px rgba(0, 0, 0, 0.1);\n  padding: 2px 0;\n}\nion-footer .form {\n  margin: 0;\n  width: 100%;\n  padding: 0;\n}\nion-footer .form ion-list {\n  padding: 0 !important;\n}\nion-footer .form ion-list ion-item {\n  border: none !important;\n  background: none;\n  margin: 0;\n  align-items: center;\n  border: 0 !important;\n  padding: 0px 17px !important;\n  --min-height: unset !important;\n  font-weight: 500 !important;\n}\nion-footer .form ion-list ion-item ion-input {\n  font-size: 0.95rem !important;\n  --placeholder-color: var(--text-light2) !important;\n  padding: 7px 0 !important;\n}\nion-footer .form ion-list .send_btn {\n  padding: 0 17px;\n  min-width: 30px;\n  position: relative;\n  top: 3px;\n}\nion-footer .form ion-list .send_btn ion-icon {\n  color: var(--primary);\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9GOlxcZml2ZXJcXEJlcm5hcmRcXEFnb2NhcnJ5XFxhZ29jYXJyeS1kZWxpdmVyeS9zcmNcXGFwcFxcY2hhdFxcY2hhdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYXQvY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4Q0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRENJO0VBQ0ksZ0JBQUE7QUNDUjtBRENRO0VBQ0ksZUFBQTtBQ0NaO0FER0k7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0FDRFI7QURJWTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRmhCO0FES1k7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0hoQjtBRE9RO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDTFo7QURPWTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNMaEI7QURRWTtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNOaEI7QURZQTtFQUNJLG9DQUFBO0FDVEo7QURXSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUNUUjtBRGFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDVko7QURZSTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUNWUjtBRFlRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1ZaO0FEWVk7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNWaEI7QURjUTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNaWjtBRGdCWTtFQUNJLHdCQUFBO0VBQ0EsMkJBQUE7QUNkaEI7QURrQlE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNoQlo7QURrQlk7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDaEJoQjtBRGtCZ0I7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNoQnBCO0FEbUJnQjtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDakJwQjtBRHdCQTtFQUNJLHdCQUFBO0VBQ0EsOENBQUE7RUFDQSxjQUFBO0FDckJKO0FEc0JJO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDcEJSO0FEc0JRO0VBQ0kscUJBQUE7QUNwQlo7QURzQlk7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7QUNwQmhCO0FEc0JnQjtFQUNJLDZCQUFBO0VBQ0Esa0RBQUE7RUFDQSx5QkFBQTtBQ3BCcEI7QUR3Qlk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ3RCaEI7QUR3QmdCO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtBQ3RCcEIiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgYm94LXNoYWRvdzogMCAtNHB4IDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgcGFkZGluZzogOXB4IDE5cHg7XG5cbiAgICAuY2xvc2VfYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDBweDtcblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY3VzdG9tZXJfZGV0YWlsIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICYuem1kaS1uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnptZGktcGhvbmUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dF9ib3gge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICB9XG59XG5cbi5jaGF0X2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTVweCAxNXB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC5jaGF0X2JveCB7XG4gICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIG1pbi13aWR0aDogNzAlO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgICAuY2hhdCB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDkwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5yZWNlaXZlZCB7XG4gICAgICAgICAgICAuY2hhdCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDlweCA1MHB4IDEwcHggMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuc2VuZCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgICAgICAgICAgLmNoYXQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDlweCAxNHB4IDEwcHggNTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDM4cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgcGFkZGluZzogMnB4IDA7XG4gICAgLmZvcm0ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIGlvbi1saXN0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHggMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlbmRfYnRuIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE3cHg7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDNweDtcblxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpb24taGVhZGVyIHtcbiAgYm94LXNoYWRvdzogMCAtNHB4IDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nOiA5cHggMTlweDtcbn1cbmlvbi1oZWFkZXIgLmNsb3NlX2J1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAwcHg7XG59XG5pb24taGVhZGVyIC5jbG9zZV9idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDJyZW07XG59XG5pb24taGVhZGVyIC5jdXN0b21lcl9kZXRhaWwge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5pb24taGVhZGVyIC5jdXN0b21lcl9kZXRhaWwgaW9uLWljb24uem1kaS1uYXZpZ2F0aW9uIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWluLXdpZHRoOiAzNHB4O1xufVxuaW9uLWhlYWRlciAuY3VzdG9tZXJfZGV0YWlsIGlvbi1pY29uLnptZGktcGhvbmUge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5pb24taGVhZGVyIC5jdXN0b21lcl9kZXRhaWwgLnRleHRfYm94IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuaW9uLWhlYWRlciAuY3VzdG9tZXJfZGV0YWlsIC50ZXh0X2JveCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG59XG5pb24taGVhZGVyIC5jdXN0b21lcl9kZXRhaWwgLnRleHRfYm94IHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn1cbmlvbi1jb250ZW50OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG59XG5cbi5jaGF0X2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmNoYXRfY29udGFpbmVyIC5jaGF0X2JveCB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1pbi13aWR0aDogNzAlO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5jaGF0X2NvbnRhaW5lciAuY2hhdF9ib3ggLmNoYXQge1xuICBtaW4td2lkdGg6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLmNoYXRfY29udGFpbmVyIC5jaGF0X2JveCAuY2hhdCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuLmNoYXRfY29udGFpbmVyIC5jaGF0X2JveCBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbn1cbi5jaGF0X2NvbnRhaW5lciAuY2hhdF9ib3gucmVjZWl2ZWQgLmNoYXQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmc6IDlweCA1MHB4IDEwcHggMTRweDtcbn1cbi5jaGF0X2NvbnRhaW5lciAuY2hhdF9ib3guc2VuZCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4uY2hhdF9jb250YWluZXIgLmNoYXRfYm94LnNlbmQgLmNoYXQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgcGFkZGluZzogOXB4IDE0cHggMTBweCA1MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLmNoYXRfY29udGFpbmVyIC5jaGF0X2JveC5zZW5kIC5jaGF0IGgyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uY2hhdF9jb250YWluZXIgLmNoYXRfYm94LnNlbmQgLmNoYXQgcCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDM4cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmc6IDJweCAwO1xufVxuaW9uLWZvb3RlciAuZm9ybSB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24tZm9vdGVyIC5mb3JtIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCBpb24taXRlbSB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtYXJnaW46IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggMTdweCAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbn1cbmlvbi1mb290ZXIgLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgZm9udC1zaXplOiAwLjk1cmVtICFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA3cHggMCAhaW1wb3J0YW50O1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCAuc2VuZF9idG4ge1xuICBwYWRkaW5nOiAwIDE3cHg7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbn1cbmlvbi1mb290ZXIgLmZvcm0gaW9uLWxpc3QgLnNlbmRfYnRuIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/chat/chat.page.ts": function srcAppChatChatPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPage", function () {
      return ChatPage;
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


    var src_models_chat_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/models/chat.models */
    "./src/models/chat.models.ts");
    /* harmony import */


    var src_models_constants_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/models/constants.models */
    "./src/models/constants.models.ts");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var src_models_message_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/models/message.models */
    "./src/models/message.models.ts");
    /* harmony import */


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_11__);

    var ChatPage = /*#__PURE__*/function () {
      function ChatPage(modalController, navParams, apiService, uiElementService, translate, callNumber) {
        _classCallCheck(this, ChatPage);

        this.modalController = modalController;
        this.navParams = navParams;
        this.apiService = apiService;
        this.uiElementService = uiElementService;
        this.translate = translate;
        this.callNumber = callNumber;
        this.messages = new Array();
        this.chatObj = new src_models_chat_models__WEBPACK_IMPORTED_MODULE_3__["Chat"]();
      }

      _createClass(ChatPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.chatObj = this.navParams.get("chat");
          this.mobile_number = this.navParams.get("mobile_number");
          this.userMe = src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getLoggedInUser();
          this.chatChild = src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getChatChild(this.chatObj.myId, this.chatObj.chatId);
          var component = this;
          this.inboxRef = firebase_app__WEBPACK_IMPORTED_MODULE_11__["database"]().ref(src_models_constants_models__WEBPACK_IMPORTED_MODULE_4__["Constants"].REF_INBOX);
          this.chatRef = firebase_app__WEBPACK_IMPORTED_MODULE_11__["database"]().ref(src_models_constants_models__WEBPACK_IMPORTED_MODULE_4__["Constants"].REF_CHAT);
          this.chatRef.child(this.chatChild).limitToLast(20).on("child_added", function (snapshot, prevChildKey) {
            var newMessage = snapshot.val();

            if (newMessage) {
              newMessage.timeDiff = src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].formatMillisDateTime(Number(newMessage.dateTimeStamp), src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getLocale());
              component.addMessage(newMessage);
              component.markDelivered();
              component.scrollList();
            }
          }, function (error) {
            console.error("child_added", error);
          });
          firebase_app__WEBPACK_IMPORTED_MODULE_11__["database"]().ref(src_models_constants_models__WEBPACK_IMPORTED_MODULE_4__["Constants"].REF_USERS_FCM_IDS).child(this.chatObj.chatId).once("value", function (snap) {
            component.userPlayerId = snap.val();
          });
          this.translate.get("just_moment").subscribe(function (value) {
            return _this13.uiElementService.presentToast(value);
          });
        }
      }, {
        key: "scrollList",
        value: function scrollList() {
          this.myContent.scrollToBottom(300);
        }
      }, {
        key: "markDelivered",
        value: function markDelivered() {
          if (this.messages && this.messages.length) {
            if (this.messages[this.messages.length - 1].senderId != this.chatObj.myId) {
              this.messages[this.messages.length - 1].delivered = true;
              this.chatRef.child(this.chatChild).child(this.messages[this.messages.length - 1].id).child("delivered").set(true);
            } // else {
            //   let toNotify;
            //   if (!this.messages[this.messages.length - 1].delivered) {
            //     toNotify = this.messages[this.messages.length - 1];
            //     this.messages[this.messages.length - 1].delivered = true;
            //   }
            //   if (toNotify) {
            //     this.notifyMessages(toNotify);
            //   }
            // }

          }
        }
      }, {
        key: "addMessage",
        value: function addMessage(msg) {
          this.messages = this.messages.concat(msg); //this.storage.set(Constants.KEY_MESSAGES + this.chatChild, this.messages);

          if (this.chatObj && msg) {
            var isMeSender = msg.senderId == this.chatObj.myId;
            this.chatObj.chatImage = isMeSender ? msg.recipientImage : msg.senderImage;
            this.chatObj.chatName = isMeSender ? msg.recipientName : msg.senderName; //this.chatObj.chatStatus = isMeSender ? msg.recipientStatus : msg.senderStatus;
          }
        }
      }, {
        key: "send",
        value: function send() {
          var _this14 = this;

          if (this.newMessageText && this.newMessageText.trim().length) {
            var toSend = new src_models_message_models__WEBPACK_IMPORTED_MODULE_6__["Message"]();
            toSend.chatId = this.chatChild;
            toSend.body = this.newMessageText;
            toSend.dateTimeStamp = String(new Date().getTime());
            toSend.delivered = false;
            toSend.sent = true;
            toSend.recipientId = this.chatObj.chatId;
            toSend.recipientImage = this.chatObj.chatImage;
            toSend.recipientName = this.chatObj.chatName;
            toSend.recipientStatus = this.chatObj.chatStatus;
            toSend.senderId = this.chatObj.myId;
            toSend.senderName = this.userMe.name;
            toSend.senderImage = this.userMe.image_url && this.userMe.image_url.length ? this.userMe.image_url : "assets/images/empty_dp.png";
            toSend.senderStatus = this.userMe.email;
            toSend.id = this.chatRef.child(this.chatChild).push().key;
            this.chatRef.child(this.chatChild).child(toSend.id).set(toSend).then(function (res) {
              _this14.inboxRef.child(toSend.recipientId).child(toSend.senderId).set(toSend);

              _this14.inboxRef.child(toSend.senderId).child(toSend.recipientId).set(toSend);

              _this14.newMessageText = '';

              _this14.notifyMessages();
            });
          } else {
            this.translate.get("type_your_message").subscribe(function (value) {
              return _this14.uiElementService.presentToast(value);
            });
          }
        }
      }, {
        key: "notifyMessages",
        value: function notifyMessages() {
          this.apiService.postNotification(this.chatObj.chatStatus, Number(this.chatObj.chatId) ? this.chatObj.chatId : this.chatObj.chatId.substring(0, this.chatObj.chatId.indexOf(this.chatObj.chatStatus))).subscribe(function (res) {
            return console.log("notiS", res);
          }, function (err) {
            return console.log("notiF", err);
          });
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalController.dismiss();
        }
      }, {
        key: "dialNum",
        value: function dialNum() {
          this.callNumber.callNumber(this.mobile_number, false).then(function (res) {
            return console.log('Launched dialer!', res);
          })["catch"](function (err) {
            return console.log('Error launching dialer', err);
          });
        }
      }]);

      return ChatPage;
    }();

    ChatPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_7__["UiElementsService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
      }, {
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__["CallNumber"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myContent", {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ChatPage.prototype, "myContent", void 0);
    ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./chat.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./chat.page.scss */
      "./src/app/chat/chat.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_7__["UiElementsService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__["CallNumber"]])], ChatPage);
    /***/
  },

  /***/
  "./src/app/services/common/ui-elements.service.ts": function srcAppServicesCommonUiElementsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiElementsService", function () {
      return UiElementsService;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var UiElementsService = /*#__PURE__*/function () {
      function UiElementsService(toastController, loadingController, alertCtrl, translateService) {
        _classCallCheck(this, UiElementsService);

        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
      }

      _createClass(UiElementsService, [{
        key: "presentToast",
        value: function presentToast(body, position, duration) {
          this.toastController.create({
            message: body,
            duration: duration && duration > 0 ? duration : 2000,
            position: position && (position == "top" || position == "middle") ? position : "bottom"
          }).then(function (toast) {
            return toast.present();
          });
        }
      }, {
        key: "presentErrorAlert",
        value: function presentErrorAlert(msg, headingText, actionText) {
          var _this15 = this;

          this.translateService.get(["error", "dismiss"]).subscribe(function (values) {
            _this15.alertCtrl.create({
              header: headingText ? headingText : values["error"],
              message: msg,
              buttons: [actionText ? actionText : values["dismiss"]]
            }).then(function (alert) {
              return alert.present();
            });
          });
        }
      }, {
        key: "presentLoading",
        value: function presentLoading(body) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this16 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.isLoading = true;
                    _context2.next = 3;
                    return this.loadingController.create({
                      message: body
                    }).then(function (overlay) {
                      overlay.present().then(function () {
                        if (!_this16.isLoading) {
                          try {
                            overlay.dismiss().then(function () {
                              return console.log('loading aborted');
                            });
                          } catch (error) {
                            console.log(error);
                          }
                        }
                      });
                    });

                  case 3:
                    return _context2.abrupt("return", _context2.sent);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "dismissLoading",
        value: function dismissLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.isLoading = false;
                    _context3.prev = 1;
                    _context3.next = 4;
                    return this.loadingController.dismiss();

                  case 4:
                    return _context3.abrupt("return", _context3.sent);

                  case 7:
                    _context3.prev = 7;
                    _context3.t0 = _context3["catch"](1);
                    console.log(_context3.t0);
                    return _context3.abrupt("return", null);

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[1, 7]]);
          }));
        }
      }]);

      return UiElementsService;
    }();

    UiElementsService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }];
    };

    UiElementsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])], UiElementsService);
    /***/
  },

  /***/
  "./src/app/services/events/my-events.service.ts": function srcAppServicesEventsMyEventsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyEventsService", function () {
      return MyEventsService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); // For rxjs 6


    var MyEventsService = /*#__PURE__*/function () {
      function MyEventsService() {
        _classCallCheck(this, MyEventsService);

        this.selectedLanguage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.authResponse = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.profile = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.location = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(MyEventsService, [{
        key: "getLanguageObservable",
        value: function getLanguageObservable() {
          return this.selectedLanguage.asObservable();
        }
      }, {
        key: "setLanguageData",
        value: function setLanguageData(data) {
          this.selectedLanguage.next(data);
        }
      }, {
        key: "getLoginObservable",
        value: function getLoginObservable() {
          return this.authResponse.asObservable();
        }
      }, {
        key: "setLoginData",
        value: function setLoginData(data) {
          this.authResponse.next(data);
        }
      }, {
        key: "getProfileObservable",
        value: function getProfileObservable() {
          return this.profile.asObservable();
        }
      }, {
        key: "setProfileData",
        value: function setProfileData(data) {
          this.profile.next(data);
        }
      }, {
        key: "setLocationData",
        value: function setLocationData(loc) {
          this.location.next(loc);
        }
      }, {
        key: "getLocationObservable",
        value: function getLocationObservable() {
          return this.location.asObservable();
        }
      }]);

      return MyEventsService;
    }();

    MyEventsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], MyEventsService);
    /***/
  },

  /***/
  "./src/app/services/network/api.service.ts": function srcAppServicesNetworkApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
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


    var src_app_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(config, http) {
        _classCallCheck(this, ApiService);

        this.config = config;
        this.http = http;
        this.uuid = "xxx";
        this.platform = "android";
      }

      _createClass(ApiService, [{
        key: "reloadSetting",
        value: function reloadSetting() {
          this.currency_icon = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getSettingValue("currency_icon");
          this.locale = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getSettingValue("locale");
        }
      }, {
        key: "setupHeaders",
        value: function setupHeaders(authToken) {
          var tokenToUse = authToken ? authToken : src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getToken();
          var savedLanguageCode = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getLanguageDefault();
          this.myHeaders = tokenToUse ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenToUse,
            'X-Localization': String(savedLanguageCode ? savedLanguageCode : this.config.availableLanguages[0].code),
            'X-Device-Id': this.uuid ? this.uuid : "xxx",
            'X-Device-Type': this.platform ? this.platform : "android"
          }) : new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Localization': String(savedLanguageCode ? savedLanguageCode : this.config.availableLanguages[0].code),
            'X-Device-Id': this.uuid ? this.uuid : "xxx",
            'X-Device-Type': this.platform ? this.platform : "android"
          });
        }
      }, {
        key: "setUuidAndPlatform",
        value: function setUuidAndPlatform(uuid, platform) {
          this.uuid = uuid;
          this.platform = platform ? String(platform).toLowerCase() : platform;
          this.setupHeaders();
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          return this.http.get('./assets/json/countries.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            var indiaIndex = -1; // if (data) {
            //   for (let i = 0; i < data.length; i++) {
            //     if (data[i].name == "India") {
            //       indiaIndex = i;
            //       break;
            //     }
            //   }
            // }

            if (indiaIndex != -1) data.unshift(data.splice(indiaIndex, 1)[0]);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getCountries', [])));
        }
      }, {
        key: "getURL",
        value: function getURL(url) {
          return this.http.get(url, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "getContactLink",
        value: function getContactLink() {
          return this.http.get('https://dashboard.vtlabs.dev/whatsapp.php?product_name=doctorworld&source=application', {
            headers: this.myHeaders
          });
        }
      }, {
        key: "getSettings",
        value: function getSettings() {
          return this.http.get(this.config.apiBase + 'api/settings', {
            headers: this.myHeaders
          });
        }
      }, {
        key: "submitSupport",
        value: function submitSupport(supportRequest) {
          return this.http.post(this.config.apiBase + "api/support", supportRequest, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "checkUser",
        value: function checkUser(checkUserRequest) {
          return this.http.post(this.config.apiBase + 'api/check-user', checkUserRequest, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "loginSocial",
        value: function loginSocial(socialLoginRequest) {
          var _this17 = this;

          return this.http.post(this.config.apiBase + 'api/social/login', socialLoginRequest, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            return _this17.setupUserMe(data.user);
          }));
        }
      }, {
        key: "loginUser",
        value: function loginUser(loginTokenRequest) {
          var _this18 = this;

          return this.http.post(this.config.apiBase + 'api/login', loginTokenRequest, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            return _this18.setupUserMe(data.user);
          }));
        }
      }, {
        key: "createUser",
        value: function createUser(signUpRequest) {
          var _this19 = this;

          return this.http.post(this.config.apiBase + 'api/register', signUpRequest, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            return _this19.setupUserMe(data.user);
          }));
        }
      }, {
        key: "updateUser",
        value: function updateUser(updateRequest) {
          var _this20 = this;

          return this.http.put(this.config.apiBase + 'api/user', updateRequest, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            return _this20.setupUserMe(data);
          }));
        }
      }, {
        key: "walletTransfer",
        value: function walletTransfer(wtr) {
          return this.http.post(this.config.apiBase + 'api/user/wallet/payout', wtr, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "getSummary",
        value: function getSummary(profileId) {
          return this.http.get(this.config.apiBase + 'api/delivery/' + profileId + '/summary', {
            headers: this.myHeaders
          });
        }
      }, {
        key: "getInsightEarning",
        value: function getInsightEarning(insightRequest) {
          var urlParams = new URLSearchParams();
          urlParams.append("duration", insightRequest.duration);
          urlParams.append("limit", String(insightRequest.limit));
          return this.http.get(this.config.apiBase + 'api/user/wallet/earnings?' + urlParams.toString(), {
            headers: this.myHeaders
          });
        }
      }, {
        key: "getInsightOrder",
        value: function getInsightOrder(deliveryId, insightRequest) {
          var urlParams = new URLSearchParams();
          urlParams.append("duration", insightRequest.duration);
          urlParams.append("limit", String(insightRequest.limit));
          return this.http.get(this.config.apiBase + 'api/delivery/' + deliveryId + '/summary?' + urlParams.toString(), {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (!data.orders_chart_data) data.orders_chart_data = [{
              period: "0",
              total: "10"
            }, {
              period: "0",
              total: "10"
            }, {
              period: "0",
              total: "10"
            }, {
              period: "0",
              total: "10"
            }, {
              period: "0",
              total: "10"
            }];
          }));
        }
      }, {
        key: "getBalance",
        value: function getBalance() {
          return this.http.get(this.config.apiBase + 'api/user/wallet/balance', {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (!data.balance) data.balance = 0;
            data.balance = Number(data.balance.toFixed(2));
          }));
        }
      }, {
        key: "getTransactions",
        value: function getTransactions() {
          var _this21 = this;

          return this.http.get(this.config.apiBase + 'api/user/wallet/transactions', {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data && data.data && data.data.length) {
              var _iterator2 = _createForOfIteratorHelper(data.data),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var trans = _step2.value;

                  _this21.setupTransaction(trans);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }));
        }
      }, {
        key: "updateOrder",
        value: function updateOrder(ur, orderId) {
          var _this22 = this;

          this.reloadSetting();
          return this.http.put(this.config.apiBase + "api/orders/" + orderId, ur, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this22.setupOrder(data);
          }));
        }
      }, {
        key: "getOrder",
        value: function getOrder(profileId) {
          var _this23 = this;

          this.reloadSetting();
          return this.http.get(this.config.apiBase + "api/delivery/" + profileId + "/order", {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this23.setupOrder(data);
          }));
        }
      }, {
        key: "getOrderById",
        value: function getOrderById(orderId) {
          var _this24 = this;

          this.reloadSetting();
          return this.http.get(this.config.apiBase + "api/orders/" + orderId, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this24.setupOrder(data);
          }));
        }
      }, {
        key: "getOrderRequest",
        value: function getOrderRequest(profileId) {
          var _this25 = this;

          this.reloadSetting();
          return this.http.get(this.config.apiBase + "api/delivery/" + profileId + "/request", {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            data.created_at = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].formatTimestampDate(data.created_at, _this25.locale);
            data.updated_at = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].formatTimestampDate(data.updated_at, _this25.locale);

            _this25.setupOrder(data.order);
          }));
        }
      }, {
        key: "getProfile",
        value: function getProfile() {
          var _this26 = this;

          return this.http.get(this.config.apiBase + "api/delivery", {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this26.setupProfile(data);
          }));
        }
      }, {
        key: "updateOrderRequest",
        value: function updateOrderRequest(orUr, requestId) {
          return this.http.put(this.config.apiBase + "api/delivery/request/" + requestId, orUr, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "updateProfile",
        value: function updateProfile(profileUpdateRequest, profileId) {
          var _this27 = this;

          return this.http.put(this.config.apiBase + "api/delivery/" + profileId, profileUpdateRequest, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this27.setupProfile(data);
          }));
        }
      }, {
        key: "getPaymentMethods",
        value: function getPaymentMethods() {
          return this.http.get(this.config.apiBase + 'api/customer/payment-methods', {
            headers: this.myHeaders
          });
        }
      }, {
        key: "getAddresses",
        value: function getAddresses() {
          return this.http.get(this.config.apiBase + 'api/customer/address', {
            headers: this.myHeaders
          });
        }
      }, {
        key: "addressAdd",
        value: function addressAdd(address) {
          return this.http.post(this.config.apiBase + 'api/customer/address', address, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "addressUpdate",
        value: function addressUpdate(address) {
          return this.http.put(this.config.apiBase + 'api/customer/address/' + address.id + '/update', address, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "rateUser",
        value: function rateUser(uId, rateRequest) {
          return this.http.post(this.config.apiBase + "api/user/ratings/" + uId, JSON.stringify(rateRequest), {
            headers: this.myHeaders
          });
        }
      }, {
        key: "getFaqs",
        value: function getFaqs() {
          return this.http.get(this.config.apiBase + 'api/faq', {
            headers: this.myHeaders
          });
        }
      }, {
        key: "postNotification",
        value: function postNotification(roleTo, userIdTo) {
          return this.http.post(this.config.apiBase + 'api/user/push-notification', {
            role: roleTo,
            user_id: userIdTo
          }, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "setupProfile",
        value: function setupProfile(profile) {
          if (typeof profile.meta == "string") profile.meta = JSON.parse(profile.meta);
          if (profile.meta == null) profile.meta = {};
          if (profile.user) this.setupUserMe(profile.user);
        }
      }, {
        key: "setupUserMe",
        value: function setupUserMe(data) {
          if (!data.mediaurls || !data.mediaurls.images) data.mediaurls = {
            images: []
          };

          if (!data.image_url) {
            var _iterator3 = _createForOfIteratorHelper(data.mediaurls.images),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var imgObj = _step3.value;

                if (imgObj["default"]) {
                  data.image_url = imgObj["default"];
                  break;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }
      }, {
        key: "setupTransaction",
        value: function setupTransaction(transaction) {
          transaction.created_at = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].formatTimestampDateTime(transaction.created_at, this.locale);
          transaction.updated_at = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].formatTimestampDateTime(transaction.updated_at, this.locale);
          if (!transaction.amount) transaction.amount = 0;
          transaction.amount = Number(transaction.amount.toFixed(2));
          if (transaction.meta && transaction.meta.source_amount) transaction.meta.source_amount = Number(Number(transaction.meta.source_amount).toFixed(2));
        }
      }, {
        key: "setupOrder",
        value: function setupOrder(order) {
          order.created_at = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].formatTimestampDate(order.created_at, this.locale);
          if (order.scheduled_on) order.scheduled_on = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].formatTimestampDate(order.scheduled_on, this.locale);
          order.total_toshow = this.currency_icon + Number(order.total).toFixed(2);
          order.subtotal_toshow = this.currency_icon + Number(order.subtotal).toFixed(2);
          if (order.delivery_fee) order.delivery_fee_toshow = this.currency_icon + Number(order.delivery_fee).toFixed(2);
          if (order.discount) order.discount_toshow = this.currency_icon + Number(order.discount).toFixed(2);
          if (order.taxes) order.taxes_toshow = this.currency_icon + Number(order.taxes).toFixed(2);

          var _iterator4 = _createForOfIteratorHelper(order.products),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var product = _step4.value;
              product.total_toshow = this.currency_icon + Number(product.total).toFixed(2);

              if (product.vendor_product && product.vendor_product.product) {
                if (!product.vendor_product.product.price) product.vendor_product.product.price = 0;
                product.vendor_product.product.priceToShow = this.currency_icon + Number(product.vendor_product.product.price).toFixed(2);
                product.vendor_product.product.images = new Array();

                if (product.vendor_product.product.mediaurls && product.vendor_product.product.mediaurls.images) {
                  var _iterator8 = _createForOfIteratorHelper(product.vendor_product.product.mediaurls.images),
                      _step8;

                  try {
                    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                      var _imgObj3 = _step8.value;
                      if (_imgObj3["default"]) product.vendor_product.product.images.push(_imgObj3["default"]);
                    }
                  } catch (err) {
                    _iterator8.e(err);
                  } finally {
                    _iterator8.f();
                  }
                }

                if (!product.vendor_product.product.images.length) product.vendor_product.product.images.push("assets/images/empty_image.png"); //custom

                product.vendor_product.product.prescription_required = product.vendor_product.product.meta && product.vendor_product.product.meta.prescription;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          if (order.vendor) {
            if (!order.vendor.mediaurls || !order.vendor.mediaurls.images) order.vendor.mediaurls = {
              images: []
            };
            order.vendor.image = "assets/images/empty_image.png";

            var _iterator5 = _createForOfIteratorHelper(order.vendor.mediaurls.images),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var imgObj = _step5.value;

                if (imgObj["default"]) {
                  order.vendor.image = imgObj["default"];
                  break;
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }

          if (order.delivery) {
            order.delivery.delivery.user.image_url = "assets/images/empty_dp";
            if (!order.delivery.delivery.user.mediaurls || !order.delivery.delivery.user.mediaurls.images) order.delivery.delivery.user.mediaurls = {
              images: []
            };

            var _iterator6 = _createForOfIteratorHelper(order.delivery.delivery.user.mediaurls.images),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _imgObj = _step6.value;

                if (_imgObj["default"]) {
                  order.delivery.delivery.user.image_url = _imgObj["default"];
                  break;
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }

          if (order.user) {
            if (!order.user.mediaurls || !order.user.mediaurls.images) order.user.mediaurls = {
              images: []
            };
            order.user.image_url = "assets/images/empty_dp.png";

            var _iterator7 = _createForOfIteratorHelper(order.user.mediaurls.images),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _imgObj2 = _step7.value;

                if (_imgObj2["default"]) {
                  order.user.image_url = _imgObj2["default"];
                  break;
                }
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        }
      }, {
        key: "handleError",
        value: function handleError() {
          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption

            console.log("".concat(operation, " failed: ").concat(error.message)); // Let the app keep running by returning an empty result.

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
          };
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [src_app_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"]]
        }]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], ApiService);
    /***/
  },

  /***/
  "./src/app/vt-popup/vt-popup-routing.module.ts": function srcAppVtPopupVtPopupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VtPopupPageRoutingModule", function () {
      return VtPopupPageRoutingModule;
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


    var _vt_popup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./vt-popup.page */
    "./src/app/vt-popup/vt-popup.page.ts");

    var routes = [{
      path: '',
      component: _vt_popup_page__WEBPACK_IMPORTED_MODULE_3__["VtPopupPage"]
    }];

    var VtPopupPageRoutingModule = function VtPopupPageRoutingModule() {
      _classCallCheck(this, VtPopupPageRoutingModule);
    };

    VtPopupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VtPopupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/vt-popup/vt-popup.module.ts": function srcAppVtPopupVtPopupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VtPopupPageModule", function () {
      return VtPopupPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _vt_popup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./vt-popup-routing.module */
    "./src/app/vt-popup/vt-popup-routing.module.ts");
    /* harmony import */


    var _vt_popup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./vt-popup.page */
    "./src/app/vt-popup/vt-popup.page.ts");

    var VtPopupPageModule = function VtPopupPageModule() {
      _classCallCheck(this, VtPopupPageModule);
    };

    VtPopupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _vt_popup_routing_module__WEBPACK_IMPORTED_MODULE_5__["VtPopupPageRoutingModule"]],
      declarations: [_vt_popup_page__WEBPACK_IMPORTED_MODULE_6__["VtPopupPage"]]
    })], VtPopupPageModule);
    /***/
  },

  /***/
  "./src/app/vt-popup/vt-popup.page.scss": function srcAppVtPopupVtPopupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: rgba(0, 0, 0, 0.66) !important;\n}\n\n.cloes_btn {\n  padding: 25px;\n}\n\n.cloes_btn ion-icon {\n  color: #fff;\n  font-size: 1.7rem;\n  font-weight: 600;\n}\n\nion-card {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: calc(100% - 53px);\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 0;\n  background: none;\n  overflow: hidden;\n  box-shadow: none;\n  padding: 0 0 3px 0;\n}\n\nion-card::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 113px);\n  background: #fff;\n  border-radius: 5px;\n}\n\nion-card .img_box {\n  position: relative;\n  z-index: 99;\n  margin: auto;\n  width: 100%;\n  max-width: 275px;\n  min-height: 275px;\n}\n\nion-card .text_box {\n  position: relative;\n  z-index: 99;\n  width: 100%;\n  padding: 0 25px;\n  top: -23px;\n}\n\nion-card .text_box h2 {\n  font-size: 2rem;\n  font-weight: 600;\n  color: #000;\n  margin: 0;\n  letter-spacing: 0;\n  padding-bottom: 18px;\n}\n\nion-card .text_box p {\n  margin: 0;\n  font-size: 1.1rem;\n  line-height: 19px;\n  color: #000;\n  font-weight: 400;\n  letter-spacing: 0;\n}\n\nion-card ion-list {\n  position: relative;\n  z-index: 99;\n  margin: 0;\n  padding: 0 25px;\n  padding-bottom: 25px;\n}\n\nion-card ion-list ion-item {\n  background: #f5f5f5;\n  padding: 0 17px;\n  width: calc(100% - 0px);\n  min-height: unset !important;\n  margin: 0 auto;\n  --background: none;\n  align-items: flex-start;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --ripple-color: var(--transparent) !important;\n  --background-focused: var(--transparent) !important;\n  margin-bottom: 20px;\n  border-radius: 5px;\n}\n\nion-card ion-list ion-item ion-input {\n  font-size: 0.95rem !important;\n  font-weight: 500 !important;\n  color: #000;\n  --padding-start: 0 !important;\n  --padding-end: 0 !important;\n  --padding-top: 0 !important;\n  --padding-bottom: 0px !important;\n  --placeholder-color: #b3b3b3 !important;\n  --placeholder-opacity: 1;\n  --placeholder-font-weight: 400 !important;\n  --padding: 0 !important;\n  min-height: 45px;\n}\n\nion-card ion-list button[ion-button] {\n  margin: 0;\n  background: linear-gradient(180deg, #f5839d 0%, #ee2d5a 70%);\n  height: 46px;\n  border-radius: 5px;\n  text-transform: unset;\n  font-size: 1.4rem;\n  box-shadow: 0 12px 18px -1px rgba(238, 45, 90, 0.34);\n}\n\nion-card ion-list .button.btn {\n  width: 100%;\n  font-size: 0.95rem;\n  font-weight: 400;\n  letter-spacing: 0.53px !important;\n  height: 46px;\n  --background: linear-gradient(180deg, #f5839d 0%, #ee2d5a 70%);\n  color: #fff;\n  margin: 0;\n  text-transform: unset !important;\n  --box-shadow: 0 12px 18px -1px rgba(238, 45, 90, 0.34);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnQtcG9wdXAvRjpcXGZpdmVyXFxCZXJuYXJkXFxBZ29jYXJyeVxcYWdvY2FycnktZGVsaXZlcnkvc3JjXFxhcHBcXHZ0LXBvcHVwXFx2dC1wb3B1cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Z0LXBvcHVwL3Z0LXBvcHVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0k7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NSOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQVI7O0FER0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNEUjs7QURJSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0ZSOztBRElRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDRlo7O0FES1E7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSFo7O0FET0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDTFI7O0FET1E7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMWjs7QURPWTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHdCQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDTGhCOztBRFVZO0VBQ0ksU0FBQTtFQUNBLDREQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9EQUFBO0FDUmhCOztBRGFZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSw4REFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzREFBQTtBQ1hoQiIsImZpbGUiOiJzcmMvYXBwL3Z0LXBvcHVwL3Z0LXBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42NikgIWltcG9ydGFudDtcbn1cblxuLmNsb2VzX2J0biB7XG4gICAgcGFkZGluZzogMjVweDtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbn1cblxuaW9uLWNhcmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1M3B4KTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgcGFkZGluZzogMCAwIDNweCAwO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDExM3B4KTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cblxuICAgIC5pbWdfYm94IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAyNzVweDtcbiAgICAgICAgbWluLWhlaWdodDogMjc1cHg7XG4gICAgfVxuXG4gICAgLnRleHRfYm94IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICAgICAgdG9wOiAtMjNweDtcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcblxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxN3B4O1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDBweCk7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0tbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0tcmlwcGxlLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2IzYjNiMyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICZbaW9uLWJ1dHRvbl0ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjU4MzlkIDAlLCAjZWUyZDVhIDcwJSk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDE4cHggLTFweCByZ2JhKDIzOCwgNDUsIDkwLCAwLjM0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgJi5idG4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjUzcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjU4MzlkIDAlLCAjZWUyZDVhIDcwJSk7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tYm94LXNoYWRvdzogMCAxMnB4IDE4cHggLTFweCByZ2JhKDIzOCwgNDUsIDkwLCAwLjM0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42NikgIWltcG9ydGFudDtcbn1cblxuLmNsb2VzX2J0biB7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG4uY2xvZXNfYnRuIGlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pb24tY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1M3B4KTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZzogMCAwIDNweCAwO1xufVxuaW9uLWNhcmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMTNweCk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmlvbi1jYXJkIC5pbWdfYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAyNzVweDtcbiAgbWluLWhlaWdodDogMjc1cHg7XG59XG5pb24tY2FyZCAudGV4dF9ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAyNXB4O1xuICB0b3A6IC0yM3B4O1xufVxuaW9uLWNhcmQgLnRleHRfYm94IGgyIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luOiAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgcGFkZGluZy1ib3R0b206IDE4cHg7XG59XG5pb24tY2FyZCAudGV4dF9ib3ggcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5pb24tY2FyZCBpb24tbGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAyNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cbmlvbi1jYXJkIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgcGFkZGluZzogMCAxN3B4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMHB4KTtcbiAgbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAtLXJpcHBsZS1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaW9uLWNhcmQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgZm9udC1zaXplOiAwLjk1cmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDA7XG4gIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICNiM2IzYjMgIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDQ1cHg7XG59XG5pb24tY2FyZCBpb24tbGlzdCBidXR0b25baW9uLWJ1dHRvbl0ge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmNTgzOWQgMCUsICNlZTJkNWEgNzAlKTtcbiAgaGVpZ2h0OiA0NnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1bnNldDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGJveC1zaGFkb3c6IDAgMTJweCAxOHB4IC0xcHggcmdiYSgyMzgsIDQ1LCA5MCwgMC4zNCk7XG59XG5pb24tY2FyZCBpb24tbGlzdCAuYnV0dG9uLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjUzcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NnB4O1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmNTgzOWQgMCUsICNlZTJkNWEgNzAlKTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tYm94LXNoYWRvdzogMCAxMnB4IDE4cHggLTFweCByZ2JhKDIzOCwgNDUsIDkwLCAwLjM0KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/vt-popup/vt-popup.page.ts": function srcAppVtPopupVtPopupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VtPopupPage", function () {
      return VtPopupPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");

    var VtPopupPage = /*#__PURE__*/function () {
      function VtPopupPage(navCtrl, modalCtrl, modalController, http, uiElementService) {
        _classCallCheck(this, VtPopupPage);

        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.modalController = modalController;
        this.http = http;
        this.uiElementService = uiElementService;
        this.email_Id = '';
      }

      _createClass(VtPopupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalController.dismiss();
        }
      }, {
        key: "onSubscribe",
        value: function onSubscribe() {
          var _this28 = this;

          var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

          if (this.email_Id.length <= 5 || !reg.test(this.email_Id)) {
            return this.uiElementService.presentToast('Please provide your Email.');
          }

          this.uiElementService.presentLoading('Sending...');
          var req = {
            "email": this.email_Id,
            "source": "opus_application_doctorworld"
          };
          this.http.post("https://dashboard.vtlabs.dev/api/subscribe", req).subscribe(function (res) {
            _this28.uiElementService.presentToast('Submitted successfully.');

            _this28.modalController.dismiss();

            _this28.uiElementService.dismissLoading();
          });
        }
      }]);

      return VtPopupPage;
    }();

    VtPopupPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"]
      }];
    };

    VtPopupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-vt-popup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./vt-popup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vt-popup/vt-popup.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./vt-popup.page.scss */
      "./src/app/vt-popup/vt-popup.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"]])], VtPopupPage);
    /***/
  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  "./src/models/address.models.ts": function srcModelsAddressModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyAddress", function () {
      return MyAddress;
    });

    var MyAddress = function MyAddress() {
      _classCallCheck(this, MyAddress);
    };
    /***/

  },

  /***/
  "./src/models/chat.models.ts": function srcModelsChatModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Chat", function () {
      return Chat;
    });
    /* harmony import */


    var _helper_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./helper.models */
    "./src/models/helper.models.ts");

    var Chat = /*#__PURE__*/function () {
      function Chat() {
        _classCallCheck(this, Chat);
      }

      _createClass(Chat, null, [{
        key: "fromMessage",
        value: function fromMessage(msg, isMeSender) {
          var chat = new Chat();
          chat.chatId = isMeSender ? msg.recipientId : msg.senderId;
          chat.myId = isMeSender ? msg.senderId : msg.recipientId;
          chat.chatName = isMeSender ? msg.recipientName : msg.senderName;
          chat.chatImage = isMeSender ? msg.recipientImage : msg.senderImage;
          chat.chatStatus = isMeSender ? msg.recipientStatus : msg.senderStatus;
          chat.dateTimeStamp = msg.dateTimeStamp;
          chat.timeDiff = _helper_models__WEBPACK_IMPORTED_MODULE_0__["Helper"].formatMillisDateTime(Number(chat.dateTimeStamp), _helper_models__WEBPACK_IMPORTED_MODULE_0__["Helper"].getLocale());
          chat.lastMessage = msg.body;
          return chat;
        }
      }]);

      return Chat;
    }();
    /***/

  },

  /***/
  "./src/models/constants.models.ts": function srcModelsConstantsModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Constants", function () {
      return Constants;
    });

    var Constants = function Constants() {
      _classCallCheck(this, Constants);
    };

    Constants.KEY_USER = 'dwdel_user';
    Constants.KEY_NOTIFICATIONS = 'dwdel_notis';
    Constants.KEY_TOKEN = 'dwdel_token';
    Constants.KEY_SETTINGS = 'dwdel_settings';
    Constants.KEY_ADDRESS = 'dwdel_address';
    Constants.KEY_ADDRESSES = 'dwdel_addresses';
    Constants.KEY_APPOINT_REQ = 'dwdel_appoint_req';
    Constants.KEY_APPOINT_MYRATES = 'dwdel_appoint_myrates';
    Constants.KEY_LOCALE = "dwdel_locale";
    Constants.KEY_DEFAULT_LANGUAGE = 'dwdel_dl';
    Constants.KEY_FAQS = 'dwdel_faq';
    Constants.KEY_PROFILE = "dwdel_profile";
    Constants.KEY_LOCATION = "dwdel_location";
    Constants.KEY_BANK_DETAIL = "dwdel_bank_detail";
    Constants.KEY_PROFILE_SUMMARY = "dwdel_profile_summary";
    Constants.KEY_ORDER_DISTANCE_MATRIX = "dwdel_order_distance_matrix";
    Constants.KEY_PRESCRIPTION_URL = "prescription_url";
    Constants.REF_USERS = "fire_app/users";
    Constants.REF_CHAT = "fire_app/chats";
    Constants.REF_INBOX = "fire_app/inbox";
    Constants.REF_USERS_FCM_IDS = "fire_app/user_fcm_ids";
    Constants.SCOPE_ECOMMERCE = "ecommerce";
    Constants.SCOPE_SPECIALIZATION = "specializations";
    Constants.SCOPE_DOCTOR_TYPE = "type";
    Constants.SCOPE_DOCTOR = "doctor";
    Constants.SCOPE_HOSPITAL = "hospital";
    Constants.ROLE_USER = "customer";
    Constants.ROLE_DOCTOR = 'doctor';
    Constants.ROLE_DELIVERY = 'delivery';
    Constants.ROLE_VENDOR = 'vendor';
    /***/
  },

  /***/
  "./src/models/helper.models.ts": function srcModelsHelperModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Helper", function () {
      return Helper;
    });
    /* harmony import */


    var _constants_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./constants.models */
    "./src/models/constants.models.ts");
    /* harmony import */


    var _notification_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./notification.models */
    "./src/models/notification.models.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);

    var Helper = /*#__PURE__*/function () {
      function Helper() {
        _classCallCheck(this, Helper);
      }

      _createClass(Helper, null, [{
        key: "getChatChild",
        value: function getChatChild(userId, myId) {
          //example: userId="9" and myId="5" -->> chat child = "5-9"
          var values = [userId, myId];
          values.sort(function (one, two) {
            return one > two ? -1 : 1;
          });
          return values[0] + "-" + values[1];
        }
      }, {
        key: "formatDuration",
        value: function formatDuration(durationInSeconds) {
          if (!durationInSeconds) durationInSeconds = 0;
          return moment__WEBPACK_IMPORTED_MODULE_2__["utc"](durationInSeconds * 1000).format('mm:ss');
        }
      }, {
        key: "formatDistance",
        value: function formatDistance(distance, distanceMetric) {
          if (!distance) distance = 0;
          var divider = distanceMetric == "km" ? 1000 : 1609.34;
          return Number(distance / divider).toFixed(2);
        }
      }, {
        key: "setOrderDistanceDuration",
        value: function setOrderDistanceDuration(orderId, distanceMatrix) {
          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_ORDER_DISTANCE_MATRIX + orderId, JSON.stringify(distanceMatrix));
        }
      }, {
        key: "getOrderDistanceDuration",
        value: function getOrderDistanceDuration(orderId) {
          return JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_ORDER_DISTANCE_MATRIX + orderId));
        }
      }, {
        key: "formatPhone",
        value: function formatPhone(phone) {
          var toReturn = phone.replace(/\s/g, '');

          while (toReturn.startsWith("0")) {
            toReturn = toReturn.substring(1);
          }

          return toReturn;
        }
      }, {
        key: "setFaqs",
        value: function setFaqs(faqs) {
          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_FAQS, JSON.stringify(faqs));
        }
      }, {
        key: "getFaqs",
        value: function getFaqs() {
          var adl = JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_FAQS));
          return adl && adl.length ? adl : new Array();
        }
      }, {
        key: "getBankDetail",
        value: function getBankDetail() {
          return JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_BANK_DETAIL));
        }
      }, {
        key: "setBankDetail",
        value: function setBankDetail(bd) {
          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_BANK_DETAIL, JSON.stringify(bd));
        }
      }, {
        key: "getLocation",
        value: function getLocation() {
          return JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_LOCATION));
        }
      }, {
        key: "setLocation",
        value: function setLocation(location) {
          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_LOCATION, JSON.stringify(location));
        }
      }, {
        key: "setProfile",
        value: function setProfile(profile) {
          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_PROFILE, JSON.stringify(profile));
        }
      }, {
        key: "getProfile",
        value: function getProfile() {
          return JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_PROFILE));
        }
      }, {
        key: "setSettings",
        value: function setSettings(settings) {
          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_SETTINGS, JSON.stringify(settings));
        }
      }, {
        key: "getSettings",
        value: function getSettings() {
          return JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_SETTINGS));
        }
      }, {
        key: "setLoggedInUser",
        value: function setLoggedInUser(user) {
          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_USER, JSON.stringify(user));
        }
      }, {
        key: "setLoggedInUserResponse",
        value: function setLoggedInUserResponse(authRes) {
          window.localStorage.removeItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_USER);
          window.localStorage.removeItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_PROFILE);
          window.localStorage.removeItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_TOKEN);
          window.localStorage.removeItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_ADDRESS);
          window.localStorage.removeItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_ADDRESSES);
          window.localStorage.removeItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_NOTIFICATIONS);

          if (authRes && authRes.user && authRes.token) {
            window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_USER, JSON.stringify(authRes.user));
            window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_TOKEN, authRes.token);
          }
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_TOKEN);
        }
      }, {
        key: "getLoggedInUser",
        value: function getLoggedInUser() {
          return JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_USER));
        }
      }, {
        key: "getLocale",
        value: function getLocale() {
          var sl = window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_LOCALE);
          return sl && sl.length ? sl : "en";
        }
      }, {
        key: "getLanguageDefault",
        value: function getLanguageDefault() {
          return window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_DEFAULT_LANGUAGE);
        }
      }, {
        key: "setLanguageDefault",
        value: function setLanguageDefault(language) {
          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_DEFAULT_LANGUAGE, language);
        }
      }, {
        key: "setLocale",
        value: function setLocale(lc) {
          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_LOCALE, lc);
        }
      }, {
        key: "getSettingValue",
        value: function getSettingValue(settingKey) {
          var settings = this.getSettings();
          var toReturn;

          if (settings) {
            var _iterator9 = _createForOfIteratorHelper(settings),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var s = _step9.value;

                if (s.key == settingKey) {
                  toReturn = s.value;
                  break;
                }
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }

          if (!toReturn) toReturn = "";
          return toReturn;
        }
      }, {
        key: "getSettingsValue",
        value: function getSettingsValue(settingKeys) {
          var settings = this.getSettings();
          var toReturn = new Array();

          if (settings) {
            var _iterator10 = _createForOfIteratorHelper(settingKeys),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var settingKey = _step10.value;

                var _iterator11 = _createForOfIteratorHelper(settings),
                    _step11;

                try {
                  for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                    var s = _step11.value;

                    if (s.key == settingKey) {
                      toReturn.push(s.value);
                      break;
                    }
                  }
                } catch (err) {
                  _iterator11.e(err);
                } finally {
                  _iterator11.f();
                }
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          }

          return toReturn;
        }
      }, {
        key: "saveNotification",
        value: function saveNotification(notiTitle, notiBody, notiTime) {
          var notifications = JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_NOTIFICATIONS));
          if (!notifications) notifications = new Array();
          notifications.push(new _notification_models__WEBPACK_IMPORTED_MODULE_1__["MyNotification"](notiTitle, notiBody, notiTime));
          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_NOTIFICATIONS, JSON.stringify(notifications));
        }
      }, {
        key: "formatMillisDateTime",
        value: function formatMillisDateTime(millis, locale) {
          return moment__WEBPACK_IMPORTED_MODULE_2__(millis).locale(locale).format("ddd, MMM D, HH:mm");
        }
      }, {
        key: "formatTimestampDateTime",
        value: function formatTimestampDateTime(timestamp, locale) {
          return moment__WEBPACK_IMPORTED_MODULE_2__(timestamp).locale(locale).format("ddd, MMM D, HH:mm");
        }
      }, {
        key: "formatMillisDate",
        value: function formatMillisDate(millis, locale) {
          return moment__WEBPACK_IMPORTED_MODULE_2__(millis).locale(locale).format("Do MMM YYYY");
        }
      }, {
        key: "formatTimestampDate",
        value: function formatTimestampDate(timestamp, locale) {
          return moment__WEBPACK_IMPORTED_MODULE_2__(timestamp).locale(locale).format("Do MMM YYYY");
        }
      }, {
        key: "formatMillisTime",
        value: function formatMillisTime(millis, locale) {
          return moment__WEBPACK_IMPORTED_MODULE_2__(millis).locale(locale).format("HH:mm");
        }
      }, {
        key: "formatTimestampTime",
        value: function formatTimestampTime(timestamp, locale) {
          return moment__WEBPACK_IMPORTED_MODULE_2__(timestamp).locale(locale).format("HH:mm");
        }
      }]);

      return Helper;
    }();
    /***/

  },

  /***/
  "./src/models/message.models.ts": function srcModelsMessageModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Message", function () {
      return Message;
    });
    /* harmony import */


    var _helper_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./helper.models */
    "./src/models/helper.models.ts");

    var Message = /*#__PURE__*/function () {
      function Message() {
        _classCallCheck(this, Message);
      }

      _createClass(Message, [{
        key: "fromRow",
        value: function fromRow(arg0) {
          this.senderName = arg0.senderName;
          this.senderImage = arg0.senderImage;
          this.senderStatus = arg0.senderStatus;
          this.recipientName = arg0.recipientName;
          this.recipientImage = arg0.recipientImage;
          this.recipientStatus = arg0.recipientStatus;
          this.recipientId = arg0.recipientId;
          this.senderId = arg0.senderId;
          this.chatId = arg0.chatId;
          this.id = arg0.id;
          this.body = arg0.body;
          this.dateTimeStamp = arg0.dateTimeStamp;
          this.timeDiff = _helper_models__WEBPACK_IMPORTED_MODULE_0__["Helper"].formatMillisDateTime(Number(this.dateTimeStamp), _helper_models__WEBPACK_IMPORTED_MODULE_0__["Helper"].getLocale());
          this.delivered = arg0.delivered == 1;
          this.sent = arg0.sent == 1;
        }
      }]);

      return Message;
    }();
    /***/

  },

  /***/
  "./src/models/notification.models.ts": function srcModelsNotificationModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyNotification", function () {
      return MyNotification;
    });

    var MyNotification = function MyNotification(title, detail, time) {
      _classCallCheck(this, MyNotification);

      this.title = title;
      this.detail = detail;
      this.time = time;
    };
    /***/

  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\fiver\Bernard\Agocarry\agocarry-delivery\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map