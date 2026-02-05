import express, { type NextFunction, type Request, type Response } from "express";
import { getNews, getNewsPublished, getNewsById, getNewsBySlug, createNews, updateNews, deleteNews } from "../controllers/news.controller.ts";
import { verifyToken } from "../middlewares/auth.middleware.ts";
import { requireAdmin } from "../middlewares/admin.middleware.ts";
import { upload } from "../config/multer.ts";
import { MulterError } from "multer";

const router = express.Router();

router.get('/get-news', verifyToken, getNews);
router.get('/get-news-published', getNewsPublished);
router.get('/:id', getNewsById);
router.get('/slug/:slug', getNewsBySlug);
router.post('/create', verifyToken, createNews);
router.post('/create-with-image', verifyToken, (req: Request, res: Response, next: NextFunction) => {
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
router.patch('/update/:id', verifyToken, updateNews);
router.patch('/update-with-image/:id', verifyToken, (req: Request, res: Response, next: NextFunction) => {
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
router.delete('/delete/:id', verifyToken, requireAdmin, deleteNews);

export default router;