import path from 'path';
import multer from 'multer';
import { Request } from 'express';

function verifyImage(req: Request, file: any, callback: Function) {
  if (file.mimetype.startsWith('image') || file.mimetype.startsWith('application/octet-stream')) {
    callback(null, true);
  } else {
    console.log(file)
    callback('wrong file type', false);
  }
}

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images/"));
  },
  filename: (req, file, cb) => {
    cb(null, `${new Date().toISOString().replace(/:/g, '-')}-products-${file.originalname}`);
  },
});

export default multer({
  storage,
  fileFilter: verifyImage
});
