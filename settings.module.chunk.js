webpackJsonp(["settings.module"],{

/***/ "./src/app/pages/secure-pages/settings/settings-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_component__ = __webpack_require__("./src/app/pages/secure-pages/settings/settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__settings_component__["a" /* SettingsComponent */],
        data: {
            title: 'Settings'
        }
    }
];
var SettingsRoutingModule = /** @class */ (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/secure-pages/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row\" matchHeight=\"card\">\n\t<div class=\"col-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h4 class=\"card-title\">Version 4.1</h4>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h5 class=\"my-2\">02-22-2018 [4.1]</h5>\n\t\t\t\t\t<h3>Added</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>HTML Front-end Landing Page</li>\n\t\t\t\t\t\t<li>Top fix navbar option (Demo Available)/li>\n\t\t\t\t\t\t<li>HTML template - All 5 Demos now available in downloadable</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Updated</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Angular, NgRx, NG-bootstrap and other Packages updated to latest version.</li>\n\t\t\t\t\t\t<li>Horizontal timeline page now fully converted to typescript version.</li>\n\t\t\t\t\t\t<li>Chat and Inbox page responsive design</li>\n\t\t\t\t\t\t<li>Documentation</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Fixed</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>User Profile page responsive issue.</li>\n\t\t\t\t\t\t<li>IE 11 issue.</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\" matchHeight=\"card\">\n\t<div class=\"col-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h4 class=\"card-title\">Version 4.0</h4>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h5 class=\"my-2\">01-26-2018 [4.0]</h5>\n\t\t\t\t\t<h3>Added</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Chat NgRx page in Angular template</li>\n\t\t\t\t\t\t<li>Taskboard NgRx page in Angular template</li>\n\t\t\t\t\t\t<li>Tags input page in angular and html template</li>\n\t\t\t\t\t\t<li>Switch page in angular and html template</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Updated</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Angular Template and Starter kit Template Angular version updated to latest versiom (5.2.1)</li>\n\t\t\t\t\t\t<li>Bootstrap updated to latest version (Bootstrap 4 Stable) in Angular Template and Starter kit Template and HTML template</li>\n\t\t\t\t\t\t<li>Sweet alert package updated to latest version.</li>\n\t\t\t\t\t\t<li>NG-Bootstrap package updated to latest version.</li>\n\t\t\t\t\t\t<li>NG-Bootstrap Components</li>\n\t\t\t\t\t\t<li>Documentation</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Fixed</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Taskboard page minor bug in Angular template</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\" matchHeight =\"card\">\n\t<div class=\"col-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h4 class=\"card-title\">Version 3.1</h4>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h5 class=\"my-2\">12-26-2017 [3.1]</h5>\n\t\t\t\t\t<h3>Added</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Recent Activity, Chat and Settings Sidebar tabbed panel For Angular and HTML Templates</li>\n\t\t\t\t\t\t<li>Image Cropper page For Angular and HTML Templates</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Updated</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Packages for Angular Template and Starter kit Template updated to latest version</li>\n\t\t\t\t\t\t<li>Documentation</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Fixed</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>IOS scrolling issue</li>\n\t\t\t\t\t\t<li>Menu issue on small screen in starter kit.</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\" matchHeight =\"card\">\n\t<div class=\"col-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h4 class=\"card-title\">Version 3.0</h4>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h5 class=\"my-2\">12-03-2017 [3.0]</h5>\n\t\t\t\t\t<h3>Added</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>HTML(non-angular) Version</li>\t\t\t\t\t\t\n\t\t\t\t\t</ol>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\" matchHeight =\"card\">\n\t<div class=\"col-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h4 class=\"card-title\">Version 2.1</h4>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h5 class=\"my-2\">11-21-2017 [2.1]</h5>\n\t\t\t\t\t<h3>Added</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Search Page</li>\n\t\t\t\t\t\t<li>FAQ Page</li>\n\t\t\t\t\t\t<li>Knowledge Base Page</li>\n\t\t\t\t\t\t<li>Internationalization (i18n) Support</li>\n\t\t\t\t\t\t<li>Authentication Service</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Updated</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Angular Version (5.0.2)</li>\n\t\t\t\t\t\t<li>starter kit</li>\n\t\t\t\t\t\t<li>Documentation</li>\n\t\t\t\t\t\t<li>Calendar</li>\n\t\t\t\t\t\t<li>Inbox</li>\n\t\t\t\t\t\t<li>Chat</li>\n\t\t\t\t\t\t<li>NGX Datatable</li>\n\t\t\t\t\t\t<li>NGX Charts</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Fixed</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Minor Bugs</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\" matchHeight =\"card\">\n\t<div class=\"col-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h4 class=\"card-title\">Version 2.0</h4>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h5 class=\"my-2\">11-10-2017 [2.0]</h5>\n\t\t\t\t\t<h3>Added</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Taskboard</li>\n\t\t\t\t\t\t<li>Audio Player</li>\n\t\t\t\t\t\t<li>Video Player</li>\n\t\t\t\t\t\t<li>Chat - Audio & Video</li>\n\t\t\t\t\t\t<li>Drag n Drop</li>\n\t\t\t\t\t\t<li>Tour</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Updated</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Updated to Angular 5+</li>\n\t\t\t\t\t\t<li>Updated starter kit to Angular 5+</li>\n\t\t\t\t\t\t<li>Documentation</li>\n\t\t\t\t\t\t<li>Calendar</li>\n\t\t\t\t\t\t<li>Sweet Alert</li>\n\t\t\t\t\t\t<li>Data Tables</li>\n\t\t\t\t\t\t<li>Quill Editor</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<h3>Fixed</h3>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Minor Bugs & design flaws</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\" matchHeight =\"card\">\n\t<div class=\"col-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h4 class=\"card-title\">Version 1.0</h4>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Initial Release</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/pages/secure-pages/settings/settings.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/secure-pages/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
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

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("./src/app/pages/secure-pages/settings/settings.component.html"),
            styles: [__webpack_require__("./src/app/pages/secure-pages/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/pages/secure-pages/settings/settings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_routing_module__ = __webpack_require__("./src/app/pages/secure-pages/settings/settings-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_directives_match_height_directive__ = __webpack_require__("./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_component__ = __webpack_require__("./src/app/pages/secure-pages/settings/settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__settings_routing_module__["a" /* SettingsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_directives_match_height_directive__["a" /* MatchHeightModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__settings_component__["a" /* SettingsComponent */]],
            exports: [],
            providers: []
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ })

});
//# sourceMappingURL=settings.module.chunk.js.map