import multer, { MulterError } from "multer";
import fs from "fs";
import type { Request } from "express";
import type { FileType } from "../types/fileType.ts";
import { FILE_TYPES } from "../consts/fileTypes.ts";

const storage = multer.diskStorage({
    destination(req, file, callback) {
        const uploadDirectory = './uploads/news/';

        if (!fs.existsSync(uploadDirectory)) { // En caso de que no esté creado el directorio destino
            fs.mkdirSync(uploadDirectory, { recursive: true });
        }

        callback(null, uploadDirectory);
    },
    filename(req, file, callback) {
        const extension = file.originalname.split(".").pop();
        callback(null, `${Date.now()}.${extension}`);
    },
});

const fileFilter = (req: Request, file: Express.Multer.File, callback: multer.FileFilterCallback) => {
    const fileType = file.mimetype as FileType;
    if (!FILE_TYPES.includes(fileType)) {
        return callback(new MulterError('LIMIT_UNEXPECTED_FILE'));
    }
    
    callback(null, true);
}

export const upload = multer({ storage, fileFilter, limits: {fileSize: 1024 * 1024, files: 1} }); // Indicamos el límite de 1 MB