import express from "express";
import { register, login, logout, verifyTokenResponse } from "../controllers/users.controller.ts";
import { verifyToken } from "../middlewares/auth.middleware.ts";
import { requireAdmin } from "../middlewares/admin.middleware.ts";

const router = express.Router();

router.post('/register', verifyToken, requireAdmin, register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/verify-token', verifyToken, verifyTokenResponse);

export default router;