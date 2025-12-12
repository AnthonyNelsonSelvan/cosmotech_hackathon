import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import connectMongoose from "./connection/mongo.js";

import ScoreRouter from "./routes/score.js";
import AdminRouter from "./routes/admin.js";
import EmailRouter from "./routes/email.js";
import PublicRouter from "./routes/public.js";
import UserRouter from "./routes/user.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
connectMongoose("mongodb://127.0.0.1:27017/hackathon");

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json())

app.use("/api/score",ScoreRouter);
app.use("/api/admin",AdminRouter);
app.use("/api/email",EmailRouter);
app.use("/api/user",UserRouter);
app.use("/",PublicRouter)

app.get("/",(req,res) => {
    console.log("Hackathon Project started.")
    res.status(200).json({message : "Started"})
})

app.listen(3000, () => {
    console.log("Server started at port 3000");
})