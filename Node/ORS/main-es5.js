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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-nav></app-nav>\n<app-foot></app-foot>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/college/college-list.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/college/college-list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid text-center\">\r\n\r\n  <div class=\"content-wrapper\" style=\"background-image: url(./assets/list.png); background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;width:100%;\r\n    height: 850px;\">\r\n    <div class=\"d-flex bg-primary text-white paddin \">\r\n      <h1 class=\"text-center container-fluid \">{{'College List'|translate}}</h1>\r\n    </div>\r\n    <br>\r\n    <div class=\"text-center row\">\r\n      <div class=\"col-2\"></div>\r\n      <form class=\"form-inline pt-3\">\r\n        <div class=\"form-group pr-3\">\r\n          <label for=\"name\" class=\"form-check-label pr-3 text-white paddin\">{{'College Name'|translate}} :</label>\r\n          <input type=\"text\" id=\"name\" class=\"form-control mx-sm-3\" placeholder=\"{{'Enter College Name'|translate}}\" name=\"name\"\r\n            [(ngModel)]=\"form.searchParams.name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"city\" class=\"form-check-label pr-3 text-white paddin\">{{'City'|translate}} :</label>\r\n          <input type=\"text\" id=\"city\" class=\"form-control mx-sm-3\" placeholder=\"{{'Enter College City'|translate}}\" name=\"city\"\r\n            [(ngModel)]=\"form.searchParams.city\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"phoneNo\" class=\"form-check-label pr-3 text-white paddin\">{{'Phone Number'|translate}} :</label>\r\n          <input type=\"text\" class=\"form-control mx-sm-3\" id=\"phoneNo\" placeholder=\"{{'Enter Phone Number'|translate}}\"\r\n            [(ngModel)]=\"form.searchParams.phoneNo\" name=\"phoneNo\">\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"submit()\">{{'Search'|translate}}</button>&nbsp;&nbsp;\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\r\n      </form>\r\n    </div>\r\n    <br>\r\n      <div class=\"col-sm-12\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\"> {{form.message}}</div>\r\n      <div class=\"col-sm-12\" *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success\"> {{form.message}}</div>\r\n      <br>\r\n    <div class=\"p-1\">\r\n      <div class=\"table-responsive\">\r\n    <table class=\"table table-bordered table-striped table-hover\">\r\n      <thead class=\"thead-light text-uppercase\">\r\n        <tr>\r\n          <th scope=\"col\">{{'S.No'|translate}}</th>\r\n          <th scope=\"col\">{{'Name'|translate}}</th>\r\n          <th scope=\"col\">{{'Address'|translate}}</th>\r\n          <th scope=\"col\">{{'City'|translate}}</th>\r\n          <th scope=\"col\">{{'State'|translate}}</th>\r\n          <th scope=\"col\">{{'Phone No'|translate}}</th>\r\n          <th>{{'Edit'|translate}} / {{'Delete'|translate}}</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr class=\"table-active text-white paddin\" *ngFor=\"let college of form.list; let i = index\">\r\n          <td>{{((form.pageNo-1)*10)+i+1}}</td>\r\n          <td>{{ college.name }}</td>\r\n          <td>{{ college.address }}</td>\r\n          <td> {{ college.city }} </td>\r\n          <td> {{ college.state }} </td>\r\n          <td> {{ college.phoneNo }} </td>\r\n          <td><a (click)=\"forward( '/college/' +  college.id)\" style=\"cursor: pointer;\">\r\n              <i class=\"fa fa-edit\" style=\"font-size:20px;color:yellow\"></i>\r\n            </a> / <a (click)=\"delete(college.id)\" style=\"cursor: pointer;\">\r\n              <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\r\n            </a>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"form-inline\">\r\n      <div class=\"col-4 text-left\">\r\n        <div *ngIf=\"form.pageNo>1; then successP else failP\"></div>\r\n        <ng-template #successP>\r\n          <button type=\"button\" (click)=\"previous()\" class=\"btn btn-success\">{{'previous'|translate}}</button>\r\n        </ng-template>\r\n        <ng-template #failP>\r\n          <button type=\"button\" (click)=\"previous()\" disabled\r\n            class=\"btn btn-secondary\">{{'previous'|translate}}</button>\r\n        </ng-template>\r\n      </div>\r\n      <div class=\"col-4 text-center\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"forward('/college/')\">{{'Add'|translate}}</button>\r\n      </div>\r\n      <div class=\"col-4 text-right\">\r\n        <div *ngIf=\"form.pageNo>1; then success else fail\"></div>\r\n        <div *ngIf=\"form.count>(form.pageSize*form.pageNo);then successN else failN\"></div>\r\n        <ng-template #successN>\r\n          <button type=\"button\" (click)=\"next()\" class=\"btn btn-success\">{{'next'|translate}}</button>\r\n        </ng-template>\r\n        <ng-template #failN>\r\n          <button type=\"button\" (click)=\"next()\" disabled class=\"btn btn-secondary\">{{'next'|translate}}</button>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n    </div>\r\n  </div>\r\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/college/college.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/college/college.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\" container-fluid row\">\n  <div class=\"row ml-3 text-center\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;width:100%;\n  height: 700px;bottom: 0%;\">\n\n<div class=\"col d-flex justify-content-center\">\n  <div class=\"col-sm-4 pt-5\">\n    <div class=\"card\">\n    \n    <div class=\"card-body\">\n        <div class=\"text-center\">\n            <div *ngIf=\"form.data.id>0; then Update else Add\"></div>\n            <ng-template #Add>\n                <h1>{{'Add College'|translate}}</h1>\n            </ng-template>\n            <ng-template #Update>\n                <h1>{{'Update College'|translate}}</h1>\n            </ng-template>\n        </div>\n\n        <div class=\"col-sm-12\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-success\"> {{form.message}}</div>\n        <div class=\"col-sm-12\" *ngIf=\"!form.error && form.message != null\" class=\"alert alert-danger\"> {{form.message}}</div>\n        \n      <form>        \n      \n        <div class=\"form-group row\">\n          <label for=\"name\" class=\"form-check-label\">{{'Name'|translate}}:<span class=\"text-danger\">*</span></label>\n          <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n          </div>\n          <input type=\"text\" [(ngModel)]=\"form.data.name\" name=\"name\" class=\"form-control\"\n                            placeholder=\"{{'Enter Name'|translate}}\" id=\"name\">\n          </div>\n          <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.name}}</span>\n          </div>\n              \n          <div class=\"form-group row\">\n            <label for=\"address\" class=\"form-check-label\">{{'Address'|translate}}:<span class=\"text-danger\">*</span></label>\n            <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n            </div>\n            <input type=\"text\" [(ngModel)]=\"form.data.address\" name=\"address\" class=\"form-control\"\n                              placeholder=\"{{'Enter Address'|translate}}\" id=\"address\">\n            </div>\n            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.address}}</span>\n            </div>\n\n            <div class=\"form-group row\">\n              <label for=\"city\" class=\"form-check-label\">{{'City'|translate}}:<span class=\"text-danger\">*</span></label>\n              <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n              <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n              </div>\n              <input type=\"text\" [(ngModel)]=\"form.data.city\" name=\"city\" class=\"form-control\"\n                                placeholder=\"{{'Enter City'|translate}}\" id=\"city\">\n              </div>\n              <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.city}}</span>\n              </div>\n\n              <div class=\"form-group row\">\n                <label for=\"state\" class=\"form-check-label\">{{'State'|translate}}:<span class=\"text-danger\">*</span></label>\n                <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n                </div>\n                <input type=\"text\" [(ngModel)]=\"form.data.state\" name=\"state\" class=\"form-control\"\n                                  placeholder=\"{{'Enter State'|translate}}\" id=\"state\">\n                </div>\n                <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.state}}</span>\n                </div>\n\n            <div class=\"form-group row\">\n              <label for=\"phoneNo\" class=\"form-check-label\">{{'Phone Number'|translate}}:<span class=\"text-danger\">*</span></label>\n              <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n              <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i></div>\n              </div>\n              <input type=\"text\" [(ngModel)]=\"form.data.phoneNo\" name=\"phoneNo\" class=\"form-control\"\n                                placeholder=\"{{'Enter Phone Number'|translate}}\" id=\"phoneNo\">\n              </div>\n              <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.phoneNo}}</span>\n              </div>\n          \n\n                    <div class=\"form-inline\">\n                    <div class=\"text-center\">\n                    <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                    <ng-template #add>\n                    <button (click)=\"submit()\" class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\n                    \n                    <button (click)=\"reset()\" class=\"btn btn-secondary mr-2\" >{{'Reset'|translate}}</button>\n                    </ng-template>\n                    <ng-template #update>\n                    <button (click)=\"submit()\"class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\n                    <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel'|translate}}</button>\n                    </ng-template>\n                    </div>\n                    </div>\n            \n            \n          </form>\n    </div>\n    </div>\n  </div>\n</div>\n  </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/course/course-list.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/course/course-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid text-center\">\n  <div class=\"content-wrapper\" style=\"padding-top: 0%; background-image: url(./assets/list.png); background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;width:100%;\n    height: 850px;bottom: 0%;\">\n    <div class=\"d-flex bg-primary text-white paddin \">\n      <h1 class=\"text-center container-fluid \">{{'Course List'|translate}}</h1>\n    </div>\n\n    <div class=\"text-center row\">\n      <div class=\"col-2\"></div>\n      <form class=\"form-inline pt-3  \">\n        <div class=\"form-group  pr-3\">\n          <label for=\"courseName\" class=\"form-check-label pr-3 text-white paddin\">{{'Name'|translate}} : </label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter Course Name'|translate}}\" name=\"courseName\"\n            [(ngModel)]=\"form.searchParams.courseName\" id=\"courseName\">\n        </div>\n        <div class=\"form-group  pr-3\">\n          <label for=\"courseDescription\" class=\"form-check-label pr-3 text-white paddin\">{{'Description'|translate}} : </label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter Course Description'|translate}}\" name=\"courseDescription\"\n            [(ngModel)]=\"form.searchParams.courseDescription\" id=\"fName\">\n        </div>\n\n        <div class=\"form-group pr-3\">\n          <label for=\"courseDuration\" class=\"form-check-label pr-3 text-white paddin\">{{'Course Duration'|translate}}:</label>\n           <select [(ngModel)]=\"form.data.courseDuration\" name=\"courseDuration\" class=\"form-control\" id=\"courseDuration\">\n            <option [value]=default [disabled]=\"true\" selected disabled>{{'Select Course Duration'|translate}}</option>\n            <option value=\"1 years\">1 Year</option>\n            <option value=\"2 years\">2 Year</option>\n            <option value=\"3 years\">3 Year</option>\n            <option value=\"4 years\">4 Year</option>\n            <option value=\"5 years\">5 Year</option>\n          </select>\n          <span class=\"text-danger ml-auto mb-auto\"> {{form.inputerror.courseDuration}} </span>\n        </div>\n \n\n        <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search'|translate}}</button>&nbsp;&nbsp;\n        <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\n      </form>\n    </div>\n    <br>\n      <div class=\"col-sm-12\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-success\"> {{form.message}}</div>\n      <div class=\"col-sm-12\" *ngIf=\"!form.error && form.message != null\" class=\"alert alert-danger\"> {{form.message}}</div>\n      <br>\n\n    <div class=\"p-1\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-striped table-hover\">\n          \n          <thead class=\"thead-light text-uppercase\">\n            <tr>\n              <th>{{'S.No'|translate}}</th>\n              <th>{{'Course Name'|translate}}</th>\n              <th>{{'Course Description'|translate}}</th>\n              <th>{{'Course Duration'|translate}}</th>\n              <th>{{'Edit'|translate}} / {{'Delete'|translate}}</th>\n            </tr>\n          </thead>\n\n          <tbody>\n            <tr class=\"text-white paddin\" *ngFor=\"let course of form.list; let i = index\">\n              <td> {{((form.pageNo-1)*10)+i+1}} </td>\n              <td> {{ course.courseName }} </td>\n              <td> {{ course.courseDescription }} </td>\n              <td> {{ course.courseDuration }} </td>\n              <td>\n                <a (click)=\"forward( '/course/' +  course.id)\" style=\"cursor: pointer;\">\n                  <i class=\"fa fa-edit\" style=\"font-size:20px;color:yellow\"></i>\n                </a> / <a (click)=\"delete(course.id)\" style=\"cursor: pointer;\">\n                  <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\n                </a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div class=\" col-12 form-inline mb-0  \">\n          <div class=\"col-4 text-left \">\n            <div *ngIf=\"form.pageNo>1; then sus else fail\"></div>\n            <ng-template #sus>\n              <button (click)=\"previous()\" class=\"btn btn-success\">{{'previous'|translate}}</button>\n            </ng-template>\n            <ng-template #fail>\n              <button (click)=\"previous()\" disabled class=\"btn btn-light \">{{'previous'|translate}}</button>\n            </ng-template>\n          </div>\n          <div class=\"col-4 text-center \">\n            <button class=\"btn-primary btn \" (click)=\"forward('/course/')\">{{'Add'|translate}}</button>\n          </div>\n          <div class=\"col-4 text-right \">\n            <div *ngIf=\"form.count>(form.pageSize*form.pageNo);then susN else failN\"></div>\n            <ng-template #susN>\n              <button (click)=\"next()\" class=\"btn btn-success\">{{'next'|translate}}</button>\n            </ng-template>\n            <ng-template #failN>\n              <button (click)=\"next()\" disabled class=\"btn btn-light\">{{'next'|translate}}</button>\n            </ng-template>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br><br>\n  </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/course/course.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/course/course.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\" container-fluid row\">\n    <div class=\"row ml-3\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 700px;bottom: 0%;\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4 pt-5\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"text-center mb-4\">\n                        <div *ngIf=\"form.data.id>0; then hUpdate else hAdd\"></div>\n                        <ng-template #hAdd>\n                            <h1>{{'Add Course'|translate}}</h1>\n                        </ng-template>\n                        <ng-template #hUpdate>\n                            <h1>{{'Update Course'|translate}}</h1>\n                        </ng-template>\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-success\">\n                        {{form.message}}\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-danger\">\n                        {{form.message}}\n                    </div>\n                    <form>\n                        <div class=\"form-group row\">\n                            <label for=\"courseName\" class=\"form-check-label\">{{'Course Name'|translate}}:\n                                <span class=\"text-danger\">*</span></label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-graduation-cap grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.courseName\" name=\"courseName\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Course Name'|translate}}\" id=\"courseName\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.courseName}}\n                            </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"courseDescription\" class=\"form-check-label\">{{'Course Description'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.courseDescription\" name=\"courseDescription\"\n                                    class=\"form-control\" placeholder=\"{{'Enter Course Description'|translate}}\" id=\"courseDescription\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.courseDescription}} </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"courseDuration\" class=\"form-check-label\">{{'Course Duration'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-clock-o grey-text\"></i> </div>\n                                </div>\n                                <select [(ngModel)]=\"form.data.courseDuration\" name=\"courseDuration\"\n                                    class=\"form-control\" id=\"courseDuration\">\n                                    <option [value]=default [disabled]=\"true\" selected disabled>{{'Select Course Duration'|translate}}\n                                    </option>\n                                    <option value=\"1 years\">1 Year</option>\n                                    <option value=\"2 years\">2 Year</option>\n                                    <option value=\"3 years\">3 Year</option>\n                                    <option value=\"4 years\">4 Year</option>\n                                    <option value=\"5 years\">5 Year</option>\n                                </select>\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.courseDuration}} </span>\n                        </div>\n\n\n                        <div class=\"form-inline\">\n                            <div class=\"col-4\"></div>\n                            <div class=\"text-center\">\n                                <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                                <ng-template #add>\n                                    <button (click)=\"submit()\" class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\n                                    <button (click)=\"reset()\" class=\"btn btn-secondary mr-2\" >{{'Reset'|translate}}</button>\n                                </ng-template>\n                                <ng-template #update>\n                                    <button (click)=\"submit()\" class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\n                                    <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel'|translate}}</button>\n                                </ng-template>\n                            </div>\n                        </div>\n\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\"></div>\n    </div>\n    \n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid row \" >\n    <div class=\"content-wrapper row ml-3\" style=\"padding-top: 0%; background-image: url(./assets/list.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 650px;bottom: 0%;\" >\n    <div class=\"col-sm-12\">\n        <h1 class=\"text-danger text-center \" style=\"margin-top: 17%;\">{{'Welcome To Online Result System'|translate}}</h1>\n    </div>\n    </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/faculty/faculty-list.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/faculty/faculty-list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid text-center\">\r\n  <div class=\"content-wrapper\" style=\"padding-top: 0%; background-image: url(./assets/list.png); background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;width:100%;\r\n    height: 1100px;bottom: 0%;\">\r\n\r\n        <div class=\"d-flex bg-primary text-white paddin \">\r\n          <h1 class=\"text-center container-fluid \">{{'Faculty List'|translate}}</h1>\r\n        </div>\r\n  \r\n      <div class=\"text-center row\">\r\n        <div class=\"col-2\"></div>\r\n        <form class=\"form-inline pt-3  \">\r\n\r\n          <div class=\"form-group pr-3\">\r\n            <label for=\"email\" class=\"form-check-label pr-3 text-white paddin\">{{'Email Id'|translate}} : </label>\r\n            <input type=\"text\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"{{'Enter Email ID'|translate}}\"\r\n              [(ngModel)]=\"form.searchParams.email\">\r\n          </div>\r\n\r\n          <div class=\"form-group  pr-3\">\r\n            <label for=\"firstName\" class=\"form-check-label pr-3 text-white paddin\">{{'First Name'|translate}} : </label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter First Name'|translate}}\" name=\"firstName\"\r\n              [(ngModel)]=\"form.searchParams.firstName\" id=\"firstName\">\r\n          </div>\r\n       \r\n        <div class=\"form-group pr-3\">\r\n          <label for=\"collegeId\" class=\"form-check-label pr-3 text-white paddin\">{{'College'|translate}} :</label>&nbsp;\r\n          <select class=\"form-control\" name=\"collegeId\" [(ngModel)]=\"form.searchParams.collegeId\" id=\"collegeId\">\r\n            <option [value]=0 [disabled]=\"true\" selected disabled>{{'Select Faculty College'|translate}}</option>\r\n            <option *ngFor=\"let opt of form.preload.collegelist\" [value]=\"opt.id\">{{opt.name}}</option>\r\n          </select>\r\n        </div>\r\n\r\n  \r\n          <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search'|translate}}</button>&nbsp;&nbsp;\r\n          <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\r\n        </form>\r\n      </div>\r\n      <br>\r\n      <div class=\"col-sm-12\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\"> {{form.message}}</div>\r\n      <div class=\"col-sm-12\" *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success\"> {{form.message}}</div>\r\n      <br>\r\n  \r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            \r\n            <thead class=\"thead-light text-uppercase\">\r\n            <tr>\r\n               <th>{{'S.No'|translate}}</th>\r\n              <th>{{'First Name'|translate}}</th>\r\n              <th>{{'Last Name'|translate}}</th>\r\n              <th>{{'Email Id'|translate}}</th>\r\n              <th>{{'Mobile No'|translate}}</th>\r\n              <th>{{'Address'|translate}}</th>\r\n              <th>{{'Gender'|translate}}</th>\r\n              <th>{{'College'|translate}}</th>\r\n              <th>{{'Course'|translate}}</th>\r\n              <th>{{'Subject'|translate}}</th>\r\n              <th>{{'DOB'|translate}}</th>\r\n               <th>{{'Edit'|translate}} / {{'Delete'|translate}}</th>\r\n              </tr>\r\n            </thead>\r\n  \r\n            <tbody>\r\n              <tr class=\"text-white paddin\" *ngFor=\"let faculty of form.list; let i = index\">\r\n                  <td> {{((form.pageNo-1)*10)+i+1}} </td>\r\n            <td> {{ faculty.firstName }} </td>\r\n            <td> {{ faculty.lastName }} </td>\r\n            <td> {{ faculty.email }} </td>\r\n            <td> {{ faculty.mobileNo }} </td>\r\n            <td> {{ faculty.address }}</td>\r\n            <td> {{ faculty.gender }} </td>\r\n            <td> {{ faculty.collegeName }} </td>\r\n            <td> {{ faculty.courseName }} </td>\r\n            <td> {{ faculty.subjectName }} </td>\r\n            <td> {{ faculty.dob | date : 'dd-MM-yyyy'}} </td>\r\n            <td>\r\n\r\n                  <a (click)=\"forward( '/faculty/' +  faculty.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit\" style=\"font-size:20px;color:yellow\"></i>\r\n                  </a> / <a (click)=\"delete(faculty.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <form class=\"form-inline \">\r\n        <div class=\"col-4 text-left \">\r\n          <div *ngIf=\"form.pageNo>1; then sus else fail\"></div>\r\n          <ng-template #sus>\r\n            <button (click)=\"previous()\" class=\"btn btn-success\">{{'previous'|translate}}</button>\r\n          </ng-template>\r\n          <ng-template #fail>\r\n            <button (click)=\"previous()\" disabled class=\"btn btn-light \">{{'previous'|translate}}</button>\r\n          </ng-template>\r\n        </div>\r\n        <div class=\" col-4 text-center \">\r\n          <button class=\"btn-primary btn \" (click)=\"forward('/faculty/')\">{{'Add'|translate}}</button>\r\n        </div>\r\n        <div class=\" col-4 text-right \">\r\n          <div *ngIf=\"form.count>(form.pageSize*form.pageNo);then susN else failN\"></div>\r\n          <ng-template #susN>\r\n            <button (click)=\"next()\" class=\"btn btn-success\">{{'next'|translate}}</button>\r\n          </ng-template>\r\n          <ng-template #failN>\r\n            <button (click)=\"next()\" disabled class=\"btn btn-light\">{{'next'|translate}}</button>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n      \r\n      <br><br>\r\n      </div>\r\n    </body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/faculty/faculty.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/faculty/faculty.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\" container-fluid row\">\n  <div class=\"row ml-3 text-center\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;width:100%;\n  height: 950px;\">\n\n<div class=\"col d-flex justify-content-center\">\n    \n    <div class=\"card\">\n    \n    <div class=\"card-body\">\n        <div class=\"text-center\">\n            <div *ngIf=\"form.data.id>0; then Update else Add\"></div>\n            <ng-template #Add>\n                <h1>{{'Add Faculty'|translate}}</h1>\n            </ng-template>\n            <ng-template #Update>\n                <h1>{{'Update Faculty'|translate}}</h1>\n            </ng-template>\n        </div>\n\n        <div class=\"col-sm-12\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">{{form.message}}</div>\n        <div class=\"col-sm-12\" *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success\"> {{form.message}}</div>\n        \n      <form>        \n      <div class=\"form-group row\">\n      <label for=\"firstName\" class=\"form-check-label\">{{'First Name'|translate}}:<span class=\"text-danger\">*</span></label>\n      <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n      <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n      </div>\n      <input type=\"text\" [(ngModel)]=\"form.data.firstName\" name=\"firstName\" class=\"form-control\"\n                        placeholder=\"{{'Enter First Name'|translate}}\" id=\"firstName\">\n      </div>\n      <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.firstName}}</span>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"lastName\" class=\"form-check-label\">{{'Last Name'|translate}}:<span class=\"text-danger\">*</span></label>\n        <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n        <div class=\"input-group-text\"><i class=\"fa fa-user-o grey-text\"></i></div>\n        </div>\n        <input type=\"text\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\n                          placeholder=\"{{'Enter Last Name'|translate}}\" name=\"lastName\" id=\"lastName\">\n        </div>\n        <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.lastName}}</span>\n        </div>\n\n        <div class=\"form-group row\">\n          <label for=\"Email\" class=\"form-check-label\">{{'Email'|translate}}:<span class=\"text-danger\">*</span></label>\n          <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i></div>\n          </div>\n          <input type=\"text\" [(ngModel)]=\"form.data.email\" name=\"email\" class=\"form-control\"\n                            placeholder=\"{{'Enter Email ID'|translate}}\" id=\"email\">\n          </div>\n          <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.email}}</span>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"mobileNo\" class=\"form-check-label\">{{'Mobile Number'|translate}}:<span class=\"text-danger\">*</span></label>\n            <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i></div>\n            </div>\n            <input type=\"text\" [(ngModel)]=\"form.data.mobileNo\" name=\"mobileNo\" class=\"form-control\"\n                              placeholder=\"{{'Enter Mobile Number'|translate}}\" id=\"mobileNo\">\n            </div>\n            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.mobileNo}}</span>\n            </div>\n\n            <div class=\"form-group row\">\n              <label for=\"address\" class=\"form-check-label\">{{'Address'|translate}}:<span class=\"text-danger\">*</span></label>\n              <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n              <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n              </div>\n              <input type=\"text\" [(ngModel)]=\"form.data.address\" name=\"address\" class=\"form-control\"\n                                placeholder=\"{{'Enter Address'|translate}}\" id=\"address\">\n              </div>\n              <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.address}}</span>\n              </div>\n\n              <div class=\"form-group row\">\n                <label for=\"gender\" class=\"form-check-label\">{{'Gender'|translate}}:<span class=\"text-danger\">*</span></label>\n                <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\"><i class=\"fa fa-venus-mars grey-text\"></i></div>\n                </div>\n                <select [(ngModel)]=\"form.data.gender\" name=\"gender\" class=\"form-control\" id=\"gender\">\n                <option [value]=default [disabled]=\"true\" selected disabled>{{'Select Gender'|translate}}</option>\n                <option value=\"Male\">Male</option>\n                <option value=\"Female\">Female</option>\n                <option value=\"Transgender\">Transgender</option>\n                </select>\n                </div>\n                <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.gender}}</span>\n                </div>\n\n                <div class=\"form-group row \">\n                  <label for=\"collegeId\" class=\"form-check-label \">{{'College Name'|translate}} :<span\n                          class=\"text-danger\">*</span>\n                  </label>\n                  <div class=\"input-group\">\n                      <div class=\"input-group-prepend\">\n                          <div class=\"input-group-text\"><i class=\"fa fa-university grey-text\"></i> </div>\n                      </div>\n                      <select class=\"form-control\" name=\"collegeId\"\n                                    [(ngModel)]=\"form.data.collegeId\" id=\"collegeId\">\n                                    <option [value]=default [disabled]=\"true\" selected disabled>{{'Select College Name'|translate}}\n                                    </option>\n                                    <option *ngFor=\"let opt of form.preload.collegelist\" [value]=\"opt.id\">{{opt.name}}\n                                    </option>\n                                </select>\n                      \n                  </div>\n                  <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.collegeId}}</span>\n                  </div>\n\n                  <div class=\"form-group row \">\n                    <label for=\"courseId\" class=\"form-check-label \">{{'Course Name'|translate}} :<span\n                            class=\"text-danger\">*</span>\n                    </label>\n                    <div class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                            <div class=\"input-group-text\"><i class=\"fa fa-graduation-cap grey-text\"></i> </div>\n                        </div>\n                        <select class=\"form-control\" *ngIf=\"form.preload.courseList!=null\" name=\"courseId\"\n                            [(ngModel)]=\"form.data.courseId\" id=\"courseId\">\n                            <option [value]=default [disabled]=\"true\" selected disabled>{{'Select Course Name'|translate}}\n                            </option>\n                            <option *ngFor=\"let opt of form.preload.courseList\" [value]=\"opt.id\">{{opt.courseName}}\n                            </option>\n                        </select>\n                    </div>\n                    <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.courseId}}</span>\n                    </div>\n\n                    <div class=\"form-group row \">\n                      <label for=\"subjectId\" class=\"form-check-label \">{{'Subject Name'|translate}} :<span\n                              class=\"text-danger\">*</span>\n                      </label>\n                      <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                              <div class=\"input-group-text\"><i class=\"fa fa-book grey-text\"></i> </div>\n                          </div>\n                          <select class=\"form-control\" *ngIf=\"form.preload.subjectList!=null\" name=\"subjectId\"\n                              [(ngModel)]=\"form.data.subjectId\" id=\"subjectId\">\n                              <option [value]=default [disabled]=\"true\" selected disabled>{{'Select Subject Name'|translate}}</option>\n                              <option *ngFor=\"let opt of form.preload.subjectList\" [value]=\"opt.id\">{{opt.subjectName}}\n                              </option>\n                          </select>\n                      </div>\n                    <span class=\"text-danger mr-auto mb-auto \" id=\"subjectId\"> {{form.inputerror.subjectId}}</span>\n                    </div>\n\n                    <div class=\"form-group row \">\n                    <label for=\"datepicker\" class=\"form-check-label\">{{'Date of birth'|translate}}:<span class=\"text-danger\">*</span></label>\n                    <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i> </div>\n                    </div>\n                    <input type=\"date\" id=\"datepicker\" name=\"dob\" [(ngModel)]=\"form.data.dob\"\n                     class=\"form-control\" placeholder=\"{{'Enter Date of Birth'|translate}}\">\n                    </div>\n                    <span class=\"text-danger mr-auto mb-auto \">{{form.inputerror.dob}}</span>\n                    </div>\n                    \n                    <div class=\"form-inline\">\n                    <div class=\"text-center\">\n                    <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                    <ng-template #add>\n                    <button (click)=\"submit()\" class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\n                    <button (click)=\"reset()\" class=\"btn btn-secondary mr-2\" >{{'Reset'|translate}}</button>\n                    </ng-template>\n                    <ng-template #update>\n                    <button (click)=\"submit()\"class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\n                    <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel'|translate}}</button>\n                    </ng-template>\n                    </div>\n                    </div>\n            \n            \n          </form>\n    </div>\n    </div>\n  </div>\n  \n  </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/foot/foot.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/foot/foot.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\" style=\" position: fixed;\nleft: 0;\nbottom: 0;\nwidth: 100%;\">\n    <div class=\"container-fluid d-flex bg-secondary justify-content-center \">\n        <h5 class=\"text-center text-white float-center \"> {{'Copyright'|translate}} &copy; {{'Rays Technologies 2021'|translate}}</h5>\n    </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/forget-password.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/forget-password.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\" container-fluid row\">\r\n    <div class=\"row ml-3 \" style=\"background-image: url(./assets/form.jpg); background-repeat: no-repeat;\r\n    background-attachment: fixed;background-size: cover;width:100%;height: 700px;\">\r\n        <div class=\"col-sm-4\"></div>\r\n        <div class=\"col-sm-4 pt-5 mt-5\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"text-center mb-4\">\r\n                        <h1>{{'Forgot Password'|translate}}</h1>\r\n                    </div>\r\n                    <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\r\n                        {{form.message}}\r\n                    </div>\r\n                    <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\r\n                        {{form.message}}\r\n                    </div>\r\n                    <form>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"login\" class=\"form-check-label\">{{'Email Id'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <span class=\"text-danger ml-auto mb-auto\"> {{form.inputerror.login}} </span>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"text\" [(ngModel)]=\"form.data.login\" name=\"login\" class=\"form-control\"\r\n                                    placeholder=\"{{'Enter Registered Email ID'|translate}}\" id=\"login\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-inline\">\r\n                            <div class=\"col-4\"></div>\r\n                            <div class=\"text-center\">\r\n                                <button (click)=\"forget()\" class=\"btn btn-success\">{{'GO'|translate}}</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"row container-fluid\">\n    <div class=\" row ml-3 text-center \" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;width:100%;\n    height: 700px;\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4  \" style=\"margin-top: 7%;\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h1 class=\"text-center\" >{{'Login'|translate}}</h1>\n                    <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\n                        {{form.message}}\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\n                        {{form.message}}\n                    </div>\n                    <form class=\"form-signin\">\n                        <div class=\"form-group row\">\n                            <label for=\"login\" class=\"form-check-label\">{{'Login ID'|translate}}<span\n                                    class=\"text-danger\">*</span></label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                                </div>\n                                <input id=\"login\" type=\"text\" [(ngModel)]=\"form.data.login\" name=\"login\"\n                                    placeholder=\"{{'Enter Login ID'|translate}}\" class=\"form-control\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto\" id=\"login\"> {{form.inputerror.login}} </span>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"password\" class=\"form-check-label\">{{'Password'|translate}}<span\n                                    class=\"text-danger\">*</span></label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\n                                </div>\n                                <input id=\"password\" type=\"password\" [(ngModel)]=\"form.data.password\" name=\"password\"\n                                    placeholder=\"{{'Enter Password'|translate}}\" class=\"form-control\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto\" id=\"password\"> {{form.inputerror.password}}\n                            </span>\n                        </div>\n                        <button (click)=\"signIn()\" class=\"btn btn-success mr-2\">{{'Sign In'|translate}}</button>\n                        <button (click)=\"signUp()\" class=\"btn btn-primary mr-2\">{{'Sign Up'|translate}}</button>\n                        <button (click)=\"reset()\" class=\"btn btn-secondary mr-2\" >{{'Reset'|translate}}</button>\n                        <br>\n                        <a routerLink=\"/forgotpassword\">{{'Forgot my password'|translate}}</a>\n\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/user-registration.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/user-registration.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\" container-fluid row\">\r\n    <div class=\" row ml-3\" style=\"background-image: url(./assets/form.jpg); background-repeat: no-repeat;\r\n    background-attachment: fixed;background-size: cover;width:100%;height: 1100px;\">\r\n        <div class=\"col-sm-4\"></div>\r\n        <div class=\"col-sm-4 pt-5\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"text-center mb-4\">\r\n                        <h1>{{'User Registration'|translate}}</h1>\r\n                    </div>\r\n                    <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\r\n                        {{form.message}}\r\n                    </div>\r\n                    <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\r\n                        {{form.message}}\r\n                    </div>\r\n                    <form>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"fName\" class=\"form-check-label\">{{'First Name'|translate}}:\r\n                                <span class=\"text-danger\">*</span></label>\r\n\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"text\" [(ngModel)]=\"form.data.firstName\" name=\"firstName\"\r\n                                    class=\"form-control\" placeholder=\"{{'Enter First Name'|translate}}\" id=\"fName\">\r\n                            </div>\r\n                            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.firstName}}\r\n                            </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"lName\" class=\"form-check-label\">{{'Last Name'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user-o grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"text\" [(ngModel)]=\"form.data.lastName\" name=\"lastName\" class=\"form-control\"\r\n                                    placeholder=\"{{'Enter Last Name'|translate}}\" id=\"lName\">\r\n                            </div>\r\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.lastName}} </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"mNo\" class=\"form-check-label\">{{'Mobile No'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-mobile grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"text\" [(ngModel)]=\"form.data.mobileNo\" name=\"mobileNo\" class=\"form-control\"\r\n                                    placeholder=\"{{'Enter Mobile Number'|translate}}\" id=\"mNo\">\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.mobileNo}} </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"login\" class=\"form-check-label\">{{'Login'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                                </div>\r\n                                <div *ngIf=\"form.data.id>0; then lUpdate else lAdd\"></div>\r\n                                <ng-template #lUpdate>\r\n                                    <input type=\"text\" [(ngModel)]=\"form.data.login\" name=\"login\" class=\"form-control\"\r\n                                        placeholder=\"{{'Enter Email'|translate}}\" id=\"login\" disabled>\r\n                                </ng-template>\r\n                                <ng-template #lAdd><input type=\"text\" [(ngModel)]=\"form.data.login\" name=\"login\"\r\n                                        class=\"form-control\" placeholder=\"{{'Enter Email ID'|translate}}\" id=\"login\">\r\n                                </ng-template>\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.login}} </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"password\" class=\"form-check-label\">{{'Password'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"password\" [(ngModel)]=\"form.data.password\" name=\"password\"\r\n                                    class=\"form-control\" placeholder=\"{{'Enter Password'|translate}}\" id=\"password\">\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto \"> {{form.inputerror.password}} </span>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"confirmPassword\" class=\"form-check-label\">{{'Confirm Password'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"password\" [(ngModel)]=\"form.data.confirmPassword\" name=\"confirmPassword\"\r\n                                    class=\"form-control\" placeholder=\"{{'Confirm Password'|translate}}\" id=\"confirmPassword\">\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto \"> {{form.inputerror.confirmPassword}} </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"gender\" class=\"form-check-label\">{{'Gender'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-venus-double grey-text\"></i> </div>\r\n                                </div>\r\n                                <select [(ngModel)]=\"form.data.gender\" name=\"gender\" class=\"form-control\" id=\"gender\">\r\n                                    <option [value]=\"default\" [disabled]=\"true\" selected disabled>{{'Select Gender'|translate}}</option>\r\n                                    <option [value]=\"Male\">Male</option>\r\n                                    <option [value]=\"Female\">Female</option>\r\n                                </select>\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.gender}} </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row \">\r\n                            <label for=\"datepicker\" class=\"form-check-label\">{{'Date of birth'|translate}}:<span\r\n                                    class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-birthday-cake grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"date\" id=\"datepicker\" name=\"dob\" [(ngModel)]=\"form.data.dob\"\r\n                                    class=\"form-control\" placeholder=\"{{'Enter Date of Birth'|translate}}\">\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto \">{{form.inputerror.dob}}</span>\r\n                        </div>\r\n\r\n                        <div class=\"form-inline\">\r\n                            <div class=\"col-4\"></div>\r\n                            <div class=\"text-center\">\r\n                                <button (click)=\"submit()\" class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\r\n                                <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\"></div>\r\n    </div>\r\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/marksheet/get-marksheet.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/marksheet/get-marksheet.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid\">\r\n    <div class=\"\" style=\"padding-top: 0%; background-image: url(./assets/list.png); background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;width:100%;\r\n    height: 850px;bottom: 0%;\">\r\n        <div class=\"d-flex bg-primary text-white paddin \">\r\n            <h1 class=\"text-center container-fluid \">{{'Get Marksheet'|translate}}</h1>\r\n        </div>\r\n        <br>\r\n\r\n        <form class=\"form-inline\">\r\n            <div class=\"col-4\"></div>\r\n            <div class=\"form-group  pr-3\">\r\n                <label for=\"rollNo\" class=\"form-check-label pr-3 text-white paddin\">{{'Roll No'|translate}} : </label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter RollNo'|translate}}\" name=\"rollNo\"\r\n                    [(ngModel)]=\"form.rollNo\" id=\"rollNo\">\r\n            </div>\r\n            <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search'|translate}}</button>&nbsp;&nbsp;\r\n            <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\r\n        </form>\r\n        <div class=\"\" *ngIf=\"this.flag\">\r\n\r\n            <div class=\"p-1\">\r\n                <div class=\"table-responsive \">\r\n                    <table class=\"table table-bordered\">\r\n                        <thead class=\"thread-light \">\r\n                            <tr class=\"text-white paddin\">\r\n                                <th>{{'College Name'|translate}}: {{form.data.college.name}}</th>\r\n                            </tr>\r\n                            <tr class=\"text-white paddin\">{{'Address'|translate}}: {{form.data.college.address}} {{form.data.college.city}}\r\n                                ,{{form.data.college.state}} {{'Phone No'|translate}}:- {{form.data.college.phoneNo}}</tr>\r\n                            <tr class=\"text-white paddin\">{{'Student Name'|translate}}: {{form.data.student.firstName}} {{form.data.student.lastName}}</tr>\r\n\r\n                        </thead>\r\n                        <thead class=\"thread-light text-uppercase \">\r\n                            <tr class=\"text-white paddin\">\r\n                                <td>{{'Subject'|translate}}</td>\r\n                                <td>{{'Maximum Marks'|translate}}</td>\r\n                                <td>{{'Passing Marks'|translate}}</td>\r\n                                <td>{{'Marks Obtained'|translate}}</td>\r\n                            </tr>\r\n                            <tr class=\"text-white paddin\">\r\n                                <td>{{'Physics'|translate}}</td>\r\n                                <td>100</td>\r\n                                <td>35</td>\r\n                                <td>{{form.data.marksheet.physics}}</td>\r\n                            </tr>\r\n                            <tr class=\"text-white paddin\">\r\n                                <td>{{'Chemistry'|translate}}</td>\r\n                                <td>100</td>\r\n                                <td>35</td>\r\n                                <td>{{form.data.marksheet.chemistry}}</td>\r\n                            </tr>\r\n                            <tr class=\"text-white paddin\">\r\n                                <td>{{'Maths'|translate}}</td>\r\n                                <td>100</td>\r\n                                <td>35</td>\r\n                                <td>{{form.data.marksheet.maths}}</td>\r\n                            </tr>\r\n                            \r\n                            <tr class=\"text-white paddin\">\r\n                                <td>{{'Total'|translate}}:</td>\r\n                                \r\n                                <td> {{\r\n                                    (form.data.marksheet.physics+form.data.marksheet.maths+form.data.marksheet.chemistry)\r\n                                    }}\r\n                                    /300</td>\r\n                                <td>{{'Percentage'|translate}}</td>\r\n                                <td> {{\r\n                                    (form.data.marksheet.physics+form.data.marksheet.maths+form.data.marksheet.chemistry)/3\r\n                                    | number:'1.0-2' }}\r\n                                </td>\r\n                            </tr>\r\n                        </thead>\r\n\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/marksheet/marksheet-list.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/marksheet/marksheet-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid text-center\">\r\n    <div class=\"content-wrapper\" style=\"padding-top: 0%; background-image: url(./assets/list.png); background-repeat: no-repeat;\r\n      background-attachment: fixed;\r\n      background-size: cover;width:100%;\r\n      height: 850px;bottom: 0%;\">\r\n    <div class=\"d-flex bg-primary text-white paddin \">\r\n      <h1 class=\"text-center container-fluid \">{{'Marksheet List'|translate}}</h1>\r\n    </div>\r\n    <div class=\"text-center row\">\r\n      <div class=\"col-3\"></div>\r\n      <form class=\"form-inline pt-3  \">\r\n        <div class=\"form-group  pr-3\">\r\n          <label for=\"studentId\" class=\"form-check-label text-white paddin\">{{'Student Name'|translate}} :</label>\r\n          <select class=\"form-control\" name=\"studentId\" [(ngModel)]=\"form.searchParams.studentId\"\r\n              id=\"studentId\">\r\n              <option [value]=0 [disabled]=\"true\" selected disabled>{{'Select Student Name'|translate}}</option>\r\n              <option *ngFor=\"let opt of form.preload.studentList\" [value]=\"opt.id\">{{opt.firstName}}</option>\r\n              </select>\r\n        </div>\r\n\r\n        <div class=\"form-group pr-3\">\r\n          <label for=\"rollNo\" class=\"form-check-label pr-3 text-white paddin\">{{'Roll No'|translate}} : </label>\r\n          <input type=\"text\" class=\"form-control\" name=\"rollNo\" id=\"rollNo\" placeholder=\"{{'Enter College City'|translate}}\"\r\n            [(ngModel)]=\"form.searchParams.rollNo\">\r\n        </div>\r\n  \r\n  \r\n        <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search'|translate}}</button>&nbsp;&nbsp;\r\n        <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\r\n      </form>\r\n    </div>\r\n    <br>\r\n    <div class=\"col-sm-12\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\"> {{form.message}}</div>\r\n    <div class=\"col-sm-12\" *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success\"> {{form.message}}</div>\r\n    <br>\r\n    <div class=\"p-1\">\r\n      <div class=\"table-responsive-sm\">\r\n        <table class=\"table table-bordered table-striped table-hover\">\r\n          <thead class=\"thead-light text-uppercase\">\r\n            <tr>\r\n              <th>{{'S.No'|translate}}</th>\r\n              <th>{{'Roll No'|translate}}</th>\r\n              <th>{{'Student Name'|translate}}</th>\r\n              <th>{{'Physics'|translate}}</th>\r\n              <th>{{'Maths'|translate}}</th>\r\n              <th>{{'Chemistry'|translate}}</th>\r\n              <th>{{'Total'|translate}}</th>\r\n              <th>{{'Percentage'|translate}}</th>\r\n              <th>{{'Result'|translate}}</th>\r\n              <th>{{'Edit'|translate}} / {{'Delete'|translate}}</th>\r\n            </tr>\r\n          </thead>\r\n  \r\n          <tbody>\r\n            <tr class=\"text-white paddin\" *ngFor=\"let marksheet of form.list; let i = index\">\r\n              <td> {{((form.pageNo-1)*10)+i+1}} </td>\r\n              <td> {{ marksheet.rollNo }} </td>\r\n              <td> {{ marksheet.name }} </td>\r\n              <td> {{ marksheet.physics }} </td>\r\n              <td> {{ marksheet.maths }} </td>\r\n              <td> {{ marksheet.chemistry }} </td>\r\n              <td> {{ (marksheet.physics+marksheet.maths+marksheet.chemistry) }} /300</td>\r\n              <td> {{ (marksheet.physics+marksheet.maths+marksheet.chemistry)/3 | number:'1.0-2' }} </td>\r\n              <td>\r\n                <div class=\"\" *ngIf=\"result(marksheet.physics,marksheet.maths,marksheet.chemistry);then pass else fail \">\r\n                </div>\r\n                <ng-template #pass>\r\n                  <div class=\"text-success font-weight-bold\"> Pass </div>\r\n                </ng-template>\r\n                <ng-template #fail>\r\n                  <div class=\"text-danger font-weight-bold \"> Fail </div>\r\n                </ng-template>\r\n              </td>\r\n              <td><a (click)=\"forward( '/marksheet/' +  marksheet.id)\" style=\"cursor: pointer;\">\r\n                  <i class=\"fa fa-edit\" style=\"font-size:20px;color:yellow\"></i>\r\n                </a> / <a (click)=\"delete(marksheet.id)\" style=\"cursor: pointer;\">\r\n                  <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\r\n                </a>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <form class=\"form-inline \">\r\n      <div class=\"col-4 text-left \">\r\n        <div *ngIf=\"form.pageNo>1; then sus else fail\"></div>\r\n        <ng-template #sus>\r\n          <button (click)=\"previous()\" class=\"btn btn-success\">{{'previous'|translate}}</button>\r\n        </ng-template>\r\n        <ng-template #fail>\r\n          <button (click)=\"previous()\" disabled class=\"btn btn-light \">{{'previous'|translate}}</button>\r\n        </ng-template>\r\n      </div>\r\n      <div class=\" col-4 text-center \">\r\n        <button class=\"btn-primary btn \" (click)=\"forward('/marksheet/')\">{{'Add'|translate}}</button>\r\n      </div>\r\n      <div class=\" col-4 text-right \">\r\n        <div *ngIf=\"form.count>(form.pageSize*form.pageNo);then susN else failN\"></div>\r\n        <ng-template #susN>\r\n          <button (click)=\"next()\" class=\"btn btn-success\">{{'next'|translate}}</button>\r\n        </ng-template>\r\n        <ng-template #failN>\r\n          <button (click)=\"next()\" disabled class=\"btn btn-light\">{{'next'|translate}}</button>\r\n        </ng-template>\r\n      </div>\r\n    </form>\r\n    \r\n    <br><br>\r\n    </div>\r\n  </body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/marksheet/marksheet.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/marksheet/marksheet.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\" container-fluid row\">\n    <div class=\"row ml-3 text-center\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;width:100%;\n    height: 700px;bottom: 0%;\">\n  \n  <div class=\"col d-flex justify-content-center\">\n    <div class=\"col-sm-4 pt-5\">\n      <div class=\"card\">\n      \n      <div class=\"card-body\">\n          <div class=\"text-center\">\n              <div *ngIf=\"form.data.id>0; then Update else Add\"></div>\n              <ng-template #Add>\n                  <h1>{{'Add Marksheet'|translate}}</h1>\n              </ng-template>\n              <ng-template #Update>\n                  <h1>{{'Update Marksheet'|translate}}</h1>\n              </ng-template>\n          </div>\n  \n          <div class=\"col-sm-12\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\"> {{form.message}}</div>\n          <div class=\"col-sm-12\" *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success\"> {{form.message}}</div>\n          \n        <form>        \n        \n            <div class=\"form-group row\">\n                <label for=\"rollNo\" class=\"form-check-label\">{{'Roll No'|translate}}:<span class=\"text-danger\">*</span></label>\n                <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\"><i class=\"fa fa-id-card grey-text\"></i></div>\n                </div>\n                <input type=\"text\" [(ngModel)]=\"form.data.rollNo\" name=\"rollNo\" class=\"form-control\" [value]=\"form.data.rollNo\"\n                                  placeholder=\"{{'Enter RollNo'|translate}}[00XX00]\" id=\"rollNo\">\n                </div>\n                <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.rollNo}}</span>\n                </div>\n                \n                <div class=\"form-group row\">\n                    <label for=\"physics\" class=\"form-check-label\">{{'Physics'|translate}}:<span class=\"text-danger\">*</span></label>\n                    <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\"><i class=\"fa fa-sticky-note grey-text\"></i> </div>\n                    </div>\n                    <input type=\"text\" [(ngModel)]=\"form.data.physics\" name=\"physics\" class=\"form-control\"\n                                      placeholder=\"{{'Enter Physics Marks'|translate}}\" id=\"physics\">\n                    </div>\n                    <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.physics}}</span>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"maths\" class=\"form-check-label\">{{'Maths'|translate}}:<span class=\"text-danger\">*</span></label>\n                        <div class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                        <div class=\"input-group-text\"><i class=\"fa fa-sticky-note grey-text\"></i></div>\n                        </div>\n                        <input type=\"text\" [(ngModel)]=\"form.data.maths\" name=\"maths\" class=\"form-control\"\n                                          placeholder=\"{{'Enter Maths Marks'|translate}}\" id=\"maths\">\n                        </div>\n                        <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.maths}}</span>\n                        </div>\n            \n                        <div class=\"form-group row\">\n                          <label for=\"chemistry\" class=\"form-check-label\">{{'Chemistry'|translate}}:<span class=\"text-danger\">*</span></label>\n                          <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                          <div class=\"input-group-text\"><i class=\"fa fa-sticky-note grey-text\"></i></div>\n                          </div>\n                          <input type=\"text\" [(ngModel)]=\"form.data.chemistry\" name=\"chemistry\" class=\"form-control\"\n                                            placeholder=\"{{'Enter Chemistry Marks'|translate}}\" id=\"chemistry\">\n                          </div>\n                          <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.chemistry}}</span>\n                          </div>\n\n                          <div class=\"form-group row \">\n                            <label for=\"studentId\" class=\"form-check-label \">{{'Student Name'|translate}} :<span\n                                    class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                                </div>\n                                <select class=\"form-control\" name=\"studentId\" [(ngModel)]=\"form.data.studentId\"\n                                    id=\"studentId\">\n                                    <option [value]=default [disabled]=\"true\" selected disabled>{{'Select Student Name'|translate}}\n                                    </option>\n                                    <option *ngFor=\"let opt of form.preload.studentList\" [value]=\"opt.id\">{{opt.firstName}}\n                                    </option>\n                                </select>\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto \" id=\"studentId\"> {{form.inputerror.studentId}}\n                            </span>\n                        </div>\n                      \n                      <div class=\"form-inline\">\n                      <div class=\"text-center\">\n                      <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                      <ng-template #add>\n                      <button (click)=\"submit()\" class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\n                      \n                      <button (click)=\"reset()\" class=\"btn btn-secondary mr-2\" >{{'Reset'|translate}}</button>\n                      </ng-template>\n                      <ng-template #update>\n                      <button (click)=\"submit()\"class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\n                      <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel'|translate}}</button>\n                      </ng-template>\n                      </div>\n                      </div>\n              \n              \n            </form>\n      </div>\n      </div>\n    </div>\n  </div>\n    </div>\n  </body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/marksheet/merit-list.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/marksheet/merit-list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid text-center\">\r\n    <div class=\"\" style=\"padding-top: 0%; background-image: url(./assets/list.png); background-repeat: no-repeat;\r\n      background-attachment: fixed;\r\n      background-size: cover;width:100%;\r\n      height: 850px;bottom: 0%;\">\r\n      <div class=\"d-flex bg-primary text-white \">\r\n        <h1 class=\"text-center container-fluid \">{{'Marksheet Merit List'|translate}}</h1>\r\n      </div>\r\n      \r\n    <br>\r\n      <div class=\"col-6  \" *ngIf=\"form.error\" class=\"alert alert-danger\"> {{form.message}}</div>\r\n      <div class=\"col-6 \" *ngIf=\"!form.error && (form.message != null)\"\r\n        class=\"alert alert-success\">\r\n        {{form.message}}</div>\r\n    \r\n      <br>\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th>{{'S.No'|translate}}</th>\r\n                <th>{{'Roll No'|translate}}</th>\r\n                <th>{{'Student Name'|translate}}</th>\r\n                <th>{{'Physics'|translate}}</th>\r\n                <th>{{'Maths'|translate}}</th>\r\n                <th>{{'Chemistry'|translate}}</th>\r\n                <th>{{'Total'|translate}}</th>\r\n                <th>{{'Percentage'|translate}}</th>\r\n                <th>{{'Result'|translate}}</th>\r\n              </tr>\r\n            </thead>\r\n    \r\n            <tbody>\r\n              <tr class=\"table-active text-white paddin\" *ngFor=\"let marksheet of form.list; let i = index\">\r\n                <td> {{1+i}} </td>\r\n                <td> {{ marksheet.rollNo }} </td>\r\n                <td> {{ marksheet.name }} </td>\r\n                <td> {{ marksheet.physics }} </td>\r\n                <td> {{ marksheet.maths }} </td>\r\n                <td> {{ marksheet.chemistry }} </td>\r\n                <td> {{ (marksheet.physics+marksheet.maths+marksheet.chemistry) }} /300</td>\r\n                <td> {{ (marksheet.physics+marksheet.maths+marksheet.chemistry)/3 | number:'1.0-2' }} </td>\r\n                <td> <div class=\"\" *ngIf=\"result(marksheet.physics,marksheet.maths,marksheet.chemistry);then pass else fail \" ></div>\r\n                  <ng-template #pass ><div class=\"text-success font-weight-bold\"> Pass </div></ng-template>\r\n                  <ng-template #fail ><div class=\"text-danger font-weight-bold \"> Fail </div></ng-template>\r\n                </td>\r\n                \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      \r\n      <br><br>\r\n      </div>\r\n    </body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--LOG IN START-->\n<div *ngIf=\"checkLogin()\">\n  <nav class=\"navbar navbar-expand-lg bg-secondary navbar-secondary \">\n\n    <a class=\"navbar-brand\" href=\"/ORSui\"><img class=\"image-responsive\" src='./assets/logo.png' height=\"30px\"></a>\n\n    <button class=\"navbar-toggler navbar-light \" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n      aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse bg-secondary \" id=\"navbarNav\">\n      <select #locale (change)='changeLocale(locale.value)' class=\"bg-secondary text-light\">\n        <option class=\"text-light\" value=\"en\">English</option>\n        <option class=\"text-light\" value=\"hi\">{{'Hindi' | translate }}</option>\n      </select>\n      <ul class=\"nav navbar-nav \" style=\"list-style-type: none;\">\n        <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n          <button type=\"button\" class=\"btn btn-secondary  dropdown-toggle\"\n            data-toggle=\"dropdown\">{{'User'|translate}}</button>\n          <div class=\"dropdown-menu\">\n            <a routerLink=\"/user\" class=\"dropdown-item\"><i class=\"fa fa-user-plus\"></i> {{'Add User'|translate}}</a>\n            <a routerLink=\"/userlist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'User List'|translate}}</a>\n          </div>\n\n        </li>\n\n        <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n          <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n            data-toggle=\"dropdown\">{{'Role'|translate}}</button>\n          <div class=\"dropdown-menu\">\n            <a routerLink=\"/role\" class=\"dropdown-item\"><i class=\"fa fa-user-circle\"></i>{{'Add Role'|translate}}</a>\n            <a routerLink=\"/rolelist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'Role List'|translate}}</a>\n          </div>\n        </li>\n\n        <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n          <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n            data-toggle=\"dropdown\">{{'College'|translate}}</button>\n          <div class=\"dropdown-menu\">\n            <a routerLink=\"/college\" class=\"dropdown-item\"><i class=\"fa fa-university\"></i> {{'Add\n              College'|translate}}</a>\n            <a routerLink=\"/collegelist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'College\n              List'|translate}}</a>\n          </div>\n        </li>\n\n        <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n          <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n            data-toggle=\"dropdown\">{{'Student'|translate}}</button>\n          <div class=\"dropdown-menu\">\n            <a routerLink=\"/student\" class=\"dropdown-item\"><i class=\"fa fa-users\"></i> {{'Add Student'|translate}}</a>\n            <a routerLink=\"/studentlist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'Student\n              List'|translate}}</a>\n          </div>\n        </li>\n\n        <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n          <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n            data-toggle=\"dropdown\">{{'Course'|translate}}</button>\n          <div class=\"dropdown-menu\">\n            <a routerLink=\"/course\" class=\"dropdown-item\"><i class=\"fa fa-plus\"></i> {{'Add Course'|translate}}</a>\n            <a routerLink=\"/courselist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'Course\n              List'|translate}}</a>\n          </div>\n        </li>\n\n        <li class=\" nav-item dropdown\" style=\"list-style-type: none;\">\n          <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n            data-toggle=\"dropdown\">{{'Subject'|translate}}</button>\n          <div class=\"dropdown-menu\">\n            <a routerLink=\"/subject\" class=\"dropdown-item\"><i class=\"fa fa-plus\"></i> {{'Add Subject'|translate}}</a>\n            <a routerLink=\"/subjectlist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'Subject\n              List'|translate}}</a>\n          </div>\n        </li>\n\n        <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n          <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n            data-toggle=\"dropdown\">{{'Marksheet'|translate}}</button>\n          <div class=\"dropdown-menu\">\n            <a routerLink=\"/marksheet\" class=\"dropdown-item\"><i class=\"fa fa-plus\"></i> {{'Add\n              Marksheet'|translate}}</a>\n            <a routerLink=\"/marksheetlist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'Marksheet\n              List'|translate}}</a>\n            <a routerLink=\"/meritlist\" class=\"dropdown-item\"><i class=\"fa fa-list-ol\"></i> {{'Merit\n              List'|translate}}</a>\n            <a routerLink=\"/getmarksheet\" class=\"dropdown-item\"><i class=\"fa fa-id-card-o\"></i> {{'Get\n              Marksheet'|translate}}</a>\n          </div>\n        </li>\n\n        <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n          <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n            data-toggle=\"dropdown\">{{'Faculty'|translate}}</button>\n          <div class=\"dropdown-menu\">\n            <a routerLink=\"/faculty\" class=\"dropdown-item\"><i class=\"fa fa-user-circle\"></i> {{'Add\n              Faculty'|translate}}</a>\n            <a routerLink=\"/facultylist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'Faculty\n              List'|translate}}</a>\n          </div>\n        </li>\n\n        <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n          <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n            data-toggle=\"dropdown\">{{'TimeTable'|translate}}</button>\n          <div class=\"dropdown-menu\">\n            <a routerLink=\"/timetable\" class=\"dropdown-item\"><i class=\"fa fa-clock-o\"></i> {{'Add\n              TimeTable'|translate}}</a>\n            <a routerLink=\"/timetablelist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'TimeTable\n              List'|translate}}</a>\n          </div>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav ml-auto\" style=\"list-style-type: none;\">\n        <li class=\"nav-item dropdown ml-auto \" style=\"list-style-type: none;\">\n          <button type=\"button\" class=\"btn btn-secondary dropdown-toggle ml-auto\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-user-circle\" style=\"font-size: 19px;\"> </i> {{firstName}}\n            ({{roleName}})</button>\n          <div class=\"dropdown-menu dropdown-menu-right  ml-auto\">\n            <a class=\"dropdown-item \" routerLink=\"/myprofile\"><i class=\"fa fa-user\"></i> {{'My Profile' |\n              translate}}</a>\n            <a class=\"dropdown-item \" routerLink=\"/changepassword\"><i class=\"fa fa-key\"></i> {{'Change Password' |\n              translate}}</a>\n            <a class=\"dropdown-item \" (click)=\"logout();\"><i class=\"fa fa-sign-out\"></i> {{'Sign Out' |\n              translate}}</a>\n          </div>\n        </li>\n\n      </ul>\n    </div>\n  </nav>\n</div>\n\n<!--LOG IN END-->\n\n<!--LOG OUT START-->\n\n<div *ngIf=\"!checkLogin();\">\n  <nav class=\"navbar navbar-expand-lg bg-secondary navbar-secondary \">\n\n    <a class=\"navbar-brand\" href=\"/ORSui\"><img class=\"image-responsive\" src='./assets/logo.png' height=\"30px\"></a>\n\n    <button class=\"navbar-toggler navbar-light \" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n      aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse bg-secondary \" id=\"navbarNav\">\n      <select #locale (change)='changeLocale(locale.value)' class=\"bg-secondary text-light\">\n        <option class=\"text-light\" value=\"en\">English</option>\n        <option class=\"text-light\" value=\"hi\">{{'Hindi' | translate }}</option>\n      </select>\n      <ul class=\"nav navbar-nav ml-auto\" style=\"list-style-type: none;\">\n        <li class=\"nav-item dropdown ml-auto\" style=\"list-style-type: none;\">\n          <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\"><i\n              class=\"fa fa-user-circle\" style=\"font-size: 19px;\"> </i> {{'Hi,Guest'|translate}}</button>\n          <div class=\"dropdown-menu dropdown-menu-right ml-auto\">\n\n            <a class=\"dropdown-item\" routerLink=\"/login\"><i class=\"fa fa-sign-in\"></i> &nbsp;{{'Login'|translate}}</a>\n            <a class=\"dropdown-item\" routerLink=\"/signup\"><i class=\"fa fa-users\"></i> &nbsp;{{'User Registration'|translate}}</a>\n          </div>\n        <li>\n      </ul>\n    </div>\n  </nav>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid row \">\r\n    <div class=\"row ml-3\" style=\"padding-top: 0%; background-image: url(../../assets/list.jpg); background-repeat: no-repeat;\r\n    background-attachment: fixed;background-size: cover;width:100%;height: 650px;bottom: 0%;\">\r\n        <div class=\"col-sm-4\"></div>\r\n        <div class=\"col-sm-4 text-center\" style=\"margin-top: 15%;\">\r\n            <h1 class=\"text-center  alert alert-danger\" >{{'Page Not Found'|translate}},<br> {{'Enter valid\r\n                URL'|translate}}</h1>\r\n                \r\n                <button class=\"btn btn-primary \" (click)=\"forward('/dashboard')\" >{{'Back'|translate}}</button>\r\n    \r\n            </div>\r\n        </div>\r\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/role/role-list.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/role/role-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid text-center\">\r\n    <div class=\"content-wrapper\" style=\"padding-top: 0%; background-image: url(./assets/list.png); background-repeat: no-repeat;\r\n      background-attachment: fixed;\r\n      background-size: cover;width:100%;\r\n      height: 850px;bottom: 0%;\">\r\n      <div class=\"d-flex bg-primary text-white paddin \">\r\n        <h1 class=\"text-center container-fluid \">{{'Role List'|translate}}</h1>\r\n      </div>\r\n  \r\n      <div class=\"text-center row\">\r\n        <div class=\"col-2\"></div>\r\n        <form class=\"form-inline pt-3  \">\r\n          <div class=\"form-group  pr-3\">\r\n            <label for=\"name\" class=\"form-check-label pr-3 text-white paddin\">{{'Name'|translate}} : </label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter Role Name'|translate}}\" name=\"name\"\r\n                    [(ngModel)]=\"form.searchParams.name\" id=\"name\">\r\n            </div>\r\n          <div class=\"form-group  pr-3\">\r\n            <label for=\"description\" class=\"form-check-label pr-3 text-white paddin\">{{'Description'|translate}} : </label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter Role Description'|translate}}\" name=\"description\"\r\n              [(ngModel)]=\"form.searchParams.description\" id=\"description\">\r\n          </div>\r\n  \r\n            \r\n  \r\n          <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search'|translate}}</button>&nbsp;&nbsp;\r\n          <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\r\n        </form>\r\n      </div>\r\n      <br>\r\n      <div class=\"col-sm-12\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-success\"> {{form.message}}</div>\r\n      <div class=\"col-sm-12\" *ngIf=\"!form.error && form.message != null\" class=\"alert alert-danger\"> {{form.message}}</div>\r\n      <br>\r\n  \r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            \r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th scope=\"col\">{{'S.No'|translate}}</th>\r\n                <th scope=\"col\">{{'Name'|translate}}</th>\r\n                <th scope=\"col\">{{'Description'|translate}}</th>\r\n                        <th>{{'Edit'|translate}}/{{'Delete'|translate}}</th>\r\n              </tr>\r\n            </thead>\r\n  \r\n            <tbody>\r\n              <tr class=\"table-active text-white paddin\" *ngFor=\"let role of form.list; let i = index\">\r\n                <td>{{((form.pageNo-1)*10)+i+1}}</td>\r\n                <td>{{role.name}}</td>\r\n                <td>{{role.description}}</td>\r\n                <td>\r\n                  <div *ngIf=\"role.id==1;then read else write\"></div>\r\n                            <ng-template #read><i class=\"fa fa-edit\" style=\"font-size:20px;color:yellow\"></i> / <i\r\n                                    class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i></ng-template>\r\n                            <ng-template #write><a (click)=\"forward( '/role/' +  role.id)\" style=\"cursor: pointer;\">\r\n                                    <i class=\"fa fa-edit\" style=\"font-size:20px;color:yellow\"></i>\r\n                                </a> / <a (click)=\"delete(role.id)\" style=\"cursor: pointer;\">\r\n                                    <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\r\n                                </a></ng-template>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n  \r\n          <div class=\" col-12 form-inline mb-0  \">\r\n            <div class=\"col-4 text-left \">\r\n              <div *ngIf=\"form.pageNo>1; then sus else fail\"></div>\r\n              <ng-template #sus>\r\n                <button (click)=\"previous()\" class=\"btn btn-success\">{{'previous'|translate}}</button>\r\n              </ng-template>\r\n              <ng-template #fail>\r\n                <button (click)=\"previous()\" disabled class=\"btn btn-light \">{{'previous'|translate}}</button>\r\n              </ng-template>\r\n            </div>\r\n            <div class=\"col-4 text-center \">\r\n              <button class=\"btn-primary btn \" (click)=\"forward('/role/')\">{{'Add'|translate}}</button>\r\n            </div>\r\n            <div class=\"col-4 text-right \">\r\n              <div *ngIf=\"form.count>(form.pageSize*form.pageNo);then susN else failN\"></div>\r\n              <ng-template #susN>\r\n                <button (click)=\"next()\" class=\"btn btn-success\">{{'next'|translate}}</button>\r\n              </ng-template>\r\n              <ng-template #failN>\r\n                <button (click)=\"next()\" disabled class=\"btn btn-light\">{{'next'|translate}}</button>\r\n              </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br><br>\r\n    </div>\r\n  </body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/role/role.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/role/role.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\" container-fluid row\">\n    <div class=\"row ml-3 text-center\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;width:100%;\n    height: 700px;bottom: 0%;\">\n  \n  <div class=\"col d-flex justify-content-center\">\n    <div class=\"col-sm-4 pt-5\">\n      <div class=\"card\">\n      \n      <div class=\"card-body\">\n          <div class=\"text-center\">\n              <div *ngIf=\"form.data.id>0; then Update else Add\"></div>\n              <ng-template #Add>\n                  <h1>{{'Add Role'|translate}}</h1>\n              </ng-template>\n              <ng-template #Update>\n                  <h1>{{'Update Role'|translate}}</h1>\n              </ng-template>\n          </div>\n  \n          <div class=\"col-sm-12\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-success\"> {{form.message}}</div>\n          <div class=\"col-sm-12\" *ngIf=\"!form.error && form.message != null\" class=\"alert alert-danger\"> {{form.message}}</div>\n          \n        <form>        \n        \n            <div class=\"form-group row\">\n                <label for=\"rName\" class=\"form-check-label\">{{'Role Name'|translate}}:<span class=\"text-danger\">*</span></label>\n                <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" [(ngModel)]=\"form.data.name\" name=\"name\" class=\"form-control\"\n                        placeholder=\"{{'Enter Role Name'|translate}}\" id=\"rName\" [value]=\"form.data.name\">\n                </div>\n                <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.name}}</span>\n                </div>\n                \n                <div class=\"form-group row\">\n                    <label for=\"description\" class=\"form-check-label\">{{'Role Description'|translate}}:\n                        <span class=\"text-danger\">*</span></label>\n                    <div class=\"input-group\">\n                     <div class=\"input-group-prepend\">\n                            <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\n                        </div>\n                        <input type=\"text\" [(ngModel)]=\"form.data.description\" name=\"description\"\n                            class=\"form-control\" placeholder=\"{{'Enter Role Description'|translate}}\" id=\"description\"\n                            [value]=\"form.data.description\">\n                    </div>\n                    <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.description}}</span>\n                </div>\n\n\n                      <div class=\"form-inline\">\n                      <div class=\"text-center\">\n                      <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                      <ng-template #add>\n                      <button (click)=\"submit()\" class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\n                      <button (click)=\"reset()\" class=\"btn btn-secondary mr-2\" >{{'Reset'|translate}}</button>\n                      </ng-template>\n                      <ng-template #update>\n                      <button (click)=\"submit()\"class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\n                      <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel'|translate}}</button>\n                      </ng-template>\n                      </div>\n                      </div>\n              \n              \n            </form>\n      </div>\n      </div>\n    </div>\n  </div>\n    </div>\n  </body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/student/student-list.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student/student-list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid text-center\">\r\n    <div class=\"content-wrapper\" style=\"padding-top: 0%; background-image: url(./assets/list.png); background-repeat: no-repeat;\r\n      background-attachment: fixed;\r\n      background-size: cover;width:100%;\r\n      height: 850px;bottom: 0%;\">\r\n      <div class=\"d-flex bg-primary text-white paddin \">\r\n        <h1 class=\"text-center container-fluid \">{{'Student List'|translate}}</h1>\r\n      </div>\r\n  \r\n      <div class=\"text-center row\">\r\n        <div class=\"col-2\"></div>\r\n        <form class=\"form-inline pt-3  \">\r\n\r\n          <div class=\"form-group  pr-3\">\r\n            <label for=\"firstName\" class=\"form-check-label pr-3 text-white paddin\">{{'First Name'|translate}} : </label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter First Name'|translate}}\" name=\"firstName\"\r\n              [(ngModel)]=\"form.searchParams.firstName\" id=\"firstName\">\r\n          </div>\r\n\r\n          <div class=\"form-group  pr-3\">\r\n            <label for=\"email\" class=\"form-check-label pr-3 text-white paddin\">{{'Email Id'|translate}} : </label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter Email ID'|translate}}\" name=\"email\"\r\n              [(ngModel)]=\"form.searchParams.email\" id=\"email\">\r\n          </div>\r\n  \r\n          <div class=\"form-group pr-3\">\r\n            <label for=\"collegeId\" class=\"form-check-label pr-3 text-white paddin\">{{'College'|translate}} :</label>&nbsp;\r\n            <select class=\"form-control\" name=\"collegeId\" [(ngModel)]=\"form.searchParams.collegeId\" id=\"role\">\r\n              <option [value]=0 [disabled]=\"true\" selected disabled>{{'Select College Name'|translate}}</option>\r\n              <option *ngFor=\"let opt of form.preload.collegeList\" [value]=\"opt.id\">{{opt.name}}</option>\r\n            </select>\r\n          </div>\r\n     \r\n          <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search'|translate}}</button>&nbsp;&nbsp;\r\n          <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\r\n        </form>\r\n      </div>\r\n      <br>\r\n      <div class=\"col-sm-12\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\"> {{form.message}}</div>\r\n      <div class=\"col-sm-12\" *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success\"> {{form.message}}</div>\r\n      <br>\r\n  \r\n         <div class=\"p-1\">\r\n              <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered table-striped table-hover\">\r\n              <thead class=\"thead-light text-uppercase\">\r\n                <tr>\r\n                  <th scope=\"col\">{{'S.No'|translate}}</th>\r\n                  <th scope=\"col\">{{'First Name'|translate}}</th>\r\n                  <th scope=\"col\">{{'Last Name'|translate}}</th>\r\n                  <th scope=\"col\">{{'DOB'|translate}}</th>\r\n                  <th scope=\"col\">{{'Mobile No'|translate}}</th>\r\n                  <th scope=\"col\">{{'Email'|translate}}</th>\r\n                  <th scope=\"col\">{{'College'|translate}}</th>\r\n                          \r\n                  <th>{{'Edit'|translate}} / {{'Delete'|translate}}</th>\r\n                </tr>\r\n              </thead>\r\n       \r\n\r\n            <tbody>\r\n              <tr class=\"table-active text-white paddin\" *ngFor=\"let student of form.list; let i = index\">\r\n                <td>{{((form.pageNo-1)*10)+i+1}}</td>\r\n                <td>{{ student.firstName }}</td>\r\n                <td>{{ student.lastName }}</td>\r\n                <td> {{ student.dob | date : 'dd-MM-yyyy'}} </td>\r\n                <td> {{ student.mobileNo }} </td>\r\n                <td> {{ student.email }} </td>\r\n                <td> {{ student.collegeName }} </td>\r\n\r\n                <td><a (click)=\"forward( '/student/' +  student.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit\" style=\"font-size:20px;color:yellow\"></i>\r\n                  </a> / <a (click)=\"delete(student.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n\r\n\r\n          </table>\r\n  \r\n          <div class=\" col-12 form-inline mb-0  \">\r\n            <div class=\"col-4 text-left \">\r\n              <div *ngIf=\"form.pageNo>1; then sus else fail\"></div>\r\n              <ng-template #sus>\r\n                <button (click)=\"previous()\" class=\"btn btn-success\">{{'previous'|translate}}</button>\r\n              </ng-template>\r\n              <ng-template #fail>\r\n                <button (click)=\"previous()\" disabled class=\"btn btn-light \">{{'previous'|translate}}</button>\r\n              </ng-template>\r\n            </div>\r\n            <div class=\"col-4 text-center \">\r\n              <button class=\"btn-primary btn \" (click)=\"forward('/student/')\">{{'Add'|translate}}</button>\r\n            </div>\r\n            <div class=\"col-4 text-right \">\r\n              <div *ngIf=\"form.count>(form.pageSize*form.pageNo);then susN else failN\"></div>\r\n              <ng-template #susN>\r\n                <button (click)=\"next()\" class=\"btn btn-success\">{{'next'|translate}}</button>\r\n              </ng-template>\r\n              <ng-template #failN>\r\n                <button (click)=\"next()\" disabled class=\"btn btn-light\">{{'next'|translate}}</button>\r\n              </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br><br>\r\n    </div>\r\n  </body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/student/student.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student/student.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\" container-fluid row\">\n    <div class=\"row ml-3 text-center\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;width:100%;\n    height: 700px;bottom: 0%;\">\n  \n  <div class=\"col d-flex justify-content-center\">\n    <div class=\"col-sm-4 pt-5\">\n      <div class=\"card\">\n      \n      <div class=\"card-body\">\n          <div class=\"text-center\">\n              <div *ngIf=\"form.data.id>0; then Update else Add\"></div>\n              <ng-template #Add>\n                  <h1>{{'Add Student'|translate}}</h1>\n              </ng-template>\n              <ng-template #Update>\n                  <h1>{{'Update Student'|translate}}</h1>\n              </ng-template>\n          </div>\n  \n          <div class=\"col-sm-12\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-success\"> {{form.message}}</div>\n          <div class=\"col-sm-12\" *ngIf=\"!form.error && form.message != null\" class=\"alert alert-danger\"> {{form.message}}</div>\n          \n        <form>        \n        \n          <div class=\"form-group row\">\n            <label for=\"firstName\" class=\"form-check-label\">{{'First Name'|translate}}:<span class=\"text-danger\">*</span></label>\n            <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n            </div>\n            <input type=\"text\" [(ngModel)]=\"form.data.firstName\" name=\"firstName\" class=\"form-control\"\n                              placeholder=\"{{'Enter First Name'|translate}}\" id=\"firstName\">\n            </div>\n            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.firstName}}</span>\n            </div>\n      \n            <div class=\"form-group row\">\n              <label for=\"lastName\" class=\"form-check-label\">{{'Last Name'|translate}}:<span class=\"text-danger\">*</span></label>\n              <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n              <div class=\"input-group-text\"><i class=\"fa fa-user-o grey-text\"></i></div>\n              </div>\n              <input type=\"text\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\n                                placeholder=\"{{'Enter Last Name'|translate}}\" name=\"lastName\" id=\"lastName\">\n              </div>\n              <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.lastName}}</span>\n              </div>\n\n              <div class=\"form-group row \">\n                <label for=\"datepicker\" class=\"form-check-label\">{{'Date of birth'|translate}}:<span class=\"text-danger\">*</span></label>\n                <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i> </div>\n                </div>\n                <input type=\"date\" id=\"datepicker\" name=\"dob\" [(ngModel)]=\"form.data.dob\"\n                 class=\"form-control\" placeholder=\"{{'Enter Date of Birth'|translate}}\">\n                </div>\n                <span class=\"text-danger mr-auto mb-auto \">{{form.inputerror.dob}}</span>\n                </div>\n\n              <div class=\"form-group row\">\n                <label for=\"mobileNo\" class=\"form-check-label\">{{'Mobile Number'|translate}}:<span class=\"text-danger\">*</span></label>\n                <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i></div>\n                </div>\n                <input type=\"text\" [(ngModel)]=\"form.data.mobileNo\" name=\"mobileNo\" class=\"form-control\"\n                                  placeholder=\"{{'Enter Mobile Number'|translate}}\" id=\"mobileNo\">\n                </div>\n                <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.mobileNo}}</span>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label for=\"email\" class=\"form-check-label\">{{'Email'|translate}}:\n                      <span class=\"text-danger\">*</span>\n                  </label>\n                  <div class=\"input-group\">\n                      <div class=\"input-group-prepend\">\n                          <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                      </div>\n                      <div *ngIf=\"form.data.id>0; then lUpdate else lAdd\"></div>\n\n                      <ng-template #lUpdate>\n                          <input type=\"text\" [(ngModel)]=\"form.data.email\" name=\"email\" class=\"form-control\"\n                              placeholder=\"{{'Enter Email'|translate}}\" id=\"login\" disabled>\n                      </ng-template>\n                      <ng-template #lAdd><input type=\"text\" [(ngModel)]=\"form.data.email\" name=\"email\"\n                              class=\"form-control\" placeholder=\"{{'Enter Email'|translate}}\" id=\"email\">\n                      </ng-template>\n                  </div>\n                  <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.email}} </span>\n              </div>\n\n                <div class=\"form-group row \">\n                  <label for=\"collegeId\" class=\"form-check-label \">{{'College Name'|translate}} :<span\n                          class=\"text-danger\">*</span>\n                  </label>\n                  <div class=\"input-group\">\n                      <div class=\"input-group-prepend\">\n                          <div class=\"input-group-text\"><i class=\"fa fa-university grey-text\"></i> </div>\n                      </div>\n                      <select class=\"form-control\" name=\"collegeId\"\n                                    [(ngModel)]=\"form.data.collegeId\" id=\"collegeId\">\n                                    <option [value]=default [disabled]=\"true\" selected disabled>{{'Select College Name'|translate}}\n                                    </option>\n                                    <option *ngFor=\"let opt of form.preload.collegeList\" [value]=\"opt.id\">{{opt.name}}\n                                    </option>\n                                </select>\n                  </div>\n                  <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.collegeId}}</span>\n                  </div>\n\n\n                      \n                      <div class=\"form-inline\">\n                      <div class=\"text-center\">\n                      <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                      <ng-template #add>\n                      <button (click)=\"submit()\" class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\n                      \n                      <button (click)=\"reset()\" class=\"btn btn-secondary mr-2\" >{{'Reset'|translate}}</button>\n                      </ng-template>\n                      <ng-template #update>\n                      <button (click)=\"submit()\"class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\n                      <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel'|translate}}</button>\n                      </ng-template>\n                      </div>\n                      </div>\n              \n              \n            </form>\n      </div>\n      </div>\n    </div>\n  </div>\n    </div>\n  </body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/subject/subject-list.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/subject/subject-list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid text-center\">\r\n    <div class=\"content-wrapper\" style=\"padding-top: 0%; background-image: url(./assets/list.png); background-repeat: no-repeat;\r\n      background-attachment: fixed;\r\n      background-size: cover;width:100%;\r\n      height: 850px;bottom: 0%;\">\r\n      <div class=\"d-flex bg-primary text-white paddin \">\r\n        <h1 class=\"text-center container-fluid \">{{'Subject List'|translate}}</h1>\r\n      </div>\r\n  \r\n      <div class=\"text-center row\">\r\n        <div class=\"col-2\"></div>\r\n        <form class=\"form-inline pt-3  \">\r\n\r\n          <div class=\"form-group  pr-3\">\r\n            <label for=\"subjectName\" class=\"form-check-label pr-3 text-white paddin\">{{'Subject Name'|translate}} : </label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter Subject Name'|translate}}\" name=\"subjectName\"\r\n              [(ngModel)]=\"form.searchParams.subjectName\" id=\"subjectName\">\r\n          </div>\r\n\r\n          <div class=\"form-group pr-3\">\r\n          <label for=\"courseId\" class=\"form-check-label pr-3 text-white paddin\">{{'Course'|translate}} :</label>&nbsp;\r\n          <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.searchParams.courseId\" id=\"courseId\">\r\n            <option [value]=0 [disabled]=\"true\" selected disabled>{{'Select Course Name'|translate}}</option>\r\n            <option *ngFor=\"let opt of form.preload.courseList\" [value]=\"opt.id\">{{opt.courseName}}</option>\r\n          </select>\r\n        </div>\r\n       \r\n  \r\n          <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search'|translate}}</button>&nbsp;&nbsp;\r\n          <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\r\n        </form>\r\n      </div>\r\n      <br>\r\n      <div class=\"col-sm-12\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\"> {{form.message}}</div>\r\n      <div class=\"col-sm-12\" *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success\"> {{form.message}}</div>\r\n      <br>\r\n  \r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            \r\n            <thead class=\"thead-light text-uppercase\">\r\n            <tr>\r\n               <th>{{'S.No'|translate}}</th>\r\n               <th>{{'Name'|translate}}</th>\r\n               <th>{{'Description'|translate}}</th>\r\n               <th>{{'Course Name'|translate}}</th>\r\n               <th>{{'Edit'|translate}} / {{'Delete'|translate}}</th>\r\n              </tr>\r\n            </thead>\r\n  \r\n            <tbody>\r\n              <tr class=\"text-white paddin\" *ngFor=\"let subject of form.list; let i = index\">\r\n              <td> {{((form.pageNo-1)*10)+i+1}} </td>\r\n              <td> {{ subject.subjectName }} </td>\r\n              <td> {{ subject.subjectDescription }} </td>\r\n              <td> {{ subject.courseName }} </td>\r\n              <td>\r\n                  <a (click)=\"forward( '/subject/' +  subject.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit\" style=\"font-size:20px;color:yellow\"></i>\r\n                  </a> / <a (click)=\"delete(subject.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n  \r\n          <div class=\" col-12 form-inline mb-0  \">\r\n            <div class=\"col-4 text-left \">\r\n              <div *ngIf=\"form.pageNo>1; then sus else fail\"></div>\r\n              <ng-template #sus>\r\n                <button (click)=\"previous()\" class=\"btn btn-success\">{{'previous'|translate}}</button>\r\n              </ng-template>\r\n              <ng-template #fail>\r\n                <button (click)=\"previous()\" disabled class=\"btn btn-light \">{{'previous'|translate}}</button>\r\n              </ng-template>\r\n            </div>\r\n            <div class=\"col-4 text-center \">\r\n              <button class=\"btn-primary btn \" (click)=\"forward('/course/')\">{{'Add'|translate}}</button>\r\n            </div>\r\n            <div class=\"col-4 text-right \">\r\n              <div *ngIf=\"form.count>(form.pageSize*form.pageNo);then susN else failN\"></div>\r\n              <ng-template #susN>\r\n                <button (click)=\"next()\" class=\"btn btn-success\">{{'next'|translate}}</button>\r\n              </ng-template>\r\n              <ng-template #failN>\r\n                <button (click)=\"next()\" disabled class=\"btn btn-light\">{{'next'|translate}}</button>\r\n              </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br><br>\r\n    </div>\r\n  </body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/subject/subject.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/subject/subject.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\" container-fluid row\">\r\n  <div class=\"row ml-3 text-center\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-size: cover;width:100%;\r\n  height: 700px;bottom: 0%;\">\r\n\r\n<div class=\"col d-flex justify-content-center\">\r\n  <div class=\"col-sm-4 pt-5\">\r\n    <div class=\"card\">\r\n    \r\n    <div class=\"card-body\">\r\n        <div class=\"text-center\">\r\n            <div *ngIf=\"form.data.id>0; then Update else Add\"></div>\r\n            <ng-template #Add>\r\n                <h1>{{'Add Subject'|translate}}</h1>\r\n            </ng-template>\r\n            <ng-template #Update>\r\n                <h1>{{'Update Subject'|translate}}</h1>\r\n            </ng-template>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\"> {{form.message}}</div>\r\n        <div class=\"col-sm-12\" *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success\"> {{form.message}}</div>\r\n        \r\n      <form>        \r\n      \r\n        <div class=\"form-group row \">\r\n          <label for=\"courseId\" class=\"form-check-label \">{{'Course Name'|translate}} :<span\r\n                  class=\"text-danger\">*</span>\r\n          </label>\r\n          <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-graduation-cap grey-text\"></i> </div>\r\n              </div>\r\n              <select class=\"form-control\" *ngIf=\"form.preload.courseList!=null\" name=\"courseId\"\r\n                  [(ngModel)]=\"form.data.courseId\" id=\"courseId\">\r\n                  <option [value]=default [disabled]=\"true\" selected disabled>{{'Select Course Name'|translate}}\r\n                  </option>\r\n                  <option *ngFor=\"let opt of form.preload.courseList\" [value]=\"opt.id\">{{opt.courseName}}\r\n                  </option>\r\n              </select>\r\n          </div>\r\n          <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.courseId}}</span>\r\n          </div>\r\n              \r\n              <div class=\"form-group row\">\r\n                  <label for=\"subjectName\" class=\"form-check-label\">{{'Subject Name'|translate}}:<span class=\"text-danger\">*</span></label>\r\n                  <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-book grey-text\"></i> </div>\r\n                  </div>\r\n                  <input type=\"text\" [(ngModel)]=\"form.data.subjectName\" name=\"subjectName\" class=\"form-control\"\r\n                                    placeholder=\"{{'Enter Subject Name'|translate}}\" id=\"subjectName\">\r\n                  </div>\r\n                  <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.subjectName}}</span>\r\n                  </div>\r\n\r\n                  <div class=\"form-group row\">\r\n                    <label for=\"subjectDescription\" class=\"form-check-label\">{{'Description'|translate}}:\r\n                        <span class=\"text-danger\">*</span></label>\r\n                    <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                        </div>\r\n                        <input type=\"text\" [(ngModel)]=\"form.data.subjectDescription\" name=\"subjectDescription\"\r\n                            class=\"form-control\" placeholder=\"{{'Enter Subject Description'|translate}}\"\r\n                            id=\"subjectDescription\">\r\n                    </div>\r\n                    <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.subjectDescription}} </span>\r\n                </div>\r\n\r\n                       \r\n                    \r\n                    <div class=\"form-inline\">\r\n                    <div class=\"text-center\">\r\n                    <div *ngIf=\"form.data.id>0; then update else add\"></div>\r\n                    <ng-template #add>\r\n                    <button (click)=\"submit()\" class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\r\n                    \r\n                    <button (click)=\"reset()\" class=\"btn btn-secondary mr-2\" >{{'Reset'|translate}}</button>\r\n                    </ng-template>\r\n                    <ng-template #update>\r\n                    <button (click)=\"submit()\"class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\r\n                    <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel'|translate}}</button>\r\n                    </ng-template>\r\n                    </div>\r\n                    </div>\r\n            \r\n            \r\n          </form>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n  </div>\r\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/timetable/timetable-list.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/timetable/timetable-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid text-center\">\r\n  <div class=\"content-wrapper\" style=\"padding-top: 0%; background-image: url(./assets/list.png); background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;width:100%;\r\n    height: 850px;bottom: 0%;\">\r\n    <div class=\"d-flex bg-primary text-white paddin \">\r\n      <h1 class=\"text-center container-fluid \">{{'TimeTable List'|translate}}</h1>\r\n    </div>\r\n\r\n    <div class=\"text-center row\">\r\n      <div class=\"col-2\"></div>\r\n      <form class=\"form-inline pt-3  \">\r\n\r\n        \r\n      <div class=\"form-group pr-3\">\r\n        <label for=\"subjectId\" class=\"form-check-label text-white paddin\">{{'Subject Name'|translate}} :</label>\r\n        <select class=\"form-control\" name=\"subjectId\"\r\n                [(ngModel)]=\"form.data.subjectId\" id=\"subjectId\">\r\n                <option [value]=default [disabled]=\"true\" selected disabled>{{'Select Subject Name'|translate}}</option>\r\n                <option *ngFor=\"let opt of form.preload.subjectList\" [value]=\"opt.id\">{{opt.subjectName}}\r\n                </option>\r\n            </select>\r\n        </div>\r\n        \r\n\r\n      <div class=\"form-group pr-3\">\r\n        <label for=\"courseId\" class=\"form-check-label pr-3 text-white paddin\">{{'Course'|translate}} :</label>&nbsp;\r\n        <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.searchParams.courseId\" id=\"courseId\">\r\n          <option [value]=0 [disabled]=\"true\" selected disabled>{{'Select Course Name'|translate}}</option>\r\n          <option *ngFor=\"let opt of form.preload.courseList\" [value]=\"opt.id\">{{opt.courseName}}</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group pr-3\">\r\n        <label for=\"semester\" class=\"form-check-label pr-3 text-white paddin\">{{'Semester'|translate}}:\r\n        </label>\r\n        <select [(ngModel)]=\"form.data.semester\" name=\"semester\" class=\"form-control\" id=\"semester\">\r\n            <option [value]=null [disabled]=\"true\" selected disabled>{{'Select Semester'|translate}}</option>\r\n            <option value=\"I\">I</option>\r\n            <option value=\"II\">II</option>\r\n            <option value=\"III\">III</option>\r\n            <option value=\"IV\">IV</option>\r\n            <option value=\"V\">V</option>\r\n            <option value=\"VI\">VI</option>\r\n            <option value=\"VII\">VII</option>\r\n            <option value=\"VIII\">VIII</option>\r\n        </select>\r\n    </div>\r\n     \r\n      <div class=\"form-group pr-3\">\r\n        <label for=\"datepicker\" class=\"form-check-label pr-3 text-white paddin\">{{'Exam Date'|translate}}:\r\n        </label>\r\n        <input type=\"date\" id=\"datepicker\" name=\"examDate\" [(ngModel)]=\"form.data.examDate\"\r\n            class=\"form-control\" placeholder=\"{{'Enter Date of Exam'|translate}}\">\r\n    </div>\r\n    \r\n        <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search'|translate}}</button>&nbsp;&nbsp;\r\n        <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\r\n      </form>\r\n    </div>\r\n    <br>\r\n      <div class=\"col-sm-12\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\"> {{form.message}}</div>\r\n      <div class=\"col-sm-12\" *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success\"> {{form.message}}</div>\r\n      <br>\r\n      \r\n\r\n    <div class=\"p-1\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered table-striped table-hover\">\r\n          \r\n          <thead class=\"thead-light text-uppercase\">\r\n          <tr>\r\n             <th>{{'S.No'|translate}}</th>\r\n             <th>{{'Time'|translate}}</th>\r\n             <th>{{'Date'|translate}}</th>\r\n             <th>{{'Subject'|translate}}</th>\r\n             <th>{{'Course'|translate}}</th>\r\n             <th>{{'Semester'|translate}}</th>\r\n             <th>{{'Edit'|translate}} / {{'Delete'|translate}}</th>\r\n            </tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n            <tr class=\"text-white paddin\" *ngFor=\"let timetable of form.list; let i = index\">\r\n            <td> {{((form.pageNo-1)*10)+i+1}} </td>\r\n            <td> {{ timetable.examTime }} </td>\r\n            <td> {{ timetable.examDate | date : 'dd-MM-yyyy'}} </td>\r\n            <td> {{ timetable.subjectName }} </td>\r\n            <td> {{ timetable.courseName }} </td>\r\n            <td> {{ timetable.semester }} </td>\r\n            <td>\r\n                <a (click)=\"forward( '/timetable/' +  timetable.id)\" style=\"cursor: pointer;\">\r\n                  <i class=\"fa fa-edit\" style=\"font-size:20px;color:yellow\"></i>\r\n                </a> / <a (click)=\"delete(timetable.id)\" style=\"cursor: pointer;\">\r\n                  <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\r\n                </a>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <div class=\" col-12 form-inline mb-0  \">\r\n          <div class=\"col-4 text-left \">\r\n            <div *ngIf=\"form.pageNo>1; then sus else fail\"></div>\r\n            <ng-template #sus>\r\n              <button (click)=\"previous()\" class=\"btn btn-success\">{{'previous'|translate}}</button>\r\n            </ng-template>\r\n            <ng-template #fail>\r\n              <button (click)=\"previous()\" disabled class=\"btn btn-light \">{{'previous'|translate}}</button>\r\n            </ng-template>\r\n          </div>\r\n          <div class=\"col-4 text-center \">\r\n            <button class=\"btn-primary btn \" (click)=\"forward('/timetable/')\">{{'Add'|translate}}</button>\r\n          </div>\r\n          <div class=\"col-4 text-right \">\r\n            <div *ngIf=\"form.count>(form.pageSize*form.pageNo);then susN else failN\"></div>\r\n            <ng-template #susN>\r\n              <button (click)=\"next()\" class=\"btn btn-success\">{{'next'|translate}}</button>\r\n            </ng-template>\r\n            <ng-template #failN>\r\n              <button (click)=\"next()\" disabled class=\"btn btn-light\">{{'next'|translate}}</button>\r\n            </ng-template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br><br>\r\n  </div>\r\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/timetable/timetable.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/timetable/timetable.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\" container-fluid row\">\n    <div class=\"row ml-3 text-center\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;width:100%;\n    height: 700px;bottom: 0%;\">\n  \n  <div class=\"col d-flex justify-content-center\">\n      \n      <div class=\"card\">\n      \n      <div class=\"card-body\">\n          <div class=\"text-center\">\n              <div *ngIf=\"form.data.id>0; then Update else Add\"></div>\n              <ng-template #Add>\n                  <h1>{{'Add TimeTable'|translate}}</h1>\n              </ng-template>\n              <ng-template #Update>\n                  <h1>{{'Update TimeTable'|translate}}</h1>\n              </ng-template>\n          </div>\n  \n          <div class=\"col-sm-12\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\"> {{form.message}}</div>\n          <div class=\"col-sm-12\" *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success\"> {{form.message}}</div>\n          \n        <form>        \n      \n                          \n            <div class=\"form-group row\">\n                <label for=\"examTime\" class=\"form-check-label\">{{'Exam Time'|translate}}:\n                    <span class=\"text-danger\">*</span></label>\n                <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                        <div class=\"input-group-text\"><i class=\"fa fa-clock-o grey-text\"></i> </div>\n                    </div>\n                    <select [(ngModel)]=\"form.data.examTime\" name=\"examTime\" class=\"form-control\"\n                        id=\"examTime\">\n                        <option [value]=default [disabled]=\"true\" selected disabled>{{'Select Exam Time'|translate}}</option>\n                        <option value=\"10:00 am to 01:00 pm\">10:00 am to 01:00 pm</option>\n                        <option value=\"01:00 pm to 04:00 pm\">01:00 pm to 04:00 pm</option>\n                        <option value=\"04:00 pm to 07:00 pm\">04:00 pm to 07:00 pm</option>\n                    </select>\n                </div>\n                <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.examTime}} </span>\n            </div>\n  \n            <div class=\"form-group row \">\n                <label for=\"datepicker\" class=\"form-check-label\">{{'Exam Date '|translate}}:<span\n                        class=\"text-danger\">*</span></label>\n                <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                        <div class=\"input-group-text\"><i class=\"fa fa-list-ol grey-text\"></i> </div>\n                    </div>\n                    <input type=\"date\" id=\"datepicker\" name=\"examDate\" [(ngModel)]=\"form.data.examDate\"\n                        class=\"form-control\" placeholder=\"{{'Enter Date of Exam'|translate}}\">\n                </div>\n                <span class=\"text-danger mr-auto mb-auto \">{{form.inputerror.examDate}}</span>\n            </div>\n\n            <div class=\"form-group row \">\n                <label for=\"subjectId\" class=\"form-check-label \">{{'Subject Name'|translate}} :<span\n                        class=\"text-danger\">*</span>\n                </label>\n                <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                        <div class=\"input-group-text\"><i class=\"fa fa-book grey-text\"></i> </div>\n                    </div>\n                    <select class=\"form-control\" *ngIf=\"form.preload.subjectList!=null\" name=\"subjectId\"\n                        [(ngModel)]=\"form.data.subjectId\" id=\"subjectId\">\n                        <option [value]=default [disabled]=\"true\" selected disabled>{{'Select Subject Name'|translate}}</option>\n                        <option *ngFor=\"let opt of form.preload.subjectList\" [value]=\"opt.id\">{{opt.subjectName}}\n                        </option>\n                    </select>\n                </div>\n              <span class=\"text-danger mr-auto mb-auto \" id=\"subjectId\"> {{form.inputerror.subjectId}}</span>\n              </div>\n\n                <div class=\"form-group row \">\n                      <label for=\"courseId\" class=\"form-check-label \">{{'Course Name'|translate}} :<span\n                              class=\"text-danger\">*</span>\n                      </label>\n                      <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                              <div class=\"input-group-text\"><i class=\"fa fa-graduation-cap grey-text\"></i> </div>\n                          </div>\n                          <select class=\"form-control\" *ngIf=\"form.preload.courseList!=null\" name=\"courseId\"\n                              [(ngModel)]=\"form.data.courseId\" id=\"courseId\">\n                              <option [value]=default [disabled]=\"true\" selected disabled>{{'Select Course Name'|translate}}\n                              </option>\n                              <option *ngFor=\"let opt of form.preload.courseList\" [value]=\"opt.id\">{{opt.courseName}}\n                              </option>\n                          </select>\n                      </div>\n                      <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.courseId}}</span>\n                      </div>\n  \n                      \n  \n                      <div class=\"form-group row\">\n                        <label for=\"semester\" class=\"form-check-label\">{{'Semester'|translate}}:<span class=\"text-danger\">*</span></label>\n                        <div class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                        <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i></div>\n                        </div>\n                        <select [(ngModel)]=\"form.data.semester\" name=\"semester\" class=\"form-control\" id=\"semester\">\n                        <option [value]=\"null\" [disabled]=\"true\" selected disabled>{{'Select Semester'|translate}}</option>\n                                    <option value=\"I\">I</option>\n                                    <option value=\"II\">II</option>\n                                    <option value=\"III\">III</option>\n                                    <option value=\"IV\">IV</option>\n                                    <option value=\"V\">V</option>\n                                    <option value=\"VI\">VI</option>\n                                    <option value=\"VII\">VII</option>\n                                    <option value=\"VIII\">VIII</option>\n                        </select>\n                        </div>\n                        <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.semester}}</span>\n                        </div>\n                      \n                      <div class=\"form-inline\">\n                      <div class=\"text-center\">\n                      <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                      <ng-template #add>\n                      <button (click)=\"submit()\" class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\n                      \n                      <button (click)=\"reset()\" class=\"btn btn-secondary mr-2\" >{{'Reset'|translate}}</button>\n                      </ng-template>\n                      <ng-template #update>\n                      <button (click)=\"submit()\"class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\n                      <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel'|translate}}</button>\n                      </ng-template>\n                      </div>\n                      </div>\n              \n              \n            </form>\n      </div>\n      </div>\n    </div>\n    \n    </div>\n  </body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/change-password.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/change-password.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\" container-fluid row\">\r\n    <div class=\"row ml-3\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;width:100%;\r\n    height: 700px;\">\r\n        <div class=\"col-sm-4\"></div>\r\n        <div class=\"col-sm-4 pt-5\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"text-center mb-4\">\r\n                        <h1>{{'Change Password'|translate}}</h1>\r\n\r\n                        <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\r\n                            {{form.message}}\r\n                        </div>\r\n                        <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\r\n                            {{form.message}}\r\n                        </div>\r\n                        <form>\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"password\" class=\"form-check-label\">{{'Old Password'|translate}}:\r\n                                    <span class=\"text-danger\">*</span>\r\n                                </label>\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                                    </div>\r\n                                    <input type=\"password\" [(ngModel)]=\"form.data.oldPassword\" name=\"oldPassword\"\r\n                                        class=\"form-control\" placeholder=\"{{'Enter Old Password'|translate}}\" id=\"oldPassword\">\r\n                                </div>\r\n\r\n                                <span class=\"text-danger mr-auto mb-auto \"> {{form.inputerror.oldPassword}} </span>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"password\" class=\"form-check-label\">{{'Password'|translate}}:\r\n                                    <span class=\"text-danger\">*</span>\r\n                                </label>\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                                    </div>\r\n                                    <input type=\"password\" [(ngModel)]=\"form.data.password\" name=\"password\"\r\n                                        class=\"form-control\" placeholder=\"{{'Enter Password'|translate}}\" id=\"password\">\r\n                                </div>\r\n\r\n                                <span class=\"text-danger mr-auto mb-auto \"> {{form.inputerror.password}} </span>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"confirmPassword\" class=\"form-check-label\">{{'Confirm Password'|translate}}:\r\n                                    <span class=\"text-danger\">*</span>\r\n                                </label>\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                                    </div>\r\n                                    <input type=\"password\" [(ngModel)]=\"form.data.confirmPassword\"\r\n                                        name=\"confirmPassword\" class=\"form-control\" placeholder=\"{{'Confirm Password'|translate}}\"\r\n                                        id=\"confirmPassword\">\r\n                                </div>\r\n\r\n                                <span class=\"text-danger mr-auto mb-auto \"> {{form.inputerror.confirmPassword}} </span>\r\n                            </div>\r\n                            <div class=\"form-inline\">\r\n                                <div class=\"col-4\"></div>\r\n                                <div class=\"text-center\">\r\n                                    <button (click)=\"submit()\" class=\"btn btn-success \">{{'Save'|translate}}</button>&nbsp;\r\n                                    <button class=\"btn btn-primary  \" (click)=\"this.forward('myprofile')\">{{'My\r\n                                        Profile'|translate}}</button>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/my-profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/my-profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid row\">\r\n    <div class=\"row ml-3\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;width:100%;\r\n    height: 900px;\">\r\n        <div class=\"col-sm-4\"></div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"text-center mb-4\">\r\n                        <h1 class=\"text-dark\">{{'My Profile'|translate}}</h1>\r\n                    </div>\r\n                    <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\r\n                        {{form.message}}\r\n                    </div>\r\n                    <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\r\n                        {{form.message}}\r\n                    </div>\r\n                    <form>\r\n                        <div class=\"form-group row \">\r\n                            <div *ngIf=\"form.data.picName\">\r\n                                <img src=\"http://localhost:8080/User/getPic/{{form.data.id}}\" height=\"55px\"\r\n                                    width=\"80px\">\r\n                            </div>\r\n                            <div *ngIf=\"!form.data.picName\">\r\n                                <img src=\"../../assets/default.jpg\" height=\"55px\" width=\"80px\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"picture\" class=\"form-check-label\">{{'Profile Picture'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"file\" (change)=\"onFileSelect($event.target.files)\" accept=\"image/*\"\r\n                                    name=\"pic\" class=\"form-control\" placeholder=\"{{'Select Picture'|translate}}\" id=\"pic\">\r\n                            </div>\r\n                            \r\n                            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.picture}}\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"fName\" class=\"form-check-label\">{{'First Name'|translate}}:\r\n                                <span class=\"text-danger\">*</span></label>\r\n\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"text\" [(ngModel)]=\"form.data.firstName\" name=\"firstName\"\r\n                                    class=\"form-control\" placeholder=\"{{'Enter First Name'|translate}}\" id=\"fName\"\r\n                                    [value]=\"form.data.firstName\">\r\n                            </div>\r\n                            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.firstName}}\r\n                            </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"lName\" class=\"form-check-label\">{{'Last Name'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user-o grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"text\" [(ngModel)]=\"form.data.lastName\" name=\"lastName\" class=\"form-control\"\r\n                                    placeholder=\"{{'Enter Last Name'|translate}}\" id=\"lName\">\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.lastName}} </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"mNo\" class=\"form-check-label\">{{'Mobile No'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"text\" [(ngModel)]=\"form.data.mobileNo\" name=\"mobileNo\" class=\"form-control\"\r\n                                    placeholder=\"{{'Enter Mobile Number'|translate}}\" id=\"mNo\">\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.mobileNo}} </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"login\" class=\"form-check-label\">{{'Login'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"text\" [(ngModel)]=\"form.data.login\" name=\"login\" class=\"form-control\"\r\n                                    placeholder=\"{{'Enter Email'|translate}}\" id=\"login\" disabled>\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.login}} </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"password\" class=\"form-check-label\">{{'Password'|translate}}:\r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"password\" [(ngModel)]=\"form.data.password\" name=\"password\"\r\n                                    class=\"form-control\" placeholder=\"{{'Enter Password'|translate}}\" id=\"password\">\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto \"> {{form.inputerror.password}} </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"gender\" class=\"form-check-label\">{{'Gender'|translate}}:<span class=\"text-danger\">*</span></label>\r\n                            <div class=\"input-group\">\r\n                            <div class=\"input-group-prepend\">\r\n                            <div class=\"input-group-text\"><i class=\"fa fa-venus-mars grey-text\"></i></div>\r\n                            </div>\r\n                            <select [(ngModel)]=\"form.data.gender\" name=\"gender\" class=\"form-control\" id=\"gender\">\r\n                            <option [value]=default [disabled]=\"true\" selected disabled>{{'Select Gender'|translate}}</option>\r\n                            <option value=\"Male\">Male</option>\r\n                            <option value=\"Female\">Female</option>\r\n                            <option value=\"Transgender\">Transgender</option>\r\n                            </select>\r\n                            </div>\r\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.gender}}</span>\r\n                            </div>\r\n\r\n\r\n\r\n                        <div class=\"form-group row \">\r\n                            <label for=\"datepicker\" class=\"form-check-label\">{{'Date of birth'|translate}}:<span\r\n                                    class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i> </div>\r\n                                </div>\r\n                                <input type=\"date\" id=\"datepicker\" name=\"dob\" [(ngModel)]=\"form.data.dob\"\r\n                                    class=\"form-control\" placeholder=\"{{'Enter Date of Birth'|translate}}\">\r\n                            </div>\r\n\r\n                            <span class=\"text-danger mr-auto mb-auto \">{{form.inputerror.dob}}</span>\r\n                        </div>\r\n\r\n\r\n\r\n                        <div class=\"form-inline\">\r\n                            <div class=\"col-3\"></div>\r\n                            <div class=\"text-center\">\r\n                                <button (click)=\"submit()\"\r\n                                    class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\r\n                                <button (click)=\"this.forward('changepassword')\" class=\"btn btn-secondary\">{{'Change\r\n                                    Password'|translate}}</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\"></div>\r\n    </div>\r\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user-list.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid text-center\">\r\n    <div class=\"content-wrapper\" style=\"padding-top: 0%; background-image: url(./assets/list.png); background-repeat: no-repeat;\r\n      background-attachment: fixed;\r\n      background-size: cover;width:100%;\r\n      height: 1100px;bottom: 0%;\">\r\n      <div class=\"d-flex bg-primary text-white paddin \">\r\n        <h1 class=\"text-center container-fluid \">{{'User List'|translate}}</h1>\r\n      </div>\r\n      \r\n      <div class=\"text-center row\">\r\n        <div class=\"col-2\"></div>\r\n\r\n        <form class=\"form-inline pt-3  \">\r\n            <div class=\"form-group  pr-3\">\r\n                <label for=\"fName\" class=\"form-check-label pr-3 text-white paddin\">{{'First Name'|translate}} : </label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter First Name'|translate}}\" name=\"firstName\"\r\n                  [(ngModel)]=\"form.searchParams.firstName\" id=\"fName\">\r\n              </div>\r\n\r\n          <div class=\"form-group  pr-3\">\r\n            <label for=\"login\" class=\"form-check-label pr-3 text-white paddin\">{{'Login ID'|translate}} : </label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter Login ID'|translate}}\" name=\"login\"\r\n              [(ngModel)]=\"form.searchParams.login\" id=\"login\">\r\n          </div>\r\n  \r\n          <div class=\"form-group pr-3\">\r\n            <label for=\"role\" class=\"form-check-label pr-3 text-white paddin\">{{'Role'|translate}} :</label>&nbsp;\r\n            <select class=\"form-control\" name=\"roleId\" [(ngModel)]=\"form.searchParams.roleId\" id=\"roleId\">\r\n              <option [value]=0 [disabled]=\"true\" selected disabled>{{'Select User Role'|translate}}</option>\r\n              <option *ngFor=\"let opt of form.preload.roleList\" [value]=\"opt.id\">{{opt.name}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search'|translate}}</button>&nbsp;&nbsp;\r\n          <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\r\n        </form>\r\n      </div>\r\n      <br>\r\n      <div class=\"col-sm-12\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\"> {{form.message}}</div>\r\n      <div class=\"col-sm-12\" *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success\"> {{form.message}}</div>\r\n      <br>\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th>{{'S.No'|translate}}</th>\r\n                <th>{{'Image'|translate}}</th>\r\n              <th>{{'First Name' |translate}}</th>\r\n              <th>{{'Last Name' |translate }}</th>\r\n              <th>{{'Login' | translate  }}</th>\r\n              <th>{{'Gender'| translate}}</th>\r\n              <th>{{'Role'|translate}}</th>\r\n              <th>{{'Phone'|translate}}</th>\r\n              <th>{{'DOB'|translate}}</th>\r\n                <th>{{'Edit'|translate}} / {{'Delete'|translate}}</th>\r\n              </tr>\r\n            </thead>\r\n  \r\n            <tbody>\r\n              <tr class=\"text-white paddin\" *ngFor=\"let user of form.list; let i = index\">\r\n                <td> {{((form.pageNo-1)*10)+i+1}} </td>\r\n                <td>\r\n                  <div *ngIf=\"user.picName\" >\r\n                  <img src=\"http://localhost:8080/User/getPic/{{user.id}}\" height=\"55px\" width=\"80px\">\r\n                </div>\r\n                <div *ngIf=\"!user.picName\" >\r\n                  <img src=\"./assets/default.jpg\" height=\"55px\" width=\"80px\">\r\n                </div> \r\n                </td>\r\n                <td> {{ user.firstName}} </td>\r\n              <td> {{ user.lastName }} </td>\r\n              <td> {{ user.login }} </td>\r\n              <td> {{ user.gender }} </td>\r\n              <td> {{ user.roleName }} </td>\r\n              <td> {{ user.mobileNo }} </td>\r\n              <td> {{ user.dob | date : 'dd-MM-yyyy'}} </td>\r\n                <td>\r\n                  <div *ngIf=\"user.roleId==1;then read else write\"></div>\r\n\r\n                <ng-template #read><i class=\"fa fa-edit\" style=\"font-size:20px;color:grey\"></i> / <i\r\n                    class=\"fa fa-trash-o\" style=\"font-size:20px;color:grey\"></i></ng-template>\r\n\r\n                  <ng-template #write><a (click)=\"forward( '/user/' +  user.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit\" style=\"font-size:20px;color:yellow\"></i>\r\n                  </a> / <a (click)=\"delete(user.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\r\n                  </a></ng-template>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n\r\n          <div class=\" col-12 form-inline mb-0  \">\r\n            <div class=\"col-4 text-left \">\r\n              <div *ngIf=\"form.pageNo>1; then sus else fail\"></div>\r\n              <ng-template #sus>\r\n                <button (click)=\"previous()\" class=\"btn btn-success\">{{'previous'|translate}}</button>\r\n              </ng-template>\r\n              <ng-template #fail>\r\n                <button (click)=\"previous()\" disabled class=\"btn btn-light \">{{'previous'|translate}}</button>\r\n              </ng-template>\r\n            </div>\r\n            <div class=\"col-4 text-center \">\r\n              <button class=\"btn-primary btn \" (click)=\"forward('/user/')\">{{'Add'|translate}}</button>\r\n            </div>\r\n            <div class=\"col-4 text-right \">\r\n              <div *ngIf=\"form.count>(form.pageSize*form.pageNo);then susN else failN\"></div>\r\n              <ng-template #susN>\r\n                <button (click)=\"next()\" class=\"btn btn-success\">{{'next'|translate}}</button>\r\n              </ng-template>\r\n              <ng-template #failN>\r\n                <button (click)=\"next()\" disabled class=\"btn btn-light\">{{'next'|translate}}</button>\r\n              </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br><br>\r\n    </div>\r\n  </body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\" container-fluid row\">\n    <div class=\"row ml-3 text-center\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;width:100%;\n    height: 950px;bottom: 0%;\">\n  \n  <div class=\"col d-flex justify-content-center\">\n    <div class=\"col-sm-4 pt-5\">\n      <div class=\"card\">\n      \n      <div class=\"card-body\">\n          <div class=\"text-center\">\n              <div *ngIf=\"form.data.id>0; then Update else Add\"></div>\n              <ng-template #Add>\n                  <h1>{{'Add User'|translate}}</h1>\n              </ng-template>\n              <ng-template #Update>\n                  <h1>{{'Update User'|translate}}</h1>\n              </ng-template>\n          </div>\n  \n          <div class=\"col-sm-12\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\"> {{form.message}}</div>\n          <div class=\"col-sm-12\" *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success\"> {{form.message}}</div>\n          \n        <form>        \n        \n            <div class=\"form-group row \">\n                <label for=\"role\" class=\"form-check-label \">{{'Role'|translate}} :<span class=\"text-danger\">*</span></label>\n                <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" *ngIf=\"form.preload.roleList!=null\" name=\"roleId\"\n                        [(ngModel)]=\"form.data.roleId\" id=\"role\">\n                <option [value]=default [disabled]=\"true\" selected disabled>{{'Select User Role'|translate}}</option>\n                <option *ngFor=\"let opt of form.preload.roleList\" [value]=\"opt.id\">{{opt.name}}</option>\n                </select>\n                </div>\n                <span class=\"text-danger mr-auto mb-auto \" id=\"role\"> {{form.inputerror.roleId}} </span>\n                </div>\n                \n                <div class=\"form-group row\">\n                    <label for=\"fName\" class=\"form-check-label\">{{'First Name'|translate}}:<span class=\"text-danger\">*</span></label>\n                    <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                        </div>\n                    <input type=\"text\" [(ngModel)]=\"form.data.firstName\" name=\"firstName\"\n                    class=\"form-control\" placeholder=\"{{'Enter First Name'|translate}}\" id=\"fName\" [value]=\"form.data.firstName\">\n                    </div>\n                    <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.firstName}}</span>\n                </div>\n\n                <div class=\"form-group row\">\n                    <label for=\"lastName\" class=\"form-check-label\">{{'Last Name'|translate}}:<span class=\"text-danger\">*</span></label>\n                    <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\"><i class=\"fa fa-user-o grey-text\"></i></div>\n                    </div>\n                    <input type=\"text\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\n                                      placeholder=\"{{'Enter Last Name'|translate}}\" name=\"lastName\" id=\"lastName\">\n                    </div>\n                    <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.lastName}}</span>\n                    </div>\n            \n                    <div class=\"form-group row\">\n                        <label for=\"mobileNo\" class=\"form-check-label\">{{'Mobile Number'|translate}}:<span class=\"text-danger\">*</span></label>\n                        <div class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                        <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i></div>\n                        </div>\n                        <input type=\"text\" [(ngModel)]=\"form.data.mobileNo\" name=\"mobileNo\" class=\"form-control\"\n                                          placeholder=\"{{'Enter Mobile Number'|translate}}\" id=\"mobileNo\">\n                        </div>\n                        <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.mobileNo}}</span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"login\" class=\"form-check-label\">{{'Login'|translate}}:<span class=\"text-danger\">*</span></label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                                </div>\n                                <div *ngIf=\"form.data.id>0; then lUpdate else lAdd\"></div>\n                                <ng-template #lUpdate>\n                                    <input type=\"text\" [(ngModel)]=\"form.data.login\" name=\"login\" class=\"form-control\"\n                                        placeholder=\"{{'Enter Email'|translate}}\" id=\"login\" disabled>\n                                </ng-template>\n                                <ng-template #lAdd><input type=\"text\" [(ngModel)]=\"form.data.login\" name=\"login\"\n                                        class=\"form-control\" placeholder=\"{{'Enter Email'|translate}}\" id=\"login\">\n                                </ng-template>\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.login}} </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"password\" class=\"form-check-label\">{{'Password'|translate}}:<span class=\"text-danger\">*</span></label>\n                            <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                            <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\n                                </div>\n                            <input type=\"password\" [(ngModel)]=\"form.data.password\" name=\"password\"\n                            class=\"form-control\" placeholder=\"{{'Enter Password'|translate}}\" id=\"password\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto \"> {{form.inputerror.password}} </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"gender\" class=\"form-check-label\">{{'Gender'|translate}}:<span class=\"text-danger\">*</span></label>\n                            <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                            <div class=\"input-group-text\"><i class=\"fa fa-venus-mars grey-text\"></i></div>\n                            </div>\n                            <select [(ngModel)]=\"form.data.gender\" name=\"gender\" class=\"form-control\" id=\"gender\">\n                            <option [value]=null [disabled]=\"true\" selected disabled>{{'Select Gender'|translate}}</option>\n                            <option value=\"Male\">Male</option>\n                            <option value=\"Female\">Female</option>\n                            <option value=\"Transgender\">Transgender</option>\n                            </select>\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.gender}}</span>\n                            </div>\n\n                            <div class=\"form-group row \">\n                                <label for=\"datepicker\" class=\"form-check-label\">{{'Date of birth'|translate}}:<span class=\"text-danger\">*</span></label>\n                                <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i> </div>\n                                </div>\n                                <input type=\"date\" id=\"datepicker\" name=\"dob\" [(ngModel)]=\"form.data.dob\"\n                                 class=\"form-control\" placeholder=\"Enter Date of Birth\">\n                                </div>\n                                <span class=\"text-danger mr-auto mb-auto \">{{form.inputerror.dob}}</span>\n                                </div>\n\n                        <div class=\"form-group row\">\n                        <label for=\"picture\" class=\"form-check-label\">{{'Upload Picture'|translate}}:</label>\n                        <div class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                        <div class=\"input-group-text\"><i class=\"fa fa-file-picture-o grey-text\"></i> </div>\n                        </div>\n                        <input type=\"file\" (change)=\"onFileSelect($event.target.files)\" accept=\"image/*\"\n                        name=\"pic\" class=\"form-control\" placeholder=\"{{'Upload Image'|translate}}\" id=\"pic\">\n                        </div>\n                        </div>\n                      \n                      <div class=\"form-inline\">\n                      <div class=\"text-center\">\n                      <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                      <ng-template #add>\n                      <button (click)=\"submit()\" class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\n                      <button (click)=\"reset()\" class=\"btn btn-secondary\">{{'Reset'|translate}}</button>\n                      </ng-template>\n                      <ng-template #update>\n                      <button (click)=\"submit()\"class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\n                      <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel'|translate}}</button>\n                      </ng-template>\n                      </div>\n                      </div>\n              \n              \n            </form>\n      </div>\n      </div>\n    </div>\n  </div>\n    </div>\n  </body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid row \">\n    <div class=\"content-wrapper row ml-3\" style=\"padding-top: 0%; background-image: url(./assets/list.png); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 650px;bottom: 0%;\">\n\n        <div class=\"col-sm-12\">\n            <h1 class=\"text-danger text-center \" style=\"margin-top: 17%;\">{{'Welcome To Online Result System'|translate}}</h1>\n        </div>\n\n    </div>\n</body>"

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
/* harmony import */ var _college_college_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./college/college.component */ "./src/app/college/college.component.ts");
/* harmony import */ var _college_college_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./college/college-list.component */ "./src/app/college/college-list.component.ts");
/* harmony import */ var _course_course_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course/course-list.component */ "./src/app/course/course-list.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./faculty/faculty.component */ "./src/app/faculty/faculty.component.ts");
/* harmony import */ var _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./faculty/faculty-list.component */ "./src/app/faculty/faculty-list.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./subject/subject.component */ "./src/app/subject/subject.component.ts");
/* harmony import */ var _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./subject/subject-list.component */ "./src/app/subject/subject-list.component.ts");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/timetable/timetable.component.ts");
/* harmony import */ var _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./timetable/timetable-list.component */ "./src/app/timetable/timetable-list.component.ts");
/* harmony import */ var _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./marksheet/marksheet.component */ "./src/app/marksheet/marksheet.component.ts");
/* harmony import */ var _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./marksheet/marksheet-list.component */ "./src/app/marksheet/marksheet-list.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _student_student_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./student/student-list.component */ "./src/app/student/student-list.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _role_role_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./role/role-list.component */ "./src/app/role/role-list.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_user_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/user-list.component */ "./src/app/user/user-list.component.ts");
/* harmony import */ var _user_change_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/change-password.component */ "./src/app/user/change-password.component.ts");
/* harmony import */ var _user_my_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user/my-profile.component */ "./src/app/user/my-profile.component.ts");
/* harmony import */ var _login_forget_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./login/forget-password.component */ "./src/app/login/forget-password.component.ts");
/* harmony import */ var _login_user_registration_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./login/user-registration.component */ "./src/app/login/user-registration.component.ts");
/* harmony import */ var _marksheet_merit_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./marksheet/merit-list.component */ "./src/app/marksheet/merit-list.component.ts");
/* harmony import */ var _marksheet_get_marksheet_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./marksheet/get-marksheet.component */ "./src/app/marksheet/get-marksheet.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");































