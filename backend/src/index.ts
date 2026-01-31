import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.ts";
import newsRoutes from "./routes/news.routes.ts";
import usersRoutes from "./routes/users.routes.ts";

dotenv.config();

connectDB();

const PORT = process.env.PORT;

const app = express();
app.use('/uploads', express.static('uploads/'));
app.use(cors({
    origin: 'http://localhost:4321',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.get('/test', (req, res) => {
    res.send("Test");
});

app.use('/news', newsRoutes);
app.use('/users', usersRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT} 🚀`);
});