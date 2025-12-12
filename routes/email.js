import { Router } from "express";
import { getEmails, saveResponded } from "../controller/email.js";

const router = Router();

router.get("/pending/:username",getEmails);

router.post("/save/responded",saveResponded);

export default router;