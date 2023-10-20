import { Router } from "express";
import { login, register } from "../controllers/authController.js";
import { validateRegistrationInput } from "../middleware/validationMiddleware.js";


const router = Router();

router.post("/login", login);
router.post("/register", validateRegistrationInput, register);

export default router;
