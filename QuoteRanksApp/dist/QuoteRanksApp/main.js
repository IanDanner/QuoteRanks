(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _author_list_author_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./author-list/author-list.component */ "./src/app/author-list/author-list.component.ts");
/* harmony import */ var _author_new_author_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./author-new/author-new.component */ "./src/app/author-new/author-new.component.ts");
/* harmony import */ var _quote_list_quote_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quote-list/quote-list.component */ "./src/app/quote-list/quote-list.component.ts");
/* harmony import */ var _quote_new_quote_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quote-new/quote-new.component */ "./src/app/quote-new/quote-new.component.ts");
/* harmony import */ var _author_list_author_edit_author_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./author-list/author-edit/author-edit.component */ "./src/app/author-list/author-edit/author-edit.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _author_list_author_list_component__WEBPACK_IMPORTED_MODULE_2__["AuthorListComponent"] },
    { path: 'AuthorList', component: _author_list_author_list_component__WEBPACK_IMPORTED_MODULE_2__["AuthorListComponent"], children: [] },
    { path: 'Edit/:id', component: _author_list_author_edit_author_edit_component__WEBPACK_IMPORTED_MODULE_6__["AuthorEditComponent"] },
    { path: 'AuthorNew', component: _author_new_author_new_component__WEBPACK_IMPORTED_MODULE_3__["AuthorNewComponent"], children: [] },
    { path: 'QuoteList/:id', component: _quote_list_quote_list_component__WEBPACK_IMPORTED_MODULE_4__["QuoteListComponent"], children: [] },
    { path: 'QuoteList/:id/QuoteNew', component: _quote_new_quote_new_component__WEBPACK_IMPORTED_MODULE_5__["QuoteNewComponent"], children: [] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper{\r\n    display: inline-block;\r\n    margin-left: 40%;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <h1>Quote Ranks</h1>\n  <router-outlet></router-outlet>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _author_list_author_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./author-list/author-list.component */ "./src/app/author-list/author-list.component.ts");
/* harmony import */ var _author_new_author_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./author-new/author-new.component */ "./src/app/author-new/author-new.component.ts");
/* harmony import */ var _quote_list_quote_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quote-list/quote-list.component */ "./src/app/quote-list/quote-list.component.ts");
/* harmony import */ var _quote_new_quote_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quote-new/quote-new.component */ "./src/app/quote-new/quote-new.component.ts");
/* harmony import */ var _author_list_author_edit_author_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./author-list/author-edit/author-edit.component */ "./src/app/author-list/author-edit/author-edit.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _author_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./author.service */ "./src/app/author.service.ts");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./quote.service */ "./src/app/quote.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _author_list_author_list_component__WEBPACK_IMPORTED_MODULE_7__["AuthorListComponent"],
                _author_new_author_new_component__WEBPACK_IMPORTED_MODULE_8__["AuthorNewComponent"],
                _quote_list_quote_list_component__WEBPACK_IMPORTED_MODULE_9__["QuoteListComponent"],
                _quote_new_quote_new_component__WEBPACK_IMPORTED_MODULE_10__["QuoteNewComponent"],
                _author_list_author_edit_author_edit_component__WEBPACK_IMPORTED_MODULE_11__["AuthorEditComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
            ],
            providers: [_author_service__WEBPACK_IMPORTED_MODULE_13__["AuthorService"], _quote_service__WEBPACK_IMPORTED_MODULE_14__["QuoteService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/author-list/author-edit/author-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/author-list/author-edit/author-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/author-list/author-edit/author-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/author-list/author-edit/author-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <a [routerLink]=\"['']\">Home</a>\n  <p>Edit this author</p>\n  <form *ngIf=\"author\" (submit)=\"onEdit(author)\" #formData='ngForm'>\n    <label>Name:</label>\n    <input type=\"text\" value=\"author.name\" name=\"editAuthor.name\" [(ngModel)]=\"author.name\" required #name='ngModel' minlength=\"3\">\n    <span class=\"error\" *ngIf=\"name.errors\">{{name.errors | json}}</span>\n    <p *ngIf=\"errors.title\" style=\"color: red\">{{errors.name.message}}</p>\n\n    <input type=\"submit\" value=\"Submit\" [disabled]=\"formData.invalid\">\n    <input type=\"submit\" value=\"Cancel\" [routerLink]=\"['']\">   \n  </form>\n</div>"

/***/ }),

