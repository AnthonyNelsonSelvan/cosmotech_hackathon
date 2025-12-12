import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = Router()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/admin",(req,res) => {
    return res.sendFile(path.join(__dirname,"../public/admin/index.html"))
})

router.get("/admin/dashboard", (req,res) => {
    return res.sendFile(path.join(__dirname,"../public/admin/adminDashboard/index.html"));
})

router.get("/email",(req,res) => {
    return res.sendFile(path.join(__dirname,"../public/email/index.html"))
})

router.get("/cutscene",(req,res) => {
    return res.sendFile(path.join(__dirname,"../public/home/index.html"))
})

router.get("/spaceship/home",(req,res) => {
    return res.sendFile(path.join(__dirname,"../public/home/home.html"))
})

router.get("/leaderboard",(req,res) => {
    return res.sendFile(path.join(__dirname,"../public/home/leaderboard/leaderboard.html"))
})

router.get("/",(req,res) => {
    return res.sendFile(path.join(__dirname,"../public/login/login.html"))
})

router.get("/crashed", (req,res) => {
    return res.sendFile(path.join(__dirname,"../public/crashed/crashed.html"))
})

export default router;