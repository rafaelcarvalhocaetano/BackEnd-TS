import NewsService from '../services/NewsServices';
import * as HttpStatus from 'http-status';
// import * as redis from 'redis';

import Utils from '../utils/Utils';
import ExportFile from '../utils/ExportFile';

class NewsController {

    async get(req, res) {

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
            let result = await NewsService.get();
            Utils.sendReponse(res, HttpStatus.OK, result);
        } catch (e) {
            console.error.bind(console, `Erro de ID : ${e}` );
        }
    }

    async getById(req, res) {
        const id = req.params.id;
        // await NewsService.getById(id).then(x => Utils.sendReponse(res, HttpStatus.OK, x))
        // .catch(e => console.error.bind(console, `Erro de ID : ${e}` ));
        try {
            let result = await NewsService.getById(id);
            Utils.sendReponse(res, HttpStatus.OK, result);
        } catch (e) {
            console.error.bind(console, `Erro de ID : ${e}` );
        }
    }

    async exportToCsv(req, res) {
        try {
            let response = await NewsService.get();
            let fileName = ExportFile.tocsv(response);
            Utils.sendReponse(res, HttpStatus.OK, req.get('host') + '/exports/' + fileName);
        } catch (e) {
            console.error(e);
        }
    }
    
    async create(req, res) {
        let vm = req.body;
        try {
            // await NewsService.create(vm)
            //     .then(() => Utils.sendReponse(res, HttpStatus.OK, informations))
            //     .catch(e => console.error.bind(console, `Erro ao criar ${e}`));
            const informations = 'Notícia cadastrada com sucesso!';
            await NewsService.create(vm);
            Utils.sendReponse(res, HttpStatus.OK, informations)
        } catch (e) {
            console.error.bind(console, `Erro de ID : ${e}` );            
        }
    }
    
    async update(req, res) {
        try {
            const _id = req.params.id;
            let news = req.body;
            await NewsService.update(_id, news);
            Utils.sendReponse(res, HttpStatus.OK, `${news.title} Atualizada com sucesso!`);
        } catch (e) {
            console.error.bind(console, `Erro de ID : ${e}` );
        }
        // await NewsService.update(_id, news)
        //     .then(x => Utils.sendReponse(res, HttpStatus.OK, `${news.title} Atualizada com sucesso!`))
        //     .catch(e => console.error.bind(console, `Erro ao criar ${e}`));
    }
    
    async delete(req, res) {

        try {
            const _id = req.params.id;
            await NewsService.delete(_id);
            Utils.sendReponse(res, HttpStatus.OK, `Notícia deletada com sucesso!`)
        } catch (e) {
            console.error.bind(console, `Erro ao criar ${e}`)
        }
        // const _id = req.params.id;
        // await NewsService.delete(_id)
        // .then(x => Utils.sendReponse(res, HttpStatus.OK, `Notícia deletada com sucesso!`))
        // .catch(e => console.error.bind(console, `Erro ao criar ${e}`));

    }

}

export default new NewsController();