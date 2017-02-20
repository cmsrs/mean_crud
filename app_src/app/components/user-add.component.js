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
var user_service_1 = require('../services/user.service');
var router_1 = require('@angular/router');
var UserAddComponent = (function () {
    function UserAddComponent(userService, _router) {
        this.userService = userService;
        this._router = _router;
        this.user = {};
        this.isEdit = false;
    }
    UserAddComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this.userService.createUser(this.user).
            subscribe(function (user) { }, //  this.user.push(user),
        function (//  this.user.push(user),
            error) { return _this.errorMessage = error; });
        this._router.navigateByUrl('/');
    };
    UserAddComponent = __decorate([
        core_1.Component({
            selector: 'user-add',
            templateUrl: 'app/components/user-form.html',
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], UserAddComponent);
    return UserAddComponent;
}());
exports.UserAddComponent = UserAddComponent;
//# sourceMappingURL=user-add.component.js.map