/***/ "./src/app/author-list/author-edit/author-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/author-list/author-edit/author-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: AuthorEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorEditComponent", function() { return AuthorEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _author_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../author.service */ "./src/app/author.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorEditComponent = /** @class */ (function () {
    function AuthorEditComponent(route, _route, authorservice) {
        this.route = route;
        this._route = _route;
        this.authorservice = authorservice;
        this.author = {};
        this.editAuthor = {};
        this.errors = {};
    }
    AuthorEditComponent.prototype.ngOnInit = function () {
        this.ShowOne();
    };
    AuthorEditComponent.prototype.ShowOne = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            var observable = _this.authorservice.getAuthor(params.get('id'));
            observable.subscribe(function (data) {
                _this.author = data;
            });
        });
    };
    AuthorEditComponent.prototype.onEdit = function (editAuthor) {
        var _this = this;
        this.author = {};
        var observable = this.authorservice.editAuthor(editAuthor);
        observable.subscribe(function (data) {
            if (data["errors"]) {
                _this.errors = data["errors"];
            }
            else {
                _this.route.navigateByUrl('/');
            }
        });
    };
    AuthorEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-author-edit',
            template: __webpack_require__(/*! ./author-edit.component.html */ "./src/app/author-list/author-edit/author-edit.component.html"),
            styles: [__webpack_require__(/*! ./author-edit.component.css */ "./src/app/author-list/author-edit/author-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _author_service__WEBPACK_IMPORTED_MODULE_1__["AuthorService"]])
    ], AuthorEditComponent);
    return AuthorEditComponent;
}());



/***/ }),

/***/ "./src/app/author-list/author-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/author-list/author-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/author-list/author-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/author-list/author-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <a [routerLink]=\"['AuthorNew']\">Add a quotable author</a>\n  <p>We have quotes by:</p>\n  <table>\n    <thead>\n      <tr>\n        <th>Author</th>\n        <th>Actions available</th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let author of authors\">\n      <tr *ngIf=\"author.name\">\n        <td>{{author.name}}</td>\n        <td><button [routerLink]=\"['QuoteList', author._id]\">View Quotes</button> | <button [routerLink]=\"['Edit', author._id]\">Edit</button> | <button (click)=\"onDelete(author._id)\">Delete</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/author-list/author-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/author-list/author-list.component.ts ***!
  \******************************************************/
/*! exports provided: AuthorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorListComponent", function() { return AuthorListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _author_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../author.service */ "./src/app/author.service.ts");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote.service */ "./src/app/quote.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthorListComponent = /** @class */ (function () {
    function AuthorListComponent(_route, authorservice, quoteservice) {
        this._route = _route;
        this.authorservice = authorservice;
        this.quoteservice = quoteservice;
        this.authors = [];
        this.author = {};
    }
    AuthorListComponent.prototype.ngOnInit = function () {
        this.ShowAll();
    };
    AuthorListComponent.prototype.ShowAll = function () {
        var _this = this;
        var observable = this.authorservice.getAuthors();
        observable.subscribe(function (data) {
            ;
            _this.authors = Object.values(data);
        });
    };
    AuthorListComponent.prototype.onDelete = function (Aid) {
        var _this = this;
        console.log(Aid);
        this.authorservice.getAuthor(Aid).subscribe(function (data) {
            _this.author = data;
            for (var _i = 0, _a = _this.author['quotes']; _i < _a.length; _i++) {
                var quote = _a[_i];
                _this.quoteservice.deleteQuote(Aid, quote['_id']).subscribe(function (data) { });
            }
            _this.authorservice.deleteAuthor(Aid).subscribe(function (data) {
                _this.ShowAll();
            });
        });
    };
    AuthorListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-author-list',
            template: __webpack_require__(/*! ./author-list.component.html */ "./src/app/author-list/author-list.component.html"),
            styles: [__webpack_require__(/*! ./author-list.component.css */ "./src/app/author-list/author-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _author_service__WEBPACK_IMPORTED_MODULE_1__["AuthorService"], _quote_service__WEBPACK_IMPORTED_MODULE_2__["QuoteService"]])
    ], AuthorListComponent);
    return AuthorListComponent;
}());



