import { Router } from "express";
import { login, logout, profile, register } from "../Controllers/auth.controller.js";
import { authRequire } from "../middlewares/validateToken.js";

const router =  Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.get("/profile", authRequire, profile);

export default router;
