import * as express from 'express';

import Database from './utils/Database';
import * as bodyParser from 'body-parser';
import NewsController from './controller/NewsController';

class StartUp {

    public app: express.Application;
    private _db: Database;

    constructor() {
        this.app = express();      
        this._db = new Database();
        this._db.createConnection();
        this.middler();
        this.routes();
    }

    middler() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    routes() {
        this.app.route('/').get((req, res) => {
            res.send({versao : '0.0.1'});
        });

        // rotas
        this.app.route('/api/news').get(NewsController.get);
        this.app.route('/api/news/:id').get(NewsController.getById);
        this.app.route('/api/news').post(NewsController.create);
        this.app.route('/api/news/:id').put(NewsController.update);
        this.app.route('/api/news/:id').delete(NewsController.delete);
    }
}

export default new StartUp();

// {
// 	"hat":"Ano de 2018 ficará marcado pelo sucesso dos atletas nacionais no Circuito Mundial de Surfe",
// 	"title":"Com título de Medina e 11 na elite, 'Brazilian Storm' mostra que veio para ficar",
// 	"text":"A tempestade brasileira no surfe mostrou que não é passageira e representa a consolidação da modalidade no País. 'Brazilian Storm' é como os surfistas do Brasil são chamados no circuito. O ano de 2018 ficará marcado pelo sucesso dos atletas nacionais em diversas parte do mundo e tudo isso gera expectativa para 2019 e 2020, quando o surfe estreará no programa olímpico dos Jogos de Tóquio Gabriel Medina conquistou seu bicampeonato mundial no mesmo dia que Jesse Mendes ganhou a Tríplice Coroa Havaiana, uma honraria para os surfistas. Das 11 etapas realizadas no Circuito, os atletas brasileiros ganharam nove - nas últimas cinco temporadas três títulos do Mundial da elite ficaram nas mãos de surfistas brasileiros.",
// 	"author":"Da Redação, com Estadão Conteúdo",
// 	"img":"http://imagem.com.br/f_446243.jpg",
// 	"link":"https://esporte.uol.com.br/noticia/100000944120/com-bi-de-medina-e-11-na-elite-brazilian-storm-veio-para-ficar.html",
// 	"active":true
// }