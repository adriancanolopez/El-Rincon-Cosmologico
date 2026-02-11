import express from "express";
import { getUsers, register, login, logout, verifyTokenResponse, changeRole } from "../controllers/users.controller.ts";
import { verifyToken } from "../middlewares/auth.middleware.ts";
import { requireAdmin } from "../middlewares/admin.middleware.ts";

const router = express.Router();

router.get('/get-users', verifyToken, requireAdmin, getUsers);
router.post('/register', verifyToken, requireAdmin, register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/verify-token', verifyToken, verifyTokenResponse);
router.patch('/change-role/:id', verifyToken, requireAdmin, changeRole);

export default router;