import express, { type NextFunction, type Request, type Response } from "express";
import { getNews, getNewsPublished, createNews, updateNews, deleteNews } from "../controllers/news.controller.ts";
import { upload } from "../config/multer.ts";
import { MulterError } from "multer";

const router = express.Router();

router.get('/get-news', getNews);
router.get('/get-news-published', getNewsPublished);
router.post('/create', createNews);
router.post('/create-with-image', (req: Request, res: Response, next: NextFunction) => {
    upload.single('image')(req, res, function(error: unknown) {
        if (error) {
            let message;
            if (error instanceof MulterError) {
                switch (error.code) {
                    case 'LIMIT_FILE_SIZE':
                        message = "Tamaño del archivo no válido. (Máximo 1 MB)."
                        break;
                    case 'LIMIT_UNEXPECTED_FILE':
                        message = "Tipo de fichero no válido. Sólo se permiten imágenes png/jpg/jpeg/webp ."
                        break;
                }
            }
            else {
                message = String(error);
            }
            return res.status(400).json({message: "No se ha podido crear la noticia. Error al subir el archivo. Error: " + message});
        }
        req.body.imageUrl = req.file?.filename;
        next();
    });
}, createNews);
router.patch('/update/:id', updateNews);
router.patch('/update-with-image/:id', (req: Request, res: Response, next: NextFunction) => {
    upload.single('image')(req, res, function(error: unknown) {
        if (error) {
            let message;
            if (error instanceof MulterError) {
                switch (error.code) {
                    case 'LIMIT_FILE_SIZE':
                        message = "Tamaño del archivo no válido. (Máximo 1 MB)."
                        break;
                    case 'LIMIT_UNEXPECTED_FILE':
                        message = "Tipo de fichero no válido. Sólo se permiten imágenes png/jpg/jpeg/webp ."
                        break;
                }
            }
            else {
                message = String(error);
            }
            return res.status(400).json({message: "No se ha podido editar la noticia. Error al subir el archivo. Error: " + message});
        }
        req.body.imageUrl = req.file?.filename;
        next();
    });
}, updateNews);
router.delete('/delete/:id', deleteNews);

export default router;