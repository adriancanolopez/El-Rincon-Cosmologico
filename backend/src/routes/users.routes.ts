import express from "express";
import { register, login, logout, verifyTokenResponse } from "../controllers/users.controller.ts";
import { verifyToken } from "../middlewares/auth.middleware.ts";

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/verify-token', verifyToken, verifyTokenResponse);

export default router;