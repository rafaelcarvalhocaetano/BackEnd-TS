"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const Config_1 = require("../utils/Config");
class Auth {
    validate(req, res, next) {
        Config_1.default;
        const token = req.headers['x-access-token'];
        if (token) {
            jwt.verify(token, Config_1.default.secret, (e, decoded) => {
                if (e) {
                    return res.status(403).send({
                        success: false,
                        message: '401 - Token:::Invalid'
                    });
                }
                else {
                    next();
                }
            });
        }
        else {
            return res.status(401).send({
                success: false,
                message: '401 - Token:::Invalid'
            });
        }
    }
}
exports.default = new Auth();
