"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = __importDefault(require("../modules/auth"));
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.login = function (req, res) {
        var _a = req.body, email = _a.email, password = _a.password;
        var auth = new auth_1.default();
        var result = auth.login(email, password);
        res.send({ message: 'Login successful' });
    };
    AuthController.register = function (req, res) {
        var _a = req.body, name = _a.name, email = _a.email, password = _a.password;
        var auth = new auth_1.default();
        var result = auth.register(name, email, password);
        res.send({
            message: "Account successfully created " + name + ", " + email
        });
    };
    return AuthController;
}());
exports.default = AuthController;
