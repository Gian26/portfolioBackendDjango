webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/alert/alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\" class=\"{{ cssClass(alert) }} alert-dismissable animated lightSpeedIn\">\n     {{alert.message}}\n     <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_alert__ = __webpack_require__("../../../../../src/app/models/alert.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_alert_service__ = __webpack_require__("../../../../../src/app/service/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getAlert().subscribe(function (alert) {
            if (!alert) {
                // clear alerts when an empty alert is received
                _this.alerts = [];
                return;
            }
            // add alert to array
            _this.alerts.push(alert);
        });
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    AlertComponent.prototype.cssClass = function (alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case __WEBPACK_IMPORTED_MODULE_1__models_alert__["a" /* AlertType */].Success:
                return 'alert alert-success';
            case __WEBPACK_IMPORTED_MODULE_1__models_alert__["a" /* AlertType */].Error:
                return 'alert alert-danger';
            case __WEBPACK_IMPORTED_MODULE_1__models_alert__["a" /* AlertType */].Info:
                return 'alert alert-info';
            case __WEBPACK_IMPORTED_MODULE_1__models_alert__["a" /* AlertType */].Warning:
                return 'alert alert-warning';
        }
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'alert',
            template: __webpack_require__("../../../../../src/app/alert/alert.component.html"),
            styles: [__webpack_require__("../../../../../src/app/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_alert_service__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blur {\n  background: rgb(34,34,34); /* for IE */\n  background: rgba(34,34,34,0.75);\n}\n\n.navbar a{\n  color:white;\n  letter-spacing: 3px;\n\tfont-family: \"Trebuchet MS\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Tahoma, sans-serif;\n}\n\n.container{\n  padding:0px;\n}\n.img-fluid{\n  width:100%;\n}\nagm-map {\n  height: 100%;\n}\n.content-margin-left{\n  margin-left: 5%;\n}\n\n.content-margin-right{\n  margin-right: 5%;\n}\n\n/*timeline*/\n.timeline {\n  /*background: #E8E8E8\t\t;*/\n  /* box-shadow: 10px 10px 5px grey; */\n    list-style: none;\n    padding: 20px;\n    position: relative;\n    margin-bottom: 50px;\n    margin-left: 10%;\n    margin-right: 10%;\n}\n\n.timeline-header{\n  text-align: center;\n  color:white;\n}\n\n    .timeline:before {\n        top: 0;\n        bottom: 0;\n        position: absolute;\n        content: \" \";\n        width: 3px;\n        background-color: #eeeeee;\n        left: 50%;\n        margin-left: -1.5px;\n    }\n\n    .timeline > li {\n        margin-bottom: 20px;\n        position: relative;\n    }\n\n        .timeline > li:before,\n        .timeline > li:after {\n            content: \" \";\n            display: table;\n        }\n\n        .timeline > li:after {\n            clear: both;\n        }\n\n        .timeline > li:before,\n        .timeline > li:after {\n            content: \" \";\n            display: table;\n        }\n\n        .timeline > li:after {\n            clear: both;\n        }\n\n        .timeline > li > .timeline-panel {\n            width: 46%;\n            float: left;\n            border: 1px solid #d4d4d4;\n            border-radius: 2px;\n            padding: 0 20px;\n            position: relative;\n            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\n        }\n\n            .timeline > li > .timeline-panel:before {\n                position: absolute;\n                top: 26px;\n                right: -15px;\n                display: inline-block;\n                border-top: 15px solid transparent;\n                border-left: 15px solid #ccc;\n                border-right: 0 solid #ccc;\n                border-bottom: 15px solid transparent;\n                content: \" \";\n            }\n\n            .timeline > li > .timeline-panel:after {\n                position: absolute;\n                top: 27px;\n                right: -14px;\n                display: inline-block;\n                border-top: 14px solid transparent;\n                border-left: 14px solid #8BBEE8;\n                border-right: 0 solid #8BBEE8;\n                border-bottom: 14px solid transparent;\n                content: \" \";\n            }\n\n        .timeline > li > .timeline-badge {\n            color: #fff;\n            width: 30px;\n            height: 30px;\n            line-height: 50px;\n            font-size: 1.4em;\n            text-align: center;\n            position: absolute;\n            top: 16px;\n            left: 50%;\n            margin-left: -15px;\n            background-color: #999999;\n            z-index: 100;\n            border-top-right-radius: 50%;\n            border-top-left-radius: 50%;\n            border-bottom-right-radius: 50%;\n            border-bottom-left-radius: 50%;\n        }\n\n        .timeline > li.timeline-inverted > .timeline-panel {\n            float: right;\n        }\n\n            .timeline > li.timeline-inverted > .timeline-panel:before {\n                border-left-width: 0;\n                border-right-width: 15px;\n                left: -15px;\n                right: auto;\n            }\n\n            .timeline > li.timeline-inverted > .timeline-panel:after {\n                border-left-width: 0;\n                border-right-width: 14px;\n                left: -14px;\n                right: auto;\n            }\n\n.timeline-badge.primary {\n    background-color: #2e6da4 !important;\n}\n\n.timeline-badge.success {\n    background-color: #3f903f !important;\n}\n\n.timeline-badge.warning {\n    background-color: #f0ad4e !important;\n}\n\n.timeline-badge.danger {\n    background-color: #d9534f !important;\n}\n\n.timeline-badge.info {\n    background-color: #5bc0de !important;\n}\n\n.timeline-heading{\n  /*background: red;*/\n  padding: 10px;\n}\n.timeline-panel{\n  background: white;\n  box-shadow: 10px 10px 5px grey;\n}\n\n.timeline-title {\n    margin: 10px;\n    padding: 10px;\n    color: #8BBEE8;\n    text-align: center;\n\n    /*background: #064E72;*/\n    /*padding: 10px;*/\n\n}\n\n.timeline-body > p,\n.timeline-body > ul {\n    margin-bottom: 0;\n    padding: 10px;\n    text-transform: uppercase;\n\n}\n.timeline-panel{\n  text-align: center;\n}\n\n.timeline-body > p + p {\n    margin-top: 5px;\n}\n\n@media (max-width: 767px) {\n    ul.timeline:before {\n        left: 40px;\n    }\n\n    ul.timeline > li > .timeline-panel {\n        width: calc(100% );\n        width: -webkit-calc(100% );\n    }\n\n    ul.timeline > li > .timeline-badge {\n        left: 15px;\n        margin-left: 0;\n        top: 16px;\n    }\n\n    ul.timeline > li > .timeline-panel {\n        float: right;\n    }\n\n        ul.timeline > li > .timeline-panel:before {\n            border-left-width: 0;\n            border-right-width: 15px;\n            left: -15px;\n            right: auto;\n        }\n\n        ul.timeline > li > .timeline-panel:after {\n            border-left-width: 0;\n            border-right-width: 14px;\n            left: -14px;\n            right: auto;\n        }\n    .timeline:before{\n      background: none;\n    }\n    .timeline-badge{\n      display: none;\n    }\n\n}\n\n.year{\n  background: #8BBEE8;\n   text-align: center;\n  color:white;\n}\n\n\n\n.form{\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n\n.icons-skills i{\n  color:#ecb807;\n  font-size:50px;\n}\n\n.container-skills{\n  padding-top:4%;\n  padding-bottom:4%;\n  padding-left:1%;\n  padding-right:1%;\n}\n\n.title-skills{\n  display: inline;\n  font-size:90px;\n }\n\n.circle {\n  display: block;\n  width: 290px;\n  height: 290px;\n  margin: 1em auto;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  border-radius: 99em;\n  border: 5px solid #eee;\n  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);\n}\n.progress-bar-skills{  }\n\n.progress{\n    width: 85px;\n    height: 85px;\n    line-height: 150px;\n    background: none;\n     box-shadow: none;\n    position: relative;\n    margin:4%;\n }\n.progress:after{\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    border: 7px solid #fff;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.progress > span{\n    width: 50%;\n    height: 100%;\n    overflow: hidden;\n    position: absolute;\n    top: 0;\n    z-index: 1;\n}\n\n\n.progress .progress-value{\n    width: 90%;\n    height: 90%;\n    border-radius: 50%;\n    background: #44484b;\n    font-size: 40px;\n    color: #fff;\n    line-height: 88px;\n    text-align: center;\n    position: absolute;\n    top: 5%;\n    left: 5%;\n}\n\n.progress .progress-bar{\n    width: 100%;\n    height: 100%;\n    background: none;\n    border-width: 7px;\n    border-style: solid;\n    position: absolute;\n    top: 0;\n}\n\n.progress .progress-left{\n    left: 0;\n}\n\n.progress .progress-left .progress-bar{\n    left: 100%;\n    border-top-right-radius: 80px;\n    border-bottom-right-radius: 80px;\n    border-left: 0;\n    -webkit-transform-origin: center left;\n    transform-origin: center left;\n}\n\n.progress .progress-right{\n    right: 0;\n}\n.progress .progress-right .progress-bar{\n    left: -100%;\n    border-top-left-radius: 80px;\n    border-bottom-left-radius: 80px;\n    border-right: 0;\n    -webkit-transform-origin: center right;\n    transform-origin: center right;\n    -webkit-animation: loading-1 1.8s linear forwards;\n            animation: loading-1 1.8s linear forwards;\n}\n\n.progress.blue .progress-bar{\n    border-color: #049dff;\n}\n.progress.blue .progress-left .progress-bar{\n    -webkit-animation: loading-2 1.5s linear forwards 1.8s;\n            animation: loading-2 1.5s linear forwards 1.8s;\n}\n.progress.python .progress-bar{\n    border-color: #fdba04;\n}\n.progress.python .progress-left .progress-bar{\n    -webkit-animation: loading-70 1s linear forwards 1.8s;\n            animation: loading-70 1s linear forwards 1.8s;\n}\n\n.progress.angular .progress-bar{\n    border-color: #fdba04;\n}\n.progress.angular .progress-left .progress-bar{\n    -webkit-animation: loading-70 1s linear forwards 1.8s;\n            animation: loading-70 1s linear forwards 1.8s;\n}\n\n.progress.github .progress-bar{\n    border-color: #fdba04;\n}\n.progress.github .progress-left .progress-bar{\n    -webkit-animation: loading-70 1s linear forwards 1.8s;\n            animation: loading-70 1s linear forwards 1.8s;\n}\n\n.progress.html5 .progress-bar{\n    border-color: #fdba04;\n}\n.progress.html5 .progress-left .progress-bar{\n    -webkit-animation: loading-78 1s linear forwards 1.8s;\n            animation: loading-78 1s linear forwards 1.8s;\n}\n\n.progress.php .progress-bar{\n    border-color: #fdba04;\n}\n\n.progress.php .progress-left .progress-bar{\n    -webkit-animation: loading-48 1s linear forwards 1.8s;\n            animation: loading-48 1s linear forwards 1.8s;\n}\n\n.progress.csharp .progress-bar{\n    border-color: #fdba04;\n}\n.progress.csharp .progress-left .progress-bar{\n    -webkit-animation: loading-48 1s linear forwards 1.8s;\n            animation: loading-48 1s linear forwards 1.8s;\n}\n\n.progress.cplus .progress-bar{\n    border-color: #fdba04;\n}\n.progress .cplus .progress-left .progress-bar{\n    -webkit-animation: loading-50 1s linear forwards 1.8s;\n            animation: loading-50 1s linear forwards 1.8s;\n}\n\n\n.progress.javascript .progress-bar{\n    border-color: #fdba04;\n}\n.progress.javascript .progress-left .progress-bar{\n    -webkit-animation: loading-68 1s linear forwards 1.8s;\n            animation: loading-68 1s linear forwards 1.8s;\n}\n\n\n.progress.yellow .progress-bar{\n    border-color: #fdba04;\n}\n.progress.yellow .progress-left .progress-bar{\n    -webkit-animation: loading-3 1s linear forwards 1.8s;\n            animation: loading-3 1s linear forwards 1.8s;\n}\n.progress.pink .progress-bar{\n    border-color: #ed687c;\n}\n.progress.pink .progress-left .progress-bar{\n    -webkit-animation: loading-4 0.4s linear forwards 1.8s;\n            animation: loading-4 0.4s linear forwards 1.8s;\n}\n.progress.green .progress-bar{\n    border-color: #1abc9c;\n}\n.progress.green .progress-left .progress-bar{\n    -webkit-animation: loading-5 1.2s linear forwards 1.8s;\n            animation: loading-5 1.2s linear forwards 1.8s;\n}\n@-webkit-keyframes loading-1{\n    0%{\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100%{\n        -webkit-transform: rotate(180deg);\n        transform: rotate(180deg);\n    }\n}\n@keyframes loading-1{\n    0%{\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100%{\n        -webkit-transform: rotate(180deg);\n        transform: rotate(180deg);\n    }\n}\n@-webkit-keyframes loading-2{\n    0%{\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100%{\n        -webkit-transform: rotate(144deg);\n        transform: rotate(144deg);\n    }\n}\n@keyframes loading-2{\n    0%{\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100%{\n        -webkit-transform: rotate(144deg);\n        transform: rotate(144deg);\n    }\n}\n\n@-webkit-keyframes loading-3{\n    0%{\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100%{\n        -webkit-transform: rotate(90deg);\n        transform: rotate(90deg);\n    }\n}\n\n@keyframes loading-3{\n    0%{\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100%{\n        -webkit-transform: rotate(90deg);\n        transform: rotate(90deg);\n    }\n}\n@-webkit-keyframes loading-4{\n    0%{\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100%{\n        -webkit-transform: rotate(36deg);\n        transform: rotate(36deg);\n    }\n}\n@keyframes loading-4{\n    0%{\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100%{\n        -webkit-transform: rotate(36deg);\n        transform: rotate(36deg);\n    }\n}\n@-webkit-keyframes loading-5{\n    0%{\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100%{\n        -webkit-transform: rotate(126deg);\n        transform: rotate(126deg);\n    }\n}\n@keyframes loading-5{\n    0%{\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100%{\n        -webkit-transform: rotate(126deg);\n        transform: rotate(126deg);\n    }\n}\n\n@-webkit-keyframes loading-48{\n    0%{\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100%{\n        -webkit-transform: rotate(9deg);\n        transform: rotate(9deg);\n    }\n}\n\n@keyframes loading-48{\n    0%{\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100%{\n        -webkit-transform: rotate(9deg);\n        transform: rotate(9deg);\n    }\n}\n\n@-webkit-keyframes loading-68{\n    0%{\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100%{\n        -webkit-transform: rotate(9deg);\n        transform: rotate(29deg);\n    }\n}\n\n@keyframes loading-68{\n    0%{\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100%{\n        -webkit-transform: rotate(9deg);\n        transform: rotate(29deg);\n    }\n}\n\n@-webkit-keyframes loading-70{\n    0%{\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100%{\n        -webkit-transform: rotate(90deg);\n        transform: rotate(90deg);\n    }\n}\n\n@keyframes loading-70{\n    0%{\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100%{\n        -webkit-transform: rotate(90deg);\n        transform: rotate(90deg);\n    }\n}\n\n@-webkit-keyframes loading-78{\n    0%{\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100%{\n        -webkit-transform: rotate(155deg);\n        transform: rotate(155deg);\n    }\n}\n\n@keyframes loading-78{\n    0%{\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100%{\n        -webkit-transform: rotate(155deg);\n        transform: rotate(155deg);\n    }\n}\n\n\n@-webkit-keyframes loading-50{\n    0%{\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100%{\n        -webkit-transform: rotate(155deg);\n        transform: rotate(125deg);\n    }\n}\n\n\n@keyframes loading-50{\n    0%{\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100%{\n        -webkit-transform: rotate(155deg);\n        transform: rotate(125deg);\n    }\n}\n@media only screen and (max-width: 992px){\n    .progress{ margin-bottom: 20px; }\n    .progress-bar-skills{  }\n    .links{\n      display:none;\n    }\n    .links-responsive{\n      display:none;\n      margin-top:40px;\n    }\n  /* .progress{\n      width: 80px;\n      height: 80px;\n      line-height: 140px;\n      background: none;\n      margin: 0 auto;\n      box-shadow: none;\n      position: relative;\n      margin-bottom: 4px;\n   }\n  .progress:after{\n      border: 7px solid #fff;\n  }\n  .progress > span{\n      width: 50%;\n      height: 100%;\n      overflow: hidden;\n      position: absolute;\n      top: 0;\n      z-index: 1;\n  }\n\n  .progress .progress-bar{\n      border-width: 7px;\n  }\n\n  .progress .progress-value{\n      width: 90%;\n      height: 90%;\n      border-radius: 50%;\n      background: #44484b;\n      font-size: 29px;\n      color: #fff;\n      line-height: 80px;\n      text-align: center;\n      position: absolute;\n      top: 5%;\n      left: 5%;\n  } */\n\n }\n .links-responsive{\n   display:none;\n }\n@media only screen and (max-width: 700px){\n  .masthead {\n    min-height: 35rem;\n  }\n\n .masthead h1\n{\n  font-size:50px;\n}\n\n.masthead h3\n{\n font-size:20px;\n}\n\n\n  .progress{\n      width: 80px;\n      height: 80px;\n      line-height: 140px;\n      background: none;\n      margin: 0 auto;\n      box-shadow: none;\n      position: relative;\n      margin-bottom: 4px;\n   }\n   .links-responsive{\n     display:block;\n   }\n  .progress:after{\n      border: 7px solid #fff;\n  }\n  .progress > span{\n      width: 50%;\n      height: 100%;\n      overflow: hidden;\n      position: absolute;\n      top: 0;\n      z-index: 1;\n  }\n\n  .progress .progress-bar{\n      border-width: 7px;\n  }\n\n  .progress .progress-value{\n      width: 90%;\n      height: 90%;\n      border-radius: 50%;\n      background: #44484b;\n      font-size: 29px;\n      color: #fff;\n      line-height: 80px;\n      text-align: center;\n      position: absolute;\n      top: 5%;\n      left: 5%;\n  }\n\n    .progress-bar-skills{ width:100%;padding: 10px;}\n\n  .title-skills h2{\n    font-size:35px;\n  }\n}\n\n.cv-download{\n  font-size: 10px;\n}\n\n\nlabel{\n  color:#1D809F;\n}\n\ntextarea,input{\n  border:2px solid  black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- https://old.maximelafarie.com/ -->\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        ...\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n  <body class=\"container-fluid full-width\"id=\"page-top\">\n    <!-- Image and text -->\n   <nav class=\"navbar navbar-expand-md navbar-dark fixed-top blur\">\n     <a class=\"navbar-brand\"  [ngx-scroll-to]=\"'#page-top'\">\n       <img src=\"/assets/img/cuellodev.png\" width=\"80\" height=\"60\" class=\"d-inline-block align-top\" alt=\"\">\n      </a>\n     <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [ngx-scroll-to]=\"'#about'\">Me</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [ngx-scroll-to]=\"'#skills'\">Skills</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [ngx-scroll-to]=\"'#portfolio'\">Portfolio</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [ngx-scroll-to]=\"'#contact'\">Contact</a>\n      </li>\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" [ngx-scroll-to]=\"'#portfolio'\">Disabled</a>\n      </li> -->\n    </ul>\n    <!-- <form class=\"form-inline mt-2 mt-md-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form> -->\n  </div>\n</nav>\n    <!-- Header -->\n    <header class=\"masthead d-flex\" style=\"background-image: url('../assets/img/bigpic.jpg')\">\n      <div class=\"container text-center my-auto container-background\">\n        <h1 class=\"mb-1 animated lightSpeedIn text-white\">Web Developer and Computer Scientist</h1>\n        <h3 class=\"mb-5\">\n          <em class=\"animated fadeInDown text-white \">Angular, Django, Machine Learning and more </em>\n        </h3>\n       </div>\n      <div class=\"overlay\"></div>\n    </header>\n\n    <!-- About -->\n    <section class=\"content-section\" id=\"about\">\n      <div class=\"content-section-heading  text-center\">\n        <h2 class=\"text-secondary mb-0 \">About Me</h2>\n       </div>\n      <div class=\"row bg-light \" style=\"padding:0px; margin-top:20px;\">\n\n        <div class=\"col-lg-4 \">\n          <div class=\"title-skills\">\n            <h2 class=\"text-primary\">Gian N Cuello</h2>\n          </div>\n          <p class=\"lead mb-5 animated flipInX\"> Hi! I am a professional web developer based in Mérida Yucatán, México (see map below).\n          I develop web apps and web apis using Django, GraphQl, Rest or other new technologies that capture my attention.\n          Creating functional web apps to fulfill the needs of the market and creating great, legible, upto standard code is a necessity. I have interests in working with Artificial Intelligence more specific, Machine Learning techniques since it's in this field\n          I developed my Master Thesis.\n          <br>\n          <!-- I consider myself a fan of dragon ball (Z,GT,Super), I enjoy going out for walks and my favorite food is Rice and beans(Belizean Dish) and I enjoy time with my girlfriend and family. -->\n        </div>\n        <!-- About me -->\n          <div class=\"col-lg-4 text-center\">\n              <div class=\"circle animated zoomIn\" style=\"background-image:url('../assets/img/mypic.jpg')\">\n              </div>\n              <div class=\"row links\">\n                <div class=\"col-lg-12 col-md-12 col-12\">\n                  <div class=\"row text-center\">\n                    <div class=\"col-lg-6 col-md-6 col-6\">\n                      <a   href=\"../assets/pdf/cv_Gian_Eng.pdf\" target=\"_blank\" >Download CV-English</a>\n                    </div>\n                    <div class=\"col-lg-6 col-md-6 col-6\">\n                      <a   href=\"../pdf/cv_Gian_Spa.pdf\" target=\"_blank\" >Download CV-Spanish</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n          </div>\n          <!-- profile picture -->\n\n          <div class=\"col-lg-4\" id=\"skills\">\n            <div class=\"title-skills\">\n              <h2  class=\"text-primary\">My Professional Skills</h2>\n            </div>\n            <div class=\"progress-bar-skills\">\n              <p>\n                These are a few of the technologies I use very well.\n              </p>\n              <div class=\"row\">\n                  <div class=\"col-md-3 col-sm-3 col-3\">\n                      <div class=\"progress angular\">\n                          <span class=\"progress-left\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <span class=\"progress-right\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <div class=\"progress-value\">\n\n                            <i class=\"devicon-angularjs-plain\"></i>\n\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-3 col-sm-3 col-3\">\n                      <div class=\"progress cplus\">\n                          <span class=\"progress-left\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <span class=\"progress-right\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <div class=\"progress-value\">\n                            <i class=\"devicon-cplusplus-plain\"></i>\n                          </div>\n\n                      </div>\n                  </div>\n                  <div class=\"col-md-3 col-sm-3 col-3\">\n                      <div class=\"progress yellow\">\n                          <span class=\"progress-left\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <span class=\"progress-right\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <div class=\"progress-value\">\n                            <i class=\"devicon-bootstrap-plain\"></i>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-3 col-sm-3 col-3\">\n                      <div class=\"progress yellow\">\n                          <span class=\"progress-left\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <span class=\"progress-right\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <div class=\"progress-value\">\n                             <i class=\"devicon-django-plain\"></i>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"row text-center\">\n                  <div class=\"col-md-3 col-sm-3 col-3\">\n                      <div class=\"progress javascript\">\n                          <span class=\"progress-left\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <span class=\"progress-right\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <div class=\"progress-value\">\n\n                            <i class=\"devicon-javascript-plain\"></i>\n\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-3 col-sm-3 col-3\">\n                      <div class=\"progress github\">\n                          <span class=\"progress-left\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <span class=\"progress-right\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <div class=\"progress-value\">\n                            <i class=\"devicon-mysql-plain-wordmark\"></i>\n                          </div>\n\n                      </div>\n                  </div>\n                  <div class=\"col-md-3 col-sm-3 col-3\">\n                      <div class=\"progress yellow\">\n                          <span class=\"progress-left\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <span class=\"progress-right\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <div class=\"progress-value\">\n                            <i class=\"devicon-css3-plain\"></i>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-3 col-sm-3 col-3\">\n                      <div class=\"progress python\">\n                          <span class=\"progress-left\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <span class=\"progress-right\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <div class=\"progress-value\">\n                             <i class=\"devicon-python-plain\"></i>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"row text-center\">\n                  <div class=\"col-md-3 col-sm-3 col-3\">\n                      <div class=\"progress github\">\n                          <span class=\"progress-left\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <span class=\"progress-right\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <div class=\"progress-value\">\n\n                            <i class=\"devicon-github-plain\"></i>\n\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-3 col-sm-3 col-3\">\n                      <div class=\"progress csharp\">\n                          <span class=\"progress-left\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <span class=\"progress-right\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <div class=\"progress-value\">\n                            <i class=\"devicon-csharp-plain-wordmark\"></i>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-3 col-sm-3 col-3\">\n                      <div class=\"progress html5\">\n                          <span class=\"progress-left\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <span class=\"progress-right\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <div class=\"progress-value\">\n                            <i class=\"devicon-html5-plain\"></i>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-3 col-sm-3 col-3\">\n                      <div class=\"progress php\">\n                          <span class=\"progress-left\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <span class=\"progress-right\">\n                              <span class=\"progress-bar\"></span>\n                          </span>\n                          <div class=\"progress-value\">\n                             <i class=\"devicon-php-plain\"></i>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n            </div>\n\n          </div>\n          <!-- Skills -->\n      </div>\n      <div class=\"row links-responsive\">\n        <div class=\"col-lg-12 col-md-12 col-12\">\n          <div class=\"row text-center\">\n            <div class=\"col-lg-6 col-md-6 col-6\">\n              <a   href=\"../assets/pdf/cv_Gian_Eng.pdf\" target=\"_blank\" >Download CV-English</a>\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-6\">\n              <a   href=\"../assets/pdf/cv_Gian_Spa.pdf\" target=\"_blank\" >Download CV-Spanish</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"content-section bg-primary\">\n     <div class=\"page-header\">\n       <h1 class=\"timeline-header\">Education</h1>\n     </div>\n     <ul class=\"timeline\">\n       <li>\n         <div class=\"timeline-badge primary\">\n           <!-- <i class=\"fa fa-money\" aria-hidden=\"true\"></i> -->\n         </div>\n         <div class=\"timeline-panel\">\n           <div class=\"timeline-heading\">\n             <!-- <p class=\"num\" id=\"num1\">1</p> -->\n             <h4 class=\"timeline-title\">BS in Computer Engineering</h4>\n             <hr>\n           </div>\n           <div class=\"timeline-body\">\n             <p>Instituto Tecnológico de Chetumal</p>\n             <div class=\"col-lg-4 col-md-4 col-sm-4 offset-lg-4 offset-md-4 offset-sm-4\">\n              <p class=\"year\"> 2010-2014 </p>\n             </div>\n           </div>\n         </div>\n       </li>\n       <li class=\"timeline-inverted\">\n         <div class=\"timeline-badge primary\">\n           <!-- <i class=\"fa fa-database\" aria-hidden=\"true\"></i> -->\n         </div>\n         <div class=\"timeline-panel\">\n           <div class=\"timeline-heading\">\n             <h4 class=\"timeline-title\">MS in Computer Science</h4>\n             <hr>\n           </div>\n           <div class=\"timeline-body\">\n             <p>Universidad Autónoma de Yucatán</p>\n             <div class=\"col-lg-4 col-md-4 col-sm-4 offset-lg-4 offset-md-4 offset-sm-4\">\n              <p class=\"year\"> 2015-2017 </p>\n             </div>\n\n           </div>\n\n\n         </div>\n       </li>\n     </ul>\n\n   </section>\n    <!-- Services -->\n    <section class=\"content-section bg-light text-center\" id=\"services\">\n      <div class=\"container\">\n        <div class=\"content-section-heading\">\n          <!-- <h3 class=\"text-secondary mb-0\">Service</h3> -->\n          <h2 class=\"mb-5 text-secondary\">What I Offer</h2>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-4 col-md-6 mb-5 mb-lg-0\">\n            <span class=\"service-icon rounded-circle mx-auto mb-3\">\n              <i class=\"icon-screen-smartphone\"></i>\n            </span>\n            <h4>\n              <strong>Responsive</strong>\n            </h4>\n            <p class=\"text-faded mb-0 text-primary\">Websites will look great anywhere!</p>\n          </div>\n\n          <div class=\"col-lg-4 col-md-6 mb-5 mb-md-0\">\n            <span class=\"service-icon rounded-circle mx-auto mb-3\">\n              <i class=\"icon-like\"></i>\n            </span>\n            <h4>\n              <strong>Passion on every project</strong>\n            </h4>\n            <p class=\"text-faded mb-0 text-primary\">Will be there every\n              <i class=\"fa fa-heart\"></i>\n              step of the way</p>\n          </div>\n          <div class=\"col-lg-4 col-md-6\">\n            <span class=\"service-icon rounded-circle mx-auto mb-3\">\n              <i class=\"icon-mustache\"></i>\n            </span>\n            <h4>\n              <strong>Intelligent Solutions</strong>\n            </h4>\n            <p class=\"text-faded mb-0 text-primary\">A functional and Attractive application</p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Callout -->\n    <!-- <section class=\"container-skills bg-light\" id=\"skills\">\n      <div class=\"text-center\">\n\n      </div>\n    </section> -->\n\n    <!-- Portfolio -->\n    <section class=\"content-section bg-primary\" id=\"portfolio\">\n      <div class=\"container\">\n\n        <div class=\"content-section-heading text-center\">\n          <h2 class=\"text-secondary mb-0\">Portfolio</h2>\n          <!-- <h2 class=\"mb-5 text-white\">Recent Projects</h2> -->\n        </div>\n        <div class=\"row no-gutters\">\n          <div class=\"col-lg-6\">\n            <a class=\"portfolio-item\"  href=\"http://codigopenalcatalogo.com.s3-website-us-west-1.amazonaws.com/\" target=\"_blank\">\n              <span class=\"caption\">\n                <span class=\"caption-content\">\n                  <h2>Search for Laws</h2>\n                  <p class=\"mb-0\">Search for different titles and chapters from a the Criminal Code of Yucátan. Developed in Angular and GraphQl</p>\n                </span>\n              </span>\n              <img class=\"img-fluid\" src=\"assets/img/portfolio-1.png\" alt=\"\">\n            </a>\n          </div>\n          <div class=\"col-lg-6\">\n            <a class=\"portfolio-item\" href=\"http://www.deepdatat.com/\" target=\"_blank\">\n              <span class=\"caption\">\n                <span class=\"caption-content\">\n                  <h2>Deep Data Technologies</h2>\n                  <p class=\"mb-0\">A website developed for a Mexican Tech StartUp.</p>\n                  <!-- Button trigger modal -->\n\n                </span>\n              </span>\n              <img class=\"img-fluid\" src=\"assets/img/portfolio-2.png\" alt=\"\">\n            </a>\n          </div>\n          <div class=\"col-lg-6\">\n            <a class=\"portfolio-item\" data-toggle=\"exampleModal\" data-target=\"#exampleModal\">\n              <span class=\"caption\">\n                <span class=\"caption-content\">\n                  <h2>AImmonite</h2>\n                  <p class=\"mb-0\">Dashboard system to see data with interactive graphs.</p>\n                </span>\n              </span>\n              <img class=\"img-fluid\" src=\"assets/img/portfolio-3.png\" alt=\"\">\n            </a>\n          </div>\n          <div class=\"col-lg-6\">\n            <a class=\"portfolio-item\" href=\"#\">\n              <span class=\"caption\">\n                <span class=\"caption-content\">\n                  <h2>Wireless Network of Sensors </h2>\n                  <p class=\"mb-0\">A WSN was developed to monitor 4 tilapia ponds. It was developed using Django, Arduino and Xbee.</p>\n                </span>\n              </span>\n              <img class=\"img-fluid\" src=\"assets/img/portfolio-4.png\" alt=\"\">\n            </a>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Call to Action -->\n    <!-- <section class=\"content-section bg-primary text-white\">\n      <div class=\"container text-center\">\n        <h2 class=\"mb-4\">The buttons below are impossible to resist...</h2>\n        <a href=\"#\" class=\"btn btn-xl btn-light mr-4\">Click Me!</a>\n        <a href=\"#\" class=\"btn btn-xl btn-dark\">Look at Me!</a>\n      </div>\n    </section> -->\n\n    <!-- Map -->\n    <section id=\"contact\" class=\"bg-light\">\n\n      <div class=\"row\">\n        <div class=\"col-lg-6\" style=\"height:100;\">\n        <section id=\"contact\" class=\"map\">\n          <!-- <iframe width=\"100%\" height=\"100%\"frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed\"></iframe>\n          <br/>\n          <small>\n            <a href=\"https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A\"></a>\n          </small> -->\n          <!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n<agm-map   [zoom]=\"zoom\"\n  [disableDefaultUI]=\"false\"\n  [zoomControl]=\"false\"\n   [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>\n        </section>\n        </div>\n        <div class=\"col-lg-6 form\">\n          <div class=\"col-md-10 offset-md-1 form\">\n\n            <h3 class=\"text-secondary text-center\">Write to Me </h3>\n            <form [formGroup]=\"validateForm\" (ngSubmit)=\"register(validateForm)\" novalidate>\n               <div class=\"col-sm-12 pb-3\">\n                <alert></alert>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-6 pb-3\">\n                 <label class=\"label\" for=\"exampleFirst\"> <i class=\"fa fa-user\"></i> Name </label>\n                  <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"name\" [(ngModel)]=\"email.name\" >\n                  <errors [control]=\"validateForm.controls.name\"></errors>\n                </div>\n                <div class=\"col-sm-6 pb-3\">\n                  <label for=\"exampleLast\"> <i class=\"fa fa-envelope\"></i> Email</label>\n                  <input type=\"text\" name=\"email\" class=\"form-control\" formControlName=\"email\" [(ngModel)]=\"email.email\">\n                  <errors [control]=\"validateForm.controls.email\"></errors>\n                </div>\n                <div class=\"col-sm-12 pb-3\">\n                    <label for=\"exampleCity\"> <i class=\"fa fa-text-width\"></i> Subject</label>\n                    <input type=\"text\" class=\"form-control\" id=\"exampleCity\" formControlName=\"subject\" [(ngModel)]=\"email.subject\">\n                    <errors [control]=\"validateForm.controls.subject\"></errors>\n                </div>\n                <div class=\"col-sm-12 pb-3\">\n                 <label for=\"exampleMessage\"><i class=\"fa fa-align-justify\"></i> Message</label>\n                 <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" formControlName=\"text\"  [(ngModel)]=\"email.message\"></textarea>\n                 <errors [control]=\"validateForm.controls.text\"></errors>\n               </div>\n                <errors [control]=\"validateForm\"></errors>\n                <div class=\"col-lg-12\">\n                  <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"validateForm.invalid\">Submit</button>\n                </div>\n              </div>\n              </form>\n           </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Footer -->\n    <footer class=\"footer text-center bg-primary\">\n      <div class=\"container\">\n        <ul class=\"list-inline mb-5 spinning-icons\">\n          <li class=\"list-inline-item\">\n            <a class=\"social-link rounded-circle   mr-3\" href=\"https://www.facebook.com/gian.nestor\" target=\"_blank\">\n              <i class=\"icon-social-facebook\"></i>\n            </a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a class=\"social-link rounded-circle   mr-3\" href=\"https://twitter.com/giancuello26\" target=\"_blank\">\n              <i class=\"icon-social-twitter\"></i>\n            </a>\n          </li>\n          <!-- <li class=\"list-inline-item\">\n            <a class=\"social-link rounded-circle text-white mr-3\" href=\"#\">\n              <i class=\"icon-social-instagram\"></i>\n            </a>\n          </li> -->\n          <li class=\"list-inline-item\">\n            <a class=\"social-link rounded-circle  \" href=\"https://github.com/Gian26\" target=\"_blank\">\n              <i class=\"icon-social-github\"></i>\n            </a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a class=\"social-link rounded-circle mr-3\" href=\"https://www.linkedin.com/in/giancuello26/\" target=\"_blank\">\n              <i class=\"icon-social-linkedin\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <p>\n           Copyright &copy; cuellodev.com 2017\n      </p>\n\n     </footer>\n\n\n\n    <!-- Scroll to Top Button-->\n    <a class=\"scroll-to-top rounded js-scroll-trigger\" [ngx-scroll-to]=\"'page-top'\">\n      <i class=\"fa fa-angle-up\"></i>\n    </a>\n  </body>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validators_custom_validator_directive__ = __webpack_require__("../../../../../src/app/validators/custom-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_alert_service__ = __webpack_require__("../../../../../src/app/service/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_api_api_service__ = __webpack_require__("../../../../../src/app/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_email__ = __webpack_require__("../../../../../src/app/models/email.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = (function () {
    function AppComponent(alertService, apiService, form) {
        this.alertService = alertService;
        this.apiService = apiService;
        this.form = form;
        this.title = 'My first AGM project';
        this.lat = 20.9653526;
        this.lng = -89.661474;
        this.zoom = 13;
        this.STATIC_URL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].files;
        this.validateForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__validators_custom_validator_directive__["a" /* FormValidators */].vaildEmail]),
            'subject': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required),
            'text': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required),
        });
        this.email = new __WEBPACK_IMPORTED_MODULE_5__models_email__["a" /* Email */]();
    }
    AppComponent.prototype.register = function (validateForm) {
        var _this = this;
        this.success('Success!!');
        console.log(this.email);
        this.apiService.sendEmail(this.email).subscribe(function (data) {
            console.log("Success ", data);
            _this.success('Su solicitud se a enviado, espere una respuesta muy pronto!');
            validateForm.reset();
        }, function (err) {
            _this.error('Un dato en el formulario esta mal.Revise el formulario.');
        });
    };
    AppComponent.prototype.success = function (message) {
        this.alertService.clear();
        this.alertService.success(message);
    };
    AppComponent.prototype.error = function (message) {
        this.alertService.clear();
        this.alertService.error(message);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_4__service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("../../../../@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__errors_errors_component__ = __webpack_require__("../../../../../src/app/errors/errors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__alert_alert_component__ = __webpack_require__("../../../../../src/app/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_alert_service__ = __webpack_require__("../../../../../src/app/service/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_api_api_service__ = __webpack_require__("../../../../../src/app/service/api/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__alert_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_8__errors_errors_component__["a" /* ErrorsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__nicky_lenaers_ngx_scroll_to__["a" /* ScrollToModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCEiWiYqq9VSA3_xP-tygX_ATMCN1Q6gfU'
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__service_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_12__service_api_api_service__["a" /* ApiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/errors/errors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorsComponent = (function () {
    function ErrorsComponent() {
    }
    ErrorsComponent_1 = ErrorsComponent;
    ErrorsComponent.prototype.showErrors = function () {
        return this.control &&
            this.control.errors &&
            (this.control.dirty || this.control.touched);
    };
    ErrorsComponent.prototype.errors = function () {
        var _this = this;
        return Object.keys(this.control.errors)
            .map(function (field) { return _this.getMessage(field, _this.control.errors[field]); });
    };
    ErrorsComponent.prototype.getMessage = function (type, params) {
        return ErrorsComponent_1.errorMessages[type](params);
    };
    ErrorsComponent.errorMessages = {
        'required': function () { return 'This field is required'; },
        'minlength': function (params) { return 'The min number of characters is ' + params.requiredLength; },
        'maxlength': function (params) { return 'The max allowed number of characters is ' + params.requiredLength; },
        'pattern': function (params) { return 'The required pattern is: ' + params.requiredPattern; },
        'age': function (params) { return params.message; },
        'vaildEmail': function (params) { return params.message; }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ErrorsComponent.prototype, "control", void 0);
    ErrorsComponent = ErrorsComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'errors',
            template: "\n    <ul *ngIf=\"showErrors()\">\n      <li class=\"animated flipInX\"style=\"color: red\" *ngFor=\"let error of errors()\">{{error}}</li>\n    </ul>\n  ",
        })
    ], ErrorsComponent);
    return ErrorsComponent;
    var ErrorsComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/models/alert.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Alert */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertType; });
var Alert = (function () {
    function Alert() {
    }
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "../../../../../src/app/models/email.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Email; });
var Email = (function () {
    function Email() {
    }
    return Email;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  navbar works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_alert__ = __webpack_require__("../../../../../src/app/models/alert.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.keepAfterRouteChange = false;
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_2__models_alert__["a" /* AlertType */].Success, message, keepAfterRouteChange);
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_2__models_alert__["a" /* AlertType */].Error, message, keepAfterRouteChange);
    };
    AlertService.prototype.info = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_2__models_alert__["a" /* AlertType */].Info, message, keepAfterRouteChange);
    };
    AlertService.prototype.warn = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_2__models_alert__["a" /* AlertType */].Warning, message, keepAfterRouteChange);
    };
    AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    };
    AlertService.prototype.clear = function () {
        // clear alerts
        this.subject.next();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/service/api/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = (function () {
    // response:any;
    function ApiService(http) {
        this.http = http;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url;
    }
    //send email to deep Data
    ApiService.prototype.sendEmail = function (email) {
        var url = this.BASE_URL + "/send_email/";
        return this.http.post(url, email);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/validators/custom-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormValidators; });
var FormValidators = (function () {
    function FormValidators() {
    }
    FormValidators.vaildEmail = function (c) {
        var email = c.value;
        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        var isValid = true;
        var message = {
            'vaildEmail': {
                'message': 'Should be valid email.'
            }
        };
        if (reg.test(email)) {
            isValid = true;
        }
        else {
            isValid = false;
        }
        return isValid ? null : message;
    };
    FormValidators.age = function (c) {
        var num = Number(c.value);
        var isValid = !isNaN(num) && num >= 18 && num <= 85;
        var message = {
            'age': {
                'message': 'The age must be a valid number between 18 and 85' // Will changes the error defined in errors helper.
            }
        };
        return isValid ? null : message;
    };
    return FormValidators;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    url: '//127.0.0.1:8000',
    files: '',
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map