var routes = [
    {
        path: 'college',
        component: _college_college_component__WEBPACK_IMPORTED_MODULE_3__["CollegeComponent"]
    },
    {
        path: 'college/:id',
        component: _college_college_component__WEBPACK_IMPORTED_MODULE_3__["CollegeComponent"]
    },
    {
        path: 'collegelist',
        component: _college_college_list_component__WEBPACK_IMPORTED_MODULE_4__["CollegeListComponent"]
    },
    {
        path: 'course',
        component: _course_course_component__WEBPACK_IMPORTED_MODULE_6__["CourseComponent"]
    },
    {
        path: 'course/:id',
        component: _course_course_component__WEBPACK_IMPORTED_MODULE_6__["CourseComponent"]
    },
    {
        path: 'courselist',
        component: _course_course_list_component__WEBPACK_IMPORTED_MODULE_5__["CourseListComponent"]
    },
    {
        path: 'faculty',
        component: _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_7__["FacultyComponent"]
    },
    {
        path: 'faculty/:id',
        component: _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_7__["FacultyComponent"]
    },
    {
        path: 'facultylist',
        component: _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_8__["FacultyListComponent"]
    },
    {
        path: 'subject',
        component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_10__["SubjectComponent"]
    },
    {
        path: 'subject/:id',
        component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_10__["SubjectComponent"]
    },
    {
        path: 'subjectlist',
        component: _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_11__["SubjectListComponent"]
    },
    {
        path: 'timetable',
        component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_12__["TimetableComponent"]
    },
    {
        path: 'timetable/:id',
        component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_12__["TimetableComponent"]
    },
    {
        path: 'timetablelist',
        component: _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_13__["TimetableListComponent"]
    },
    {
        path: 'marksheet',
        component: _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_14__["MarksheetComponent"]
    },
    {
        path: 'marksheet/:id',
        component: _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_14__["MarksheetComponent"]
    },
    {
        path: 'marksheetlist',
        component: _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_15__["MarksheetListComponent"]
    },
    {
        path: 'meritlist',
        component: _marksheet_merit_list_component__WEBPACK_IMPORTED_MODULE_26__["MeritListComponent"]
    },
    {
        path: 'getmarksheet',
        component: _marksheet_get_marksheet_component__WEBPACK_IMPORTED_MODULE_27__["GetMarksheetComponent"]
    },
    {
        path: 'student',
        component: _student_student_component__WEBPACK_IMPORTED_MODULE_16__["StudentComponent"]
    },
    {
        path: 'student/:id',
        component: _student_student_component__WEBPACK_IMPORTED_MODULE_16__["StudentComponent"]
    },
    {
        path: 'studentlist',
        component: _student_student_list_component__WEBPACK_IMPORTED_MODULE_17__["StudentListComponent"]
    },
    {
        path: 'role',
        component: _role_role_component__WEBPACK_IMPORTED_MODULE_18__["RoleComponent"]
    },
    {
        path: 'role/:id',
        component: _role_role_component__WEBPACK_IMPORTED_MODULE_18__["RoleComponent"]
    },
    {
        path: 'rolelist',
        component: _role_role_list_component__WEBPACK_IMPORTED_MODULE_19__["RoleListComponent"]
    },
    {
        path: 'user',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_20__["UserComponent"]
    },
    {
        path: 'user/:id',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_20__["UserComponent"]
    },
    {
        path: 'userlist',
        component: _user_user_list_component__WEBPACK_IMPORTED_MODULE_21__["UserListComponent"]
    },
    {
        path: 'forgotpassword',
        component: _login_forget_password_component__WEBPACK_IMPORTED_MODULE_24__["ForgetPasswordComponent"]
    },
    {
        path: 'signup',
        component: _login_user_registration_component__WEBPACK_IMPORTED_MODULE_25__["UserRegistrationComponent"]
    },
    {
        path: 'changepassword',
        component: _user_change_password_component__WEBPACK_IMPORTED_MODULE_22__["ChangePasswordComponent"]
    },
    {
        path: 'myprofile',
        component: _user_my_profile_component__WEBPACK_IMPORTED_MODULE_23__["MyProfileComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
    },
    {
        path: 'login/:in',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__["DashboardComponent"]
    },
    {
        path: '',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_29__["WelcomeComponent"]
    },
    {
        path: '**',
        component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_28__["PageNotFoundComponent"]
    },
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ORS';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/*! exports provided: myHttpLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myHttpLoader", function() { return myHttpLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _college_college_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./college/college.component */ "./src/app/college/college.component.ts");
/* harmony import */ var _college_college_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./college/college-list.component */ "./src/app/college/college-list.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _course_course_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./course/course-list.component */ "./src/app/course/course-list.component.ts");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./faculty/faculty.component */ "./src/app/faculty/faculty.component.ts");
/* harmony import */ var _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./faculty/faculty-list.component */ "./src/app/faculty/faculty-list.component.ts");
/* harmony import */ var _foot_foot_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./foot/foot.component */ "./src/app/foot/foot.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./marksheet/marksheet.component */ "./src/app/marksheet/marksheet.component.ts");
/* harmony import */ var _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./marksheet/marksheet-list.component */ "./src/app/marksheet/marksheet-list.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _role_role_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./role/role-list.component */ "./src/app/role/role-list.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _student_student_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./student/student-list.component */ "./src/app/student/student-list.component.ts");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./subject/subject.component */ "./src/app/subject/subject.component.ts");
/* harmony import */ var _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./subject/subject-list.component */ "./src/app/subject/subject-list.component.ts");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/timetable/timetable.component.ts");
/* harmony import */ var _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./timetable/timetable-list.component */ "./src/app/timetable/timetable-list.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_user_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user/user-list.component */ "./src/app/user/user-list.component.ts");
/* harmony import */ var _user_my_profile_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./user/my-profile.component */ "./src/app/user/my-profile.component.ts");
/* harmony import */ var _user_change_password_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./user/change-password.component */ "./src/app/user/change-password.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_user_registration_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./login/user-registration.component */ "./src/app/login/user-registration.component.ts");
/* harmony import */ var _login_forget_password_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./login/forget-password.component */ "./src/app/login/forget-password.component.ts");
/* harmony import */ var _marksheet_get_marksheet_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./marksheet/get-marksheet.component */ "./src/app/marksheet/get-marksheet.component.ts");
/* harmony import */ var _marksheet_merit_list_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./marksheet/merit-list.component */ "./src/app/marksheet/merit-list.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");











































function myHttpLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_28__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _college_college_component__WEBPACK_IMPORTED_MODULE_5__["CollegeComponent"],
                _college_college_list_component__WEBPACK_IMPORTED_MODULE_6__["CollegeListComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_29__["UserComponent"],
                _user_user_list_component__WEBPACK_IMPORTED_MODULE_30__["UserListComponent"],
                _login_forget_password_component__WEBPACK_IMPORTED_MODULE_37__["ForgetPasswordComponent"],
                _login_user_registration_component__WEBPACK_IMPORTED_MODULE_36__["UserRegistrationComponent"],
                _user_change_password_component__WEBPACK_IMPORTED_MODULE_32__["ChangePasswordComponent"],
                _user_my_profile_component__WEBPACK_IMPORTED_MODULE_31__["MyProfileComponent"],
                _course_course_component__WEBPACK_IMPORTED_MODULE_7__["CourseComponent"],
                _course_course_list_component__WEBPACK_IMPORTED_MODULE_8__["CourseListComponent"],
                _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_10__["FacultyComponent"],
                _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_11__["FacultyListComponent"],
                _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_16__["MarksheetComponent"],
                _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_17__["MarksheetListComponent"],
                _marksheet_get_marksheet_component__WEBPACK_IMPORTED_MODULE_38__["GetMarksheetComponent"],
                _marksheet_merit_list_component__WEBPACK_IMPORTED_MODULE_39__["MeritListComponent"],
                _role_role_component__WEBPACK_IMPORTED_MODULE_19__["RoleComponent"],
                _role_role_list_component__WEBPACK_IMPORTED_MODULE_20__["RoleListComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_21__["StudentComponent"],
                _student_student_list_component__WEBPACK_IMPORTED_MODULE_22__["StudentListComponent"],
                _subject_subject_component__WEBPACK_IMPORTED_MODULE_23__["SubjectComponent"],
                _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_24__["SubjectListComponent"],
                _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_25__["TimetableComponent"],
                _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_26__["TimetableListComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_34__["WelcomeComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_18__["NavComponent"],
                _foot_foot_component__WEBPACK_IMPORTED_MODULE_12__["FootComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_35__["LoginComponent"],
                _page_not_found_component__WEBPACK_IMPORTED_MODULE_40__["PageNotFoundComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_41__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                // ReactiveFormsModule,
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateLoader"],
                        useFactory: myHttpLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]],
                    },
                }),
            ],
            providers: [
                _http_service_service__WEBPACK_IMPORTED_MODULE_14__["HttpServiceService"],
                _utility_data_validator__WEBPACK_IMPORTED_MODULE_9__["DataValidator"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_35__["LoginComponent"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_33__["CookieService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_42__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_42__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/base-list.component.ts":
/*!****************************************!*\
  !*** ./src/app/base-list.component.ts ***!
  \****************************************/
/*! exports provided: BaseListCtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseListCtl", function() { return BaseListCtl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.component */ "./src/app/base.component.ts");




var BaseListCtl = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BaseListCtl, _super);
    function BaseListCtl(endpoint, locator, route) {
        var _this = _super.call(this, endpoint, locator, route) || this;
        _this.endpoint = endpoint;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    /**
     * Initialize component
     */
    BaseListCtl.prototype.ngOnInit = function () {
        this.preload();
        this.form.data.pageNo = 1;
        this.form.data.pageSize = 10;
        this.display();
    };
    BaseListCtl.prototype.display = function () {
        this.form.error = false;
        this.form.message = null;
        this.search();
    };
    BaseListCtl.prototype.submit = function () {
        this.form.error = false;
        this.form.message = null;
        this.form.data.pageNo = 1;
        this.search();
    };
    BaseListCtl.prototype.delete = function (id) {
        _super.prototype.delete.call(this, id, function () {
            this.search();
        });
    };
    BaseListCtl.prototype.next = function () {
        this.form.error = false;
        this.form.message = null;
        this.form.data.pageNo++;
        console.log(this.form.data.pageNo + '----pageNo');
        this.display();
    };
    BaseListCtl.prototype.previous = function () {
        this.form.error = false;
        this.form.message = null;
        if (this.form.data.pageNo > 0) {
            this.form.data.pageNo--;
            this.display();
        }
    };
    BaseListCtl.prototype.reset = function () {
        //this.flag = false;
        this.form.searchParams = {};
        this.form.error = false;
        this.form.message = null;
        this.submit();
    };
    BaseListCtl.prototype.deleteAll = function (ids) {
        for (var i = 0; i < ids.length; i++) {
            this.delete(ids[i]);
        }
    };
    BaseListCtl.prototype.selectAll = function () {
    };
    BaseListCtl.ctorParameters = function () { return [
        null,
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_1__["ServiceLocatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    return BaseListCtl;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]));



/***/ }),

/***/ "./src/app/base.component.ts":
/*!***********************************!*\
  !*** ./src/app/base.component.ts ***!
  \***********************************/
/*! exports provided: BaseCtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCtl", function() { return BaseCtl; });
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endpoint-service.service */ "./src/app/endpoint-service.service.ts");



var BaseCtl = /** @class */ (function () {
    /**
     * Initialize services
     *
     * @param serviceLocator
     * @param route
     */
    function BaseCtl(endpoint, serviceLocator, route) {
        this.endpoint = endpoint;
        this.serviceLocator = serviceLocator;
        this.route = route;
        this.api = {
            endpoint: null,
            get: null,
            save: null,
            search: null,
            delete: null,
            preload: null
        };
        /**
         * Form contains preload data, error/sucess message
         */
        this.form = {
            error: false,
            message: null,
            preload: null,
            data: { id: null, pageNo: 0, pageSize: 10 },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0,
            pageSize: 0,
            count: 0,
        };
        var _self = this;
        _self.initApi(endpoint);
        /**
         * Get primary key from path variale
         */
        serviceLocator.getPathVariable(route, function (params) {
            _self.form.data.id = params["id"];
            console.log('I GOT ID', _self.form.data.id);
        });
    }
    BaseCtl.prototype.reset = function () {
        this.form.error = false,
            this.form.message = null,
            this.form.inputerror = {};
        this.form.data = { id: null, pageNo: null, pageSize: null };
        this.display();
    };
    BaseCtl.prototype.initApi = function (ep) {
        this.api.endpoint = ep;
        this.api.get = ep + "/get";
        this.api.save = ep + "/save";
        this.api.search = ep + "/search";
        this.api.delete = ep + "/delete";
        this.api.preload = ep + "/preload";
        console.log("API", this.api);
    };
    /**
     * Initialize component
     */
    BaseCtl.prototype.ngOnInit = function () {
        this.preload();
        if (this.form.data.id && this.form.data.id > 0) {
            this.display();
        }
    };
    /**
     * Loded preload data
     */
    BaseCtl.prototype.preload = function () {
        var _self = this;
        this.serviceLocator.httpService.get(_self.api.preload, function (res) {
            if (res.success) {
                _self.form.preload = res.result;
            }
            else {
                _self.form.error = true;
                // _self.form.message = res.result.message;
            }
            //console.log('FORM', _self.form);
        });
    };
    BaseCtl.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    /**
     * Override by childs
     *
     * @param form
     */
    BaseCtl.prototype.validateForm = function (form) {
    };
    /**
     * Searhs records
     */
    BaseCtl.prototype.search = function () {
        var _self = this;
        console.log("Search Form", _self.form.searchParams);
        _self.populateForm(_self.form.data, _self.form.searchParams);
        _self.form.searchParams["pageNo"] = _self.form.data.pageNo;
        _self.form.searchParams["pageSize"] = _self.form.data.pageSize;
        this.serviceLocator.httpService.post(_self.api.search, _self.form.searchParams, function (res) {
            console.log('search params under base component' + _self.form.searchParams + "search api under base component" + _self.api.search);
            if (res.success) {
                _self.form.list = res.result.list;
                _self.form.pageNo = res.result.pageNo;
                _self.form.pageSize = res.result.pageSize;
                _self.form.count = res.result.count;
                _self.form.searchParams = res.result.searchParams;
                if (_self.form.count == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.count);
            }
            else {
                _self.form.error = false;
            }
            console.log('FORM', _self.form.message);
        });
    };
    /**
     * Contains display logic. It fetches data from database for the primary key
     */
    BaseCtl.prototype.display = function () {
        var _self = this;
        this.serviceLocator.httpService.get(_self.api.get + "/" + _self.form.data.id, function (res) {
            if (res.success) {
                _self.populateForm(_self.form.data, res.result);
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    /**
     * Populate HTML form data
     * Overridden by child classes.
     *
     * @param form
     * @param data
     */
    BaseCtl.prototype.populateForm = function (form, data) {
        form.id = data.id;
    };
    /**
     * Contains submit logic. It saves data
     */
    BaseCtl.prototype.submit = function () {
        var _self = this;
        console.log("Inside Submit Method");
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            if (res.success) {
                _self.form.message = "Data is saved";
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    BaseCtl.prototype.delete = function (id, callback) {
        var _self = this;
        this.serviceLocator.httpService.get(_self.api.delete + "/" + id, function (res) {
            if (res.success) {
                _self.form.message = "Data is deleted";
                _self.search();
                if (callback) {
                    console.log('callingcallback');
                    callback();
                }
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
        });
    };
    /**
     * Forward to page
     * @param page
     */
    BaseCtl.prototype.forward = function (page) {
        this.serviceLocator.forward(page);
    };
    BaseCtl.ctorParameters = function () { return [
        { type: _endpoint_service_service__WEBPACK_IMPORTED_MODULE_2__["EndpointServiceService"] },
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_0__["ServiceLocatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    return BaseCtl;
}());



/***/ }),

/***/ "./src/app/college/college-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/college/college-list.component.ts ***!
  \***************************************************/
/*! exports provided: CollegeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeListComponent", function() { return CollegeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var CollegeListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CollegeListComponent, _super);
    function CollegeListComponent(serviceLocator, route) {
        var _this = _super.call(this, serviceLocator.endpoints.COLLEGE, serviceLocator, route) || this;
        _this.serviceLocator = serviceLocator;
        _this.route = route;
        return _this;
    }
    CollegeListComponent.prototype.populateForm = function (form, searchParams) {
        form.collegeName = searchParams.collegeName;
        form.city = searchParams.city;
        form.state = searchParams.state;
    };
    CollegeListComponent.ctorParameters = function () { return [
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    CollegeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-college-list',
            template: __webpack_require__(/*! raw-loader!./college-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/college/college-list.component.html"),
        })
    ], CollegeListComponent);
    return CollegeListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/college/college.component.css":
/*!***********************************************!*\
  !*** ./src/app/college/college.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbGxlZ2UvY29sbGVnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/college/college.component.ts":
/*!**********************************************!*\
  !*** ./src/app/college/college.component.ts ***!
  \**********************************************/
/*! exports provided: CollegeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeComponent", function() { return CollegeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CollegeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CollegeComponent, _super);
    function CollegeComponent(serviceLocator, route) {
        var _this = _super.call(this, serviceLocator.endpoints.COLLEGE, serviceLocator, route) || this;
        _this.serviceLocator = serviceLocator;
        _this.route = route;
        return _this;
    }
    // validate() {
    //   return this.validateForm(this.form.data);
    // }
    // validateForm(form) {
    //   let flag = true;
    //   let validator = this.serviceLocator.dataValidator;
    //   flag = flag && validator.isNotNullObject(form.name);
    //   flag = flag && validator.isNotNullObject(form.phoneNo);
    //   return flag;
    // }
    CollegeComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.address = data.address;
        form.state = data.state;
        form.city = data.city;
        form.phoneNo = data.phoneNo;
        console.log('Populated Form', form);
    };
    CollegeComponent.prototype.cancel = function () {
        this.forward('/collegelist');
    };
    CollegeComponent.ctorParameters = function () { return [
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    CollegeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-college',
            template: __webpack_require__(/*! raw-loader!./college.component.html */ "./node_modules/raw-loader/index.js!./src/app/college/college.component.html"),
            styles: [__webpack_require__(/*! ./college.component.css */ "./src/app/college/college.component.css")]
        })
    ], CollegeComponent);
    return CollegeComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/course/course-list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/course/course-list.component.ts ***!
  \*************************************************/
/*! exports provided: CourseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListComponent", function() { return CourseListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var CourseListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseListComponent, _super);
    function CourseListComponent(serviceLocator, route) {
        var _this = _super.call(this, serviceLocator.endpoints.COURSE, serviceLocator, route) || this;
        _this.serviceLocator = serviceLocator;
        _this.route = route;
        return _this;
    }
    CourseListComponent.prototype.populateForm = function (form, searchParams) {
        form.courseName = searchParams.courseName;
        form.courseDescription = searchParams.courseDescription;
        form.courseDuration = searchParams.courseDuration;
        form.email = searchParams.email;
        form.collegeId = searchParams.collegeId;
    };
    CourseListComponent.ctorParameters = function () { return [
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    CourseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-list',
            template: __webpack_require__(/*! raw-loader!./course-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/course/course-list.component.html"),
        })
    ], CourseListComponent);
    return CourseListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/course/course.component.css":
/*!*********************************************!*\
  !*** ./src/app/course/course.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS9jb3Vyc2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/course/course.component.ts":
/*!********************************************!*\
  !*** ./src/app/course/course.component.ts ***!
  \********************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var CourseComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseComponent, _super);
    function CourseComponent(serviceLocator, route) {
        var _this = _super.call(this, serviceLocator.endpoints.COURSE, serviceLocator, route) || this;
        _this.serviceLocator = serviceLocator;
        _this.route = route;
        return _this;
    }
    CourseComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.courseName = data.courseName;
        form.courseDescription = data.courseDescription;
        form.courseDuration = data.courseDuration;
    };
    CourseComponent.prototype.cancel = function () {
        this.forward('/courselist');
    };
    CourseComponent.ctorParameters = function () { return [
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    CourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course',
            template: __webpack_require__(/*! raw-loader!./course.component.html */ "./node_modules/raw-loader/index.js!./src/app/course/course.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")]
        })
    ], CourseComponent);
    return CourseComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]));



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/endpoint-service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/endpoint-service.service.ts ***!
  \*********************************************/
