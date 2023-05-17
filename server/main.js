/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 34621:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routingComponents": () => (/* binding */ routingComponents)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 81299);
/* harmony import */ var _biz_card_biz_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./biz-card/biz-card.component */ 57528);
/* harmony import */ var _michael_limousine_michael_limousine_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./michael-limousine/michael-limousine.component */ 37902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 11958);





const routes = [{
  path: '',
  component: _biz_card_biz_card_component__WEBPACK_IMPORTED_MODULE_0__.BizCardComponent
}, {
  path: 'michael-limousine',
  component: _michael_limousine_michael_limousine_component__WEBPACK_IMPORTED_MODULE_1__.MichaelLimousineComponent
}, {
  path: '**',
  redirectTo: ''
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();
const routingComponents = [_biz_card_biz_card_component__WEBPACK_IMPORTED_MODULE_0__.BizCardComponent, _michael_limousine_michael_limousine_component__WEBPACK_IMPORTED_MODULE_1__.MichaelLimousineComponent];

/***/ }),

/***/ 59229:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11958);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 81299);


class AppComponent {}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 63370:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 45359);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 34621);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 79279);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/google-maps */ 91912);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 22497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 59229);
/* harmony import */ var _michael_limousine_michael_limousine_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./michael-limousine/michael-limousine.component */ 37902);
/* harmony import */ var _biz_card_biz_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./biz-card/biz-card.component */ 57528);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ 13433);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 43129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 11958);













class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__.HashLocationStrategy
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__.GoogleMapsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _michael_limousine_michael_limousine_component__WEBPACK_IMPORTED_MODULE_2__.MichaelLimousineComponent, _biz_card_biz_card_component__WEBPACK_IMPORTED_MODULE_3__.BizCardComponent, _biz_card_biz_card_component__WEBPACK_IMPORTED_MODULE_3__.BizCardComponent, _michael_limousine_michael_limousine_component__WEBPACK_IMPORTED_MODULE_2__.MichaelLimousineComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__.GoogleMapsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule]
  });
})();

/***/ }),

/***/ 84362:
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppServerModule": () => (/* binding */ AppServerModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-server */ 25483);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module */ 63370);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 59229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 11958);




class AppServerModule {}
AppServerModule.ɵfac = function AppServerModule_Factory(t) {
  return new (t || AppServerModule)();
};
AppServerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppServerModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppServerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppServerModule, {
    imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
  });
})();

/***/ }),

/***/ 57528:
/*!************************************************!*\
  !*** ./src/app/biz-card/biz-card.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BizCardComponent": () => (/* binding */ BizCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 11958);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 45359);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 81299);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer/footer.component */ 13433);




