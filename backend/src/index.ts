import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.ts";
import newsRoutes from "./routes/news.routes.ts";

dotenv.config();

connectDB();

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
    res.send("Test");
});

app.use('/news', newsRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT} 🚀`);
});