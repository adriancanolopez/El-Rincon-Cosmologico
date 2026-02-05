import type { Request, Response, NextFunction } from "express";
import User from "../models/User.model.ts";
import jwt from "jsonwebtoken";
import type { UserPayload } from "../types/userPayload.ts";

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ message: "No hay token. Autorización denegada." });
    }

    try {
        const JWT_SECRET = process.env.JWT_SECRET as string;

        const payload = jwt.verify(token, JWT_SECRET) as UserPayload;

        const user = await User.findOne({email: payload.email});

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        req.user = {username: user.username, email: user.email, role: user.role};

        next();
    } catch (error) {
        return res.status(401).json({ message: "Token inválido o expirado" });
    }
}