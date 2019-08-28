import NewsService from '../services/NewsServices';
import * as HttpStatus from 'http-status';

import Utils from '../utils/Utils';

class NewsController {

    get(req, res) {
        NewsService.get()
            .then(x => Utils.sendReponse(res, HttpStatus.OK, x))
            .catch(e => console.error.bind(console, `Error ${e}`));
    }

    getById(req, res) {
        const id = req.params.id;
        NewsService.getById(id).then(x => Utils.sendReponse(res, HttpStatus.OK, x))
        .catch(e => console.error.bind(console, `Erro de ID : ${e}` ));
    }
    
    create(req, res) {
        let vm = req.body;
        const informations = 'Notícia cadastrada com sucesso!';
        NewsService.create(vm)
            .then(() => Utils.sendReponse(res, HttpStatus.OK, informations))
            .catch(e => console.error.bind(console, `Erro ao criar ${e}`));
    }
    
    update(req, res) {
        const _id = req.params.id;
        let news = req.body;

        NewsService.update(_id, news)
            .then(x => Utils.sendReponse(res, HttpStatus.OK, `${news.title} Atualizada com sucesso!`))
            .catch(e => console.error.bind(console, `Erro ao criar ${e}`));
    }
    
    delete(req, res) {
        const _id = req.params.id;

        NewsService.delete(_id)
        .then(x => Utils.sendReponse(res, HttpStatus.OK, `Notícia deletada com sucesso!`))
        .catch(e => console.error.bind(console, `Erro ao criar ${e}`));

    }

}

export default new NewsController();