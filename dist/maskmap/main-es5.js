function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"maskmap\">\n  <!-- <a href=\"javascript:void(0);\"\n    class=\"hamburger\" title=\"MENU\"\n    [ngClass]=\"{ 'active': isOpen }\"\n    (click)=\"onSwitch()\"\n  ><span>MENU</span></a> -->\n  <app-search\n    (doOpen)=\"getOpen($event)\"\n    [ngClass]=\"{ active: isOpen }\"\n  ></app-search>\n  <app-map></app-map>\n  <!-- <app-masklist></app-masklist> -->\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMapMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"map-container\">\n  <div class=\"map-frame\">\n    <div id=\"map\" #maskmap></div>\n  </div>\n\n</div>\n<app-masklist></app-masklist>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/masklist/masklist.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masklist/masklist.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMasklistMasklistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"pharmacy\">\n  <div\n    class=\"pharmacy__wrap\"\n    *ngFor=\"let item of appStoreService.getPharmacy$ | async; let idx = index\"\n    [style.left.rem]=\"23.125 * idx\"\n    (click)=\"setInfo(item.geometry, item.properties)\"\n  >\n    <div class=\"pharmacy__title\">{{ item.properties.name }}</div>\n    <div class=\"pharmacy__block-left\">\n      <div class=\"pharmacy__addr\">{{ item.properties.address }}</div>\n      <div class=\"pharmacy__phone\">{{ item.properties.phone }}</div>\n    </div>\n    <div class=\"pharmacy__block-right\">\n      <div class=\"pharmacy__child\">\n      <img src= \"{{assetsUrl}}/child.svg\"/>\n        <p>{{ item.properties.mask_child }}</p>\n      </div>\n      <div class=\"pharmacy__adult\">\n        <img src=\"{{assetsUrl}}/adult.svg\" />\n        <p>{{ item.properties.mask_adult }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"search\" [ngClass]=\"{ 'active': isOpen }\">\n  <div class=\"search__icon\" (click)=\"onSwitch()\">\n    <fa-icon [icon]=\"faSearch\"></fa-icon>\n  </div>\n  <div class=\"search__header\">\n    <figure><img src= \"{{assetsUrl}}/nhi.svg\"/></figure>\n    <div class=\"search__flex\">\n      <div class=\"search__info\">\n        <figure><img src= \"{{assetsUrl}}/calendar.svg\"/></figure>\n        <p><span class=\"num\">7</span>天一次</p>\n      </div>\n      <div class=\"search__info\">\n        <figure><img src= \"{{assetsUrl}}/mask.svg\"/></figure>\n        <p>限購<span class=\"num\">2</span>片</p>\n      </div>\n      <div class=\"search__info\">\n        <figure><img src= \"{{assetsUrl}}/card.svg\"/></figure>\n        <p>代購<span class=\"num\">1</span>卡</p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"search__body\">\n  <div class=\"search__body-title\">搜尋</div>\n\n  <div class=\"search__body-city\">\n    <select name=\"\" id=\"city\" (change)=\"onCityChange($event.target.value)\">\n      <option\n        *ngFor=\"let item of appStoreService.getCity$ | async\"\n        [(value)]=\"item.Name\"\n        >{{ item.Name }}</option\n      >\n    </select>\n  </div>\n  <div class=\"search__body-area\">\n    <select name=\"\" id=\"zone\" (change)=\"onAreaChange($event.target.value)\">\n      <option>全區</option>\n      <option\n        *ngFor=\"let item of appStoreService.getArea$ | async\"\n        [(value)]=\"item.Name\"\n        >{{ item.Name }}</option\n      >\n    </select>\n  </div>\n  <div class=\"search__mask\">\n\n    <h4>口罩類型</h4>\n    <div class=\"search__flex\">\n      <div class=\"search__mask-child isAct\" (click)=\"onMask('child')\"\n        [ngClass]=\"{ 'isAct': mask === 'child' }\"\n      >\n        <img src= \"{{assetsUrl}}/child.svg\"/>\n      </div>\n      <div class=\"search__mask-adult\" (click)=\"onMask('adult')\"\n        [ngClass]=\"{ 'isAct': mask === 'adult' }\"\n      >\n        <img src= \"{{assetsUrl}}/adult.svg\"/>\n      </div>\n      <div class=\"search__mask-both\" (click)=\"onMask('both')\"\n        [ngClass]=\"{ 'isAct': mask === '' }\"\n      >\n        <img src= \"{{assetsUrl}}/both.svg\"/>\n      </div>\n    </div>\n    <div class=\"search__mask-total\">\n      <h4>{{ city }}{{ area }} <span>口罩總量：{{ childTotal + adultTotal }}</span></h4>\n      <p>小孩口罩：{{ childTotal }}</p>\n      <p>成人口罩：{{ adultTotal }}</p>\n    </div>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/maskmap',
      pathMatch: 'full'
    }, {
      path: 'maskmap',
      component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app-store.service.ts":
  /*!**************************************!*\
    !*** ./src/app/app-store.service.ts ***!
    \**************************************/

  /*! exports provided: AppStoreService */

  /***/
  function srcAppAppStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppStoreService", function () {
      return AppStoreService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AppStoreService =
    /*#__PURE__*/
    function () {
      function AppStoreService() {
        _classCallCheck(this, AppStoreService);

        this.getCity$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.getCity);
        this.getArea$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.getArea);
        this.getPharmacy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.getCurInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.getCalMask$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(AppStoreService, [{
        key: "setCity",
        value: function setCity(ary) {
          this.getCity = ary;
          this.getCity$.next(this.getCity);
        }
      }, {
        key: "setArea",
        value: function setArea(city) {
          this.getArea = this.getCity.filter(function (e) {
            return e.Name === city;
          });
          this.getArea$.next(this.getArea[0].Districts);
        }
      }, {
        key: "setPharmacy",
        value: function setPharmacy(ary) {
          this.getAllPharmacy = ary;
        }
      }, {
        key: "setPharmacyList",
        value: function setPharmacyList(city, area) {
          var newList = this.getAllPharmacy.filter(function (e) {
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
      }, {
        key: "setPharmacyInfo",
        value: function setPharmacyInfo(pos, info) {
          var newInfo = Object.assign({}, info, {
            coordinates: pos.coordinates
          });
          this.getCurInfo$.next(newInfo);
        }
      }, {
        key: "setMask",
        value: function setMask(str) {
          ;
          var newList = [];

          if (str === 'child') {
            newList = this.getPharmacy.filter(function (e) {
              return e.properties.mask_child > 0;
            });
          } else if (str === 'adult') {
            newList = this.getPharmacy.filter(function (e) {
              return e.properties.mask_adult > 0;
            });
          } else {
            newList = this.getPharmacy.filter(function (e) {
              return e.properties.mask_child > 0 || e.properties.mask_adult > 0;
            });
          }

          this.getPharmacy$.next(newList);
        }
      }, {
        key: "setCalMask",
        value: function setCalMask(list) {
          var childTotal = 0;
          var adultTotal = 0;
          list.map(function (e) {
            childTotal += e.properties.mask_child;
            adultTotal += e.properties.mask_adult;
          });
          this.getCalMask$.next({
            childTotal: childTotal,
            adultTotal: adultTotal
          });
        }
      }]);

      return AppStoreService;
    }();

    AppStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppStoreService);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".maskmap:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n.hamburger {\n  display: none;\n  z-index: 100000;\n  position: absolute;\n  top: 1.25rem;\n  right: 1.25rem;\n  width: 50px;\n  height: 45px;\n  padding: 10px;\n  background: #e0e0e0;\n  border-radius: 0.25rem;\n}\n\n.hamburger span {\n  display: inline-block;\n  text-indent: -9999px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  position: absolute;\n  display: block;\n  cursor: pointer;\n  width: 30px;\n  height: 5px;\n  background: #4F4F4F;\n  margin: 10px 0;\n}\n\n.hamburger span:before {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: 0;\n  display: block;\n  width: 30px;\n  height: 5px;\n  background: #4F4F4F;\n}\n\n.hamburger span:after {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  left: 0;\n  display: block;\n  width: 30px;\n  height: 5px;\n  background: #4F4F4F;\n}\n\n.hamburger.active span {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  background-color: transparent;\n}\n\n.hamburger.active span:before {\n  top: -0.625rem;\n  -webkit-transform: translateY(10.5px) rotate(45deg);\n          transform: translateY(10.5px) rotate(45deg);\n}\n\n.hamburger.active span:after {\n  top: -0.625rem;\n  -webkit-transform: translateY(10.5px) rotate(-45deg);\n          transform: translateY(10.5px) rotate(-45deg);\n}\n\n.maskmap {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n}\n\n.maskmap app-search {\n  position: relative;\n  z-index: 9999;\n  width: 300px;\n  height: 100vh;\n  background: #fff;\n}\n\n.maskmap app-map {\n  position: relative;\n  width: calc( 100% - 300px );\n}\n\n@media (max-width: 800px) {\n  .maskmap {\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n  .maskmap .hamburger {\n    display: block;\n  }\n  .maskmap app-search {\n    position: absolute;\n    z-index: 99999;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n    -webkit-transform: translateX(-300px);\n            transform: translateX(-300px);\n  }\n  .maskmap app-search.active {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n  .maskmap app-map {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxNYW5keVxcRGVza3RvcFxcYW5ndWxhclxcbWFza21hcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNISjs7QUQ0Q0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDekNGOztBRDBDRTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBakRGLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQStDOEI7RUE5QzlCLFdBQUE7RUFDQSxtQkE2Q3FCO0VBNUNyQixjQUFBO0FDVUY7O0FEVEU7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsV0FvQzRCO0VBbkM1QixXQUFBO0VBQ0EsbUJBa0NtQjtBQ3ZCdkI7O0FEVEU7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsV0F5QjRCO0VBeEI1QixXQUFBO0VBQ0EsbUJBdUJtQjtBQ1p2Qjs7QURlSTtFQUNFLGlDQUFBO1VBQUEseUJBQUE7RUFDQSw2QkFBQTtBQ2JOOztBRGNNO0VBQ0UsY0FBQTtFQUNBLG1EQUFBO1VBQUEsMkNBQUE7QUNaUjs7QURjTTtFQUNFLGNBQUE7RUFDQSxvREFBQTtVQUFBLDRDQUFBO0FDWlI7O0FEa0JBO0VBRUUsa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNoQkY7O0FEaUJFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ2ZKOztBRGtCRTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7QUNoQko7O0FEb0JFO0VBbEJGO0lBbUJJLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDakJGO0VEa0JFO0lBQ0UsY0FBQTtFQ2hCSjtFRGtCRTtJQUNFLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLHdCQUFBO0lBQUEsZ0JBQUE7SUFDQSxxQ0FBQTtZQUFBLDZCQUFBO0VDaEJKO0VEaUJJO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtFQ2ZOO0VEa0JFO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQ2hCSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0IFwiLi4vYXNzZXRzL2NvbW1vblwiO1xuXG4lY2xlYXIge1xuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG59XG5cblxuQG1peGluIGhhbWJ1cmdlcigkY29sb3IsICRpY29uVykge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAkaWNvblc7XG4gIGhlaWdodDogJGljb25XLzY7XG4gIGJhY2tncm91bmQ6ICRjb2xvcjtcbiAgbWFyZ2luOiAkaWNvblcvMyAwO1xuICAmOmJlZm9yZSB7XG4gICAgdHJhbnNpdGlvbjowLjVzO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0kaWNvblcvMztcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAkaWNvblc7XG4gICAgaGVpZ2h0OiAkaWNvblcvNjtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3I7XG4gIH1cbiAgJjphZnRlciB7XG4gICAgdHJhbnNpdGlvbjowLjVzO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6ICRpY29uVy8zO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6ICRpY29uVztcbiAgICBoZWlnaHQ6ICRpY29uVy82O1xuICAgIGJhY2tncm91bmQ6ICRjb2xvcjtcbiAgfVxufVxuXG4vLyA6aG9zdCB7XG5cbi8vIH1cblxuLmhhbWJ1cmdlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHotaW5kZXg6IDEwMDAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IHJlbSgyMHB4KTtcbiAgcmlnaHQ6IHJlbSgyMHB4KTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogcmVtKDRweCk7XG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIEBpbmNsdWRlIGhhbWJ1cmdlcigjNEY0RjRGLCAzMHB4KTtcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgc3BhbiB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIHRvcDogcmVtKC0xMHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwLjVweCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgIH1cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICB0b3A6IHJlbSgtMTBweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMC41cHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubWFza21hcHtcbiAgQGV4dGVuZCAlY2xlYXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYXBwLXNlYXJjaHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB9XG5cbiAgYXBwLW1hcHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAzMDBweCApO1xuICAgIC8vIGhlaWdodDogY2FsYyggMTAwdmggLSAxMC42MjVyZW0gKTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLmhhbWJ1cmdlciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgYXBwLXNlYXJjaHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDk5OTk5O1xuICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpO1xuICAgICAgJi5hY3RpdmV7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgICAgfVxuICAgIH1cbiAgICBhcHAtbWFwe1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iLCIubWFza21hcDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmhhbWJ1cmdlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHotaW5kZXg6IDEwMDAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEuMjVyZW07XG4gIHJpZ2h0OiAxLjI1cmVtO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuLmhhbWJ1cmdlciBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWluZGVudDogLTk5OTlweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6ICM0RjRGNEY7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLmhhbWJ1cmdlciBzcGFuOmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogIzRGNEY0Rjtcbn1cbi5oYW1idXJnZXIgc3BhbjphZnRlciB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjNEY0RjRGO1xufVxuLmhhbWJ1cmdlci5hY3RpdmUgc3BhbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmhhbWJ1cmdlci5hY3RpdmUgc3BhbjpiZWZvcmUge1xuICB0b3A6IC0wLjYyNXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwLjVweCkgcm90YXRlKDQ1ZGVnKTtcbn1cbi5oYW1idXJnZXIuYWN0aXZlIHNwYW46YWZ0ZXIge1xuICB0b3A6IC0wLjYyNXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwLjVweCkgcm90YXRlKC00NWRlZyk7XG59XG5cbi5tYXNrbWFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1hc2ttYXAgYXBwLXNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLm1hc2ttYXAgYXBwLW1hcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IGNhbGMoIDEwMCUgLSAzMDBweCApO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5tYXNrbWFwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5tYXNrbWFwIC5oYW1idXJnZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5tYXNrbWFwIGFwcC1zZWFyY2gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTk5OTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpO1xuICB9XG4gIC5tYXNrbWFwIGFwcC1zZWFyY2guYWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxuICAubWFza21hcCBhcHAtbWFwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "getOpen",
        value: function getOpen(data) {
          this.isOpen = data;
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./map/map.component */
    "./src/app/map/map.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _masklist_masklist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./masklist/masklist.component */
    "./src/app/masklist/masklist.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js"); // import { LeafletModule } from '@asymmetrik/ngx-leaflet';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"], _masklist_masklist_component__WEBPACK_IMPORTED_MODULE_9__["MasklistComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.service.ts":
  /*!********************************!*\
    !*** ./src/app/app.service.ts ***!
    \********************************/

  /*! exports provided: AppService */

  /***/
  function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-store.service */
    "./src/app/app-store.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AppService =
    /*#__PURE__*/
    function () {
      function AppService(httpClient, appStoreService) {
        _classCallCheck(this, AppService);

        this.httpClient = httpClient;
        this.appStoreService = appStoreService;
        this.assetsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].assetsUrl;
        this.url = 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json';
      }

      _createClass(AppService, [{
        key: "fetchTaiwanCity",
        value: function fetchTaiwanCity(city) {
          var _this = this;

          return this.httpClient.get("".concat(this.assetsUrl, "/counties.json")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            res.sort(function (a, b) {
              return a.Sort - b.Sort;
            });
            res.map(function (e) {
              e.Districts.sort(function (a, b) {
                return a.Sort - b.Sort;
              });
            });
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            _this.appStoreService.setCity(res);
          }));
        }
      }, {
        key: "fetchPharmacy",
        value: function fetchPharmacy(area) {
          var _this2 = this;

          return this.httpClient.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            res.features.map(function (e) {
              e.geometry.coordinates = e.geometry.coordinates.reverse();
              e.properties.phone = e.properties.phone.replace(/\s*/g, '');
            });
            return res.features.filter(function (e) {
              return e.properties.mask_adult > 0 || e.properties.mask_child > 0;
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            _this2.appStoreService.setPharmacy(res);
          }));
        }
      }, {
        key: "fetchlocal",
        value: function fetchlocal() {
          var token = 'pk.eyJ1IjoibXR3bXQiLCJhIjoiY2s2bnczbXh4MHNtYTN1cnVoa2FycjEzayJ9.r5GL2Ms2aZ6vjaJhzpSCOg';
          var key = 'AIzaSyBGd0MP4HMs0p6dQ_xV6gt-5XBkZc4jmD8'; // const location = [-73.989, 40.733];

          var location = [24.953750499999998, 121.34356229999999]; // return this.httpClient.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.join(',')}&key=${key}`)

          return this.httpClient.get("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(location.join(','), ".json?routing=true&access_token=").concat(token));
        }
      }]);

      return AppService;
    }();

    AppService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _app_store_service__WEBPACK_IMPORTED_MODULE_4__["AppStoreService"]
      }];
    };

    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppService);
    /***/
  },

  /***/
  "./src/app/map/map.component.scss":
  /*!****************************************!*\
    !*** ./src/app/map/map.component.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppMapMapComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.leaflet-popup-content:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.map-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.map-frame {\n  height: 100%;\n}\n#map {\n  height: 100%;\n}\n.customPopup {\n  font-family: \"Hiragino Sans CNS\", \"微軟正黑體\", \"Arial\";\n  width: 18.75rem;\n}\n.customPopup__title {\n  font-size: 1.125rem;\n  font-weight: bold;\n  line-height: 1.6875rem;\n}\n.customPopup__addr, .customPopup__note {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #828282;\n}\n.customPopup__phone {\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #828282;\n}\n.customPopup__updated {\n  margin-top: 0.5rem;\n  font-size: 0.75rem;\n  line-height: 1.5;\n  color: #828282;\n}\n.customPopup__child, .customPopup__adult {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #4f4f4f;\n}\n.customPopup__child img, .customPopup__adult img {\n  height: 1.875rem;\n}\n.customPopup__child p, .customPopup__adult p {\n  text-align: center;\n  line-height: 1;\n  margin: 0;\n}\n.customPopup__tel {\n  display: block;\n  margin: 0.5rem 0;\n  line-height: 0;\n  padding: 0.375rem 0;\n  text-align: center;\n  border: 1px solid #f2c94c;\n  box-sizing: border-box;\n  border-radius: 1.25rem;\n}\n.customPopup__google {\n  clear: both;\n  display: block;\n  margin-top: 0.5rem;\n  padding: 0.375rem 0;\n  font-size: 1.25rem;\n  font-weight: bold;\n  text-align: center;\n  color: #fff !important;\n  text-decoration: none !important;\n  border-radius: 1.25rem;\n  background: #f2c94c;\n}\n.customPopup__google img {\n  position: relative;\n  top: 0.125rem;\n  margin-right: 0.5rem;\n}\n.customPopup__block-left {\n  float: left;\n  width: 55%;\n}\n.customPopup__block-right {\n  float: right;\n  width: 45%;\n}\n.customPopup__block-flex {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFwL0M6XFxVc2Vyc1xcTWFuZHlcXERlc2t0b3BcXGFuZ3VsYXJcXG1hc2ttYXAvc3JjXFxhcHBcXG1hcFxcbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0dkO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FEREo7QUNLQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBREZGO0FDU0E7RUFFRSxZQUFBO0FEUEY7QUNVQTtFQUNFLFlBQUE7QURQRjtBQ21CQTtFQUNFLGtEQUFBO0VBQ0EsZUFBQTtBRGhCRjtBQ2lCRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBRGZKO0FDaUJFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURmSjtBQ2tCRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURoQko7QUNrQkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FEaEJKO0FDa0JFO0VBRUUsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURqQko7QUNrQkk7RUFDRSxnQkFBQTtBRGhCTjtBQ2tCSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QURoQk47QUNtQkU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBRGpCSjtBQ21CRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FEakJKO0FDa0JJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QURoQk47QUNvQkk7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBRGxCTjtBQ29CSTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FEbEJOO0FDb0JJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7QURsQk4iLCJmaWxlIjoic3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmxlYWZsZXQtcG9wdXAtY29udGVudDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbn1cblxuLm1hcC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLm1hcC1mcmFtZSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI21hcCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmN1c3RvbVBvcHVwIHtcbiAgZm9udC1mYW1pbHk6IFwiSGlyYWdpbm8gU2FucyBDTlNcIiwgXCLlvq7ou5/mraPpu5Hpq5RcIiwgXCJBcmlhbFwiO1xuICB3aWR0aDogMTguNzVyZW07XG59XG4uY3VzdG9tUG9wdXBfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjY4NzVyZW07XG59XG4uY3VzdG9tUG9wdXBfX2FkZHIsIC5jdXN0b21Qb3B1cF9fbm90ZSB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmN1c3RvbVBvcHVwX19waG9uZSB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uY3VzdG9tUG9wdXBfX3VwZGF0ZWQge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uY3VzdG9tUG9wdXBfX2NoaWxkLCAuY3VzdG9tUG9wdXBfX2FkdWx0IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzRmNGY0Zjtcbn1cbi5jdXN0b21Qb3B1cF9fY2hpbGQgaW1nLCAuY3VzdG9tUG9wdXBfX2FkdWx0IGltZyB7XG4gIGhlaWdodDogMS44NzVyZW07XG59XG4uY3VzdG9tUG9wdXBfX2NoaWxkIHAsIC5jdXN0b21Qb3B1cF9fYWR1bHQgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbjogMDtcbn1cbi5jdXN0b21Qb3B1cF9fdGVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMC41cmVtIDA7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMmM5NGM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDEuMjVyZW07XG59XG4uY3VzdG9tUG9wdXBfX2dvb2dsZSB7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxLjI1cmVtO1xuICBiYWNrZ3JvdW5kOiAjZjJjOTRjO1xufVxuLmN1c3RvbVBvcHVwX19nb29nbGUgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDAuMTI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi5jdXN0b21Qb3B1cF9fYmxvY2stbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTUlO1xufVxuLmN1c3RvbVBvcHVwX19ibG9jay1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDQ1JTtcbn1cbi5jdXN0b21Qb3B1cF9fYmxvY2stZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufSIsIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvY29tbW9uXCI7XG5cbiVjbGVhciB7XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbn1cblxuLm1hcC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgLy8gd2lkdGg6IDEwMCU7XG4gIC8vIGhlaWdodDogNTAwcHg7XG4gIC8vIHBhZGRpbmc6IDMwcHg7XG4gIC8vIGhlaWdodDogY2FsYyggMTAwdmggLSAxMC42MjVyZW0gKTtcbn1cblxuLm1hcC1mcmFtZSB7XG4gIC8vIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNtYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sZWFmbGV0LXBvcHVwIHtcbiAgLy8gJi1jb250ZW50LXdyYXBwZXJ7XG4gIC8vICAgYmFja2dyb3VuZDogIzE1OTtcbiAgLy8gfVxuICAmLWNvbnRlbnQge1xuICAgIEBleHRlbmQgJWNsZWFyO1xuICB9XG59XG5cbi5jdXN0b21Qb3B1cCB7XG4gIGZvbnQtZmFtaWx5OiBcIkhpcmFnaW5vIFNhbnMgQ05TXCIsIFwi5b6u6Luf5q2j6buR6auUXCIsIFwiQXJpYWxcIjtcbiAgd2lkdGg6IHJlbSgzMDBweCk7XG4gICZfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IHJlbSgxOHB4KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogcmVtKDI3cHgpO1xuICB9XG4gICZfX2FkZHIsJl9fbm90ZSB7XG4gICAgZm9udC1zaXplOiByZW0oMTRweCk7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzgyODI4MjtcbiAgfVxuXG4gICZfX3Bob25lIHtcbiAgICBtYXJnaW4tdG9wOiByZW0oOHB4KTtcbiAgICBmb250LXNpemU6IHJlbSgxNHB4KTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjODI4MjgyO1xuICB9XG4gICZfX3VwZGF0ZWQge1xuICAgIG1hcmdpbi10b3A6IHJlbSg4cHgpO1xuICAgIGZvbnQtc2l6ZTogcmVtKDEycHgpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICM4MjgyODI7XG4gIH1cbiAgJl9fY2hpbGQsXG4gICZfX2FkdWx0IHtcbiAgICBmb250LXNpemU6IHJlbSgyNHB4KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzRmNGY0ZjtcbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiByZW0oMzBweCk7XG4gICAgfVxuICAgIHAge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG4gICZfX3RlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiByZW0oOHB4KSAwO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IHJlbSg2cHgpIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMmM5NGM7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiByZW0oMjBweCk7XG4gIH1cbiAgJl9fZ29vZ2xlIHtcbiAgICBjbGVhcjogYm90aDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiByZW0oOHB4KTtcbiAgICBwYWRkaW5nOiByZW0oNnB4KSAwO1xuICAgIGZvbnQtc2l6ZTogcmVtKDIwcHgpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IHJlbSgyMHB4KTtcbiAgICBiYWNrZ3JvdW5kOiAjZjJjOTRjO1xuICAgIGltZyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IHJlbSgycHgpO1xuICAgICAgbWFyZ2luLXJpZ2h0OiByZW0oOHB4KTtcbiAgICB9XG4gIH1cbiAgJl9fYmxvY2sge1xuICAgICYtbGVmdCB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHdpZHRoOiA1NSU7XG4gICAgfVxuICAgICYtcmlnaHQge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgd2lkdGg6IDQ1JTtcbiAgICB9XG4gICAgJi1mbGV4IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/map/map.component.ts":
  /*!**************************************!*\
    !*** ./src/app/map/map.component.ts ***!
    \**************************************/

  /*! exports provided: MapComponent */

  /***/
  function srcAppMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _app_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app-store.service */
    "./src/app/app-store.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! leaflet.markercluster */
    "./node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js");
    /* harmony import */


    var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MapComponent =
    /*#__PURE__*/
    function () {
      function MapComponent(appService, appStoreService) {
        var _this3 = this;

        _classCallCheck(this, MapComponent);

        this.appService = appService;
        this.appStoreService = appStoreService; // @ViewChild('maskmap', { static: true }) chartElement: ElementRef;

        this.assetsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].assetsUrl;
        this.location = [25.0032999, 121.5540404];
        this.location$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](this.location);
        this.getPosition();
        this.appStoreService.getPharmacy$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
          if (!res) {
            return;
          }

          var info = res.reduce(function (total, el) {
            total.push(Object.assign({}, el.properties, {
              coordinates: el.geometry.coordinates
            }));
            return total;
          }, []);
          return info;
        })).subscribe(function (res) {
          _this3.renderMap(res, res[0].coordinates);
        });
        this.icons = {
          red: this.customIcon('red'),
          orange: this.customIcon('orange'),
          yellow: this.customIcon('yellow'),
          green: this.customIcon('green'),
          blue: this.customIcon('blue'),
          violet: this.customIcon('violet'),
          gold: this.customIcon('gold'),
          grey: this.customIcon('grey')
        };
      }

      _createClass(MapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

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
          this.appStoreService.getCurInfo$.subscribe(function (res) {
            _this4.onPharmacy(res);
          }); // this.location$.subscribe(res => {
          //   this.location = res;
          //   this.map.setView(res, 13);
          //   console.log('location', this.location)
          // });

          Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])(this.appService.fetchTaiwanCity(), this.location$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return [res[0], {
              latitude: res[1][0],
              longitude: res[1][1]
            }];
          })).subscribe(function (res) {// console.log('qqq', res[0], res[1])
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
          }); // this.appService.fetchlocal().subscribe( res => console.log('pos',res) )
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.location$.unsubscribe();
        }
      }, {
        key: "renderMap",
        value: function renderMap(list, cur) {
          var _this5 = this;

          this.group = new leaflet__WEBPACK_IMPORTED_MODULE_5__["MarkerClusterGroup"]().addTo(this.map);
          list.map(function (e, i) {
            _this5.addMarker(e);
          });
          this.map.addLayer(this.group);
          leaflet__WEBPACK_IMPORTED_MODULE_5__["marker"](this.location, {
            icon: this.icons.gold
          }).addTo(this.map);
        }
      }, {
        key: "onPharmacy",
        value: function onPharmacy(info) {
          this.map.setView(info.coordinates, 16).closePopup();

          if (this.prevPoint) {
            this.map.removeLayer(this.prevPoint);
          }

          this.prevPoint = leaflet__WEBPACK_IMPORTED_MODULE_5__["marker"](info.coordinates, {
            icon: this.icons.red
          }).addTo(this.map).bindPopup(this.customPopup(info)).openPopup();
        }
      }, {
        key: "addMarker",
        value: function addMarker(info) {
          var marker = leaflet__WEBPACK_IMPORTED_MODULE_5__["marker"](info.coordinates, {
            icon: this.icons.grey
          }).bindPopup(this.customPopup(info));
          this.group.addLayer(marker);
        }
      }, {
        key: "customPopup",
        value: function customPopup(info) {
          // console.log('customPopup', info)
          return "\n      <div class=\"customPopup\">\n        <div class=\"customPopup__title\">".concat(info.name, "</div>\n        <div class=\"customPopup__block-left\">\n          <div class=\"customPopup__addr\">").concat(info.address, "</div>\n          <div class=\"customPopup__note\">").concat(info.note, "</div>\n          <div class=\"customPopup__phone\">").concat(info.phone, "</div>\n          <div class=\"customPopup__updated\">\u66F4\u65B0\u6642\u9593\uFF1A<br/>").concat(info.updated, "</div>\n        </div>\n        <div class=\"customPopup__block-right\">\n          <div class=\"customPopup__block-flex\">\n            <div class=\"customPopup__child\">\n              <img src=\"").concat(this.assetsUrl, "/child.svg\" />\n              <p>").concat(info.mask_child, "</p>\n            </div>\n            <div class=\"customPopup__adult\">\n              <img src=\"").concat(this.assetsUrl, "/adult.svg\" />\n              <p>").concat(info.mask_adult, "</p>\n            </div>\n          </div>\n          <a href=\"tel:").concat(info.phone, "\" class=\"customPopup__tel\">\n            <img src=\"").concat(this.assetsUrl, "/tel.svg\" />\n          </a>\n        </div>\n        <a href=\"https://www.google.com/maps/dir/").concat(this.location[0], ",").concat(this.location[1], "/").concat(info.coordinates[0], ",").concat(info.coordinates[1], "\" class=\"customPopup__google\" target=\"_blank\">\n          <img src=\"").concat(this.assetsUrl, "/vecotr.svg\" />\u898F\u5283\u8DEF\u7DDA\n        </a>\n      </div>\n    ");
        }
      }, {
        key: "customIcon",
        value: function customIcon(color) {
          return leaflet__WEBPACK_IMPORTED_MODULE_5__["icon"]({
            iconUrl: "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-".concat(color, ".png"),
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          });
        }
      }, {
        key: "getPosition",
        value: function getPosition() {
          var _this6 = this;

          navigator.geolocation.getCurrentPosition(function (data) {
            var latitude = data.coords.latitude;
            var longitude = data.coords.longitude;

            _this6.location$.next([latitude, longitude]);
          });
        }
      }]);

      return MapComponent;
    }();

    MapComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }, {
        type: _app_store_service__WEBPACK_IMPORTED_MODULE_3__["AppStoreService"]
      }];
    };

    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map.component.scss */
      "./src/app/map/map.component.scss")).default]
    })], MapComponent); // lat: 22.xxxx  lng: 120.xxxx

    /***/
  },

  /***/
  "./src/app/masklist/masklist.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/masklist/masklist.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMasklistMasklistComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".pharmacy__wrap:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n:host {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 10.625rem;\n}\n\n.pharmacy {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n\n.pharmacy__wrap {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 21.875rem;\n  height: 8.125rem;\n  margin: 0.625rem 0.625rem;\n  padding: 1rem 0.625rem;\n  box-shadow: 0px 5px 10px #f2f2f2;\n  border-radius: 0.625rem;\n  background: #fff;\n  cursor: pointer;\n}\n\n.pharmacy__title {\n  font-size: 1.125rem;\n  font-weight: bold;\n  line-height: 1.6875rem;\n}\n\n.pharmacy__addr {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #828282;\n}\n\n.pharmacy__phone {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #828282;\n}\n\n.pharmacy__child, .pharmacy__adult {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #828282;\n}\n\n.pharmacy__child img, .pharmacy__adult img {\n  height: 2.5rem;\n}\n\n.pharmacy__child p, .pharmacy__adult p {\n  text-align: center;\n}\n\n.pharmacy__block-left {\n  float: left;\n  width: 50%;\n}\n\n.pharmacy__block-right {\n  float: right;\n  width: 50%;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFza2xpc3QvQzpcXFVzZXJzXFxNYW5keVxcRGVza3RvcFxcYW5ndWxhclxcbWFza21hcC9zcmNcXGFwcFxcbWFza2xpc3RcXG1hc2tsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYXNrbGlzdC9tYXNrbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBRGlCQztFQUNHLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDZEo7O0FEaUJBO0VBQ0Usa0JBQUE7RUFHQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNoQkY7O0FEbUJFO0VBRUUsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUVBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ25CSjs7QURxQkU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNuQko7O0FEcUJFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNuQko7O0FEcUJFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNuQko7O0FEcUJFO0VBRUUsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNwQko7O0FEcUJJO0VBQ0UsY0FBQTtBQ25CTjs7QURxQkk7RUFDRSxrQkFBQTtBQ25CTjs7QUR1Qkk7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQ3JCTjs7QUR1Qkk7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0FDckJOIiwiZmlsZSI6InNyYy9hcHAvbWFza2xpc3QvbWFza2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL2NvbW1vblwiO1xuXG4lY2xlYXIge1xuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG59XG5cbi8vIDpob3N0IHtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBib3R0b206IDA7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIC8vIHdpZHRoOiAxMDAlO1xuLy8gICAvLyBoZWlnaHQ6IHJlbSgzMDBweCk7XG4vLyAgIHotaW5kZXg6IDk5OTk7XG4vLyAgIG92ZXJmbG93OiBzY3JvbGw7XG4vLyAgIC8vIHdpZHRoOiAxMDAlO1xuLy8gfVxuXG4gOmhvc3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogcmVtKDEzMHB4ICsgNDBweCk7XG4gIH1cblxuLnBoYXJtYWN5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyB3aWR0aDogcmVtKDM1MHB4KTtcbiAgLy8gaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMzBweCk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAvLyBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICZfX3dyYXAge1xuICAgIEBleHRlbmQgJWNsZWFyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IHJlbSgzNTBweCk7XG4gICAgaGVpZ2h0OiByZW0oMTMwcHgpO1xuICAgIG1hcmdpbjogcmVtKDEwcHgpIHJlbSgxMHB4KTtcbiAgICBwYWRkaW5nOiByZW0oMTZweCkgcmVtKDEwcHgpO1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAjZjJmMmYyO1xuICAgIGJvcmRlci1yYWRpdXM6IHJlbSgxMHB4KTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAmX190aXRsZSB7XG4gICAgZm9udC1zaXplOiByZW0oMThweCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IHJlbSgyN3B4KTtcbiAgfVxuICAmX19hZGRyIHtcbiAgICBmb250LXNpemU6IHJlbSgxNHB4KTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjODI4MjgyO1xuICB9XG4gICZfX3Bob25lIHtcbiAgICBmb250LXNpemU6IHJlbSgxNHB4KTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjODI4MjgyO1xuICB9XG4gICZfX2NoaWxkLFxuICAmX19hZHVsdCB7XG4gICAgZm9udC1zaXplOiByZW0oMjRweCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM4MjgyODI7XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogcmVtKDQwcHgpO1xuICAgIH1cbiAgICBwIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbiAgJl9fYmxvY2sge1xuICAgICYtbGVmdCB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICAgICYtcmlnaHQge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICB9XG4gIH1cbn1cbiIsIi5waGFybWFjeV9fd3JhcDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbn1cblxuOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogOTk5OTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAuNjI1cmVtO1xufVxuXG4ucGhhcm1hY3kge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuLnBoYXJtYWN5X193cmFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAyMS44NzVyZW07XG4gIGhlaWdodDogOC4xMjVyZW07XG4gIG1hcmdpbjogMC42MjVyZW0gMC42MjVyZW07XG4gIHBhZGRpbmc6IDFyZW0gMC42MjVyZW07XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAjZjJmMmYyO1xuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBoYXJtYWN5X190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS42ODc1cmVtO1xufVxuLnBoYXJtYWN5X19hZGRyIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4ucGhhcm1hY3lfX3Bob25lIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4ucGhhcm1hY3lfX2NoaWxkLCAucGhhcm1hY3lfX2FkdWx0IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5waGFybWFjeV9fY2hpbGQgaW1nLCAucGhhcm1hY3lfX2FkdWx0IGltZyB7XG4gIGhlaWdodDogMi41cmVtO1xufVxuLnBoYXJtYWN5X19jaGlsZCBwLCAucGhhcm1hY3lfX2FkdWx0IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGhhcm1hY3lfX2Jsb2NrLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbn1cbi5waGFybWFjeV9fYmxvY2stcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/masklist/masklist.component.ts":
  /*!************************************************!*\
    !*** ./src/app/masklist/masklist.component.ts ***!
    \************************************************/

  /*! exports provided: MasklistComponent */

  /***/
  function srcAppMasklistMasklistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MasklistComponent", function () {
      return MasklistComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _app_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app-store.service */
    "./src/app/app-store.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var MasklistComponent =
    /*#__PURE__*/
    function () {
      function MasklistComponent(appService, appStoreService) {
        _classCallCheck(this, MasklistComponent);

        this.appService = appService;
        this.appStoreService = appStoreService;
        this.assetsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].assetsUrl;
      }

      _createClass(MasklistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setInfo",
        value: function setInfo(pos, info) {
          this.appStoreService.setPharmacyInfo(pos, info);
        }
      }]);

      return MasklistComponent;
    }();

    MasklistComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }, {
        type: _app_store_service__WEBPACK_IMPORTED_MODULE_3__["AppStoreService"]
      }];
    };

    MasklistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-masklist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./masklist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/masklist/masklist.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./masklist.component.scss */
      "./src/app/masklist/masklist.component.scss")).default]
    })], MasklistComponent);
    /***/
  },

  /***/
  "./src/app/search/search.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/search/search.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.search {\n  position: relative;\n}\n.search__icon {\n  display: none;\n  position: absolute;\n  left: 100%;\n  bottom: 0;\n  padding: 0.5rem;\n  background: #e0e0e0;\n  border-radius: 0.25rem;\n  cursor: pointer;\n}\n@media (max-width: 800px) {\n  .search__icon {\n    display: block;\n  }\n}\n.search__flex {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n.search__header {\n  height: 10.25rem;\n  background: #e0e0e0;\n  padding: 1.25rem;\n}\n.search__header .search__flex {\n  padding-top: 1rem;\n}\n.search__body {\n  height: calc(100% - 230px);\n  padding: 1.25rem;\n}\n.search__body-title {\n  padding-left: 1.25rem;\n  color: #4f4f4f;\n  font-weight: bold;\n  font-size: 2.25rem;\n  line-height: 3.375rem;\n}\n.search__body-city, .search__body-area {\n  position: relative;\n  margin-top: 1.25rem;\n}\n.search__body-city:before, .search__body-area:before {\n  position: absolute;\n  top: -0.5rem;\n  left: 1.25rem;\n  padding: 0 0.5rem;\n  font-size: 0.75rem;\n  background: #fff;\n}\n.search__body-city select, .search__body-area select {\n  padding: 0 1.25rem;\n  width: 100%;\n  height: 3.125rem;\n  font-size: 1rem;\n  font-family: \"Hiragino Sans CNS\", \"微軟正黑體\", \"Arial\";\n  border-radius: 3.125rem;\n  border: 0.125rem solid #4f4f4f;\n}\n.search__body-city:before {\n  content: \"縣市\";\n}\n.search__body-area:before {\n  content: \"鄉鎮市區別\";\n}\n.search__info {\n  text-align: center;\n  line-height: 2.25rem;\n  font-size: 0.75rem;\n  font-weight: bold;\n  color: #4f4f4f;\n}\n.search__info figure {\n  display: inline-block;\n  height: 2.5rem;\n}\n.search__info figure img {\n  vertical-align: middle;\n}\n.search__info .num {\n  margin: 0 0.125rem;\n  font-size: 1.5rem;\n  color: #f2994a;\n}\n.search__mask {\n  margin-top: 2.375rem;\n}\n.search__mask h4 {\n  font-size: 1.25rem;\n}\n.search__mask-child, .search__mask-adult, .search__mask-both {\n  cursor: pointer;\n  position: relative;\n  width: 5rem;\n  height: 5rem;\n  margin-top: 1.5rem;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n  border-radius: 1.25rem;\n}\n.search__mask-child img, .search__mask-adult img, .search__mask-both img {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n.search__mask-child.isAct, .search__mask-adult.isAct, .search__mask-both.isAct {\n  box-shadow: 0px 0.3125rem 0.625rem #f2c94c;\n}\n.search__mask-total {\n  margin-top: 2rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.search__mask-total h4 {\n  font-size: 1.25rem;\n  font-weight: bold;\n  color: #f2994a;\n  line-height: 2;\n}\n.search__mask-total h4 span {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #000;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VhcmNoL0M6XFxVc2Vyc1xcTWFuZHlcXERlc2t0b3BcXGFuZ3VsYXJcXG1hc2ttYXAvc3JjXFxhcHBcXHNlYXJjaFxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ1VoQjtFQUNFLGtCQUFBO0FEUkY7QUNTRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FEUEo7QUNRSTtFQVRGO0lBVUksY0FBQTtFRExKO0FBQ0Y7QUNPRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0FETEo7QUNPRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRExKO0FDTUk7RUFDRSxpQkFBQTtBREpOO0FDT0U7RUFDRSwwQkFBQTtFQUVBLGdCQUFBO0FETko7QUNPSTtFQUNFLHFCQUFBO0VBRUEsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBRE5OO0FDUUk7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FEUE47QUNTTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURQUjtBQ1NNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0RBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0FEUFI7QUNXTTtFQUNFLGFBQUE7QURUUjtBQ2FNO0VBQ0UsZ0JBQUE7QURYUjtBQ2VFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FEYko7QUNjSTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBRFpOO0FDYU07RUFDRSxzQkFBQTtBRFhSO0FDY0k7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBRFpOO0FDZUU7RUFDRSxvQkFBQTtBRGJKO0FDY0k7RUFDRSxrQkFBQTtBRFpOO0FDY0k7RUFHRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxzQkFBQTtBRGROO0FDZU07RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FEYlI7QUNlTTtFQUNFLDBDQUFBO0FEYlI7QUNnQkk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QURkTjtBQ2VNO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FEYlI7QUNjUTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QURaViIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uc2VhcmNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlYXJjaF9faWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuc2VhcmNoX19pY29uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLnNlYXJjaF9fZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLnNlYXJjaF9faGVhZGVyIHtcbiAgaGVpZ2h0OiAxMC4yNXJlbTtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgcGFkZGluZzogMS4yNXJlbTtcbn1cbi5zZWFyY2hfX2hlYWRlciAuc2VhcmNoX19mbGV4IHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG4uc2VhcmNoX19ib2R5IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMzBweCk7XG4gIHBhZGRpbmc6IDEuMjVyZW07XG59XG4uc2VhcmNoX19ib2R5LXRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDMuMzc1cmVtO1xufVxuLnNlYXJjaF9fYm9keS1jaXR5LCAuc2VhcmNoX19ib2R5LWFyZWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XG59XG4uc2VhcmNoX19ib2R5LWNpdHk6YmVmb3JlLCAuc2VhcmNoX19ib2R5LWFyZWE6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0wLjVyZW07XG4gIGxlZnQ6IDEuMjVyZW07XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uc2VhcmNoX19ib2R5LWNpdHkgc2VsZWN0LCAuc2VhcmNoX19ib2R5LWFyZWEgc2VsZWN0IHtcbiAgcGFkZGluZzogMCAxLjI1cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LWZhbWlseTogXCJIaXJhZ2lubyBTYW5zIENOU1wiLCBcIuW+rui7n+ato+m7kemrlFwiLCBcIkFyaWFsXCI7XG4gIGJvcmRlci1yYWRpdXM6IDMuMTI1cmVtO1xuICBib3JkZXI6IDAuMTI1cmVtIHNvbGlkICM0ZjRmNGY7XG59XG4uc2VhcmNoX19ib2R5LWNpdHk6YmVmb3JlIHtcbiAgY29udGVudDogXCLnuKPluIJcIjtcbn1cbi5zZWFyY2hfX2JvZHktYXJlYTpiZWZvcmUge1xuICBjb250ZW50OiBcIumEiemOruW4guWNgOWIpVwiO1xufVxuLnNlYXJjaF9faW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNGY0ZjRmO1xufVxuLnNlYXJjaF9faW5mbyBmaWd1cmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMi41cmVtO1xufVxuLnNlYXJjaF9faW5mbyBmaWd1cmUgaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5zZWFyY2hfX2luZm8gLm51bSB7XG4gIG1hcmdpbjogMCAwLjEyNXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjZjI5OTRhO1xufVxuLnNlYXJjaF9fbWFzayB7XG4gIG1hcmdpbi10b3A6IDIuMzc1cmVtO1xufVxuLnNlYXJjaF9fbWFzayBoNCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cbi5zZWFyY2hfX21hc2stY2hpbGQsIC5zZWFyY2hfX21hc2stYWR1bHQsIC5zZWFyY2hfX21hc2stYm90aCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNXJlbTtcbiAgaGVpZ2h0OiA1cmVtO1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxLjI1cmVtO1xufVxuLnNlYXJjaF9fbWFzay1jaGlsZCBpbWcsIC5zZWFyY2hfX21hc2stYWR1bHQgaW1nLCAuc2VhcmNoX19tYXNrLWJvdGggaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5zZWFyY2hfX21hc2stY2hpbGQuaXNBY3QsIC5zZWFyY2hfX21hc2stYWR1bHQuaXNBY3QsIC5zZWFyY2hfX21hc2stYm90aC5pc0FjdCB7XG4gIGJveC1zaGFkb3c6IDBweCAwLjMxMjVyZW0gMC42MjVyZW0gI2YyYzk0Yztcbn1cbi5zZWFyY2hfX21hc2stdG90YWwge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuLnNlYXJjaF9fbWFzay10b3RhbCBoNCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZjI5OTRhO1xuICBsaW5lLWhlaWdodDogMjtcbn1cbi5zZWFyY2hfX21hc2stdG90YWwgaDQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufSIsIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvY29tbW9uXCI7XG5cbiVjbGVhciB7XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbn1cblxuLnNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJl9faWNvbntcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiByZW0oOHB4KTtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICAgIGJvcmRlci1yYWRpdXM6IHJlbSg0cHgpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuICAmX19mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG4gICZfX2hlYWRlciB7XG4gICAgaGVpZ2h0OiByZW0oMTY0cHgpO1xuICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gICAgcGFkZGluZzogcmVtKDIwcHgpO1xuICAgIC5zZWFyY2hfX2ZsZXgge1xuICAgICAgcGFkZGluZy10b3A6IHJlbSgxNnB4KTtcbiAgICB9XG4gIH1cbiAgJl9fYm9keSB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMzBweCk7XG4gICAgLy8gYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgICBwYWRkaW5nOiByZW0oMjBweCk7XG4gICAgJi10aXRsZSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IHJlbSgyMHB4KTtcbiAgICAgIC8vIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgY29sb3I6ICM0ZjRmNGY7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogcmVtKDM2cHgpO1xuICAgICAgbGluZS1oZWlnaHQ6IHJlbSg1NHB4KTtcbiAgICB9XG4gICAgJi1jaXR5LFxuICAgICYtYXJlYSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW4tdG9wOiByZW0oMjBweCk7XG4gICAgICAvLyBtYXJnaW4tdG9wOiByZW0oNDBweCk7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiByZW0oLThweCk7XG4gICAgICAgIGxlZnQ6IHJlbSgyMHB4KTtcbiAgICAgICAgcGFkZGluZzogMCByZW0oOHB4KTtcbiAgICAgICAgZm9udC1zaXplOiByZW0oMTJweCk7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICB9XG4gICAgICBzZWxlY3Qge1xuICAgICAgICBwYWRkaW5nOiByZW0oMCkgcmVtKDIwcHgpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiByZW0oNTBweCk7XG4gICAgICAgIGZvbnQtc2l6ZTogcmVtKDE2cHgpO1xuICAgICAgICBmb250LWZhbWlseTogXCJIaXJhZ2lubyBTYW5zIENOU1wiLCBcIuW+rui7n+ato+m7kemrlFwiLCBcIkFyaWFsXCI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHJlbSg1MHB4KTtcbiAgICAgICAgYm9yZGVyOiByZW0oMnB4KSBzb2xpZCAjNGY0ZjRmO1xuICAgICAgfVxuICAgIH1cbiAgICAmLWNpdHkge1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIue4o+W4glwiO1xuICAgICAgfVxuICAgIH1cbiAgICAmLWFyZWEge1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIumEiemOruW4guWNgOWIpVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmX19pbmZvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IHJlbSgzNnB4KTtcbiAgICBmb250LXNpemU6IHJlbSgxMnB4KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzRmNGY0ZjtcbiAgICBmaWd1cmUge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgaGVpZ2h0OiByZW0oNDBweCk7XG4gICAgICBpbWcge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgfVxuICAgIH1cbiAgICAubnVtIHtcbiAgICAgIG1hcmdpbjogMCByZW0oMnB4KTtcbiAgICAgIGZvbnQtc2l6ZTogcmVtKDI0cHgpO1xuICAgICAgY29sb3I6ICNmMjk5NGE7XG4gICAgfVxuICB9XG4gICZfX21hc2sge1xuICAgIG1hcmdpbi10b3A6IHJlbSgzOHB4KTtcbiAgICBoNCB7XG4gICAgICBmb250LXNpemU6IHJlbSgyMHB4KTtcbiAgICB9XG4gICAgJi1jaGlsZCxcbiAgICAmLWFkdWx0LFxuICAgICYtYm90aCB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogcmVtKDgwcHgpO1xuICAgICAgaGVpZ2h0OiByZW0oODBweCk7XG4gICAgICBtYXJnaW4tdG9wOiByZW0oMjRweCk7XG4gICAgICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSgjMDAwLCAwLjI1KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHJlbSgyMHB4KTtcbiAgICAgIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICB9XG4gICAgICAmLmlzQWN0IHtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IHJlbSg1cHgpIHJlbSgxMHB4KSAjZjJjOTRjO1xuICAgICAgfVxuICAgIH1cbiAgICAmLXRvdGFsIHtcbiAgICAgIG1hcmdpbi10b3A6IHJlbSgzMnB4KTtcbiAgICAgIGZvbnQtc2l6ZTogcmVtKDE0cHgpO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiByZW0oMjBweCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogI2YyOTk0YTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgZm9udC1zaXplOiByZW0oMTRweCk7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/search/search.component.ts":
  /*!********************************************!*\
    !*** ./src/app/search/search.component.ts ***!
    \********************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app-store.service */
    "./src/app/app-store.service.ts");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    var SearchComponent =
    /*#__PURE__*/
    function () {
      function SearchComponent(appService, appStoreService) {
        _classCallCheck(this, SearchComponent);

        this.appService = appService;
        this.appStoreService = appStoreService;
        this.doOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSearch"];
        this.assetsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].assetsUrl;
        this.mask = '';
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.appService.fetchTaiwanCity(), this.appService.fetchPharmacy()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return [res[0], res[1]];
          })).subscribe(function (res) {
            // console.log(123, res)
            // console.log('alllist', res[1] )
            _this7.getTaiwanCity = res[0];

            _this7.onCityChange('台北市'); // this.appStoreService.getPharmacy$.next( res[1] );

          });
          this.appStoreService.getCalMask$.subscribe(function (res) {
            _this7.childTotal = res.childTotal;
            _this7.adultTotal = res.adultTotal;
          });
        }
      }, {
        key: "onCityChange",
        value: function onCityChange(event) {
          this.appStoreService.setArea(event);
          this.city = event;
          this.appStoreService.setPharmacyList(this.city);
        }
      }, {
        key: "onAreaChange",
        value: function onAreaChange(event) {
          if (event === '全區') {
            this.area = '';
          } else {
            this.area = event;
          }

          this.appStoreService.setPharmacyList(this.city, this.area);
        }
      }, {
        key: "onMask",
        value: function onMask(str) {
          this.mask = str;
          this.appStoreService.setMask(str);
        }
      }, {
        key: "onSwitch",
        value: function onSwitch() {
          this.isOpen = !this.isOpen;
          this.doOpen.emit(this.isOpen);
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
      }, {
        type: _app_store_service__WEBPACK_IMPORTED_MODULE_2__["AppStoreService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SearchComponent.prototype, "doOpen", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.component.scss */
      "./src/app/search/search.component.scss")).default]
    })], SearchComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Mandy\Desktop\angular\maskmap\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map