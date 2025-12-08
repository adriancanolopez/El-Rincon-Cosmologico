import type { Request, Response } from "express";
import News from "../models/News.model.ts";

export const createNews = async (req: Request, res: Response) => {
    try {
        const news = await News.create(req.body);
        return res.status(201).json(news);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error); // En caso de que sea un error lanzado por mongoose, error será una instancia de Error.
        return res.status(500).json({ message: "Error al crear la noticia. Error: " + message });
    }
}

export const updateNews = async (req: Request, res: Response) => {
    try {
        const idNews = req.params.id;
        const { title, description, imageUrl, published } = req.body;
        const news = await News.findByIdAndUpdate(idNews, {$set: { title: title, description: description, imageUrl: imageUrl, published: published }}, { new: true });

        if (!news) {
            return res.status(404).json({ message: "Noticia no encontrada." });
        }
        
        return res.status(200).json(news);

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