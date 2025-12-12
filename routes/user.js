import { Router } from "express";
import { login, signUp } from "../controller/user.js";

const router = Router();

router.post("/login",login);

router.post("/signup",signUp);

export default router;