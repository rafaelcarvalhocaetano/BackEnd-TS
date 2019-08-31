"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class Database {
    constructor() {
        this.URL_DB = 'mongodb://localhost:27017/news';
    }
    // private URL_EXTERNAL_DB = 'mongodb+srv://*****:****@cluster0-ejlyp.mongodb.net/test?retryWrites=true&w=majority';
    createConnection() {
        mongoose.connect(this.URL_DB, { useNewUrlParser: true });
    }
}
exports.default = Database;
