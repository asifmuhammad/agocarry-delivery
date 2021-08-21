function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
  /***/
  "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js": function node_modulesIonicNativeCamera__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DestinationType", function () {
      return DestinationType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EncodingType", function () {
      return EncodingType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediaType", function () {
      return MediaType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PictureSourceType", function () {
      return PictureSourceType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverArrowDirection", function () {
      return PopoverArrowDirection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Direction", function () {
      return Direction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Camera", function () {
      return Camera;
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


    var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/core */
    "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");

    var DestinationType;

    (function (DestinationType) {
      DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
      DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
      DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
    })(DestinationType || (DestinationType = {}));

    var EncodingType;

    (function (EncodingType) {
      EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
      EncodingType[EncodingType["PNG"] = 1] = "PNG";
    })(EncodingType || (EncodingType = {}));

    var MediaType;

    (function (MediaType) {
      MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
      MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
      MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
    })(MediaType || (MediaType = {}));

    var PictureSourceType;

    (function (PictureSourceType) {
      PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
      PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
      PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
    })(PictureSourceType || (PictureSourceType = {}));

    var PopoverArrowDirection;

    (function (PopoverArrowDirection) {
      PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
      PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
      PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
      PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
      PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
    })(PopoverArrowDirection || (PopoverArrowDirection = {}));

    var Direction;

    (function (Direction) {
      Direction[Direction["BACK"] = 0] = "BACK";
      Direction[Direction["FRONT"] = 1] = "FRONT";
    })(Direction || (Direction = {}));

    var Camera = function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Camera, _super);

      function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */


        _this.DestinationType = {
          /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
          DATA_URL: 0,

          /** Return file uri (content://media/external/images/media/2 for Android) */
          FILE_URI: 1,

          /** Return native uri (eg. asset-library://... for iOS) */
          NATIVE_URI: 2
        };
        /**
         * Convenience constant
         */

        _this.EncodingType = {
          /** Return JPEG encoded image */
          JPEG: 0,

          /** Return PNG encoded image */
          PNG: 1
        };
        /**
         * Convenience constant
         */

        _this.MediaType = {
          /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
          PICTURE: 0,

          /** Allow selection of video only, ONLY RETURNS URL */
          VIDEO: 1,

          /** Allow selection from all media types */
          ALLMEDIA: 2
        };
        /**
         * Convenience constant
         */

        _this.PictureSourceType = {
          /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
          PHOTOLIBRARY: 0,

          /** Take picture from camera */
          CAMERA: 1,

          /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
          SAVEDPHOTOALBUM: 2
        };
        /**
         * Convenience constant
         */

        _this.PopoverArrowDirection = {
          ARROW_UP: 1,
          ARROW_DOWN: 2,
          ARROW_LEFT: 4,
          ARROW_RIGHT: 8,
          ARROW_ANY: 15
        };
        /**
         * Convenience constant
         */

        _this.Direction = {
          /** Use the back-facing camera */
          BACK: 0,

          /** Use the front-facing camera */
          FRONT: 1
        };
        return _this;
      }

      Camera.prototype.getPicture = function (options) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getPicture", {
          "callbackOrder": "reverse"
        }, arguments);
      };

      Camera.prototype.cleanup = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "cleanup", {
          "platforms": ["iOS"]
        }, arguments);
      };

      Camera.pluginName = "Camera";
      Camera.plugin = "cordova-plugin-camera";
      Camera.pluginRef = "navigator.camera";
      Camera.repo = "https://github.com/apache/cordova-plugin-camera";
      Camera.platforms = ["Android", "Browser", "iOS", "Windows"];

      Camera.ɵfac = function Camera_Factory(t) {
        return ɵCamera_BaseFactory(t || Camera);
      };

      Camera.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: Camera,
        factory: function factory(t) {
          return Camera.ɵfac(t);
        }
      });

      var ɵCamera_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Camera);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Camera, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], null, null);
      })();

      return Camera;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvY2FtZXJhL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztBQXNGeEUsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtBQUMxQixJQUFDLDZEQUFZLENBQUE7QUFBQyxJQUNiLDZEQUFRLENBQUE7QUFBQyxJQUNULGlFQUFVLENBQUE7QUFDWixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFFRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0FBQ3ZCLElBQUMsK0NBQVEsQ0FBQTtBQUFDLElBQ1QsNkNBQUcsQ0FBQTtBQUNMLENBQUMsRUFIVyxZQUFZLEtBQVosWUFBWSxRQUd2QjtBQUVELE1BQU0sQ0FBTixJQUFZLFNBSVg7QUFKRCxXQUFZLFNBQVM7QUFDcEIsSUFBQywrQ0FBVyxDQUFBO0FBQUMsSUFDWiwyQ0FBSyxDQUFBO0FBQUMsSUFDTixpREFBUSxDQUFBO0FBQ1YsQ0FBQyxFQUpXLFNBQVMsS0FBVCxTQUFTLFFBSXBCO0FBRUQsTUFBTSxDQUFOLElBQVksaUJBSVg7QUFKRCxXQUFZLGlCQUFpQjtBQUM1QixJQUFDLHlFQUFnQixDQUFBO0FBQUMsSUFDakIsNkRBQU0sQ0FBQTtBQUFDLElBQ1AsK0VBQWUsQ0FBQTtBQUNqQixDQUFDLEVBSlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQUk1QjtBQUVELE1BQU0sQ0FBTixJQUFZLHFCQU1YO0FBTkQsV0FBWSxxQkFBcUI7QUFDaEMsSUFBQyx5RUFBWSxDQUFBO0FBQUMsSUFDYiw2RUFBVSxDQUFBO0FBQUMsSUFDWCw2RUFBVSxDQUFBO0FBQUMsSUFDWCwrRUFBVyxDQUFBO0FBQUMsSUFDWiwyRUFBUyxDQUFBO0FBQ1gsQ0FBQyxFQU5XLHFCQUFxQixLQUFyQixxQkFBcUIsUUFNaEM7QUFFRCxNQUFNLENBQU4sSUFBWSxTQUdYO0FBSEQsV0FBWSxTQUFTO0FBQ3BCLElBQUMseUNBQVEsQ0FBQTtBQUFDLElBQ1QsMkNBQUssQ0FBQTtBQUNQLENBQUMsRUFIVyxTQUFTLEtBQVQsU0FBUyxRQUdwQjtBQUNEO0FBSVEsSUFpRG9CLDBCQUFpQjtBQUFDO0FBRTlCO0FBR0ssUUFKbkI7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLHFCQUFlLEdBQUc7QUFDcEIsWUFBSSxnS0FBZ0s7QUFDcEssWUFBSSxRQUFRLEVBQUUsQ0FBQztBQUNmLFlBQUksNEVBQTRFO0FBQ2hGLFlBQUksUUFBUSxFQUFFLENBQUM7QUFDZixZQUFJLDBEQUEwRDtBQUM5RCxZQUFJLFVBQVUsRUFBRSxDQUFDO0FBQ2pCLFNBQUcsQ0FBQztBQUNKLFFBQ0U7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLGtCQUFZLEdBQUc7QUFDakIsWUFBSSxnQ0FBZ0M7QUFDcEMsWUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNYLFlBQUksK0JBQStCO0FBQ25DLFlBQUksR0FBRyxFQUFFLENBQUM7QUFDVixTQUFHLENBQUM7QUFDSixRQUNFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBRSxlQUFTLEdBQUc7QUFDZCxZQUFJLHdHQUF3RztBQUM1RyxZQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ2QsWUFBSSxzREFBc0Q7QUFDMUQsWUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNaLFlBQUksMkNBQTJDO0FBQy9DLFlBQUksUUFBUSxFQUFFLENBQUM7QUFDZixTQUFHLENBQUM7QUFDSixRQUNFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBRSx1QkFBaUIsR0FBRztBQUN0QixZQUFJLDJFQUEyRTtBQUMvRSxZQUFJLFlBQVksRUFBRSxDQUFDO0FBQ25CLFlBQUksK0JBQStCO0FBQ25DLFlBQUksTUFBTSxFQUFFLENBQUM7QUFDYixZQUFJLDhFQUE4RTtBQUNsRixZQUFJLGVBQWUsRUFBRSxDQUFDO0FBQ3RCLFNBQUcsQ0FBQztBQUNKLFFBQ0U7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLDJCQUFxQixHQUFHO0FBQzFCLFlBQUksUUFBUSxFQUFFLENBQUM7QUFDZixZQUFJLFVBQVUsRUFBRSxDQUFDO0FBQ2pCLFlBQUksVUFBVSxFQUFFLENBQUM7QUFDakIsWUFBSSxXQUFXLEVBQUUsQ0FBQztBQUNsQixZQUFJLFNBQVMsRUFBRSxFQUFFO0FBQ2pCLFNBQUcsQ0FBQztBQUNKLFFBQ0U7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLGVBQVMsR0FBRztBQUNkLFlBQUksaUNBQWlDO0FBQ3JDLFlBQUksSUFBSSxFQUFFLENBQUM7QUFDWCxZQUFJLGtDQUFrQztBQUN0QyxZQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osU0FBRyxDQUFDO0FBQ0o7QUFFZTtBQUFNLElBT25CLDJCQUFVLGFBQUMsT0FBdUI7QUFLUyxJQU8zQyx3QkFBTztBQUk0QztBQUFrQztBQUE2QztBQUEyQztBQUFxRTswQ0E3Rm5QLFVBQVU7Ozs7OzBCQUNMO0FBQUMsaUJBL0tQO0FBQUUsRUErSzBCLGlCQUFpQjtBQUM1QyxTQURZLE1BQU07QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYU9wdGlvbnMge1xuICAvKiogUGljdHVyZSBxdWFsaXR5IGluIHJhbmdlIDAtMTAwLiBEZWZhdWx0IGlzIDUwICovXG4gIHF1YWxpdHk/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5EZXN0aW5hdGlvblR5cGUuIERlZmF1bHQgaXMgRklMRV9VUkkuXG4gICAqICAgICAgREFUQV9VUkwgOiAwLCAgIFJldHVybiBpbWFnZSBhcyBiYXNlNjQtZW5jb2RlZCBzdHJpbmcgKERBVEFfVVJMIGNhbiBiZSB2ZXJ5IG1lbW9yeSBpbnRlbnNpdmUgYW5kIGNhdXNlIGFwcCBjcmFzaGVzIG9yIG91dCBvZiBtZW1vcnkgZXJyb3JzLiBVc2UgRklMRV9VUkkgb3IgTkFUSVZFX1VSSSBpZiBwb3NzaWJsZSksXG4gICAqICAgICAgRklMRV9VUkkgOiAxLCAgIFJldHVybiBpbWFnZSBmaWxlIFVSSSxcbiAgICogICAgICBOQVRJVkVfVVJJIDogMiAgUmV0dXJuIGltYWdlIG5hdGl2ZSBVUklcbiAgICogICAgICAgICAgKGUuZy4sIGFzc2V0cy1saWJyYXJ5Oi8vIG9uIGlPUyBvciBjb250ZW50Oi8vIG9uIEFuZHJvaWQpXG4gICAqL1xuICBkZXN0aW5hdGlvblR5cGU/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBTZXQgdGhlIHNvdXJjZSBvZiB0aGUgcGljdHVyZS5cbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuUGljdHVyZVNvdXJjZVR5cGUuIERlZmF1bHQgaXMgQ0FNRVJBLlxuICAgKiAgICAgIFBIT1RPTElCUkFSWSA6IDAsXG4gICAqICAgICAgQ0FNRVJBIDogMSxcbiAgICogICAgICBTQVZFRFBIT1RPQUxCVU0gOiAyXG4gICAqL1xuICBzb3VyY2VUeXBlPzogbnVtYmVyO1xuICAvKiogQWxsb3cgc2ltcGxlIGVkaXRpbmcgb2YgaW1hZ2UgYmVmb3JlIHNlbGVjdGlvbi4gKi9cbiAgYWxsb3dFZGl0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgcmV0dXJuZWQgaW1hZ2UgZmlsZSdzIGVuY29kaW5nLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5FbmNvZGluZ1R5cGUuIERlZmF1bHQgaXMgSlBFR1xuICAgKiAgICAgIEpQRUcgOiAwICAgIFJldHVybiBKUEVHIGVuY29kZWQgaW1hZ2VcbiAgICogICAgICBQTkcgOiAxICAgICBSZXR1cm4gUE5HIGVuY29kZWQgaW1hZ2VcbiAgICovXG4gIGVuY29kaW5nVHlwZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFdpZHRoIGluIHBpeGVscyB0byBzY2FsZSBpbWFnZS4gTXVzdCBiZSB1c2VkIHdpdGggdGFyZ2V0SGVpZ2h0LlxuICAgKiBBc3BlY3QgcmF0aW8gcmVtYWlucyBjb25zdGFudC5cbiAgICovXG4gIHRhcmdldFdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogSGVpZ2h0IGluIHBpeGVscyB0byBzY2FsZSBpbWFnZS4gTXVzdCBiZSB1c2VkIHdpdGggdGFyZ2V0V2lkdGguXG4gICAqIEFzcGVjdCByYXRpbyByZW1haW5zIGNvbnN0YW50LlxuICAgKi9cbiAgdGFyZ2V0SGVpZ2h0PzogbnVtYmVyO1xuICAvKipcbiAgICogU2V0IHRoZSB0eXBlIG9mIG1lZGlhIHRvIHNlbGVjdCBmcm9tLiBPbmx5IHdvcmtzIHdoZW4gUGljdHVyZVNvdXJjZVR5cGVcbiAgICogaXMgUEhPVE9MSUJSQVJZIG9yIFNBVkVEUEhPVE9BTEJVTS4gRGVmaW5lZCBpbiBDYW1lcmEuTWVkaWFUeXBlXG4gICAqICAgICAgUElDVFVSRTogMCAgICAgIGFsbG93IHNlbGVjdGlvbiBvZiBzdGlsbCBwaWN0dXJlcyBvbmx5LiBERUZBVUxULlxuICAgKiAgICAgICAgICBXaWxsIHJldHVybiBmb3JtYXQgc3BlY2lmaWVkIHZpYSBEZXN0aW5hdGlvblR5cGVcbiAgICogICAgICBWSURFTzogMSAgICAgICAgYWxsb3cgc2VsZWN0aW9uIG9mIHZpZGVvIG9ubHksIFdJTEwgQUxXQVlTIFJFVFVSTiBGSUxFX1VSSVxuICAgKiAgICAgIEFMTE1FRElBIDogMiAgICBhbGxvdyBzZWxlY3Rpb24gZnJvbSBhbGwgbWVkaWEgdHlwZXNcbiAgICovXG4gIG1lZGlhVHlwZT86IG51bWJlcjtcbiAgLyoqIFJvdGF0ZSB0aGUgaW1hZ2UgdG8gY29ycmVjdCBmb3IgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBkZXZpY2UgZHVyaW5nIGNhcHR1cmUuICovXG4gIGNvcnJlY3RPcmllbnRhdGlvbj86IGJvb2xlYW47XG4gIC8qKiBTYXZlIHRoZSBpbWFnZSB0byB0aGUgcGhvdG8gYWxidW0gb24gdGhlIGRldmljZSBhZnRlciBjYXB0dXJlLiAqL1xuICBzYXZlVG9QaG90b0FsYnVtPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgY2FtZXJhIHRvIHVzZSAoZnJvbnQtIG9yIGJhY2stZmFjaW5nKS5cbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuRGlyZWN0aW9uLiBEZWZhdWx0IGlzIEJBQ0suXG4gICAqICAgICAgQkFDSzogMFxuICAgKiAgICAgIEZST05UOiAxXG4gICAqL1xuICBjYW1lcmFEaXJlY3Rpb24/OiBudW1iZXI7XG4gIC8qKiBpT1Mtb25seSBvcHRpb25zIHRoYXQgc3BlY2lmeSBwb3BvdmVyIGxvY2F0aW9uIGluIGlQYWQuIERlZmluZWQgaW4gQ2FtZXJhUG9wb3Zlck9wdGlvbnMuICovXG4gIHBvcG92ZXJPcHRpb25zPzogQ2FtZXJhUG9wb3Zlck9wdGlvbnM7XG59XG5cbi8qKlxuICogaU9TLW9ubHkgcGFyYW1ldGVycyB0aGF0IHNwZWNpZnkgdGhlIGFuY2hvciBlbGVtZW50IGxvY2F0aW9uIGFuZCBhcnJvdyBkaXJlY3Rpb25cbiAqIG9mIHRoZSBwb3BvdmVyIHdoZW4gc2VsZWN0aW5nIGltYWdlcyBmcm9tIGFuIGlQYWQncyBsaWJyYXJ5IG9yIGFsYnVtLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVBvcG92ZXJPcHRpb25zIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogRGlyZWN0aW9uIHRoZSBhcnJvdyBvbiB0aGUgcG9wb3ZlciBzaG91bGQgcG9pbnQuIERlZmluZWQgaW4gQ2FtZXJhLlBvcG92ZXJBcnJvd0RpcmVjdGlvblxuICAgKiBNYXRjaGVzIGlPUyBVSVBvcG92ZXJBcnJvd0RpcmVjdGlvbiBjb25zdGFudHMuXG4gICAqICAgICAgQVJST1dfVVAgOiAxLFxuICAgKiAgICAgIEFSUk9XX0RPV04gOiAyLFxuICAgKiAgICAgIEFSUk9XX0xFRlQgOiA0LFxuICAgKiAgICAgIEFSUk9XX1JJR0hUIDogOCxcbiAgICogICAgICBBUlJPV19BTlkgOiAxNVxuICAgKi9cbiAgYXJyb3dEaXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGVudW0gRGVzdGluYXRpb25UeXBlIHtcbiAgREFUQV9VUkwgPSAwLFxuICBGSUxFX1VSTCxcbiAgTkFUSVZFX1VSSSxcbn1cblxuZXhwb3J0IGVudW0gRW5jb2RpbmdUeXBlIHtcbiAgSlBFRyA9IDAsXG4gIFBORyxcbn1cblxuZXhwb3J0IGVudW0gTWVkaWFUeXBlIHtcbiAgUElDVFVSRSA9IDAsXG4gIFZJREVPLFxuICBBTExNRURJQSxcbn1cblxuZXhwb3J0IGVudW0gUGljdHVyZVNvdXJjZVR5cGUge1xuICBQSE9UT0xJQlJBUlkgPSAwLFxuICBDQU1FUkEsXG4gIFNBVkVEUEhPVE9BTEJVTSxcbn1cblxuZXhwb3J0IGVudW0gUG9wb3ZlckFycm93RGlyZWN0aW9uIHtcbiAgQVJST1dfVVAgPSAxLFxuICBBUlJPV19ET1dOLFxuICBBUlJPV19MRUZULFxuICBBUlJPV19SSUdIVCxcbiAgQVJST1dfQU5ZLFxufVxuXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xuICBCQUNLID0gMCxcbiAgRlJPTlQsXG59XG5cbi8qKlxuICogQG5hbWUgQ2FtZXJhXG4gKiBAcHJlbWllciBjYW1lcmFcbiAqIEBkZXNjcmlwdGlvblxuICogVGFrZSBhIHBob3RvIG9yIGNhcHR1cmUgdmlkZW8uXG4gKlxuICogUmVxdWlyZXMgdGhlIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tY2FtZXJhYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0NvcmRvdmEgQ2FtZXJhIFBsdWdpbiBEb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYSkuXG4gKlxuICogW1dhcm5pbmddIFNpbmNlIElPUyAxMCB0aGUgY2FtZXJhIHJlcXVpcmVzIHBlcm1pc3Npb25zIHRvIGJlIHBsYWNlZCBpbiB5b3VyIGNvbmZpZy54bWwgYWRkXG4gKiBgYGB4bWxcbiAqIDxjb25maWctZmlsZSBwYXJlbnQ9XCJOU0NhbWVyYVVzYWdlRGVzY3JpcHRpb25cIiBwbGF0Zm9ybT1cImlvc1wiIHRhcmdldD1cIiotSW5mby5wbGlzdFwiPlxuICogIDxzdHJpbmc+WW91IGNhbiB0YWtlIHBob3Rvczwvc3RyaW5nPlxuICogPC9jb25maWctZmlsZT5cbiAqIGBgYFxuICogaW5zaWRlIG9mIHRoZSA8cGxhdGZvcm0gbmFtZT0naW9zPiBzZWN0aW9uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYW1lcmEsIENhbWVyYU9wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbWVyYS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FtZXJhOiBDYW1lcmEpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiBjb25zdCBvcHRpb25zOiBDYW1lcmFPcHRpb25zID0ge1xuICogICBxdWFsaXR5OiAxMDAsXG4gKiAgIGRlc3RpbmF0aW9uVHlwZTogdGhpcy5jYW1lcmEuRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJLFxuICogICBlbmNvZGluZ1R5cGU6IHRoaXMuY2FtZXJhLkVuY29kaW5nVHlwZS5KUEVHLFxuICogICBtZWRpYVR5cGU6IHRoaXMuY2FtZXJhLk1lZGlhVHlwZS5QSUNUVVJFXG4gKiB9XG4gKlxuICogdGhpcy5jYW1lcmEuZ2V0UGljdHVyZShvcHRpb25zKS50aGVuKChpbWFnZURhdGEpID0+IHtcbiAqICAvLyBpbWFnZURhdGEgaXMgZWl0aGVyIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nIG9yIGEgZmlsZSBVUklcbiAqICAvLyBJZiBpdCdzIGJhc2U2NCAoREFUQV9VUkwpOlxuICogIGxldCBiYXNlNjRJbWFnZSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LCcgKyBpbWFnZURhdGE7XG4gKiB9LCAoZXJyKSA9PiB7XG4gKiAgLy8gSGFuZGxlIGVycm9yXG4gKiB9KTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIENhbWVyYU9wdGlvbnNcbiAqIENhbWVyYVBvcG92ZXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2FtZXJhJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY2FtZXJhJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmNhbWVyYScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FtZXJhIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIGRlc3RpbmF0aW9uIHR5cGVzXG4gICAqL1xuICBEZXN0aW5hdGlvblR5cGUgPSB7XG4gICAgLyoqIFJldHVybiBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuIERBVEFfVVJMIGNhbiBiZSB2ZXJ5IG1lbW9yeSBpbnRlbnNpdmUgYW5kIGNhdXNlIGFwcCBjcmFzaGVzIG9yIG91dCBvZiBtZW1vcnkgZXJyb3JzLiBVc2UgRklMRV9VUkkgb3IgTkFUSVZFX1VSSSBpZiBwb3NzaWJsZSAqL1xuICAgIERBVEFfVVJMOiAwLFxuICAgIC8qKiBSZXR1cm4gZmlsZSB1cmkgKGNvbnRlbnQ6Ly9tZWRpYS9leHRlcm5hbC9pbWFnZXMvbWVkaWEvMiBmb3IgQW5kcm9pZCkgKi9cbiAgICBGSUxFX1VSSTogMSxcbiAgICAvKiogUmV0dXJuIG5hdGl2ZSB1cmkgKGVnLiBhc3NldC1saWJyYXJ5Oi8vLi4uIGZvciBpT1MpICovXG4gICAgTkFUSVZFX1VSSTogMixcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIEVuY29kaW5nVHlwZSA9IHtcbiAgICAvKiogUmV0dXJuIEpQRUcgZW5jb2RlZCBpbWFnZSAqL1xuICAgIEpQRUc6IDAsXG4gICAgLyoqIFJldHVybiBQTkcgZW5jb2RlZCBpbWFnZSAqL1xuICAgIFBORzogMSxcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIE1lZGlhVHlwZSA9IHtcbiAgICAvKiogQWxsb3cgc2VsZWN0aW9uIG9mIHN0aWxsIHBpY3R1cmVzIG9ubHkuIERFRkFVTFQuIFdpbGwgcmV0dXJuIGZvcm1hdCBzcGVjaWZpZWQgdmlhIERlc3RpbmF0aW9uVHlwZSAqL1xuICAgIFBJQ1RVUkU6IDAsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBvZiB2aWRlbyBvbmx5LCBPTkxZIFJFVFVSTlMgVVJMICovXG4gICAgVklERU86IDEsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBmcm9tIGFsbCBtZWRpYSB0eXBlcyAqL1xuICAgIEFMTE1FRElBOiAyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgUGljdHVyZVNvdXJjZVR5cGUgPSB7XG4gICAgLyoqIENob29zZSBpbWFnZSBmcm9tIHBpY3R1cmUgbGlicmFyeSAoc2FtZSBhcyBQSE9UT0xJQlJBUlkgZm9yIEFuZHJvaWQpICovXG4gICAgUEhPVE9MSUJSQVJZOiAwLFxuICAgIC8qKiBUYWtlIHBpY3R1cmUgZnJvbSBjYW1lcmEgKi9cbiAgICBDQU1FUkE6IDEsXG4gICAgLyoqIENob29zZSBpbWFnZSBmcm9tIHBpY3R1cmUgbGlicmFyeSAoc2FtZSBhcyBTQVZFRFBIT1RPQUxCVU0gZm9yIEFuZHJvaWQpICovXG4gICAgU0FWRURQSE9UT0FMQlVNOiAyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgUG9wb3ZlckFycm93RGlyZWN0aW9uID0ge1xuICAgIEFSUk9XX1VQOiAxLFxuICAgIEFSUk9XX0RPV046IDIsXG4gICAgQVJST1dfTEVGVDogNCxcbiAgICBBUlJPV19SSUdIVDogOCxcbiAgICBBUlJPV19BTlk6IDE1LFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgRGlyZWN0aW9uID0ge1xuICAgIC8qKiBVc2UgdGhlIGJhY2stZmFjaW5nIGNhbWVyYSAqL1xuICAgIEJBQ0s6IDAsXG4gICAgLyoqIFVzZSB0aGUgZnJvbnQtZmFjaW5nIGNhbWVyYSAqL1xuICAgIEZST05UOiAxLFxuICB9O1xuXG4gIC8qKlxuICAgKiBUYWtlIGEgcGljdHVyZSBvciB2aWRlbywgb3IgbG9hZCBvbmUgZnJvbSB0aGUgbGlicmFyeS5cbiAgICogQHBhcmFtIHtDYW1lcmFPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyB0aGF0IHlvdSB3YW50IHRvIHBhc3MgdG8gdGhlIGNhbWVyYS4gRW5jb2RpbmcgdHlwZSwgcXVhbGl0eSwgZXRjLiBQbGF0Zm9ybS1zcGVjaWZpYyBxdWlya3MgYXJlIGRlc2NyaWJlZCBpbiB0aGUgW0NvcmRvdmEgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tY2FtZXJhI2NhbWVyYW9wdGlvbnMtZXJyYXRhLSkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBCYXNlNjQgZW5jb2Rpbmcgb2YgdGhlIGltYWdlIGRhdGEsIG9yIHRoZSBpbWFnZSBmaWxlIFVSSSwgZGVwZW5kaW5nIG9uIGNhbWVyYU9wdGlvbnMsIG90aGVyd2lzZSByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBnZXRQaWN0dXJlKG9wdGlvbnM/OiBDYW1lcmFPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGludGVybWVkaWF0ZSBpbWFnZSBmaWxlcyB0aGF0IGFyZSBrZXB0IGluIHRlbXBvcmFyeSBzdG9yYWdlIGFmdGVyIGNhbGxpbmcgY2FtZXJhLmdldFBpY3R1cmUuXG4gICAqIEFwcGxpZXMgb25seSB3aGVuIHRoZSB2YWx1ZSBvZiBDYW1lcmEuc291cmNlVHlwZSBlcXVhbHMgQ2FtZXJhLlBpY3R1cmVTb3VyY2VUeXBlLkNBTUVSQSBhbmQgdGhlIENhbWVyYS5kZXN0aW5hdGlvblR5cGUgZXF1YWxzIENhbWVyYS5EZXN0aW5hdGlvblR5cGUuRklMRV9VUkkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxuICB9KVxuICBjbGVhbnVwKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

    /***/

  },

  /***/
  "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js": function node_modulesIonicNativeCrop__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Crop", function () {
      return Crop;
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


    var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/core */
    "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");

    var Crop = function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Crop, _super);

      function Crop() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      Crop.prototype.crop = function (pathToImage, options) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "crop", {
          "callbackOrder": "reverse"
        }, arguments);
      };

      Crop.pluginName = "Crop";
      Crop.plugin = "cordova-plugin-crop";
      Crop.pluginRef = "plugins";
      Crop.repo = "https://github.com/jeduan/cordova-plugin-crop";
      Crop.platforms = ["Android", "iOS"];

      Crop.ɵfac = function Crop_Factory(t) {
        return ɵCrop_BaseFactory(t || Crop);
      };

      Crop.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: Crop,
        factory: function factory(t) {
          return Crop.ɵfac(t);
        }
      });

      var ɵCrop_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Crop);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Crop, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], null, null);
      })();

      return Crop;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvY3JvcC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7QUFDeEU7QUFFYyxJQWlDWSx3QkFBaUI7QUFBQztBQUU5QjtBQUVvQjtBQUM5QixJQUtGLG1CQUFJLGFBQUMsV0FBbUIsRUFBRSxPQUFxQjtBQUlSO0FBQThCO0FBQXlDO0FBQWdDO0FBQWlFO3dDQWZoTixVQUFVOzs7OzswQkFDTDtBQUFDLGVBckNQO0FBQUUsRUFxQ3dCLGlCQUFpQjtBQUMxQyxTQURZLElBQUk7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENyb3BPcHRpb25zIHtcbiAgcXVhbGl0eT86IG51bWJlcjtcbiAgdGFyZ2V0SGVpZ2h0PzogbnVtYmVyO1xuICB0YXJnZXRXaWR0aD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAbmFtZSBDcm9wXG4gKiBAZGVzY3JpcHRpb24gQ3JvcHMgaW1hZ2VzXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENyb3AgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2Nyb3Avbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNyb3A6IENyb3ApIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuY3JvcC5jcm9wKCdwYXRoL3RvL2ltYWdlLmpwZycsIHtxdWFsaXR5OiA3NX0pXG4gKiAgIC50aGVuKFxuICogICAgIG5ld0ltYWdlID0+IGNvbnNvbGUubG9nKCduZXcgaW1hZ2UgcGF0aCBpczogJyArIG5ld0ltYWdlKSxcbiAqICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBjcm9wcGluZyBpbWFnZScsIGVycm9yKVxuICogICApO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQ3JvcE9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDcm9wJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY3JvcCcsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2plZHVhbi9jb3Jkb3ZhLXBsdWdpbi1jcm9wJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENyb3AgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcm9wcyBhbiBpbWFnZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFRvSW1hZ2VcbiAgICogQHBhcmFtIHtDcm9wT3B0aW9uc30gW29wdGlvbnNdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbmV3IGltYWdlIHBhdGgsIG9yIHJlamVjdHMgaWYgZmFpbGVkIHRvIGNyb3AuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBjcm9wKHBhdGhUb0ltYWdlOiBzdHJpbmcsIG9wdGlvbnM/OiBDcm9wT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

    /***/

  },

  /***/
  "./node_modules/@ionic-native/file-picker/__ivy_ngcc__/ngx/index.js": function node_modulesIonicNativeFilePicker__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IOSFilePicker", function () {
      return IOSFilePicker;
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


    var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/core */
    "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");

    var IOSFilePicker = function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(IOSFilePicker, _super);

      function IOSFilePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      IOSFilePicker.prototype.pickFile = function (utis, position) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "pickFile", {
          "callbackOrder": "reverse"
        }, arguments);
      };

      IOSFilePicker.pluginName = "iOS File Picker";
      IOSFilePicker.plugin = "cordova-plugin-filepicker";
      IOSFilePicker.pluginRef = "FilePicker";
      IOSFilePicker.repo = "https://github.com/jcesarmobile/FilePicker-Phonegap-iOS-Plugin";
      IOSFilePicker.platforms = ["iOS"];

      IOSFilePicker.ɵfac = function IOSFilePicker_Factory(t) {
        return ɵIOSFilePicker_BaseFactory(t || IOSFilePicker);
      };

      IOSFilePicker.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: IOSFilePicker,
        factory: function factory(t) {
          return IOSFilePicker.ɵfac(t);
        }
      });

      var ɵIOSFilePicker_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](IOSFilePicker);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IOSFilePicker, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], null, null);
      })();

      return IOSFilePicker;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZmlsZS1waWNrZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0FBQ3hFO0FBR0EsSUFtQ21DLGlDQUFpQjtBQUFDO0FBRy9DO0FBQ2lDO0FBQU0sSUFNM0MsZ0NBQVEsYUFBQyxJQUF3QixFQUFFLFFBQWdDO0FBSXhCO0FBQWtEO0FBQXdEO0FBQTRDO0FBQTJGO2lEQWY3UixVQUFVOzs7OzswQkFDTDtBQUFDLHdCQXhDUDtBQUFFLEVBd0NpQyxpQkFBaUI7QUFDbkQsU0FEWSxhQUFhO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJT1NGaWxlUGlja2VyUG9zaXRpb24ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgaU9TIEZpbGUgUGlja2VyXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBPcGVucyB0aGUgZmlsZSBwaWNrZXIgb24gaU9TIGZvciB0aGUgdXNlciB0byBzZWxlY3QgYSBmaWxlLCByZXR1cm5zIGEgZmlsZSBVUkkuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJT1NGaWxlUGlja2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlLXBpY2tlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZVBpY2tlcjogSU9TRmlsZVBpY2tlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5maWxlUGlja2VyLnBpY2tGaWxlKClcbiAqICAgLnRoZW4odXJpID0+IGNvbnNvbGUubG9nKHVyaSkpXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yJywgZXJyKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogSU9TRmlsZVBpY2tlclBvc2l0aW9uXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnaU9TIEZpbGUgUGlja2VyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlsZXBpY2tlcicsXG4gIHBsdWdpblJlZjogJ0ZpbGVQaWNrZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2pjZXNhcm1vYmlsZS9GaWxlUGlja2VyLVBob25lZ2FwLWlPUy1QbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIElPU0ZpbGVQaWNrZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBPcGVuIGEgZmlsZVxuICAgKiBAcGFyYW1zIHtzdHJpbmcgfCBzdHJpbmdbXX0gW3V0aXNdXG4gICAqIEBwYXJhbXMge0lPU0ZpbGVQaWNrZXJQb3NpdGlvbn0gW3Bvc2l0aW9uXSBTZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSByZWN0YW5nbGUgd2hlcmUgdGhlIGZpbGUgcGlja2VyIHNob3VsZCBzaG93IHVwLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgcGlja0ZpbGUodXRpcz86IHN0cmluZyB8IHN0cmluZ1tdLCBwb3NpdGlvbj86IElPU0ZpbGVQaWNrZXJQb3NpdGlvbik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html": function node_modulesRawLoaderDistCjsJsSrcAppProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <!-- <ion-title>{{'edit_profile' | translate}}</ion-title> -->\n        <ion-title>\n            {{'edit_profile' | translate}}\n            <!--\n\t\t\t<div class=\"d-flex\">\n\t\t\t\t<span> {{'edit_profile' | translate}} </span>\n\t\t\t\t<ion-icon *ngIf=\"fresh_profile\" class=\"zmdi zmdi-sign-in end\" (click)=\"exitApp()\"></ion-icon>\n\t\t\t</div>\n-->\n        </ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg_color\">\n    <div class=\"banner\">\n        <div class=\"profile_details d-flex\">\n            <div class=\"img_box center_img\">\n                <img *ngIf=\"profile.user && profile.user.image_url\" [src]=\"profile.user.image_url\" class=\"crop_img\">\n                <img *ngIf=\"!profile.user || !profile.user.image_url\" src=\"assets/images/empty_dp.png\" class=\"crop_img\">\n            </div>\n            <div class=\"text_box\">\n                <h3 (click)=\"pickImageUser()\">\n                    <ion-icon class=\"zmdi zmdi-camera\"></ion-icon>\n                    {{'change_profile_image' | translate}}\n                </h3>\n            </div>\n        </div>\n\n        <div class=\"form\">\n            <ion-list lines=\"none\">\n                <ion-item lines=\"none\">\n                    <div class=\"item_inner d-flex\">\n                        <!--                        <ion-label mode=\"md\" position=\"stacked\">{{'full_name' | translate}}</ion-label>-->\n                        <ion-icon class=\"zmdi zmdi-account ion-text-start\"></ion-icon>\n                        <ion-input placeholder=\"{{'full_name' | translate}}\" mode=\"md\" type=\"text\"\n                            [(ngModel)]=\"profile.user.name\"></ion-input>\n                    </div>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                    <div class=\"item_inner d-flex\">\n                        <!--                        <ion-label mode=\"md\" position=\"stacked\">{{'gender' | translate}}</ion-label>-->\n                        <ion-icon class=\"zmdi zmdi-male ion-text-start\"> </ion-icon>\n                        <ion-select placeholder=\"{{'gender' | translate}}\" interface=\"popover\"\n                            [(ngModel)]=\"profile.meta.gender\">\n                            <ion-select-option value=\"male\">{{'male' | translate}}</ion-select-option>\n                            <ion-select-option value=\"female\">{{'female' | translate}}</ion-select-option>\n                            <ion-select-option value=\"other\">{{'other' | translate}}</ion-select-option>\n                        </ion-select>\n                    </div>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                    <div class=\"item_inner d-flex\">\n                        <!--                        <ion-label mode=\"md\" position=\"stacked\">{{'phone_number' | translate}}</ion-label>-->\n                        <ion-icon class=\"zmdi zmdi-smartphone-iphone ion-text-start\"> </ion-icon>\n                        <ion-input placeholder=\"{{'phone_number' | translate}}\" mode=\"md\" disabled=\"true\" readonly\n                            [(ngModel)]=\"profile.user.mobile_number\"></ion-input>\n                    </div>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                    <div class=\"item_inner d-flex\">\n                        <!--                        <ion-label mode=\"md\" position=\"stacked\">{{'email_address' | translate}}</ion-label>-->\n                        <ion-icon class=\"zmdi zmdi-email ion-text-start\"> </ion-icon>\n                        <ion-input placeholder=\"{{'email_address' | translate}}\" mode=\"md\" disabled=\"true\" readonly\n                            [(ngModel)]=\"profile.user.email\"></ion-input>\n                    </div>\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n\n    <div class=\"form documentation\">\n        <h2>{{'documentation' | translate}}</h2>\n        <ion-list lines=\"none\">\n            <ion-item [ngClass]=\"(profile.meta.document_verified) ? 'active' : ''\">\n                <div class=\"item_inner d-flex\">\n                    <ion-icon\n                        [ngClass]=\"(profile.meta.document_verified) ? 'zmdi zmdi-shield-check ion-text-start' : 'zmdi zmdi-assignment-alert ion-text-start'\">\n                    </ion-icon>\n                    <div class=\"text_box\">\n                        <h3>{{'goverment_id' | translate}}</h3>\n                        <h4 class=\"d-flex\" (click)=\"pickImageProfile()\">\n                            <span\n                                class=\"id_details\">{{ (profile.meta.document_url && profile.meta.document_url.length?'uploaded':'not_uploaded_yet') | translate}}</span>\n                            <span\n                                class=\"end ion-text-end\">{{ (profile.meta.document_url && profile.meta.document_url.length?'reupload':'upload') | translate}}</span>\n                        </h4>\n                    </div>\n                </div>\n            </ion-item>\n\n            <!-- <ion-item>\n                <div class=\"item_inner d-flex\">\n                    <ion-icon class=\"zmdi zmdi-assignment-alert ion-text-start\"></ion-icon>\n                    <div class=\"text_box\">\n                        <h3>{{'goverment_id' | translate}}</h3>\n                        <h4 class=\"d-flex\">\n                            <span class=\"id_details\">{{'not_uploaded_yet' | translate}}</span>\n                            <span class=\"end ion-text-end\">{{'upload' | translate}}</span>\n                        </h4>\n                    </div>\n                </div>\n            </ion-item> -->\n        </ion-list>\n    </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n    <ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"update()\">\n        {{'update_info' | translate}}\n    </ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/profile/profile-routing.module.ts": function srcAppProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];

    var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    };

    ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/profile/profile.module.ts": function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/profile/profile.page.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/file-picker/ngx */
    "./node_modules/@ionic-native/file-picker/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProfilePageRoutingModule"]],
      providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_9__["IOSFilePicker"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__["Crop"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/profile/profile.page.scss": function srcAppProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".banner {\n  background: var(--white);\n  background: var(--white);\n  padding: 10px 18px 18px 18px;\n  margin-bottom: 8px;\n}\n.banner .profile_details {\n  width: 100%;\n  align-items: flex-end;\n  padding-bottom: 40px;\n}\n.banner .profile_details .img_box {\n  width: 100%;\n  max-width: 160px;\n  min-width: 160px;\n  margin-right: 20px;\n  height: 160px;\n}\n.banner .profile_details .text_box h3 {\n  margin: 0;\n  color: var(--primary);\n  font-size: 0.94rem;\n  font-weight: 400;\n  padding-bottom: 10px;\n}\n.banner .profile_details .text_box h3 ion-icon {\n  display: block;\n  background: var(--primary);\n  color: var(--white);\n  border-radius: 50%;\n  min-width: 28px;\n  text-align: center;\n  height: 28px;\n  line-height: 28px;\n  margin-bottom: 15px;\n}\n.form {\n  background: var(--white);\n  width: 100%;\n  padding: 0;\n}\n.form ion-list ion-item:last-child {\n  margin-bottom: 0 !important;\n}\n.form.documentation {\n  background: var(--white);\n  padding-bottom: 21px;\n}\n.form.documentation h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.94rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  padding: 19px;\n}\n.form.documentation ion-list ion-item {\n  background: none !important;\n  border-radius: 0 !important;\n  padding: 0 19px;\n}\n.form.documentation ion-list ion-item ion-icon {\n  min-width: 27px;\n  font-size: 1.1rem;\n  line-height: normal;\n}\n.form.documentation ion-list ion-item .item_inner {\n  align-items: flex-start;\n}\n.form.documentation ion-list ion-item .text_box {\n  width: 100%;\n}\n.form.documentation ion-list ion-item .text_box h3 {\n  margin: 0;\n  text-transform: uppercase;\n  font-size: 0.75rem !important;\n  color: var(--text-light) !important;\n  font-weight: 500;\n}\n.form.documentation ion-list ion-item .text_box h4 {\n  margin: 0;\n  font-size: 0.94rem !important;\n  font-weight: 400 !important;\n  margin-top: 5px;\n  color: var(--text-black);\n}\n.form.documentation ion-list ion-item .text_box h4 span.end {\n  font-weight: 500;\n  color: var(--primary);\n  text-transform: uppercase;\n  font-size: 0.9rem;\n}\n.form.documentation ion-list ion-item.active .text_box h4 {\n  color: var(--text-black);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9GOlxcZml2ZXJcXEJlcm5hcmRcXEFnb2NhcnJ5XFxhZ29jYXJyeS1kZWxpdmVyeS9zcmNcXGFwcFxccHJvZmlsZVxccHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQ0NSO0FEQ1E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0NaO0FER1k7RUFDSSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNEaEI7QURHZ0I7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNEcEI7QURTQTtFQUNJLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNOSjtBRFVZO0VBQ0ksMkJBQUE7QUNSaEI7QURhSTtFQUNJLHdCQUFBO0VBQ0Esb0JBQUE7QUNYUjtBRGFRO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ1haO0FEZ0JZO0VBQ0ksMkJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUNkaEI7QURnQmdCO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNkcEI7QURpQmdCO0VBQ0ksdUJBQUE7QUNmcEI7QURrQmdCO0VBQ0ksV0FBQTtBQ2hCcEI7QURrQm9CO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FDaEJ4QjtBRG1Cb0I7RUFDSSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQ2pCeEI7QURvQjRCO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNsQmhDO0FEeUJvQjtFQUNJLHdCQUFBO0FDdkJ4QiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgIHBhZGRpbmc6IDEwcHggMThweCAxOHB4IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgLnByb2ZpbGVfZGV0YWlscyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuXG4gICAgICAgIC5pbWdfYm94IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNjBweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTYwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHRfYm94IHtcbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NHJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyOHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5mb3JtIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcblxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmRvY3VtZW50YXRpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMXB4O1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOTRyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAxOXB4O1xuXG4gICAgICAgIH1cblxuICAgICAgICBpb24tbGlzdCB7XG4gICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE5cHg7XG5cbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjdweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLml0ZW1faW5uZXIge1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGV4dF9ib3gge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC45NHJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLmVuZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAudGV4dF9ib3ggaDQge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi5iYW5uZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgcGFkZGluZzogMTBweCAxOHB4IDE4cHggMThweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLmJhbm5lciAucHJvZmlsZV9kZXRhaWxzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG4uYmFubmVyIC5wcm9maWxlX2RldGFpbHMgLmltZ19ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxNjBweDtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBoZWlnaHQ6IDE2MHB4O1xufVxuLmJhbm5lciAucHJvZmlsZV9kZXRhaWxzIC50ZXh0X2JveCBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDAuOTRyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmJhbm5lciAucHJvZmlsZV9kZXRhaWxzIC50ZXh0X2JveCBoMyBpb24taWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtaW4td2lkdGg6IDI4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyOHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmZvcm0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbi5mb3JtLmRvY3VtZW50YXRpb24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmctYm90dG9tOiAyMXB4O1xufVxuLmZvcm0uZG9jdW1lbnRhdGlvbiBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC1zaXplOiAwLjk0cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgcGFkZGluZzogMTlweDtcbn1cbi5mb3JtLmRvY3VtZW50YXRpb24gaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAxOXB4O1xufVxuLmZvcm0uZG9jdW1lbnRhdGlvbiBpb24tbGlzdCBpb24taXRlbSBpb24taWNvbiB7XG4gIG1pbi13aWR0aDogMjdweDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG4uZm9ybS5kb2N1bWVudGF0aW9uIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uZm9ybS5kb2N1bWVudGF0aW9uIGlvbi1saXN0IGlvbi1pdGVtIC50ZXh0X2JveCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZvcm0uZG9jdW1lbnRhdGlvbiBpb24tbGlzdCBpb24taXRlbSAudGV4dF9ib3ggaDMge1xuICBtYXJnaW46IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC43NXJlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5mb3JtLmRvY3VtZW50YXRpb24gaW9uLWxpc3QgaW9uLWl0ZW0gLnRleHRfYm94IGg0IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOTRyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbn1cbi5mb3JtLmRvY3VtZW50YXRpb24gaW9uLWxpc3QgaW9uLWl0ZW0gLnRleHRfYm94IGg0IHNwYW4uZW5kIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5mb3JtLmRvY3VtZW50YXRpb24gaW9uLWxpc3QgaW9uLWl0ZW0uYWN0aXZlIC50ZXh0X2JveCBoNCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/profile/profile.page.ts": function srcAppProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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


    var src_models_profile_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/models/profile.models */
    "./src/models/profile.models.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/events/my-events.service */
    "./src/app/services/events/my-events.service.ts");
    /* harmony import */


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");
    /* harmony import */


    var _services_network_firebase_uploader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/network/firebase-uploader.service */
    "./src/app/services/network/firebase-uploader.service.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/file-picker/ngx */
    "./node_modules/@ionic-native/file-picker/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage(navCtrl, translate, router, platform, myEvent, iosFilePicker, cropService, fireUpService, myEvents, apiService, uiElementService, alertCtrl, camera) {
        _classCallCheck(this, ProfilePage);

        this.navCtrl = navCtrl;
        this.translate = translate;
        this.router = router;
        this.platform = platform;
        this.myEvent = myEvent;
        this.iosFilePicker = iosFilePicker;
        this.cropService = cropService;
        this.fireUpService = fireUpService;
        this.myEvents = myEvents;
        this.apiService = apiService;
        this.uiElementService = uiElementService;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.profile = new src_models_profile_models__WEBPACK_IMPORTED_MODULE_2__["Profile"]();
        this.subscriptions = new Array();
        this.imageType = 1;
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          if (this.router.getCurrentNavigation().extras.state) this.fresh_profile = this.router.getCurrentNavigation().extras.state.fresh_profile;
          this.profile = new src_models_profile_models__WEBPACK_IMPORTED_MODULE_2__["Profile"]();
          this.translate.get(["just_moment", "something_wrong"]).subscribe(function (values) {
            _this2.uiElementService.presentLoading(values["just_moment"]);

            _this2.subscriptions.push(_this2.apiService.getProfile().subscribe(function (resProfile) {
              setTimeout(function () {
                _this2.profile = resProfile;

                _this2.uiElementService.dismissLoading();
              }, 500);
            }, function (err) {
              console.log("getProfile", err);

              _this2.uiElementService.dismissLoading();

              _this2.uiElementService.presentToast(values["something_wrong"], "top");

              _this2.navCtrl.pop();
            }));
          }); // setTimeout(() => {
          //   this.profile.meta.document_url = null;
          // }, 1000);
          // setTimeout(() => {
          //   this.profile.meta.document_url = "https://i.picsum.photos/id/323/200/200.jpg?hmac=EoedzCHJZRv1-7_RBKDcba4cXIfclsicfsYbW3-VEsA";
          // }, 3000);
          // setTimeout(() => {
          //   this.apiService.updateUser({ image_url: "https://i.picsum.photos/id/323/200/200.jpg?hmac=EoedzCHJZRv1-7_RBKDcba4cXIfclsicfsYbW3-VEsA" }).subscribe(res => {
          //     let profileMe = Helper.getProfile();
          //     if (profileMe != null) {
          //       profileMe.user = res;
          //       Helper.setProfile(profileMe);
          //       this.myEvents.setProfileData(profileMe);
          //     }
          //     this.uiElementService.dismissLoading();
          //   }, err => { console.log('updateUser', err); this.uiElementService.dismissLoading(); });
          // }, 5000);
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
        key: "pickImageUser",
        value: function pickImageUser() {
          var _this3 = this;

          this.imageType = 1;
          this.translate.get(["image_pic_header", "image_pic_subheader", "image_pic_camera", "image_pic_gallery"]).subscribe(function (values) {
            _this3.alertCtrl.create({
              header: values["image_pic_header"],
              message: values["image_pic_subheader"],
              buttons: [{
                text: values["image_pic_camera"],
                handler: function handler() {
                  _this3.getImageCamera();
                }
              }, {
                text: values["image_pic_gallery"],
                handler: function handler() {
                  _this3.getImageGallery();
                }
              }]
            }).then(function (alert) {
              return alert.present();
            });
          });
        }
      }, {
        key: "pickImageProfile",
        value: function pickImageProfile() {
          this.imageType = 2;
          this.getImageCamera();
        }
      }, {
        key: "getImageGallery",
        value: function getImageGallery() {
          var _this4 = this;

          var component = this;
          this.platform.ready().then(function () {
            if (_this4.platform.is("android")) {
              //{ "mime": "application/pdf" }  // text/plain, image/png, image/jpeg, audio/wav etc
              //(<any>window).fileChooser.open({ "mime": component.uploadType == 1 ? "image/jpeg" : "application/*" }, (uri) => component.resolveUri(uri), (err) => console.log("fileChooser", err)); // with mime filter
              window.fileChooser.open({
                "mime": "image/*"
              }, function (uri) {
                return component.reduceImages(uri);
              }, function (err) {
                return console.log("fileChooser", err);
              }); // with mime filter
            } else if (_this4.platform.is("ios")) {
              _this4.iosFilePicker.pickFile().then(function (uri) {
                return component.reduceImages(uri);
              });
            } // if (this.platform.is("cordova")) {
            //   this.imagePicker.getPictures({
            //     maximumImagesCount: 1,
            //   }).then((results) => {
            //     if (results && results[0]) {
            //       this.reduceImages(results).then(() => {
            //         console.log('cropped_images');
            //       });
            //     }
            //   }, (err) => {
            //     console.log("getPictures", JSON.stringify(err));
            //   });
            // }

          });
        }
      }, {
        key: "reduceImages",
        value: function reduceImages(selected_pictures) {
          var _this5 = this;

          // return selected_pictures.reduce((promise: any, item: any) => {
          //   return promise.then((result) => {
          //     return this.cropService.crop(item, { quality: 100 }).then(cropped_image => this.uploadImage(cropped_image));
          //   });
          // }, Promise.resolve());
          this.cropService.crop(selected_pictures, {
            quality: 100
          }).then(function (cropped_image) {
            return _this5.uploadImage(cropped_image);
          });
        }
      }, {
        key: "getImageCamera",
        value: function getImageCamera() {
          var _this6 = this;

          var options = {
            quality: 75,
            destinationType: this.platform.is("android") ? this.camera.DestinationType.FILE_URI : this.camera.DestinationType.NATIVE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          };
          this.camera.getPicture(options).then(function (imageData) {
            return _this6.reduceImages(imageData);
          }, function (err) {
            _this6.translate.get('camera_err').subscribe(function (value) {
              return _this6.uiElementService.presentToast(value, "top");
            });

            console.log("getPicture", JSON.stringify(err));
          });
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(imageUri) {
          var _this7 = this;

          this.translate.get(["uploading_image", "uploading_fail"]).subscribe(function (values) {
            _this7.uiElementService.presentLoading(values["uploading_image"]);

            _this7.fireUpService.resolveUriAndUpload(imageUri).then(function (res) {
              console.log("resolveUriAndUpload", res);
              var imageUrl = String(res);

              if (_this7.imageType == 1) {
                _this7.profile.user.image_url = imageUrl;

                _this7.apiService.updateUser({
                  image_url: imageUrl
                }).subscribe(function (res) {
                  var profileMe = src_models_helper_models__WEBPACK_IMPORTED_MODULE_13__["Helper"].getProfile();

                  if (profileMe != null) {
                    profileMe.user = res;
                    src_models_helper_models__WEBPACK_IMPORTED_MODULE_13__["Helper"].setProfile(profileMe);

                    _this7.myEvents.setProfileData(profileMe);
                  }

                  _this7.uiElementService.dismissLoading();
                }, function (err) {
                  console.log('updateUser', err);

                  _this7.uiElementService.dismissLoading();
                });
              } else if (_this7.imageType == 2) {
                _this7.profile.meta.document_url = imageUrl;

                _this7.uiElementService.dismissLoading();
              }
            }, function (err) {
              console.log("resolveUriAndUpload", err);

              _this7.uiElementService.dismissLoading();

              _this7.uiElementService.presentErrorAlert(values["uploading_fail"]);
            });
          });
        }
      }, {
        key: "update",
        value: function update() {
          var _this8 = this;

          if (!this.profile.user.name || !this.profile.user.name.length) {
            this.translate.get("err_field_profile_name").subscribe(function (value) {
              return _this8.uiElementService.presentToast(value, "top");
            });
          } else if (!this.profile.meta.gender || !this.profile.meta.gender.length) {
            this.translate.get("err_field_profile_gender").subscribe(function (value) {
              return _this8.uiElementService.presentToast(value, "top");
            });
          } else if (!this.profile.meta.document_url || !this.profile.meta.document_url.length) {
            this.translate.get("err_field_profile_document_url").subscribe(function (value) {
              return _this8.uiElementService.presentToast(value, "top");
            });
          } else {
            var pur = {
              meta: JSON.stringify(this.profile.meta),
              is_online: this.fresh_profile ? 1 : this.profile.is_online
            };
            this.translate.get(["updating", "something_wrong"]).subscribe(function (values) {
              _this8.uiElementService.presentLoading(values["updating"]);

              _this8.subscriptions.push(_this8.apiService.updateProfile(pur, _this8.profile.id).subscribe(function (res) {
                _this8.myEvents.setProfileData(res);

                _this8.uiElementService.dismissLoading();
              }, function (err) {
                console.log("updateProfile", err);

                _this8.uiElementService.dismissLoading();
              }));
            });
          }
        }
      }, {
        key: "exitApp",
        value: function exitApp() {
          src_models_helper_models__WEBPACK_IMPORTED_MODULE_13__["Helper"].setLoggedInUserResponse(null);
          this.myEvent.setLoginData(null);
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_6__["MyEventsService"]
      }, {
        type: _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_11__["IOSFilePicker"]
      }, {
        type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_12__["Crop"]
      }, {
        type: _services_network_firebase_uploader_service__WEBPACK_IMPORTED_MODULE_9__["FirebaseUploaderService"]
      }, {
        type: _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_6__["MyEventsService"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_8__["UiElementsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"]
      }];
    };

    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/profile/profile.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_6__["MyEventsService"], _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_11__["IOSFilePicker"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_12__["Crop"], _services_network_firebase_uploader_service__WEBPACK_IMPORTED_MODULE_9__["FirebaseUploaderService"], _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_6__["MyEventsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_8__["UiElementsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"]])], ProfilePage);
    /***/
  },

  /***/
  "./src/app/services/network/firebase-uploader.service.ts": function srcAppServicesNetworkFirebaseUploaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseUploaderService", function () {
      return FirebaseUploaderService;
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


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);

    var FirebaseUploaderService = /*#__PURE__*/function () {
      function FirebaseUploaderService(platform, file) {
        _classCallCheck(this, FirebaseUploaderService);

        this.platform = platform;
        this.file = file;
      }

      _createClass(FirebaseUploaderService, [{
        key: "resolveUriAndUpload",
        value: function resolveUriAndUpload(uri) {
          var _this9 = this;

          return new Promise(function (resolve, reject) {
            // console.log('uri: ' + uri);
            // if (this.platform.is("android") && uri.startsWith('content://') && uri.indexOf('/storage/') != -1) {
            //   uri = "file://" + uri.substring(uri.indexOf("/storage/"), uri.length);
            //   console.log('file: ' + uri);
            // }
            _this9.file.resolveLocalFilesystemUrl(uri).then(function (entry) {
              console.log(entry);
              var fileEntry = entry;
              fileEntry.file(function (success) {
                var mimeType = success.type;
                console.log("mimeType", mimeType); // let dirPath = entry.nativeURL;
                // this.upload(dirPath, entry.name, mimeType);

                var reader = new FileReader();

                reader.onloadend = function (evt) {
                  var imgBlob = new Blob([evt.target.result], {
                    type: mimeType
                  });
                  imgBlob.name = entry.name;

                  _this9.uploadBlob(imgBlob).then(function (res) {
                    return resolve(res);
                  }, function (err) {
                    return reject(err);
                  });
                };

                reader.onerror = function (e) {
                  return reject(e);
                };

                reader.readAsArrayBuffer(success);
              }, function (error) {
                console.log(error);
              });
            }); // this.file.resolveLocalFilesystemUrl(uri).then((entry: Entry) => {
            //   console.log(entry);
            //   var fileEntry = entry as FileEntry;
            //   fileEntry.file(success => {
            //     var mimeType = success.type;
            //     console.log(mimeType);
            //     let dirPath = entry.nativeURL;
            //     let path = dirPath;
            //     let name = entry.name;
            //     let mime = mimeType;
            //     console.log('original: ' + path);
            //     let dirPathSegments = path.split('/');
            //     dirPathSegments.pop();
            //     path = dirPathSegments.join('/');
            //     console.log('dir: ' + path);
            //     this.file.readAsArrayBuffer(path, name).then(buffer => this.uploadBlob(new Blob([buffer], { type: mime })).then(res => resolve(res), err => reject(err))).catch(err => reject(err))
            //   }, error => reject(error));
            // })

          });
        }
      }, {
        key: "uploadBlob",
        value: function uploadBlob(blob) {
          return new Promise(function (resolve, reject) {
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref();
            storageRef.child(new Date().getTime().toString()).put(blob).then(function (snapshot) {
              console.log(snapshot);
              firebase__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref(snapshot.metadata.fullPath).getDownloadURL().then(function (url) {
                return resolve(url);
              })["catch"](function (err) {
                return reject(err);
              });
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(file) {
          return new Promise(function (resolve, reject) {
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref();
            storageRef.child(new Date().getTime().toString()).put(file).then(function (snapshot) {
              console.log(snapshot);
              firebase__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref(snapshot.metadata.fullPath).getDownloadURL().then(function (url) {
                return resolve(url);
              })["catch"](function (err) {
                return reject(err);
              });
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(imageURI) {
          var _this10 = this;

          return new Promise(function (resolve, reject) {
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref();
            var imageRef = storageRef.child('image').child('imageName');

            _this10.encodeImageUri(imageURI, function (image64) {
              imageRef.putString(image64, 'data_url').then(function (snapshot) {
                resolve(snapshot.downloadURL);
              }, function (err) {
                reject(err);
              });
            });
          });
        }
      }, {
        key: "encodeImageUri",
        value: function encodeImageUri(imageUri, callback) {
          var c = document.createElement('canvas');
          var ctx = c.getContext("2d");
          var img = new Image();

          img.onload = function () {
            var aux = this;
            c.width = aux.width;
            c.height = aux.height;
            ctx.drawImage(img, 0, 0);
            var dataURL = c.toDataURL("image/jpeg");
            callback(dataURL);
          };

          img.src = imageUri;
        }
      }]);

      return FirebaseUploaderService;
    }();

    FirebaseUploaderService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"]
      }];
    };

    FirebaseUploaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"]])], FirebaseUploaderService);
    /***/
  }
}]);
//# sourceMappingURL=profile-profile-module-es5.js.map