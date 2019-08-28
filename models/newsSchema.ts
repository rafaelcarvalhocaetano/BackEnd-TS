import { Schema } from 'mongoose';

const NewSchema = new Schema({
    hat: String,
    title: String,
    text: String,
    author: String,
    img: String,
    publishDate: Date,
    link: String,
    active: String
});

export default NewSchema;