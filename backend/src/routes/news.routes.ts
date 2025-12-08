import express from "express";
import { createNews, updateNews, deleteNews } from "../controllers/news.controller.ts";

const router = express.Router();

router.post('/create', createNews);
router.post('/update/:id', updateNews);
router.delete('/delete/:id', deleteNews);

export default router;