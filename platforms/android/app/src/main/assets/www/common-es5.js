function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js": function node_modulesIonicCoreDistEsmButtonActiveD4bd4f74Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createButtonActiveGesture;
    });
    /* harmony import */


    var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-7a8b7a1c.js */
    "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
    /* harmony import */


    var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./haptic-27b3f981.js */
    "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");
    /* harmony import */


    var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./index-34cb2743.js */
    "./node_modules/@ionic/core/dist/esm/index-34cb2743.js");

    var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
      var currentTouchedButton;
      var initialTouchedButton;

      var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
        if (typeof document === 'undefined') {
          return;
        }

        var target = document.elementFromPoint(x, y);

        if (!target || !isButton(target)) {
          clearActiveButton();
          return;
        }

        if (target !== currentTouchedButton) {
          clearActiveButton();
          setActiveButton(target, hapticFeedbackFn);
        }
      };

      var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
        currentTouchedButton = button;

        if (!initialTouchedButton) {
          initialTouchedButton = currentTouchedButton;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.add('ion-activated');
        });
        hapticFeedbackFn();
      };

      var clearActiveButton = function clearActiveButton() {
        var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!currentTouchedButton) {
          return;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.remove('ion-activated');
        });
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */

        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
          currentTouchedButton.click();
        }

        currentTouchedButton = undefined;
      };

      return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
        el: el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: function onStart(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
        },
        onMove: function onMove(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
        },
        onEnd: function onEnd() {
          clearActiveButton(true);
          Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
          initialTouchedButton = undefined;
        }
      });
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js": function node_modulesIonicCoreDistEsmFrameworkDelegate4392cd63Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });
    /* harmony import */


    var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./helpers-dd7e4b7b.js */
    "./node_modules/@ionic/core/dist/esm/helpers-dd7e4b7b.js");

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);
                _context.next = 10;
                return new Promise(function (resolve) {
                  return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve);
                });

              case 10:
                return _context.abrupt("return", el);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js": function node_modulesIonicCoreDistEsmHaptic27b3f981Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return hapticImpact;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelectionEnd;
    });

    var HapticEngine = {
      getEngine: function getEngine() {
        var win = window;
        return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
      },
      available: function available() {
        return !!this.getEngine();
      },
      isCordova: function isCordova() {
        return !!window.TapticEngine;
      },
      isCapacitor: function isCapacitor() {
        var win = window;
        return !!win.Capacitor;
      },
      impact: function impact(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({
          style: style
        });
      },
      notification: function notification(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({
          style: style
        });
      },
      selection: function selection() {
        this.impact({
          style: 'light'
        });
      },
      selectionStart: function selectionStart() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionStart();
        } else {
          engine.gestureSelectionStart();
        }
      },
      selectionChanged: function selectionChanged() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      },
      selectionEnd: function selectionEnd() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionEnd();
        } else {
          engine.gestureSelectionEnd();
        }
      }
    };
    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */

    var hapticSelection = function hapticSelection() {
      HapticEngine.selection();
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      HapticEngine.selectionStart();
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      HapticEngine.selectionChanged();
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      HapticEngine.selectionEnd();
    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
     */


    var hapticImpact = function hapticImpact(options) {
      HapticEngine.impact(options);
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js": function node_modulesIonicCoreDistEsmSpinnerConfigsCd7845afJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js": function node_modulesIonicCoreDistEsmThemeFf3fc52fJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color, cssClassMap) {
      return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction, animation));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8, _x9) {
        return _ref2.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./src/app/services/network/connectivity.service.ts": function srcAppServicesNetworkConnectivityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectivityService", function () {
      return ConnectivityService;
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


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ConnectivityService = /*#__PURE__*/function () {
      function ConnectivityService(platform, network) {
        _classCallCheck(this, ConnectivityService);

        this.platform = platform;
        this.network = network;
      }

      _createClass(ConnectivityService, [{
        key: "isOnline",
        value: function isOnline() {
          if (this.onDevice && this.network.type) {
            return this.network.type != 'none';
          } else {
            return navigator.onLine;
          }
        }
      }, {
        key: "isOffline",
        value: function isOffline() {
          if (this.onDevice && this.network.type) {
            return this.network.type == 'none';
          } else {
            return !navigator.onLine;
          }
        }
      }, {
        key: "watchOnline",
        value: function watchOnline() {
          return this.network.onConnect();
        }
      }, {
        key: "watchOffline",
        value: function watchOffline() {
          return this.network.onDisconnect();
        }
      }]);

      return ConnectivityService;
    }();

    ConnectivityService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"]
      }];
    };

    ConnectivityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"]])], ConnectivityService);
    /***/
  },

  /***/
  "./src/app/services/network/google-maps.service.ts": function srcAppServicesNetworkGoogleMapsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleMapsService", function () {
      return GoogleMapsService;
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


    var _connectivity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./connectivity.service */
    "./src/app/services/network/connectivity.service.ts"); /// <reference types="@types/googlemaps" />


    var GoogleMapsService = /*#__PURE__*/function () {
      function GoogleMapsService(config, connectivityService) {
        _classCallCheck(this, GoogleMapsService);

        this.config = config;
        this.connectivityService = connectivityService;
        this.mapInitialised = false;
      }

      _createClass(GoogleMapsService, [{
        key: "init",
        value: function init(mapElement, pleaseConnect, myCenter) {
          this.mapElement = mapElement;
          this.pleaseConnect = pleaseConnect;
          this.myCenter = myCenter;
          return this.loadGoogleMaps();
        }
      }, {
        key: "loadGoogleMaps",
        value: function loadGoogleMaps() {
          var _this = this;

          return new Promise(function (resolve) {
            if (typeof google == "undefined" || typeof google.maps == "undefined") {
              console.log("Google maps JavaScript needs to be loaded.");

              _this.disableMap();

              if (_this.connectivityService.isOnline()) {
                window['mapInit'] = function () {
                  _this.initMap().then(function () {
                    resolve(true);
                  });

                  _this.enableMap();
                };

                var script = document.createElement("script");
                script.id = "googleMaps";

                if (_this.config.googleApiKey) {
                  script.src = 'http://maps.google.com/maps/api/js?key=' + _this.config.googleApiKey + '&callback=mapInit&libraries=places';
                } else {
                  script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
                }

                document.body.appendChild(script);
              }
            } else {
              if (_this.connectivityService.isOnline()) {
                _this.initMap();

                _this.enableMap();
              } else {
                _this.disableMap();
              }

              resolve(true);
            }

            _this.addConnectivityListeners();
          });
        }
      }, {
        key: "initMap",
        value: function initMap() {
          var _this2 = this;

          this.mapInitialised = true;
          return new Promise(function (resolve) {
            var styles = [{
              "elementType": "labels.icon",
              "stylers": [{
                "visibility": "off"
              }]
            }, {
              "featureType": "administrative.land_parcel",
              "stylers": [{
                "visibility": "off"
              }]
            }, {
              "featureType": "poi",
              stylers: [{
                visibility: "off"
              }] // "elementType": "labels.text.fill",
              // "stylers": [
              //   {
              //     "color": "#757575"
              //   }
              // ]

            }, {
              "featureType": "poi.park",
              stylers: [{
                visibility: "off"
              }] // "elementType": "geometry",
              // "stylers": [
              //   {
              //     "color": "#181818"
              //   }
              // ]

            }, {
              "featureType": "poi.park",
              stylers: [{
                visibility: "off"
              }] // "elementType": "labels.text.fill",
              // "stylers": [
              //   {
              //     "color": "#616161"
              //   }
              // ]

            }, {
              "featureType": "poi.park",
              stylers: [{
                visibility: "off"
              }] // "elementType": "labels.text.stroke",
              // "stylers": [
              //   {
              //     "color": "#1b1b1b"
              //   }
              // ]

            }];
            var center = new google.maps.LatLng(_this2.myCenter ? Number(_this2.myCenter.latitude) : 39.9334, _this2.myCenter ? Number(_this2.myCenter.longitude) : 32.8597);
            var mapOptions = {
              center: center,
              zoom: 15,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              styles: styles,
              disableDefaultUI: true //,minZoom: 3, maxZoom: 15

            };
            _this2.map = new google.maps.Map(_this2.mapElement, mapOptions);
            resolve(true);
          });
        }
      }, {
        key: "disableMap",
        value: function disableMap() {
          if (this.pleaseConnect) {
            if (this.pleaseConnect != null) this.pleaseConnect.style.display = "block";
          }
        }
      }, {
        key: "enableMap",
        value: function enableMap() {
          if (this.pleaseConnect) {
            if (this.pleaseConnect != null) this.pleaseConnect.style.display = "none";
          }
        }
      }, {
        key: "addConnectivityListeners",
        value: function addConnectivityListeners() {
          var _this3 = this;

          this.connectivityService.watchOnline().subscribe(function () {
            setTimeout(function () {
              if (typeof google == "undefined" || typeof google.maps == "undefined") {
                _this3.loadGoogleMaps();
              } else {
                if (!_this3.mapInitialised) {
                  _this3.initMap();
                }

                _this3.enableMap();
              }
            }, 2000);
          });
          this.connectivityService.watchOffline().subscribe(function () {
            _this3.disableMap();
          });
        }
      }]);

      return GoogleMapsService;
    }();

    GoogleMapsService.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [src_app_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"]]
        }]
      }, {
        type: _connectivity_service__WEBPACK_IMPORTED_MODULE_3__["ConnectivityService"]
      }];
    };

    GoogleMapsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: null
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _connectivity_service__WEBPACK_IMPORTED_MODULE_3__["ConnectivityService"]])], GoogleMapsService);
    /***/
  },

  /***/
  "./src/models/insight-order.models.ts": function srcModelsInsightOrderModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderInsight", function () {
      return OrderInsight;
    });

    var OrderInsight = function OrderInsight() {
      _classCallCheck(this, OrderInsight);

      this.orders_count = 0;
      this.distance_travelled = 0;
      this.earnings = 0;
      this.orders_chart_data = [{
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
    };
    /***/

  },

  /***/
  "./src/models/profile.models.ts": function srcModelsProfileModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Profile", function () {
      return Profile;
    });
    /* harmony import */


    var _user_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./user.models */
    "./src/models/user.models.ts");

    var Profile = function Profile() {
      _classCallCheck(this, Profile);

      this.user = new _user_models__WEBPACK_IMPORTED_MODULE_0__["User"]();
      this.meta = {};
    };
    /***/

  },

  /***/
  "./src/models/user.models.ts": function srcModelsUserModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map