(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"maskmap\">\n  <a href=\"javascript:void(0);\"\n    class=\"hamburger\" title=\"MENU\"\n    [ngClass]=\"{ 'active': isOpen }\"\n    (click)=\"onSwitch()\"\n  ><span>MENU</span></a>\n  <app-search [ngClass]=\"{ 'active': isOpen }\"></app-search>\n  <app-map></app-map>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"map-container\">\n  <div class=\"map-frame\">\n    <div id=\"map\" #maskmap></div>\n  </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masklist/masklist.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masklist/masklist.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pharmacy\">\n  <div\n    class=\"pharmacy__wrap\"\n    *ngFor=\"let item of appStoreService.getPharmacy$ | async\"\n    (click)=\"setInfo(item.geometry, item.properties)\"\n  >\n    <div class=\"pharmacy__title\">{{ item.properties.name }}</div>\n    <div class=\"pharmacy__block-left\">\n      <div class=\"pharmacy__addr\">{{ item.properties.address }}</div>\n      <div class=\"pharmacy__phone\">{{ item.properties.phone }}</div>\n    </div>\n    <div class=\"pharmacy__block-right\">\n      <div class=\"pharmacy__child\">\n      <img src= \"{{assetsUrl}}/child.svg\"/>\n        <p>{{ item.properties.mask_child }}</p>\n      </div>\n      <div class=\"pharmacy__adult\">\n        <img src=\"{{assetsUrl}}/adult.svg\" />\n        <p>{{ item.properties.mask_adult }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search\" [ngClass]=\"{ 'active': isOpen }\">\n  <div class=\"search__header\">\n    <div class=\"search__header-title\">搜尋</div>\n    <div class=\"search__header-city\">\n      <select name=\"\" id=\"city\" (change)=\"onCityChange($event.target.value)\">\n        <option>請選擇</option>\n        <option\n          *ngFor=\"let item of appStoreService.getCity$ | async\"\n          [(value)]=\"item.CityName\"\n          >{{ item.CityName }}</option\n        >\n      </select>\n    </div>\n    <div class=\"search__header-area\">\n      <select name=\"\" id=\"zone\" (change)=\"onAreaChange($event.target.value)\">\n        <option>請選擇</option>\n        <option\n          *ngFor=\"let item of appStoreService.getArea$ | async\"\n          [(value)]=\"item.AreaName\"\n          >{{ item.AreaName }}</option\n        >\n      </select>\n    </div>\n  </div>\n</div>\n<div class=\"search__body\">\n  <!-- <div class=\"search__body-title\">搜尋</div>\n    <div class=\"search__body-city\">\n      <select name=\"\" id=\"city\" (change)=\"onCityChange($event.target.value)\">\n        <option *ngFor=\"let item of appStoreService.getCity$ | async\" [(value)]=\"item.CityName\">{{ item.CityName }}</option>\n      </select>\n    </div>\n    <div class=\"search__body-area\">\n      <select name=\"\" id=\"zone\" (change)=\"onAreaChange($event.target.value)\">\n        <option>請選擇</option>\n        <option *ngFor=\"let item of appStoreService.getArea$ | async\" [(value)]=\"item.AreaName\">{{ item.AreaName }}</option>\n      </select>\n    </div>\n  </div> -->\n  <app-masklist></app-masklist>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




const routes = [
    { path: '', redirectTo: '/maskmap', pathMatch: 'full' },
    {
        path: 'maskmap',
        component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app-store.service.ts":
/*!**************************************!*\
  !*** ./src/app/app-store.service.ts ***!
  \**************************************/
/*! exports provided: AppStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStoreService", function() { return AppStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let AppStoreService = class AppStoreService {
    constructor() {
        this.getCity$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.getCity);
        this.getArea$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.getArea);
        this.getPharmacy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.getCurInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    setCity(ary) {
        this.getCity = ary;
        this.getCity$.next(this.getCity);
    }
    setArea(city) {
        this.getArea = this.getCity.filter(e => e.CityName === city);
        this.getArea$.next(this.getArea[0].AreaList);
    }
    setPharmacy(ary) {
        this.getAllPharmacy = ary;
    }
    setPharmacyList(city, area) {
        const newList = this.getAllPharmacy.filter(e => {
            if (e.properties.address.match('台')) {
                e.properties.address = e.properties.address.replace('台', '臺');
            }
            if (!area) {
                area = '';
            }
            return e.properties.address.match(city + area);
        });
        this.getPharmacy$.next(newList);
    }
    setPharmacyInfo(pos, info) {
        const newInfo = Object.assign({}, info, { coordinates: [pos.coordinates[1], pos.coordinates[0]] });
        this.getCurInfo$.next(newInfo);
    }
};
AppStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppStoreService);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hamburger {\n  display: none;\n  z-index: 10000;\n  position: absolute;\n  top: 1.25rem;\n  left: 1.25rem;\n  width: 50px;\n  height: 45px;\n  padding: 10px;\n  background: #e0e0e0;\n  border-radius: 0.25rem;\n}\n.hamburger span {\n  display: inline-block;\n  text-indent: -9999px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  position: absolute;\n  display: block;\n  cursor: pointer;\n  width: 30px;\n  height: 5px;\n  background: #4F4F4F;\n  margin: 10px 0;\n}\n.hamburger span:before {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: 0;\n  display: block;\n  width: 30px;\n  height: 5px;\n  background: #4F4F4F;\n}\n.hamburger span:after {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  left: 0;\n  display: block;\n  width: 30px;\n  height: 5px;\n  background: #4F4F4F;\n}\n.hamburger.active span {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  background-color: transparent;\n}\n.hamburger.active span:before {\n  top: -0.625rem;\n  -webkit-transform: translateY(10.5px) rotate(45deg);\n          transform: translateY(10.5px) rotate(45deg);\n}\n.hamburger.active span:after {\n  top: -0.625rem;\n  -webkit-transform: translateY(10.5px) rotate(-45deg);\n          transform: translateY(10.5px) rotate(-45deg);\n}\n.maskmap {\n  display: -webkit-box;\n  display: flex;\n}\n.maskmap app-search {\n  position: relative;\n  z-index: 9999;\n  width: 300px;\n  height: 100vh;\n  background: #fff;\n}\n.maskmap app-map {\n  position: relative;\n  width: calc( 100% - 300px );\n}\n@media (max-width: 800px) {\n  .maskmap {\n    display: block;\n  }\n  .maskmap .hamburger {\n    display: block;\n  }\n  .maskmap app-search {\n    position: absolute;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n    -webkit-transform: translateX(-300px);\n            transform: translateX(-300px);\n  }\n  .maskmap app-search.active {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n  .maskmap app-map {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFRoZUYyRV8yMDE5XFx3ZWVrMTAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUMzQ0Y7QUQ0Q0U7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQTdDRixrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0EyQzhCO0VBMUM5QixXQUFBO0VBQ0EsbUJBeUNxQjtFQXhDckIsY0FBQTtBQ0lGO0FESEU7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsV0FnQzRCO0VBL0I1QixXQUFBO0VBQ0EsbUJBOEJtQjtBQ3pCdkI7QURIRTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxXQXFCNEI7RUFwQjVCLFdBQUE7RUFDQSxtQkFtQm1CO0FDZHZCO0FEaUJJO0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLDZCQUFBO0FDZk47QURnQk07RUFDRSxjQUFBO0VBQ0EsbURBQUE7VUFBQSwyQ0FBQTtBQ2RSO0FEZ0JNO0VBQ0UsY0FBQTtFQUNBLG9EQUFBO1VBQUEsNENBQUE7QUNkUjtBRG9CQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ2pCRjtBRGtCRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNoQko7QUQwQkU7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0FDeEJKO0FEMEJFO0VBckJGO0lBc0JJLGNBQUE7RUN2QkY7RUR3QkU7SUFDRSxjQUFBO0VDdEJKO0VEd0JFO0lBQ0Usa0JBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0lBQ0EscUNBQUE7WUFBQSw2QkFBQTtFQ3RCSjtFRHVCSTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7RUNyQk47RUR3QkU7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDdEJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgXCIuLi9hc3NldHMvY29tbW9uXCI7XG5cbiVjbGVhciB7XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbn1cblxuXG5AbWl4aW4gaGFtYnVyZ2VyKCRjb2xvciwgJGljb25XKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6ICRpY29uVztcbiAgaGVpZ2h0OiAkaWNvblcvNjtcbiAgYmFja2dyb3VuZDogJGNvbG9yO1xuICBtYXJnaW46ICRpY29uVy8zIDA7XG4gICY6YmVmb3JlIHtcbiAgICB0cmFuc2l0aW9uOjAuNXM7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLSRpY29uVy8zO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6ICRpY29uVztcbiAgICBoZWlnaHQ6ICRpY29uVy82O1xuICAgIGJhY2tncm91bmQ6ICRjb2xvcjtcbiAgfVxuICAmOmFmdGVyIHtcbiAgICB0cmFuc2l0aW9uOjAuNXM7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogJGljb25XLzM7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogJGljb25XO1xuICAgIGhlaWdodDogJGljb25XLzY7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yO1xuICB9XG59XG5cbi5oYW1idXJnZXIge1xuICBkaXNwbGF5OiBub25lO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IHJlbSgyMHB4KTtcbiAgbGVmdDogcmVtKDIwcHgpO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiByZW0oNHB4KTtcbiAgc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtaW5kZW50OiAtOTk5OXB4O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgQGluY2x1ZGUgaGFtYnVyZ2VyKCM0RjRGNEYsIDMwcHgpO1xuICB9XG4gICYuYWN0aXZlIHtcbiAgICBzcGFuIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgdG9wOiByZW0oLTEwcHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAuNXB4KSByb3RhdGUoNDVkZWcpO1xuICAgICAgfVxuICAgICAgJjphZnRlciB7XG4gICAgICAgIHRvcDogcmVtKC0xMHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwLjVweCkgcm90YXRlKC00NWRlZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5tYXNrbWFwe1xuICBkaXNwbGF5OiBmbGV4O1xuICBhcHAtc2VhcmNoe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gIH1cbiAgLy8gYXBwLW1hc2tsaXN0e1xuICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gICB6LWluZGV4OiA5OTk5O1xuICAvLyAgIGxlZnQ6IDA7XG4gIC8vICAgYm90dG9tOiAwO1xuICAvLyAgIHdpZHRoOiAxMDAlO1xuICAvLyAgIGhlaWdodDogMzAwcHg7XG4gIC8vIH1cbiAgYXBwLW1hcHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAzMDBweCApO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC5oYW1idXJnZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIGFwcC1zZWFyY2h7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCk7XG4gICAgICAmLmFjdGl2ZXtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgICB9XG4gICAgfVxuICAgIGFwcC1tYXB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbn1cbiIsIi5oYW1idXJnZXIge1xuICBkaXNwbGF5OiBub25lO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEuMjVyZW07XG4gIGxlZnQ6IDEuMjVyZW07XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG4uaGFtYnVyZ2VyIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtaW5kZW50OiAtOTk5OXB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogIzRGNEY0RjtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4uaGFtYnVyZ2VyIHNwYW46YmVmb3JlIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjNEY0RjRGO1xufVxuLmhhbWJ1cmdlciBzcGFuOmFmdGVyIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6ICM0RjRGNEY7XG59XG4uaGFtYnVyZ2VyLmFjdGl2ZSBzcGFuIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uaGFtYnVyZ2VyLmFjdGl2ZSBzcGFuOmJlZm9yZSB7XG4gIHRvcDogLTAuNjI1cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAuNXB4KSByb3RhdGUoNDVkZWcpO1xufVxuLmhhbWJ1cmdlci5hY3RpdmUgc3BhbjphZnRlciB7XG4gIHRvcDogLTAuNjI1cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAuNXB4KSByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLm1hc2ttYXAge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1hc2ttYXAgYXBwLXNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLm1hc2ttYXAgYXBwLW1hcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IGNhbGMoIDEwMCUgLSAzMDBweCApO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5tYXNrbWFwIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAubWFza21hcCAuaGFtYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAubWFza21hcCBhcHAtc2VhcmNoIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwMHB4KTtcbiAgfVxuICAubWFza21hcCBhcHAtc2VhcmNoLmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbiAgLm1hc2ttYXAgYXBwLW1hcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    onSwitch() {
        if (!this.isOpen) {
            this.isOpen = true;
        }
        else {
            this.isOpen = false;
        }
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _masklist_masklist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./masklist/masklist.component */ "./src/app/masklist/masklist.component.ts");










// import { LeafletModule } from '@asymmetrik/ngx-leaflet';
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
            _masklist_masklist_component__WEBPACK_IMPORTED_MODULE_9__["MasklistComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-store.service */ "./src/app/app-store.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let AppService = class AppService {
    constructor(httpClient, appStoreService) {
        this.httpClient = httpClient;
        this.appStoreService = appStoreService;
        this.assetsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].assetsUrl;
        this.url = 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR05WGCvc-9Ebzk6FfkBra5PKPTEh9m8EudIpKp7HRJ-woZvl9BsGMrYiRs';
    }
    fetchTaiwanCity(city) {
        return this.httpClient.get(`${this.assetsUrl}/citycounty.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(res => {
            this.appStoreService.setCity(res);
        }));
    }
    fetchPharmacy(area) {
        return this.httpClient.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(res => {
            this.appStoreService.setPharmacy(res.features);
        }));
    }
};
AppService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _app_store_service__WEBPACK_IMPORTED_MODULE_4__["AppStoreService"] }
];
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppService);



/***/ }),

/***/ "./src/app/map/map.component.scss":
/*!****************************************!*\
  !*** ./src/app/map/map.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.leaflet-popup-content:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.map-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.map-frame {\n  height: 100%;\n}\n#map {\n  height: 100%;\n}\n.customPopup {\n  font-family: \"Hiragino Sans CNS\", \"微軟正黑體\", \"Arial\";\n  width: 18.75rem;\n}\n.customPopup__title {\n  font-size: 1.125rem;\n  font-weight: bold;\n  line-height: 1.6875rem;\n}\n.customPopup__addr {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #828282;\n}\n.customPopup__note {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #828282;\n}\n.customPopup__phone {\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #828282;\n}\n.customPopup__child, .customPopup__adult {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #4f4f4f;\n}\n.customPopup__child img, .customPopup__adult img {\n  height: 1.875rem;\n}\n.customPopup__child p, .customPopup__adult p {\n  text-align: center;\n  line-height: 1;\n  margin: 0;\n}\n.customPopup__tel {\n  display: block;\n  margin: 0.5rem 0;\n  line-height: 0;\n  padding: 0.375rem 0;\n  text-align: center;\n  border: 1px solid #f2c94c;\n  box-sizing: border-box;\n  border-radius: 1.25rem;\n}\n.customPopup__google {\n  clear: both;\n  display: block;\n  margin-top: 0.5rem;\n  padding: 0.375rem 0;\n  font-size: 1.25rem;\n  font-weight: bold;\n  text-align: center;\n  color: #fff !important;\n  text-decoration: none !important;\n  border-radius: 1.25rem;\n  background: #f2c94c;\n}\n.customPopup__google img {\n  position: relative;\n  top: 0.125rem;\n  margin-right: 0.5rem;\n}\n.customPopup__block-left {\n  float: left;\n  width: 55%;\n}\n.customPopup__block-right {\n  float: right;\n  width: 45%;\n}\n.customPopup__block-flex {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFwL0Q6XFxUaGVGMkVfMjAxOVxcd2VlazEwL3NyY1xcYXBwXFxtYXBcXG1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNHZDtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBRERKO0FDS0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QURGRjtBQ1FBO0VBRUUsWUFBQTtBRE5GO0FDU0E7RUFDRSxZQUFBO0FETkY7QUNrQkE7RUFDRSxrREFBQTtFQUNBLGVBQUE7QURmRjtBQ2dCRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBRGRKO0FDZ0JFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURkSjtBQ2dCRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FEZEo7QUNnQkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FEZEo7QUNnQkU7RUFFRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBRGZKO0FDZ0JJO0VBQ0UsZ0JBQUE7QURkTjtBQ2dCSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QURkTjtBQ2lCRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FEZko7QUNpQkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBRGZKO0FDZ0JJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QURkTjtBQ2tCSTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FEaEJOO0FDa0JJO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QURoQk47QUNrQkk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtBRGhCTiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ubGVhZmxldC1wb3B1cC1jb250ZW50OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4ubWFwLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG4ubWFwLWZyYW1lIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jbWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY3VzdG9tUG9wdXAge1xuICBmb250LWZhbWlseTogXCJIaXJhZ2lubyBTYW5zIENOU1wiLCBcIuW+rui7n+ato+m7kemrlFwiLCBcIkFyaWFsXCI7XG4gIHdpZHRoOiAxOC43NXJlbTtcbn1cbi5jdXN0b21Qb3B1cF9fdGl0bGUge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDEuNjg3NXJlbTtcbn1cbi5jdXN0b21Qb3B1cF9fYWRkciB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmN1c3RvbVBvcHVwX19ub3RlIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uY3VzdG9tUG9wdXBfX3Bob25lIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5jdXN0b21Qb3B1cF9fY2hpbGQsIC5jdXN0b21Qb3B1cF9fYWR1bHQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNGY0ZjRmO1xufVxuLmN1c3RvbVBvcHVwX19jaGlsZCBpbWcsIC5jdXN0b21Qb3B1cF9fYWR1bHQgaW1nIHtcbiAgaGVpZ2h0OiAxLjg3NXJlbTtcbn1cbi5jdXN0b21Qb3B1cF9fY2hpbGQgcCwgLmN1c3RvbVBvcHVwX19hZHVsdCBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luOiAwO1xufVxuLmN1c3RvbVBvcHVwX190ZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YyYzk0YztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcbn1cbi5jdXN0b21Qb3B1cF9fZ29vZ2xlIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDA7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEuMjVyZW07XG4gIGJhY2tncm91bmQ6ICNmMmM5NGM7XG59XG4uY3VzdG9tUG9wdXBfX2dvb2dsZSBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMC4xMjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuLmN1c3RvbVBvcHVwX19ibG9jay1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1NSU7XG59XG4uY3VzdG9tUG9wdXBfX2Jsb2NrLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogNDUlO1xufVxuLmN1c3RvbVBvcHVwX19ibG9jay1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59IiwiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9jb21tb25cIjtcblxuJWNsZWFyIHtcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjbGVhcjogYm90aDtcbiAgfVxufVxuXG4ubWFwLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICAvLyB3aWR0aDogMTAwJTtcbiAgLy8gaGVpZ2h0OiA1MDBweDtcbiAgLy8gcGFkZGluZzogMzBweDtcbn1cblxuLm1hcC1mcmFtZSB7XG4gIC8vIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNtYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sZWFmbGV0LXBvcHVwIHtcbiAgLy8gJi1jb250ZW50LXdyYXBwZXJ7XG4gIC8vICAgYmFja2dyb3VuZDogIzE1OTtcbiAgLy8gfVxuICAmLWNvbnRlbnQge1xuICAgIEBleHRlbmQgJWNsZWFyO1xuICB9XG59XG5cbi5jdXN0b21Qb3B1cCB7XG4gIGZvbnQtZmFtaWx5OiBcIkhpcmFnaW5vIFNhbnMgQ05TXCIsIFwi5b6u6Luf5q2j6buR6auUXCIsIFwiQXJpYWxcIjtcbiAgd2lkdGg6IHJlbSgzMDBweCk7XG4gICZfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IHJlbSgxOHB4KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogcmVtKDI3cHgpO1xuICB9XG4gICZfX2FkZHIge1xuICAgIGZvbnQtc2l6ZTogcmVtKDE0cHgpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICM4MjgyODI7XG4gIH1cbiAgJl9fbm90ZSB7XG4gICAgZm9udC1zaXplOiByZW0oMTRweCk7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzgyODI4MjtcbiAgfVxuICAmX19waG9uZSB7XG4gICAgbWFyZ2luLXRvcDogcmVtKDhweCk7XG4gICAgZm9udC1zaXplOiByZW0oMTRweCk7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzgyODI4MjtcbiAgfVxuICAmX19jaGlsZCxcbiAgJl9fYWR1bHQge1xuICAgIGZvbnQtc2l6ZTogcmVtKDI0cHgpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNGY0ZjRmO1xuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IHJlbSgzMHB4KTtcbiAgICB9XG4gICAgcCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbiAgJl9fdGVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IHJlbSg4cHgpIDA7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgcGFkZGluZzogcmVtKDZweCkgMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YyYzk0YztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IHJlbSgyMHB4KTtcbiAgfVxuICAmX19nb29nbGUge1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IHJlbSg4cHgpO1xuICAgIHBhZGRpbmc6IHJlbSg2cHgpIDA7XG4gICAgZm9udC1zaXplOiByZW0oMjBweCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogcmVtKDIwcHgpO1xuICAgIGJhY2tncm91bmQ6ICNmMmM5NGM7XG4gICAgaW1nIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogcmVtKDJweCk7XG4gICAgICBtYXJnaW4tcmlnaHQ6IHJlbSg4cHgpO1xuICAgIH1cbiAgfVxuICAmX19ibG9jayB7XG4gICAgJi1sZWZ0IHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgd2lkdGg6IDU1JTtcbiAgICB9XG4gICAgJi1yaWdodCB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB3aWR0aDogNDUlO1xuICAgIH1cbiAgICAmLWZsZXgge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-store.service */ "./src/app/app-store.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet.markercluster */ "./node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js");
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");









let MapComponent = class MapComponent {
    constructor(appService, appStoreService) {
        this.appService = appService;
        this.appStoreService = appStoreService;
        // @ViewChild('maskmap', { static: true }) chartElement: ElementRef;
        this.assetsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].assetsUrl;
        this.curPos = [25.0032999, 121.5540404];
        this.curPos$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](this.curPos);
        this.getPosition();
        this.appStoreService.getPharmacy$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (!res) {
                return;
            }
            const info = res.reduce((total, el) => {
                total.push(Object.assign({}, el.properties, { coordinates: [el.geometry.coordinates[1], el.geometry.coordinates[0]] }));
                return total;
            }, []);
            return info;
        })).subscribe(res => {
            this.renderMap(res, res[0].coordinates);
        });
    }
    ngOnInit() {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_5__["map"]('map', {
            center: [25.0032999, 121.5540404],
            zoom: 15,
            zoomControl: false,
            layers: [leaflet__WEBPACK_IMPORTED_MODULE_5__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; 口罩地圖 by <a href="https://mtwmt.github.io/">Mandy</a>' })]
        });
        this.appStoreService.getCurInfo$.subscribe(res => {
            this.onPharmacy(res);
        });
        this.curPos$.subscribe(res => {
            this.curPos = res;
            this.map.setView(res, 15);
        });
        this.icons = {
            red: this.customIcon('red'),
            orange: this.customIcon('orange'),
            yellow: this.customIcon('yellow'),
            green: this.customIcon('green'),
            blue: this.customIcon('blue'),
            violet: this.customIcon('violet'),
            gold: this.customIcon('gold'),
            grey: this.customIcon('grey'),
        };
    }
    ngOnDestroy() {
        this.curPos$.unsubscribe();
    }
    renderMap(list, cur) {
        this.group = new leaflet__WEBPACK_IMPORTED_MODULE_5__["MarkerClusterGroup"]().addTo(this.map);
        list.map((e, i) => {
            this.addMarker(e);
        });
        this.map.addLayer(this.group);
    }
    onPharmacy(info) {
        this.map
            .setView(info.coordinates, 16)
            .closePopup();
        if (this.prevPoint) {
            this.map.removeLayer(this.prevPoint);
        }
        this.prevPoint = leaflet__WEBPACK_IMPORTED_MODULE_5__["marker"](info.coordinates, { icon: this.icons.red })
            .addTo(this.map)
            .bindPopup(this.customPopup(info))
            .openPopup();
    }
    addMarker(info) {
        const marker = leaflet__WEBPACK_IMPORTED_MODULE_5__["marker"](info.coordinates, { icon: this.icons.grey }).bindPopup(this.customPopup(info));
        this.group.addLayer(marker);
    }
    customPopup(info) {
        // console.log('customPopup', info)
        return `
      <div class="customPopup">
        <div class="customPopup__title">${info.name}</div>
        <div class="customPopup__block-left">
          <div class="customPopup__addr">${info.address}</div>
          <div class="customPopup__note">${info.note}</div>
          <div class="customPopup__phone">${info.phone}</div>
        </div>
        <div class="customPopup__block-right">
          <div class="customPopup__block-flex">
            <div class="customPopup__child">
              <img src="${this.assetsUrl}/child.svg" />
              <p>${info.mask_child}</p>
            </div>
            <div class="customPopup__adult">
              <img src="${this.assetsUrl}/adult.svg" />
              <p>${info.mask_adult}</p>
            </div>
          </div>
          <a href="tel:${info.phone}" class="customPopup__tel">
            <img src="${this.assetsUrl}/tel.svg" />
          </a>
        </div>
        <a href="https://www.google.com/maps/dir/${this.curPos[0]},${this.curPos[1]}/${info.coordinates[0]},${info.coordinates[1]}" class="customPopup__google" target="_blank">
          <img src="${this.assetsUrl}/vecotr.svg" />規劃路線
        </a>
      </div>
    `;
    }
    customIcon(color) {
        return leaflet__WEBPACK_IMPORTED_MODULE_5__["icon"]({
            iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });
    }
    getPosition() {
        navigator.geolocation.getCurrentPosition((data) => {
            const latitude = data.coords.latitude;
            const longitude = data.coords.longitude;
            this.curPos$.next([latitude, longitude]);
        });
    }
};
MapComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _app_store_service__WEBPACK_IMPORTED_MODULE_3__["AppStoreService"] }
];
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.component.scss */ "./src/app/map/map.component.scss")).default]
    })
], MapComponent);

// lat: 22.xxxx  lng: 120.xxxx


/***/ }),

/***/ "./src/app/masklist/masklist.component.scss":
/*!**************************************************!*\
  !*** ./src/app/masklist/masklist.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pharmacy__wrap:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n.pharmacy {\n  height: 100%;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  background: #fff;\n  cursor: pointer;\n}\n\n.pharmacy__wrap {\n  margin: 0.625rem 0.625rem;\n  padding: 1rem 0.625rem;\n  box-shadow: 0px 5px 10px #f2f2f2;\n  border-radius: 0.625rem;\n}\n\n.pharmacy__title {\n  font-size: 1.125rem;\n  font-weight: bold;\n  line-height: 1.6875rem;\n}\n\n.pharmacy__addr {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #828282;\n}\n\n.pharmacy__phone {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #828282;\n}\n\n.pharmacy__child, .pharmacy__adult {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #828282;\n}\n\n.pharmacy__child img, .pharmacy__adult img {\n  height: 2.5rem;\n}\n\n.pharmacy__child p, .pharmacy__adult p {\n  text-align: center;\n}\n\n.pharmacy__block-left {\n  float: left;\n  width: 50%;\n}\n\n.pharmacy__block-right {\n  float: right;\n  width: 50%;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFza2xpc3QvRDpcXFRoZUYyRV8yMDE5XFx3ZWVrMTAvc3JjXFxhcHBcXG1hc2tsaXN0XFxtYXNrbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFza2xpc3QvbWFza2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNGSjs7QURRQTtFQUdFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDUEY7O0FEUUU7RUFFRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtBQ1BKOztBRFNFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDUEo7O0FEU0U7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1BKOztBRFNFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNQSjs7QURTRTtFQUVFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDUko7O0FEU0k7RUFDRSxjQUFBO0FDUE47O0FEU0k7RUFDRSxrQkFBQTtBQ1BOOztBRFdJO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNUTjs7QURXSTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7QUNUTiIsImZpbGUiOiJzcmMvYXBwL21hc2tsaXN0L21hc2tsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9jb21tb25cIjtcblxuJWNsZWFyIHtcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjbGVhcjogYm90aDtcbiAgfVxufVxuXG46aG9zdCB7XG59XG4ucGhhcm1hY3kge1xuICAvLyB3aWR0aDogcmVtKDM1MHB4KTtcbiAgLy8gaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMzBweCk7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJl9fd3JhcCB7XG4gICAgQGV4dGVuZCAlY2xlYXI7XG4gICAgbWFyZ2luOiByZW0oMTBweCkgcmVtKDEwcHgpO1xuICAgIHBhZGRpbmc6IHJlbSgxNnB4KSByZW0oMTBweCk7XG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4ICNmMmYyZjI7XG4gICAgYm9yZGVyLXJhZGl1czogcmVtKDEwcHgpO1xuICB9XG4gICZfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IHJlbSgxOHB4KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogcmVtKDI3cHgpO1xuICB9XG4gICZfX2FkZHIge1xuICAgIGZvbnQtc2l6ZTogcmVtKDE0cHgpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICM4MjgyODI7XG4gIH1cbiAgJl9fcGhvbmUge1xuICAgIGZvbnQtc2l6ZTogcmVtKDE0cHgpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICM4MjgyODI7XG4gIH1cbiAgJl9fY2hpbGQsXG4gICZfX2FkdWx0IHtcbiAgICBmb250LXNpemU6IHJlbSgyNHB4KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzgyODI4MjtcbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiByZW0oNDBweCk7XG4gICAgfVxuICAgIHAge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuICAmX19ibG9jayB7XG4gICAgJi1sZWZ0IHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgJi1yaWdodCB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIH1cbiAgfVxufVxuIiwiLnBoYXJtYWN5X193cmFwOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4ucGhhcm1hY3kge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGhhcm1hY3lfX3dyYXAge1xuICBtYXJnaW46IDAuNjI1cmVtIDAuNjI1cmVtO1xuICBwYWRkaW5nOiAxcmVtIDAuNjI1cmVtO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggI2YyZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG59XG4ucGhhcm1hY3lfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjY4NzVyZW07XG59XG4ucGhhcm1hY3lfX2FkZHIge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5waGFybWFjeV9fcGhvbmUge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5waGFybWFjeV9fY2hpbGQsIC5waGFybWFjeV9fYWR1bHQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLnBoYXJtYWN5X19jaGlsZCBpbWcsIC5waGFybWFjeV9fYWR1bHQgaW1nIHtcbiAgaGVpZ2h0OiAyLjVyZW07XG59XG4ucGhhcm1hY3lfX2NoaWxkIHAsIC5waGFybWFjeV9fYWR1bHQgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5waGFybWFjeV9fYmxvY2stbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlO1xufVxuLnBoYXJtYWN5X19ibG9jay1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/masklist/masklist.component.ts":
/*!************************************************!*\
  !*** ./src/app/masklist/masklist.component.ts ***!
  \************************************************/
/*! exports provided: MasklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasklistComponent", function() { return MasklistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-store.service */ "./src/app/app-store.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let MasklistComponent = class MasklistComponent {
    constructor(appService, appStoreService) {
        this.appService = appService;
        this.appStoreService = appStoreService;
        this.assetsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].assetsUrl;
    }
    ngOnInit() {
    }
    setInfo(pos, info) {
        this.appStoreService.setPharmacyInfo(pos, info);
    }
};
MasklistComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _app_store_service__WEBPACK_IMPORTED_MODULE_3__["AppStoreService"] }
];
MasklistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-masklist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./masklist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/masklist/masklist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./masklist.component.scss */ "./src/app/masklist/masklist.component.scss")).default]
    })
], MasklistComponent);



/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.search {\n  position: relative;\n}\n.search__header {\n  background: #e0e0e0;\n  padding: 1.25rem;\n}\n.search__header-title {\n  padding-left: 1.25rem;\n  text-align: right;\n  color: #4F4F4F;\n  font-weight: bold;\n  font-size: 2.25rem;\n  line-height: 3.375rem;\n}\n.search__header-city, .search__header-area {\n  position: relative;\n  margin-top: 1.25rem;\n}\n.search__header-city:before, .search__header-area:before {\n  position: absolute;\n  top: -0.5rem;\n  left: 1.25rem;\n  padding: 0 0.5rem;\n  font-size: 0.75rem;\n  background: #fff;\n}\n.search__header-city select, .search__header-area select {\n  padding: 0 1.25rem;\n  width: 100%;\n  height: 3.125rem;\n  font-size: 1rem;\n  font-family: \"Hiragino Sans CNS\", \"微軟正黑體\", \"Arial\";\n  border-radius: 3.125rem;\n  border: 0.125rem solid #4F4F4F;\n}\n.search__header-city:before {\n  content: \"縣市\";\n}\n.search__header-area:before {\n  content: \"鄉鎮市區別\";\n}\n.search__body {\n  height: calc(100% - 230px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VhcmNoL0Q6XFxUaGVGMkVfMjAxOVxcd2VlazEwL3NyY1xcYXBwXFxzZWFyY2hcXHNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNhaEI7RUFDRSxrQkFBQTtBRFhGO0FDWUU7RUFFRSxtQkFBQTtFQUVBLGdCQUFBO0FEWko7QUNhSTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FEWE47QUNhSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QURYTjtBQ2FNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRFhSO0FDYU07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrREFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7QURYUjtBQ2VNO0VBQ0UsYUFBQTtBRGJSO0FDaUJNO0VBQ0UsZ0JBQUE7QURmUjtBQ29CRTtFQUNFLDBCQUFBO0FEbEJKIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5zZWFyY2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VhcmNoX19oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICBwYWRkaW5nOiAxLjI1cmVtO1xufVxuLnNlYXJjaF9faGVhZGVyLXRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAzLjM3NXJlbTtcbn1cbi5zZWFyY2hfX2hlYWRlci1jaXR5LCAuc2VhcmNoX19oZWFkZXItYXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbn1cbi5zZWFyY2hfX2hlYWRlci1jaXR5OmJlZm9yZSwgLnNlYXJjaF9faGVhZGVyLWFyZWE6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0wLjVyZW07XG4gIGxlZnQ6IDEuMjVyZW07XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uc2VhcmNoX19oZWFkZXItY2l0eSBzZWxlY3QsIC5zZWFyY2hfX2hlYWRlci1hcmVhIHNlbGVjdCB7XG4gIHBhZGRpbmc6IDAgMS4yNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMy4xMjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiSGlyYWdpbm8gU2FucyBDTlNcIiwgXCLlvq7ou5/mraPpu5Hpq5RcIiwgXCJBcmlhbFwiO1xuICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcbiAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCAjNEY0RjRGO1xufVxuLnNlYXJjaF9faGVhZGVyLWNpdHk6YmVmb3JlIHtcbiAgY29udGVudDogXCLnuKPluIJcIjtcbn1cbi5zZWFyY2hfX2hlYWRlci1hcmVhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi6YSJ6Y6u5biC5Y2A5YilXCI7XG59XG4uc2VhcmNoX19ib2R5IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMzBweCk7XG59IiwiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9jb21tb25cIjtcblxuJWNsZWFyIHtcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjbGVhcjogYm90aDtcbiAgfVxufVxuXG5cblxuXG4uc2VhcmNoe1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICZfX2hlYWRlcntcbiAgICAvLyBoZWlnaHQ6IHJlbSgxNjRweCk7XG4gICAgYmFja2dyb3VuZDogI2UwZTBlMDtcblxuICAgIHBhZGRpbmc6IHJlbSgyMHB4KTtcbiAgICAmLXRpdGxle1xuICAgICAgcGFkZGluZy1sZWZ0OiByZW0oMjBweCk7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIGNvbG9yOiAjNEY0RjRGO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IHJlbSgzNnB4KTtcbiAgICAgIGxpbmUtaGVpZ2h0OiByZW0oNTRweCk7XG4gICAgfVxuICAgICYtY2l0eSwgJi1hcmVhe1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luLXRvcDogcmVtKDIwcHgpO1xuICAgICAgLy8gbWFyZ2luLXRvcDogcmVtKDQwcHgpO1xuICAgICAgJjpiZWZvcmV7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiByZW0oLThweCk7XG4gICAgICAgIGxlZnQ6IHJlbSgyMHB4KTtcbiAgICAgICAgcGFkZGluZzogMCByZW0oOHB4KTtcbiAgICAgICAgZm9udC1zaXplOiByZW0oMTJweCk7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICB9XG4gICAgICBzZWxlY3R7XG4gICAgICAgIHBhZGRpbmc6IHJlbSgwKSByZW0oMjBweCk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IHJlbSg1MHB4KTtcbiAgICAgICAgZm9udC1zaXplOiByZW0oMTZweCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSGlyYWdpbm8gU2FucyBDTlMnLCflvq7ou5/mraPpu5Hpq5QnLCdBcmlhbCc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHJlbSg1MHB4KTtcbiAgICAgICAgYm9yZGVyOiByZW0oMnB4KSBzb2xpZCAjNEY0RjRGO1xuICAgICAgfVxuICAgIH1cbiAgICAmLWNpdHl7XG4gICAgICAmOmJlZm9yZXtcbiAgICAgICAgY29udGVudDogJ+e4o+W4gic7XG4gICAgICB9XG4gICAgfVxuICAgICYtYXJlYXtcbiAgICAgICY6YmVmb3Jle1xuICAgICAgICBjb250ZW50OiAn6YSJ6Y6u5biC5Y2A5YilJztcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuICAmX19ib2R5e1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjMwcHgpO1xuICAgIC8vXG5cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-store.service */ "./src/app/app-store.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let SearchComponent = class SearchComponent {
    constructor(appService, appStoreService) {
        this.appService = appService;
        this.appStoreService = appStoreService;
        this.assetsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].assetsUrl;
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.appService.fetchTaiwanCity(), this.appService.fetchPharmacy()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => {
            return [res[0], res[1].features];
        })).subscribe(res => {
            // console.log('alllist', res[1] )
            this.getTaiwanCity = res[0];
            // this.onCityChange('臺北市');
            this.appStoreService.getPharmacy$.next(res[1]);
        });
    }
    onCityChange(event) {
        this.appStoreService.setArea(event);
        this.city = event;
        this.appStoreService.setPharmacyList(this.city);
    }
    onAreaChange(event) {
        this.area = event;
        this.appStoreService.setPharmacyList(this.city, this.area);
    }
};
SearchComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
    { type: _app_store_service__WEBPACK_IMPORTED_MODULE_2__["AppStoreService"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    assetsUrl: 'maskmap/assets'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\TheF2E_2019\week10\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map