import * as multer from 'multer';

class Upload {

    private storage = multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, 'uploader/');
        },
        filename: (req, file, callback) => {
            callback(null, file.originalname);
        }
    });
    public uploader = multer({ storage: this.storage });
}
export default new Upload();

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