class BizCardComponent {
  constructor(sanitizer, titleService) {
    this.sanitizer = sanitizer;
    this.titleService = titleService;
    this.title = 'Bizcard';
    this.CompanyName = "Adi Tayri LLC";
    this.PhoneNumber = '+972502003238';
    this.Message = 'Hello, and welcome to BizId company';
    this.FacebookUser = 'aditayri';
    this.InstagramUser = 'aditayri';
    this.GmailTo = 'mailto:aditayri@gmail.com';
    this.AboutUs = "At " + this.CompanyName + ", we're dedicated to providing safe" + "reliable, and efficient transportation solutions to our clients. With years of experience in the industry";
  }
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
  get sanitizedUrl() {
    let url = `https://api.whatsapp.com/send?phone=${this.PhoneNumber}&text=${encodeURIComponent(this.Message)}`;
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  FacebookClick() {
    let pageUrl = 'https://www.facebook.com/' + this.FacebookUser; // Replace with the URL of the Facebook page you want to go to
    window.open(pageUrl, '_blank'); // Op
  }

  InstagramClick() {
    let pageUrl = 'https://www.instagram.com/' + this.InstagramUser; // Replace with the URL of the Instagram page you want to go to
    window.open(pageUrl, '_blank');
  }
}
BizCardComponent.ɵfac = function BizCardComponent_Factory(t) {
  return new (t || BizCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Title));
};
BizCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BizCardComponent,
  selectors: [["app-biz-card"]],
  decls: 34,
  vars: 3,
  consts: [[1, "theme-wrapper"], ["id", "themePic", "src", "./assets/bizcard-images/theme.jpg"], [1, "Buttons"], ["target", "_blank", 2, "text-decoration", "none", 3, "href"], ["src", "./assets/bizcard-images/whatsapp.png"], ["id", "whatsapp"], [3, "click"], ["src", "./assets/bizcard-images/instagram.png"], ["id", "instagram"], ["src", "./assets/bizcard-images/facebook.png"], ["id", "facebook"], [3, "href"], ["src", "./assets/bizcard-images/gmail.png"], ["id", "gmail"], [1, "pages"], ["mat-button", "", "routerLink", ""], ["mat-button", "", "routerLink", "/michael-limousine"]],
  template: function BizCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section")(4, "article")(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "BIZCARD");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2)(10, "div")(11, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "WhatsApp");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BizCardComponent_Template_div_click_15_listener() {
        return ctx.InstagramClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Instagram");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BizCardComponent_Template_div_click_19_listener() {
        return ctx.FacebookClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Facebook");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div")(24, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Gmail");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14)(29, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "BizCard");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "michael-limousine");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.AboutUs);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.sanitizedUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.GmailTo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent],
  styles: [":root {\r\n    --max-width: 500px; \r\n    --min-width: 300px;\r\n    --flood-color:rgb(255, 255, 255);\r\n  }\r\n \r\nbody[_ngcontent-%COMP%]{\r\n  \r\n width: 100%;\r\n height:100%;\r\n max-width: var(--max-width);\r\n min-width: var(--min-width);\r\n\r\n margin:0;\r\n padding: 0;\r\n\r\n display: flex;\r\n flex-direction: column;\r\n\r\n overflow: auto;\r\n\r\n\r\n    \r\n   \r\n}\r\n\r\n\r\n .theme-wrapper[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    overflow: hidden;\r\n\r\n}\r\n\r\n#themePic[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height:200px;\r\n    \r\n     animation: _ngcontent-%COMP%_zoomOut 3s forwards;\r\n     transform-origin: center;\r\n} \r\n@keyframes _ngcontent-%COMP%_zoomOut {\r\n    0% {\r\n      transform: scale(1.1);\r\n    }\r\n    100% {\r\n      transform: scale(1.4);\r\n    }\r\n}\r\n\r\n#Profile[_ngcontent-%COMP%] {\r\n    height: 120px;\r\n    width: 120px;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: 10px;\r\n    right:10px;\r\n    \r\n}\r\n\r\nsection[_ngcontent-%COMP%]{\r\n\r\n  background-image: url('bizcard-background.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n    overflow: auto; \r\n    flex:1;\r\n}\r\nsection[_ngcontent-%COMP%]::-webkit-scrollbar{\r\n   display: none;\r\n    }\r\n\r\n   \r\n    section[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n             \r\n        \r\n            color: rgb(218, 227, 242);\r\n            width: 90%;\r\n            margin: auto;\r\n            line-height: 1.5;\r\n            font-size: 25px;\r\n            text-align: left;\r\n            background-color: rgba(0, 0, 0, 0.4);\r\n            border-radius: 10px;\r\n            padding: 10px;\r\n           \r\n        }\r\n        section[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n            font-family: Arial, Helvetica, sans-serif;\r\n            color: rgba(219, 217, 234, 0.872);\r\n            font-size: 40px;\r\n            margin-top: 60px;\r\n            margin-bottom: 40px;\r\n            text-align: center;\r\n            text-shadow: 2px 2px 2px rgba(193, 187, 232, 0.872);\r\n            background-color: rgba(0, 0, 0, 0.5);\r\n            border-radius: 10px;\r\n            padding: 10px;\r\n            \r\n        }\r\n        \r\n\r\n        .Buttons[_ngcontent-%COMP%]{\r\n              \r\n            \r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            flex-wrap: wrap;\r\n            flex: 1;  \r\n            margin-top: 15px;\r\n            \r\n       }\r\n       \r\n       .Buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n             \r\n             \r\n        margin-top: 10px; \r\n        margin-bottom: 10px; \r\n           \r\n        align-items: center;\r\n        text-align: center;\r\n        width: calc(100% / 4);\r\n       \r\n        \r\n       }\r\n\r\n\r\n\r\n.Buttons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    font-family: \"Billabong\", cursive;\r\n    font-size: 10px;\r\n    width: 25px; \r\n    height: 25px;\r\n   \r\n}\r\n\r\n.Buttons[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color:var(--flood-color);\r\n    font-family: \"Billabong\", cursive;\r\n    font-size: 16px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.pages[_ngcontent-%COMP%]{\r\n   \r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYml6LWNhcmQvYml6LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0IsRUFBRSxpREFBaUQ7SUFDckUsa0JBQWtCO0lBQ2xCLGdDQUFnQztFQUNsQzs7QUFFRjtBQUNBO0VBQ0U7Q0FDRCxXQUFXO0NBQ1gsV0FBVztDQUNYLDJCQUEyQjtDQUMzQiwyQkFBMkI7O0NBRTNCLFFBQVE7Q0FDUixVQUFVOztDQUVWLGFBQWE7Q0FDYixzQkFBc0I7O0NBRXRCLGNBQWM7Ozs7O0FBS2Y7OztDQUdDO0lBQ0csa0JBQWtCO0lBQ2xCLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTs7S0FFWCw4QkFBOEI7S0FDOUIsd0JBQXdCO0FBQzdCO0FBQ0E7SUFDSTtNQUNFLHFCQUFxQjtJQUN2QjtJQUNBO01BQ0UscUJBQXFCO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7O0FBRWQ7O0FBRUE7QUFDQTtFQUNFO0VBQ0EsK0NBQXlFO0VBQ3pFLDRCQUE0QjtFQUM1QixzQkFBc0I7SUFDcEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLE1BQU07QUFDVjtBQUNBO0dBQ0csYUFBYTtJQUNaOzs7SUFHQTtRQUNJO1VBQ0UsTUFBTSx5Q0FBeUM7O1lBRTdDLHlCQUF5QjtZQUN6QixVQUFVO1lBQ1YsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLG9DQUFvQztZQUNwQyxtQkFBbUI7WUFDbkIsYUFBYTs7UUFFakI7UUFDQTtZQUNJLHlDQUF5QztZQUN6QyxpQ0FBaUM7WUFDakMsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLG1EQUFtRDtZQUNuRCxvQ0FBb0M7WUFDcEMsbUJBQW1CO1lBQ25CLGFBQWE7O1FBRWpCOzs7UUFHQTthQUNLLDBDQUEwQztZQUMzQyx1Q0FBdUM7WUFDdkMsYUFBYTtZQUNiLHVCQUF1QjtZQUN2QixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLE9BQU87WUFDUCxnQkFBZ0I7O09BRXJCOztPQUVBO2FBQ00sc0NBQXNDOztRQUUzQyxnQkFBZ0I7UUFDaEIsbUJBQW1COztRQUVuQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLHFCQUFxQjs7O09BR3RCOzs7O0FBSVA7QUFDQTtFQUNFOztJQUVFLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0dBQ0csNENBQTRDO0FBQy9DIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjo6bmctZGVlcCA6cm9vdCB7XHJcbiAgICAtLW1heC13aWR0aDogNTAwcHg7IC8qIGRlZmluZSB0aGUgbWF4IHdpZHRoIHZhbHVlIGFzIGEgQ1NTIHZhcmlhYmxlICovXHJcbiAgICAtLW1pbi13aWR0aDogMzAwcHg7XHJcbiAgICAtLWZsb29kLWNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB9XHJcbiBcclxuYm9keXtcclxuLyogICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjE2LCAzMSwgMzEpOyBcclxuICovICBcclxuIHdpZHRoOiAxMDAlO1xyXG4gaGVpZ2h0OjEwMCU7XHJcbiBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCk7XHJcbiBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aCk7XHJcblxyXG4gbWFyZ2luOjA7XHJcbiBwYWRkaW5nOiAwO1xyXG5cclxuIGRpc3BsYXk6IGZsZXg7XHJcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuXHJcbiAgICBcclxuICAgXHJcbn1cclxuXHJcblxyXG4gLnRoZW1lLXdyYXBwZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxufVxyXG5cclxuI3RoZW1lUGlje1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MjAwcHg7XHJcbiAgICBcclxuICAgICBhbmltYXRpb246IHpvb21PdXQgM3MgZm9yd2FyZHM7XHJcbiAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG59IFxyXG5Aa2V5ZnJhbWVzIHpvb21PdXQge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xyXG4gICAgfVxyXG59XHJcblxyXG4jUHJvZmlsZSB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OjEwcHg7XHJcbiAgICBcclxufVxyXG5cclxuc2VjdGlvbntcclxuLyogICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMzcsIDE0OSwgMTcxKTsgXHJcbiAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9iaXpjYXJkLWltYWdlcy9iaXpjYXJkLWJhY2tncm91bmQuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogYXV0bzsgXHJcbiAgICBmbGV4OjE7XHJcbn1cclxuc2VjdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXJ7XHJcbiAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgIHNlY3Rpb24gYXJ0aWNsZSBwe1xyXG4gICAgICAgIC8qICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTMwLCAyMDUsIDI1KTsgXHJcbiAgICAgICAgICovICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDcyLCA5Nik7ICAgKi9cclxuICAgICAgICBcclxuICAgICAgICAgICAgY29sb3I6IHJnYigyMTgsIDIyNywgMjQyKTtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VjdGlvbiBhcnRpY2xlIGgye1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjE5LCAyMTcsIDIzNCwgMC44NzIpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IHJnYmEoMTkzLCAxODcsIDIzMiwgMC44NzIpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLkJ1dHRvbnN7XHJcbiAgICAgICAgICAgICAvKiBib3JkZXI6IDRweCBzb2xpZCByZ2IoMjExLCAzMiwgMTUxKTsgICovIFxyXG4gICAgICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDcyLCA5Nik7ICovXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7ICBcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgIC5CdXR0b25zIGRpdntcclxuICAgICAgICAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNiwgNCwgOTIpOyAqL1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDsgXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDQpO1xyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICB9XHJcblxyXG5cclxuXHJcbi5CdXR0b25zIGltZ3tcclxuLyogICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDAsIDEwMikgO1xyXG4gKi8gICAgXHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OiBcIkJpbGxhYm9uZ1wiLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgd2lkdGg6IDI1cHg7IFxyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICBcclxufVxyXG5cclxuLkJ1dHRvbnMgcHtcclxuICAgIGNvbG9yOnZhcigtLWZsb29kLWNvbG9yKTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkJpbGxhYm9uZ1wiLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnBhZ2Vze1xyXG4gICAvKiAgYm9yZGVyOiA0cHggc29saWQgcmdiKDIwMSwgMTk3LCAyMzIpOyAgKi9cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 13433:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11958);

class FooterComponent {
  constructor() {}
  ngOnInit() {}
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 8,
  vars: 0,
  consts: [[1, "container"], ["href", "mailto:aditayri@gmail.com"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "div", 0)(2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "BIZCARD \u00A9 2023 by Adi Tayri");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Email: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "aditayri@gmail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  styles: ["footer[_ngcontent-%COMP%]{\n        position: relative;\n        bottom: 0;\n       width: 100%;\n       height: 50px; \n       background-color: #333;\n       color: #fff;\n       padding: 20px 0;\n       align-items: center;\n    }\n    footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\n        max-width: var(--max-width);\n        margin: 0 auto;\n        text-align: center;\n    }\n    footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        color: #fff;\n        font-size:12px;\n      }\n      footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        margin: 0;\n        font-size:12px;\n        margin-top:3px;\n      }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7T0FDVixXQUFXO09BQ1gsWUFBWTtPQUNaLHNCQUFzQjtPQUN0QixXQUFXO09BQ1gsZUFBZTtPQUNmLG1CQUFtQjtJQUN0QjtJQUNBO1FBQ0ksMkJBQTJCO1FBQzNCLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxjQUFjO01BQ2hCO01BQ0E7UUFDRSxTQUFTO1FBQ1QsY0FBYztRQUNkLGNBQWM7TUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBmb290ZXJ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgIGhlaWdodDogNTBweDsgXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgZm9vdGVyIC5jb250YWluZXJ7XG4gICAgICAgIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgZm9vdGVyIGEge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICB9XG4gICAgICBmb290ZXIgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgIG1hcmdpbi10b3A6M3B4O1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 37902:
/*!******************************************************************!*\
  !*** ./src/app/michael-limousine/michael-limousine.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MichaelLimousineComponent": () => (/* binding */ MichaelLimousineComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 11958);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 45359);
/* harmony import */ var _services_meta_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/meta-service.service */ 9294);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 79279);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/google-maps */ 91912);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 13433);