/***/ }),

/***/ "./src/app/author-new/author-new.component.css":
/*!*****************************************************!*\
  !*** ./src/app/author-new/author-new.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/author-new/author-new.component.html":
/*!******************************************************!*\
  !*** ./src/app/author-new/author-new.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <a [routerLink]=\"['']\">Home</a>\n  <p>Add a new author:</p>\n  <form (submit)=\"onCreate()\" #formData='ngForm'>\n    <label>Name:</label>\n    <input type=\"text\" name=\"name\" [(ngModel)]=\"newAuthor.name\" required #name='ngModel' minlength=\"3\">\n\n    <div style=\"color: red\" class=\"error\" *ngIf=\"name.errors\">\n        <p *ngIf=\"name.errors.minlength\">Must Be Longer than 3 Characters</p>\n        <p *ngIf=\"name.errors.required\">Required</p>\n    </div>\n    <p *ngIf=\"errors.name\" style=\"color: red\">{{errors.name.message}}</p>    \n\n    <input type=\"submit\" value=\"Submit\" [disabled]=\"formData.invalid\">\n    <input type=\"submit\" value=\"Cancel\" [routerLink]=\"['']\">   \n  </form>\n</div>"

/***/ }),

/***/ "./src/app/author-new/author-new.component.ts":
/*!****************************************************!*\
  !*** ./src/app/author-new/author-new.component.ts ***!
  \****************************************************/
/*! exports provided: AuthorNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorNewComponent", function() { return AuthorNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _author_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../author.service */ "./src/app/author.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorNewComponent = /** @class */ (function () {
    function AuthorNewComponent(_route, authorservice) {
        this._route = _route;
        this.authorservice = authorservice;
        this.errors = {};
    }
    AuthorNewComponent.prototype.ngOnInit = function () {
        this.newAuthor = { name: "" };
    };
    AuthorNewComponent.prototype.onCreate = function () {
        var _this = this;
        this.errors = [];
        var observable = this.authorservice.newAuthor(this.newAuthor);
        observable.subscribe(function (data) {
            if (data["errors"]) {
                _this.errors = data["errors"];
            }
            else {
                _this._route.navigateByUrl('/');
            }
        });
    };
    AuthorNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-author-new',
            template: __webpack_require__(/*! ./author-new.component.html */ "./src/app/author-new/author-new.component.html"),
            styles: [__webpack_require__(/*! ./author-new.component.css */ "./src/app/author-new/author-new.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _author_service__WEBPACK_IMPORTED_MODULE_1__["AuthorService"]])
    ], AuthorNewComponent);
    return AuthorNewComponent;
}());



/***/ }),

/***/ "./src/app/author.service.ts":
/*!***********************************!*\
  !*** ./src/app/author.service.ts ***!
  \***********************************/
