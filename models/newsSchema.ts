import { Schema } from 'mongoose';
import { FieldModel } from '../models/TokenModel';


let fiellds: FieldModel;

const NewSchema = new Schema({
    // hat: String,
    // title: String,
    // text: String,
    // author: String,
    // img: String,
    // publishDate: Date,
    // link: String,
    // active: String
    fiellds

}, {timestamps: true});

export default NewSchema;