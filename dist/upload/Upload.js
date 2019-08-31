"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
class Upload {
    constructor() {
        this.storage = multer.diskStorage({
            destination: (req, file, callback) => {
                callback(null, 'uploader/');
            },
            filename: (req, file, callback) => {
                callback(null, file.originalname);
            }
        });
        this.uploader = multer({ storage: this.storage });
    }
}
exports.default = new Upload();
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'file/');
//     },
//     filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now());
//     }
// });
// const uploader = multer({ storage: storage });
// export default uploader;
