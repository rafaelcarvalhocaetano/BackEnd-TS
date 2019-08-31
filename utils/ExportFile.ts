import * as json2csv from 'json2csv';
import * as uuid from 'uuid';
import * as fs from 'fs';
import { FieldModel } from '../models/TokenModel';


class ExportFile {
    // private _fields = ['_id', 'hat', 'title', 'text', 'author', 'img', 'publishDate', 'link', 'active'];    
    // public options = this._fields as object;
    public field: FieldModel;

    tocsv = (news) => {
        try {
            const csv = json2csv.parse(news, this.field as object);
            const fileName = uuid.v4() + '.csv';
            fs.writeFile('./exports/' + fileName, csv, (e) => {
                if (e) {
                    throw e;
                } else {
                    console.log('Arquivo salvo com sucesso !! ');
                }
            });
            return fileName;
        } catch (e) {
            console.error(' data erro ::: ', e);
        }
    }
}

export default new ExportFile();