/*! exports provided: AuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorService", function() { return AuthorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthorService = /** @class */ (function () {
    function AuthorService(_http) {
        this._http = _http;
    }
    AuthorService.prototype.getAuthors = function () {
        return this._http.get('/Authors');
    };
    AuthorService.prototype.getAuthor = function (id) {
        return this._http.get('/Authors/' + id);
    };
    AuthorService.prototype.newAuthor = function (newAuthor) {
        return this._http.post('/Authors', newAuthor);
    };
    AuthorService.prototype.editAuthor = function (editAuthor) {
        return this._http.put('/Authors/' + editAuthor._id, editAuthor);
    };
    AuthorService.prototype.deleteAuthor = function (id) {
        return this._http.delete('/Authors/' + id);
    };
    AuthorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthorService);
    return AuthorService;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>PAGE NOT FOUND</h1>\n</div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/quote-list/quote-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/quote-list/quote-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quote-list/quote-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/quote-list/quote-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"author.name\">\n  <a [routerLink]=\"['']\">Home</a> | <a [routerLink]=\"['QuoteNew']\">Add a quotable author</a>\n  <p>Quotes by {{author.name}}:</p>\n  <table>\n    <thead>\n      <tr>\n        <th>Quote</th>\n        <th>Votes</th>\n        <th>Actions available</th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let quote of author.quotes\">\n      <tr *ngIf=\"quote.quote\">\n        <td>{{quote.quote}}</td>\n        <td>{{quote.votes}}</td>\n        <td><button (click)=\"voteUp(quote._id)\">Vote Up</button> | <button (click)=\"voteDown(quote._id)\">Vote Down</button> | <button (click)=\"onDelete(quote._id)\">Delete</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/quote-list/quote-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quote-list/quote-list.component.ts ***!
  \****************************************************/
/*! exports provided: QuoteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteListComponent", function() { return QuoteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _author_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../author.service */ "./src/app/author.service.ts");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote.service */ "./src/app/quote.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuoteListComponent = /** @class */ (function () {
    function QuoteListComponent(route, _route, authorservice, quoteservice) {
        this.route = route;
        this._route = _route;
        this.authorservice = authorservice;
        this.quoteservice = quoteservice;
        this.author = {};
    }
    QuoteListComponent.prototype.ngOnInit = function () {
        this.AuthorShowOne();
    };
    QuoteListComponent.prototype.AuthorShowOne = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            var observable = _this.authorservice.getAuthor(params.get('id'));
            observable.subscribe(function (data) {
                _this.author = data;
            });
        });
    };
    QuoteListComponent.prototype.onDelete = function (id) {
        var _this = this;
        var observable = this.quoteservice.deleteQuote(this.author['_id'], id);
        observable.subscribe(function (data) {
            _this.AuthorShowOne();
        });
    };
    QuoteListComponent.prototype.voteUp = function (Qid) {
        for (var _i = 0, _a = this.author['quotes']; _i < _a.length; _i++) {
            var quote = _a[_i];
            if (quote['_id'] == Qid) {
                quote['votes'] += 1;
                var observable = this.quoteservice.editQuote(this.author['_id'], quote);
                observable.subscribe(function (data) {
                    if (data["errors"]) {
                    }
                });
            }
        }
    };
    QuoteListComponent.prototype.voteDown = function (Qid) {
        for (var _i = 0, _a = this.author['quotes']; _i < _a.length; _i++) {
            var quote = _a[_i];
            if (quote['_id'] == Qid) {
                quote['votes'] -= 1;
                var observable = this.quoteservice.editQuote(this.author['_id'], quote);
                observable.subscribe(function (data) {
                    if (data["errors"]) {
                    }
                });
            }
        }
    };
    QuoteListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quote-list',
            template: __webpack_require__(/*! ./quote-list.component.html */ "./src/app/quote-list/quote-list.component.html"),
            styles: [__webpack_require__(/*! ./quote-list.component.css */ "./src/app/quote-list/quote-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _author_service__WEBPACK_IMPORTED_MODULE_1__["AuthorService"], _quote_service__WEBPACK_IMPORTED_MODULE_2__["QuoteService"]])
    ], QuoteListComponent);
    return QuoteListComponent;
}());



/***/ }),

