(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verification-verification-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{'phone_verification' | translate}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div id=\"recaptcha-container\"></div>\n\t<div class=\"form\">\n\t\t<p class=\"ion-text-center\">{{'verification_text' | translate}} {{phoneNumberFull}} </p>\n\n\t\t<ion-list lines=\"none\">\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-input class=\"ion-text-center\" type=\"number\" [(ngModel)]=\"otp\"\n\t\t\t\t\tplaceholder=\"{{'enter_verification_code' | translate}}\">\n\t\t\t\t</ion-input>\n\t\t\t</ion-item>\n\n\t\t\t<ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"verify()\">\n\t\t\t\t{{'verify' | translate}}\n\t\t\t</ion-button>\n\t\t</ion-list>\n\t\t<!-- <h4 class=\"d-flex\">0:22 min left <span class=\"end\">{{'resend' | translate}}</span></h4> -->\n\t</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/verification/verification-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/verification/verification-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: VerificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPageRoutingModule", function() { return VerificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verification.page */ "./src/app/verification/verification.page.ts");




const routes = [
    {
        path: '',
        component: _verification_page__WEBPACK_IMPORTED_MODULE_3__["VerificationPage"]
    }
];
let VerificationPageRoutingModule = class VerificationPageRoutingModule {
};
VerificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerificationPageRoutingModule);



/***/ }),

/***/ "./src/app/verification/verification.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/verification/verification.module.ts ***!
  \*****************************************************/
/*! exports provided: VerificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPageModule", function() { return VerificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _verification_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verification-routing.module */ "./src/app/verification/verification-routing.module.ts");
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./verification.page */ "./src/app/verification/verification.page.ts");








let VerificationPageModule = class VerificationPageModule {
};
VerificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _verification_routing_module__WEBPACK_IMPORTED_MODULE_6__["VerificationPageRoutingModule"]
        ],
        declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_7__["VerificationPage"]]
    })
], VerificationPageModule);



/***/ }),

/***/ "./src/app/verification/verification.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/verification/verification.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar ion-title {\n  position: absolute !important;\n  left: 0;\n  top: 0;\n  width: 100%;\n  text-align: center;\n  padding: 0 15px !important;\n}\n\n.form {\n  padding-top: 50px;\n}\n\n.form p {\n  color: var(--text-light) !important;\n  margin: 0;\n  font-size: 1rem !important;\n  letter-spacing: 0;\n  font-weight: 500;\n  line-height: 19px;\n  margin-bottom: 50px;\n  opacity: 0.8;\n}\n\n.form .button.btn.button-block {\n  margin-top: 25px;\n}\n\n.form ion-list {\n  margin-bottom: 28px;\n}\n\n.form h4 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n\n.form h4 span {\n  text-transform: uppercase;\n  font-size: 0.95rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZpY2F0aW9uL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWRlbGl2ZXJ5L3NyY1xcYXBwXFx2ZXJpZmljYXRpb25cXHZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBRENJO0VBQ0ksbUNBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDUjs7QURFSTtFQUNJLGdCQUFBO0FDQVI7O0FER0k7RUFDSSxtQkFBQTtBQ0RSOztBRElJO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGUjs7QURJUTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUNGWiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbn1cblxuLmZvcm0ge1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuXG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIG9wYWNpdHk6IC44O1xuICAgIH1cblxuICAgIC5idXR0b24uYnRuLmJ1dHRvbi1ibG9jayB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgfVxuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICAgIH1cblxuICAgIGg0IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IC45NXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXNpemU6IC45NXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xufVxuXG4uZm9ybSB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuLmZvcm0gcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIG9wYWNpdHk6IDAuODtcbn1cbi5mb3JtIC5idXR0b24uYnRuLmJ1dHRvbi1ibG9jayB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG4uZm9ybSBpb24tbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG4uZm9ybSBoNCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmZvcm0gaDQgc3BhbiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/verification/verification.page.ts":
/*!***************************************************!*\
  !*** ./src/app/verification/verification.page.ts ***!
  \***************************************************/
/*! exports provided: VerificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPage", function() { return VerificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/events/my-events.service */ "./src/app/services/events/my-events.service.ts");
/* harmony import */ var _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/network/api.service */ "./src/app/services/network/api.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_models_constants_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/models/constants.models */ "./src/models/constants.models.ts");










