webpackJsonp(["defendant.module"],{

/***/ "./src/app/pages/secure-pages/defendant/defendant-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefendantRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defendant_component__ = __webpack_require__("./src/app/pages/secure-pages/defendant/defendant.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__defendant_component__["a" /* DefendantComponent */],
        data: {
            title: 'Defendant'
        }
    }
];
var DefendantRoutingModule = /** @class */ (function () {
    function DefendantRoutingModule() {
    }
    DefendantRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        })
    ], DefendantRoutingModule);
    return DefendantRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/secure-pages/defendant/defendant.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  defendant works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/secure-pages/defendant/defendant.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/secure-pages/defendant/defendant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefendantComponent; });
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

var DefendantComponent = /** @class */ (function () {
    function DefendantComponent() {
    }
    DefendantComponent.prototype.ngOnInit = function () {
    };
    DefendantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-defendant',
            template: __webpack_require__("./src/app/pages/secure-pages/defendant/defendant.component.html"),
            styles: [__webpack_require__("./src/app/pages/secure-pages/defendant/defendant.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DefendantComponent);
    return DefendantComponent;
}());



/***/ }),

/***/ "./src/app/pages/secure-pages/defendant/defendant.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefendantModule", function() { return DefendantModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defendant_routing_module__ = __webpack_require__("./src/app/pages/secure-pages/defendant/defendant-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_directives_match_height_directive__ = __webpack_require__("./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defendant_component__ = __webpack_require__("./src/app/pages/secure-pages/defendant/defendant.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DefendantModule = /** @class */ (function () {
    function DefendantModule() {
    }
    DefendantModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__defendant_routing_module__["a" /* DefendantRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_directives_match_height_directive__["a" /* MatchHeightModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__defendant_component__["a" /* DefendantComponent */]],
            exports: [],
            providers: []
        })
    ], DefendantModule);
    return DefendantModule;
}());



/***/ })

});
//# sourceMappingURL=defendant.module.chunk.js.map