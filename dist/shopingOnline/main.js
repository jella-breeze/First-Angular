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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: "\n    <p>\n      Sonam Lhendup<br><br>\n      sonamlhendup50@gmail.com\n    </p>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <form addUser=\"ngForm\" [formGroup]=\"loginForm\" (ngSubmit)=\"addUser()\">\r\n        <table>\r\n            <tr>\r\n\r\n                <td class=\"login1\">\r\n                    <h3>Register Page</h3>\r\n                    <label>\r\n                        UserName<input formControlName=\"username\" type=\"text\">\r\n                        <br><br>\r\n                    </label>\r\n                    <div class=\"alert\" *ngIf=\"!loginForm.controls['username'].valid && loginForm.controls['username'].touched\">\r\n                        This is required</div>\r\n                    <label>\r\n                        Email<input formControlName=\"email\" type=\"email\">\r\n                        <br><br>\r\n                    </label>\r\n                    <div class=\"alert\" *ngIf=\"!loginForm.controls['email'].valid && loginForm.controls['email'].touched\">\r\n                        This is required</div>\r\n                    <label>\r\n                        Password<input formControlName=\"password\" type=\"password\"><br><br>\r\n                    </label>\r\n                    <div class=\"alert\" *ngIf=\"!loginForm.controls['password'].valid && loginForm.controls['password'].touched\">\r\n                        This is required</div>\r\n                    <input type=\"submit\" value=\"submit\" [disabled]=\"!loginForm.valid\"><br><br>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </form>\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store.service */ "./src/app/store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AdminComponent = /** @class */ (function () {
    function AdminComponent(fb, storeService, route) {
        this.storeService = storeService;
        this.route = route;
        this.loginForm = fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            validate: ''
        });
    }
    AdminComponent.prototype.ngOnInit = function () { };
    AdminComponent.prototype.addUser = function () {
        var _this = this;
        this.storeService.getUser().subscribe(function (response) {
            var found = response.find(function (u) {
                return u.username === _this.loginForm.value.username && u.email === _this.loginForm.value.email;
            });
            if (found) {
                alert('already registered!');
                _this.route.navigate(['/admin']);
            }
            else {
                {
                    _this.storeService.addUser(_this.loginForm.value).subscribe(function (add) {
                        _this.route.navigate(['/login']);
                    });
                }
            }
        });
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: ["\n  .login1{\n    position:relative;\n    background-color:#c6c9d4;\n    left:420px;\n    text-align:center;\n    box-shadow: 1px 2px 5px 4px;\n  }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/service.component */ "./src/app/service/service.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./confirm/confirm.component */ "./src/app/confirm/confirm.component.ts");
/* harmony import */ var _user_show_user_show_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-show/user-show.component */ "./src/app/user-show/user-show.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _list_guard_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list-guard.guard */ "./src/app/list-guard.guard.ts");
/* harmony import */ var _customer_view_customer_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customer-view/customer-view.component */ "./src/app/customer-view/customer-view.component.ts");
/* harmony import */ var _customer_purchase_customer_purchase_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customer-purchase/customer-purchase.component */ "./src/app/customer-purchase/customer-purchase.component.ts");
/* harmony import */ var _market_market_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./market/market.component */ "./src/app/market/market.component.ts");
/* harmony import */ var _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./order-list/order-list.component */ "./src/app/order-list/order-list.component.ts");

















