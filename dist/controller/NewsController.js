"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const NewsServices_1 = require("../services/NewsServices");
const HttpStatus = require("http-status");
// import * as redis from 'redis';
const Utils_1 = require("../utils/Utils");
class NewsController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // let client = redis.createClient();
            // await client.get('news', (e, replay) => {
            //     if (replay) {
            //         console.log(' data 001');
            //         Utils.sendReponse(res, HttpStatus.OK, JSON.parse(replay));
            //     } else {
            //         NewsService.get().then(x => {
            //             console.log(' data 002');
            //             client.set('news', JSON.stringify(x));
            //             client.expire('news', 20);
            //             Utils.sendReponse(res, HttpStatus.OK, x);
            //         });
            //     }
            // });
            try {
                let result = yield NewsServices_1.default.get();
                Utils_1.default.sendReponse(res, HttpStatus.OK, result);
            }
            catch (e) {
                console.error.bind(console, `Erro de ID : ${e}`);
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            // await NewsService.getById(id).then(x => Utils.sendReponse(res, HttpStatus.OK, x))
            // .catch(e => console.error.bind(console, `Erro de ID : ${e}` ));
            try {
                let result = yield NewsServices_1.default.getById(id);
                Utils_1.default.sendReponse(res, HttpStatus.OK, result);
            }
            catch (e) {
                console.error.bind(console, `Erro de ID : ${e}`);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let vm = req.body;
            try {
                // await NewsService.create(vm)
                //     .then(() => Utils.sendReponse(res, HttpStatus.OK, informations))
                //     .catch(e => console.error.bind(console, `Erro ao criar ${e}`));
                const informations = 'Notícia cadastrada com sucesso!';
                yield NewsServices_1.default.create(vm);
                Utils_1.default.sendReponse(res, HttpStatus.OK, informations);
            }
            catch (e) {
                console.error.bind(console, `Erro de ID : ${e}`);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                let news = req.body;
                yield NewsServices_1.default.update(_id, news);
                Utils_1.default.sendReponse(res, HttpStatus.OK, `${news.title} Atualizada com sucesso!`);
            }
            catch (e) {
                console.error.bind(console, `Erro de ID : ${e}`);
            }
            // await NewsService.update(_id, news)
            //     .then(x => Utils.sendReponse(res, HttpStatus.OK, `${news.title} Atualizada com sucesso!`))
            //     .catch(e => console.error.bind(console, `Erro ao criar ${e}`));
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                yield NewsServices_1.default.delete(_id);
                Utils_1.default.sendReponse(res, HttpStatus.OK, `Notícia deletada com sucesso!`);
            }
            catch (e) {
                console.error.bind(console, `Erro ao criar ${e}`);
            }
            // const _id = req.params.id;
            // await NewsService.delete(_id)
            // .then(x => Utils.sendReponse(res, HttpStatus.OK, `Notícia deletada com sucesso!`))
            // .catch(e => console.error.bind(console, `Erro ao criar ${e}`));
        });
    }
}
exports.default = new NewsController();
