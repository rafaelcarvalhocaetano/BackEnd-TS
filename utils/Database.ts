import * as mongoose from 'mongoose';

class Database {

    private URL_DB = 'mongodb://localhost:27017/news';
    // private URL_EXTERNAL_DB = 'mongodb+srv://*****:****@cluster0-ejlyp.mongodb.net/test?retryWrites=true&w=majority';

    createConnection() {
        mongoose.connect(this.URL_DB, {useNewUrlParser: true});     
    }
}
export default Database;