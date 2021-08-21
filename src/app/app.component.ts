import { Component, OnInit, Inject, ViewChild, OnDestroy } from '@angular/core';
import { Platform, IonRouterOutlet, AlertController, MenuController, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { NavController } from '@ionic/angular';
import { APP_CONFIG, AppConfig } from './app.config';
import { Constants } from 'src/models/constants.models';
import { ApiService } from './services/network/api.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { MyEventsService } from './services/events/my-events.service';
import { Helper } from 'src/models/helper.models';
import { NavigationExtras } from '@angular/router';
import { UiElementsService } from './services/common/ui-elements.service';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { MyAddress } from 'src/models/address.models';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Profile } from 'src/models/profile.models';
import { OrderRequest } from 'src/models/order-request.models';
import { Device } from '@ionic-native/device/ngx';
import { Subscription } from 'rxjs';
import * as firebase from 'firebase';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { VtPopupPage } from './vt-popup/vt-popup.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild(IonRouterOutlet, { static: false }) routerOutlets: IonRouterOutlet;
  rtlSide = "ltr";
  rtlSideMenu = "start";
  appPagesToUse = [];
  showSideMenu = false;
  profileMe: Profile;
  private subscriptions = new Array<Subscription>();
  private watchingLocation = false;
  private myRequestsRef: firebase.database.Reference;

  private appPagesLoggedIn = [{
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
  private appPagesLoggedOut = [{
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
  }];

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private alertCtrl: AlertController, private diagnostic: Diagnostic,
    private platform: Platform, private navCtrl: NavController, private device: Device, private menu: MenuController,
    private splashScreen: SplashScreen, private apiService: ApiService, private uiElementService: UiElementsService,
    private statusBar: StatusBar, private oneSignal: OneSignal, private locationAccuracy: LocationAccuracy,
    private modalController: ModalController, private translate: TranslateService, private myEvent: MyEventsService, private inAppBrowser: InAppBrowser, ) {
    //moc location update after 5 secs
    // setTimeout(() => {
    //   let loc = new MyAddress();
    //   loc.latitude = "28.7041";
    //   loc.longitude = "77.1025";
    //   loc.title = "delhi";
    //   loc.formatted_address = "delhi";
    //   this.onNewLocation(loc);
    // }, 5000);

    // let order = JSON.parse(JSON.stringify({
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

  ngOnInit() {
    if (this.config.demoMode) setTimeout(() => this.presentModal(), 15000);
    this.initializeApp();
    this.myEvent.getLanguageObservable().subscribe(value => {
      console.log("getLanguageObservable", value);
      this.globalize(value);
      this.subscriptions.push(this.apiService.updateUser({ language: value }).subscribe(res => console.log('updateUser', res), err => console.log('updateUser', err)));
      this.apiService.setupHeaders();
      this.onNavItemClick(this.appPagesToUse[0]);
    });
    this.myEvent.getLoginObservable().subscribe(loginRes => {
      if (loginRes == null) {
        this.profileMe = null;
        this.appPagesToUse = this.profileMe ? this.appPagesLoggedIn : this.appPagesLoggedOut;
        this.onNavItemClick(this.appPagesToUse[0]);
        this.unRegisterRequestUpdates();
      } else if (loginRes && loginRes.token && loginRes.user) {
        this.translate.get(["verifying_profile", "something_wrong"]).subscribe(values => {
          this.uiElementService.presentLoading(values["verifying_profile"]);
          Helper.setLoggedInUserResponse(loginRes);
          this.apiService.setupHeaders(loginRes.token);
          this.subscriptions.push(this.apiService.getProfile().subscribe(resProfile => {
            if (resProfile && resProfile.user && resProfile.meta.document_url && resProfile.meta.document_url.length) {
              this.myEvent.setProfileData(resProfile);
            } else {
              this.translate.get("setup_profile").subscribe(value => this.uiElementService.presentToast(value));
              let navigationExtras: NavigationExtras = { state: { fresh_profile: true } };
              this.navCtrl.navigateForward(['./profile'], navigationExtras);
            }
            this.uiElementService.dismissLoading();
          }, err => {
            console.log("getProfile", err);
            this.apiService.setupHeaders(null);
            this.uiElementService.dismissLoading();
            this.uiElementService.presentToast(values["something_wrong"]);
          }));
        });
      }
    });
    this.myEvent.getProfileObservable().subscribe(profile => {
      this.profileMe = profile;
      Helper.setProfile(profile);
      this.appPagesToUse = this.profileMe ? this.appPagesLoggedIn : this.appPagesLoggedOut;
      this.onNavItemClick(this.appPagesToUse[0]);
      if (this.platform.is('cordova') && this.profileMe) this.updatePlayerId();

      this.onProfileInit();
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: VtPopupPage,
    });
    return await modal.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();

      firebase.initializeApp({
        apiKey: this.config.firebaseConfig.apiKey,
        authDomain: this.config.firebaseConfig.authDomain,
        databaseURL: this.config.firebaseConfig.databaseURL,
        projectId: this.config.firebaseConfig.projectId,
        storageBucket: this.config.firebaseConfig.storageBucket,
        messagingSenderId: this.config.firebaseConfig.messagingSenderId
      });
      if (this.platform.is('cordova')) this.initOneSignal();

      this.apiService.setUuidAndPlatform(this.device.uuid, this.device.platform);
      this.refreshSettings();

      this.profileMe = Helper.getProfile();
      this.appPagesToUse = this.profileMe ? this.appPagesLoggedIn : this.appPagesLoggedOut;
      this.onNavItemClick(this.appPagesToUse[0]);
      if (this.profileMe) this.subscriptions.push(this.apiService.getProfile().subscribe(res => { this.profileMe = res; Helper.setProfile(this.profileMe); }, err => console.log("getProfile", err)));

      setTimeout(() => {
        if (this.profileMe == null) {
          let token = Helper.getToken();
          if (token != null) {
            let navigationExtras: NavigationExtras = { state: { fresh_profile: true } };
            this.navCtrl.navigateForward(['./profile'], navigationExtras);
          }
        }
        this.splashScreen.hide();
        if (this.platform.is('cordova') && this.profileMe) this.updatePlayerId();
        this.onProfileInit();
        this.globalize(Helper.getLanguageDefault());
      }, 3000);

      this.globalize(Helper.getLanguageDefault());

      this.platform.backButton.subscribe(() => {
        if (this.routerOutlets && this.routerOutlets.canGoBack()) {
          this.routerOutlets.pop();
        } else {
          let currPathName = window.location.pathname;
          if (currPathName && currPathName.includes(this.appPagesToUse[0].url)) {
            navigator['app'].exitApp();
          } else {
            this.navCtrl.navigateRoot([this.appPagesToUse[0].url]);
          }
        }
      });
    });
  }

  globalize(languagePriority) {
    this.translate.setDefaultLang("en");
    let defaultLangCode = this.config.availableLanguages[0].code;
    this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    Helper.setLocale(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    Helper.setLanguageDefault(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
  }

  setDirectionAccordingly(lang: string) {
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
    setTimeout(() => this.showSideMenu = true, 100);
  }

  onProfileInit() {
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

  initOneSignal() {
    if (this.config.oneSignalAppId && this.config.oneSignalAppId.length && this.config.oneSignalGPSenderId && this.config.oneSignalGPSenderId.length) {
      this.oneSignal.startInit(this.config.oneSignalAppId, this.config.oneSignalGPSenderId);
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
      this.oneSignal.handleNotificationReceived().subscribe((data) => {
        console.log(data);
        Helper.saveNotification((data.payload.additionalData && data.payload.additionalData.title) ? data.payload.additionalData.title : data.payload.title,
          (data.payload.additionalData && data.payload.additionalData.body) ? data.payload.additionalData.body : data.payload.body,
          String(new Date().getTime()));
        let noti_ids_processed: Array<string> = JSON.parse(window.localStorage.getItem("noti_ids_processed"));
        if (!noti_ids_processed) noti_ids_processed = new Array<string>();
        noti_ids_processed.push(data.payload.notificationID);
        window.localStorage.setItem("noti_ids_processed", JSON.stringify(noti_ids_processed));
      });
      this.oneSignal.handleNotificationOpened().subscribe((data) => {
        let noti_ids_processed: Array<string> = JSON.parse(window.localStorage.getItem("noti_ids_processed"));
        if (!noti_ids_processed) noti_ids_processed = new Array<string>();
        let index = noti_ids_processed.indexOf(data.notification.payload.notificationID);
        if (index == -1) {
          Helper.saveNotification((data.notification.payload.additionalData && data.notification.payload.additionalData.title) ? data.notification.payload.additionalData.title : data.notification.payload.title,
            (data.notification.payload.additionalData && data.notification.payload.additionalData.body) ? data.notification.payload.additionalData.body : data.notification.payload.body,
            String(new Date().getTime()));
        } else {
          noti_ids_processed.splice(index, 1);
          window.localStorage.setItem("noti_ids_processed", JSON.stringify(noti_ids_processed));
        }
      });
      this.oneSignal.endInit();
    }
  }

  updatePlayerId() {
    this.oneSignal.getIds().then((id) => {
      if (id && id.userId) {
        let defaultLang = Helper.getLanguageDefault();

        this.subscriptions.push(this.apiService.updateUser({
          notification: "{\"" + Constants.ROLE_DELIVERY + "\":\"" + id.userId + "\"}",
          language: (defaultLang && defaultLang.length) ? defaultLang : this.config.availableLanguages[0].code
        }).subscribe(res => console.log('updateUser', res), err => console.log('updateUser', err)));

        firebase.database().ref(Constants.REF_USERS_FCM_IDS).child((this.profileMe.user.id + Constants.ROLE_DELIVERY)).set(id.userId);
      }
    });
  }

  refreshSettings() {
    this.subscriptions.push(this.apiService.getSettings().subscribe(res => {
      console.log('getSettings', res);
      Helper.setSettings(res);
      this.apiService.reloadSetting();
    }, err => console.log('getSettings', err)));
  }

  onNavItemClick(navItem: { title: string, url: string, icon: string }) {
    if (navItem.title == "logout") {
      this.translate.get(["logout_title", "logout_message", "no", "yes"]).subscribe(values => {
        this.alertCtrl.create({
          header: values["logout_title"],
          message: values["logout_message"],
          buttons: [{
            text: values["no"],
            handler: () => { }
          }, {
            text: values["yes"],
            handler: () => {
              try {
                (<any>window).FirebasePlugin.signOutUser(function () {
                  console.log("User signed out");
                }, function (error) {
                  console.error("Failed to sign out user: " + error);
                });
              } catch (e) { console.log("fireSignout", e); }

              try {
                firebase.auth().signOut().then(function () {
                  console.log('Signed Out');
                }, function (error) {
                  console.error('Sign Out Error', error);
                });
              } catch (e) { console.log("fireSignout", e); }

              this.unRegisterRequestUpdates();
              Helper.setLoggedInUserResponse(null);
              this.myEvent.setLoginData(null);
            }
          }]
        }).then(alert => alert.present());
      });
    } else if (navItem.title == "my_profile") {
      this.viewProfile();
    } else {
      let currPathName = window.location.pathname;
      if (!currPathName || !currPathName.includes(navItem.url)) {
        this.navCtrl.navigateRoot([navItem.url]);
      }
    }
  }

  viewProfile() {
    if (this.profileMe != null) {
      this.navCtrl.navigateRoot(['./profile']);
    } else {
      this.navCtrl.navigateForward(['./sign-in']);
    }
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.unRegisterRequestUpdates();
    this.unWatchLocation();
  }

  refreshCurrentOrder(profileId) {
    this.translate.get("refreshing").subscribe(value => {
      this.uiElementService.presentLoading(value);
      this.subscriptions.push(this.apiService.getOrder(profileId).subscribe(res => {
        this.uiElementService.dismissLoading();
        let navigationExtras: NavigationExtras = { queryParams: { order_id: res.id } };
        this.navCtrl.navigateForward(['./accepted'], navigationExtras);
      }, err => {
        console.log("getOrder", err);
        this.uiElementService.dismissLoading();
      }));
    });
  }

  refreshDeliveryRequest(profileId) {
    this.translate.get(["refreshing", "delivery_request_na"]).subscribe(values => {
      this.uiElementService.presentLoading(values["refreshing"]);
      this.subscriptions.push(this.apiService.getOrderRequest(profileId).subscribe(res => {
        this.uiElementService.dismissLoading();
        if (res && res.order && res.delivery.id == this.profileMe.id) {
          let navigationExtras: NavigationExtras = { state: { order_request: res } };
          this.navCtrl.navigateForward(['./new-delivery'], navigationExtras);
        } else {
          this.uiElementService.presentToast(values["delivery_request_na"], "top");
        }
      }, err => {
        console.log("getOrderRequest", err);
        this.uiElementService.dismissLoading();
        this.uiElementService.presentToast(values["delivery_request_na"], "top");
      }));
    });
  }

  checkAndWatchLocation() {
    this.diagnostic.isLocationEnabled().then((isAvailable) => {
      if (!isAvailable) this.alertLocationServices();
    }).catch((e) => {
      console.error(e);
      this.alertLocationServices();
    });
    this.watchLocation();
  }

  watchLocation() {
    const component = this;
    if (!this.watchingLocation) {
      this.watchingLocation = true;

      this.translate.get(["location_noti_title", "location_noti_body"]).subscribe(values => {

        try {
          (<any>window).BackgroundGeolocation.checkStatus(function (status) {
            console.log('[INFO] BackgroundGeolocation service is running', status.isRunning);
            console.log('[INFO] BackgroundGeolocation services enabled', status.locationServicesEnabled);
            console.log('[INFO] BackgroundGeolocation auth status: ' + status.authorization);

            // you don't need to check status before start (this is just the example)
            if (!status.isRunning) {
              const config = {
                desiredAccuracy: 0,
                stationaryRadius: 20,
                distanceFilter: 30,
                interval: 10000,
                fastestInterval: 5000,
                startForeground: true,
                notificationTitle: values["location_noti_title"],
                notificationText: values["location_noti_body"],
                debug: false, //  enable this hear sounds for background-geolocation life-cycle.
                stopOnTerminate: true, // enable this to clear background location settings when the app terminates
              };

              let defaultConfig = {
                locationProvider: (<any>window).BackgroundGeolocation.DISTANCE_FILTER_PROVIDER,
                desiredAccuracy: (<any>window).BackgroundGeolocation.HIGH_ACCURACY,
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

              let myConfig = {
                locationProvider: (<any>window).BackgroundGeolocation.DISTANCE_FILTER_PROVIDER,
                desiredAccuracy: (<any>window).BackgroundGeolocation.HIGH_ACCURACY,
                stationaryRadius: 50,
                distanceFilter: 50,
                notificationTitle: values["location_noti_title"],
                notificationText: values["location_noti_body"],
                debug: false,
                interval: 10000,
                fastestInterval: 10000,
                activitiesInterval: 10000
              };

              (<any>window).BackgroundGeolocation.configure(myConfig);
              (<any>window).BackgroundGeolocation.on('location', function (locationData) {
                console.log("location", JSON.stringify(locationData));

                let location = new MyAddress();
                location.latitude = String(locationData.latitude);
                location.longitude = String(locationData.longitude);
                component.onNewLocation(location);

                // handle your locations here
                // to perform long running operation on iOS
                // you need to create background task
                (<any>window).BackgroundGeolocation.startTask(function (taskKey) {
                  // execute long running task
                  // eg. ajax post location
                  // IMPORTANT: task has to be ended by endTask

                  let location = new MyAddress();
                  location.latitude = String(locationData.latitude);
                  location.longitude = String(locationData.longitude);
                  component.onNewLocation(location);

                  (<any>window).BackgroundGeolocation.endTask(taskKey);
                });
              });
              (<any>window).BackgroundGeolocation.start();
            }
          });
        } catch (ex) {
          console.log("ex", ex);
          this.watchingLocation = false;
        }
      });
    }
  }

  unWatchLocation() {
    try {
      // If you wish to turn OFF background-tracking, call the #stop method.
      (<any>window).BackgroundGeolocation.stop();
      this.watchingLocation = false;
    } catch (ex) {
      console.log("ex", ex);
    }
  }

  onNewLocation(location: MyAddress) {
    if (this.profileMe == null) this.profileMe = Helper.getProfile();
    if (this.profileMe != null && this.profileMe.user != null && this.profileMe.id != null) {
      let prevLoc = Helper.getLocation();
      if (prevLoc == null || prevLoc.latitude != location.latitude || prevLoc.longitude != location.longitude) {
        Helper.setLocation(location);
        this.subscriptions.push(this.apiService.updateProfile({ latitude: location.latitude, longitude: location.longitude }, this.profileMe.id).subscribe(res => Helper.setProfile(res), err => console.log("updateOrder", err)));

        let refLocation = firebase.database().ref().child("deliveries").child(String(this.profileMe.id)).child("location");
        refLocation.set(location);

        this.myEvent.setLocationData(location);
      }
    }
  }

  alertLocationServices() {
    this.translate.get(['location_services_title', 'location_services_message', 'okay']).subscribe(text => {
      this.alertCtrl.create({
        header: text['location_services_title'],
        message: text['location_services_message'],
        buttons: [{
          text: text['okay'],
          role: 'cancel',
          handler: () => {
            this.locationAccuracy.canRequest().then((canRequest: boolean) => {
              if (canRequest) {
                // the accuracy option will be ignored by iOS
                this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
                  () => console.log('Request successful'),
                  error => console.log('Error requesting location permissions', error)
                );
              }
            });
          }
        }]
      }).then(alert => alert.present());
    })
  }

  navSubscription() {
    this.navCtrl.navigateRoot(['./subscription']);
  }

  addFireOrderRequest(data: OrderRequest) {
    if (data.status == "pending") {
      let locale = Helper.getLocale();
      data.created_at = Helper.formatTimestampDate(data.created_at, locale);
      data.updated_at = Helper.formatTimestampDate(data.updated_at, locale);
      this.apiService.setupOrder(data.order);

      this.navCtrl.navigateRoot(['./home']);
      if (data && data.order && data.delivery.id == this.profileMe.id) {
        let navigationExtras: NavigationExtras = { state: { order_request: data } };
        this.navCtrl.navigateForward(['./new-delivery'], navigationExtras);
      }

    }
  }

  unRegisterRequestUpdates() {
    try {
      if (this.myRequestsRef != null) this.myRequestsRef.off();
      this.myRequestsRef = null;
    } catch (ex) { console.log(ex); this.myRequestsRef = null; }
  }

  registerRequestUpdates() {
    const component = this;
    if (this.myRequestsRef == null) {
      this.myRequestsRef = firebase.database().ref("deliveries").child(String(this.profileMe.id)).child("order-request");
      this.myRequestsRef.on('value', function (data) {
        var fireRequest = data.val() as OrderRequest;
        console.log("value_Or", fireRequest);
        if (fireRequest != null && fireRequest.order != null && fireRequest.delivery != null) component.addFireOrderRequest(fireRequest);
      });
    }
  }

  buyAppAction() {
    this.menu.close();
    this.translate.get("just_moment").subscribe(value => {
      this.uiElementService.presentLoading(value);
      this.apiService.getContactLink().subscribe(res => {
        this.uiElementService.dismissLoading();
        this.inAppBrowser.create((res.link ? res.link : "https://bit.ly/cc_DoctoWorld"), "_system");
      }, err => {
        console.log("getContactLink", err);
        this.uiElementService.dismissLoading();
        this.inAppBrowser.create("https://bit.ly/cc_DoctoWorld", "_system");
      });
    });
  }

  developed_by() {
    this.menu.close();
    this.inAppBrowser.create("https://verbosetechlabs.com/", "_system");
  }

}