var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'shop', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_4__["ShopComponent"] },
    { path: 'aboutUs', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsComponent"] },
    { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"], canActivate: [_list_guard_guard__WEBPACK_IMPORTED_MODULE_12__["ListGuardGuard"]] },
    { path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"],
        canDeactivate: [_list_guard_guard__WEBPACK_IMPORTED_MODULE_12__["ListGuardGuard"]]
    },
    { path: 'service/:id', component: _service_service_component__WEBPACK_IMPORTED_MODULE_7__["ServiceComponent"] },
    { path: 'confirm', component: _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmComponent"] },
    { path: 'user', component: _user_show_user_show_component__WEBPACK_IMPORTED_MODULE_10__["UserShowComponent"] },
    { path: 'product', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__["ProductListComponent"] },
    { path: 'customer', component: _customer_view_customer_view_component__WEBPACK_IMPORTED_MODULE_13__["CustomerViewComponent"] },
    { path: 'purchase', component: _customer_purchase_customer_purchase_component__WEBPACK_IMPORTED_MODULE_14__["CustomerPurchaseComponent"] },
    { path: 'market', component: _market_market_component__WEBPACK_IMPORTED_MODULE_15__["MarketComponent"],
        canDeactivate: [_list_guard_guard__WEBPACK_IMPORTED_MODULE_12__["ListGuardGuard"]] },
    { path: 'order', component: _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_16__["OrderListComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    <table>\n      <tr>\n        <td class=\"table\">\n          Welcome to Shop\n        </td>\n      </tr>\n    </table>\n  </h1>\n </div>\n\n<nav class=\"register\">\n  <a routerLink=\"/login\" routerLinkActive=\"active\">login  </a>\n  <a routerLink=\"/aboutUs\" routerLinkActive=\"active\">Contact Us</a>\n</nav>\n<div class=\"ap\" [ngStyle]=\"{'background' : 'url(./assets/img/ap.jpg)'}\">\n<router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store.service */ "./src/app/store.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(storeSevice) {
        this.storeSevice = storeSevice;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/service.component */ "./src/app/service/service.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./confirm/confirm.component */ "./src/app/confirm/confirm.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store.service */ "./src/app/store.service.ts");
/* harmony import */ var _user_show_user_show_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-show/user-show.component */ "./src/app/user-show/user-show.component.ts");
/* harmony import */ var _list_guard_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./list-guard.guard */ "./src/app/list-guard.guard.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _customer_view_customer_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./customer-view/customer-view.component */ "./src/app/customer-view/customer-view.component.ts");
/* harmony import */ var _customer_purchase_customer_purchase_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./customer-purchase/customer-purchase.component */ "./src/app/customer-purchase/customer-purchase.component.ts");
/* harmony import */ var _market_market_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./market/market.component */ "./src/app/market/market.component.ts");
/* harmony import */ var _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./order-list/order-list.component */ "./src/app/order-list/order-list.component.ts");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["ShopComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
                _service_service_component__WEBPACK_IMPORTED_MODULE_11__["ServiceComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"],
                _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmComponent"],
                _user_show_user_show_component__WEBPACK_IMPORTED_MODULE_16__["UserShowComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_18__["ProductListComponent"],
                _customer_view_customer_view_component__WEBPACK_IMPORTED_MODULE_19__["CustomerViewComponent"],
                _customer_purchase_customer_purchase_component__WEBPACK_IMPORTED_MODULE_20__["CustomerPurchaseComponent"],
                _market_market_component__WEBPACK_IMPORTED_MODULE_21__["MarketComponent"],
                _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_22__["OrderListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"]
            ],
            providers: [_store_service__WEBPACK_IMPORTED_MODULE_15__["StoreService"], _list_guard_guard__WEBPACK_IMPORTED_MODULE_17__["ListGuardGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/confirm/confirm.component.ts":
/*!**********************************************!*\
  !*** ./src/app/confirm/confirm.component.ts ***!
  \**********************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent() {
    }
    ConfirmComponent.prototype.ngOnInit = function () {
    };
    ConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm',
            template: "\n    \n    <div class=\"aaa\"> <form>\n    <p>\n      Your Order will be delivered: Please fill in the forms:\n    </p>\n    Email: \n      <input type=\"email\" placeholder=\"email\"><br><br>\n    Contact Number: <input type=\"\" placeholder=\"Phone Number\"><br><br>\n    <input type=\"submit\" value=\"Submit\"></form>\n    </div>\n  ",
            styles: ["\n    .aaa{\n      position:absolute;\n      left:400px;\n      background-color:#383535;\n      top:300px;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfirmComponent);
    return ConfirmComponent;
}());



/***/ }),

/***/ "./src/app/customer-purchase/customer-purchase.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/customer-purchase/customer-purchase.component.ts ***!
  \******************************************************************/
/*! exports provided: CustomerPurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPurchaseComponent", function() { return CustomerPurchaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store.service */ "./src/app/store.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var CustomerPurchaseComponent = /** @class */ (function () {
    function CustomerPurchaseComponent(storeService, http) {
        this.storeService = storeService;
        this.http = http;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.user = this.storeService.user;
    }
    CustomerPurchaseComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    CustomerPurchaseComponent.prototype.deleteProducts = function (id) {
        var _this = this;
        this.storeService.deleteProducts(id).subscribe(function (response) {
            alert('deletation successfull');
            _this.getProducts();
        });
    };
    CustomerPurchaseComponent.prototype.getProducts = function () {
        var _this = this;
        this.storeService.getProducts().subscribe(function (response) {
            _this.products = response;
        });
    };
    CustomerPurchaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-purchase',
            template: "\n    <h3>Market House</h3>\n    <a class=\"login\" *ngIf=\"user\">You are logged in as {{user['user'].username}}</a >\n    <a class=\"login1\" routerLink=\"/login\">Logout</a>\n    <li class=\"\" *ngFor=\"let product of products; let i=index\">\n      <table border=\"1\"><tr><th>Product Id</th><th>Product Name</th><th>Price</th></tr>\n      <tr><td><span class=\"apple\"> {{product.id}}</span></td><td><span class=\"apple\"> {{product.product}}</span></td>\n      <td> <span class=\"apple2\">{{product.price}} $</span></td><td><span><button routerLink=\"/market\">Buy Now</button> </span>\n        </td></tr></table>\n    </li>\n  ",
            styles: ["\n    .apple{\n      background-color: #cdd3ce;\n      border: 1px solid #00000069;\n      padding: 4px 10px;\n    }\n    .apple2{\n      background-color: #cdd3ce;\n      border: 1px solid #00000069;\n      padding: 4px 40px;\n    }\n    .login{\n      position: absolute;\n      top: 194px;\n      right: 0;\n      color: blue;\n    }\n    .login1{\n      position: absolute;\n      right: 193px;\n      top: 193px;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CustomerPurchaseComponent);
    return CustomerPurchaseComponent;
}());



/***/ }),

