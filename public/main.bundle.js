webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_contact_contact_component__ = __webpack_require__("./src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_services_services_component__ = __webpack_require__("./src/app/components/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_faq_faq_component__ = __webpack_require__("./src/app/components/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_uhome_uhome_component__ = __webpack_require__("./src/app/components/uhome/uhome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_fpassword_fpassword_component__ = __webpack_require__("./src/app/components/fpassword/fpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_uhome_unavbar_unavbar_component__ = __webpack_require__("./src/app/components/uhome/unavbar/unavbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_uhome_udashboard_udashboard_component__ = __webpack_require__("./src/app/components/uhome/udashboard/udashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_uhome_tutorials_tutorials_component__ = __webpack_require__("./src/app/components/uhome/tutorials/tutorials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_uhome_questions_questions_component__ = __webpack_require__("./src/app/components/uhome/questions/questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_uhome_exams_exams_component__ = __webpack_require__("./src/app/components/uhome/exams/exams.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_uhome_ustatus_ustatus_component__ = __webpack_require__("./src/app/components/uhome/ustatus/ustatus.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//services


















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */] },
    {
        path: 'uhome', component: __WEBPACK_IMPORTED_MODULE_11__components_uhome_uhome_component__["a" /* UhomeComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_16__components_uhome_udashboard_udashboard_component__["a" /* UdashboardComponent */] },
            { path: 'tutorials', component: __WEBPACK_IMPORTED_MODULE_17__components_uhome_tutorials_tutorials_component__["a" /* TutorialsComponent */] },
            { path: 'questions', component: __WEBPACK_IMPORTED_MODULE_18__components_uhome_questions_questions_component__["a" /* QuestionsComponent */] },
            { path: 'exams', component: __WEBPACK_IMPORTED_MODULE_19__components_uhome_exams_exams_component__["a" /* ExamsComponent */] },
            { path: 'status', component: __WEBPACK_IMPORTED_MODULE_20__components_uhome_ustatus_ustatus_component__["a" /* UstatusComponent */] },
        ]
    },
    { path: 'forgotpass', component: __WEBPACK_IMPORTED_MODULE_14__components_fpassword_fpassword_component__["a" /* FpasswordComponent */] },
    { path: 'features', component: __WEBPACK_IMPORTED_MODULE_10__components_faq_faq_component__["a" /* FaqComponent */] },
    { path: 'aboutus', component: __WEBPACK_IMPORTED_MODULE_8__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_9__components_services_services_component__["a" /* ServicesComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_uhome_uhome_component__["a" /* UhomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_fpassword_fpassword_component__["a" /* FpasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_uhome_unavbar_unavbar_component__["a" /* UnavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_uhome_udashboard_udashboard_component__["a" /* UdashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_uhome_tutorials_tutorials_component__["a" /* TutorialsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_uhome_questions_questions_component__["a" /* QuestionsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_uhome_exams_exams_component__["a" /* ExamsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_uhome_ustatus_ustatus_component__["a" /* UstatusComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/faq/faq.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  faq works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-faq',
            template: __webpack_require__("./src/app/components/faq/faq.component.html"),
            styles: [__webpack_require__("./src/app/components/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "footer.page-footer {\r\n   \r\n    height:10%;\r\n    padding:10px;\r\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = " <!--Footer-->\n <footer class=\"page-footer blue \">\n\n  <!--Copyright-->\n  <div class=\"\">\n      <div class=\"container center\">\n          © 2018 Copyright:\n          <a href=\"https://www.MDBootstrap.com\">o-examination.com </a>\n\n      </div>\n  </div>\n  <!--/.Copyright-->\n\n</footer>\n<!--/.Footer-->"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/fpassword/fpassword.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/fpassword/fpassword.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  fpassword works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/fpassword/fpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FpasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FpasswordComponent = /** @class */ (function () {
    function FpasswordComponent() {
    }
    FpasswordComponent.prototype.ngOnInit = function () {
    };
    FpasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fpassword',
            template: __webpack_require__("./src/app/components/fpassword/fpassword.component.html"),
            styles: [__webpack_require__("./src/app/components/fpassword/fpassword.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FpasswordComponent);
    return FpasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".view2{\r\n      background-size: cover;\r\n      min-height: 90vh;\r\n      opacity:0.9;\r\n    }\r\n    .full-bg-img {\r\n        color: #fff;\r\n    }\r\n    .home{\r\n     display:-ms-grid;\r\n     display:grid;\r\n     margin-top:5vh;\r\n\r\n }\r\n    .home>li{\r\n     list-style: none;\r\n }\r\n    .features-section{\r\n    padding:10px;\r\n    border-top:1px solid #222;\r\n    border-bottom:1px solid #0bf;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n }\r\n    .stitle{\r\n     text-align: center;\r\n     font-weight: bold;\r\n     text-decoration: underline;\r\n }\r\n    .features{\r\n     background: #fff;\r\n     padding:30px;\r\n     display:-ms-grid;\r\n     display:grid;\r\n     -ms-grid-columns: 1fr 1fr 1fr 1fr;\r\n         grid-template-columns: 1fr 1fr 1fr 1fr;\r\n }\r\n    .features>div{\r\n     margin:10px;\r\n }\r\n    .services{\r\n     padding:10px;\r\n }\r\n    .services-card{\r\n    display:-ms-grid;\r\n    display:grid;\r\n    -ms-grid-columns: 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr;\r\n    grid-row-gap: 2rem;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    padding:30px;\r\n    height:400px;\r\n }\r\n    .simg{\r\n    width:500px;\r\n    height:250px;\r\n    padding:5px;\r\n    border-radius: 10px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    \r\n }"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n<!--Mask-->\n<div class=\"view2 hm-black-light\">\n  <div class=\"full-bg-img flex-center container\">\n      <ul class=\"home\">\n          <li>\n              <h1 class=\"display-4 mb-5 mt-5 pt-5 wow fadeInUp title\">\n                  <strong>Welcome to Online Examination portal</strong>\n              </h1>\n              <p>Learn and practice more for competative Exams...</p>\n          </li>\n          <li>\n            <a href=\"\" class=\"btn btn-primary btn-rounded mb-4 waves-light\" data-toggle=\"modal\" data-target=\"#modalLoginForm\" mdbRippleRadius>Login</a>\n            <a href=\"\" class=\"btn btn-success btn-rounded mb-4 waves-light\" data-toggle=\"modal\" data-target=\"#modalRegisterForm\" mdbRippleRadius>Register </a>\n          </li>                  \n          </ul>   \n  </div>\n</div>\n\n<!-- sections -->\n<section class=\"features-section\">\n  <h1 class=\"stitle\">Features</h1>\n    <div class=\"features\">                         \n    <!--Card--> <div class=\"card\">\n        <!--Card image-->\n        <div class=\"view overlay\">\n          <img src=\"https://mdbootstrap.com/img/Photos/Others/food.jpg\" class=\"img-fluid\" alt=\"sample\">\n          <a><div class=\"mask rgba-white-slight\"></div></a>\n        </div>\n        <!--/.Card image-->\n        <!--Card content-->\n        <div class=\"card-body\">\n          <!--Title-->\n          <h4 class=\"card-title\">Learning</h4>\n          <hr>\n          <!--Text-->\n          <p class=\"font-small grey-dark-text mb-0\">We are providing tutorials to get start and revise the topics and made yourself perfect to attain the exam.</p><a href=\"#\">Read more....</a>\n        </div>\n        <!--/.Card content-->\n      </div> <!--/.Card-->\n\n      <!--Card--> <div class=\"card\">\n        <!--Card image-->\n        <div class=\"view overlay\">\n            <img src=\"https://mdbootstrap.com/img/Photos/Others/food.jpg\" class=\"img-fluid\" alt=\"sample\">\n            <a><div class=\"mask rgba-white-slight\"></div></a>\n          </div>\n          <!--/.Card image-->\n          <!--Card content-->\n          <div class=\"card-body\">\n            <!--Title-->\n            <h4 class=\"card-title\">Card title</h4>\n            <hr>\n            <!--Text-->\n            <p class=\"font-small grey-dark-text mb-0\">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href=\"#\">Read more....</a>\n          </div>\n          <!--/.Card content-->\n        </div> <!--/.Card-->\n\n        <!--Card--> <div class=\"card\">\n        <!--Card image-->\n        <div class=\"view overlay\">\n            <img src=\"https://mdbootstrap.com/img/Photos/Others/food.jpg\" class=\"img-fluid\" alt=\"sample\">\n            <a><div class=\"mask rgba-white-slight\"></div></a>\n          </div>\n          <!--/.Card image-->\n          <!--Card content-->\n          <div class=\"card-body\">\n            <!--Title-->\n            <h4 class=\"card-title\">Card title</h4>\n            <hr>\n            <!--Text-->\n            <p class=\"font-small grey-dark-text mb-0\">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href=\"#\">Read more....</a>\n          </div>\n          <!--/.Card content-->\n        </div> <!--/.Card-->\n\n        <!--Card--> <div class=\"card\">\n        <!--Card image-->\n        <div class=\"view overlay\">\n            <img src=\"https://thumbs.dreamstime.com/b/growth-graph-chart-29230391.jpg\" class=\"img-fluid\" alt=\"sample\">\n            <a><div class=\"mask rgba-white-slight\"></div></a>\n          </div>\n          <!--/.Card image-->\n          <!--Card content-->\n          <div class=\"card-body\">\n            <!--Title-->\n            <h4 class=\"card-title\">Performance</h4>\n            <hr>\n            <!--Text-->\n            <p class=\"font-small grey-dark-text mb-0\">We track the students tests and results on that basis we calculate performance and statistics of student to provide better guide.</p><a href=\"#\">Read more....</a>\n          </div>\n          <!--/.Card content-->\n        </div> <!--/.Card-->\n      </div>                         \n</section>\n\n<section class=\"features-section\">\n    <h1 class=\"stitle\">Services</h1>\n      <div class=\"services\">                         \n     \n          <!--Card--> <div class=\"services-card\">\n          <!--Card image-->\n          <div class=\"view overlay\">\n              <img src=\"../../assets/images/lpage.jpg\" class=\"simg z-depth-1\" alt=\"sample\">\n              <a><div class=\"mask rgba-white-slight\"></div></a>\n            </div>\n            <!--/.Card image-->\n            <!--Card content-->\n            <div class=\"card-body\">\n              <!--Title-->\n              <h4 class=\"card-title\">Card title</h4>\n              <hr>\n              <!--Text-->\n              <p class=\"font-small grey-dark-text mb-0\">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href=\"#\">Read more....</a>\n            </div>\n            <!--/.Card content-->\n          </div> <!--/.Card-->\n\n           <!--Card--> <div class=\"services-card\">\n              <!--Card content-->\n            <div class=\"card-body\">\n                <!--Title-->\n                <h4 class=\"card-title\">Card title</h4>\n                <hr>\n                <!--Text-->\n                <p class=\"font-small grey-dark-text mb-0\">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href=\"#\">Read more....</a>\n              </div>\n              <!--/.Card content-->\n          <!--Card image-->\n          <div class=\"view overlay\">\n              <img src=\"https://mdbootstrap.com/img/Photos/Others/food.jpg\" class=\"simg z-depth-1\" alt=\"sample\">\n              <a><div class=\"mask rgba-white-slight\"></div></a>\n            </div>\n            <!--/.Card image-->\n          </div> <!--/.Card-->\n\n           <!--Card--> <div class=\"services-card\">\n          <!--Card image-->\n          <div class=\"view overlay\">\n              <img src=\"https://mdbootstrap.com/img/Photos/Others/food.jpg\" class=\"simg z-depth-1\" alt=\"sample\">\n              <a><div class=\"mask rgba-white-slight\"></div></a>\n            </div>\n            <!--/.Card image-->\n            <!--Card content-->\n            <div class=\"card-body\">\n              <!--Title-->\n              <h4 class=\"card-title\">Card title</h4>\n              <hr>\n              <!--Text-->\n              <p class=\"font-small grey-dark-text mb-0\">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href=\"#\">Read more....</a>\n            </div>\n            <!--/.Card content-->\n          </div> <!--/.Card-->\n\n\n        </div>                         \n  </section>\n\n  <section class=\"features-section\">\n      <h1 class=\"stitle\">Developers</h1>\n        <div class=\"features\">                         \n            <div class=\"card testimonial-card\">\n                <!--Avatar-->\n                <div class=\"avatar mx-auto white\"><img src=\"../../assets/images/pic.png\" class=\"rounded-circle\" width=\"100\" height=\"100\">\n                </div>\n        \n                <div class=\"card-body\">\n                    <!--Name-->\n                    <h4 class=\"card-title mx-auto\">Anna Doe</h4>\n                    <hr>\n                    <!--Quotation-->\n                    <p><i class=\"fa fa-quote-left\"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>\n                </div>\n            </div>\n            <!--/.Card-->\n    \n          <div class=\"card testimonial-card\">\n              <!--Avatar-->\n              <div class=\"avatar mx-auto white\"><img src=\"../../assets/images/pic.png\" class=\"rounded-circle\" width=\"100\" height=\"100\">\n              </div>\n      \n              <div class=\"card-body\">\n                  <!--Name-->\n                  <h4 class=\"card-title mx-auto\">Anna Doe</h4>\n                  <hr>\n                  <!--Quotation-->\n                  <p><i class=\"fa fa-quote-left\"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>\n              </div>\n          </div>\n          <!--/.Card-->\n    \n            <div class=\"card testimonial-card\">\n                <!--Avatar-->\n                <div class=\"avatar mx-auto white\"><img src=\"../../assets/images/pic.png\" class=\"rounded-circle\" width=\"100\" height=\"100\">\n                </div>\n        \n                <div class=\"card-body\">\n                    <!--Name-->\n                    <h4 class=\"card-title mx-auto\">Anna Doe</h4>\n                    <hr>\n                    <!--Quotation-->\n                    <p><i class=\"fa fa-quote-left\"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>\n                </div>\n            </div>\n            <!--/.Card-->\n    \n           <!--Card-->\n    <div class=\"card testimonial-card\">\n        <!--Avatar-->\n        <div class=\"avatar mx-auto white\"><img src=\"../../assets/images/pic.png\"class=\"rounded-circle\" width=\"100\" height=\"100\">\n        </div>\n\n        <div class=\"card-body\">\n            <!--Name-->\n            <h4 class=\"card-title mx-auto\">Anna Doe</h4>\n            <hr>\n            <!--Quotation-->\n            <p><i class=\"fa fa-quote-left\"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>\n        </div>\n    </div>\n    <!--/.Card-->\n  </div>                         \n</section>\n\n<!--login model-->\n<div class=\"modal fade\" id=\"modalLoginForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header text-center\">\n                <h4 class=\"modal-title w-100 font-weight-bold\">Sign in</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n           <form>\n            <div class=\"modal-body mx-3\">\n                <div class=\"md-form mb-5\">\n                    <i class=\"fa fa-envelope prefix grey-text\"></i>\n                    <input type=\"email\" id=\"defaultForm-email\" class=\"form-control validate\">\n                    <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label>\n                </div>\n\n                <div class=\"md-form mb-4\">\n                    <i class=\"fa fa-lock prefix grey-text\"></i>\n                    <input type=\"password\" id=\"defaultForm-pass\" class=\"form-control validate\">\n                    <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-pass\">Your password</label>\n                </div>\n                <input type=\"submit\" value=\"login\" class=\"btn btn-outline-info waves-effect ml-auto\">\n                        Forgot<a href=\"#\" text-md-right> password ?</a> \n            </div>\n            <div class=\"modal-footer\">\n                    <div class=\"options text-center text-md-right mt-1\">\n                       <p>Not a member? <a href=\"#\" class=\"blue-text\" data-toggle=\"modal\" data-target=\"#modalRegisterForm\" data-dismiss=\"modal\">Sign Up</a></p>\n                     </div>\n            </div>\n        </form>   \n        </div>\n    </div>\n</div>\n<!--login model-->\n\n<!--register model-->            \n<div class=\"modal fade\" id=\"modalRegisterForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header text-center default \">\n                <h4 class=\"modal-title w-100 font-weight-bold\">Registration Form</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <form>\n            <div class=\"modal-body mx-3\">\n                <div class=\"md-form mb-5\">\n                    <i class=\"fa fa-user prefix grey-text\"></i>\n                    <input type=\"text\" id=\"orangeForm-name\" class=\"form-control validate\" >\n                    <label data-error=\"wrong\" data-success=\"right\" for=\"orangeForm-name\">Your name</label>\n                </div>\n                <div class=\"md-form mb-5\">\n                    <i class=\"fa fa-envelope prefix grey-text\"></i>\n                    <input type=\"email\" id=\"orangeForm-email\" class=\"form-control validate\" ng-bind=\"name\" name=\"email\">\n                    <label data-error=\"wrong\" data-success=\"right\" for=\"orangeForm-email\">Your email</label>\n                </div>\n\n                <div class=\"md-form mb-5\">\n                    <i class=\"fa fa-lock prefix grey-text\"></i>\n                    <input type=\"password\" id=\"orangeForm-pass\" class=\"form-control validate\">\n                    <label data-error=\"wrong\" data-success=\"right\" for=\"orangeForm-pass\">Your password</label>\n                </div>\n\n                <div class=\"md-form mb-4\">\n                    <i class=\"fa fa-exclamation-triangle prefix grey-text\"></i>\n                    <input type=\"password\" id=\"orangeForm-repass\" class=\"form-control validate\">\n                    <label data-error=\"wrong\" data-success=\"right\" for=\"orangeForm-repass\">Re-password</label>\n                </div>\n                <input type=\"submit\" value=\"register\" class=\"btn btn-outline-info waves-effect ml-auto\">\n                      <div class=\"modal-footer\">\n                            <p>Already have an account? <a  class=\"blue-text\" data-toggle=\"modal\" data-target=\"#modalLoginForm\" data-dismiss=\"modal\">Log In</a></p>                      \n                     </div>   \n            </div>\n            </form>\n        </div>\n    </div>\n</div>\n<!--register model-->"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.name = "hello";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Navbar-->\n<nav class=\"navbar navbar-expand-lg navbar-dark navbar-light default-color lighten-4\">\n<div class=\"container\">\n  <!-- Navbar brand -->\n  <a class=\"navbar-brand\" href=\"#\">O-Examination</a>\n\n  <!-- Collapse button -->\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#basicExampleNav\" aria-controls=\"basicExampleNav\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <!-- Collapsible content -->\n  <div class=\"collapse navbar-collapse container\" id=\"basicExampleNav\">\n\n      <!-- Links -->\n      <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item active\">\n              <a class=\"nav-link\" href=\"#\">Home\n                  <span class=\"sr-only\">(current)</span>\n              </a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#features\">Features</a>\n          </li>\n          \n\n          <!-- Dropdown -->\n          <li class=\"nav-item dropdown\">\n              <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Services</a>\n              <div class=\"dropdown-menu dropdown-primary\" aria-labelledby=\"navbarDropdownMenuLink\">\n                  <a class=\"dropdown-item\" href=\"#\">Tutorials</a>\n                  <a class=\"dropdown-item\" href=\"#\">Questions</a>\n                  <a class=\"dropdown-item\" href=\"#\">Exams</a>\n              </div>\n          </li>\n\n          <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\">ContactUs</a>\n            </li>\n      </ul>\n      <!-- Links -->\n\n      <form class=\"form-inline\">\n        <div class=\"md-form mt-0\">\n          \n        </div>\n      </form>\n  </div>\n  <!-- Collapsible content -->\n</div>\n\n</nav>\n<!--/.Navbar-->"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/services/services.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  services works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-services',
            template: __webpack_require__("./src/app/components/services/services.component.html"),
            styles: [__webpack_require__("./src/app/components/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/components/uhome/exams/exams.component.css":
/***/ (function(module, exports) {

module.exports = ".tutbox{\r\n    padding:20px;\r\n    margin-top:10px;\r\n    -webkit-box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n            box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n    margin-bottom: 5px;\r\n    height:80vh;\r\n  }\r\n  .box{\r\n      -webkit-box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n              box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n      height:75vh;\r\n  }\r\n  .scroll{\r\n      overflow-y: scroll;\r\n     \r\n  }\r\n  .scroll::-webkit-scrollbar {\r\n      width: 1em;\r\n  }\r\n  .scroll::-webkit-scrollbar-track {\r\n      -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);\r\n  }\r\n  .scroll::-webkit-scrollbar-thumb {\r\n      background-color: darkgrey;\r\n      outline: 1px solid #222;\r\n    }\r\n  .topic-box{\r\n      \r\n     display:-ms-grid;\r\n      \r\n     display:grid;\r\n     -ms-grid-columns: 1fr 1fr 1fr;\r\n         grid-template-columns: 1fr 1fr 1fr;\r\n     \r\n  }\r\n  .card-image{\r\n      width:150px !important;\r\n      height:150px !important;\r\n  }"

/***/ }),

/***/ "./src/app/components/uhome/exams/exams.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tutbox\">\n            \n    <div class=\"row\">\n  \n        <!-- First column -->\n        <div class=\"col-3\">\n      \n          <!-- Navigation -->\n          <div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n            <a class=\"list-group-item  success-color center \">EXAM</a>\n            <a class=\"list-group-item list-group-item-action active hoverable\" id=\"list-home-list\" data-toggle=\"list\" href=\"#list-apti\" role=\"tab\" aria-controls=\"home\">Aptitute</a>\n            <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-profile-list\" data-toggle=\"list\" href=\"#list-resoning\" role=\"tab\" aria-controls=\"profile\">Resoning</a>\n            <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-messages-list\" data-toggle=\"list\" href=\"#list-english\" role=\"tab\" aria-controls=\"messages\">English</a>\n            <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-settings-list\" data-toggle=\"list\" href=\"#list-ca\" role=\"tab\" aria-controls=\"settings\">current affairs</a>\n          </div>\n          <!-- Navigation -->\n        </div>\n        <!-- First column -->\n        <!-- Second column -->\n        <div class=\"col-9\">\n          <!-- Content -->\n          <div class=\"tab-content\" id=\"nav-tabContent\">\n            <div class=\"tab-pane fade show active \" id=\"list-apti\" role=\"tabpanel\" aria-labelledby=\"list-home-list\">\n                <div class=\"card text-center box scroll\" role=\"scroll\">\n                    <div class=\"card-header success-color white-text fixed\">\n                        Aptitute\n                    </div>\n                    <div class=\"card-body topic-box\">\n                        <!-- Card -->\n                   <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                  <!-- Content -->\n                     <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                    <div>\n                       <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> Aptitute</h5>\n                      <p>test paper</p>\n                      <a class=\"btn btn-pink btn-sm\">Learn</a>\n                    </div>\n                  </div>\n               </div>\n           </div>\n                </div>\n            </div>\n            <!--resoning-->\n            <div class=\"tab-pane fade\" id=\"list-resoning\" role=\"tabpanel\" aria-labelledby=\"list-profile-list\">\n              \n              <div class=\"card text-center box scroll\" role=\"scroll\">\n                  <div class=\"card-header success-color white-text fixed\">\n                      Resoning\n                  </div>\n                  <div class=\"card-body topic-box\">\n                      <!-- Card -->\n                 <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                <!-- Content -->\n                   <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                  <div>\n                     <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> Resoning</h5>\n                    <p>test paper</p>\n                    <a class=\"btn btn-pink btn-sm\">Learn</a>\n                  </div>\n                </div>\n             </div>\n         </div>\n              </div>\n            </div> <!--resoning-->\n               <!--English-->\n            <div class=\"tab-pane fade\" id=\"list-english\" role=\"tabpanel\" aria-labelledby=\"list-messages-list\">\n             \n              <div class=\"card text-center box scroll\" role=\"scroll\">\n                  <div class=\"card-header success-color white-text fixed\">\n                      English\n                  </div>\n                  <div class=\"card-body topic-box\">\n                      <!-- Card -->\n                 <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                <!-- Content -->\n                   <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                  <div>\n                     <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> English</h5>\n                    <p>test paper</p>\n                    <a class=\"btn btn-pink btn-sm\">Learn</a>\n                  </div>\n                </div>\n             </div>\n         </div>\n              </div>\n            </div> <!--English-->\n            <!--current affairs-->\n            <div class=\"tab-pane fade\" id=\"list-ca\" role=\"tabpanel\" aria-labelledby=\"list-settings-list\">\n              \n              <div class=\"card text-center box scroll\" role=\"scroll\">\n                  <div class=\"card-header success-color white-text fixed\">\n                      current affairs\n                  </div>\n\n                  <div class=\"card-body topic-box\">\n                          <!-- Card -->\n                     <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                    <!-- Content -->\n                       <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                      <div>\n                         <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> current affairs</h5>\n                        <p>test paper</p>\n                        <a class=\"btn btn-pink btn-sm\">Learn</a>\n                      </div>\n                    </div>\n                 </div>\n             </div>\n\n\n              </div>\n            </div>\n\n          </div> <!--current affairs-->\n\n          <!-- Content -->\n        </div>\n        <!-- Second column -->\n      \n      </div>\n                  \n\n</div>"

/***/ }),

/***/ "./src/app/components/uhome/exams/exams.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExamsComponent = /** @class */ (function () {
    function ExamsComponent() {
    }
    ExamsComponent.prototype.ngOnInit = function () {
    };
    ExamsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-exams',
            template: __webpack_require__("./src/app/components/uhome/exams/exams.component.html"),
            styles: [__webpack_require__("./src/app/components/uhome/exams/exams.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExamsComponent);
    return ExamsComponent;
}());



/***/ }),

/***/ "./src/app/components/uhome/questions/questions.component.css":
/***/ (function(module, exports) {

module.exports = ".tutbox{\r\n    padding:20px;\r\n    margin-top:10px;\r\n    -webkit-box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n            box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n    margin-bottom: 5px;\r\n    height:80vh;\r\n  }\r\n  .box{\r\n      -webkit-box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n              box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n      height:75vh;\r\n  }\r\n  .scroll{\r\n      overflow-y: scroll;\r\n     \r\n  }\r\n  .scroll::-webkit-scrollbar {\r\n      width: 1em;\r\n  }\r\n  .scroll::-webkit-scrollbar-track {\r\n      -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);\r\n  }\r\n  .scroll::-webkit-scrollbar-thumb {\r\n      background-color: darkgrey;\r\n      outline: 1px solid #222;\r\n    }\r\n  .topic-box{\r\n      \r\n     display:-ms-grid;\r\n      \r\n     display:grid;\r\n     -ms-grid-columns: 1fr 1fr 1fr;\r\n         grid-template-columns: 1fr 1fr 1fr;\r\n     \r\n  }\r\n  .card-image{\r\n      width:160px !important;\r\n      height:150px !important;\r\n  }"

/***/ }),

/***/ "./src/app/components/uhome/questions/questions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" tutbox\">           \n    <div class=\"row\">\n        <!-- First column -->\n        <div class=\"col-3\">\n          <!-- Navigation -->\n          <div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n            <a class=\"list-group-item  info-color center \">QUESTION PAPERS</a>\n            <a class=\"list-group-item list-group-item-action active hoverable\" id=\"list-home-list\" data-toggle=\"list\" href=\"#list-apti\" role=\"tab\" aria-controls=\"home\">Aptitute</a>\n            <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-profile-list\" data-toggle=\"list\" href=\"#list-resoning\" role=\"tab\" aria-controls=\"profile\">Resoning</a>\n            <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-messages-list\" data-toggle=\"list\" href=\"#list-english\" role=\"tab\" aria-controls=\"messages\">English</a>\n            <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-settings-list\" data-toggle=\"list\" href=\"#list-ca\" role=\"tab\" aria-controls=\"settings\">current affairs</a>\n            <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-settings-list\" data-toggle=\"list\" href=\"#list-py\" role=\"tab\" aria-controls=\"settings\">Previous year</a>\n          </div>\n          <!-- Navigation -->\n        </div>\n        <!-- First column -->\n\n        <!-- Second column -->\n        <div class=\"col-9\">\n          <!-- Content -->\n          <div class=\"tab-content\" id=\"nav-tabContent\">\n            <div class=\"tab-pane fade show active \" id=\"list-apti\" role=\"tabpanel\" aria-labelledby=\"list-home-list\">\n                <div class=\"card text-center box scroll\" role=\"scroll\">\n                    <div class=\"card-header success-color white-text fixed\">\n                        Aptitute\n                    </div>\n                    <div class=\"card-body topic-box\">\n                        <!-- Card -->\n                   <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                  <!-- Content -->\n                     <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                    <div>\n                       <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> Aptitute</h5>\n                      <p>test paper</p>\n                      <a class=\"btn btn-pink btn-sm\">Download</a>\n                    </div>\n                  </div>\n               </div>\n           </div>\n                </div>\n            </div>\n            <!--resoning-->\n            <div class=\"tab-pane fade\" id=\"list-resoning\" role=\"tabpanel\" aria-labelledby=\"list-profile-list\">\n              \n              <div class=\"card text-center box scroll\" role=\"scroll\">\n                  <div class=\"card-header success-color white-text fixed\">\n                      Resoning\n                  </div>\n                  <div class=\"card-body topic-box\">\n                      <!-- Card -->\n                 <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                <!-- Content -->\n                   <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                  <div>\n                     <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> Resoning</h5>\n                    <p>test paper</p>\n                    <a class=\"btn btn-pink btn-sm\">Download</a>\n                  </div>\n                </div>\n             </div>\n         </div>\n              </div>\n            </div> <!--resoning-->\n               <!--English-->\n            <div class=\"tab-pane fade\" id=\"list-english\" role=\"tabpanel\" aria-labelledby=\"list-messages-list\">\n              <div class=\"card text-center box scroll\" role=\"scroll\">\n                  <div class=\"card-header success-color white-text fixed\">\n                      English\n                  </div>\n                  <div class=\"card-body topic-box\">\n                      <!-- Card -->\n                 <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                <!-- Content -->\n                   <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                  <div>\n                     <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> English</h5>\n                    <p>test paper</p>\n                    <a class=\"btn btn-pink btn-sm\">Download</a>\n                  </div>\n                </div>\n             </div>\n         </div>\n       </div>\n      </div> <!--English-->\n            <!--current affairs-->\n            <div class=\"tab-pane fade\" id=\"list-ca\" role=\"tabpanel\" aria-labelledby=\"list-settings-list\"> \n              <div class=\"card text-center box scroll\" role=\"scroll\">\n                  <div class=\"card-header success-color white-text fixed\">\n                      current affairs\n                  </div>\n\n                  <div class=\"card-body topic-box\">\n                          <!-- Card -->\n                     <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                    <!-- Content -->\n                       <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                      <div>\n                         <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> current affairs</h5>\n                        <p>test paper</p>\n                        <a class=\"btn btn-pink btn-sm\">Download</a>\n                      </div>\n                    </div>\n                 </div>\n             </div>\n            </div>\n      </div><!--current affairs-->\n\n               <!--Previous Year-->\n               <div class=\"tab-pane fade\" id=\"list-py\" role=\"tabpanel\" aria-labelledby=\"list-messages-list\">\n                  <div class=\"card text-center box scroll\" role=\"scroll\">\n                      <div class=\"card-header success-color white-text fixed\">\n                          Previous Year Question Paper\n                      </div>\n                      <div class=\"card-body topic-box\">\n                          <!-- Card -->\n                     <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                    <!-- Content -->\n                       <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                      <div>\n                         <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> SSC(2015)</h5>\n                        <p>test paper</p>\n                        <a class=\"btn btn-pink btn-sm\">Download</a>\n                      </div>\n                    </div>\n                 </div>\n             </div>\n           </div>\n          </div> <!-- Previous Year-->\n\n     </div><!-- Content -->\n  </div> <!-- Second column -->     \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/uhome/questions/questions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent() {
    }
    QuestionsComponent.prototype.ngOnInit = function () {
    };
    QuestionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-questions',
            template: __webpack_require__("./src/app/components/uhome/questions/questions.component.html"),
            styles: [__webpack_require__("./src/app/components/uhome/questions/questions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/components/uhome/tutorials/tutorials.component.css":
/***/ (function(module, exports) {

module.exports = ".tutbox{\r\n  padding:20px;\r\n  margin-top:10px;\r\n  \r\n  margin-bottom: 5px;\r\n  height:80vh;\r\n}\r\n.box{\r\n    -webkit-box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n            box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n    height:75vh;\r\n}\r\n.scroll{\r\n    overflow-y: scroll;\r\n   \r\n}\r\n.scroll::-webkit-scrollbar {\r\n    width: 1em;\r\n}\r\n.scroll::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);\r\n}\r\n.scroll::-webkit-scrollbar-thumb {\r\n    background-color: darkgrey;\r\n    outline: 1px solid #222;\r\n  }\r\n.topic-box{\r\n    \r\n   display:-ms-grid;\r\n    \r\n   display:grid;\r\n   -ms-grid-columns: 1fr 1fr 1fr;\r\n       grid-template-columns: 1fr 1fr 1fr;\r\n   \r\n}\r\n.card-image{\r\n    width:150px !important;\r\n    height:150px !important;\r\n}"

/***/ }),

/***/ "./src/app/components/uhome/tutorials/tutorials.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tutbox\">     \n    <div class=\"row\">\n        <!-- First column -->\n        <div class=\"col-3\">\n          <!-- Navigation -->\n          <div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n            <a class=\"list-group-item  success-color center\">TUTORIAL</a>\n            <a class=\"list-group-item list-group-item-action active hoverable\" id=\"list-home-list\" data-toggle=\"list\" href=\"#list-apti\" role=\"tab\" aria-controls=\"home\">Aptitute</a>\n            <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-profile-list\" data-toggle=\"list\" href=\"#list-resoning\" role=\"tab\" aria-controls=\"profile\">Resoning</a>\n            <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-messages-list\" data-toggle=\"list\" href=\"#list-english\" role=\"tab\" aria-controls=\"messages\">English</a>\n            <a class=\"list-group-item list-group-item-action hoverable\" id=\"list-settings-list\" data-toggle=\"list\" href=\"#list-ca\" role=\"tab\" aria-controls=\"settings\">current affairs</a>\n          </div>\n          <!-- Navigation -->\n        </div>\n        <!-- First column -->\n        <!-- Second column -->\n        <div class=\"col-9\">\n          <!-- Content -->\n          <div class=\"tab-content\" id=\"nav-tabContent\">\n            <div class=\"tab-pane fade show active \" id=\"list-apti\" role=\"tabpanel\" aria-labelledby=\"list-home-list\">\n                <div class=\"card text-center box scroll\" role=\"scroll\">\n                    <div class=\"card-header success-color white-text fixed\">\n                        Aptitute\n                    </div>\n                    <div class=\"card-body topic-box\">\n                        <!-- Card -->\n                   <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                  <!-- Content -->\n                     <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                    <div>\n                       <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> Aptitute</h5>\n                      <p>test paper</p>\n                      <a class=\"btn btn-pink btn-sm\">Learn</a>\n                    </div>\n                  </div>\n               </div>\n           </div>\n                </div>\n            </div>\n            <!--resoning-->\n            <div class=\"tab-pane fade\" id=\"list-resoning\" role=\"tabpanel\" aria-labelledby=\"list-profile-list\">\n              \n              <div class=\"card text-center box scroll\" role=\"scroll\">\n                  <div class=\"card-header success-color white-text fixed\">\n                      Resoning\n                  </div>\n                  <div class=\"card-body topic-box\">\n                      <!-- Card -->\n                 <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                <!-- Content -->\n                   <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                  <div>\n                     <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> Resoning</h5>\n                    <p>test paper</p>\n                    <a class=\"btn btn-pink btn-sm\">Learn</a>\n                  </div>\n                </div>\n             </div>\n         </div>\n              </div>\n            </div> <!--resoning-->\n               <!--English-->\n            <div class=\"tab-pane fade\" id=\"list-english\" role=\"tabpanel\" aria-labelledby=\"list-messages-list\">\n             \n              <div class=\"card text-center box scroll\" role=\"scroll\">\n                  <div class=\"card-header success-color white-text fixed\">\n                      English\n                  </div>\n                  <div class=\"card-body topic-box\">\n                      <!-- Card -->\n                 <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                <!-- Content -->\n                   <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                  <div>\n                     <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> English</h5>\n                    <p>test paper</p>\n                    <a class=\"btn btn-pink btn-sm\">Learn</a>\n                  </div>\n                </div>\n             </div>\n         </div>\n              </div>\n            </div> <!--English-->\n            <!--current affairs-->\n            <div class=\"tab-pane fade\" id=\"list-ca\" role=\"tabpanel\" aria-labelledby=\"list-settings-list\">\n              \n              <div class=\"card text-center box scroll\" role=\"scroll\">\n                  <div class=\"card-header success-color white-text fixed\">\n                      current affairs\n                  </div>\n\n                  <div class=\"card-body topic-box\">\n                          <!-- Card -->\n                     <div class=\"card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);\">\n                    <!-- Content -->\n                       <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\">\n                      <div>\n                         <h5 class=\"pink-text\"><i class=\"fa fa-graduation-cap\"></i> current affairs</h5>\n                        <p>test paper</p>\n                        <a class=\"btn btn-pink btn-sm\">Learn</a>\n                      </div>\n                    </div>\n                 </div>\n             </div>\n          </div>\n         </div>\n          </div> <!--current affairs-->\n          <!-- Content -->\n        </div>\n        <!-- Second column -->\n      </div>        \n</div>"

/***/ }),

/***/ "./src/app/components/uhome/tutorials/tutorials.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TutorialsComponent = /** @class */ (function () {
    function TutorialsComponent() {
    }
    TutorialsComponent.prototype.ngOnInit = function () {
    };
    TutorialsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tutorials',
            template: __webpack_require__("./src/app/components/uhome/tutorials/tutorials.component.html"),
            styles: [__webpack_require__("./src/app/components/uhome/tutorials/tutorials.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());



/***/ }),

/***/ "./src/app/components/uhome/udashboard/udashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".tutbox{\r\n    padding:20px;\r\n    margin-top:10px;\r\n    -webkit-box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n            box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);\r\n    margin-bottom: 10px;\r\n    \r\n  }"

/***/ }),

/***/ "./src/app/components/uhome/udashboard/udashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container tutbox\">           \n  \n  <div class=\"row\">\n\n  <div class=\"col-3\">\n       <!--Card Dark-->\n    <div class=\"card card-dark\">\n        <!--Card image-->\n        <div class=\"view overlay\">\n            <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg\" class=\"img-fluid\" alt=\"work desk\">\n            <a>\n                <div class=\"mask rgba-white-slight\"></div>\n            </a>\n        </div>\n        <!--/.Card image-->\n        <!--Card content-->\n        <div class=\"card-body elegant-color white-text\">\n          <!--Social shares button-->\n          <a class=\"activator p-3 mr-2\">WELCOME :</a>\n          <!--Title-->\n          <h4 class=\"card-title\">Jhon Doe</h4>\n          <hr class=\"hr-light\">\n          <!--Text-->\n          <p class=\"font-small mb-4\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n          <a href=\"#!\" class=\"white-text d-flex justify-content-end\"><h5>Profile</h5><span><i class=\"fa fa-chevron-right pl-2\"></i></span></a>\n        </div>\n        <!--/.Card content-->\n    </div>\n    <!--/.Card Dark-->\n  </div>\n\n  <div class=\"col-9\">\n\n    <!--Card-->\n     <div class=\"card card-cascade wider reverse my-4 hoverable\">\n        <!--Card content-->\n        <div class=\"card-body text-center\">\n            <!--Title-->\n            <h4 class=\"card-title\"><strong>My adventure</strong></h4>\n            <p class=\"card-text\">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.\n            </p>\n        </div>\n        <!--/.Card content-->\n    </div>\n    <!--/.Card-->\n\n    \n    <!--Card-->\n    <div class=\"card card-cascade wider reverse my-4 hoverable\">\n        <!--Card content-->\n        <div class=\"card-body text-center\">\n            <!--Title-->\n            <h4 class=\"card-title\"><strong>My adventure</strong></h4>\n            <p class=\"card-text\">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.\n            </p>\n        </div>\n        <!--/.Card content-->\n    </div>\n    <!--/.Card-->\n\n\n    <!--Card-->\n    <div class=\"card card-cascade wider reverse my-4 hoverable\">\n        <!--Card content-->\n        <div class=\"card-body text-center\">\n            <!--Title-->\n            <h4 class=\"card-title\"><strong>My adventure</strong></h4>\n            <p class=\"card-text\">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.\n            </p>\n        </div>\n        <!--/.Card content-->\n    </div>\n    <!--/.Card-->\n  </div>\n\n  </div> <!--ROW-->\n\n</div>"

/***/ }),

