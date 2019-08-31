import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as jwt from 'jsonwebtoken';

import Database from './utils/Database';
import NewsController from './controller/NewsController';
import Auth from './auth/Auth';
import { TokenModel } from './models/TokenModel';
import Upload from './upload/Upload';

class StartUp {

    public app: express.Application;
    private _db: Database;
    public token;
    private payloader: TokenModel;

    constructor() {
        this.authenticationToken();
        this.token = jwt.sign(this.payloader, 'token token token');
        console.log(' data ', this.token);
        this.app = express();      
        this._db = new Database();
        this._db.createConnection();
        this.middler();
        this.routes();

    }

    private authenticationToken() {
        this.payloader = {
            iss: 'rcc.net',
            iat: new Date().getSeconds(),
            exp: new Date().setMinutes(60),
            username: 'Rafael Carvalho',
            email: 'rapha.pse@outlook.com'
        }
    }

    enableCors() {
        const options: cors.CorsOptions = {
            methods: 'GET, POST, PUT, DELETE',
            origin: '*'
        }
        this.app.use(cors(options));
    }

    middler() {
        this.enableCors();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    routes() {
        this.app.route('/').get((req, res) => {
            res.send({versao : '0.0.1'});
        });
        
        this.app.route('/uploader').post(Upload.uploader.single('file'), (req, res) => {
            try {
                res.send('Arquivo enviado com sucesso!!!!');
            } catch (e) {
                console.log(e);
            }
        });

        // AUTENTICAÇÃO
        this.app.use(Auth.validate);
        // rotas
        this.app.route('/api/news').get(NewsController.get);
        this.app.route('/api/news/:id').get(NewsController.getById);
        this.app.route('/api/news').post(NewsController.create);
        this.app.route('/api/news/:id').put(NewsController.update);
        this.app.route('/api/news/:id').delete(NewsController.delete);
    }
}

export default new StartUp();