/***/ "./src/app/customer-view/customer-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/customer-view/customer-view.component.ts ***!
  \**********************************************************/
/*! exports provided: CustomerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerViewComponent", function() { return CustomerViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store.service */ "./src/app/store.service.ts");




var CustomerViewComponent = /** @class */ (function () {
    function CustomerViewComponent(router, storeService) {
        this.router = router;
        this.storeService = storeService;
        this.departments = [
            { id: 1, name: 'Products' },
        ];
        this.user = this.storeService.user;
    }
    CustomerViewComponent.prototype.ngOnInit = function () {
        console.log(localStorage.getItem('localData'));
    };
    CustomerViewComponent.prototype.onSelect = function (department) {
        if (department.id === 1) {
            this.router.navigate(['/purchase']);
        }
    };
    CustomerViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-view',
            template: "\n    <h3>Admin Dashboard</h3>\n    <a class=\"login\" *ngIf=\"user\">You are logged in as {{user['user'].username}}</a >\n    <a class=\"login1\" routerLink=\"/login\">Logout</a>\n    <li class=\"\" (click)=\"onSelect(department)\" *ngFor=\"let department of departments; let i=index\">\n        <span class=\"apple\"> {{department.id}}</span>.<span class=\"apple2\">{{department.name}}</span>\n        <br><br>\n        </li>\n  ",
            styles: ["\n    .apple{\n      background-color: #cdd3ce;\n      border: 1px solid #00000069;\n      padding: 4px 10px;\n    }\n    .apple2{\n      background-color: #cdd3ce;\n      border: 1px solid #00000069;\n      padding: 4px 40px;\n    }\n    .login{\n      position: absolute;\n      top: 194px;\n      right: 0;\n      color: blue;\n    }\n    .login1{\n      position: absolute;\n      right: 193px;\n      top: 193px;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]])
    ], CustomerViewComponent);
    return CustomerViewComponent;
}());



/***/ }),

/***/ "./src/app/list-guard.guard.ts":
/*!*************************************!*\
  !*** ./src/app/list-guard.guard.ts ***!
  \*************************************/
/*! exports provided: ListGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGuardGuard", function() { return ListGuardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListGuardGuard = /** @class */ (function () {
    function ListGuardGuard() {
    }
    ListGuardGuard.prototype.canActivate = function (route) {
        return true;
    };
    ListGuardGuard.prototype.canDeactivate = function (component) {
        if (component.loginForm.dirty) {
            return confirm(' Discard changes?');
        }
        return true;
    };
    ListGuardGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ListGuardGuard);
    return ListGuardGuard;
}());



