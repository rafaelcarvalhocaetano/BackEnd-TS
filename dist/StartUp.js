"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const Database_1 = require("./utils/Database");
const Upload_1 = require("./upload/Upload");
const Router_1 = require("./router/Router");
class StartUp {
    constructor() {
        this.authenticationToken();
        this.token = jwt.sign(this.payloader, 'token token token');
        console.log(' data ', this.token);
        this.app = express();
        this._db = new Database_1.default();
        this.router = new Router_1.default().routerLisk;
        this._db.createConnection();
        this.middler();
        this.routes();
    }
    authenticationToken() {
        this.payloader = {
            iss: 'rcc.net',
            iat: new Date().getSeconds(),
            exp: new Date().setMinutes(60),
            username: 'Rafael Carvalho',
            email: 'rapha.pse@outlook.com'
        };
    }
    enableCors() {
        const options = {
            methods: 'GET, POST, PUT, DELETE',
            origin: '*'
        };
        this.app.use(cors(options));
    }
    middler() {
        this.enableCors();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' });
        });
        this.app.route('/uploader').post(Upload_1.default.uploader.single('file'), (req, res) => {
            try {
                res.send('Arquivo enviado com sucesso!!!!');
            }
            catch (e) {
                console.log(e);
            }
        });
        // AUTENTICAÇÃO
        // this.app.use(Auth.validate);
        this.app.use('/', this.router);
    }
}
exports.default = new StartUp();
