import { Router } from "express";
import authController from "../controllers/auth.controller.js";
import { validateRegister, validateLogin } from "../validators/auth.validator.js";

const router = Router();

router.get("/.well-known/jwks.json", authController.getJwks.bind(authController));
router.get("/jwks.json", authController.getJwks.bind(authController));

router.post("/register", validateRegister, authController.register.bind(authController));
router.post("/login", validateLogin, authController.login.bind(authController));
router.post("/refresh-token", authController.refreshToken.bind(authController));
router.post("/logout", authController.logout.bind(authController));

export default router;
