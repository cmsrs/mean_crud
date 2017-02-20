"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:3000/api/user';
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.options = options;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.apiUrl)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.apiUrl, user, this.options);
        //.map(this.extractData)
        //.catch(this.handleError);
    };
    UserService.prototype.getUserById = function (id) {
        return this.http.get(this.apiUrl + '/' + id, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.extractData = function (res) {
        var body = res.json();
        //let out = body.data || { };
        //console.log( body  );
        return body || {};
    };
    UserService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        //console.log('jest_err');
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    UserService.prototype.updateUserByUserObj = function (user) {
        //console.log( user );
        return this.http.put(this.apiUrl + '/' + user._id, user, this.options);
        //.map(this.extractData)
        //.catch(this.handleError);
    };
    UserService.prototype.deleteUser = function (id) {
        var out = this.http.delete(this.apiUrl + '/' + id, this.options);
        return out;
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map