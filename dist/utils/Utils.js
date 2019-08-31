"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utils {
    constructor() {
        this.sendReponse = (res, statusCode, data) => {
            res.status(statusCode).json({ result: data });
        };
    }
}
exports.default = new Utils();