function MichaelLimousineComponent_i_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MichaelLimousineComponent_i_8_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.toggleAboutText());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function MichaelLimousineComponent_i_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MichaelLimousineComponent_i_12_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.toggleAboutText());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function MichaelLimousineComponent_i_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MichaelLimousineComponent_i_15_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.toggleServicesText());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function MichaelLimousineComponent_i_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MichaelLimousineComponent_i_29_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.toggleServicesText());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function MichaelLimousineComponent_i_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MichaelLimousineComponent_i_32_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.toggleMap());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function MichaelLimousineComponent_i_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MichaelLimousineComponent_i_36_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.toggleMap());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class MichaelLimousineComponent {
  constructor(sanitizer, meta) {
    this.sanitizer = sanitizer;
    this.meta = meta;
    this.title = 'Michael Limousine';
    this.description = 'שירותי הסעות לכל חלקי הארץ';
    this.metaImage = './assets/michael-limousine-images/theme.jpg';
    this.CompanyName = "מיכאל לימוזין הסעות";
    this.PhoneNumber = '+972509285550';
    this.Message = 'שלום, ...';
    this.GmailTo = 'mailto:limousine97@gmail.com';
    this.WebsiteUrl = 'https://michaellimozin.co.il/';
    this.AboutUs = "מיכאל לימוזין – הסעות VIP היא חברת הסעות במרכז שמספקת שירותים איכותיים ויוקרתיים לחברות, ארגונים, מוסדות לימוד, לקוחות פרטיים ועוד. החברה מעמידה לרשות הקהל הרחב צי מכוניות חדיש ומאובזר ברמה VIP גבוהה, הכוללת: מיניבוסים, אוטובוסים ומעלונים.";
    this.isAboutVisible = false;
    this.isServicesVisible = false;
    this.isMapVisible = false;
    //Map for location of business
    this.mapCenter = {
      lat: 31.995672,
      lng: 34.936824
    }; // Replace with your desired latitude and longitude
    this.mapZoom = 13; // Adjust the zoom level as needed
    this.markerPosition = {
      lat: 31.995672,
      lng: 34.936824
    }; // Replace with your desired marker position
    this.options = {
      mapTypeId: 'hybrid',
      zoomControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      maxZoom: 20,
      minZoom: 8
    };
  }
  ngOnInit() {
    this.meta.updateMetaTags(this.title, this.description);
  }
  get sanitizedUrl() {
    let url = `https://api.whatsapp.com/send?phone=${this.PhoneNumber}&text=${encodeURIComponent(this.Message)}`;
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  toggleAboutText() {
    this.isAboutVisible = !this.isAboutVisible;
  }
  toggleServicesText() {
    this.isServicesVisible = !this.isServicesVisible;
  }
  toggleMap() {
    this.isMapVisible = !this.isMapVisible;
  }
}
MichaelLimousineComponent.ɵfac = function MichaelLimousineComponent_Factory(t) {
  return new (t || MichaelLimousineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_meta_service_service__WEBPACK_IMPORTED_MODULE_0__.MetaService));
};
MichaelLimousineComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MichaelLimousineComponent,
  selectors: [["app-michael-limousine"]],
  decls: 54,
  vars: 17,
  consts: [[1, "theme-wrapper"], ["id", "themePic", "src", "./assets/michael-limousine-images/theme.jpg"], [1, "about"], ["style", "display: block; margin-top: 3px;", "class", "fas fa-angle-double-down", 3, "click", 4, "ngIf"], [3, "hidden"], ["class", "fas fa-angle-double-up", "style", "margin-top: 10px;", 3, "click", 4, "ngIf"], ["style", "display: block; margin-top: 3px; margin-bottom: 5px;", "class", "fas fa-angle-double-down", 3, "click", 4, "ngIf"], ["id", "map", 2, "margin-top", "10px", 3, "hidden"], ["height", "200px", "width", "100%", 3, "zoom", "center", "options"], [3, "position"], [1, "Buttons"], ["target", "_blank", 2, "text-decoration", "none", 3, "href"], [1, "fab", "fa-whatsapp"], ["id", "whatsapp"], [1, "fas", "fa-envelope"], ["id", "gmail"], [1, "fas", "fa-globe"], ["id", "website"], [1, "fas", "fa-angle-double-down", 2, "display", "block", "margin-top", "3px", 3, "click"], [1, "fas", "fa-angle-double-up", 2, "margin-top", "10px", 3, "click"], [1, "fas", "fa-angle-double-down", 2, "display", "block", "margin-top", "3px", "margin-bottom", "5px", 3, "click"]],
  template: function MichaelLimousineComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "body")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "section")(4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u05DE\u05D9\u05DB\u05D0\u05DC \u05DC\u05D9\u05DE\u05D5\u05D6\u05D9\u05DF \u05D4\u05E1\u05E2\u05D5\u05EA");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u05D0\u05D5\u05D3\u05D5\u05EA \u05D4\u05D7\u05D1\u05E8\u05D4 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MichaelLimousineComponent_i_8_Template, 1, 0, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "article")(10, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, MichaelLimousineComponent_i_12_Template, 1, 0, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " \u05E9\u05D9\u05E8\u05D5\u05EA\u05D9 \u05D4\u05E1\u05E2\u05D5\u05EA ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, MichaelLimousineComponent_i_15_Template, 1, 0, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ul", 4)(17, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u05D4\u05E1\u05E2\u05D5\u05EA \u05EA\u05DC\u05DE\u05D9\u05D3\u05D9\u05DD");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\u05D4\u05E1\u05E2\u05D5\u05EA \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\u05D4\u05E1\u05E2\u05D5\u05EA \u05D0\u05D5\u05DE\u05E0\u05D9\u05DD");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u05D4\u05E1\u05E2\u05D5\u05EA VIP \u05DC\u05D0\u05D9\u05E8\u05D5\u05E2\u05D9\u05DD");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\u05D4\u05E1\u05E2\u05D5\u05EA \u05DC\u05E9\u05D3\u05D4 \u05D4\u05EA\u05E2\u05D5\u05E4\u05D4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\u05D4\u05E1\u05E2\u05D5\u05EA \u05E0\u05DB\u05D9\u05DD");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, MichaelLimousineComponent_i_29_Template, 1, 0, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\u05DB\u05EA\u05D5\u05D1\u05EA ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, MichaelLimousineComponent_i_32_Template, 1, 0, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 7)(34, "google-map", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "map-marker", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, MichaelLimousineComponent_i_36_Template, 1, 0, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 10)(38, "div")(39, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\u05D5\u05D5\u05D8\u05E6\u05D0\u05E4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div")(44, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "\u05D3\u05D5\u05D0\"\u05DC");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div")(49, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "\u05D4\u05D0\u05EA\u05E8 \u05D4\u05E8\u05E9\u05DE\u05D9");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isAboutVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.isAboutVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.AboutUs);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAboutVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isServicesVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.isServicesVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isServicesVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isMapVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.isMapVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("zoom", ctx.mapZoom)("center", ctx.mapCenter)("options", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("position", ctx.markerPosition);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMapVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.sanitizedUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx.GmailTo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx.WebsiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__.GoogleMap, _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__.MapMarker, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: [":root {\r\n    --max-width: 500px; \r\n    --min-width: 300px;\r\n    --flood-color:rgba(255, 255, 255, 0.4);\r\n  }\r\n \r\n\r\nbody[_ngcontent-%COMP%]{\r\n   \r\n width: 100%;\r\n height:100%;\r\n max-width: var(--max-width);\r\n min-width: var(--min-width);\r\n\r\n margin:0;\r\n padding: 0;\r\n\r\n display: flex;\r\n flex-direction: column;\r\n\r\n overflow: auto;\r\n\r\n}\r\n\r\n.theme-wrapper[_ngcontent-%COMP%]{\r\n   \r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n#themePic[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height:200px;\r\n    \r\n     animation: _ngcontent-%COMP%_zoomOut 3s forwards;\r\n     transform-origin: center;\r\n     \r\n}\r\n@keyframes _ngcontent-%COMP%_zoomOut {\r\n    0% {\r\n      transform: scale(1.1);\r\n    }\r\n    100% {\r\n      transform: scale(1.4);\r\n    }\r\n}\r\n\r\n\r\n\r\nsection[_ngcontent-%COMP%]{\r\n     \r\n     background-image: url('michael-limousine-background.jpg');\r\n     background-repeat: no-repeat;\r\n     background-size: cover; \r\n     display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n    overflow: auto; \r\n    flex:1;\r\n }\r\n section[_ngcontent-%COMP%]::-webkit-scrollbar{\r\n    display: none;\r\n     }\r\n\r\n\r\n     section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        color: rgb(255, 255, 255, 0.8);\r\n        text-align: center;\r\n        margin-bottom: 40px;\r\n        font-size: 33px;\r\n        background-color: rgba(232, 216, 232, 0.08);\r\n        padding: 15px 15px;\r\n        \r\n    \r\n    }  \r\n    section[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]{\r\n        width: 85%;\r\n        margin: auto auto;\r\n        text-align: center;\r\n        color: rgb(255, 255, 255, 0.6);\r\n        font-size: 20px;\r\n        background-color: rgba(0, 0, 0, 0.45);\r\n        border-radius: 20px;\r\n        padding: 14px;\r\n        margin-top: 10px;\r\n    }   \r\n\r\nsection[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    direction: rtl;\r\n    width: 95%;\r\n    line-height: 1.5;\r\n    font-size: 20px;\r\n    text-align: right;\r\n    margin-top: 15px;\r\n   \r\n}\r\n\r\n\r\n\r\nsection[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    margin-right: 10px;\r\n    direction: rtl;\r\n    margin-bottom: 15px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.Buttons[_ngcontent-%COMP%]{\r\n      \r\n     \r\n     display: flex;\r\n     justify-content: center;\r\n     align-items: center;\r\n     flex-wrap: wrap;\r\n     flex: 1;  \r\n     margin-top: 15px;\r\n     \r\n}\r\n\r\n.Buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n      \r\n      \r\n margin-top: 10px; \r\n margin-bottom: 10px; \r\n    \r\n align-items: center;\r\n text-align: center;\r\n width: calc(100% / 3);\r\n\r\n}\r\n.Buttons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n    color:black;\r\n\r\n    width: 55px; \r\n    height: 55px;\r\n    line-height: 55px;\r\n\r\n    border-radius: 50%; \r\n    background-color: var(--flood-color);\r\n}\r\n\r\n.Buttons[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color:var(--flood-color);\r\n    font-family: \"Billabong\", cursive;\r\n    font-size: 16px;\r\n    margin-top: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWljaGFlbC1saW1vdXNpbmUvbWljaGFlbC1saW1vdXNpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQixFQUFFLGlEQUFpRDtJQUNyRSxrQkFBa0I7SUFDbEIsc0NBQXNDO0VBQ3hDOzs7QUFHRjtBQUNBO0VBQ0U7Q0FDRCxXQUFXO0NBQ1gsV0FBVztDQUNYLDJCQUEyQjtDQUMzQiwyQkFBMkI7O0NBRTNCLFFBQVE7Q0FDUixVQUFVOztDQUVWLGFBQWE7Q0FDYixzQkFBc0I7O0NBRXRCLGNBQWM7O0FBRWY7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0tBRVgsOEJBQThCO0tBQzlCLHdCQUF3Qjs7QUFFN0I7QUFDQTtJQUNJO01BQ0UscUJBQXFCO0lBQ3ZCO0lBQ0E7TUFDRSxxQkFBcUI7SUFDdkI7QUFDSjs7QUFFQTs7Ozs7Ozs7Ozs7RUFXRTs7QUFFRjtLQUNLLHlDQUF5QztLQUN6Qyx5REFBNkY7S0FDN0YsNEJBQTRCO0tBQzVCLHNCQUFzQjtLQUN0QixhQUFhO0lBQ2Qsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsTUFBTTtDQUNUO0NBQ0E7SUFDRyxhQUFhO0tBQ1o7OztLQUdBO1FBQ0cseUNBQXlDO1FBQ3pDLDhCQUE4QjtRQUM5QixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZiwyQ0FBMkM7UUFDM0Msa0JBQWtCO1FBQ2xCOzs7OzhEQUlzRDs7SUFFMUQ7SUFDQTtRQUNJLFVBQVU7UUFDVixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLDhCQUE4QjtRQUM5QixlQUFlO1FBQ2YscUNBQXFDO1FBQ3JDLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsZ0JBQWdCO0lBQ3BCOztBQUVKO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7R0FDakIsbUJBQW1CO0FBQ3RCOzs7O0FBSUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7OztBQUdBO0tBQ0sseUNBQXlDO0tBQ3pDLHVDQUF1QztLQUN2QyxhQUFhO0tBQ2IsdUJBQXVCO0tBQ3ZCLG1CQUFtQjtLQUNuQixlQUFlO0tBQ2YsT0FBTztLQUNQLGdCQUFnQjs7QUFFckI7O0FBRUE7TUFDTSxzQ0FBc0M7O0NBRTNDLGdCQUFnQjtDQUNoQixtQkFBbUI7O0NBRW5CLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIscUJBQXFCOztBQUV0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7O0lBRVgsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7O0lBRWpCLGtCQUFrQjtJQUNsQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgOnJvb3Qge1xyXG4gICAgLS1tYXgtd2lkdGg6IDUwMHB4OyAvKiBkZWZpbmUgdGhlIG1heCB3aWR0aCB2YWx1ZSBhcyBhIENTUyB2YXJpYWJsZSAqL1xyXG4gICAgLS1taW4td2lkdGg6IDMwMHB4O1xyXG4gICAgLS1mbG9vZC1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbiAgfVxyXG4gXHJcblxyXG5ib2R5e1xyXG4vKiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigzNywgMTQ5LCAxNzEpO1xyXG4gKi8gICBcclxuIHdpZHRoOiAxMDAlO1xyXG4gaGVpZ2h0OjEwMCU7XHJcbiBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCk7XHJcbiBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aCk7XHJcblxyXG4gbWFyZ2luOjA7XHJcbiBwYWRkaW5nOiAwO1xyXG5cclxuIGRpc3BsYXk6IGZsZXg7XHJcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuIG92ZXJmbG93OiBhdXRvO1xyXG5cclxufVxyXG5cclxuLnRoZW1lLXdyYXBwZXJ7XHJcbiAgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4jdGhlbWVQaWN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDoyMDBweDtcclxuICAgIFxyXG4gICAgIGFuaW1hdGlvbjogem9vbU91dCAzcyBmb3J3YXJkcztcclxuICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICAgXHJcbn1cclxuQGtleWZyYW1lcyB6b29tT3V0IHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcclxuICAgIH1cclxufVxyXG5cclxuLyogI3Byb2ZpbGVQaWN7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDowO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIFxyXG59IFxyXG4gKi9cclxuXHJcbnNlY3Rpb257XHJcbiAgICAgLyogYm9yZGVyOiAycHggc29saWQgcmdiKDM3LCAxNDksIDE3MSk7ICovXHJcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL21pY2hhZWwtbGltb3VzaW5lLWltYWdlcy9taWNoYWVsLWxpbW91c2luZS1iYWNrZ3JvdW5kLmpwZycpO1xyXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogYXV0bzsgXHJcbiAgICBmbGV4OjE7XHJcbiB9XHJcbiBzZWN0aW9uOjotd2Via2l0LXNjcm9sbGJhcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgfVxyXG5cclxuXHJcbiAgICAgc2VjdGlvbiBoMntcclxuICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMyLCAyMTYsIDIzMiwgMC4wOCk7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAxNXB4O1xyXG4gICAgICAgIC8qZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IHJnYmEoMTkzLCAxODcsIDIzMiwgMC44NzIpOyAqL1xyXG4gICAgXHJcbiAgICB9ICBcclxuICAgIHNlY3Rpb24gLmFib3V0e1xyXG4gICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH0gICBcclxuXHJcbnNlY3Rpb24gYXJ0aWNsZSBwe1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgLyogcGFkZGluZzogMzBweDsgKi9cclxufVxyXG5cclxuXHJcblxyXG5zZWN0aW9uIGxpe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLkJ1dHRvbnN7XHJcbiAgICAgLyogYm9yZGVyOiA0cHggc29saWQgcmdiKDIxMSwgMzIsIDE1MSk7ICovIFxyXG4gICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgNzIsIDk2KTsgKi9cclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgIGZsZXg6IDE7ICBcclxuICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgIFxyXG59XHJcblxyXG4uQnV0dG9ucyBkaXZ7XHJcbiAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNiwgNCwgOTIpOyAqL1xyXG4gICAgICBcclxuIG1hcmdpbi10b3A6IDEwcHg7IFxyXG4gbWFyZ2luLWJvdHRvbTogMTBweDsgXHJcbiAgICBcclxuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB3aWR0aDogY2FsYygxMDAlIC8gMyk7XHJcblxyXG59XHJcbi5CdXR0b25zIGl7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjpibGFjaztcclxuXHJcbiAgICB3aWR0aDogNTVweDsgXHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTVweDtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmxvb2QtY29sb3IpO1xyXG59XHJcblxyXG4uQnV0dG9ucyBwe1xyXG4gICAgY29sb3I6dmFyKC0tZmxvb2QtY29sb3IpO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQmlsbGFib25nXCIsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4gIFxyXG4gIFxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 9294:
/*!**************************************************!*\
  !*** ./src/app/services/meta-service.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetaService": () => (/* binding */ MetaService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11958);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 45359);