/*! exports provided: EndpointServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointServiceService", function() { return EndpointServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EndpointServiceService = /** @class */ (function () {
    function EndpointServiceService() {
        this.SERVER_URL = "http://localhost:8080";
        //public MESSAGE = this.SERVER_URL + "/Message";
        this.USER = this.SERVER_URL + "/User";
        this.AUTH = this.SERVER_URL + "/Auth";
        this.ROLE = this.SERVER_URL + "/Role";
        this.COLLEGE = this.SERVER_URL + "/College";
        this.FACULTY = this.SERVER_URL + "/Faculty";
        this.COURSE = this.SERVER_URL + "/Course";
        this.SUBJECT = this.SERVER_URL + "/Subject";
        this.MARKSHEET = this.SERVER_URL + "/Marksheet";
        this.TIMETABLE = this.SERVER_URL + "/TimeTable";
        this.STUDENT = this.SERVER_URL + "/Student";
        this.LOGIN = this.SERVER_URL + "/Login";
    }
    EndpointServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], EndpointServiceService);
    return EndpointServiceService;
}());



/***/ }),

/***/ "./src/app/faculty/faculty-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/faculty/faculty-list.component.ts ***!
  \***************************************************/
/*! exports provided: FacultyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyListComponent", function() { return FacultyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var FacultyListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FacultyListComponent, _super);
    function FacultyListComponent(serviceLocator, route) {
        var _this = _super.call(this, serviceLocator.endpoints.FACULTY, serviceLocator, route) || this;
        _this.serviceLocator = serviceLocator;
        _this.route = route;
        return _this;
    }
    FacultyListComponent.prototype.populateForm = function (form, searchParams) {
        form.firstName = searchParams.firstName;
        form.email = searchParams.email;
        form.collegeId = searchParams.collegeId;
    };
    FacultyListComponent.ctorParameters = function () { return [
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    FacultyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faculty-list',
            template: __webpack_require__(/*! raw-loader!./faculty-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/faculty/faculty-list.component.html"),
        })
    ], FacultyListComponent);
    return FacultyListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/faculty/faculty.component.css":
/*!***********************************************!*\
  !*** ./src/app/faculty/faculty.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3VsdHkvZmFjdWx0eS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/faculty/faculty.component.ts":
/*!**********************************************!*\
  !*** ./src/app/faculty/faculty.component.ts ***!
  \**********************************************/
