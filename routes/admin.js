import { Router } from "express";
import { deleteUser, findUser } from "../controller/admin.js";

const router = Router();

router.get("/find/:username/",findUser);

router.delete("/delete/:username",deleteUser);

export default router;