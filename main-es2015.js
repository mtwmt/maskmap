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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"maskmap\">\n  <!-- <a href=\"javascript:void(0);\"\n    class=\"hamburger\" title=\"MENU\"\n    [ngClass]=\"{ 'active': isOpen }\"\n    (click)=\"onSwitch()\"\n  ><span>MENU</span></a> -->\n  <app-search\n    (doOpen)=\"getOpen($event)\"\n    [ngClass]=\"{ active: isOpen }\"\n  ></app-search>\n  <app-map></app-map>\n  <!-- <app-masklist></app-masklist> -->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"map-container\">\n  <div class=\"map-frame\">\n    <div id=\"map\" #maskmap></div>\n  </div>\n\n</div>\n<!-- <app-masklist></app-masklist> -->\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masklist/masklist.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masklist/masklist.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pharmacy\">\n  <div *ngIf=\"!(appStoreService.getPharmacy$ | async)?.length \">\n    <app-spinner></app-spinner>\n  </div>\n  <div\n    class=\"pharmacy__wrap\"\n    *ngFor=\"let item of appStoreService.getPharmacy$ | async; let idx = index\"\n\n    (click)=\"setInfo(item.geometry, item.properties)\"\n  >\n    <div class=\"pharmacy__title\">{{ item.properties.name }}</div>\n    <div class=\"pharmacy__block-left\">\n      <div class=\"pharmacy__addr\">{{ item.properties.address }}</div>\n      <div class=\"pharmacy__phone\">{{ item.properties.phone }}</div>\n    </div>\n    <div class=\"pharmacy__block-right\">\n      <div class=\"pharmacy__child\">\n      <img src= \"{{assetsUrl}}/child.svg\"/>\n        <p>{{ item.properties.mask_child }}</p>\n      </div>\n      <div class=\"pharmacy__adult\">\n        <img src=\"{{assetsUrl}}/adult.svg\" />\n        <p>{{ item.properties.mask_adult }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search\" [ngClass]=\"{ 'active': isOpen }\">\n  <div class=\"search__icon\" (click)=\"onSwitch()\">\n    <fa-icon [icon]=\"faSearch\"></fa-icon>\n  </div>\n  <div class=\"search__header\">\n    <figure><img src= \"{{assetsUrl}}/nhi.svg\"/></figure>\n    <div class=\"search__flex\">\n      <div class=\"search__info\">\n        <figure><img src= \"{{assetsUrl}}/calendar.svg\"/></figure>\n        <p><span class=\"num\">7</span>天一次</p>\n      </div>\n      <div class=\"search__info\">\n        <figure><img src= \"{{assetsUrl}}/mask.svg\"/></figure>\n        <p>限購<span class=\"num\">2</span>片</p>\n      </div>\n      <div class=\"search__info\">\n        <figure><img src= \"{{assetsUrl}}/card.svg\"/></figure>\n        <p>代購<span class=\"num\">1</span>卡</p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"search__body\">\n  <div class=\"search__select\">\n    <h4>搜尋區域</h4>\n    <div class=\"search__select-city\">\n      <select name=\"\" id=\"city\" (change)=\"onCityChange($event.target.value)\">\n        <option\n          *ngFor=\"let item of appStoreService.getCityList$ | async\"\n          [(value)]=\"item.Name\"\n          >{{ item.Name }}</option\n        >\n      </select>\n    </div>\n    <div class=\"search__select-area\">\n      <select name=\"\" id=\"zone\" (change)=\"onAreaChange($event.target.value)\">\n        <option>全區</option>\n        <option\n          *ngFor=\"let item of appStoreService.getAreaList$ | async\"\n          [(value)]=\"item.Name\"\n          >{{ item.Name }}</option\n        >\n      </select>\n    </div>\n  </div>\n  <app-masklist></app-masklist>\n  <div class=\"search__mask\">\n    <h4>{{ city }}{{ area }} <span>口罩總量：{{ childTotal + adultTotal }}</span></h4>\n    <div class=\"search__mask-flex\">\n      <div class=\"search__mask-child isAct\" (click)=\"onMask('child')\"\n        [ngClass]=\"{ 'isAct': mask === 'child' }\"\n      >\n        <img src= \"{{assetsUrl}}/child.svg\"/>\n      </div>\n      <div class=\"search__mask-adult\" (click)=\"onMask('adult')\"\n        [ngClass]=\"{ 'isAct': mask === 'adult' }\"\n      >\n        <img src= \"{{assetsUrl}}/adult.svg\"/>\n      </div>\n      <div class=\"search__mask-both\" (click)=\"onMask('both')\"\n        [ngClass]=\"{ 'isAct': mask === '' }\"\n      >\n        <img src= \"{{assetsUrl}}/both.svg\"/>\n      </div>\n    </div>\n    <div class=\"search__mask-total\">\n      <p> <span>小孩口罩：{{ childTotal }}</span><span>成人口罩：{{ adultTotal }}</span></p>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"spinner\">\n    <div class=\"spinner-line\"></div>\n    <div class=\"spinner-line\"></div>\n    <div class=\"spinner-line\"></div>\n</div>\n\n");

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
    { path: '', redirectTo: '/', pathMatch: 'full' },
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
        this.city$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.city);
        this.getCityList$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.getCityList);
        this.getAreaList$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.getAreaList);
        this.getPharmacy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.getCurInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.getCalMask$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    setLocal(city, area) {
        this.city = city;
        this.city$.next(city);
        this.setPharmacyList(city, area);
    }
    setCityList(ary) {
        this.getCityList = ary;
        this.getCityList$.next(this.getCityList);
    }
    setAreaList(city) {
        this.getAreaList = this.getCityList.filter(e => e.Name === city);
        this.getAreaList$.next(this.getAreaList[0].Districts);
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
        console.log('qqwewqe', this.getPharmacy);
        this.setCalMask(newList);
    }
    setPharmacyInfo(pos, info) {
        const newInfo = Object.assign({}, info, { coordinates: pos.coordinates });
        this.getCurInfo$.next(newInfo);
    }
    setMask(str) {
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
/* harmony default export */ __webpack_exports__["default"] = (".maskmap:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n.maskmap {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n}\n\n.maskmap app-search {\n  position: relative;\n  z-index: 9999;\n  width: 350px;\n  height: 100vh;\n  background: #fff;\n}\n\n.maskmap app-map {\n  position: relative;\n  width: calc( 100% - 300px );\n}\n\n@media (max-width: 800px) {\n  .maskmap {\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n  .maskmap .hamburger {\n    display: block;\n  }\n  .maskmap app-search {\n    position: absolute;\n    z-index: 99999;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n    -webkit-transform: translateX(-350px);\n            transform: translateX(-350px);\n  }\n  .maskmap app-search.active {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n  .maskmap app-map {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxNYW5keVxcRGVza3RvcFxcYW5ndWxhclxcbWFza21hcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNISjs7QUR5RUE7RUFFRSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ3ZFRjs7QUR3RUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDdEVKOztBRHlFRTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7QUN2RUo7O0FEMkVFO0VBbEJGO0lBbUJJLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDeEVGO0VEeUVFO0lBQ0UsY0FBQTtFQ3ZFSjtFRHlFRTtJQUNFLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLHdCQUFBO0lBQUEsZ0JBQUE7SUFDQSxxQ0FBQTtZQUFBLDZCQUFBO0VDdkVKO0VEd0VJO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtFQ3RFTjtFRHlFRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUN2RUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGltcG9ydCBcIi4uL2Fzc2V0cy9jb21tb25cIjtcblxuJWNsZWFyIHtcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjbGVhcjogYm90aDtcbiAgfVxufVxuXG5cbi8vIEBtaXhpbiBoYW1idXJnZXIoJGNvbG9yLCAkaWNvblcpIHtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB3aWR0aDogJGljb25XO1xuLy8gICBoZWlnaHQ6ICRpY29uVy82O1xuLy8gICBiYWNrZ3JvdW5kOiAkY29sb3I7XG4vLyAgIG1hcmdpbjogJGljb25XLzMgMDtcbi8vICAgJjpiZWZvcmUge1xuLy8gICAgIHRyYW5zaXRpb246MC41cztcbi8vICAgICBjb250ZW50OiAnJztcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgdG9wOiAtJGljb25XLzM7XG4vLyAgICAgbGVmdDogMDtcbi8vICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICB3aWR0aDogJGljb25XO1xuLy8gICAgIGhlaWdodDogJGljb25XLzY7XG4vLyAgICAgYmFja2dyb3VuZDogJGNvbG9yO1xuLy8gICB9XG4vLyAgICY6YWZ0ZXIge1xuLy8gICAgIHRyYW5zaXRpb246MC41cztcbi8vICAgICBjb250ZW50OiAnJztcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgdG9wOiAkaWNvblcvMztcbi8vICAgICBsZWZ0OiAwO1xuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgIHdpZHRoOiAkaWNvblc7XG4vLyAgICAgaGVpZ2h0OiAkaWNvblcvNjtcbi8vICAgICBiYWNrZ3JvdW5kOiAkY29sb3I7XG4vLyAgIH1cbi8vIH1cblxuLy8gLmhhbWJ1cmdlciB7XG4vLyAgIGRpc3BsYXk6IG5vbmU7XG4vLyAgIHotaW5kZXg6IDEwMDAwMDtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICB0b3A6IHJlbSgyMHB4KTtcbi8vICAgcmlnaHQ6IHJlbSgyMHB4KTtcbi8vICAgd2lkdGg6IDUwcHg7XG4vLyAgIGhlaWdodDogNDVweDtcbi8vICAgcGFkZGluZzogMTBweDtcbi8vICAgYmFja2dyb3VuZDogI2UwZTBlMDtcbi8vICAgYm9yZGVyLXJhZGl1czogcmVtKDRweCk7XG4vLyAgIHNwYW4ge1xuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcbi8vICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuLy8gICAgIEBpbmNsdWRlIGhhbWJ1cmdlcigjNEY0RjRGLCAzMHB4KTtcbi8vICAgfVxuLy8gICAmLmFjdGl2ZSB7XG4vLyAgICAgc3BhbiB7XG4vLyAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICAmOmJlZm9yZSB7XG4vLyAgICAgICAgIHRvcDogcmVtKC0xMHB4KTtcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwLjVweCkgcm90YXRlKDQ1ZGVnKTtcbi8vICAgICAgIH1cbi8vICAgICAgICY6YWZ0ZXIge1xuLy8gICAgICAgICB0b3A6IHJlbSgtMTBweCk7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMC41cHgpIHJvdGF0ZSgtNDVkZWcpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4ubWFza21hcHtcbiAgQGV4dGVuZCAlY2xlYXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYXBwLXNlYXJjaHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB9XG5cbiAgYXBwLW1hcHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAzMDBweCApO1xuICAgIC8vIGhlaWdodDogY2FsYyggMTAwdmggLSAxMC42MjVyZW0gKTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLmhhbWJ1cmdlciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgYXBwLXNlYXJjaHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDk5OTk5O1xuICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzUwcHgpO1xuICAgICAgJi5hY3RpdmV7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgICAgfVxuICAgIH1cbiAgICBhcHAtbWFwe1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iLCIubWFza21hcDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbn1cblxuLm1hc2ttYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWFza21hcCBhcHAtc2VhcmNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTk5O1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4ubWFza21hcCBhcHAtbWFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogY2FsYyggMTAwJSAtIDMwMHB4ICk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLm1hc2ttYXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLm1hc2ttYXAgLmhhbWJ1cmdlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLm1hc2ttYXAgYXBwLXNlYXJjaCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk5OTk5O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zNTBweCk7XG4gIH1cbiAgLm1hc2ttYXAgYXBwLXNlYXJjaC5hY3RpdmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG4gIC5tYXNrbWFwIGFwcC1tYXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn0iXX0= */");

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
    constructor() {
        this.isOpen = true;
        // onSwitch() {
        //   if (!this.isOpen) {
        //     this.isOpen = true;
        //   } else {
        //     this.isOpen = false;
        //   }
        // }
    }
    getOpen(data) {
        this.isOpen = data;
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
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");












// import { LeafletModule } from '@asymmetrik/ngx-leaflet';
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
            _masklist_masklist_component__WEBPACK_IMPORTED_MODULE_9__["MasklistComponent"],
            _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__["SpinnerComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"]
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
            this.appStoreService.setCityList(res);
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
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            this.appStoreService.setPharmacy(res);
        }));
    }
    fetchlocal() {
        const token = 'pk.eyJ1IjoibXR3bXQiLCJhIjoiY2s2bnczbXh4MHNtYTN1cnVoa2FycjEzayJ9.r5GL2Ms2aZ6vjaJhzpSCOg';
        const key = 'AIzaSyBGd0MP4HMs0p6dQ_xV6gt-5XBkZc4jmD8';
        // const location = [-73.989, 40.733];
        const location = [24.953750499999998, 121.34356229999999];
        // return this.httpClient.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.join(',')}&key=${key}`)
        return this.httpClient.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location.join(',')}.json?routing=true&access_token=${token}`);
    }
    featchTWGeo() {
        return this.httpClient.get(`${this.assetsUrl}/tw-county.geojson`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            return res.features;
            // const newGEO = res.features.reduce((total, arr) => {
            //   const temp = arr.geometry.coordinates.reduce((t, a) => {
            //     let aa = [];
            //     a.map(e => {
            //       aa.push(e.reverse())
            //     })
            //     return [...t, ...aa];
            //   }, []);
            //   const obj = {
            //     properties: arr.properties,
            //     geometry: {
            //       type: arr.geometry.type,
            //       coordinates: temp
            //     }
            //   };
            //   console.log( 'obj',obj,temp )
            //   return [...total, obj];
            // }, []);
            // console.log('GEO', newGEO, res)
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
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.leaflet-popup-content:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.map-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.map-frame {\n  height: 100%;\n}\n#map {\n  height: 100%;\n}\n.customPopup {\n  font-family: \"Hiragino Sans CNS\", \"微軟正黑體\", \"Arial\";\n  width: 18.75rem;\n}\n.customPopup__title {\n  font-size: 1.125rem;\n  font-weight: bold;\n  line-height: 1.6875rem;\n}\n.customPopup__addr, .customPopup__note {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #828282;\n}\n.customPopup__phone {\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #828282;\n}\n.customPopup__updated {\n  margin-top: 0.5rem;\n  font-size: 0.75rem;\n  line-height: 1.5;\n  color: #828282;\n}\n.customPopup__child, .customPopup__adult {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #4f4f4f;\n}\n.customPopup__child img, .customPopup__adult img {\n  height: 1.875rem;\n}\n.customPopup__child p, .customPopup__adult p {\n  text-align: center;\n  line-height: 1;\n  margin: 0;\n}\n.customPopup__tel {\n  display: block;\n  margin: 0.5rem 0;\n  line-height: 0;\n  padding: 0.375rem 0;\n  text-align: center;\n  border: 1px solid #f2c94c;\n  box-sizing: border-box;\n  border-radius: 1.25rem;\n}\n.customPopup__google {\n  clear: both;\n  display: block;\n  margin-top: 0.5rem;\n  padding: 0.375rem 0;\n  font-size: 1.25rem;\n  font-weight: bold;\n  text-align: center;\n  color: #fff !important;\n  text-decoration: none !important;\n  border-radius: 1.25rem;\n  background: #f2c94c;\n}\n.customPopup__google img {\n  position: relative;\n  top: 0.125rem;\n  margin-right: 0.5rem;\n}\n.customPopup__block-left {\n  float: left;\n  width: 55%;\n}\n.customPopup__block-right {\n  float: right;\n  width: 45%;\n}\n.customPopup__block-flex {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFwL0M6XFxVc2Vyc1xcTWFuZHlcXERlc2t0b3BcXGFuZ3VsYXJcXG1hc2ttYXAvc3JjXFxhcHBcXG1hcFxcbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0dkO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FEREo7QUNLQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBREZGO0FDS0E7RUFDRSxZQUFBO0FERkY7QUNLQTtFQUNFLFlBQUE7QURGRjtBQ2NBO0VBQ0Usa0RBQUE7RUFDQSxlQUFBO0FEWEY7QUNZRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBRFZKO0FDWUU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRFZKO0FDYUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FEWEo7QUNhRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURYSjtBQ2FFO0VBRUUsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURaSjtBQ2FJO0VBQ0UsZ0JBQUE7QURYTjtBQ2FJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBRFhOO0FDY0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBRFpKO0FDY0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBRFpKO0FDYUk7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBRFhOO0FDZUk7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBRGJOO0FDZUk7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBRGJOO0FDZUk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtBRGJOIiwiZmlsZSI6InNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5sZWFmbGV0LXBvcHVwLWNvbnRlbnQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5tYXAtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi5tYXAtZnJhbWUge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNtYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jdXN0b21Qb3B1cCB7XG4gIGZvbnQtZmFtaWx5OiBcIkhpcmFnaW5vIFNhbnMgQ05TXCIsIFwi5b6u6Luf5q2j6buR6auUXCIsIFwiQXJpYWxcIjtcbiAgd2lkdGg6IDE4Ljc1cmVtO1xufVxuLmN1c3RvbVBvcHVwX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS42ODc1cmVtO1xufVxuLmN1c3RvbVBvcHVwX19hZGRyLCAuY3VzdG9tUG9wdXBfX25vdGUge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5jdXN0b21Qb3B1cF9fcGhvbmUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmN1c3RvbVBvcHVwX191cGRhdGVkIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmN1c3RvbVBvcHVwX19jaGlsZCwgLmN1c3RvbVBvcHVwX19hZHVsdCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM0ZjRmNGY7XG59XG4uY3VzdG9tUG9wdXBfX2NoaWxkIGltZywgLmN1c3RvbVBvcHVwX19hZHVsdCBpbWcge1xuICBoZWlnaHQ6IDEuODc1cmVtO1xufVxuLmN1c3RvbVBvcHVwX19jaGlsZCBwLCAuY3VzdG9tUG9wdXBfX2FkdWx0IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW46IDA7XG59XG4uY3VzdG9tUG9wdXBfX3RlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcGFkZGluZzogMC4zNzVyZW0gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjJjOTRjO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAxLjI1cmVtO1xufVxuLmN1c3RvbVBvcHVwX19nb29nbGUge1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgcGFkZGluZzogMC4zNzVyZW0gMDtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcbiAgYmFja2dyb3VuZDogI2YyYzk0Yztcbn1cbi5jdXN0b21Qb3B1cF9fZ29vZ2xlIGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwLjEyNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4uY3VzdG9tUG9wdXBfX2Jsb2NrLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDU1JTtcbn1cbi5jdXN0b21Qb3B1cF9fYmxvY2stcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA0NSU7XG59XG4uY3VzdG9tUG9wdXBfX2Jsb2NrLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL2NvbW1vblwiO1xuXG4lY2xlYXIge1xuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG59XG5cbi5tYXAtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi5tYXAtZnJhbWUge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNtYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sZWFmbGV0LXBvcHVwIHtcbiAgLy8gJi1jb250ZW50LXdyYXBwZXJ7XG4gIC8vICAgYmFja2dyb3VuZDogIzE1OTtcbiAgLy8gfVxuICAmLWNvbnRlbnQge1xuICAgIEBleHRlbmQgJWNsZWFyO1xuICB9XG59XG5cbi5jdXN0b21Qb3B1cCB7XG4gIGZvbnQtZmFtaWx5OiBcIkhpcmFnaW5vIFNhbnMgQ05TXCIsIFwi5b6u6Luf5q2j6buR6auUXCIsIFwiQXJpYWxcIjtcbiAgd2lkdGg6IHJlbSgzMDBweCk7XG4gICZfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IHJlbSgxOHB4KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogcmVtKDI3cHgpO1xuICB9XG4gICZfX2FkZHIsJl9fbm90ZSB7XG4gICAgZm9udC1zaXplOiByZW0oMTRweCk7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzgyODI4MjtcbiAgfVxuXG4gICZfX3Bob25lIHtcbiAgICBtYXJnaW4tdG9wOiByZW0oOHB4KTtcbiAgICBmb250LXNpemU6IHJlbSgxNHB4KTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjODI4MjgyO1xuICB9XG4gICZfX3VwZGF0ZWQge1xuICAgIG1hcmdpbi10b3A6IHJlbSg4cHgpO1xuICAgIGZvbnQtc2l6ZTogcmVtKDEycHgpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICM4MjgyODI7XG4gIH1cbiAgJl9fY2hpbGQsXG4gICZfX2FkdWx0IHtcbiAgICBmb250LXNpemU6IHJlbSgyNHB4KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzRmNGY0ZjtcbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiByZW0oMzBweCk7XG4gICAgfVxuICAgIHAge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG4gICZfX3RlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiByZW0oOHB4KSAwO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IHJlbSg2cHgpIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMmM5NGM7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiByZW0oMjBweCk7XG4gIH1cbiAgJl9fZ29vZ2xlIHtcbiAgICBjbGVhcjogYm90aDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiByZW0oOHB4KTtcbiAgICBwYWRkaW5nOiByZW0oNnB4KSAwO1xuICAgIGZvbnQtc2l6ZTogcmVtKDIwcHgpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IHJlbSgyMHB4KTtcbiAgICBiYWNrZ3JvdW5kOiAjZjJjOTRjO1xuICAgIGltZyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IHJlbSgycHgpO1xuICAgICAgbWFyZ2luLXJpZ2h0OiByZW0oOHB4KTtcbiAgICB9XG4gIH1cbiAgJl9fYmxvY2sge1xuICAgICYtbGVmdCB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHdpZHRoOiA1NSU7XG4gICAgfVxuICAgICYtcmlnaHQge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgd2lkdGg6IDQ1JTtcbiAgICB9XG4gICAgJi1mbGV4IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

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
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! leaflet.markercluster */ "./node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js");
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_8__);









let MapComponent = class MapComponent {
    constructor(appService, appStoreService) {
        this.appService = appService;
        this.appStoreService = appStoreService;
        // @ViewChild('maskmap', { static: true }) chartElement: ElementRef;
        this.assetsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].assetsUrl;
        this.location = [25.0032999, 121.5540404];
        this.location$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](this.location);
        this.countryLayer = null;
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
            // console.log('list', res);
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
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_7__["map"]('map', {
            center: [25.0032999, 121.5540404],
            zoom: 13,
            zoomControl: false,
            layers: [leaflet__WEBPACK_IMPORTED_MODULE_7__["tileLayer"]('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                    attribution: '&copy; 口罩地圖 by <a href="https://mtwmt.github.io/" target="_blank">Mandy</a>',
                    maxZoom: 20,
                    id: 'mapbox/streets-v11',
                    accessToken: 'pk.eyJ1IjoibXR3bXQiLCJhIjoiY2s2bnczbXh4MHNtYTN1cnVoa2FycjEzayJ9.r5GL2Ms2aZ6vjaJhzpSCOg'
                })]
        });
        this.appStoreService.getCurInfo$.subscribe(res => {
            this.onPharmacy(res);
        });
        this.location$.subscribe(res => {
            this.location = res;
            this.map.setView(res, 9);
            // console.log('location', this.location)
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])(this.appService.featchTWGeo(), this.appStoreService.city$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            return res;
        })).subscribe(res => {
            if (!res[1]) {
                return;
            }
            if (this.countryLayer) {
                this.countryLayer.clearLayers();
            }
            const city = res[1];
            const geo = res[0].filter(e => e.properties.name === city);
            this.countryLayer = leaflet__WEBPACK_IMPORTED_MODULE_7__["geoJSON"](null)
                .addData(geo)
                .addTo(this.map);
        });
    }
    ngAfterViewInit() { }
    ngOnDestroy() {
        this.location$.unsubscribe();
    }
    renderMap(list, cur) {
        // console.log( 'render', list ,cur)
        if (this.group) {
            this.map.removeLayer(this.group);
        }
        this.group = new leaflet__WEBPACK_IMPORTED_MODULE_7__["MarkerClusterGroup"]().addTo(this.map);
        list.map((e, i) => {
            this.addMarker(e);
        });
        this.map.addLayer(this.group);
        leaflet__WEBPACK_IMPORTED_MODULE_7__["marker"](this.location, { icon: this.icons.gold }).addTo(this.map);
    }
    onPharmacy(info) {
        this.map
            .setView(info.coordinates, 16)
            .closePopup();
        if (this.prevPoint) {
            this.map.removeLayer(this.prevPoint);
        }
        this.prevPoint = leaflet__WEBPACK_IMPORTED_MODULE_7__["marker"](info.coordinates, { icon: this.icons.red })
            .addTo(this.map)
            .bindPopup(this.customPopup(info))
            .openPopup();
    }
    addMarker(info) {
        const marker = leaflet__WEBPACK_IMPORTED_MODULE_7__["marker"](info.coordinates, { icon: this.icons.grey }).bindPopup(this.customPopup(info));
        this.group.addLayer(marker);
    }
    removeMarker() {
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
        <a href="https://www.google.com/maps/dir/${this.location[0]},${this.location[1]}/${info.coordinates[0]},${info.coordinates[1]}"
          class="customPopup__google"
          target="_blank"
        >
          <img src="${this.assetsUrl}/vecotr.svg" />規劃路線
        </a>
      </div>
    `;
    }
    customIcon(color) {
        return leaflet__WEBPACK_IMPORTED_MODULE_7__["icon"]({
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
/* harmony default export */ __webpack_exports__["default"] = (".pharmacy__wrap:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n.pharmacy {\n  position: absolute;\n  width: 100%;\n  height: calc(100% - 200px - 205px );\n  overflow-y: scroll;\n}\n\n.pharmacy__wrap {\n  height: 8.125rem;\n  margin: 0.625rem 0.625rem;\n  padding: 1rem 0.625rem;\n  box-shadow: 0px 5px 10px #f2f2f2;\n  border-radius: 0.625rem;\n  background: #fff;\n  cursor: pointer;\n}\n\n.pharmacy__title {\n  font-size: 1.125rem;\n  font-weight: bold;\n  line-height: 1.6875rem;\n}\n\n.pharmacy__addr {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #828282;\n}\n\n.pharmacy__phone {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #828282;\n}\n\n.pharmacy__child, .pharmacy__adult {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #828282;\n}\n\n.pharmacy__child img, .pharmacy__adult img {\n  height: 2.5rem;\n}\n\n.pharmacy__child p, .pharmacy__adult p {\n  text-align: center;\n}\n\n.pharmacy__block-left {\n  float: left;\n  width: 50%;\n}\n\n.pharmacy__block-right {\n  float: right;\n  width: 50%;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFza2xpc3QvQzpcXFVzZXJzXFxNYW5keVxcRGVza3RvcFxcYW5ndWxhclxcbWFza21hcC9zcmNcXGFwcFxcbWFza2xpc3RcXG1hc2tsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYXNrbGlzdC9tYXNrbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBRGtCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7QUNmRjs7QURrQkU7RUFRRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDdkJKOztBRHlCRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ3ZCSjs7QUR5QkU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ3ZCSjs7QUR5QkU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ3ZCSjs7QUR5QkU7RUFFRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ3hCSjs7QUR5Qkk7RUFDRSxjQUFBO0FDdkJOOztBRHlCSTtFQUNFLGtCQUFBO0FDdkJOOztBRDJCSTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDekJOOztBRDJCSTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7QUN6Qk4iLCJmaWxlIjoic3JjL2FwcC9tYXNrbGlzdC9tYXNrbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvY29tbW9uXCI7XG5cbiVjbGVhciB7XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbn1cblxuXG5cblxuLy8gOmhvc3Qge1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIGJvdHRvbTogMDtcbi8vICAgei1pbmRleDogOTk5OTtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIGhlaWdodDogcmVtKDEzMHB4ICsgNDBweCk7XG4vLyB9XG5cbi5waGFybWFjeSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMjAwcHggLSAyMDVweCApO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIC8vIG92ZXJmbG93LXg6IHNjcm9sbDtcblxuICAmX193cmFwIHtcbiAgICBAZXh0ZW5kICVjbGVhcjtcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gbGVmdDogMDtcbiAgICAvLyB0b3A6IDA7XG4gICAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgLy8gd2lkdGg6IHJlbSgzNTBweCk7XG4gICAgaGVpZ2h0OiByZW0oMTMwcHgpO1xuICAgIG1hcmdpbjogcmVtKDEwcHgpIHJlbSgxMHB4KTtcbiAgICBwYWRkaW5nOiByZW0oMTZweCkgcmVtKDEwcHgpO1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAjZjJmMmYyO1xuICAgIGJvcmRlci1yYWRpdXM6IHJlbSgxMHB4KTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAmX190aXRsZSB7XG4gICAgZm9udC1zaXplOiByZW0oMThweCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IHJlbSgyN3B4KTtcbiAgfVxuICAmX19hZGRyIHtcbiAgICBmb250LXNpemU6IHJlbSgxNHB4KTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjODI4MjgyO1xuICB9XG4gICZfX3Bob25lIHtcbiAgICBmb250LXNpemU6IHJlbSgxNHB4KTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjODI4MjgyO1xuICB9XG4gICZfX2NoaWxkLFxuICAmX19hZHVsdCB7XG4gICAgZm9udC1zaXplOiByZW0oMjRweCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM4MjgyODI7XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogcmVtKDQwcHgpO1xuICAgIH1cbiAgICBwIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbiAgJl9fYmxvY2sge1xuICAgICYtbGVmdCB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICAgICYtcmlnaHQge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICB9XG4gIH1cbn1cbiIsIi5waGFybWFjeV9fd3JhcDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnBoYXJtYWN5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMDBweCAtIDIwNXB4ICk7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5waGFybWFjeV9fd3JhcCB7XG4gIGhlaWdodDogOC4xMjVyZW07XG4gIG1hcmdpbjogMC42MjVyZW0gMC42MjVyZW07XG4gIHBhZGRpbmc6IDFyZW0gMC42MjVyZW07XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAjZjJmMmYyO1xuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBoYXJtYWN5X190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS42ODc1cmVtO1xufVxuLnBoYXJtYWN5X19hZGRyIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4ucGhhcm1hY3lfX3Bob25lIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4ucGhhcm1hY3lfX2NoaWxkLCAucGhhcm1hY3lfX2FkdWx0IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5waGFybWFjeV9fY2hpbGQgaW1nLCAucGhhcm1hY3lfX2FkdWx0IGltZyB7XG4gIGhlaWdodDogMi41cmVtO1xufVxuLnBoYXJtYWN5X19jaGlsZCBwLCAucGhhcm1hY3lfX2FkdWx0IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGhhcm1hY3lfX2Jsb2NrLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbn1cbi5waGFybWFjeV9fYmxvY2stcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.search {\n  position: relative;\n}\n.search__icon {\n  display: none;\n  position: absolute;\n  left: 100%;\n  bottom: 0;\n  padding: 0.5rem;\n  background: #e0e0e0;\n  border-radius: 0.25rem;\n  cursor: pointer;\n}\n@media (max-width: 800px) {\n  .search__icon {\n    display: block;\n  }\n}\n.search__flex {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n.search__header {\n  background: #e0e0e0;\n  padding: 0.625rem 1.25rem 0.625rem 1.25rem;\n}\n.search__header .search__flex {\n  padding-top: 0.5rem;\n}\n.search__body {\n  position: relative;\n  height: calc(100% - 130px);\n}\n.search__info {\n  text-align: center;\n  line-height: 2.25rem;\n  font-size: 0.75rem;\n  font-weight: bold;\n  color: #4f4f4f;\n}\n.search__info figure {\n  display: inline-block;\n  height: 2.5rem;\n}\n.search__info figure img {\n  vertical-align: middle;\n}\n.search__info .num {\n  margin: 0 0.125rem;\n  font-size: 1.5rem;\n  color: #f2994a;\n}\n.search__select {\n  padding: 0.625rem;\n}\n.search__select h4 {\n  padding-left: 0.625rem;\n  letter-spacing: 5px;\n  color: #4f4f4f;\n  font-weight: bold;\n  font-size: 1.625rem;\n  line-height: 1.5;\n}\n.search__select-city, .search__select-area {\n  position: relative;\n  margin-top: 1.25rem;\n}\n.search__select-city:before, .search__select-area:before {\n  position: absolute;\n  top: -0.5rem;\n  left: 1.25rem;\n  padding: 0 0.5rem;\n  font-size: 0.75rem;\n  background: #fff;\n}\n.search__select-city select, .search__select-area select {\n  padding: 0 1.25rem;\n  width: 100%;\n  height: 3.125rem;\n  font-size: 1rem;\n  font-family: \"Hiragino Sans CNS\", \"微軟正黑體\", \"Arial\";\n  border-radius: 3.125rem;\n  border: 0.125rem solid #4f4f4f;\n}\n.search__select-city:before {\n  content: \"縣市\";\n}\n.search__select-area:before {\n  content: \"鄉鎮市區別\";\n}\n.search__mask {\n  padding: 1.25rem 0.625rem;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n}\n.search__mask h4 {\n  padding-left: 0.625rem;\n  font-size: 1.25rem;\n  font-weight: bold;\n  color: #f2994a;\n  line-height: 2;\n}\n.search__mask h4 span {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #000;\n  font-weight: normal;\n}\n.search__mask-flex {\n  margin: 0.5rem 0;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n.search__mask-child, .search__mask-adult, .search__mask-both {\n  cursor: pointer;\n  position: relative;\n  width: 5rem;\n  height: 5rem;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n  border-radius: 1.25rem;\n}\n.search__mask-child img, .search__mask-adult img, .search__mask-both img {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n.search__mask-child.isAct, .search__mask-adult.isAct, .search__mask-both.isAct {\n  box-shadow: 0px 0.3125rem 0.625rem #f2c94c;\n}\n.search__mask-total {\n  margin-top: 1rem;\n  padding-left: 1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.search__mask-total p span {\n  display: inline-block;\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VhcmNoL0M6XFxVc2Vyc1xcTWFuZHlcXERlc2t0b3BcXGFuZ3VsYXJcXG1hc2ttYXAvc3JjXFxhcHBcXHNlYXJjaFxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ1VoQjtFQUNFLGtCQUFBO0FEUkY7QUNTRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FEUEo7QUNRSTtFQVRGO0lBVUksY0FBQTtFRExKO0FBQ0Y7QUNPRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0FETEo7QUNPRTtFQUVFLG1CQUFBO0VBQ0EsMENBQUE7QUROSjtBQ09JO0VBQ0UsbUJBQUE7QURMTjtBQ1FFO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtBRE5KO0FDVUU7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURSSjtBQ1NJO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FEUE47QUNRTTtFQUNFLHNCQUFBO0FETlI7QUNTSTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FEUE47QUNVRTtFQUNFLGlCQUFBO0FEUko7QUNTSTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FEUE47QUNTSTtFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QURSTjtBQ1NNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRFBSO0FDU007RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrREFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7QURQUjtBQ1dNO0VBQ0UsYUFBQTtBRFRSO0FDYU07RUFDRSxnQkFBQTtBRFhSO0FDZ0JFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBRGRKO0FDZUk7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBRGJOO0FDY007RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FEWlI7QUNlSTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7QURiTjtBQ2VJO0VBR0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSw0Q0FBQTtFQUNBLHNCQUFBO0FEaEJOO0FDaUJNO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBRGZSO0FDaUJNO0VBQ0UsMENBQUE7QURmUjtBQ2tCSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FEaEJOO0FDa0JRO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBRGhCViIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uc2VhcmNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlYXJjaF9faWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuc2VhcmNoX19pY29uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLnNlYXJjaF9fZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLnNlYXJjaF9faGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgcGFkZGluZzogMC42MjVyZW0gMS4yNXJlbSAwLjYyNXJlbSAxLjI1cmVtO1xufVxuLnNlYXJjaF9faGVhZGVyIC5zZWFyY2hfX2ZsZXgge1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xufVxuLnNlYXJjaF9fYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMzBweCk7XG59XG4uc2VhcmNoX19pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMi4yNXJlbTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM0ZjRmNGY7XG59XG4uc2VhcmNoX19pbmZvIGZpZ3VyZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyLjVyZW07XG59XG4uc2VhcmNoX19pbmZvIGZpZ3VyZSBpbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnNlYXJjaF9faW5mbyAubnVtIHtcbiAgbWFyZ2luOiAwIDAuMTI1cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICNmMjk5NGE7XG59XG4uc2VhcmNoX19zZWxlY3Qge1xuICBwYWRkaW5nOiAwLjYyNXJlbTtcbn1cbi5zZWFyY2hfX3NlbGVjdCBoNCB7XG4gIHBhZGRpbmctbGVmdDogMC42MjVyZW07XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjYyNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi5zZWFyY2hfX3NlbGVjdC1jaXR5LCAuc2VhcmNoX19zZWxlY3QtYXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbn1cbi5zZWFyY2hfX3NlbGVjdC1jaXR5OmJlZm9yZSwgLnNlYXJjaF9fc2VsZWN0LWFyZWE6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0wLjVyZW07XG4gIGxlZnQ6IDEuMjVyZW07XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uc2VhcmNoX19zZWxlY3QtY2l0eSBzZWxlY3QsIC5zZWFyY2hfX3NlbGVjdC1hcmVhIHNlbGVjdCB7XG4gIHBhZGRpbmc6IDAgMS4yNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMy4xMjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiSGlyYWdpbm8gU2FucyBDTlNcIiwgXCLlvq7ou5/mraPpu5Hpq5RcIiwgXCJBcmlhbFwiO1xuICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcbiAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCAjNGY0ZjRmO1xufVxuLnNlYXJjaF9fc2VsZWN0LWNpdHk6YmVmb3JlIHtcbiAgY29udGVudDogXCLnuKPluIJcIjtcbn1cbi5zZWFyY2hfX3NlbGVjdC1hcmVhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi6YSJ6Y6u5biC5Y2A5YilXCI7XG59XG4uc2VhcmNoX19tYXNrIHtcbiAgcGFkZGluZzogMS4yNXJlbSAwLjYyNXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xufVxuLnNlYXJjaF9fbWFzayBoNCB7XG4gIHBhZGRpbmctbGVmdDogMC42MjVyZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZjI5OTRhO1xuICBsaW5lLWhlaWdodDogMjtcbn1cbi5zZWFyY2hfX21hc2sgaDQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLnNlYXJjaF9fbWFzay1mbGV4IHtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uc2VhcmNoX19tYXNrLWNoaWxkLCAuc2VhcmNoX19tYXNrLWFkdWx0LCAuc2VhcmNoX19tYXNrLWJvdGgge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDVyZW07XG4gIGhlaWdodDogNXJlbTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEuMjVyZW07XG59XG4uc2VhcmNoX19tYXNrLWNoaWxkIGltZywgLnNlYXJjaF9fbWFzay1hZHVsdCBpbWcsIC5zZWFyY2hfX21hc2stYm90aCBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnNlYXJjaF9fbWFzay1jaGlsZC5pc0FjdCwgLnNlYXJjaF9fbWFzay1hZHVsdC5pc0FjdCwgLnNlYXJjaF9fbWFzay1ib3RoLmlzQWN0IHtcbiAgYm94LXNoYWRvdzogMHB4IDAuMzEyNXJlbSAwLjYyNXJlbSAjZjJjOTRjO1xufVxuLnNlYXJjaF9fbWFzay10b3RhbCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi5zZWFyY2hfX21hc2stdG90YWwgcCBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59IiwiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9jb21tb25cIjtcblxuJWNsZWFyIHtcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjbGVhcjogYm90aDtcbiAgfVxufVxuXG4uc2VhcmNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmX19pY29ue1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IHJlbSg4cHgpO1xuICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gICAgYm9yZGVyLXJhZGl1czogcmVtKDRweCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG4gICZfX2ZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbiAgJl9faGVhZGVyIHtcbiAgICAvLyBoZWlnaHQ6IHJlbSgxNjRweCk7XG4gICAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgICBwYWRkaW5nOiByZW0oMTBweCkgcmVtKDIwcHgpIHJlbSgxMHB4KSByZW0oMjBweCk7XG4gICAgLnNlYXJjaF9fZmxleCB7XG4gICAgICBwYWRkaW5nLXRvcDogcmVtKDhweCk7XG4gICAgfVxuICB9XG4gICZfX2JvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEzMHB4KTtcbiAgICAvLyBwYWRkaW5nOiByZW0oMTBweCk7XG4gICAgLy8gb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9XG4gICZfX2luZm8ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogcmVtKDM2cHgpO1xuICAgIGZvbnQtc2l6ZTogcmVtKDEycHgpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNGY0ZjRmO1xuICAgIGZpZ3VyZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBoZWlnaHQ6IHJlbSg0MHB4KTtcbiAgICAgIGltZyB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB9XG4gICAgfVxuICAgIC5udW0ge1xuICAgICAgbWFyZ2luOiAwIHJlbSgycHgpO1xuICAgICAgZm9udC1zaXplOiByZW0oMjRweCk7XG4gICAgICBjb2xvcjogI2YyOTk0YTtcbiAgICB9XG4gIH1cbiAgJl9fc2VsZWN0e1xuICAgIHBhZGRpbmc6IHJlbSgxMHB4KTtcbiAgICBoNCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IHJlbSgxMHB4KTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgICBjb2xvcjogIzRmNGY0ZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiByZW0oMjZweCk7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIH1cbiAgICAmLWNpdHksXG4gICAgJi1hcmVhIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbi10b3A6IHJlbSgyMHB4KTtcbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IHJlbSgtOHB4KTtcbiAgICAgICAgbGVmdDogcmVtKDIwcHgpO1xuICAgICAgICBwYWRkaW5nOiAwIHJlbSg4cHgpO1xuICAgICAgICBmb250LXNpemU6IHJlbSgxMnB4KTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIH1cbiAgICAgIHNlbGVjdCB7XG4gICAgICAgIHBhZGRpbmc6IHJlbSgwKSByZW0oMjBweCk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IHJlbSg1MHB4KTtcbiAgICAgICAgZm9udC1zaXplOiByZW0oMTZweCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkhpcmFnaW5vIFNhbnMgQ05TXCIsIFwi5b6u6Luf5q2j6buR6auUXCIsIFwiQXJpYWxcIjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogcmVtKDUwcHgpO1xuICAgICAgICBib3JkZXI6IHJlbSgycHgpIHNvbGlkICM0ZjRmNGY7XG4gICAgICB9XG4gICAgfVxuICAgICYtY2l0eSB7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwi57ij5biCXCI7XG4gICAgICB9XG4gICAgfVxuICAgICYtYXJlYSB7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwi6YSJ6Y6u5biC5Y2A5YilXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9fbWFzayB7XG4gICAgcGFkZGluZzogcmVtKDIwcHgpIHJlbSgxMHB4KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgaDQge1xuICAgICAgcGFkZGluZy1sZWZ0OiByZW0oMTBweCk7XG4gICAgICBmb250LXNpemU6IHJlbSgyMHB4KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICNmMjk5NGE7XG4gICAgICBsaW5lLWhlaWdodDogMjtcbiAgICAgIHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTogcmVtKDE0cHgpO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi1mbGV4e1xuICAgICAgbWFyZ2luOiByZW0oOHB4KSAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIH1cbiAgICAmLWNoaWxkLFxuICAgICYtYWR1bHQsXG4gICAgJi1ib3RoIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiByZW0oODBweCk7XG4gICAgICBoZWlnaHQ6IHJlbSg4MHB4KTtcbiAgICAgIC8vIG1hcmdpbi10b3A6IHJlbSgyNHB4KTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2JhKCMwMDAsIDAuMjUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogcmVtKDIwcHgpO1xuICAgICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIH1cbiAgICAgICYuaXNBY3Qge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggcmVtKDVweCkgcmVtKDEwcHgpICNmMmM5NGM7XG4gICAgICB9XG4gICAgfVxuICAgICYtdG90YWwge1xuICAgICAgbWFyZ2luLXRvcDogcmVtKDE2cHgpO1xuICAgICAgcGFkZGluZy1sZWZ0OiByZW0oMTZweCk7XG4gICAgICBmb250LXNpemU6IHJlbSgxNHB4KTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICBwe1xuICAgICAgICBzcGFue1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHJlbSgxNnB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4iXX0= */");

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
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");








let SearchComponent = class SearchComponent {
    constructor(appService, appStoreService) {
        this.appService = appService;
        this.appStoreService = appStoreService;
        this.doOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSearch"];
        this.assetsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].assetsUrl;
        this.isOpen = true;
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
        this.appStoreService.setAreaList(event);
        this.city = event;
        // this.appStoreService.setPharmacyList(this.city);
        this.appStoreService.setLocal(this.city);
    }
    onAreaChange(event) {
        if (event === '全區') {
            this.area = '';
        }
        else {
            this.area = event;
        }
        // this.appStoreService.setPharmacyList(this.city, this.area);
        this.appStoreService.setLocal(this.city, this.area);
    }
    onMask(str) {
        this.mask = str;
        this.appStoreService.setMask(str);
    }
    onSwitch() {
        this.isOpen = !this.isOpen;
        this.doOpen.emit(this.isOpen);
    }
};
SearchComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
    { type: _app_store_service__WEBPACK_IMPORTED_MODULE_2__["AppStoreService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SearchComponent.prototype, "doOpen", void 0);
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/spinner/spinner.component.scss":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 100px;\n  height: 100px;\n}\n\n.spinner-line {\n  display: inline-block;\n  margin: 0 2px;\n  width: 15px;\n  height: 15px;\n  border-radius: 15px;\n  background-color: #4f4f4f;\n}\n\n.spinner-line:nth-last-child(1) {\n  -webkit-animation: loading 0.6s 0.1s linear infinite;\n          animation: loading 0.6s 0.1s linear infinite;\n}\n\n.spinner-line:nth-last-child(2) {\n  -webkit-animation: loading 0.6s 0.2s linear infinite;\n          animation: loading 0.6s 0.2s linear infinite;\n}\n\n.spinner-line:nth-last-child(3) {\n  -webkit-animation: loading 0.6s 0.3s linear infinite;\n          animation: loading 0.6s 0.3s linear infinite;\n}\n\n@-webkit-keyframes loading {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  50% {\n    -webkit-transform: translate(0, 15px);\n            transform: translate(0, 15px);\n  }\n  100% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n}\n\n@keyframes loading {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  50% {\n    -webkit-transform: translate(0, 15px);\n            transform: translate(0, 15px);\n  }\n  100% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9DOlxcVXNlcnNcXE1hbmR5XFxEZXNrdG9wXFxhbmd1bGFyXFxtYXNrbWFwL3NyY1xcYXBwXFxzcGlubmVyXFxzcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDRjs7QURJRTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0RKOztBREVJO0VBQXFCLG9EQUFBO1VBQUEsNENBQUE7QUNDekI7O0FEQUk7RUFBcUIsb0RBQUE7VUFBQSw0Q0FBQTtBQ0d6Qjs7QURGSTtFQUFxQixvREFBQTtVQUFBLDRDQUFBO0FDS3pCOztBREFBO0VBQ0k7SUFBSSxrQ0FBQTtZQUFBLDBCQUFBO0VDSU47RURIRTtJQUFLLHFDQUFBO1lBQUEsNkJBQUE7RUNNUDtFRExFO0lBQU0sa0NBQUE7WUFBQSwwQkFBQTtFQ1FSO0FBQ0Y7O0FEWkE7RUFDSTtJQUFJLGtDQUFBO1lBQUEsMEJBQUE7RUNJTjtFREhFO0lBQUsscUNBQUE7WUFBQSw2QkFBQTtFQ01QO0VETEU7SUFBTSxrQ0FBQTtZQUFBLDBCQUFBO0VDUVI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5cclxuLnNwaW5uZXJ7XHJcbiAgJi1saW5le1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZjRmNGY7XHJcbiAgICAmOm50aC1sYXN0LWNoaWxkKDEpIHthbmltYXRpb246IGxvYWRpbmcgLjZzIC4xcyBsaW5lYXIgaW5maW5pdGU7fVxyXG4gICAgJjpudGgtbGFzdC1jaGlsZCgyKSB7YW5pbWF0aW9uOiBsb2FkaW5nIC42cyAuMnMgbGluZWFyIGluZmluaXRlO31cclxuICAgICY6bnRoLWxhc3QtY2hpbGQoMykge2FuaW1hdGlvbjogbG9hZGluZyAuNnMgLjNzIGxpbmVhciBpbmZpbml0ZTt9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBsb2FkaW5nIHtcclxuICAgIDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO31cclxuICAgIDUwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwxNXB4KTt9XHJcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO31cclxufVxyXG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnNwaW5uZXItbGluZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDJweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmNGY0Zjtcbn1cbi5zcGlubmVyLWxpbmU6bnRoLWxhc3QtY2hpbGQoMSkge1xuICBhbmltYXRpb246IGxvYWRpbmcgMC42cyAwLjFzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi5zcGlubmVyLWxpbmU6bnRoLWxhc3QtY2hpbGQoMikge1xuICBhbmltYXRpb246IGxvYWRpbmcgMC42cyAwLjJzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi5zcGlubmVyLWxpbmU6bnRoLWxhc3QtY2hpbGQoMykge1xuICBhbmltYXRpb246IGxvYWRpbmcgMC42cyAwLjNzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBsb2FkaW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTVweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SpinnerComponent = class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
};
SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-spinner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinner.component.scss */ "./src/app/spinner/spinner.component.scss")).default]
    })
], SpinnerComponent);



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
    assetsUrl: 'assets'
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

module.exports = __webpack_require__(/*! C:\Users\Mandy\Desktop\angular\maskmap\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map