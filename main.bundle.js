webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/content-pages/content-pages.module": [
		"./src/app/pages/content-pages/content-pages.module.ts",
		"content-pages.module"
	],
	"./pages/secure-pages/advocate/advocate.module": [
		"./src/app/pages/secure-pages/advocate/advocate.module.ts",
		"common",
		"advocate.module"
	],
	"./pages/secure-pages/corporate/corporate.module": [
		"./src/app/pages/secure-pages/corporate/corporate.module.ts",
		"common",
		"corporate.module"
	],
	"./pages/secure-pages/defendant/defendant.module": [
		"./src/app/pages/secure-pages/defendant/defendant.module.ts",
		"common",
		"defendant.module"
	],
	"./pages/secure-pages/home/home.module": [
		"./src/app/pages/secure-pages/home/home.module.ts",
		"home.module",
		"common"
	],
	"./pages/secure-pages/plaintiff/plaintiff.module": [
		"./src/app/pages/secure-pages/plaintiff/plaintiff.module.ts",
		"plaintiff.module",
		"common"
	],
	"./pages/secure-pages/profile/profile.module": [
		"./src/app/pages/secure-pages/profile/profile.module.ts",
		"common",
		"profile.module"
	],
	"./pages/secure-pages/settings/settings.module": [
		"./src/app/pages/secure-pages/settings/settings.module.ts",
		"common",
		"settings.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_full_full_layout_component__ = __webpack_require__("./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_content_content_layout_component__ = __webpack_require__("./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_routes_full_layout_routes__ = __webpack_require__("./src/app/shared/routes/full-layout.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_routes_content_layout_routes__ = __webpack_require__("./src/app/shared/routes/content-layout.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_auth_auth_guard_service__ = __webpack_require__("./src/app/shared/auth/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    {
        path: '',
        redirectTo: 'pages/comingsoon',
        pathMatch: 'full',
    },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__layouts_full_full_layout_component__["a" /* FullLayoutComponent */], data: { title: 'Home' }, children: __WEBPACK_IMPORTED_MODULE_4__shared_routes_full_layout_routes__["a" /* Full_ROUTES */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__shared_auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__layouts_content_content_layout_component__["a" /* ContentLayoutComponent */], data: { title: 'Content' }, children: __WEBPACK_IMPORTED_MODULE_5__shared_routes_content_layout_routes__["a" /* CONTENT_ROUTES */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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

// import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts_content_content_layout_component__ = __webpack_require__("./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layouts_full_full_layout_component__ = __webpack_require__("./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_auth_auth_service__ = __webpack_require__("./src/app/shared/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_auth_auth_guard_service__ = __webpack_require__("./src/app/shared/auth/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__layouts_full_full_layout_component__["a" /* FullLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_6__layouts_content_content_layout_component__["a" /* ContentLayoutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__shared_auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_9__shared_auth_auth_guard_service__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"content-wrapper\">\r\n        <div class=\"container-fluid\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContentLayoutComponent = /** @class */ (function () {
    function ContentLayoutComponent() {
    }
    ContentLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-content-layout',
            template: __webpack_require__("./src/app/layouts/content/content-layout.component.html"),
            styles: [__webpack_require__("./src/app/layouts/content/content-layout.component.scss")]
        })
    ], ContentLayoutComponent);
    return ContentLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n   <div class=\"app-sidebar\" data-active-color=\"white\" data-background-color=\"black\" data-image=\"assets/img/sidebar-bg/01.jpg\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\"></div>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <app-navbar></app-navbar>\r\n\r\n        <div class=\"main-content\">\r\n            <div class=\"content-wrapper\">\r\n                <div class=\"container-fluid\">\r\n                    <router-outlet></router-outlet>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <app-footer></app-footer>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent() {
    }
    FullLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-full-layout',
            template: __webpack_require__("./src/app/layouts/full/full-layout.component.html"),
            styles: [__webpack_require__("./src/app/layouts/full/full-layout.component.scss")]
        })
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/shared/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth.service.ts":
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
    }
    AuthService.prototype.signupUser = function (name, contact, email, password) {
        console.log(name, contact, email, password);
        //TODO complete
        this.setToken(email);
    };
    AuthService.prototype.signinUser = function (email, password) {
        console.log(email, password);
        //TODO complete
        this.setToken(email);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.clear();
    };
    AuthService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.isAuthenticated = function () {
        console.log('checking auth');
        //TODO complete 
        return this.getToken() ? true : false;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/directives/toggle-fullscreen.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleFullscreenDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull__ = __webpack_require__("./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_screenfull__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToggleFullscreenDirective = /** @class */ (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_screenfull__["enabled"]) {
            __WEBPACK_IMPORTED_MODULE_1_screenfull__["toggle"]();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToggleFullscreenDirective.prototype, "onClick", null);
    ToggleFullscreenDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appToggleFullscreen]'
        })
    ], ToggleFullscreenDirective);
    return ToggleFullscreenDirective;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Footer Starts-->\r\n<footer>\r\n    <div class=\"container-fluid\">\r\n        <p class=\"copyright text-center\">\r\n            &copy; {{currentDate | date: 'yyyy'}} <a>BZone</a> | All rights reserved.\r\n        </p>\r\n    </div>\r\n</footer>\r\n<!--Footer Ends-->"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.currentDate = new Date();
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // moduleId: module.id,
            selector: 'app-footer',
            template: __webpack_require__("./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/shared/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-faded\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle d-lg-none float-left\" data-toggle=\"collapse\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <form class=\"navbar-form navbar-right mt-1\" role=\"search\">\r\n                <div class=\"position-relative has-icon-right\">\r\n                    <input type=\"text\" class=\"form-control round\" placeholder=\"Search\">\r\n                    <div class=\"form-control-position\">\r\n                        <i class=\"ft-search\"></i>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"navbar-container\">\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n                <ul class=\"navbar-nav\">\r\n                    <li class=\"nav-item mr-2\">\r\n                        <a href=\"javascript:;\" class=\"nav-link\" appToggleFullscreen>                            \r\n                            <i class=\"ft-maximize font-medium-3 blue-grey darken-4\"></i>\r\n                            <p class=\"d-none\">Fullscreen</p>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic2\" ngbDropdownToggle>\r\n                            <i class=\"ft-bell font-medium-3 blue-grey darken-4\"></i>\r\n                            <span class=\"notification badge badge-pill badge-danger\">4</span>\r\n                            <p class=\"d-none\">Notifications</p>\r\n                        </a>\r\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\" class=\"notification-dropdown\">\r\n                            <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\r\n                                <i class=\"ft-bell blue-grey lighten-3 float-left d-block font-large-1 mt-1 mr-2\"></i>\r\n                                <span class=\"noti-wrapper\">\r\n                                    <span class=\"noti-title line-height-1 d-block text-bold-400\">New Order Received</span>\r\n                                    <span class=\"noti-text\">Lorem ipsum dolor sit ametitaque in, et!</span>\r\n                                </span>\r\n                            </a>\r\n                            <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\r\n                                <i class=\"ft-bell blue-grey lighten-3 float-left d-block font-large-1 mt-1 mr-2\"></i>\r\n                                <span class=\"noti-wrapper\">\r\n                                    <span class=\"noti-title line-height-1 d-block text-bold-400\">New User Registered</span>\r\n                                    <span class=\"noti-text\">Lorem ipsum dolor sit ametitaque in </span>\r\n                                </span>\r\n                            </a>\r\n                            <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\r\n                                <i class=\"ft-bell blue-grey lighten-3 float-left d-block font-large-1 mt-1 mr-2\"></i>\r\n                                <span class=\"noti-wrapper\">\r\n                                    <span class=\"noti-title line-height-1 d-block text-bold-400\">New Order Received</span>\r\n                                    <span class=\"noti-text\">Lorem ipsum dolor sit ametest?</span>\r\n                                </span>\r\n                            </a>\r\n                            <a class=\"dropdown-item noti-container py-3\">\r\n                                <i class=\"ft-bell blue-grey lighten-3 float-left d-block font-large-1 mt-1 mr-2\"></i>\r\n                                <span class=\"noti-wrapper\">\r\n                                    <span class=\"noti-title line-height-1 d-block text-bold-400\">New User Registered</span>\r\n                                    <span class=\"noti-text\">Lorem ipsum dolor sit ametnatus aut.</span>\r\n                                </span>\r\n                            </a>\r\n                            <a class=\"noti-footer primary text-center d-block border-top border-top-blue-grey border-top-lighten-4 text-bold-400 py-1\">Read All Notifications</a>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic3\" ngbDropdownToggle>\r\n                            <i class=\"ft-user font-medium-3 blue-grey darken-4\"></i>\r\n                            <p class=\"d-none\">User Settings</p>\r\n                        </a>\r\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic3\">\r\n                            <a class=\"dropdown-item py-1\" [routerLink]=\"['/settings']\">\r\n                                <i class=\"ft-settings mr-2\"></i>\r\n                                <span>Settings</span>\r\n                            </a>\r\n                            <a class=\"dropdown-item py-1\" [routerLink]=\"['/profile']\">\r\n                                <i class=\"ft-edit mr-2\"></i>\r\n                                <span>Edit Profile</span>\r\n                            </a>\r\n                            <a class=\"dropdown-item py-1\" href=\"javascript:;\">\r\n                                <i class=\"ft-mail mr-2\"></i>\r\n                                <span>My Inbox</span>\r\n                            </a>\r\n                            <div class=\"dropdown-divider\"></div>\r\n                            <a class=\"dropdown-item\" (click)=\"logout()\">\r\n                                <i class=\"ft-power mr-2\"></i>\r\n                                <span>Logout</span>\r\n                            </a>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("./src/app/shared/auth/auth.service.ts");
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
    function NavbarComponent(router, route, authService) {
        this.router = router;
        this.route = route;
        this.authService = authService;
    }
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/']);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/routes/content-layout.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONTENT_ROUTES; });
//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
var CONTENT_ROUTES = [
    {
        path: 'pages',
        loadChildren: './pages/content-pages/content-pages.module#ContentPagesModule'
    }
];


/***/ }),

