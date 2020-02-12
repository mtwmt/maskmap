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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"maskmap\">\n  <a href=\"javascript:void(0);\"\n    class=\"hamburger\" title=\"MENU\"\n    [ngClass]=\"{ 'active': isOpen }\"\n    (click)=\"onSwitch()\"\n  ><span>MENU</span></a>\n  <app-search [ngClass]=\"{ 'active': isOpen }\"></app-search>\n  <app-map></app-map>\n  <!-- <app-masklist></app-masklist> -->\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"map-container\">\n  <div class=\"map-frame\">\n    <div id=\"map\" #maskmap></div>\n  </div>\n\n</div>\n<app-masklist></app-masklist>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masklist/masklist.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masklist/masklist.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pharmacy\">\n  <div\n    class=\"pharmacy__wrap\"\n    *ngFor=\"let item of appStoreService.getPharmacy$ | async; let idx = index\"\n    [style.left.rem]=\"23.125 * idx\"\n    (click)=\"setInfo(item.geometry, item.properties)\"\n  >\n    <div class=\"pharmacy__title\">{{ item.properties.name }}</div>\n    <div class=\"pharmacy__block-left\">\n      <div class=\"pharmacy__addr\">{{ item.properties.address }}</div>\n      <div class=\"pharmacy__phone\">{{ item.properties.phone }}</div>\n    </div>\n    <div class=\"pharmacy__block-right\">\n      <div class=\"pharmacy__child\">\n      <img src= \"{{assetsUrl}}/child.svg\"/>\n        <p>{{ item.properties.mask_child }}</p>\n      </div>\n      <div class=\"pharmacy__adult\">\n        <img src=\"{{assetsUrl}}/adult.svg\" />\n        <p>{{ item.properties.mask_adult }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search\" [ngClass]=\"{ 'active': isOpen }\">\n  <div class=\"search__header\">\n    <figure><img src= \"{{assetsUrl}}/nhi.svg\"/></figure>\n    <div class=\"search__flex\">\n      <div class=\"search__info\">\n        <figure><img src= \"{{assetsUrl}}/calendar.svg\"/></figure>\n        <p><span class=\"num\">7</span>天一次</p>\n      </div>\n      <div class=\"search__info\">\n        <figure><img src= \"{{assetsUrl}}/mask.svg\"/></figure>\n        <p>限購<span class=\"num\">2</span>片</p>\n      </div>\n      <div class=\"search__info\">\n        <figure><img src= \"{{assetsUrl}}/card.svg\"/></figure>\n        <p>代購<span class=\"num\">1</span>卡</p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"search__body\">\n  <div class=\"search__body-title\">搜尋</div>\n\n  <div class=\"search__body-city\">\n    <select name=\"\" id=\"city\" (change)=\"onCityChange($event.target.value)\">\n      <option\n        *ngFor=\"let item of appStoreService.getCity$ | async\"\n        [(value)]=\"item.Name\"\n        >{{ item.Name }}</option\n      >\n    </select>\n  </div>\n  <div class=\"search__body-area\">\n    <select name=\"\" id=\"zone\" (change)=\"onAreaChange($event.target.value)\">\n      <option>全區</option>\n      <option\n        *ngFor=\"let item of appStoreService.getArea$ | async\"\n        [(value)]=\"item.Name\"\n        >{{ item.Name }}</option\n      >\n    </select>\n  </div>\n  <div class=\"search__mask\">\n    <div class=\"search__mask-total\">\n      <h4>{{ city }}{{ area }}</h4>\n      <p>口罩總量：{{ childTotal + adultTotal }}</p>\n      <p>小孩口罩：{{ childTotal }}</p>\n      <p>成人口罩：{{ adultTotal }}</p>\n    </div>\n    <h4>口罩類型</h4>\n    <div class=\"search__flex\">\n      <div class=\"search__mask-child isAct\" (click)=\"onMask('child')\"\n        [ngClass]=\"{ 'isAct': mask === 'child' }\"\n      >\n        <img src= \"{{assetsUrl}}/child.svg\"/>\n      </div>\n      <div class=\"search__mask-adult\" (click)=\"onMask('adult')\"\n        [ngClass]=\"{ 'isAct': mask === 'adult' }\"\n      >\n        <img src= \"{{assetsUrl}}/adult.svg\"/>\n      </div>\n      <div class=\"search__mask-both\" (click)=\"onMask('both')\"\n        [ngClass]=\"{ 'isAct': mask === '' }\"\n      >\n        <img src= \"{{assetsUrl}}/both.svg\"/>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n\n");

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
        this.getCalMask$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    setCity(ary) {
        this.getCity = ary;
        this.getCity$.next(this.getCity);
    }
    setArea(city) {
        this.getArea = this.getCity.filter(e => e.Name === city);
        this.getArea$.next(this.getArea[0].Districts);
    }
    setPharmacy(ary) {
        this.getAllPharmacy = ary;
    }
    setPharmacyList(city, area) {
        const newList = this.getAllPharmacy.filter(e => {
            if (e.properties.address.match('臺')) {
                e.properties.address = e.properties.address.replace('臺', '台');
            }
            if (!area) {
                area = '';
            }
            return e.properties.address.match(city + area);
        });
        this.getPharmacy = newList;
        this.getPharmacy$.next(newList);
        this.setCalMask(newList);
    }
    setPharmacyInfo(pos, info) {
        const newInfo = Object.assign({}, info, { coordinates: pos.coordinates });
        this.getCurInfo$.next(newInfo);
    }
    setMask(str) {
        ;
        let newList = [];
        if (str === 'child') {
            newList = this.getPharmacy.filter(e => e.properties.mask_child > 0);
        }
        else if (str === 'adult') {
            newList = this.getPharmacy.filter(e => e.properties.mask_adult > 0);
        }
        else {
            newList = this.getPharmacy.filter(e => e.properties.mask_child > 0 || e.properties.mask_adult > 0);
        }
        this.getPharmacy$.next(newList);
    }
    setCalMask(list) {
        let childTotal = 0;
        let adultTotal = 0;
        list.map(e => {
            childTotal += e.properties.mask_child;
            adultTotal += e.properties.mask_adult;
        });
        this.getCalMask$.next({ childTotal, adultTotal });
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
/* harmony default export */ __webpack_exports__["default"] = (".maskmap:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n.hamburger {\n  display: none;\n  z-index: 100000;\n  position: absolute;\n  top: 1.25rem;\n  right: 1.25rem;\n  width: 50px;\n  height: 45px;\n  padding: 10px;\n  background: #e0e0e0;\n  border-radius: 0.25rem;\n}\n\n.hamburger span {\n  display: inline-block;\n  text-indent: -9999px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  position: absolute;\n  display: block;\n  cursor: pointer;\n  width: 30px;\n  height: 5px;\n  background: #4F4F4F;\n  margin: 10px 0;\n}\n\n.hamburger span:before {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: 0;\n  display: block;\n  width: 30px;\n  height: 5px;\n  background: #4F4F4F;\n}\n\n.hamburger span:after {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  left: 0;\n  display: block;\n  width: 30px;\n  height: 5px;\n  background: #4F4F4F;\n}\n\n.hamburger.active span {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  background-color: transparent;\n}\n\n.hamburger.active span:before {\n  top: -0.625rem;\n  -webkit-transform: translateY(10.5px) rotate(45deg);\n          transform: translateY(10.5px) rotate(45deg);\n}\n\n.hamburger.active span:after {\n  top: -0.625rem;\n  -webkit-transform: translateY(10.5px) rotate(-45deg);\n          transform: translateY(10.5px) rotate(-45deg);\n}\n\n.maskmap {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n}\n\n.maskmap app-search {\n  position: relative;\n  z-index: 9999;\n  width: 300px;\n  height: 100vh;\n  background: #fff;\n}\n\n.maskmap app-map {\n  position: relative;\n  width: calc( 100% - 300px );\n}\n\n@media (max-width: 800px) {\n  .maskmap {\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n  .maskmap .hamburger {\n    display: block;\n  }\n  .maskmap app-search {\n    position: absolute;\n    z-index: 99999;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n    -webkit-transform: translateX(-300px);\n            transform: translateX(-300px);\n  }\n  .maskmap app-search.active {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n  .maskmap app-map {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFRoZUYyRV8yMDE5XFx3ZWVrMTAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDSEo7O0FENENBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ3pDRjs7QUQwQ0U7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQWpERixrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0ErQzhCO0VBOUM5QixXQUFBO0VBQ0EsbUJBNkNxQjtFQTVDckIsY0FBQTtBQ1VGOztBRFRFO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFdBb0M0QjtFQW5DNUIsV0FBQTtFQUNBLG1CQWtDbUI7QUN2QnZCOztBRFRFO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFdBeUI0QjtFQXhCNUIsV0FBQTtFQUNBLG1CQXVCbUI7QUNadkI7O0FEZUk7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsNkJBQUE7QUNiTjs7QURjTTtFQUNFLGNBQUE7RUFDQSxtREFBQTtVQUFBLDJDQUFBO0FDWlI7O0FEY007RUFDRSxjQUFBO0VBQ0Esb0RBQUE7VUFBQSw0Q0FBQTtBQ1pSOztBRGtCQTtFQUVFLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDaEJGOztBRGlCRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNmSjs7QURrQkU7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0FDaEJKOztBRG9CRTtFQWxCRjtJQW1CSSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQ2pCRjtFRGtCRTtJQUNFLGNBQUE7RUNoQko7RURrQkU7SUFDRSxrQkFBQTtJQUNBLGNBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0lBQ0EscUNBQUE7WUFBQSw2QkFBQTtFQ2hCSjtFRGlCSTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7RUNmTjtFRGtCRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUNoQko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGltcG9ydCBcIi4uL2Fzc2V0cy9jb21tb25cIjtcblxuJWNsZWFyIHtcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjbGVhcjogYm90aDtcbiAgfVxufVxuXG5cbkBtaXhpbiBoYW1idXJnZXIoJGNvbG9yLCAkaWNvblcpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogJGljb25XO1xuICBoZWlnaHQ6ICRpY29uVy82O1xuICBiYWNrZ3JvdW5kOiAkY29sb3I7XG4gIG1hcmdpbjogJGljb25XLzMgMDtcbiAgJjpiZWZvcmUge1xuICAgIHRyYW5zaXRpb246MC41cztcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtJGljb25XLzM7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogJGljb25XO1xuICAgIGhlaWdodDogJGljb25XLzY7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yO1xuICB9XG4gICY6YWZ0ZXIge1xuICAgIHRyYW5zaXRpb246MC41cztcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAkaWNvblcvMztcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAkaWNvblc7XG4gICAgaGVpZ2h0OiAkaWNvblcvNjtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3I7XG4gIH1cbn1cblxuLy8gOmhvc3Qge1xuXG4vLyB9XG5cbi5oYW1idXJnZXIge1xuICBkaXNwbGF5OiBub25lO1xuICB6LWluZGV4OiAxMDAwMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiByZW0oMjBweCk7XG4gIHJpZ2h0OiByZW0oMjBweCk7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IHJlbSg0cHgpO1xuICBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICBAaW5jbHVkZSBoYW1idXJnZXIoIzRGNEY0RiwgMzBweCk7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgIHNwYW4ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICB0b3A6IHJlbSgtMTBweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMC41cHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgICB9XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgdG9wOiByZW0oLTEwcHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAuNXB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLm1hc2ttYXB7XG4gIEBleHRlbmQgJWNsZWFyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFwcC1zZWFyY2h7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxuXG4gIGFwcC1tYXB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gMzAwcHggKTtcbiAgICAvLyBoZWlnaHQ6IGNhbGMoIDEwMHZoIC0gMTAuNjI1cmVtICk7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC5oYW1idXJnZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIGFwcC1zZWFyY2h7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiA5OTk5OTtcbiAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwMHB4KTtcbiAgICAgICYuYWN0aXZle1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXBwLW1hcHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIiwiLm1hc2ttYXA6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5oYW1idXJnZXIge1xuICBkaXNwbGF5OiBub25lO1xuICB6LWluZGV4OiAxMDAwMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxLjI1cmVtO1xuICByaWdodDogMS4yNXJlbTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cbi5oYW1idXJnZXIgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjNEY0RjRGO1xuICBtYXJnaW46IDEwcHggMDtcbn1cbi5oYW1idXJnZXIgc3BhbjpiZWZvcmUge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwcHg7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6ICM0RjRGNEY7XG59XG4uaGFtYnVyZ2VyIHNwYW46YWZ0ZXIge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogIzRGNEY0Rjtcbn1cbi5oYW1idXJnZXIuYWN0aXZlIHNwYW4ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5oYW1idXJnZXIuYWN0aXZlIHNwYW46YmVmb3JlIHtcbiAgdG9wOiAtMC42MjVyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMC41cHgpIHJvdGF0ZSg0NWRlZyk7XG59XG4uaGFtYnVyZ2VyLmFjdGl2ZSBzcGFuOmFmdGVyIHtcbiAgdG9wOiAtMC42MjVyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMC41cHgpIHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4ubWFza21hcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tYXNrbWFwIGFwcC1zZWFyY2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5tYXNrbWFwIGFwcC1tYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBjYWxjKCAxMDAlIC0gMzAwcHggKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAubWFza21hcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAubWFza21hcCAuaGFtYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAubWFza21hcCBhcHAtc2VhcmNoIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTk5OTk7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwMHB4KTtcbiAgfVxuICAubWFza21hcCBhcHAtc2VhcmNoLmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbiAgLm1hc2ttYXAgYXBwLW1hcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufSJdfQ== */");

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
        this.url = 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json';
    }
    fetchTaiwanCity(city) {
        return this.httpClient.get(`${this.assetsUrl}/counties.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            res.sort((a, b) => a.Sort - b.Sort);
            res.map((e) => {
                e.Districts.sort((a, b) => a.Sort - b.Sort);
            });
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(res => {
            this.appStoreService.setCity(res);
        }));
    }
    fetchPharmacy(area) {
        return this.httpClient.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            res.features.map(e => {
                e.geometry.coordinates = e.geometry.coordinates.reverse();
                e.properties.phone = e.properties.phone.replace(/\s*/g, '');
            });
            return res.features.filter(e => e.properties.mask_adult > 0 || e.properties.mask_child > 0);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(res => {
            this.appStoreService.setPharmacy(res);
        }));
    }
    fetchlocal() {
        const token = 'pk.eyJ1IjoibXR3bXQiLCJhIjoiY2s2Z2lvN2p5MmE2MjNsbjNsc2tvM2I5ciJ9.6WxKL8KMqhcRpsHrNNtvfQ';
        const key = 'AIzaSyBGd0MP4HMs0p6dQ_xV6gt-5XBkZc4jmD8';
        // const location = [-73.989, 40.733];
        const location = [24.953750499999998, 121.34356229999999];
        // return this.httpClient.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.join(',')}&key=${key}`)
        return this.httpClient.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location.join(',')}.json?routing=true&access_token=${token}`);
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
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.leaflet-popup-content:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.map-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.map-frame {\n  height: 100%;\n}\n#map {\n  height: 100%;\n}\n.customPopup {\n  font-family: \"Hiragino Sans CNS\", \"微軟正黑體\", \"Arial\";\n  width: 18.75rem;\n}\n.customPopup__title {\n  font-size: 1.125rem;\n  font-weight: bold;\n  line-height: 1.6875rem;\n}\n.customPopup__addr, .customPopup__note {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #828282;\n}\n.customPopup__phone {\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #828282;\n}\n.customPopup__updated {\n  margin-top: 0.5rem;\n  font-size: 0.75rem;\n  line-height: 1.5;\n  color: #828282;\n}\n.customPopup__child, .customPopup__adult {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #4f4f4f;\n}\n.customPopup__child img, .customPopup__adult img {\n  height: 1.875rem;\n}\n.customPopup__child p, .customPopup__adult p {\n  text-align: center;\n  line-height: 1;\n  margin: 0;\n}\n.customPopup__tel {\n  display: block;\n  margin: 0.5rem 0;\n  line-height: 0;\n  padding: 0.375rem 0;\n  text-align: center;\n  border: 1px solid #f2c94c;\n  box-sizing: border-box;\n  border-radius: 1.25rem;\n}\n.customPopup__google {\n  clear: both;\n  display: block;\n  margin-top: 0.5rem;\n  padding: 0.375rem 0;\n  font-size: 1.25rem;\n  font-weight: bold;\n  text-align: center;\n  color: #fff !important;\n  text-decoration: none !important;\n  border-radius: 1.25rem;\n  background: #f2c94c;\n}\n.customPopup__google img {\n  position: relative;\n  top: 0.125rem;\n  margin-right: 0.5rem;\n}\n.customPopup__block-left {\n  float: left;\n  width: 55%;\n}\n.customPopup__block-right {\n  float: right;\n  width: 45%;\n}\n.customPopup__block-flex {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFwL0Q6XFxUaGVGMkVfMjAxOVxcd2VlazEwL3NyY1xcYXBwXFxtYXBcXG1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNHZDtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBRERKO0FDS0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QURGRjtBQ1NBO0VBRUUsWUFBQTtBRFBGO0FDVUE7RUFDRSxZQUFBO0FEUEY7QUNtQkE7RUFDRSxrREFBQTtFQUNBLGVBQUE7QURoQkY7QUNpQkU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QURmSjtBQ2lCRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FEZko7QUNrQkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FEaEJKO0FDa0JFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRGhCSjtBQ2tCRTtFQUVFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FEakJKO0FDa0JJO0VBQ0UsZ0JBQUE7QURoQk47QUNrQkk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FEaEJOO0FDbUJFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QURqQko7QUNtQkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBRGpCSjtBQ2tCSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FEaEJOO0FDb0JJO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QURsQk47QUNvQkk7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBRGxCTjtBQ29CSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0FEbEJOIiwiZmlsZSI6InNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5sZWFmbGV0LXBvcHVwLWNvbnRlbnQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5tYXAtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi5tYXAtZnJhbWUge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNtYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jdXN0b21Qb3B1cCB7XG4gIGZvbnQtZmFtaWx5OiBcIkhpcmFnaW5vIFNhbnMgQ05TXCIsIFwi5b6u6Luf5q2j6buR6auUXCIsIFwiQXJpYWxcIjtcbiAgd2lkdGg6IDE4Ljc1cmVtO1xufVxuLmN1c3RvbVBvcHVwX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS42ODc1cmVtO1xufVxuLmN1c3RvbVBvcHVwX19hZGRyLCAuY3VzdG9tUG9wdXBfX25vdGUge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5jdXN0b21Qb3B1cF9fcGhvbmUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmN1c3RvbVBvcHVwX191cGRhdGVkIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmN1c3RvbVBvcHVwX19jaGlsZCwgLmN1c3RvbVBvcHVwX19hZHVsdCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM0ZjRmNGY7XG59XG4uY3VzdG9tUG9wdXBfX2NoaWxkIGltZywgLmN1c3RvbVBvcHVwX19hZHVsdCBpbWcge1xuICBoZWlnaHQ6IDEuODc1cmVtO1xufVxuLmN1c3RvbVBvcHVwX19jaGlsZCBwLCAuY3VzdG9tUG9wdXBfX2FkdWx0IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW46IDA7XG59XG4uY3VzdG9tUG9wdXBfX3RlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcGFkZGluZzogMC4zNzVyZW0gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjJjOTRjO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAxLjI1cmVtO1xufVxuLmN1c3RvbVBvcHVwX19nb29nbGUge1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgcGFkZGluZzogMC4zNzVyZW0gMDtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcbiAgYmFja2dyb3VuZDogI2YyYzk0Yztcbn1cbi5jdXN0b21Qb3B1cF9fZ29vZ2xlIGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwLjEyNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4uY3VzdG9tUG9wdXBfX2Jsb2NrLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDU1JTtcbn1cbi5jdXN0b21Qb3B1cF9fYmxvY2stcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA0NSU7XG59XG4uY3VzdG9tUG9wdXBfX2Jsb2NrLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL2NvbW1vblwiO1xuXG4lY2xlYXIge1xuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG59XG5cbi5tYXAtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIC8vIHdpZHRoOiAxMDAlO1xuICAvLyBoZWlnaHQ6IDUwMHB4O1xuICAvLyBwYWRkaW5nOiAzMHB4O1xuICAvLyBoZWlnaHQ6IGNhbGMoIDEwMHZoIC0gMTAuNjI1cmVtICk7XG59XG5cbi5tYXAtZnJhbWUge1xuICAvLyBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jbWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGVhZmxldC1wb3B1cCB7XG4gIC8vICYtY29udGVudC13cmFwcGVye1xuICAvLyAgIGJhY2tncm91bmQ6ICMxNTk7XG4gIC8vIH1cbiAgJi1jb250ZW50IHtcbiAgICBAZXh0ZW5kICVjbGVhcjtcbiAgfVxufVxuXG4uY3VzdG9tUG9wdXAge1xuICBmb250LWZhbWlseTogXCJIaXJhZ2lubyBTYW5zIENOU1wiLCBcIuW+rui7n+ato+m7kemrlFwiLCBcIkFyaWFsXCI7XG4gIHdpZHRoOiByZW0oMzAwcHgpO1xuICAmX190aXRsZSB7XG4gICAgZm9udC1zaXplOiByZW0oMThweCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IHJlbSgyN3B4KTtcbiAgfVxuICAmX19hZGRyLCZfX25vdGUge1xuICAgIGZvbnQtc2l6ZTogcmVtKDE0cHgpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICM4MjgyODI7XG4gIH1cblxuICAmX19waG9uZSB7XG4gICAgbWFyZ2luLXRvcDogcmVtKDhweCk7XG4gICAgZm9udC1zaXplOiByZW0oMTRweCk7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzgyODI4MjtcbiAgfVxuICAmX191cGRhdGVkIHtcbiAgICBtYXJnaW4tdG9wOiByZW0oOHB4KTtcbiAgICBmb250LXNpemU6IHJlbSgxMnB4KTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjODI4MjgyO1xuICB9XG4gICZfX2NoaWxkLFxuICAmX19hZHVsdCB7XG4gICAgZm9udC1zaXplOiByZW0oMjRweCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM0ZjRmNGY7XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogcmVtKDMwcHgpO1xuICAgIH1cbiAgICBwIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuICAmX190ZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogcmVtKDhweCkgMDtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBwYWRkaW5nOiByZW0oNnB4KSAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjJjOTRjO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogcmVtKDIwcHgpO1xuICB9XG4gICZfX2dvb2dsZSB7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogcmVtKDhweCk7XG4gICAgcGFkZGluZzogcmVtKDZweCkgMDtcbiAgICBmb250LXNpemU6IHJlbSgyMHB4KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiByZW0oMjBweCk7XG4gICAgYmFja2dyb3VuZDogI2YyYzk0YztcbiAgICBpbWcge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiByZW0oMnB4KTtcbiAgICAgIG1hcmdpbi1yaWdodDogcmVtKDhweCk7XG4gICAgfVxuICB9XG4gICZfX2Jsb2NrIHtcbiAgICAmLWxlZnQge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB3aWR0aDogNTUlO1xuICAgIH1cbiAgICAmLXJpZ2h0IHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIHdpZHRoOiA0NSU7XG4gICAgfVxuICAgICYtZmxleCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgfVxuICB9XG59XG4iXX0= */");

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
        this.location = [25.0032999, 121.5540404];
        this.location$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](this.location);
        this.getPosition();
        this.appStoreService.getPharmacy$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (!res) {
                return;
            }
            const info = res.reduce((total, el) => {
                total.push(Object.assign({}, el.properties, { coordinates: el.geometry.coordinates }));
                return total;
            }, []);
            return info;
        })).subscribe(res => {
            this.renderMap(res, res[0].coordinates);
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
    ngOnInit() {
        // 樣式ID https://docs.mapbox.com/api/maps/#mapbox-styles
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_5__["map"]('map', {
            center: [25.0032999, 121.5540404],
            zoom: 13,
            zoomControl: false,
            layers: [leaflet__WEBPACK_IMPORTED_MODULE_5__["tileLayer"]('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                    attribution: '&copy; 口罩地圖 by <a href="https://mtwmt.github.io/" target="_blank">Mandy</a>',
                    maxZoom: 20,
                    id: 'mapbox/streets-v11',
                    accessToken: 'pk.eyJ1IjoibXR3bXQiLCJhIjoiY2s2Z2lvN2p5MmE2MjNsbjNsc2tvM2I5ciJ9.6WxKL8KMqhcRpsHrNNtvfQ'
                })]
        });
        this.appStoreService.getCurInfo$.subscribe(res => {
            this.onPharmacy(res);
        });
        // this.location$.subscribe(res => {
        //   this.location = res;
        //   this.map.setView(res, 13);
        //   console.log('location', this.location)
        // });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])(this.appService.fetchTaiwanCity(), this.location$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            return [
                res[0],
                { latitude: res[1][0], longitude: res[1][1] }
            ];
        })).subscribe(res => {
            // console.log('qqq', res[0], res[1])
            // const strLocLat = res[1].latitude.toString().split('.');
            // const strLocLng = res[1].longitude.toString().split('.');
            // res[0].map(e => {
            //   e.Districts.map(el => {
            //     const strCityLat = el.Latitude.toString().split('.');
            //     const strCityLng = el.Longitude.toString().split('.');
            //     if (strLocLat[0].indexOf(strCityLat[0]) >= 0 && strLocLng[0].indexOf(strCityLng[0]) >= 0) {
            //       console.log('city', el)
            //     }
            //   })
            // })
        });
        // this.appService.fetchlocal().subscribe( res => console.log('pos',res) )
    }
    ngOnDestroy() {
        this.location$.unsubscribe();
    }
    renderMap(list, cur) {
        this.group = new leaflet__WEBPACK_IMPORTED_MODULE_5__["MarkerClusterGroup"]().addTo(this.map);
        list.map((e, i) => {
            this.addMarker(e);
        });
        this.map.addLayer(this.group);
        leaflet__WEBPACK_IMPORTED_MODULE_5__["marker"](this.location, { icon: this.icons.gold }).addTo(this.map);
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
          <div class="customPopup__updated">更新時間：<br/>${info.updated}</div>
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
        <a href="https://www.google.com/maps/dir/${this.location[0]},${this.location[1]}/${info.coordinates[0]},${info.coordinates[1]}" class="customPopup__google" target="_blank">
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
            this.location$.next([latitude, longitude]);
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
/* harmony default export */ __webpack_exports__["default"] = (".pharmacy__wrap:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n:host {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 10.625rem;\n}\n\n.pharmacy {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n\n.pharmacy__wrap {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 21.875rem;\n  height: 8.125rem;\n  margin: 0.625rem 0.625rem;\n  padding: 1rem 0.625rem;\n  box-shadow: 0px 5px 10px #f2f2f2;\n  border-radius: 0.625rem;\n  background: #fff;\n  cursor: pointer;\n}\n\n.pharmacy__title {\n  font-size: 1.125rem;\n  font-weight: bold;\n  line-height: 1.6875rem;\n}\n\n.pharmacy__addr {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #828282;\n}\n\n.pharmacy__phone {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #828282;\n}\n\n.pharmacy__child, .pharmacy__adult {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #828282;\n}\n\n.pharmacy__child img, .pharmacy__adult img {\n  height: 2.5rem;\n}\n\n.pharmacy__child p, .pharmacy__adult p {\n  text-align: center;\n}\n\n.pharmacy__block-left {\n  float: left;\n  width: 50%;\n}\n\n.pharmacy__block-right {\n  float: right;\n  width: 50%;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFza2xpc3QvRDpcXFRoZUYyRV8yMDE5XFx3ZWVrMTAvc3JjXFxhcHBcXG1hc2tsaXN0XFxtYXNrbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFza2xpc3QvbWFza2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNGSjs7QURpQkM7RUFDRyxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ2RKOztBRGlCQTtFQUNFLGtCQUFBO0VBR0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDaEJGOztBRG1CRTtFQUVFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNuQko7O0FEcUJFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDbkJKOztBRHFCRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDbkJKOztBRHFCRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDbkJKOztBRHFCRTtFQUVFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDcEJKOztBRHFCSTtFQUNFLGNBQUE7QUNuQk47O0FEcUJJO0VBQ0Usa0JBQUE7QUNuQk47O0FEdUJJO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNyQk47O0FEdUJJO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtBQ3JCTiIsImZpbGUiOiJzcmMvYXBwL21hc2tsaXN0L21hc2tsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9jb21tb25cIjtcblxuJWNsZWFyIHtcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjbGVhcjogYm90aDtcbiAgfVxufVxuXG4vLyA6aG9zdCB7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgYm90dG9tOiAwO1xuLy8gICBsZWZ0OiAwO1xuLy8gICAvLyB3aWR0aDogMTAwJTtcbi8vICAgLy8gaGVpZ2h0OiByZW0oMzAwcHgpO1xuLy8gICB6LWluZGV4OiA5OTk5O1xuLy8gICBvdmVyZmxvdzogc2Nyb2xsO1xuLy8gICAvLyB3aWR0aDogMTAwJTtcbi8vIH1cblxuIDpob3N0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IHJlbSgxMzBweCArIDQwcHgpO1xuICB9XG5cbi5waGFybWFjeSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gd2lkdGg6IHJlbSgzNTBweCk7XG4gIC8vIGhlaWdodDogY2FsYygxMDAlIC0gMjMwcHgpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgLy8gYmFja2dyb3VuZDogI2ZmZjtcblxuICAmX193cmFwIHtcbiAgICBAZXh0ZW5kICVjbGVhcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiByZW0oMzUwcHgpO1xuICAgIGhlaWdodDogcmVtKDEzMHB4KTtcbiAgICBtYXJnaW46IHJlbSgxMHB4KSByZW0oMTBweCk7XG4gICAgcGFkZGluZzogcmVtKDE2cHgpIHJlbSgxMHB4KTtcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggI2YyZjJmMjtcbiAgICBib3JkZXItcmFkaXVzOiByZW0oMTBweCk7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgJl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogcmVtKDE4cHgpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiByZW0oMjdweCk7XG4gIH1cbiAgJl9fYWRkciB7XG4gICAgZm9udC1zaXplOiByZW0oMTRweCk7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzgyODI4MjtcbiAgfVxuICAmX19waG9uZSB7XG4gICAgZm9udC1zaXplOiByZW0oMTRweCk7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzgyODI4MjtcbiAgfVxuICAmX19jaGlsZCxcbiAgJl9fYWR1bHQge1xuICAgIGZvbnQtc2l6ZTogcmVtKDI0cHgpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjODI4MjgyO1xuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IHJlbSg0MHB4KTtcbiAgICB9XG4gICAgcCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG4gICZfX2Jsb2NrIHtcbiAgICAmLWxlZnQge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgICAmLXJpZ2h0IHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgfVxuICB9XG59XG4iLCIucGhhcm1hY3lfX3dyYXA6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG59XG5cbjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwLjYyNXJlbTtcbn1cblxuLnBoYXJtYWN5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cbi5waGFybWFjeV9fd3JhcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMjEuODc1cmVtO1xuICBoZWlnaHQ6IDguMTI1cmVtO1xuICBtYXJnaW46IDAuNjI1cmVtIDAuNjI1cmVtO1xuICBwYWRkaW5nOiAxcmVtIDAuNjI1cmVtO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggI2YyZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5waGFybWFjeV9fdGl0bGUge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDEuNjg3NXJlbTtcbn1cbi5waGFybWFjeV9fYWRkciB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLnBoYXJtYWN5X19waG9uZSB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLnBoYXJtYWN5X19jaGlsZCwgLnBoYXJtYWN5X19hZHVsdCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4ucGhhcm1hY3lfX2NoaWxkIGltZywgLnBoYXJtYWN5X19hZHVsdCBpbWcge1xuICBoZWlnaHQ6IDIuNXJlbTtcbn1cbi5waGFybWFjeV9fY2hpbGQgcCwgLnBoYXJtYWN5X19hZHVsdCBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBoYXJtYWN5X19ibG9jay1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG59XG4ucGhhcm1hY3lfX2Jsb2NrLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.search {\n  position: relative;\n}\n.search__flex {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n.search__header {\n  height: 10.25rem;\n  background: #e0e0e0;\n  padding: 1.25rem;\n}\n.search__header .search__flex {\n  padding-top: 1rem;\n}\n.search__body {\n  height: calc(100% - 230px);\n  padding: 1.25rem;\n}\n.search__body-title {\n  padding-left: 1.25rem;\n  color: #4F4F4F;\n  font-weight: bold;\n  font-size: 2.25rem;\n  line-height: 3.375rem;\n}\n.search__body-city, .search__body-area {\n  position: relative;\n  margin-top: 1.25rem;\n}\n.search__body-city:before, .search__body-area:before {\n  position: absolute;\n  top: -0.5rem;\n  left: 1.25rem;\n  padding: 0 0.5rem;\n  font-size: 0.75rem;\n  background: #fff;\n}\n.search__body-city select, .search__body-area select {\n  padding: 0 1.25rem;\n  width: 100%;\n  height: 3.125rem;\n  font-size: 1rem;\n  font-family: \"Hiragino Sans CNS\", \"微軟正黑體\", \"Arial\";\n  border-radius: 3.125rem;\n  border: 0.125rem solid #4F4F4F;\n}\n.search__body-city:before {\n  content: \"縣市\";\n}\n.search__body-area:before {\n  content: \"鄉鎮市區別\";\n}\n.search__info {\n  text-align: center;\n  line-height: 2.25rem;\n  font-size: 0.75rem;\n  font-weight: bold;\n  color: #4F4F4F;\n}\n.search__info figure {\n  display: inline-block;\n  height: 2.5rem;\n}\n.search__info figure img {\n  vertical-align: middle;\n}\n.search__info .num {\n  margin: 0 0.125rem;\n  font-size: 1.5rem;\n  color: #F2994A;\n}\n.search__mask {\n  margin-top: 2.375rem;\n}\n.search__mask h4 {\n  font-size: 1.25rem;\n}\n.search__mask-child, .search__mask-adult, .search__mask-both {\n  cursor: pointer;\n  position: relative;\n  width: 5rem;\n  height: 5rem;\n  margin-top: 1.5rem;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n  border-radius: 1.25rem;\n}\n.search__mask-child img, .search__mask-adult img, .search__mask-both img {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n.search__mask-child.isAct, .search__mask-adult.isAct, .search__mask-both.isAct {\n  box-shadow: 0px 0.3125rem 0.625rem #F2C94C;\n}\n.search__mask-total {\n  margin-bottom: 2rem;\n  font-size: 0.875rem;\n}\n.search__mask-total h4 {\n  font-size: 1.25rem;\n  font-weight: bold;\n  color: #F2994A;\n  line-height: 2;\n}\n.search__mask-total p {\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VhcmNoL0Q6XFxUaGVGMkVfMjAxOVxcd2VlazEwL3NyY1xcYXBwXFxzZWFyY2hcXHNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNXaEI7RUFDRSxrQkFBQTtBRFRGO0FDVUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtBRFJKO0FDVUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QURSSjtBQ1NJO0VBQ0UsaUJBQUE7QURQTjtBQzRDRTtFQUNFLDBCQUFBO0VBRUEsZ0JBQUE7QUQzQ0o7QUM0Q0k7RUFDRSxxQkFBQTtFQUVBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUQzQ047QUM2Q0k7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FEM0NOO0FDNkNNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRDNDUjtBQzZDTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtEQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtBRDNDUjtBQytDTTtFQUNFLGFBQUE7QUQ3Q1I7QUNpRE07RUFDRSxnQkFBQTtBRC9DUjtBQ21ERTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBRGpESjtBQ2tESTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBRGhETjtBQ2lETTtFQUNFLHNCQUFBO0FEL0NSO0FDa0RJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURoRE47QUNtREU7RUFDRSxvQkFBQTtBRGpESjtBQ2tESTtFQUNFLGtCQUFBO0FEaEROO0FDa0RJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esc0JBQUE7QURoRE47QUNpRE07RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FEL0NSO0FDaURNO0VBQ0UsMENBQUE7QUQvQ1I7QUNtREk7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FEakROO0FDa0RNO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FEaERWO0FDa0RNO0VBQ0UsZ0JBQUE7QURoRFIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWFyY2hfX2ZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5zZWFyY2hfX2hlYWRlciB7XG4gIGhlaWdodDogMTAuMjVyZW07XG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gIHBhZGRpbmc6IDEuMjVyZW07XG59XG4uc2VhcmNoX19oZWFkZXIgLnNlYXJjaF9fZmxleCB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuLnNlYXJjaF9fYm9keSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMjMwcHgpO1xuICBwYWRkaW5nOiAxLjI1cmVtO1xufVxuLnNlYXJjaF9fYm9keS10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAzLjM3NXJlbTtcbn1cbi5zZWFyY2hfX2JvZHktY2l0eSwgLnNlYXJjaF9fYm9keS1hcmVhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xufVxuLnNlYXJjaF9fYm9keS1jaXR5OmJlZm9yZSwgLnNlYXJjaF9fYm9keS1hcmVhOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMC41cmVtO1xuICBsZWZ0OiAxLjI1cmVtO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnNlYXJjaF9fYm9keS1jaXR5IHNlbGVjdCwgLnNlYXJjaF9fYm9keS1hcmVhIHNlbGVjdCB7XG4gIHBhZGRpbmc6IDAgMS4yNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMy4xMjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiSGlyYWdpbm8gU2FucyBDTlNcIiwgXCLlvq7ou5/mraPpu5Hpq5RcIiwgXCJBcmlhbFwiO1xuICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcbiAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCAjNEY0RjRGO1xufVxuLnNlYXJjaF9fYm9keS1jaXR5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi57ij5biCXCI7XG59XG4uc2VhcmNoX19ib2R5LWFyZWE6YmVmb3JlIHtcbiAgY29udGVudDogXCLphInpjq7luILljYDliKVcIjtcbn1cbi5zZWFyY2hfX2luZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzRGNEY0Rjtcbn1cbi5zZWFyY2hfX2luZm8gZmlndXJlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDIuNXJlbTtcbn1cbi5zZWFyY2hfX2luZm8gZmlndXJlIGltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uc2VhcmNoX19pbmZvIC5udW0ge1xuICBtYXJnaW46IDAgMC4xMjVyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogI0YyOTk0QTtcbn1cbi5zZWFyY2hfX21hc2sge1xuICBtYXJnaW4tdG9wOiAyLjM3NXJlbTtcbn1cbi5zZWFyY2hfX21hc2sgaDQge1xuICBmb250LXNpemU6IDEuMjVyZW07XG59XG4uc2VhcmNoX19tYXNrLWNoaWxkLCAuc2VhcmNoX19tYXNrLWFkdWx0LCAuc2VhcmNoX19tYXNrLWJvdGgge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDVyZW07XG4gIGhlaWdodDogNXJlbTtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcbn1cbi5zZWFyY2hfX21hc2stY2hpbGQgaW1nLCAuc2VhcmNoX19tYXNrLWFkdWx0IGltZywgLnNlYXJjaF9fbWFzay1ib3RoIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG59XG4uc2VhcmNoX19tYXNrLWNoaWxkLmlzQWN0LCAuc2VhcmNoX19tYXNrLWFkdWx0LmlzQWN0LCAuc2VhcmNoX19tYXNrLWJvdGguaXNBY3Qge1xuICBib3gtc2hhZG93OiAwcHggMC4zMTI1cmVtIDAuNjI1cmVtICNGMkM5NEM7XG59XG4uc2VhcmNoX19tYXNrLXRvdGFsIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbi5zZWFyY2hfX21hc2stdG90YWwgaDQge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI0YyOTk0QTtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG4uc2VhcmNoX19tYXNrLXRvdGFsIHAge1xuICBsaW5lLWhlaWdodDogMS41O1xufSIsIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvY29tbW9uXCI7XG5cbiVjbGVhciB7XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbn1cblxuXG4uc2VhcmNoe1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICZfX2ZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuICAmX19oZWFkZXJ7XG4gICAgaGVpZ2h0OiByZW0oMTY0cHgpO1xuICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gICAgcGFkZGluZzogcmVtKDIwcHgpO1xuICAgIC5zZWFyY2hfX2ZsZXh7XG4gICAgICBwYWRkaW5nLXRvcDogcmVtKDE2cHgpO1xuICAgIH1cblxuXG4gICAgLy8gJi10aXRsZXtcbiAgICAvLyAgIHBhZGRpbmctbGVmdDogcmVtKDIwcHgpO1xuICAgIC8vICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgLy8gICBjb2xvcjogIzRGNEY0RjtcbiAgICAvLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vICAgZm9udC1zaXplOiByZW0oMzZweCk7XG4gICAgLy8gICBsaW5lLWhlaWdodDogcmVtKDU0cHgpO1xuICAgIC8vIH1cbiAgICAvLyAmLWNpdHksICYtYXJlYXtcbiAgICAvLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvLyAgIG1hcmdpbi10b3A6IHJlbSgyMHB4KTtcbiAgICAvLyAgIC8vIG1hcmdpbi10b3A6IHJlbSg0MHB4KTtcbiAgICAvLyAgICY6YmVmb3Jle1xuICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gICAgIHRvcDogcmVtKC04cHgpO1xuICAgIC8vICAgICBsZWZ0OiByZW0oMjBweCk7XG4gICAgLy8gICAgIHBhZGRpbmc6IDAgcmVtKDhweCk7XG4gICAgLy8gICAgIGZvbnQtc2l6ZTogcmVtKDEycHgpO1xuICAgIC8vICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC8vICAgfVxuICAgIC8vICAgc2VsZWN0e1xuICAgIC8vICAgICBwYWRkaW5nOiByZW0oMCkgcmVtKDIwcHgpO1xuICAgIC8vICAgICB3aWR0aDogMTAwJTtcbiAgICAvLyAgICAgaGVpZ2h0OiByZW0oNTBweCk7XG4gICAgLy8gICAgIGZvbnQtc2l6ZTogcmVtKDE2cHgpO1xuICAgIC8vICAgICBmb250LWZhbWlseTogJ0hpcmFnaW5vIFNhbnMgQ05TJywn5b6u6Luf5q2j6buR6auUJywnQXJpYWwnO1xuICAgIC8vICAgICBib3JkZXItcmFkaXVzOiByZW0oNTBweCk7XG4gICAgLy8gICAgIGJvcmRlcjogcmVtKDJweCkgc29saWQgIzRGNEY0RjtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cblxuICB9XG4gICZfX2JvZHl7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMzBweCk7XG4gICAgLy8gYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgICBwYWRkaW5nOiByZW0oMjBweCk7XG4gICAgJi10aXRsZXtcbiAgICAgIHBhZGRpbmctbGVmdDogcmVtKDIwcHgpO1xuICAgICAgLy8gdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBjb2xvcjogIzRGNEY0RjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiByZW0oMzZweCk7XG4gICAgICBsaW5lLWhlaWdodDogcmVtKDU0cHgpO1xuICAgIH1cbiAgICAmLWNpdHksICYtYXJlYXtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbi10b3A6IHJlbSgyMHB4KTtcbiAgICAgIC8vIG1hcmdpbi10b3A6IHJlbSg0MHB4KTtcbiAgICAgICY6YmVmb3Jle1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogcmVtKC04cHgpO1xuICAgICAgICBsZWZ0OiByZW0oMjBweCk7XG4gICAgICAgIHBhZGRpbmc6IDAgcmVtKDhweCk7XG4gICAgICAgIGZvbnQtc2l6ZTogcmVtKDEycHgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgfVxuICAgICAgc2VsZWN0e1xuICAgICAgICBwYWRkaW5nOiByZW0oMCkgcmVtKDIwcHgpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiByZW0oNTBweCk7XG4gICAgICAgIGZvbnQtc2l6ZTogcmVtKDE2cHgpO1xuICAgICAgICBmb250LWZhbWlseTogJ0hpcmFnaW5vIFNhbnMgQ05TJywn5b6u6Luf5q2j6buR6auUJywnQXJpYWwnO1xuICAgICAgICBib3JkZXItcmFkaXVzOiByZW0oNTBweCk7XG4gICAgICAgIGJvcmRlcjogcmVtKDJweCkgc29saWQgIzRGNEY0RjtcbiAgICAgIH1cbiAgICB9XG4gICAgJi1jaXR5e1xuICAgICAgJjpiZWZvcmV7XG4gICAgICAgIGNvbnRlbnQ6ICfnuKPluIInO1xuICAgICAgfVxuICAgIH1cbiAgICAmLWFyZWF7XG4gICAgICAmOmJlZm9yZXtcbiAgICAgICAgY29udGVudDogJ+mEiemOruW4guWNgOWIpSc7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICZfX2luZm97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiByZW0oMzZweCk7XG4gICAgZm9udC1zaXplOiByZW0oMTJweCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IzRGNEY0RjtcbiAgICBmaWd1cmV7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBoZWlnaHQ6IHJlbSg0MHB4KTtcbiAgICAgIGltZ3tcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLm51bXtcbiAgICAgIG1hcmdpbjogMCByZW0oMnB4KTtcbiAgICAgIGZvbnQtc2l6ZTogcmVtKDI0cHgpO1xuICAgICAgY29sb3I6ICNGMjk5NEE7XG4gICAgfVxuICB9XG4gICZfX21hc2t7XG4gICAgbWFyZ2luLXRvcDogcmVtKDM4cHgpO1xuICAgIGg0e1xuICAgICAgZm9udC1zaXplOiByZW0oMjBweCk7XG4gICAgfVxuICAgICYtY2hpbGQsICYtYWR1bHQsICYtYm90aHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiByZW0oODBweCk7XG4gICAgICBoZWlnaHQ6IHJlbSg4MHB4KTtcbiAgICAgIG1hcmdpbi10b3A6IHJlbSgyNHB4KTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2JhKCMwMDAsIDAuMjUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogcmVtKDIwcHgpO1xuICAgICAgaW1ne1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgfVxuICAgICAgJi5pc0FjdHtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IHJlbSg1cHgpIHJlbSgxMHB4KSAjRjJDOTRDO1xuXG4gICAgICB9XG4gICAgfVxuICAgICYtdG90YWx7XG4gICAgICBtYXJnaW4tYm90dG9tOiByZW0oMzJweCk7XG4gICAgICBmb250LXNpemU6IHJlbSgxNHB4KTtcbiAgICAgIGg0e1xuICAgICAgICAgIGZvbnQtc2l6ZTogcmVtKDIwcHgpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGNvbG9yOiAjRjI5OTRBO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgICAgICB9XG4gICAgICBwe1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

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
        this.mask = '';
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.appService.fetchTaiwanCity(), this.appService.fetchPharmacy()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => {
            return [res[0], res[1]];
        })).subscribe(res => {
            // console.log(123, res)
            // console.log('alllist', res[1] )
            this.getTaiwanCity = res[0];
            this.onCityChange('台北市');
            // this.appStoreService.getPharmacy$.next( res[1] );
        });
        this.appStoreService.getCalMask$.subscribe(res => {
            this.childTotal = res.childTotal;
            this.adultTotal = res.adultTotal;
        });
    }
    onCityChange(event) {
        this.appStoreService.setArea(event);
        this.city = event;
        this.appStoreService.setPharmacyList(this.city);
    }
    onAreaChange(event) {
        if (event === '全區') {
            this.area = '';
        }
        else {
            this.area = event;
        }
        this.appStoreService.setPharmacyList(this.city, this.area);
    }
    onMask(str) {
        this.mask = str;
        this.appStoreService.setMask(str);
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