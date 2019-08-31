"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const NewSchema = new mongoose_1.Schema({
    hat: String,
    title: String,
    text: String,
    author: String,
    img: String,
    publishDate: Date,
    link: String,
    active: String
}, { timestamps: true });
exports.default = NewSchema;
