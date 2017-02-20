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
var UserEditComponent = (function () {
    function UserEditComponent(_userService, _router, _route) {
        this._userService = _userService;
        this._router = _router;
        this._route = _route;
        this.user = {};
        this.isEdit = true;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this._userService.getUserById(this.id).subscribe(function (user) {
            _this.user = user;
        });
    };
    UserEditComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this._userService.updateUserByUserObj(this.user).subscribe(function (ans) { }, function (error) { return _this.errorMessage = error; });
        this._router.navigateByUrl('/');
    };
    UserEditComponent = __decorate([
        core_1.Component({
            selector: 'user-edit',
            templateUrl: 'app/components/user-form.html',
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, router_1.ActivatedRoute])
    ], UserEditComponent);
    return UserEditComponent;
}());
exports.UserEditComponent = UserEditComponent;
//# sourceMappingURL=user-edit.component.js.map