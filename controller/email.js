import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Score from "../model/score.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getEmails = async (req, res) => {
    try {
        let { username } = req.params;
        
        const filePath = path.join(__dirname, "../email.json");
        const data = fs.readFileSync(filePath, "utf-8");
        const allEmails = JSON.parse(data);

        const user = await Score.findOne({ username: username });
        const responded = user.responded || [];

        const pendingEmails = allEmails.filter(email => !responded.includes(email.id));
        return res.status(200).json({ message: "Email fetched", emails: pendingEmails });
    } catch (error) {
        console.log("Error fetching email: ", error);
        return res.status(500).json({ message: "Something Went Wrong." });
    }
}

const saveResponded = async (req, res) => {
    try {
        const { username, id } = req.body;
        console.log(username)
        const emailId = Number(id);
        await Score.updateOne({ username: username }, {
            $addToSet: {
                responded: emailId
            }
        })
        return res.status(200).json({ message: "added to viewed" });
    } catch (error) {
        console.log("Response save failed: ", error)
    }
}

export { getEmails, saveResponded };