/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store.service */ "./src/app/store.service.ts");




var ListComponent = /** @class */ (function () {
    function ListComponent(router, storeService) {
        this.router = router;
        this.storeService = storeService;
        this.departments = [
            { id: 1, name: 'Users' },
            { id: 2, name: 'Products' },
            { id: 3, name: 'Add-Products' },
            { id: 4, name: 'Order-List' }
        ];
        this.user = this.storeService.user;
    }
    ListComponent.prototype.ngOnInit = function () {
        console.log(localStorage.getItem('localData'));
        console.log(sessionStorage.getItem('localData'));
    };
    ListComponent.prototype.onSelect = function (department) {
        if (department.id === 1) {
            this.router.navigate(['/user']);
        }
        else if (department.id === 2) {
            this.router.navigate(['/product']);
        }
        else if (department.id === 3) {
            this.router.navigate(['/shop']);
        }
        else {
            this.router.navigate(['/order']);
        }
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: "\n    <h3>Admin Dashboard</h3>\n    <a class=\"login\" *ngIf=\"user\">You are logged in as {{user['user'].username}} </a >\n    <a class=\"login1\" routerLink=\"/login\">Logout</a>\n    <li class=\"\" (click)=\"onSelect(department)\" *ngFor=\"let department of departments; let i=index\">\n        <span class=\"apple\"> {{department.id}}</span>.<span class=\"apple2\">{{department.name}}</span>\n        <br><br>\n        </li>\n  ",
            styles: ["\n  .apple{\n    background-color: #cdd3ce;\n    border: 1px solid #00000069;\n    padding: 4px 10px;\n  }\n  .apple2{\n    background-color: #cdd3ce;\n    border: 1px solid #00000069;\n    padding: 4px 40px;\n  }\n      .login{\n        position: absolute;\n        top: 194px;\n        right: 0;\n        color: blue;\n      }\n      .login1{\n        position: absolute;\n        right: 193px;\n        top: 193px;\n      }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!name; else forminfo\">\r\n<form addUser=\"ngForm\" [formGroup]=\"loginForm\" (submit)=addUser(loginForm.value)>\r\n    <table>\r\n        <tr>\r\n\r\n            <td class=\"login1\">\r\n                <h3>Login Page</h3>  \r\n\r\n                <label>\r\n                UserName<input formControlName=\"name\" type=\"text\">\r\n                <br><br>\r\n                </label>\r\n                <div class=\"alert\" *ngIf=\"!loginForm.controls['name'].valid && loginForm.controls['name'].touched\">This is required</div>\r\n\r\n                <label>\r\n                Password<input formControlName=\"pass\" type=\"password\"><br><br>\r\n                </label>\r\n                <div class=\"alert\" *ngIf=\"!loginForm.controls['pass'].valid && loginForm.controls['pass'].touched\">This is required</div>\r\n                    <input type=\"submit\" value=\"submit\" [disabled]='loginForm.invalid'><br><br>\r\n\r\n                Register\r\n                <input type=\"submit\" routerLink='/admin' value=\"here\">\r\n            </td>\r\n        </tr>\r\n    </table>\r\n</form>\r\n</div>\r\n<ng-template #forminfo>\r\n    <div class=\"container\">\r\n        <div class=\"smContainer\">\r\n            <h1>{{ name }}</h1> \r\n            <h1>{{ pass }}</h1>\r\n            <p>{{ descripiton }}</p>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store.service */ "./src/app/store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, storeService, route) {
        this.storeService = storeService;
        this.route = route;
        this.name = '';
        this.pass = '';
        this.loginForm = fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pass: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            validate: ''
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.addUser = function (user) {
        var _this = this;
        this.storeService.getUser().subscribe(function (response) {
            var found = response.find(function (u) {
                return u.username === _this.loginForm.value.name && u.password === _this.loginForm.value.pass;
            });
            if (found) {
                localStorage.setItem('user', JSON.stringify({ user: found }));
                alert('Now you are logged in as' + found.username);
                console.log(localStorage.getItem('localData'));
                if (found.username === 'Sonam' && found.password === 'apple') {
                    _this.route.navigate(['/list']);
                }
                else {
                    _this.route.navigate(['/customer']);
                }
            }
            else {
                alert('Invalid Input');
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: ["\n  .login1{\n    position:relative;\n    background-color:#aeb4cc;\n    left:420px;\n    text-align:center;\n    box-shadow: 5px 6px 3px gray;\n    \n  }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/market/market.component.html":
/*!**********************************************!*\
  !*** ./src/app/market/market.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"login\" *ngIf=\"user\">You are logged in as {{user['user'].username}}</a >\n<a class=\"login3\" routerLink=\"/login\">Logout</a>\n\n<form addUser=\"ngForm\" [formGroup]=\"loginForm\" (ngSubmit)=\"addUser()\">\n\n  <table>\n    <tr>\n      <td class=\"login1\">\n        <h3>Register Page</h3>\n        <label>\n          Product Id <input formControlName=\"productId\" type=\"text\">\n          <br><br>\n        </label>\n        <div class=\"alert\" *ngIf=\"!loginForm.controls['productId'].valid && loginForm.controls['productId'].touched\">\n          This is required</div>\n        <label>\n          Full Name <input formControlName=\"name\" type=\"text\">\n          <br><br>\n        </label>\n        <div class=\"alert\" *ngIf=\"!loginForm.controls['name'].valid && loginForm.controls['name'].touched\">\n          This is required</div>\n        <label>\n          Quantity<input formControlName=\"quantity\" type=\"text\" placeholder=\"kg\">\n          <br><br>\n        </label>\n        <div class=\"alert\" *ngIf=\"!loginForm.controls['quantity'].valid && loginForm.controls['quantity'].touched\">\n          This is required</div>\n        <label>\n          Phone Number <input formControlName=\"number\" type=\"text\"><br><br>\n        </label>\n        <div class=\"alert\" *ngIf=\"!loginForm.controls['number'].valid && loginForm.controls['number'].touched\">\n          This is required</div>\n        <input type=\"submit\" value=\"submit\" [disabled]=\"!loginForm.valid\"><br><br>\n      </td>\n    </tr>\n  </table>\n</form>\n"

/***/ }),

/***/ "./src/app/market/market.component.ts":
/*!********************************************!*\
  !*** ./src/app/market/market.component.ts ***!
  \********************************************/
/*! exports provided: MarketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketComponent", function() { return MarketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store.service */ "./src/app/store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MarketComponent = /** @class */ (function () {
    function MarketComponent(fb, storeService, route) {
        this.storeService = storeService;
        this.route = route;
        this.user = this.storeService.user;
        this.loginForm = fb.group({
            productId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            quantity: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            number: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            validate: ''
        });
    }
    MarketComponent.prototype.ngOnInit = function () { };
    MarketComponent.prototype.addUser = function () {
        var _this = this;
        this.storeService.addDetail(this.loginForm.value).subscribe(function (add) {
            _this.route.navigate(['/purchase']);
        });
    };
    MarketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-market',
            template: __webpack_require__(/*! ./market.component.html */ "./src/app/market/market.component.html"),
            styles: ["\n    .login{\n      position: absolute;\n      top: 194px;\n      right: 0;\n      color: blue;\n    }\n  .login1{\n    position:relative;\n    background-color:#c6c9d4;\n    left:420px;\n    text-align:center;\n    box-shadow: 1px 2px 5px 4px;\n  }\n  .login3{\n    position: absolute;\n    right: 193px;\n    top: 193px;\n  }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MarketComponent);
    return MarketComponent;
}());



/***/ }),

/***/ "./src/app/order-list/order-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/order-list/order-list.component.ts ***!
  \****************************************************/
/*! exports provided: OrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListComponent", function() { return OrderListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store.service */ "./src/app/store.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var OrderListComponent = /** @class */ (function () {
    function OrderListComponent(storeService, http) {
        this.storeService = storeService;
        this.http = http;
        this.user = this.storeService.user;
    }
    OrderListComponent.prototype.ngOnInit = function () {
        this.getDetails();
    };
    OrderListComponent.prototype.deleteOrder = function (id) {
        var _this = this;
        this.storeService.deleteOrder(id).subscribe(function (response) {
            alert('deletation successfull');
            _this.getDetails();
        });
    };
    OrderListComponent.prototype.getDetails = function () {
        var _this = this;
        this.storeService.getDetail().subscribe(function (response) {
            _this.orders = response;
        });
    };
    OrderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-list',
            template: "\n    <h3>Orders List</h3>\n    <a class=\"login\" *ngIf=\"user\">You are logged in as {{user['user'].username}}</a >\n    <a class=\"login1\" routerLink=\"/login\">Logout</a>\n    <li class=\"\" *ngFor=\"let order of orders; let i=index\">\n      <span class=\"apple\"> {{order.id}}</span><span class=\"apple2\">{{order.name}}</span>\n      <span class=\"apple2\">{{order.quantity}}kg</span><span class=\"apple2\">{{order.number}}</span>\n      <span><button (click)=\"deleteOrder(order.id)\">Delete</button> </span>\n      <br><br>\n    </li>\n  ",
            styles: ["\n  .apple{\n    background-color: #cdd3ce;\n    border: 1px solid #00000069;\n    padding: 4px 10px;\n  }\n  .apple2{\n    background-color: #cdd3ce;\n    border: 1px solid #00000069;\n    padding: 4px 40px;\n  }\n  .login{\n    position: absolute;\n    top: 194px;\n    right: 0;\n    color: blue;\n  }\n  .login1{\n    position: absolute;\n    right: 193px;\n    top: 193px;\n  }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], OrderListComponent);
    return OrderListComponent;
}());



/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store.service */ "./src/app/store.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(storeService, http) {
        this.storeService = storeService;
        this.http = http;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.user = this.storeService.user;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductListComponent.prototype.deleteProducts = function (id) {
        var _this = this;
        this.storeService.deleteProducts(id).subscribe(function (response) {
            alert('deletation successfull');
            _this.getProducts();
        });
    };
    ProductListComponent.prototype.getProducts = function () {
        var _this = this;
        this.storeService.getProducts().subscribe(function (response) {
            _this.products = response;
        });
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: "\n    <h3>Product List</h3>\n    <a class=\"login\" *ngIf=\"user\">You are logged in as {{user['user'].username}}</a >\n    <a class=\"login1\" routerLink=\"/login\">Logout</a>\n    <li class=\"\" *ngFor=\"let product of products; let i=index\">\n      <span class=\"apple\"> {{product.id}}</span><span class=\"apple2\"> {{product.product}}</span>\n      <span class=\"apple2\">{{product.price}}$</span>\n      <span><button (click)=\"deleteProducts(product.id)\">Delete</button> </span>\n      <br><br>\n    </li>\n  ",
            styles: ["\n  .apple{\n    background-color: #cdd3ce;\n    border: 1px solid #00000069;\n    padding: 4px 10px;\n  }\n  .apple2{\n    background-color: #cdd3ce;\n    border: 1px solid #00000069;\n    padding: 4px 40px;\n  }\n  .login{\n    position: absolute;\n    top: 194px;\n    right: 0;\n    color: blue;\n  }\n  .login1{\n    position: absolute;\n    right: 193px;\n    top: 193px;\n  }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/service/service.component.ts":
/*!**********************************************!*\
  !*** ./src/app/service/service.component.ts ***!
  \**********************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ServiceComponent = /** @class */ (function () {
    function ServiceComponent(route) {
        this.route = route;
    }
    ServiceComponent.prototype.ngOnInit = function () {
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.productId = id;
    };
    ServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service',
            template: "\n     <h3>Are you sure to purchase this item number {{productId}}?</h3>\n     <p class=\"aa\">\n        <a routerLink=\"/list\" routerLinkActive=\"active\">Cancel    </a>\n        <button routerLink='/confirm'>Confirm</button>\n        </p>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/shop/shop.component.html":
/*!******************************************!*\
  !*** ./src/app/shop/shop.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"login\" *ngIf=\"user\">You are logged in as {{user['user'].username}}</a >\r\n<a class=\"login1\" routerLink=\"/login\">Logout</a>\r\n<table class=\"\">\r\n    <tr>\r\n        <td class=\"a\">\r\n            <h3>Market House</h3>\r\n\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td class=\"c\">\r\n            <h3> Add the products to be sold</h3>\r\n\r\n            <form addUser=\"ngForm\" [formGroup]=\"pForm\" (ngSubmit)=\"addProducts()\">\r\n                            <label>\r\n                                Products <input formControlName=\"product\" type=\"text\">\r\n                                <br><br>\r\n                            </label>\r\n                            <div class=\"alert\" *ngIf=\"!pForm.controls['product'].valid && pForm.controls['product'].touched\">\r\n                                This is required</div>\r\n                            <label>\r\n                                Price<input formControlName=\"price\" type=\"text\">\r\n                                <br><br>\r\n                            </label>\r\n                            <div class=\"alert\" *ngIf=\"!pForm.controls['quantity'].valid && pForm.controls['quantity'].touched\">\r\n                                This is required</div>\r\n\r\n                            <input type=\"submit\" value=\"submit\" [disabled]=\"!pForm.valid\"><br><br>\r\n            </form>\r\n\r\n        </td>\r\n    </tr>\r\n</table>\r\n\r\n"

/***/ }),

/***/ "./src/app/shop/shop.component.scss":
/*!******************************************!*\
  !*** ./src/app/shop/shop.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: relative;\n  top: 100px;\n  left: 200px;\n  width: 800px; }\n\n.diff {\n  position: relative; }\n\n.container1 {\n  background-color: #5c5d61; }\n\n.a {\n  position: relative;\n  background-color: #bd8618;\n  width: 300px;\n  left: 350px;\n  height: 20px; }\n\n.b {\n  position: relative;\n  background-color: #434346;\n  width: 150px;\n  left: 590px;\n  top: 37px;\n  height: 20px; }\n\n.c {\n  position: relative;\n  background-color: #bd8618;\n  width: 10px;\n  left: 350px;\n  height: 20px; }\n\n.d {\n  position: absolute;\n  background-color: #636260;\n  width: 243px;\n  top: 336px;\n  left: 650px;\n  height: 110px; }\n\n.login {\n  position: absolute;\n  top: 194px;\n  right: 0;\n  color: blue; }\n\n.login1 {\n  position: absolute;\n  right: 193px;\n  top: 193px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByaW5zL0RvY3VtZW50cy9GaXJzdC1Bbmd1bGFyL3NyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVM7RUFDVCxXQUFVO0VBQ1YsWUFBVyxFQUFBOztBQUdmO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFXO0VBQ1gsV0FBVTtFQUNWLFlBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBVztFQUNYLFdBQVU7RUFDVixTQUFRO0VBQ1IsWUFBVyxFQUFBOztBQUVmO0VBQ0ksa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFVO0VBQ1YsV0FBVTtFQUNWLFlBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBVztFQUNYLFVBQVM7RUFDVCxXQUFVO0VBQ1YsYUFBWSxFQUFBOztBQUVoQjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDoxMDBweDtcclxuICAgIGxlZnQ6MjAwcHg7XHJcbiAgICB3aWR0aDo4MDBweDtcclxuICAgIFxyXG59XHJcbi5kaWZme1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jb250YWluZXIxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVjNWQ2MTtcclxufVxyXG4uYXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZDg2MTg7XHJcbiAgICB3aWR0aDozMDBweDtcclxuICAgIGxlZnQ6MzUwcHg7XHJcbiAgICBoZWlnaHQ6MjBweDtcclxufVxyXG4uYntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzQzNDY7XHJcbiAgICB3aWR0aDoxNTBweDtcclxuICAgIGxlZnQ6NTkwcHg7XHJcbiAgICB0b3A6MzdweDtcclxuICAgIGhlaWdodDoyMHB4O1xyXG59XHJcbi5je1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkODYxODtcclxuICAgIHdpZHRoOjEwcHg7XHJcbiAgICBsZWZ0OjM1MHB4O1xyXG4gICAgaGVpZ2h0OjIwcHg7XHJcbn1cclxuLmR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM2MjYwO1xyXG4gICAgd2lkdGg6MjQzcHg7XHJcbiAgICB0b3A6MzM2cHg7XHJcbiAgICBsZWZ0OjY1MHB4O1xyXG4gICAgaGVpZ2h0OjExMHB4O1xyXG59XHJcbi5sb2dpbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTk0cHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIGNvbG9yOiBibHVlO1xyXG59XHJcbi5sb2dpbjF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTkzcHg7XHJcbiAgICB0b3A6IDE5M3B4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store.service */ "./src/app/store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ShopComponent = /** @class */ (function () {
    function ShopComponent(fb, storeService, route) {
        this.storeService = storeService;
        this.route = route;
        this.user = this.storeService.user;
        this.pForm = fb.group({
            product: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            validate: ''
        });
    }
    ShopComponent.prototype.ngOnInit = function () {
    };
    ShopComponent.prototype.addProducts = function () {
        var _this = this;
        this.storeService.addProduct(this.pForm.value).subscribe(function (response) { _this.route.navigate(['/list']); });
    };
    ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! ./shop.component.html */ "./src/app/shop/shop.component.html"),
            styles: [__webpack_require__(/*! ./shop.component.scss */ "./src/app/shop/shop.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/store.service.ts":
/*!**********************************!*\
  !*** ./src/app/store.service.ts ***!
  \**********************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var StoreService = /** @class */ (function () {
    function StoreService(http) {
        this.http = http;
    }
    StoreService.prototype.addUser = function (admin) {
        return this.http.post('http://localhost:3000/users', admin);
    };
    StoreService.prototype.addProduct = function (shop) {
        return this.http.post('http://localhost:3000/products', shop);
    };
    StoreService.prototype.addDetail = function (shop) {
        return this.http.post('http://localhost:3000/details', shop);
    };
    StoreService.prototype.getDetail = function () {
        return this.http.get('http://localhost:3000/details');
    };
    StoreService.prototype.getUser = function () {
        return this.http.get('http://localhost:3000/users');
    };
    StoreService.prototype.getProducts = function () {
        return this.http.get('http://localhost:3000/products');
    };
    StoreService.prototype.deleteProducts = function (id) {
        if (confirm('Are you sure?')) {
            var url = "http://localhost:3000/products/" + id;
            return this.http.delete(url);
        }
    };
    StoreService.prototype.deleteOrder = function (id) {
        if (confirm('Are you sure?')) {
            var url = "http://localhost:3000/details/" + id;
            return this.http.delete(url);
        }
    };
    StoreService.prototype.deleteUsers = function (id) {
        if (confirm('Are you sure?')) {
            var url = "http://localhost:3000/users/" + id;
            return this.http.delete(url);
        }
    };
    Object.defineProperty(StoreService.prototype, "user", {
        get: function () {
            return JSON.parse(localStorage.getItem('user'));
        },
        enumerable: true,
        configurable: true
    });
    StoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StoreService);
    return StoreService;
}());



/***/ }),

/***/ "./src/app/user-show/user-show.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-show/user-show.component.ts ***!
  \**************************************************/
/*! exports provided: UserShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserShowComponent", function() { return UserShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store.service */ "./src/app/store.service.ts");



var UserShowComponent = /** @class */ (function () {
    function UserShowComponent(storeService) {
        this.storeService = storeService;
        this.user = this.storeService.user;
    }
    UserShowComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserShowComponent.prototype.deleteUsers = function (id) {
        var _this = this;
        this.storeService.deleteUsers(id).subscribe(function (response) {
            alert('deletation successfull');
            _this.getUsers();
        });
    };
    UserShowComponent.prototype.getUsers = function () {
        var _this = this;
        this.storeService.getUser().subscribe(function (response) {
            _this.list = response;
        });
    };
    UserShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-show',
            template: "\n    <h3>User List</h3>\n    <a class=\"login\" *ngIf=\"user\">You are logged in as {{user['user'].username}}</a >\n    <a class=\"login1\" routerLink=\"/login\">Logout</a>\n    <li class=\"\" *ngFor=\"let list of list; let i=index\">\n      <span class=\"apple\"> {{list.id}}</span><span class=\"apple2\">{{list.username}}</span>\n      <span class=\"apple2\">{{list.email}}</span>\n      <span><button (click)=\"deleteUsers(list.id)\">Delete</button> </span>\n      <br><br>\n    </li>\n  ",
            styles: ["\n  .apple{\n    background-color: #cdd3ce;\n    border: 1px solid #00000069;\n    padding: 4px 10px;\n  }\n  .apple2{\n    background-color: #cdd3ce;\n    border: 1px solid #00000069;\n    padding: 4px 40px;\n  }\n  .login{\n    position: absolute;\n    top: 194px;\n    right: 0;\n    color: blue;\n  }\n  .login1{\n    position: absolute;\n    right: 193px;\n    top: 193px;\n  }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]])
    ], UserShowComponent);
    return UserShowComponent;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/prins/Documents/First-Angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map