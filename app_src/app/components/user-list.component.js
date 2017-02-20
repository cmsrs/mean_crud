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
var UserListComponent = (function () {
    function UserListComponent(userService) {
        this.userService = userService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) {
            _this.users = users;
        });
    };
    UserListComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.deleteUser(id).subscribe(function (del) {
            for (var i = 0; i < _this.users.length; i++) {
                if (id == _this.users[i]._id) {
                    _this.users.splice(i, 1);
                }
            }
        });
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'users',
            template: "\n\t\t<div class=\"user-list\">\n\t\t\t<table class=\"table table-striped\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th>No</th>\n\t\t\t\t\t<th>First Name</th>\n\t\t\t\t\t<th>Last Name</th>\n\t\t\t\t\t<th>Age</th>\n\t\t\t\t\t<th>First Name Mother</th>\n\t\t\t\t\t<th>First Name Father</th>\n\t\t\t\t\t<th></th>\n\t\t\t\t</tr>\n\t\t\t\t<tr *ngFor=\"let user of users, let i = index \">\n\t\t\t\t\t<td>{{i+1}}</td>\n\t\t\t\t\t<td>{{user.first_name}}</td>\n\t\t\t\t\t<td>{{user.last_name}}</td>\n\t\t\t\t\t<td>{{user.age}}</td>\n\t\t\t\t\t<td>{{user.first_name_mother}}</td>\n\t\t\t\t\t<td>{{user.first_name_father}}</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a  [routerLink]=\"['/edit', user._id]\" class=\"btn btn-default\">Edit</a> \n\t\t\t\t\t\t<a  (click)=\"deleteUser(user._id)\" class=\"btn btn-danger\">Delete</a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t   </table>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map