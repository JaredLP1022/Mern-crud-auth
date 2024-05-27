import { Router } from "express";
import { login, logout, profile, register } from "../Controllers/auth.controller.js";
import { authRequire } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validatemiddleare.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router =  Router();

router.post("/register", validateSchema( registerSchema ), register);

router.post("/login", validateSchema( loginSchema ), login);

router.post("/logout", logout);

router.get("/profile", authRequire, profile);

export default router;