let VerificationPage = class VerificationPage {
    constructor(route, uiElementService, myEvent, platform, apiService, translate, navCtrl) {
        this.route = route;
        this.uiElementService = uiElementService;
        this.myEvent = myEvent;
        this.platform = platform;
        this.apiService = apiService;
        this.translate = translate;
        this.navCtrl = navCtrl;
        this.captchanotvarified = true;
        this.buttonDisabled = true;
        this.captchaVerified = false;
        this.minutes = 0;
        this.seconds = 0;
        this.totalSeconds = 0;
        this.intervalCalled = false;
        this.resendCode = false;
        this.otpNotSent = true;
        this.otp = "";
        this.route.queryParams.subscribe(params => this.phoneNumberFull = params["phoneNumberFull"]);
    }
    ngOnInit() {
        if (!(this.platform.is('cordova'))) {
            this.makeCaptcha();
        }
        this.sendOTP();
    }
    loginUser(token) {
        this.translate.get('just_moment').subscribe(value => {
            this.uiElementService.presentLoading(value);
            this.apiService.loginUser({ token: token, role: src_models_constants_models__WEBPACK_IMPORTED_MODULE_9__["Constants"].ROLE_DELIVERY }).subscribe(res => {
                this.uiElementService.dismissLoading();
                this.myEvent.setLoginData(res);
                this.navCtrl.pop();
            }, err => {
                console.log(err);
                this.uiElementService.dismissLoading();
                this.uiElementService.presentErrorAlert((err && err.error && err.error.message && String(err.error.message).toLowerCase().includes("role")) ? "User exists with different role" : "Something went wrong");
            });
        });
    }
    getUserToken(user) {
        user.getIdToken(false).then(res => {
            console.log('user_token_success', res);
            this.loginUser(res);
        }).catch(err => {
            console.log('user_token_failure', err);
        });
    }
    sendOTP() {
        this.resendCode = false;
        this.otpNotSent = true;
        if (this.platform.is('cordova')) {
            this.sendOtpPhone(this.phoneNumberFull);
        }
        else {
            this.sendOtpBrowser(this.phoneNumberFull);
        }
        if (this.intervalCalled) {
            clearInterval(this.timer);
        }
    }
    createTimer() {
        this.intervalCalled = true;
        this.totalSeconds--;
        if (this.totalSeconds == 0) {
            this.otpNotSent = true;
            this.resendCode = true;
            clearInterval(this.timer);
        }
        else {
            this.seconds = (this.totalSeconds % 60);
            if (this.totalSeconds >= this.seconds) {
                this.minutes = (this.totalSeconds - this.seconds) / 60;
            }
            else {
                this.minutes = 0;
            }
        }
    }
    createInterval() {
        this.totalSeconds = 120;
        this.createTimer();
        this.timer = setInterval(() => {
            this.createTimer();
        }, 1000);
    }
    sendOtpPhone(phone) {
        const component = this;
        this.translate.get('sending_otp').subscribe(value => {
            this.uiElementService.presentLoading(value);
            window.FirebasePlugin.verifyPhoneNumber(function (credential) {
                component.uiElementService.dismissLoading();
                console.log("verifyPhoneNumber", JSON.stringify(credential));
                //component.verfificationId = credential.instantVerification ? credential.id : credential.verificationId;
                component.credential = credential;
                if (credential.instantVerification) {
                    component.translate.get("verifying_otp_auto").subscribe(value => component.uiElementService.presentToast(value));
                    component.verifyOtpPhone();
                }
                else {
                    component.translate.get("sending_otp_success").subscribe(value => component.uiElementService.presentToast(value));
                    component.otpNotSent = false;
                    component.createInterval();
                }
                // component.translate.get("otp_sent").subscribe(value => {
                //   component.global.showToast(value);
                // });
                // component.otpNotSent = false;
                // component.createInterval(); 
            }, function (error) {
                console.log("otp_send_fail", error);
                component.otpNotSent = true;
                component.resendCode = true;
                component.uiElementService.dismissLoading();
                component.translate.get('sending_otp_fail').subscribe(text => component.uiElementService.presentToast(text));
            }, phone, 60);
        });
    }
    sendOtpBrowser(phone) {
        const component = this;
        this.uiElementService.dismissLoading();
        this.uiElementService.presentLoading("Sending otp");
        firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().signInWithPhoneNumber(phone, this.recaptchaVerifier).then((confirmationResult) => {
            console.log("otp_send_success", confirmationResult);
            component.otpNotSent = false;
            component.result = confirmationResult;
            component.uiElementService.dismissLoading();
            component.uiElementService.presentToast("OTP Sent");
            if (component.intervalCalled) {
                clearInterval(component.timer);
            }
            component.createInterval();
        }).catch(function (error) {
            console.log("otp_send_fail", error);
            component.resendCode = true;
            component.uiElementService.dismissLoading();
            if (error.message) {
                component.uiElementService.presentToast(error.message);
            }
            else {
                component.uiElementService.presentToast("OTP Sending failed");
            }
        });
    }
    verify() {
        this.otpNotSent = true;
        if (this.platform.is('cordova')) {
            this.credential.code = String(this.otp);
            this.verifyOtpPhone();
        }
        else {
            this.verifyOtpBrowser();
        }
    }
    retryOld(credential) {
        //const credential = firebase.auth.PhoneAuthProvider.credential(this.verfificationId, this.otp);
        this.translate.get('verifying_otp').subscribe(value => {
            this.uiElementService.presentLoading(value);
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().signInAndRetrieveDataWithCredential(credential).then((info) => {
                console.log('otp_verify_success', info);
                this.uiElementService.dismissLoading();
                this.translate.get('verifying_otp_success').subscribe(value => this.uiElementService.presentToast(value));
                this.getUserToken(info.user);
            }, (error) => {
                console.log('otp_verify_fail', error);
                this.translate.get('verifying_otp_fail').subscribe(value => this.uiElementService.presentToast(value));
                this.uiElementService.dismissLoading();
            });
        });
    }
    verifyOtpPhone() {
        const component = this;
        this.translate.get('verifying_otp').subscribe(text => {
            this.uiElementService.presentLoading(text);
            console.log("credential", component.credential);
            window.FirebasePlugin.signInWithCredential(component.credential, function () {
                console.log("signInWithCredential");
                window.FirebasePlugin.getCurrentUser(function (user) {
                    component.uiElementService.dismissLoading();
                    console.log("getCurrentUser", JSON.stringify(user));
                    component.translate.get('otp_verified').subscribe(text => component.uiElementService.presentToast(text));
                    component.loginUser(user.idToken);
                }, function (error) {
                    component.uiElementService.dismissLoading();
                    console.log("getCurrentUser", JSON.stringify(error));
                    component.translate.get('verify_otp_err').subscribe(text => component.uiElementService.presentToast(text));
                });
            }, function (error) {
                console.error("signInWithCredential", error);
                component.uiElementService.dismissLoading();
                component.retryOld(firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"].PhoneAuthProvider.credential(component.credential.id, component.otp));
                component.translate.get('verify_otp_err').subscribe(text => component.uiElementService.presentToast(text));
            });
        });
    }
    verifyOtpBrowser() {
        const component = this;
        this.uiElementService.presentLoading("Verifying otp");
        this.result.confirm(String(this.otp)).then(function (response) {
            console.log('otp_verify_success', response);
            component.uiElementService.dismissLoading();
            component.uiElementService.presentToast("OTP Verified");
            component.getUserToken(response.user);
        }).catch(function (error) {
            console.log('otp_verify_fail', error);
            if (error.message) {
                component.uiElementService.presentToast(error.message);
            }
            else {
                component.uiElementService.presentToast("OTP Verification failed");
            }
            component.uiElementService.dismissLoading();
        });
    }
    makeCaptcha() {
        const component = this;
        this.recaptchaVerifier = new firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"].RecaptchaVerifier('recaptcha-container', {
            // 'size': 'normal',
            'size': 'invisible',
            'callback': function (response) {
                component.captchanotvarified = true;
                // reCAPTCHA solved, allow signInWithPhoneNumber.
            }
        });
        this.recaptchaVerifier.render();
    }
};
VerificationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"] },
    { type: _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_5__["MyEventsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
VerificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verification',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./verification.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./verification.page.scss */ "./src/app/verification/verification.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"], _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_5__["MyEventsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], VerificationPage);



/***/ })

}]);
//# sourceMappingURL=verification-verification-module-es2015.js.map