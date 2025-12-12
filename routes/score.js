import { Router } from "express";
import { incrementPoints, updatePoints } from "../controller/updatePoints.js";
import handleGetTopTenUser from "../controller/topTenUser.js";
import { getScore } from "../controller/user.js";

const router = Router();

router.post("/update/points", updatePoints);

router.get("/topTen", handleGetTopTenUser);

router.post("/points/increment",incrementPoints);

router.get("/get/score/:userame",getScore);

export default router;