import * as express from 'express';
import NewsController from '../controller/NewsController';

class Router {
    private _router: express.Application;

    
    constructor() {
        this._router = express();
    }

    public routerLisk() {
        this._router.route('/api/news').get(NewsController.get);
        this._router.route('/api/news/search/:term').get(NewsController.search);
        this._router.route('/api/news/:id').get(NewsController.getById);
        this._router.route('/api/news/export').get(NewsController.exportToCsv);
        this._router.route('/api/news').post(NewsController.create);
        this._router.route('/api/news/:id').put(NewsController.update);
        this._router.route('/api/news/:id').delete(NewsController.delete);
    }

}

export default Router;