/*! exports provided: FacultyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyComponent", function() { return FacultyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var FacultyComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FacultyComponent, _super);
    function FacultyComponent(serviceLocator, route) {
        var _this = _super.call(this, serviceLocator.endpoints.FACULTY, serviceLocator, route) || this;
        _this.serviceLocator = serviceLocator;
        _this.route = route;
        return _this;
    }
    FacultyComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.email = data.email;
        form.password = data.password;
        form.mobileNo = data.mobileNo;
        form.address = data.address;
        form.gender = data.gender;
        form.collegeId = data.collegeId;
        form.courseId = data.courseId;
        form.subjectId = data.subjectId;
        form.dob = data.dob;
    };
    FacultyComponent.prototype.cancel = function () {
        this.forward('/facultylist');
    };
    FacultyComponent.ctorParameters = function () { return [
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    FacultyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faculty',
            template: __webpack_require__(/*! raw-loader!./faculty.component.html */ "./node_modules/raw-loader/index.js!./src/app/faculty/faculty.component.html"),
            styles: [__webpack_require__(/*! ./faculty.component.css */ "./src/app/faculty/faculty.component.css")]
        })
    ], FacultyComponent);
    return FacultyComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]));



/***/ }),

/***/ "./src/app/foot/foot.component.css":
/*!*****************************************!*\
  !*** ./src/app/foot/foot.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3QvZm9vdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/foot/foot.component.ts":
/*!****************************************!*\
  !*** ./src/app/foot/foot.component.ts ***!
  \****************************************/
