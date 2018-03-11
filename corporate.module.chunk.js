webpackJsonp(["corporate.module"],{

/***/ "./src/app/pages/secure-pages/corporate/corporate-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorporateRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__corporate_component__ = __webpack_require__("./src/app/pages/secure-pages/corporate/corporate.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__corporate_component__["a" /* CorporateComponent */],
        data: {
            title: 'Corporate'
        }
    }
];
var CorporateRoutingModule = /** @class */ (function () {
    function CorporateRoutingModule() {
    }
    CorporateRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        })
    ], CorporateRoutingModule);
    return CorporateRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/secure-pages/corporate/corporate.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  corporate works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/secure-pages/corporate/corporate.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/secure-pages/corporate/corporate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorporateComponent; });
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

var CorporateComponent = /** @class */ (function () {
    function CorporateComponent() {
    }
    CorporateComponent.prototype.ngOnInit = function () {
    };
    CorporateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-corporate',
            template: __webpack_require__("./src/app/pages/secure-pages/corporate/corporate.component.html"),
            styles: [__webpack_require__("./src/app/pages/secure-pages/corporate/corporate.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CorporateComponent);
    return CorporateComponent;
}());



/***/ }),

/***/ "./src/app/pages/secure-pages/corporate/corporate.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporateModule", function() { return CorporateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__corporate_routing_module__ = __webpack_require__("./src/app/pages/secure-pages/corporate/corporate-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_directives_match_height_directive__ = __webpack_require__("./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__corporate_component__ = __webpack_require__("./src/app/pages/secure-pages/corporate/corporate.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CorporateModule = /** @class */ (function () {
    function CorporateModule() {
    }
    CorporateModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__corporate_routing_module__["a" /* CorporateRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_directives_match_height_directive__["a" /* MatchHeightModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__corporate_component__["a" /* CorporateComponent */]],
            exports: [],
            providers: []
        })
    ], CorporateModule);
    return CorporateModule;
}());



/***/ })

});
//# sourceMappingURL=corporate.module.chunk.js.map