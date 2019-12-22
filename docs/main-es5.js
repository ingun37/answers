(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n    <span [routerLink]=\"['/']\">MathBookAnswers</span>\n    <span class=\"example-space\"></span>\n</mat-toolbar>\n\n\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth-ui/auth-ui.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth-ui/auth-ui.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id='firebaseui-auth-container'></div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/book/book.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book/book.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"node\">\n    <mat-toolbar color=\"primary\">\n        <mat-toolbar-row>\n            <button mat-icon-button *ngIf=\"node.parentSha1\" [routerLink]=\"['/books', node.parentSha1]\">\n                <mat-icon>navigate_before</mat-icon>\n            </button>\n            <span>{{node.item.title}}</span>\n            <span class=\"example-spacer\"></span>\n            \n            <button mat-icon-button (click)=\"shareClick(node.item)\">\n                <mat-icon>share</mat-icon>\n            </button>\n            <button mat-icon-button [routerLink]=\"['/books', node.item.sha1]\">\n                <mat-icon>launch</mat-icon>\n            </button>\n        </mat-toolbar-row>\n    </mat-toolbar>\n\n\n</div>\n\n<app-section *ngIf=\"sha1\" [sha1]=\"sha1\"></app-section>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clipboard-snackbar/clipboard-snackbar.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clipboard-snackbar/clipboard-snackbar.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<span class=\"example-pizza-party\">\n    Copied to clipboard.\n  </span>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/excerpt/excerpt.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/excerpt/excerpt.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"htmlstr\">\n    <div [innerHTML]=\"htmlstr\"></div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"home\">\n  <mat-grid-list cols=\"{{cols}}\">\n    <mat-grid-tile *ngFor=\"let book of home.kids\" routerLink=\"{{makeURI(book)}}\">\n      <mat-card class=\"book-card\">\n        <mat-card-header>\n          <mat-card-title>{{book.title}}</mat-card-title>\n          <mat-card-subtitle *ngIf=\"authorOf(book)\">{{authorOf(book)}}</mat-card-subtitle>\n        </mat-card-header>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n  <!-- <div *ngFor=\"let book of home.books\">\n    <mat-card routerLink=\"{{makeURI(book)}}\" class=\"example-card\">\n      <mat-card-header>\n        <mat-card-title>{{book.title}}</mat-card-title>\n        <mat-card-subtitle>Bartosz Milewski</mat-card-subtitle>\n      </mat-card-header>\n    </mat-card>\n  </div> -->\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-item-dialog/new-item-dialog.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-item-dialog/new-item-dialog.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <h1 mat-dialog-title>Hi {{data.name}}</h1> -->\n<div mat-dialog-content>\n  <!-- <p>Title?</p> -->\n  <mat-form-field>\n    <input placeholder=\"Title\" matInput [(ngModel)]=\"data.name\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"data.name\" cdkFocusInitial>Ok</button>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/remove-bottom-sheet/remove-bottom-sheet.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/remove-bottom-sheet/remove-bottom-sheet.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2>Are you sure?</h2>\n<mat-action-list>\n    <button mat-list-item (click)=\"yes()\"> Yes </button>\n    <button mat-list-item (click)=\"no()\"> No </button>\n</mat-action-list>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/section/section.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/section/section.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"questionMD; else questionElseBlock\">\n    <app-excerpt [mdstr]=\"questionMD\"></app-excerpt>\n</div>\n<ng-template #questionElseBlock>\n    <div *ngIf=\"questionMD == null\">\n        <mat-spinner [diameter]=\"20\" [strokeWidth]=\"5\"></mat-spinner>\n    </div>\n</ng-template>\n\n<div *ngIf=\"answerMD; else answerElseBlock\">\n    <mat-divider></mat-divider>\n    <app-excerpt [mdstr]=\"answerMD\"></app-excerpt>\n</div>\n<ng-template #answerElseBlock>\n    <div *ngIf=\"answerMD == null\">\n        <mat-divider></mat-divider>\n        <mat-spinner [diameter]=\"20\" [strokeWidth]=\"5\"></mat-spinner>\n    </div>\n</ng-template>\n\n<div class=\"sectionbox\">\n    <div *ngIf=\"node\">\n        <mat-accordion [multi]=\"true\">\n            <div *ngFor=\"let sub of node.kids\">\n                <mat-expansion-panel>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            {{sub.title}}\n                        </mat-panel-title>\n                        <mat-panel-description *ngIf=\"headlineOf(sub)\" class=\"item-headline\">\n                            {{headlineOf(sub)}}\n                        </mat-panel-description>\n                        <mat-icon class=\"panel-icon\" (click)=\"shareClick(sub);$event.stopPropagation();\">share</mat-icon>\n                        <mat-icon class=\"panel-icon\" [routerLink]=\"['/books', sub.sha1]\" (click)=\"$event.stopPropagation();\">launch</mat-icon>\n                        \n                    </mat-expansion-panel-header>\n                    <ng-template matExpansionPanelContent>\n\n                        <app-section [sha1]=\"sub.sha1\"></app-section>\n\n                    </ng-template>\n                </mat-expansion-panel>\n            </div>\n        </mat-accordion>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<a routerLink=\"/{{item.path}}\" *ngIf=\"item.title\">{{item.title}}</a>\n\n<div *ngFor=\"let sub of item.subs\">\n    <ul>\n        <li>\n          <app-table [item]=\"sub\"></app-table>\n        </li>\n    </ul>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/write/write.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/write/write.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"item\">\n    <mat-button-toggle-group #group=\"matButtonToggleGroup\" (change)=\"changed($event);\">\n        <mat-button-toggle value=\"editor\" aria-label=\"editor\" [checked]=\"true\">\n            Editor\n        </mat-button-toggle>\n        <mat-button-toggle value=\"preview\" aria-label=\"preview\">\n            Preview\n        </mat-button-toggle>\n    </mat-button-toggle-group>\n\n    <br/>\n    <div *ngIf=\"previewHTML; else elseBlock\">\n        <div [innerHTML]=\"previewHTML\"></div>\n    </div>\n    <ng-template #elseBlock>\n        <mat-form-field>\n            <textarea matInput cdkTextareaAutosize cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\" [(ngModel)]=\"md\"></textarea>\n        </mat-form-field>\n    </ng-template>\n    <br/>\n    <button mat-button (click)=\"publish();\">Publish</button>\n    <button mat-button (click)=\"cancel();\">Cancel</button>\n</div>\n\n\n<!-- {{item.data[attribute]}} -->");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
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
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.sass": 
        /*!************************************!*\
          !*** ./src/app/app.component.sass ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".example-space {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZ3VuL215LXdvcmtzcGFjZS9hbnN3ZXJzLWZyb250L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZVxuICBmbGV4OiAxIDEgYXV0byIsIi5leGFtcGxlLXNwYWNlIHtcbiAgZmxleDogMSAxIGF1dG87XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'answers-front';
                    this.userName = null;
                    this.loaded = false;
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _write_write_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./write/write.component */ "./src/app/write/write.component.ts");
            /* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
            /* harmony import */ var _section_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./section/section.component */ "./src/app/section/section.component.ts");
            /* harmony import */ var _excerpt_excerpt_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./excerpt/excerpt.component */ "./src/app/excerpt/excerpt.component.ts");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm2015/text-field.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _login_ui_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login-ui.directive */ "./src/app/login-ui.directive.ts");
            /* harmony import */ var _auth_ui_auth_ui_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth-ui/auth-ui.component */ "./src/app/auth-ui/auth-ui.component.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _new_item_dialog_new_item_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./new-item-dialog/new-item-dialog.component */ "./src/app/new-item-dialog/new-item-dialog.component.ts");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
            /* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
            /* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
            /* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
            /* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
            /* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
            /* harmony import */ var _remove_bottom_sheet_remove_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./remove-bottom-sheet/remove-bottom-sheet.component */ "./src/app/remove-bottom-sheet/remove-bottom-sheet.component.ts");
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
            /* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
            /* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm2015/ngx-clipboard.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _clipboard_snackbar_clipboard_snackbar_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./clipboard-snackbar/clipboard-snackbar.component */ "./src/app/clipboard-snackbar/clipboard-snackbar.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                        _table_table_component__WEBPACK_IMPORTED_MODULE_11__["TableComponent"],
                        _write_write_component__WEBPACK_IMPORTED_MODULE_13__["WriteComponent"],
                        _book_book_component__WEBPACK_IMPORTED_MODULE_14__["BookComponent"],
                        _section_section_component__WEBPACK_IMPORTED_MODULE_15__["SectionComponent"],
                        _excerpt_excerpt_component__WEBPACK_IMPORTED_MODULE_16__["ExcerptComponent"],
                        _login_ui_directive__WEBPACK_IMPORTED_MODULE_21__["LoginUIDirective"],
                        _auth_ui_auth_ui_component__WEBPACK_IMPORTED_MODULE_22__["AuthUIComponent"],
                        _new_item_dialog_new_item_dialog_component__WEBPACK_IMPORTED_MODULE_24__["NewItemDialogComponent"],
                        _remove_bottom_sheet_remove_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_32__["RemoveBottomSheetComponent"],
                        _clipboard_snackbar_clipboard_snackbar_component__WEBPACK_IMPORTED_MODULE_37__["ClipboardSnackbarComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], pathMatch: 'full' },
                            { path: 'books/:sha1', component: _book_book_component__WEBPACK_IMPORTED_MODULE_14__["BookComponent"] },
                            { path: 'write/:path/:att', component: _write_write_component__WEBPACK_IMPORTED_MODULE_13__["WriteComponent"] },
                        ]),
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["NoopAnimationsModule"],
                        _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_18__["TextFieldModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"],
                        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"],
                        _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__["MatDividerModule"],
                        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__["MatExpansionModule"],
                        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_31__["MatBottomSheetModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_33__["MatListModule"],
                        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_34__["MatGridListModule"],
                        ngx_clipboard__WEBPACK_IMPORTED_MODULE_35__["ClipboardModule"],
                        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                    entryComponents: [
                        _remove_bottom_sheet_remove_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_32__["RemoveBottomSheetComponent"],
                        _new_item_dialog_new_item_dialog_component__WEBPACK_IMPORTED_MODULE_24__["NewItemDialogComponent"],
                        _clipboard_snackbar_clipboard_snackbar_component__WEBPACK_IMPORTED_MODULE_37__["ClipboardSnackbarComponent"]
                    ],
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/auth-ui/auth-ui.component.sass": 
        /*!************************************************!*\
          !*** ./src/app/auth-ui/auth-ui.component.sass ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgtdWkvYXV0aC11aS5jb21wb25lbnQuc2FzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/auth-ui/auth-ui.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/auth-ui/auth-ui.component.ts ***!
          \**********************************************/
        /*! exports provided: AuthUIComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthUIComponent", function () { return AuthUIComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AuthUIComponent = /** @class */ (function () {
                function AuthUIComponent() {
                }
                AuthUIComponent.prototype.ngOnInit = function () {
                };
                return AuthUIComponent;
            }());
            AuthUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-auth-ui',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-ui.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth-ui/auth-ui.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth-ui.component.sass */ "./src/app/auth-ui/auth-ui.component.sass")).default]
                })
            ], AuthUIComponent);
            /***/ 
        }),
        /***/ "./src/app/book/book.component.sass": 
        /*!******************************************!*\
          !*** ./src/app/book/book.component.sass ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("span.title {\n  font-size: 160%;\n  font-weight: bold;\n}\n\n.example-margin {\n  margin: 10px;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZ3VuL215LXdvcmtzcGFjZS9hbnN3ZXJzLWZyb250L3NyYy9hcHAvYm9vay9ib29rLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9ib29rL2Jvb2suY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7QUNFSjs7QURBQTtFQUNFLGNBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2Jvb2svYm9vay5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4udGl0bGVcbiAgICBmb250LXNpemU6IDE2MCVcbiAgICBmb250LXdlaWdodDogYm9sZFxuXG4uZXhhbXBsZS1tYXJnaW5cbiAgICBtYXJnaW46IDEwcHhcblxuLmV4YW1wbGUtc3BhY2VyXG4gIGZsZXg6IDEgMSBhdXRvXG4iLCJzcGFuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNjAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmV4YW1wbGUtbWFyZ2luIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/book/book.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/book/book.component.ts ***!
          \****************************************/
        /*! exports provided: BookComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function () { return BookComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _static_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static-db.service */ "./src/app/static-db.service.ts");
            /* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm2015/ngx-clipboard.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _clipboard_snackbar_clipboard_snackbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../clipboard-snackbar/clipboard-snackbar.component */ "./src/app/clipboard-snackbar/clipboard-snackbar.component.ts");
            var BookComponent = /** @class */ (function () {
                function BookComponent(route, db, clipboard, _snackBar) {
                    this.route = route;
                    this.db = db;
                    this.clipboard = clipboard;
                    this._snackBar = _snackBar;
                    this.uid = null;
                }
                BookComponent.prototype.shareClick = function (item) {
                    this.clipboard.copyFromContent(location.origin + '/books/' + item.sha1);
                    this._snackBar.openFromComponent(_clipboard_snackbar_clipboard_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["ClipboardSnackbarComponent"], {
                        duration: 4 * 1000,
                    });
                };
                BookComponent.prototype.change = function (event) {
                };
                BookComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.paramMap.subscribe(function (params) {
                        _this.sha1 = null;
                        var sha1 = params.get('sha1');
                        _this.db.getItem(sha1).then(function (node) {
                            _this.node = node;
                            _this.sha1 = node.item.sha1;
                        });
                    });
                };
                return BookComponent;
            }());
            BookComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _static_db_service__WEBPACK_IMPORTED_MODULE_3__["StaticDBService"] },
                { type: ngx_clipboard__WEBPACK_IMPORTED_MODULE_4__["ClipboardService"] },
                { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
            ]; };
            BookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-book',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/book/book.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book.component.sass */ "./src/app/book/book.component.sass")).default]
                })
            ], BookComponent);
            /***/ 
        }),
        /***/ "./src/app/clipboard-snackbar/clipboard-snackbar.component.sass": 
        /*!**********************************************************************!*\
          !*** ./src/app/clipboard-snackbar/clipboard-snackbar.component.sass ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaXBib2FyZC1zbmFja2Jhci9jbGlwYm9hcmQtc25hY2tiYXIuY29tcG9uZW50LnNhc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/clipboard-snackbar/clipboard-snackbar.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/clipboard-snackbar/clipboard-snackbar.component.ts ***!
          \********************************************************************/
        /*! exports provided: ClipboardSnackbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardSnackbarComponent", function () { return ClipboardSnackbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ClipboardSnackbarComponent = /** @class */ (function () {
                function ClipboardSnackbarComponent() {
                }
                ClipboardSnackbarComponent.prototype.ngOnInit = function () {
                };
                return ClipboardSnackbarComponent;
            }());
            ClipboardSnackbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-clipboard-snackbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clipboard-snackbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clipboard-snackbar/clipboard-snackbar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clipboard-snackbar.component.sass */ "./src/app/clipboard-snackbar/clipboard-snackbar.component.sass")).default]
                })
            ], ClipboardSnackbarComponent);
            /***/ 
        }),
        /***/ "./src/app/excerpt/excerpt.component.sass": 
        /*!************************************************!*\
          !*** ./src/app/excerpt/excerpt.component.sass ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4Y2VycHQvZXhjZXJwdC5jb21wb25lbnQuc2FzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/excerpt/excerpt.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/excerpt/excerpt.component.ts ***!
          \**********************************************/
        /*! exports provided: ExcerptComponent, ItemAttribute */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcerptComponent", function () { return ExcerptComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemAttribute", function () { return ItemAttribute; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _md_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../md.service */ "./src/app/md.service.ts");
            var ExcerptComponent = /** @class */ (function () {
                function ExcerptComponent(sanitizer, md) {
                    this.sanitizer = sanitizer;
                    this.md = md;
                }
                ExcerptComponent.prototype.ngOnInit = function () {
                    if (this.mdstr) {
                        this.htmlstr = this.sanitizer.bypassSecurityTrustHtml(this.md.md2HTML(this.mdstr));
                    }
                };
                return ExcerptComponent;
            }());
            ExcerptComponent.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
                { type: _md_service__WEBPACK_IMPORTED_MODULE_3__["MDService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ExcerptComponent.prototype, "mdstr", void 0);
            ExcerptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-excerpt',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./excerpt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/excerpt/excerpt.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./excerpt.component.sass */ "./src/app/excerpt/excerpt.component.sass")).default]
                })
            ], ExcerptComponent);
            var ItemAttribute;
            (function (ItemAttribute) {
                ItemAttribute["QUESTION"] = "question";
                ItemAttribute["ANSWER"] = "answer";
            })(ItemAttribute || (ItemAttribute = {}));
            function getSafe(fn, defaultVal) {
                try {
                    return fn();
                }
                catch (e) {
                    return defaultVal;
                }
            }
            /***/ 
        }),
        /***/ "./src/app/home/home.component.sass": 
        /*!******************************************!*\
          !*** ./src/app/home/home.component.sass ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2FzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _static_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static-db.service */ "./src/app/static-db.service.ts");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(
                // private answerService: AnswerService,
                db) {
                    this.db = db;
                    this.cols = 4;
                }
                HomeComponent.prototype.makeURI = function (item) {
                    return 'books/' + item.sha1;
                };
                HomeComponent.prototype.authorOf = function (item) {
                    return item.attr['author'] || '';
                };
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.db.getHome().then(function (home) { return _this.home = home; });
                    // this.answerService.getHome().then(home => this.home = home);
                    var toCols = Math.min(Math.floor(window.innerWidth / 200), 4);
                    if (toCols !== this.cols) {
                        this.cols = toCols;
                    }
                };
                HomeComponent.prototype.onResize = function (event) {
                    var toCols = Math.min(Math.floor(window.innerWidth / 200), 4);
                    if (toCols !== this.cols) {
                        this.cols = toCols;
                    }
                    console.log(this.cols);
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _static_db_service__WEBPACK_IMPORTED_MODULE_2__["StaticDBService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
            ], HomeComponent.prototype, "onResize", null);
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.sass */ "./src/app/home/home.component.sass")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/login-ui.directive.ts": 
        /*!***************************************!*\
          !*** ./src/app/login-ui.directive.ts ***!
          \***************************************/
        /*! exports provided: LoginUIDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUIDirective", function () { return LoginUIDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LoginUIDirective = /** @class */ (function () {
                function LoginUIDirective(el) {
                }
                return LoginUIDirective;
            }());
            LoginUIDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            LoginUIDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: '[appLoginUI]'
                })
            ], LoginUIDirective);
            /***/ 
        }),
        /***/ "./src/app/md.service.ts": 
        /*!*******************************!*\
          !*** ./src/app/md.service.ts ***!
          \*******************************/
        /*! exports provided: MDService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDService", function () { return MDService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/highlight */ "./node_modules/highlight.js/lib/highlight.js");
            /* harmony import */ var highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var highlight_js_lib_languages_haskell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/lib/languages/haskell */ "./node_modules/highlight.js/lib/languages/haskell.js");
            /* harmony import */ var highlight_js_lib_languages_haskell__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(highlight_js_lib_languages_haskell__WEBPACK_IMPORTED_MODULE_3__);
            var MDService = /** @class */ (function () {
                function MDService() {
                    highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_2__["registerLanguage"]('haskell', highlight_js_lib_languages_haskell__WEBPACK_IMPORTED_MODULE_3__);
                }
                MDService.prototype.md2HTML = function (mdStr) {
                    var displayTable = {};
                    var table = {};
                    var replacedMD = mdStr.replace(/\$\$(.+?)\$\$/gm, function (match, group) {
                        var randomID = makeid(16);
                        displayTable[randomID] = group;
                        return randomID;
                    }).replace(/\$(.+?)\$/g, function (match, group) {
                        var randomID = makeid(16);
                        table[randomID] = group;
                        return randomID;
                    });
                    var html = marked(replacedMD, {
                        gfm: true,
                        highlight: function (code) {
                            return highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_2__["highlightAuto"](code).value;
                        }
                    });
                    // var html = mdservice.compile(replacedMD);
                    for (var key in displayTable) {
                        if (displayTable.hasOwnProperty(key)) {
                            var tex = displayTable[key];
                            html = html.replace(key, katex.renderToString(tex, { displayMode: true }));
                        }
                    }
                    for (var key in table) {
                        if (table.hasOwnProperty(key)) {
                            var tex = table[key];
                            html = html.replace(key, katex.renderToString(tex));
                        }
                    }
                    return html;
                };
                return MDService;
            }());
            MDService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], MDService);
            function makeid(length) {
                var result = '';
                var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            }
            /***/ 
        }),
        /***/ "./src/app/new-item-dialog/new-item-dialog.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/new-item-dialog/new-item-dialog.component.ts ***!
          \**************************************************************/
        /*! exports provided: NewItemDialogComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewItemDialogComponent", function () { return NewItemDialogComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var NewItemDialogComponent = /** @class */ (function () {
                function NewItemDialogComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                }
                NewItemDialogComponent.prototype.onNoClick = function () {
                    this.dialogRef.close();
                };
                NewItemDialogComponent.prototype.ngOnInit = function () {
                };
                return NewItemDialogComponent;
            }());
            NewItemDialogComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            NewItemDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-new-item-dialog',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-item-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-item-dialog/new-item-dialog.component.html")).default,
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], NewItemDialogComponent);
            /***/ 
        }),
        /***/ "./src/app/remove-bottom-sheet/remove-bottom-sheet.component.sass": 
        /*!************************************************************************!*\
          !*** ./src/app/remove-bottom-sheet/remove-bottom-sheet.component.sass ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbW92ZS1ib3R0b20tc2hlZXQvcmVtb3ZlLWJvdHRvbS1zaGVldC5jb21wb25lbnQuc2FzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/remove-bottom-sheet/remove-bottom-sheet.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/remove-bottom-sheet/remove-bottom-sheet.component.ts ***!
          \**********************************************************************/
        /*! exports provided: RemoveBottomSheetComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveBottomSheetComponent", function () { return RemoveBottomSheetComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
            var RemoveBottomSheetComponent = /** @class */ (function () {
                function RemoveBottomSheetComponent(bottomSheetRef) {
                    this.bottomSheetRef = bottomSheetRef;
                }
                RemoveBottomSheetComponent.prototype.ngOnInit = function () {
                };
                RemoveBottomSheetComponent.prototype.openLink = function (event) {
                    this.bottomSheetRef.dismiss();
                    event.preventDefault();
                };
                RemoveBottomSheetComponent.prototype.yes = function () {
                    this.bottomSheetRef.dismiss(true);
                };
                RemoveBottomSheetComponent.prototype.no = function () {
                    this.bottomSheetRef.dismiss(false);
                };
                return RemoveBottomSheetComponent;
            }());
            RemoveBottomSheetComponent.ctorParameters = function () { return [
                { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"] }
            ]; };
            RemoveBottomSheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-remove-bottom-sheet',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./remove-bottom-sheet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/remove-bottom-sheet/remove-bottom-sheet.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./remove-bottom-sheet.component.sass */ "./src/app/remove-bottom-sheet/remove-bottom-sheet.component.sass")).default]
                })
            ], RemoveBottomSheetComponent);
            /***/ 
        }),
        /***/ "./src/app/section/section.component.sass": 
        /*!************************************************!*\
          !*** ./src/app/section/section.component.sass ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".item-headline {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-mask-image: -webkit-linear-gradient(left, black 80%, rgba(0, 0, 0, 0));\n}\n\n.panel-icon {\n  margin-right: 0.4em;\n  margin-bottom: -0.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZ3VuL215LXdvcmtzcGFjZS9hbnN3ZXJzLWZyb250L3NyYy9hcHAvc2VjdGlvbi9zZWN0aW9uLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9zZWN0aW9uL3NlY3Rpb24uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFFQSw4RUFBQTtBQ0FKOztBRE9BO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbi9zZWN0aW9uLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0taGVhZGxpbmVcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDI1NSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDAsMCwwLDEpIDgwJSwgcmdiYSgwLDAsMCwwKSlcbiRidG4tY29lZmZpY2llbnQ6IDEuOFxuJGljb24tY29lZmZpY2llbnQ6IDJcbi5wYW5lbC1idG5cbiAgICAvLyBoZWlnaHQ6ICRidG4tY29lZmZpY2llbnQgKiAxZW1cbiAgICAvLyB3aWR0aDogJGJ0bi1jb2VmZmljaWVudCAqIDFlbVxuICAgIC8vIG1hcmdpbjogLTVlbVxuLnBhbmVsLWljb25cbiAgICBtYXJnaW4tcmlnaHQ6IDAuNGVtXG4gICAgbWFyZ2luLWJvdHRvbTogLTAuMWVtXG4gICAgICAgIC8vIGZvbnQtc2l6ZTogMWVtXG4gICAgICAgIC8vIGhlaWdodDogJGljb24tY29lZmZpY2llbnQgKiAxZW1cbiAgICAgICAgLy8gd2lkdGg6ICRpY29uLWNvZWZmaWNpZW50ICogMWVtXG4gICAgICAgIC8vIGxpbmUtaGVpZ2h0OiAkaWNvbi1jb2VmZmljaWVudCIsIi5pdGVtLWhlYWRsaW5lIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgYmxhY2sgODAlLCByZ2JhKDAsIDAsIDAsIDApKTtcbn1cblxuLnBhbmVsLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDAuNGVtO1xuICBtYXJnaW4tYm90dG9tOiAtMC4xZW07XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/section/section.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/section/section.component.ts ***!
          \**********************************************/
        /*! exports provided: SectionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function () { return SectionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _new_item_dialog_new_item_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../new-item-dialog/new-item-dialog.component */ "./src/app/new-item-dialog/new-item-dialog.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
            /* harmony import */ var _remove_bottom_sheet_remove_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../remove-bottom-sheet/remove-bottom-sheet.component */ "./src/app/remove-bottom-sheet/remove-bottom-sheet.component.ts");
            /* harmony import */ var _static_db_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static-db.service */ "./src/app/static-db.service.ts");
            /* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm2015/ngx-clipboard.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _clipboard_snackbar_clipboard_snackbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../clipboard-snackbar/clipboard-snackbar.component */ "./src/app/clipboard-snackbar/clipboard-snackbar.component.ts");
            var SectionComponent = /** @class */ (function () {
                function SectionComponent(dialog, bottomSheet, db, clipboard, router, _snackBar) {
                    this.dialog = dialog;
                    this.bottomSheet = bottomSheet;
                    this.db = db;
                    this.clipboard = clipboard;
                    this.router = router;
                    this._snackBar = _snackBar;
                    this.editLink = '';
                    this.questionMD = null;
                    this.answerMD = null;
                }
                SectionComponent.prototype.addClick = function () {
                    var dialogRef = this.dialog.open(_new_item_dialog_new_item_dialog_component__WEBPACK_IMPORTED_MODULE_3__["NewItemDialogComponent"], {
                        width: '80%',
                        data: { name: '' }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                    });
                };
                SectionComponent.prototype.reloadChildren = function () {
                    // this.answer
                    // this.answer.getChildren(this.item.path).then(children => {
                    //   this.children = children;
                    // });
                };
                SectionComponent.prototype.answerOf = function (item) {
                    return item.attr['a'] || '';
                };
                SectionComponent.prototype.questionOf = function (item) {
                    return item.attr['q'] || '';
                };
                SectionComponent.prototype.headlineOf = function (item) {
                    if (this.questionOf(item)) {
                        return this.questionOf(item).split('\n')[0];
                    }
                    else if (this.answerOf(item)) {
                        return this.answerOf(item).split('\n')[0];
                    }
                    else {
                        return '';
                    }
                };
                SectionComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log('section init!');
                    this.db.getItem(this.sha1).then(function (node) {
                        _this.node = node;
                        _this.editLink = '/write/' + _this.node.item.sha1;
                        _this.reloadChildren();
                        _this.questionMD = _this.questionOf(node.item) || '';
                        _this.answerMD = _this.answerOf(node.item) || '';
                    });
                };
                SectionComponent.prototype.shareClick = function (item) {
                    this.clipboard.copyFromContent(location.origin + '/books/' + item.sha1);
                    this._snackBar.openFromComponent(_clipboard_snackbar_clipboard_snackbar_component__WEBPACK_IMPORTED_MODULE_10__["ClipboardSnackbarComponent"], {
                        duration: 4 * 1000,
                    });
                };
                SectionComponent.prototype.openBottomSheet = function () {
                    var ref = this.bottomSheet.open(_remove_bottom_sheet_remove_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_6__["RemoveBottomSheetComponent"]);
                    ref.afterDismissed().subscribe(function (result) {
                        if (result) {
                            // this.admin.delete(this.item.path).then(() => {
                            //   this.reloadChildren();
                            // })
                        }
                        else {
                        }
                    });
                };
                return SectionComponent;
            }());
            SectionComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheet"] },
                { type: _static_db_service__WEBPACK_IMPORTED_MODULE_7__["StaticDBService"] },
                { type: ngx_clipboard__WEBPACK_IMPORTED_MODULE_8__["ClipboardService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], SectionComponent.prototype, "sha1", void 0);
            SectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-section',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/section/section.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section.component.sass */ "./src/app/section/section.component.sass")).default]
                })
            ], SectionComponent);
            /***/ 
        }),
        /***/ "./src/app/static-db.service.ts": 
        /*!**************************************!*\
          !*** ./src/app/static-db.service.ts ***!
          \**************************************/
        /*! exports provided: StaticDBService, _Item, _Node */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticDBService", function () { return StaticDBService; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Item", function () { return _Item; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Node", function () { return _Node; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var StaticDBService = /** @class */ (function () {
                function StaticDBService(http) {
                    this.http = http;
                    this.rootSha = '2aed5404c83f7a46aa249e0a6328af756b19d513';
                }
                StaticDBService.prototype.getJson = function (sha) {
                    return this.http.get('assets/db/' + sha + '.json').toPromise().then(function (obj) {
                        var instance = Object.assign(new _Node(), obj);
                        return instance;
                    });
                };
                StaticDBService.prototype.getHome = function () {
                    return this.getJson(this.rootSha);
                };
                StaticDBService.prototype.getItem = function (sha) {
                    return this.getJson(sha);
                };
                return StaticDBService;
            }());
            StaticDBService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            StaticDBService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], StaticDBService);
            var _Item = /** @class */ (function () {
                function _Item() {
                }
                return _Item;
            }());
            var _Node = /** @class */ (function () {
                function _Node() {
                }
                return _Node;
            }());
            /***/ 
        }),
        /***/ "./src/app/table/table.component.sass": 
        /*!********************************************!*\
          !*** ./src/app/table/table.component.sass ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zYXNzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/table/table.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/table/table.component.ts ***!
          \******************************************/
        /*! exports provided: TableComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function () { return TableComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TableComponent = /** @class */ (function () {
                function TableComponent() {
                }
                TableComponent.prototype.ngOnInit = function () {
                };
                return TableComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TableComponent.prototype, "item", void 0);
            TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-table',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table.component.sass */ "./src/app/table/table.component.sass")).default]
                })
            ], TableComponent);
            /***/ 
        }),
        /***/ "./src/app/write/write.component.sass": 
        /*!********************************************!*\
          !*** ./src/app/write/write.component.sass ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".full-height {\n  height: 60vh;\n}\n\n.editor {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZ3VuL215LXdvcmtzcGFjZS9hbnN3ZXJzLWZyb250L3NyYy9hcHAvd3JpdGUvd3JpdGUuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3dyaXRlL3dyaXRlLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3dyaXRlL3dyaXRlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtaGVpZ2h0XG4gIGhlaWdodDogNjB2aFxuXG4uZWRpdG9yXG4gIGhlaWdodDogMTAwJVxuICB3aWR0aDogMTAwJSIsIi5mdWxsLWhlaWdodCB7XG4gIGhlaWdodDogNjB2aDtcbn1cblxuLmVkaXRvciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/write/write.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/write/write.component.ts ***!
          \******************************************/
        /*! exports provided: WriteComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteComponent", function () { return WriteComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var WriteComponent = /** @class */ (function () {
                function WriteComponent(route, router) {
                    this.route = route;
                    this.router = router;
                    this.parentAccountId = null;
                }
                WriteComponent.prototype.changed = function (change) {
                    console.log(change);
                    // if (change.value === 'preview') {
                    //   this.previewHTML = md2HTML(this.mdservice, this.md);
                    // } else if (change.value === 'editor') {
                    //   this.previewHTML = '';
                    // }
                };
                WriteComponent.prototype.publish = function () {
                    // this.admin.save(this.item.path, this.attribute, this.parentAccountId, this.md).then(() => {
                    //   this.router.navigate(['books', encodeURIComponent(this.item.path)]);
                    // });
                    // const user = this.fire.loginState.value;
                    // if (user) {
                    //   console.log(user);
                    //   this.answer.newAccount(this.item.path, this.attribute, new Account(user.uid, this.md, this.parentAccountId)).then(x => {
                    //     this.router.navigate(['books', encodeURIComponent(this.item.path)]);
                    //   });
                    // }
                };
                WriteComponent.prototype.cancel = function () {
                };
                WriteComponent.prototype.ngOnInit = function () {
                };
                return WriteComponent;
            }());
            WriteComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            WriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-write',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./write.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/write/write.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./write.component.sass */ "./src/app/write/write.component.sass")).default]
                })
            ], WriteComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
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
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/ingun/my-workspace/answers-front/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map