webpackJsonp([0],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, alertCtrl, db, afAuth, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.afAuth = afAuth;
        this.loadingCtrl = loadingCtrl;
        this.page_name = "Login";
        this.is_login = true;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
        if (window.localStorage.getItem('isuser')) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
    };
    RegisterPage.prototype.reg = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(this.username, this.password).then(function (result) {
            console.log('result', result);
            window.localStorage.setItem('isuser', _this.username);
            _this.db.list('/geotracker_np').push(_this.username).then(function (saved) {
                console.log('saved', saved);
            }, function (error) {
                console.log('error', error);
            });
            loader.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }, function (error) {
            console.log('error', error);
            var alert = _this.alertCtrl.create({
                title: error,
                buttons: ['OK']
            });
            alert.present();
            loader.dismiss();
        });
        // let user = {
        //   name : this.username,
        //   password : this.password
        // }
        // this.db.list('/username').push(user).then( saved => {
        //   console.log('saved', saved)
        // }, error=>{
        //   console.log('error', error)
        // })
        // this.navCtrl.setRoot(HomePage)
        // this.db.list('/username').valueChanges();
    };
    RegisterPage.prototype.onLogin = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(this.username, this.password).then(function (result) {
            console.log('result', result);
            window.localStorage.setItem('isuser', _this.username);
            loader.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }, function (error) {
            console.log('error', error);
            var alert = _this.alertCtrl.create({
                title: error,
                buttons: ['OK']
            });
            alert.present();
            loader.dismiss();
        });
    };
    RegisterPage.prototype.change_sign = function () {
        this.page_name = "Register";
        this.is_login = false;
    };
    RegisterPage.prototype.change_login = function () {
        this.page_name = "Login";
        this.is_login = true;
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\nodejs\geotracker\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{page_name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="is_login">\n      <h1>Login Page</h1>\n      <ion-item>\n          <ion-label floating>Username</ion-label>\n          <ion-input type="text" [(ngModel)]="username"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type="password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <button ion-button (click)="onLogin()">Login</button>\n        </ion-item>\n\n        <ion-item>\n            <button ion-button (click)="change_sign()">Sign up</button>\n          </ion-item>\n    \n  </div>\n\n  <div *ngIf="!is_login">\n    <h1>Register Page</h1>\n      \n    <ion-item>\n          <ion-label floating>Username</ion-label>\n          <ion-input type="text" [(ngModel)]="username"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type="password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <button ion-button (click)="reg()">Sign up</button>\n        </ion-item>\n    \n        <ion-item>\n          <button ion-button (click)="change_login()">Login</button>\n        </ion-item>\n\n       \n\n  </div>\n  <ion-list>\n\n\n    \n\n  </ion-list>\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\nodejs\geotracker\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_popover_popover__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Push, PushObject, PushOptions } from '@ionic-native/push';





var HomePage = (function () {
    function HomePage(navCtrl, geolocation, popoverCtrl, events, afAuth, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.popoverCtrl = popoverCtrl;
        this.events = events;
        this.afAuth = afAuth;
        this.db = db;
        this.track_me = true;
        this.track_status = false;
        this.color = "primary";
        var listRef = db.list('data');
        // this.items = db.list('/geotracker_np').valueChanges();
        // let u="dhgs@gbbh.bjnn";
        //this.items= this.db.list('/geotracker_np', ref => ref.orderByChild('username').equalTo(u)).valueChanges();
        events.subscribe('addmarker', function () {
            console.log('Welcome');
            _this.addMarker();
        });
        events.subscribe('tracker', function () {
            console.log('Welcome');
            _this.tracker();
        });
        events.subscribe('trace', function () {
            console.log('Welcome');
            _this.trace();
        });
        events.subscribe('logout', function () {
            console.log('Welcome');
            _this.logout();
        });
    }
    HomePage.prototype.ionViewDidLeave = function () {
        this.map = null;
        this.mapElement = null;
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            console.log('position', position);
            if (position) {
                _this.curlatlong = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                var mapOptions = {
                    center: _this.curlatlong,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
                var marker = new google.maps.Marker({
                    map: _this.map,
                    animation: google.maps.Animation.DROP,
                    position: _this.curlatlong
                });
                var content = "<h4> " + _this.curlatlong + "</h4>";
                _this.addInfoWindow(marker, content);
            }
            else {
                var mapOptions = {
                    center: new google.maps.LatLng(12, 72),
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
                var marker = new google.maps.Marker({
                    map: _this.map,
                    animation: google.maps.Animation.DROP,
                    position: _this.curlatlong
                });
                var content = "<h4> " + _this.curlatlong + "</h4>";
                _this.addInfoWindow(marker, content);
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.show = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_popover_popover__["a" /* PopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    HomePage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
        window.localStorage.removeItem('isuser');
        this.afAuth.auth.signOut();
    };
    HomePage.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<h4>Information!</h4>";
        this.addInfoWindow(marker, content);
    };
    HomePage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    HomePage.prototype.tracker = function () {
        var _this = this;
        if (this.track_me) {
            // this.status = "stop tracking me";
            this.track_me = false;
            this.track_status = true;
            this.color = "danger";
        }
        else {
            // this.status = "track me";
            this.track_me = true;
            this.track_status = false;
            this.color = "primary";
        }
        if (this.track_status) {
            var username_1 = window.localStorage.getItem('isuser');
            //places to write watch
            this.watch = this.geolocation.watchPosition();
            this.watch.subscribe(function (data) {
                console.log('watch', data);
                // data can be a set of coordinates, or an error (if an error occurred).
                // data.coords.latitude
                // data.coords.longitude
                if (data) {
                    _this.curlatlong = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
                    var marker = new google.maps.Marker({
                        map: _this.map,
                        animation: google.maps.Animation.DROP,
                        position: _this.curlatlong
                    });
                    var content = "<h4> " + _this.curlatlong + "</h4>";
                    _this.addInfoWindow(marker, content);
                    var coor = data["coords"];
                    var latitude = coor["latitude"];
                    var longitude = coor["longitude"];
                    // NEW ADDED CODE
                    var user = { username: username_1, latitude: latitude, longitude: longitude };
                    console.log(user);
                    _this.db.list('/geotracker_np').push(user).then(function (saved) {
                        console.log('saved', saved);
                    }, function (error) {
                        console.log('error', error);
                    });
                    //watch.delay(9000);
                }
                else {
                    console.log("not getting loc");
                    var mapOptions = {
                        center: new google.maps.LatLng(12, 72),
                        zoom: 15,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
                    var marker = new google.maps.Marker({
                        map: _this.map,
                        animation: google.maps.Animation.DROP,
                        position: _this.curlatlong
                    });
                    var content = "<h4> " + _this.curlatlong + "</h4>";
                    _this.addInfoWindow(marker, content);
                }
            }, function (err) {
                console.log("something went wrong in loc");
                console.log(err);
            });
        }
        else {
            //  this.watch = this.geolocation.watchPosition();
            // this.watch.unsubscribe();
            console.log("stoped");
        }
    };
    HomePage.prototype.trace = function () {
        var _this = this;
        var username = window.localStorage.getItem('isuser');
        // let username="dhgs@gbbh.bjnn";//took this bec i wanted a user whose data was stored in firebase
        this._subscribe = this.db.list('/geotracker_np', function (ref) { return ref.orderByChild('username').equalTo(username); }).valueChanges().subscribe(function (loc) {
            for (var item in loc) {
                console.log("hi");
                var sing_loc = loc[item];
                _this.curlatlong = new google.maps.LatLng(sing_loc["latitude"], sing_loc["longitude"]);
                var marker = new google.maps.Marker({
                    map: _this.map,
                    animation: google.maps.Animation.DROP,
                    position: _this.curlatlong
                });
                var content = "<h4> " + _this.curlatlong + "</h4>";
                _this.addInfoWindow(marker, content);
                // console.log(sing_loc["latitude"]);
                // let lat=item[]
                /* let a=loc[item];
              let dat= a["data"];
              let timestamp=dat["timestamp"];
              let date: Date = new Date(timestamp);
              let day=new Date(Date.UTC(date.getFullYear(), date.getMonth(),date.getDay()));
              console.log(day)
              let d: Date=new Date();
              let compar=new Date(Date.UTC(d.setDate(2018),d.setMonth(2),d.setDate(23)));
              console.log(compar);
              if(day ===this.myDate){
              let coor=dat["coords"];
              let lat=coor["latitude"];
              console.log(lat);
              console.log("hi");
              let latat=a["data"["coords"["latitude"]]];
              console.log(latat);
              let longi=coor["longitude"];
              
              let ionicDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
              
              console.log(ionicDate);
              let locat = new google.maps.LatLng(lat,longi);
              let marker = new google.maps.Marker({
               map: this.map,
               animation: google.maps.Animation.DROP,
               position: locat
             });
             let content = item;
         
             this.addInfoWindow(marker, content);
              }*/
                //
            }
        });
        //  for(let item in this.items)
        //  console.log(item["data"["coords"["latitude"]]]);
        // this._subscribe=this.db.list('/geotracker_np').valueChanges().subscribe(data =>{
        //  this.track = data.filter( messageItem =>messageItem["username"] == username);
        // console.log(this.track.filter(this.track["data"]));
        // loc=this.track.filter(loc1=>loc1["data"]);
        //console.log(this.track.ViewChild("coords"));
        //   console.log(loc);
        //console.log(this.db.collection('data').valueChanges())
        // console.log(this.track);
        //  this.track.snapshotChanges(['data']).subscribe(action=>{
        //    action.forEach(action=>{
        //      console.log(action.coords)
        //  })
        //   })
        //console.log(this.db.list(['data']).valueChanges());
        //})
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'home-page',template:/*ion-inline-start:"C:\nodejs\geotracker\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Map\n    </ion-title>\n    <ion-buttons end>\n      <!--<button ion-button (click)="addMarker()"><ion-icon name="add"></ion-icon>Add Marker</button>\n      <button [color]="color" ion-button (click)="tracker()">{{status}}</button>\n      <button ion-button (click)="logout()">logout</button>-->\n      <button ion-button icon-only (click)="show($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n\n    </ion-buttons> \n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n  <div #map id="map"></div> \n  <button ion-button (click)="onNotify()" >Notify</button>\n</ion-content>'/*ion-inline-end:"C:\nodejs\geotracker\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HomePage);
    return HomePage;
}());

///Not here
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopoverPage = (function () {
    function PopoverPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.status = "track_me";
    }
    PopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverPage');
    };
    PopoverPage.prototype.addMarker = function () {
        this.events.publish('addmarker', '');
    };
    PopoverPage.prototype.tracker = function () {
        if (this.status == "track_me") {
            this.events.publish('tracker', status);
            this.status = "stop_tracker";
        }
        else
            this.status = "track_me";
    };
    PopoverPage.prototype.trace = function () {
        this.events.publish('trace', '');
    };
    PopoverPage.prototype.logout = function () {
        this.events.publish('logout', '');
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popover',template:/*ion-inline-start:"C:\nodejs\geotracker\src\pages\popover\popover.html"*/'<!--\n  Generated template for the PopoverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>popover</ion-title>\n\n    \n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>   \n  <ion-content>\n\n      <ion-list>\n          <button ion-button (click)="addMarker()"><ion-icon name="add"></ion-icon>Add Marker</button>       \n          <button [color]="color" ion-button (click)="tracker()">{{status}}</button>\n          <button ion-button (click)="trace()">show_track</button>\n          <button ion-button (click)="logout()">logout</button>\n          \n        </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\nodejs\geotracker\src\pages\popover\popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\nodejs\geotracker\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\nodejs\geotracker\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\nodejs\geotracker\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\nodejs\geotracker\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(307);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_popover_popover__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var config = {
    apiKey: "AIzaSyDYcyoa621c3o8XXMKJq8bASnRE1iMhWI0",
    authDomain: "geotracker-np.firebaseapp.com",
    databaseURL: "https://geotracker-np.firebaseio.com",
    projectId: "geotracker-np",
    storageBucket: "geotracker-np.appspot.com",
    messagingSenderId: "146377587988"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_popover_popover__["a" /* PopoverPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_popover_popover__["a" /* PopoverPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["a" /* AngularFireAuth */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_register_register__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    // rootPage: any =  HomePage;
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_register_register__["a" /* RegisterPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            if (platform.is('cordova')) {
                // OneSignal Code start:
                // Enable to debug issues:
                // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
                var notificationOpenedCallback = function (jsonData) {
                    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
                };
                window["plugins"].OneSignal
                    .startInit("6cd56549-e88b-43a8-93cd-ed8fe75008b9", "221052015109") //*"YOUR_GOOGLE_PROJECT_NUMBER_IF_ANDROID")
                    .handleNotificationOpened(notificationOpenedCallback)
                    .endInit();
            }
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\nodejs\geotracker\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\nodejs\geotracker\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\nodejs\geotracker\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\nodejs\geotracker\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[286]);
//# sourceMappingURL=main.js.map