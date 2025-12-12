import Score from "../model/score.js";

const updatePoints = async (req, res) => {
    const { username, score } = req.body;
    try {
        const user = await Score.findOne({ username: username });
        if (!user) {
            return res.status(400).json({ message: "Who are you?, tell me your id. (you lost your progress)." })
        }
        if (user.score < score) {
            user.score = score;
            await user.save();
            return res.status(200).json({ message: "New High Score." });
        };
        return res.status(200).json({ message: "Better luck next time." });
    } catch (error) {
        console.log("Error while updating points :", error);
        return res.status(500).json({ message: "Something went Wrong" });
    }
}

const incrementPoints = async (req, res) => {
    try {
        let { username, points } = req.body;
        const user = await Score.findOne({ username: username });
        if (!user) {
            return res.status(400).json({ message: "Who are you?, tell me your id. (you lost your progress)." })
        }
        user.score += Number(points);
        await user.save();
        return res.status(200).json({ message: "Points updated" });
    } catch (error) {
        console.log("Error Incrementing points: ", error);
    }
}

export { incrementPoints, updatePoints };