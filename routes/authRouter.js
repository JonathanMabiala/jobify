import { Router } from "express";
import { login, logout, register } from "../controllers/authController.js";
import { validateRegistrationInput, validateLoginInput } from "../middleware/validationMiddleware.js";


const router = Router();

router.post("/login", validateLoginInput, login);
router.post("/register", validateRegistrationInput, register);
router.get("/logout", logout);

export default router;