/***/ "./src/app/quote-new/quote-new.component.css":
/*!***************************************************!*\
  !*** ./src/app/quote-new/quote-new.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quote-new/quote-new.component.html":
/*!****************************************************!*\
  !*** ./src/app/quote-new/quote-new.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"author.name\">\n  <a [routerLink]=\"['']\">Home</a>\n  <p>Provide a quotes by {{author.name}}:</p>\n  <form (submit)=\"onCreate(author._id)\" #formData='ngForm'>\n    <label>Quote:</label>\n    <input type=\"text\" name=\"quote\" [(ngModel)]=\"newQuote.quote\" required #quote='ngModel' minlength=\"3\">\n    \n\n    <input type=\"submit\" value=\"Submit\" [disabled]=\"formData.invalid\">\n    <input type=\"submit\" value=\"Cancel\" [routerLink]=\"['', 'QuoteList', author._id]\">  \n    \n    <div style=\"color: red\" class=\"error\" *ngIf=\"quote.errors\">\n        <p *ngIf=\"quote.errors.minlength\">Must Be Longer than 3 Characters</p>\n        <p *ngIf=\"quote.errors.required\">Required</p>\n    </div>\n    \n\n    <p *ngIf=\"errors.quote\" style=\"color: red\">{{errors.quote.message}}</p>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/quote-new/quote-new.component.ts":
/*!**************************************************!*\
  !*** ./src/app/quote-new/quote-new.component.ts ***!
  \**************************************************/
/*! exports provided: QuoteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteNewComponent", function() { return QuoteNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _author_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../author.service */ "./src/app/author.service.ts");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote.service */ "./src/app/quote.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuoteNewComponent = /** @class */ (function () {
    function QuoteNewComponent(route, _route, authorservice, quoteservice) {
        this.route = route;
        this._route = _route;
        this.authorservice = authorservice;
        this.quoteservice = quoteservice;
        this.author = {};
        this.errors = {};
    }
    QuoteNewComponent.prototype.ngOnInit = function () {
        this.AuthorShowOne();
        this.newQuote = { quote: "", votes: 0 };
    };
    QuoteNewComponent.prototype.AuthorShowOne = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            var observable = _this.authorservice.getAuthor(params.get('id'));
            observable.subscribe(function (data) {
                _this.author = data;
            });
        });
    };
    QuoteNewComponent.prototype.onCreate = function (id) {
        var _this = this;
        this.errors = [];
        var observable = this.quoteservice.newQuote(this.newQuote, id);
        observable.subscribe(function (data) {
            if (data == null) {
                _this.route.navigateByUrl('/QuoteList/' + id);
            }
            else if (data["errors"]) {
                _this.errors = data["errors"];
            }
            else {
                _this.route.navigateByUrl('/QuoteList/' + id);
            }
        });
    };
    QuoteNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quote-new',
            template: __webpack_require__(/*! ./quote-new.component.html */ "./src/app/quote-new/quote-new.component.html"),
            styles: [__webpack_require__(/*! ./quote-new.component.css */ "./src/app/quote-new/quote-new.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _author_service__WEBPACK_IMPORTED_MODULE_1__["AuthorService"], _quote_service__WEBPACK_IMPORTED_MODULE_2__["QuoteService"]])
    ], QuoteNewComponent);
    return QuoteNewComponent;
}());



/***/ }),

/***/ "./src/app/quote.service.ts":
/*!**********************************!*\
  !*** ./src/app/quote.service.ts ***!
  \**********************************/
/*! exports provided: QuoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteService", function() { return QuoteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuoteService = /** @class */ (function () {
    function QuoteService(_http) {
        this._http = _http;
    }
    QuoteService.prototype.newQuote = function (newQuote, id) {
        return this._http.post('/Authors/' + id + '/newQuote', newQuote);
    };
    QuoteService.prototype.editQuote = function (id, editQuote) {
        return this._http.put('/Authors/' + id + '/Edit/' + editQuote._id, editQuote);
    };
    QuoteService.prototype.deleteQuote = function (Aid, Qid) {
        return this._http.delete('/Authors/' + Aid + '/Delete/' + Qid);
    };
    QuoteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuoteService);
    return QuoteService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\NORSEMAN\Desktop\DojoAssignments\MEAN\Angular\QuoteRanks\QuoteRanksApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map