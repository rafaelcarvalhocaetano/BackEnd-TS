"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StartUp_1 = require("./StartUp");
const port = process.env.PORT || '3050';
StartUp_1.default.app.listen(port, () => { console.log(' Rodando na Porta ', port); });