/***/ "./src/app/shared/routes/full-layout.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Full_ROUTES; });
//Route for content layout with sidebar, navbar and footer
var Full_ROUTES = [
    {
        path: 'home',
        loadChildren: './pages/secure-pages/home/home.module#HomeModule'
    },
    {
        path: 'advocate',
        loadChildren: './pages/secure-pages/advocate/advocate.module#AdvocateModule'
    },
    {
        path: 'corporate',
        loadChildren: './pages/secure-pages/corporate/corporate.module#CorporateModule'
    },
    {
        path: 'defendant',
        loadChildren: './pages/secure-pages/defendant/defendant.module#DefendantModule'
    },
    {
        path: 'plaintiff',
        loadChildren: './pages/secure-pages/plaintiff/plaintiff.module#PlaintiffModule'
    },
    {
        path: 'profile',
        loadChildren: './pages/secure-pages/profile/profile.module#ProfileModule'
    },
    {
        path: 'settings',
        loadChildren: './pages/secure-pages/settings/settings.module#SettingsModule'
    }
];


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__("./src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__ = __webpack_require__("./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_toggle_fullscreen_directive__ = __webpack_require__("./src/app/shared/directives/toggle-fullscreen.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__directives_toggle_fullscreen_directive__["a" /* ToggleFullscreenDirective */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__directives_toggle_fullscreen_directive__["a" /* ToggleFullscreenDirective */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar-routes.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
var ROUTES = [
    {
        path: '/home', title: 'Home', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '', title: 'Cases', icon: 'ft-life-buoy', class: 'has-sub', badge: '3', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            { path: '/plaintiff', title: 'As Plaintiff', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/defendant', title: 'As Defendant', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/advocate', title: 'As Advocate', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/corporate', title: 'As Corporate', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] }
        ]
    },
    { path: '/settings', title: 'Settings', icon: 'ft-settings', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: 'http://firecodex.blogspot.in/', title: 'Blog', icon: 'ft-edit', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
];


/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar Header starts -->\r\n<div class=\"sidebar-header\">\r\n    <div class=\"logo clearfix\">\r\n        <a [routerLink]=\"['/home']\" class=\"logo-text float-left\">\r\n            <div class=\"logo-img\">\r\n                <img src=\"assets/img/logo.png\" />\r\n            </div>\r\n            <span class=\"text align-middle\">BZone</span>\r\n        </a>\r\n        <a class=\"nav-toggle d-none d-sm-none d-md-none d-lg-block\" id=\"sidebarToggle\" href=\"javascript:;\">\r\n            <i class=\"ft-toggle-right toggle-icon\" data-toggle=\"expanded\"></i>\r\n        </a>\r\n        <a class=\"nav-close d-block d-md-block d-lg-none d-xl-none\" id=\"sidebarClose\" href=\"javascript:;\">\r\n            <i class=\"ft-x\"></i>\r\n        </a>\r\n    </div>\r\n</div>\r\n<!-- Sidebar Header Ends -->\r\n\r\n<!-- Sidebar Content starts -->\r\n<div class=\"sidebar-content\">\r\n    <div class=\"nav-container\">\r\n        <ul class=\"navigation\">\r\n            <!-- First level menu -->\r\n            <li *ngFor=\"let menuItem of menuItems\" [ngClass]=\"[menuItem.class]\" [routerLinkActive]=\"menuItem.submenu.length != 0 ? '' : 'active'\"\r\n                [routerLinkActiveOptions]=\"{exact: true}\">\r\n                <a [routerLink]=\"menuItem.class === '' ? [menuItem.path] : null\" *ngIf=\"!menuItem.isExternalLink; else externalLinkBlock\">\r\n                    <i [ngClass]=\"[menuItem.icon]\"></i>\r\n                    <span class=\"menu-title\">{{menuItem.title}}</span>\r\n                    <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\r\n                </a>\r\n                <ng-template #externalLinkBlock>\r\n                    <a [href]=\"[menuItem.path]\" target=\"_blank\">\r\n                        <i [ngClass]=\"[menuItem.icon]\"></i>\r\n                        <span class=\"menu-title\">{{menuItem.title}}</span>\r\n                        <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\r\n                    </a>\r\n                </ng-template>\r\n                <!-- Second level menu -->\r\n                <ul class=\"menu-content\" *ngIf=\"menuItem.submenu.length > 0\">\r\n                    <li *ngFor=\"let menuSubItem of menuItem.submenu\" [routerLinkActive]=\"menuSubItem.submenu.length > 0 ? '' : 'active'\" [ngClass]=\"[menuSubItem.class]\">\r\n                        <a [routerLink]=\"menuSubItem.submenu.length > 0 ? null : [menuSubItem.path]\" *ngIf=\"!menuSubItem.isExternalLink; else externalSubLinkBlock\">\r\n                            <i [ngClass]=\"[menuSubItem.icon]\"></i>\r\n                            <span class=\"menu-title\">{{menuSubItem.title}}</span>\r\n                            <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\r\n                        </a>\r\n                        <ng-template #externalSubLinkBlock>\r\n                            <a [href]=\"[menuSubItem.path]\">\r\n                                <i [ngClass]=\"[menuSubItem.icon]\"></i>\r\n                                <span class=\"menu-title\">{{menuSubItem.title}}</span>\r\n                                <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\r\n                            </a>\r\n                        </ng-template>\r\n                        <!-- Third level menu -->\r\n                        <ul class=\"menu-content\" *ngIf=\"menuSubItem.submenu.length > 0\">\r\n                            <li *ngFor=\"let menuSubsubItem of menuSubItem.submenu\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n                                [ngClass]=\"[menuSubsubItem.class]\">\r\n                                <a [routerLink]=\"[menuSubsubItem.path]\" *ngIf=\"!menuSubsubItem.isExternalLink; else externalSubSubLinkBlock\">\r\n                                    <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\r\n                                    <span class=\"menu-title\">{{menuSubsubItem.title}}</span>\r\n                                    <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\r\n                                </a>\r\n                                <ng-template #externalSubSubLinkBlock>\r\n                                    <a [href]=\"[menuSubsubItem.path]\">\r\n                                        <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\r\n                                        <span class=\"menu-title\">{{menuSubsubItem.title}}</span>\r\n                                        <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\r\n                                    </a>\r\n                                </ng-template>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_routes_config__ = __webpack_require__("./src/app/shared/sidebar/sidebar-routes.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        $.getScript('./assets/js/app-sidebar.js');
        this.menuItems = __WEBPACK_IMPORTED_MODULE_1__sidebar_routes_config__["a" /* ROUTES */].filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // moduleId: module.id,
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/shared/sidebar/sidebar.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], SidebarComponent);
    return SidebarComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map