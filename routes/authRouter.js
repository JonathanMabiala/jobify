import { Router } from "express";
import { login, register } from "../controllers/authController.js";
import { validateRegistrationInput, validateLoginInput } from "../middleware/validationMiddleware.js";


const router = Router();

router.post("/login", validateLoginInput, login);
router.post("/register", validateRegistrationInput, register);

export default router;
