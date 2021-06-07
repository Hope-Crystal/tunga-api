"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("./user"));
var Auth = /** @class */ (function () {
    function Auth() {
        this.users = [];
        var user1 = new user_1.default("Sarah", "sarah@yahoo.com", "123456");
        var user2 = new user_1.default("Hope", "hope@gmail.com", "hope123");
        var user3 = new user_1.default("Deborah", "deborah@gmail.com", "hope123");
        this.users = [user1, user2, user3];
    }
    Auth.prototype.login = function (email, password) {
        var user = this.users.find(function (e) {
            var isMatch = e.email === email && e.password === password;
            return isMatch;
        });
        if (!user)
            throw new Error("Invalid email or password");
        user.lastLogin = new Date().toDateString();
        return user.name + "welcome back!";
    };
    Auth.prototype.register = function (name, email, password) {
        var user = new user_1.default(name, email, password);
    };
    return Auth;
}());
exports.default = Auth;