class MetaService {
  constructor(titleService, metaService) {
    this.titleService = titleService;
    this.metaService = metaService;
  }
  updateMetaTags(title, description) {
    this.titleService.setTitle(title);
    this.metaService.updateTag({
      name: 'description',
      content: description
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: title
    });
  }
}
MetaService.ɵfac = function MetaService_Factory(t) {
  return new (t || MetaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Meta));
};
MetaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MetaService,
  factory: MetaService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 23149:
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppServerModule": () => (/* reexport safe */ _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__.AppServerModule)
/* harmony export */ });
/* harmony import */ var _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.module */ 84362);


/***/ }),

/***/ 53226:
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppServerModule": () => (/* reexport safe */ _src_main_server__WEBPACK_IMPORTED_MODULE_5__.AppServerModule),
/* harmony export */   "app": () => (/* binding */ app),
/* harmony export */   "renderApplication": () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__.renderApplication),
/* harmony export */   "renderModule": () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__.renderModule),
/* harmony export */   "ɵSERVER_CONTEXT": () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ɵSERVER_CONTEXT"])
/* harmony export */ });
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/node */ 29810);
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 79279);
/* harmony import */ var _nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nguniversal/express-engine */ 88862);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ 1898);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node:fs */ 87561);
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node:path */ 49411);
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_main_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/main.server */ 23149);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-server */ 25483);