/*! exports provided: FootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootComponent", function() { return FootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FootComponent = /** @class */ (function () {
    function FootComponent() {
    }
    FootComponent.prototype.ngOnInit = function () {
    };
    FootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-foot',
            template: __webpack_require__(/*! raw-loader!./foot.component.html */ "./node_modules/raw-loader/index.js!./src/app/foot/foot.component.html"),
            styles: [__webpack_require__(/*! ./foot.component.css */ "./src/app/foot/foot.component.css")]
        })
    ], FootComponent);
    return FootComponent;
}());



/***/ }),

/***/ "./src/app/http-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/http-service.service.ts ***!
  \*****************************************/
/*! exports provided: HttpServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceService", function() { return HttpServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// @Injectable()
// export class HttpServiceService {
//   sessionid = '1BD5F72D01F0164ADBDE1776CD6SUNIL';
//   setSessionId(sid) {
//     this.sessionid = sid;
//     console.log('Session Id', this.sessionid);
//   }
//   constructor(private httpClient: HttpClient) {
//   }
//   getHeader() {
//     let sesCookiee = 'JSESSIONID=' + this.sessionid;
//     //'cookie' :   sesCookiee,
//     let httpOptions = {
//       headers: new HttpHeaders({
//         "withCredentials": "true"
//       })
//     };
//     console.log(httpOptions);
//     return httpOptions;
//   }
//   get(endpoint, callback) {
//     return this.httpClient.get(endpoint, this.getHeader()).subscribe((data) => {
//       console.log(data);
//       callback(data);
//     });;
//   }
//   post(endpoint, bean, callback) {
//     return this.httpClient.post(endpoint, bean, this.getHeader()).subscribe((data) => {
//       console.log(data);
//       callback(data);
//     }, error => {
//       console.log('ORS Error', error);
//     });
//   }
// }




var HttpServiceService = /** @class */ (function () {
    function HttpServiceService(router, httpClient, cookie) {
        this.router = router;
        this.httpClient = httpClient;
        this.cookie = cookie;
    }
    HttpServiceService.prototype.isLogout = function () {
        var _self = this;
        var SessionID = localStorage.getItem('firstName');
        console.log(this.router.url + "------------------------------------------------");
        if ((SessionID == "" || SessionID == null) &&
            (this.router.url != "/login"
                && this.router.url != "/Auth"
                && this.router.url != "/login/logout"
                && this.router.url != "/forgotpassword"
                && this.router.url != "/signup"
                && !this.router.url.includes("/login/"))) {
            if (_self.router.url.includes("login")) {
                var uri = _self.router.url;
            }
            else {
                var uri = '/login' + _self.router.url;
            }
            _self.router.navigateByUrl(uri);
            return true;
        }
        else {
            return false;
        }
    };
    HttpServiceService.prototype.get = function (endpoint, callback) {
        var _self = this;
        if (this.isLogout()) {
            return true;
        }
        return _self.httpClient.get(endpoint, { withCredentials: true }).subscribe(function (data) {
            console.log(data);
            callback(data);
        });
    };
    HttpServiceService.prototype.post = function (endpoint, bean, callback) {
        var _self = this;
        if (this.isLogout()) {
            return true;
        }
        return _self.httpClient.post(endpoint, bean, { withCredentials: true }).subscribe(function (data) {
            console.log(data);
            callback(data);
        }, function (error) {
            console.log('ORS Error', error);
        });
    };
    HttpServiceService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    HttpServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], HttpServiceService);
    return HttpServiceService;
}());