/***/ "./src/app/components/uhome/udashboard/udashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UdashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UdashboardComponent = /** @class */ (function () {
    function UdashboardComponent() {
    }
    UdashboardComponent.prototype.ngOnInit = function () {
    };
    UdashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-udashboard',
            template: __webpack_require__("./src/app/components/uhome/udashboard/udashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/uhome/udashboard/udashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UdashboardComponent);
    return UdashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/uhome/uhome.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/uhome/uhome.component.html":
/***/ (function(module, exports) {

module.exports = "<app-unavbar></app-unavbar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/uhome/uhome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UhomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UhomeComponent = /** @class */ (function () {
    function UhomeComponent() {
    }
    UhomeComponent.prototype.ngOnInit = function () {
    };
    UhomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-uhome',
            template: __webpack_require__("./src/app/components/uhome/uhome.component.html"),
            styles: [__webpack_require__("./src/app/components/uhome/uhome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UhomeComponent);
    return UhomeComponent;
}());



/***/ }),

/***/ "./src/app/components/uhome/unavbar/unavbar.component.css":
/***/ (function(module, exports) {

module.exports = ".chip.chip-md {\r\n    height: 42px;\r\n    line-height: 42px;\r\n    border-radius: 24px;\r\n}\r\n\r\n.chip.chip-md img {\r\n    height: 42px;\r\n    width: 42px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.chip.chip-lg {\r\n    height: 52px;\r\n    line-height: 52px;\r\n    border-radius: 26px;\r\n}\r\n\r\n.chip.chip-lg img {\r\n    height: 52px;\r\n    width: 52px;\r\n}"

/***/ }),

/***/ "./src/app/components/uhome/unavbar/unavbar.component.html":
/***/ (function(module, exports) {

module.exports = "  <!--Navbar-->\n  <nav class=\"navbar navbar-expand-lg navbar-dark indigo\">\n       \n    <div class=\"container\">\n    <!-- Navbar brand -->\n    <a class=\"navbar-brand\" href=\"#\">DashBoard</a>\n\n    <!-- Collapse button -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button>\n\n    <!-- Collapsible content -->\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n        <!-- Links -->\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/uhome']\" >Home</a>\n            </li>\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/uhome/tutorials']\" >Tutorials</a>\n            </li>\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/uhome/questions']\">Questions</a>\n            </li>\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/uhome/exams']\">Exams</a>\n            </li>\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/uhome/status']\">Status</a>\n            </li>\n        </ul>\n        <!-- Links -->\n\n        <!-- Search form -->\n        <form class=\"form-inline\">\n          <ul class=\"navbar-nav mr-0\">\n             <!-- Dropdown -->\n             <li class=\"nav-item dropdown\">\n              <a class=\"nav-link  \" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <!--  <i class=\" fa fa-user-circle fa-7x\"></i> -->\n              <div class=\"chip chip-md cyan darken-2 white-text hoverable\">\n                    <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img(28).jpg\" alt=\"Contact Person\"> Martha Lores\n                </div>\n              </a>\n              <div class=\"dropdown-menu dropdown-primary\" aria-labelledby=\"navbarDropdownMenuLink\">\n                  <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\n                  <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-cog\"></i> Settings</a>\n                  <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalConfirmlogout\">\n                      <i class=\"fa fa-share-square\"></i> Signout</a>\n              </div>\n          </li>\n          </ul>\n        </form>\n    </div>\n    <!-- Collapsible content -->\n  </div>\n</nav>\n<!--/.Navbar-->\n              \n<!--Modal: modalConfirmDelete-->\n<div class=\"modal fade\" id=\"modalConfirmlogout\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm modal-notify modal-danger\" role=\"document\">\n        <!--Content-->\n        <div class=\"modal-content text-center\">\n            <!--Header-->\n            <div class=\"modal-header d-flex justify-content-center\">\n                <p class=\"heading\">Are you sure?</p>\n            </div>\n            <!--Body-->  \n            <!--Footer-->\n            <div class=\"modal-footer flex-center\">\n                <a href=\"https://mdbootstrap.com/product/material-design-for-bootstrap-pro/\" class=\"btn  btn-outline-danger\">Yes</a>\n                <a type=\"button\" class=\"btn  btn-danger waves-effect\" data-dismiss=\"modal\">No</a>\n            </div>\n        </div>\n        <!--/.Content-->\n    </div>\n</div>\n<!--Modal: modalConfirmlogout-->\n\n<!-- Modal: modalPoll -->\n<div class=\"modal fade left\" id=\"modalPoll\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\"\n  data-backdrop=\"false\">\n  <div class=\"modal-dialog modal-full-height modal-left modal-notify modal-info\" role=\"document\">\n    <div class=\"modal-content\">\n      <!--Header-->\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" class=\"white-text\">X</span>\n        </button>\n      </div>\n\n      <!--Body-->\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <i class=\"fa fa-user fa-4x mb-3 animated rotateIn\"></i>\n          <p>\n            <strong>Your opinion matters</strong>\n          </p>\n         \n        </div>\n        <hr>\n        <!-- Radio -->\n        <p class=\"text-center\">\n          <strong>Your rating</strong>\n        </p>\n        <div class=\"form-check mb-4\">\n            <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n        </div>\n\n    <div class=\"form-check mb-4\">\n            <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n    </div>\n\n    <div class=\"form-check mb-4\">\n            <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n    </div>\n    <div class=\"form-check mb-4\">\n            <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n    </div>\n    <div class=\"form-check mb-4\">\n            <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n    </div>\n        <!-- Radio -->\n\n        <p class=\"text-center\">\n          <strong>What could we improve?</strong>\n        </p>\n        <!--Basic textarea-->\n        \n      </div>\n      <!--Footer-->\n    </div>\n  </div>\n</div>\n<!-- Modal: modalPoll -->\n                    "

/***/ }),

/***/ "./src/app/components/uhome/unavbar/unavbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnavbarComponent = /** @class */ (function () {
    function UnavbarComponent() {
    }
    UnavbarComponent.prototype.ngOnInit = function () {
    };
    UnavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-unavbar',
            template: __webpack_require__("./src/app/components/uhome/unavbar/unavbar.component.html"),
            styles: [__webpack_require__("./src/app/components/uhome/unavbar/unavbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UnavbarComponent);
    return UnavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/uhome/ustatus/ustatus.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/uhome/ustatus/ustatus.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/uhome/ustatus/ustatus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UstatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UstatusComponent = /** @class */ (function () {
    function UstatusComponent() {
    }
    UstatusComponent.prototype.ngOnInit = function () {
    };
    UstatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ustatus',
            template: __webpack_require__("./src/app/components/uhome/ustatus/ustatus.component.html"),
            styles: [__webpack_require__("./src/app/components/uhome/ustatus/ustatus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UstatusComponent);
    return UstatusComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = /** @class */ (function () {
    function AuthService() {
        this.uauth = false;
    }
    AuthService.prototype.getFlag = function () {
        return this.uauth;
    };
    AuthService.prototype.setFlag = function (flag) {
        this.uauth = flag;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map