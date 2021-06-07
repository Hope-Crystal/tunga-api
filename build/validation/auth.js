"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthValidation = /** @class */ (function () {
    function AuthValidation() {
    }
    AuthValidation.login = function (req, res, next) {
        var _a = req.body, email = _a.email, password = _a.password;
        if (typeof email !== "string")
            throw "Email must be a string";
        if (typeof password !== "string")
            throw "password must be a string";
        if (password.length < 6)
            throw "Password mush not be less than six (6) characters";
        next();
    };
    AuthValidation.register = function (req, res, next) {
        var _a = req.body, name = _a.name, email = _a.email, password = _a.password;
        if (typeof name !== "string")
            throw "Name must be string";
        if (typeof email !== "string")
            throw "Email must be a string";
        if (typeof password !== "string")
            throw "password must be a string";
        next();
    };
    return AuthValidation;
}());
exports.default = AuthValidation;