// The Express app is exported so that it can be used by serverless Functions.
function app() {
  const server = express__WEBPACK_IMPORTED_MODULE_2__();
  const distFolder = (0,node_path__WEBPACK_IMPORTED_MODULE_4__.join)(process.cwd(), 'dist/BIZCARD/browser');
  const indexHtml = (0,node_fs__WEBPACK_IMPORTED_MODULE_3__.existsSync)((0,node_path__WEBPACK_IMPORTED_MODULE_4__.join)(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', (0,_nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_1__.ngExpressEngine)({
    bootstrap: _src_main_server__WEBPACK_IMPORTED_MODULE_5__.AppServerModule,
    providers: [{
      provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__.APP_BASE_HREF,
      useValue: '/'
    }]
  }));
  server.set('view engine', 'html');
  server.set('views', distFolder);
  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express__WEBPACK_IMPORTED_MODULE_2__["static"](distFolder, {
    maxAge: '1y'
  }));
  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req
    });
  });
  return server;
}
function run() {
  const port = process.env['PORT'] || 4000;
  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
const mainModule = require.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}


  // EXPORTS added by @angular-devkit/build-angular
  
  

/***/ }),

/***/ 18967:
/*!****************************************!*\
  !*** ./node_modules/express/lib/ sync ***!
  \****************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 18967;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 50852:
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ 14300:
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6113:
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 82361:
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 41808:
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 87561:
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ 49411:
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ 22037:
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 63477:
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 12781:
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 39512:
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 76224:
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 57310:
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		__webpack_require__.O(undefined, [736], () => (__webpack_require__(48763)))
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(53226)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + (chunkId === 736 ? "vendor" : chunkId) + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			179: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(736);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map