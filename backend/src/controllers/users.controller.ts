import type { Request, Response } from "express";
import User from "../models/User.model.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();

        return res.status(200).json(users);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return res.status(500).json({ message: "Error al realizar el registro. Error: " + message });
    }
}

export const register = async (req: Request, res: Response) => {
    try {
        const { username, email, password, role } = req.body;

        const userExist = await User.findOne({$or: [{ email }, { username }]});

        if (userExist) {
            const message = userExist.email === email ? "El correo electrónico introducido ya está en uso." : "El nombre de usuario introducido ya está en uso.";

            return res.status(409).json({ message });
        }

        const passwordHashed = await bcrypt.hash(password, 12);

        const newUser = new User({ username, email, password: passwordHashed, role });

        await newUser.save();

        return res.status(201).json({ username: newUser.username, email: newUser.email, role: newUser.role });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return res.status(500).json({ message: "Error al realizar el registro. Error: " + message });
    } 
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const userFound = await User.findOne({ email });

        if (!userFound) {
            return res.status(404).json({ message: "Email o contraseña incorrecto." });
        }

        const passwordMatch = await bcrypt.compare(password, userFound.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: "Email o contraseña incorrecto." });
        }

        const JWT_SECRET = process.env.JWT_SECRET as string;

        const token = jwt.sign(
            { email: userFound.email },
            JWT_SECRET,
            {
                expiresIn : "1h"
            }
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: false
        });

        return res.status(200).json({username: userFound.username, email: userFound.email, role: userFound.role});
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return res.status(500).json({ message: "Error al iniciar sesión. Error: " + message });
    }
}

export const logout = async (req: Request, res: Response) => {
    res.clearCookie('token', {
        httpOnly: true,
        secure: false
    });

    return res.sendStatus(200);
}

export const verifyTokenResponse = async (req: Request, res: Response) => {
    try {
        return res.status(200).json(req.user);
    } catch (error) {
        return res.status(500).json({ message: "Error al verificar el token. Error: " + String(error)});
    }
}

export const changeRole = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const { newRole } = req.body;

        const userToUpdate = await User.findById(userId);

        if (!userToUpdate) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        if (userToUpdate.role === "admin" && newRole === "editor") {
            return res.status(403).json({ message: "No tienes permiso para quitar el rol de administrador a otro usuario." });
        }

        const userUpdated = await User.findByIdAndUpdate(userId, { $set: { role: newRole } }, { new: true, runValidators: true });

        return res.status(200).json(userUpdated);
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        return res.status(500).json({ message: "Error al cambiar el rol. Error: " + message });
    }
}