import type { Request, Response } from "express";
import News from "../models/News.model.ts";
import sanitize from "sanitize-html";
import { SANITIZE_OPTIONS } from "../consts/sanitizeOptions.ts";
import fs from 'fs';

export const getNews = async (req: Request, res: Response) => {
    try {
        const limit = req.query.limit ? Number(req.query.limit) : 0; // En caso de que no se indique un límite, con 0 se obtienen todos los documentos.
        const news = await News.find().limit(limit).sort({ createdAt: -1 });
        return res.status(200).json(news);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error); // En caso de que sea un error lanzado por mongoose, error será una instancia de Error.
        return res.status(500).json({ message: "Error al obtener las noticias. Error: " + message });
    }
}

export const getNewsPublished = async (req: Request, res: Response) => {
    try {
        const limit = req.query.limit ? Number(req.query.limit) : 0;
        const news = await News.find({ published: true }).limit(limit).sort({ createdAt: -1 });
        return res.status(200).json(news);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return res.status(500).json({ message: "Error al obtener las noticias publicadas. Error: " + message });
    }
}

export const createNews = async (req: Request, res: Response) => {
    try {
        const descriptionHTML = req.body.description;
        const cleanHTML = sanitize(descriptionHTML, SANITIZE_OPTIONS);
        req.body.description = cleanHTML;
        const news = await News.create(req.body);
        return res.status(201).json(news);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return res.status(500).json({ message: "Error al crear la noticia. Error: " + message });
    }
}

export const updateNews = async (req: Request, res: Response) => {
    try {
        const idNews = req.params.id;
        const { title, imageUrl, published } = req.body;
        const news = await News.findById(idNews);

        if (!news) {
            return res.status(404).json({ message: "Noticia no encontrada." });
        }

        if (news.imageUrl && imageUrl) { // Esa noticia tenia una imagen subida y ahora se ha subido una nueva imagen
            fs.rmSync(`./uploads/news/${news.imageUrl}`, { recursive: true, force: true });
        }

        const descriptionHTML = req.body.description;
        const cleanHTML = sanitize(descriptionHTML, SANITIZE_OPTIONS);
        req.body.description = cleanHTML;

        const newsToUpdate = await News.findByIdAndUpdate(idNews, {$set: { title: title, description: req.body.description, imageUrl: imageUrl, published: published }}, { new: true });
        
        return res.status(200).json(newsToUpdate);

    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return res.status(500).json({ message: "Error al actualizar la noticia. Error: " + message });
    }
}

export const deleteNews = async (req: Request, res: Response) => {
    try {
        const idNews = req.params.id;
        const newsToDelete = await News.findByIdAndDelete(idNews);

        if (!newsToDelete) {
            return res.status(404).json({ message: "Noticia no encontrada." });
        }

        return res.status(200).json({ message: "Noticia eliminada con éxito." });

    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return res.status(500).json({ message: "Error al eliminar la noticia. Error: " + message });
    }
}