/***/ }),

/***/ "./src/app/login/forget-password.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login/forget-password.component.ts ***!
  \****************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endpoint-service.service */ "./src/app/endpoint-service.service.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");




var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(serviceLocator, endpoint) {
        this.serviceLocator = serviceLocator;
        this.endpoint = endpoint;
        this.form = {
            error: false,
            message: null,
            data: {},
            inputerror: {},
        };
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgetPasswordComponent.prototype.forget = function () {
        var _self = this;
        this.serviceLocator.httpService.post(this.endpoint.AUTH + "/forgetPassword", this.form.data, function (res) {
            if (res.success) {
                // _self.populateForm(this.form.data,res.result.data);
                _self.form.message = res.result;
            }
            else {
                _self.form.inputerror = _self.form.inputerror;
                _self.form.message = _self.form.message;
            }
        });
    };
    //   forgot(){
    //     var _self = this;
    //     this.serviceLocator.httpService.post(this.endpoint.AUTH+"/forgotPassword",this.form.data,function(res){
    //       if(res.success){
    //       // _self.populateForm(this.form.data,res.result.data);
    //         _self.form.message=res.result;
    //       }else{
    //         _self.form.inputerror=_self.form.inputerror;
    //         _self.form.message = _self.form.message;
    //       }
    //     })
    // }
    ForgetPasswordComponent.prototype.populateForm = function (form, data) {
        form.login = data.login;
    };
    ForgetPasswordComponent.ctorParameters = function () { return [
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"] },
        { type: _endpoint_service_service__WEBPACK_IMPORTED_MODULE_2__["EndpointServiceService"] }
    ]; };
    ForgetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forget-password',
            template: __webpack_require__(/*! raw-loader!./forget-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/forget-password.component.html"),
        })
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

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
/* harmony import */ var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endpoint-service.service */ "./src/app/endpoint-service.service.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, endpoint, serviceLocator) {
        this.route = route;
        this.endpoint = endpoint;
        this.serviceLocator = serviceLocator;
        this.form = {
            error: false,
            message: null,
            inputerror: {},
            data: {},
        };
        var s = "in";
        var _self = this;
        this.serviceLocator.getPathVariable(this.route, function (params) {
            s = params["in"];
            console.log(s + "uri------------");
        });
        if (s == "logout") {
            _self.form.message = "Logout Successfull";
        }
        else if (s != undefined) {
            _self.form.error = true;
            _self.form.message = "Session Expired Please Login";
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.reset = function () {
        this.form.error = false,
            this.form.message = null,
            this.form.inputerror = {};
        this.form.data = {};
    };
    LoginComponent.prototype.signIn = function () {
        console.log("login");
        var _self = this;
        var uri = "in";
        this.serviceLocator.httpService.post(this.endpoint.AUTH + '/login', this.form.data, function (res) {
            if (res.success) {
                localStorage.setItem('firstName', res.result.data.firstName);
                localStorage.setItem('roleName', res.result.data.roleName);
                console.log(uri + "uri");
                _self.serviceLocator.getPathVariable(_self.route, function (params) {
                    uri = params["in"];
                    console.log(uri + "uri------------");
                });
                if (uri == undefined) {
                    console.log("1");
                    _self.serviceLocator.forward('dashboard');
                }
                else if (uri == "logout") {
                    _self.serviceLocator.forward('dashboard');
                }
                else if (uri != undefined) {
                    _self.serviceLocator.forward(uri);
                }
            }
            else {
                console.log('inelse');
                _self.populateForm(_self.form.data, res.result.data);
                _self.form.inputerror = res.result.inputerror;
                console.log("------------------", res.result.inputerror);
                _self.form.error = false;
                if (res.result.message) {
                    _self.form.error = true;
                    _self.form.message = res.result.message;
                }
                else {
                    _self.form.message = null;
                }
            }
        });
    };
    LoginComponent.prototype.signUp = function () {
        this.serviceLocator.forward('signup');
    };
    LoginComponent.prototype.populateForm = function (form, data) {
        form.login = data.login;
        form.password = data.password;
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _endpoint_service_service__WEBPACK_IMPORTED_MODULE_2__["EndpointServiceService"] },
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/user-registration.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login/user-registration.component.ts ***!
  \******************************************************/
/*! exports provided: UserRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function() { return UserRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endpoint-service.service */ "./src/app/endpoint-service.service.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");






var UserRegistrationComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserRegistrationComponent, _super);
    function UserRegistrationComponent(router, endpoint, serviceLocator) {
        var _this = _super.call(this, router, endpoint, serviceLocator) || this;
        _this.router = router;
        _this.endpoint = endpoint;
        _this.serviceLocator = serviceLocator;
        return _this;
    }
    UserRegistrationComponent.prototype.reset = function () {
        this.form.error = false,
            this.form.message = null,
            this.form.inputerror = {};
        this.form.data = {};
    };
    UserRegistrationComponent.prototype.ngOnInit = function () {
    };
    UserRegistrationComponent.prototype.submit = function () {
        var _self = this;
        _self.serviceLocator.httpService.post(this.endpoint.AUTH + "/register", this.form.data, function (res) {
            if (res.success) {
                _self.form.message = "User Registered Successfull please login";
                _self.populateForm(_self.form.data, res.result.data);
                _self.form.inputerror = res.result.inputerror;
            }
            else {
                _self.populateForm(_self.form.data, res.result.data);
                _self.form.inputerror = res.result.inputerror;
                console.log(_self.form.inputerror);
            }
        });
    };
    UserRegistrationComponent.prototype.populateForm = function (form, data) {
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.login = data.login;
        form.password = data.password;
        form.gender = data.gender;
        form.mobileNo = data.mobileNo;
        form.dob = data.dob;
    };
    UserRegistrationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _endpoint_service_service__WEBPACK_IMPORTED_MODULE_3__["EndpointServiceService"] },
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] }
    ]; };
    UserRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-registration',
            template: __webpack_require__(/*! raw-loader!./user-registration.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/user-registration.component.html"),
        })
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}(_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]));



/***/ }),

/***/ "./src/app/marksheet/get-marksheet.component.ts":
/*!******************************************************!*\
  !*** ./src/app/marksheet/get-marksheet.component.ts ***!
  \******************************************************/
/*! exports provided: GetMarksheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMarksheetComponent", function() { return GetMarksheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endpoint-service.service */ "./src/app/endpoint-service.service.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");




var GetMarksheetComponent = /** @class */ (function () {
    function GetMarksheetComponent(httpService, endpoint) {
        this.httpService = httpService;
        this.endpoint = endpoint;
        this.form = {
            error: false,
            message: null,
            data: {},
            searchParams: {},
            inputerror: {}
        };
    }
    GetMarksheetComponent.prototype.ngOnInit = function () {
    };
    GetMarksheetComponent.prototype.submit = function () {
        var _self = this;
        this.flag = false;
        this.httpService.post(_self.endpoint.MARKSHEET + "/getMarksheet", this.form, function (res) {
            if (res.success) {
                _self.flag = true;
                _self.form.data = res.result;
            }
            else {
                _self.flag = false;
                _self.form.error = true;
                _self.form.inputerror = res.inputerror;
            }
        });
    };
    GetMarksheetComponent.prototype.populateForm = function (form, data) {
    };
    GetMarksheetComponent.prototype.reset = function () {
        this.form.data = {};
        this.flag = false;
        this.form.error = false;
        this.form.message = null;
    };
    GetMarksheetComponent.ctorParameters = function () { return [
        { type: _http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
        { type: _endpoint_service_service__WEBPACK_IMPORTED_MODULE_2__["EndpointServiceService"] }
    ]; };
    GetMarksheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-get-marksheet',
            template: __webpack_require__(/*! raw-loader!./get-marksheet.component.html */ "./node_modules/raw-loader/index.js!./src/app/marksheet/get-marksheet.component.html")
        })
    ], GetMarksheetComponent);
    return GetMarksheetComponent;
}());



/***/ }),

/***/ "./src/app/marksheet/marksheet-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/marksheet/marksheet-list.component.ts ***!
  \*******************************************************/
