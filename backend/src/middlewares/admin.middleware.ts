import type { Request, Response, NextFunction } from "express";

export const requireAdmin = async (req: Request, res: Response, next: NextFunction) => {
    if (req.user?.role !== "admin") {
        return res.status(403).json({ message: "Acceso denegado: Se requiere rol de administrador." });
    }
    
    next();
}