/*! exports provided: MarksheetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksheetListComponent", function() { return MarksheetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var MarksheetListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarksheetListComponent, _super);
    function MarksheetListComponent(serviceLocator, route) {
        var _this = _super.call(this, serviceLocator.endpoints.MARKSHEET, serviceLocator, route) || this;
        _this.serviceLocator = serviceLocator;
        _this.route = route;
        return _this;
    }
    MarksheetListComponent.prototype.populateForm = function (form, searchParams) {
        form.firstName = searchParams.firstName;
        form.email = searchParams.email;
        form.studentId = searchParams.studentId;
        form.rollNo = searchParams.rollNo;
    };
    MarksheetListComponent.prototype.result = function (physics, maths, chemistry) {
        if ((physics + maths + chemistry) / 3 >= 35.0 && physics >= 35 && maths >= 35 && chemistry >= 35) {
            return true;
        }
        else {
            return false;
        }
    };
    MarksheetListComponent.prototype.percentage = function (physics, maths, chemistry) {
        var per = 0.00;
        per = (physics + maths + chemistry) / 3;
    };
    MarksheetListComponent.ctorParameters = function () { return [
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    MarksheetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marksheet-list',
            template: __webpack_require__(/*! raw-loader!./marksheet-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/marksheet/marksheet-list.component.html"),
        })
    ], MarksheetListComponent);
    return MarksheetListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/marksheet/marksheet.component.css":
/*!***************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcmtzaGVldC9tYXJrc2hlZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/marksheet/marksheet.component.ts":
/*!**************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.ts ***!
  \**************************************************/
/*! exports provided: MarksheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksheetComponent", function() { return MarksheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var MarksheetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarksheetComponent, _super);
    function MarksheetComponent(serviceLocator, route) {
        var _this = _super.call(this, serviceLocator.endpoints.MARKSHEET, serviceLocator, route) || this;
        _this.serviceLocator = serviceLocator;
        _this.route = route;
        return _this;
    }
    MarksheetComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.rollNo = data.rollNo;
        form.studentId = data.studentId;
        form.physics = data.physics;
        form.chemistry = data.chemistry;
        form.maths = data.maths;
    };
    MarksheetComponent.prototype.cancel = function () {
        this.forward('/marksheetlist');
    };
    MarksheetComponent.ctorParameters = function () { return [
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    MarksheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marksheet',
            template: __webpack_require__(/*! raw-loader!./marksheet.component.html */ "./node_modules/raw-loader/index.js!./src/app/marksheet/marksheet.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        })
    ], MarksheetComponent);
    return MarksheetComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]));



/***/ }),

/***/ "./src/app/marksheet/merit-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/marksheet/merit-list.component.ts ***!
  \***************************************************/
/*! exports provided: MeritListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeritListComponent", function() { return MeritListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endpoint-service.service */ "./src/app/endpoint-service.service.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");




var MeritListComponent = /** @class */ (function () {
    function MeritListComponent(httpService, endpoint) {
        this.httpService = httpService;
        this.endpoint = endpoint;
        this.form = {
            list: [],
            error: false,
            pageNo: 0,
            //pageSize: 0,
            count: 0
        };
    }
    MeritListComponent.prototype.ngOnInit = function () {
        this.meritList();
    };
    MeritListComponent.prototype.result = function (physics, maths, chemistry) {
        if ((physics + maths + chemistry) / 3 >= 35.0 && physics >= 35 && maths >= 35 && chemistry >= 35) {
            return true;
        }
        else {
            return false;
        }
    };
    MeritListComponent.prototype.meritList = function () {
        var _self = this;
        _self.httpService.get(_self.endpoint.MARKSHEET + "/meritList", function (res) {
            if (res.success) {
                _self.form.error = false;
                _self.form.list = res.result.list;
                _self.form.pageNo = res.result.pageNo;
                //    _self.form.pageSize = res.result.pageSize;
                _self.form.count = res.result.count;
            }
            else {
                _self.form.error = true;
            }
        });
    };
    MeritListComponent.ctorParameters = function () { return [
        { type: _http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] },
        { type: _endpoint_service_service__WEBPACK_IMPORTED_MODULE_2__["EndpointServiceService"] }
    ]; };
    MeritListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-merit-list',
            template: __webpack_require__(/*! raw-loader!./merit-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/marksheet/merit-list.component.html"),
        })
    ], MeritListComponent);
    return MeritListComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endpoint-service.service */ "./src/app/endpoint-service.service.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");



//import { CookieService } from 'ngx-cookie-service';


var NavComponent = /** @class */ (function () {
    function NavComponent(translate, serviceLocator, endpoint) {
        this.translate = translate;
        this.serviceLocator = serviceLocator;
        this.endpoint = endpoint;
        this.firstName = '';
        this.roleName = '';
        this.menu = {};
        this.changeLocale("en");
        translate.setDefaultLang(localStorage.getItem("locale"));
    }
    NavComponent.prototype.changeLocale = function (locale) {
        localStorage.setItem("locale", locale);
        this.translate.use(localStorage.getItem("locale"));
        this.ngOnInit();
    };
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.checkLogin = function () {
        var _self = this;
        var session = '';
        session = localStorage.getItem('firstName');
        if (session != null) {
            this.firstName = localStorage.getItem('firstName');
            this.roleName = localStorage.getItem('roleName');
            return true;
        }
        return false;
    };
    NavComponent.prototype.logout = function () {
        var _self = this;
        this.serviceLocator.httpService.get(this.endpoint.AUTH + "/logout", function (res) {
            if (res.success) {
                localStorage.removeItem('firstName');
                localStorage.removeItem('roleName');
                _self.serviceLocator.forward('login/logout');
            }
            else {
                console.log('inelse');
            }
        });
        //_self.cookie.delete('connect.sid');
    };
    NavComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
        { type: _endpoint_service_service__WEBPACK_IMPORTED_MODULE_3__["EndpointServiceService"] }
    ]; };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        })
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page-not-found.component.ts ***!
  \*********************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-locator.service */ "./src/app/service-locator.service.ts");



var PageNotFoundComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PageNotFoundComponent, _super);
    function PageNotFoundComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found.component.html"),
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}(_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"]));



/***/ }),

/***/ "./src/app/role/role-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/role/role-list.component.ts ***!
  \*********************************************/
/*! exports provided: RoleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListComponent", function() { return RoleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var RoleListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RoleListComponent, _super);
    function RoleListComponent(serviceLocator, route) {
        var _this = _super.call(this, serviceLocator.endpoints.ROLE, serviceLocator, route) || this;
        _this.serviceLocator = serviceLocator;
        _this.route = route;
        return _this;
    }
    RoleListComponent.prototype.populateForm = function (form, searchParams) {
        form.name = searchParams.name;
        form.description = searchParams.description;
    };
    RoleListComponent.ctorParameters = function () { return [
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    RoleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-list',
            template: __webpack_require__(/*! raw-loader!./role-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/role/role-list.component.html"),
        })
    ], RoleListComponent);
    return RoleListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/role/role.component.css":
/*!*****************************************!*\
  !*** ./src/app/role/role.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGUvcm9sZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/role/role.component.ts":
/*!****************************************!*\
  !*** ./src/app/role/role.component.ts ***!
  \****************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var RoleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RoleComponent, _super);
    function RoleComponent(serviceLocator, route) {
        var _this = _super.call(this, serviceLocator.endpoints.ROLE, serviceLocator, route) || this;
        _this.serviceLocator = serviceLocator;
        _this.route = route;
        return _this;
    }
    RoleComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.description = data.description;
    };
    RoleComponent.prototype.cancel = function () {
        this.forward('/rolelist');
    };
    RoleComponent.ctorParameters = function () { return [
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    RoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! raw-loader!./role.component.html */ "./node_modules/raw-loader/index.js!./src/app/role/role.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/role/role.component.css")]
        })
    ], RoleComponent);
    return RoleComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/service-locator.service.ts":
/*!********************************************!*\
  !*** ./src/app/service-locator.service.ts ***!
  \********************************************/
/*! exports provided: ServiceLocatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceLocatorService", function() { return ServiceLocatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./endpoint-service.service */ "./src/app/endpoint-service.service.ts");





var ServiceLocatorService = /** @class */ (function () {
    function ServiceLocatorService(hs, r, ep) {
        this.hs = hs;
        this.r = r;
        this.ep = ep;
        this.httpService = null;
        this.dataValidator = null;
        this.router = null;
        this.endpoints = null;
        this.httpService = hs;
        this.router = r;
        this.endpoints = ep;
    }
    /**
     * get path variable from url
     *
     * @param route
     * @param callback
     */
    ServiceLocatorService.prototype.getPathVariable = function (route, callback) {
        route.params.subscribe(function (params) {
            callback(params);
        });
    };
    /**
     * Forward to page
     *
     * @param page
     */
    ServiceLocatorService.prototype.forward = function (page) {
        this.router.navigateByUrl(page);
    };
    ServiceLocatorService.ctorParameters = function () { return [
        { type: _http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _endpoint_service_service__WEBPACK_IMPORTED_MODULE_4__["EndpointServiceService"] }
    ]; };
    ServiceLocatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ServiceLocatorService);
    return ServiceLocatorService;
}());



/***/ }),

/***/ "./src/app/student/student-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/student/student-list.component.ts ***!
  \***************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var StudentListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentListComponent, _super);
    function StudentListComponent(serviceLocator, route) {
        var _this = _super.call(this, serviceLocator.endpoints.STUDENT, serviceLocator, route) || this;
        _this.serviceLocator = serviceLocator;
        _this.route = route;
        return _this;
    }
    StudentListComponent.prototype.populateForm = function (form, searchParams) {
        form.firstName = searchParams.firstName;
        form.email = searchParams.email;
        form.collegeId = searchParams.collegeId;
    };
    StudentListComponent.ctorParameters = function () { return [
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    StudentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-list',
            template: __webpack_require__(/*! raw-loader!./student-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/student/student-list.component.html"),
        })
    ], StudentListComponent);
    return StudentListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var StudentComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentComponent, _super);
    function StudentComponent(serviceLocator, route) {
        var _this = _super.call(this, serviceLocator.endpoints.STUDENT, serviceLocator, route) || this;
        _this.serviceLocator = serviceLocator;
        _this.route = route;
        return _this;
    }
    StudentComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.dob = data.dob;
        form.mobileNo = data.mobileNo;
        form.email = data.email;
        form.collegeId = data.collegeId;
        form.image = data.image;
    };
    StudentComponent.prototype.cancel = function () {
        this.forward('/studentlist');
    };
    StudentComponent.ctorParameters = function () { return [
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! raw-loader!./student.component.html */ "./node_modules/raw-loader/index.js!./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        })
    ], StudentComponent);
    return StudentComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/subject/subject-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/subject/subject-list.component.ts ***!
  \***************************************************/
/*! exports provided: SubjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectListComponent", function() { return SubjectListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var SubjectListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectListComponent, _super);
    function SubjectListComponent(serviceLocator, route) {
        var _this = _super.call(this, serviceLocator.endpoints.SUBJECT, serviceLocator, route) || this;
        _this.serviceLocator = serviceLocator;
        _this.route = route;
        return _this;
    }
    SubjectListComponent.prototype.populateForm = function (form, searchParams) {
        form.subjectId = searchParams.subjectId;
        form.subjectName = searchParams.subjectName;
        form.courseId = searchParams.courseId;
    };
    SubjectListComponent.ctorParameters = function () { return [
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    SubjectListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject-list',
            template: __webpack_require__(/*! raw-loader!./subject-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/subject/subject-list.component.html"),
        })
    ], SubjectListComponent);
    return SubjectListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/subject/subject.component.css":
/*!***********************************************!*\
  !*** ./src/app/subject/subject.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmplY3Qvc3ViamVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/subject/subject.component.ts":
/*!**********************************************!*\
  !*** ./src/app/subject/subject.component.ts ***!
  \**********************************************/
/*! exports provided: SubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectComponent", function() { return SubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SubjectComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectComponent, _super);
    function SubjectComponent(serviceLocator, route) {
        var _this = _super.call(this, serviceLocator.endpoints.SUBJECT, serviceLocator, route) || this;
        _this.serviceLocator = serviceLocator;
        _this.route = route;
        return _this;
    }
    SubjectComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.subjectId = data.subjectId;
        form.subjectName = data.subjectName;
        form.subjectDescription = data.subjectDescription;
        form.courseId = data.courseId;
    };
    SubjectComponent.prototype.cancel = function () {
        this.forward('/subjectlist');
    };
    SubjectComponent.ctorParameters = function () { return [
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    SubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject',
            template: __webpack_require__(/*! raw-loader!./subject.component.html */ "./node_modules/raw-loader/index.js!./src/app/subject/subject.component.html"),
            styles: [__webpack_require__(/*! ./subject.component.css */ "./src/app/subject/subject.component.css")]
        })
    ], SubjectComponent);
    return SubjectComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/timetable/timetable-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/timetable/timetable-list.component.ts ***!
  \*******************************************************/
/*! exports provided: TimetableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableListComponent", function() { return TimetableListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var TimetableListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TimetableListComponent, _super);
    function TimetableListComponent(serviceLocator, route) {
        var _this = _super.call(this, serviceLocator.endpoints.TIMETABLE, serviceLocator, route) || this;
        _this.serviceLocator = serviceLocator;
        _this.route = route;
        return _this;
    }
    TimetableListComponent.prototype.populateForm = function (form, searchParams) {
        form.courseId = searchParams.courseId;
        form.subjectId = searchParams.subjectId;
        form.semester = searchParams.semester;
        form.examDate = searchParams.examDate;
    };
    TimetableListComponent.ctorParameters = function () { return [
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    TimetableListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timetable-list',
            template: __webpack_require__(/*! raw-loader!./timetable-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/timetable/timetable-list.component.html"),
        })
    ], TimetableListComponent);
    return TimetableListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/timetable/timetable.component.css":
/*!***************************************************!*\
  !*** ./src/app/timetable/timetable.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWV0YWJsZS90aW1ldGFibGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/timetable/timetable.component.ts":
/*!**************************************************!*\
  !*** ./src/app/timetable/timetable.component.ts ***!
  \**************************************************/
/*! exports provided: TimetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableComponent", function() { return TimetableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var TimetableComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TimetableComponent, _super);
    function TimetableComponent(serviceLocator, route) {
        var _this = _super.call(this, serviceLocator.endpoints.TIMETABLE, serviceLocator, route) || this;
        _this.serviceLocator = serviceLocator;
        _this.route = route;
        return _this;
    }
    TimetableComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.examTime = data.examTime;
        form.examDate = data.examDate;
        form.subjectId = data.subjectId;
        form.courseId = data.courseId;
        form.semester = data.semester;
    };
    TimetableComponent.prototype.cancel = function () {
        this.forward('/timetablelist');
    };
    TimetableComponent.ctorParameters = function () { return [
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    TimetableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timetable',
            template: __webpack_require__(/*! raw-loader!./timetable.component.html */ "./node_modules/raw-loader/index.js!./src/app/timetable/timetable.component.html"),
            styles: [__webpack_require__(/*! ./timetable.component.css */ "./src/app/timetable/timetable.component.css")]
        })
    ], TimetableComponent);
    return TimetableComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]));



/***/ }),

/***/ "./src/app/user/change-password.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/change-password.component.ts ***!
  \***************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");






var ChangePasswordComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ChangePasswordComponent, _super);
    function ChangePasswordComponent(serviceLocator, route, httpClient) {
        var _this = _super.call(this, serviceLocator.endpoints.USER, serviceLocator, route) || this;
        _this.serviceLocator = serviceLocator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    ChangePasswordComponent.prototype.submit = function () {
        var _self = this;
        this.serviceLocator.httpService.post(this.api.endpoint + "/changePassword", this.form.data, function (res) {
            if (res.success) {
                _self.form.error = false;
                _self.form.message = "Password Changed successfully";
            }
            else {
                _self.form.error = true;
                _self.form.message = "Error";
            }
        });
    };
    ChangePasswordComponent.prototype.populateForm = function (form, data) {
        form.oldPassword = data.oldPassword;
        form.password = data.password;
        form.confirmPassword = form.confirmPassword;
    };
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_5__["ServiceLocatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/change-password.component.html"),
        })
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/user/my-profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/user/my-profile.component.ts ***!
  \**********************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");






var MyProfileComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MyProfileComponent, _super);
    function MyProfileComponent(serviceLocator, route, httpClient) {
        var _this = _super.call(this, serviceLocator.endpoints.USER, serviceLocator, route) || this;
        _this.serviceLocator = serviceLocator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.uploadId = 0;
        _this.getKey = false;
        _this.selected = null;
        _this.fileToUpload = null;
        _this.userForm = null;
        return _this;
    }
    MyProfileComponent.prototype.ngOnInit = function () {
        var _self = this;
        this.serviceLocator.httpService.get(_self.api.endpoint + "/myProfile", function (res) {
            if (res.success) {
                _self.populateForm(_self.form.data, res.result);
            }
            else {
                _self.form.error = true;
                _self.form.message = "error";
                _self.form.inputerror = res.result.inputerror;
            }
        });
    };
    MyProfileComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.login = data.login;
        form.password = data.password;
        form.gender = data.gender;
        form.mobileNo = data.mobileNo;
        form.dob = data.dob;
        form.status = data.status;
        form.roleId = data.roleId;
        form.picName = data.picName;
    };
    MyProfileComponent.prototype.myFile = function () {
        var _this = this;
        this.onSubmitProfile(this.fileToUpload, this.userForm).subscribe(function (data) {
            console.log(_this.fileToUpload);
        }, function (error) {
            console.log(error);
        });
    };
    MyProfileComponent.prototype.onSubmitProfile = function (fileToUpload, userform) {
        var formData = new FormData();
        var _self = this;
        formData.append('pic', fileToUpload);
        return this.httpClient.post(this.endpoint.USER + "/profilePic/" + this.uploadId, formData, { withCredentials: true });
    };
    MyProfileComponent.prototype.onFileSelect = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    MyProfileComponent.prototype.onUpload = function (userform) {
        this.submit();
    };
    MyProfileComponent.ctorParameters = function () { return [
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_5__["ServiceLocatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    MyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-my-profile',
            template: __webpack_require__(/*! raw-loader!./my-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/my-profile.component.html"),
        })
    ], MyProfileComponent);
    return MyProfileComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/user/user-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-list.component.ts ***!
  \*********************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var UserListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserListComponent, _super);
    function UserListComponent(serviceLocator, route) {
        var _this = _super.call(this, serviceLocator.endpoints.USER, serviceLocator, route) || this;
        _this.serviceLocator = serviceLocator;
        _this.route = route;
        return _this;
    }
    UserListComponent.prototype.populateForm = function (form, searchParams) {
        form.firstName = searchParams.firstName;
        form.login = searchParams.login;
        form.roleId = searchParams.roleId;
    };
    UserListComponent.prototype.search = function () {
        //this.form.data.pageSize=5;
        _super.prototype.search.call(this);
    };
    UserListComponent.ctorParameters = function () { return [
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user-list.component.html"),
        })
    ], UserListComponent);
    return UserListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var UserComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserComponent, _super);
    function UserComponent(serviceLocator, route, httpClient) {
        var _this = _super.call(this, serviceLocator.endpoints.USER, serviceLocator, route) || this;
        _this.serviceLocator = serviceLocator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.uploadId = 0;
        _this.fileToUpload = null;
        _this.userForm = null;
        return _this;
    }
    UserComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.login = data.login;
        form.password = data.password;
        form.gender = data.gender;
        form.mobileNo = data.mobileNo;
        form.dob = data.dob;
        form.status = data.status;
        form.roleId = data.roleId;
        form.roleName = data.roleName;
    };
    UserComponent.prototype.submit = function () {
        var _self = this;
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = null;
            _self.form.inputerror = {};
            if (res.success) {
                _self.uploadId = res.result;
                if (_self.fileToUpload != null) {
                    _self.myFile();
                }
                _self.form.error = false;
                _self.form.message = "Data is saved";
                //_self.forward('/user/'+res.result)
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            //console.log('FORM', _self.form);
        });
    };
    UserComponent.prototype.myFile = function () {
        var _this = this;
        console.log(this.form.data.id + 'after super.submit-----');
        this.onSubmitProfile(this.fileToUpload, this.userForm).subscribe(function (data) {
            console.log(_this.fileToUpload);
        }, function (error) {
            console.log(error);
        });
    };
    UserComponent.prototype.onSubmitProfile = function (fileToUpload, userform) {
        var formData = new FormData();
        var _self = this;
        formData.append('pic', fileToUpload);
        console.log(this.uploadId + 'this id number ======');
        return this.httpClient.post("http://localhost:8080/User/profilePic/" + this.uploadId, formData, { withCredentials: true });
    };
    UserComponent.prototype.onFileSelect = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    UserComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    UserComponent.prototype.cancel = function () {
        this.forward('/userlist');
    };
    UserComponent.ctorParameters = function () { return [
        { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        })
    ], UserComponent);
    return UserComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/utility/data-validator.ts":
/*!*******************************************!*\
  !*** ./src/app/utility/data-validator.ts ***!
  \*******************************************/
/*! exports provided: DataValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataValidator", function() { return DataValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataValidator = /** @class */ (function () {
    function DataValidator() {
    }
    DataValidator.prototype.trim = function (valueToWhite) {
        return valueToWhite.replace(/\s/g, "");
    };
    /**
     * Check is string is not empty
     * @param val
     */
    DataValidator.prototype.isNotNull = function (val) {
        var flag = true;
        try {
            if (val) {
                val = this.trim(val);
                flag = val.length > 0;
            }
            else {
                flag = false;
            }
        }
        catch (error) {
            flag = false;
        }
        return flag;
    };
    /**
   * Is string is empty
   * @param val
   */
    DataValidator.prototype.isNull = function (val) {
        return !this.isNotNullObject(val);
    };
    /**
     * Is not null object
     */
    DataValidator.prototype.isNotNullObject = function (val) {
        var flag = true;
        try {
            if (val) {
                flag = true;
            }
            else {
                flag = false;
            }
        }
        catch (error) {
            flag = false;
        }
        return flag;
    };
    /**
     * Is null object
     */
    DataValidator.prototype.isNullObject = function (val) {
        return !this.isNotNullObject(val);
    };
    DataValidator.prototype.isTrue = function (val) {
        var flag = true;
        if (val) {
            flag = true;
        }
        else {
            flag = false;
        }
        return flag;
    };
    /**
     *
     * @param val Convets string into number
     */
    DataValidator.prototype.toInt = function (val) {
        var returnVal = 0;
        if (val) {
            try {
                returnVal = parseInt(val);
                if (isNaN(returnVal)) {
                    returnVal = 0;
                }
            }
            catch (error) {
                returnVal = 0;
            }
        }
        return returnVal;
    };
    DataValidator.prototype.toFloat = function (val) {
        var returnVal = 0;
        if (val) {
            try {
                returnVal = parseFloat(val);
                if (isNaN(returnVal)) {
                    returnVal = 0;
                }
            }
            catch (error) {
                returnVal = 0;
            }
        }
        return returnVal;
    };
    /**
     * Create clone pobject
     *
     * @param obj
     */
    DataValidator.prototype.getClone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    DataValidator = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DataValidator);
    return DataValidator;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        })
    ], WelcomeComponent);
    return WelcomeComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Sarvagya\Desktop\Project05\ORS\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map