import Score from "../model/score.js";

const findUser = async (req, res) => {
    const { username } = req.params;
    try {
        const user = await Score.findOne({ username: username });
        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }
        console.log(user)
        return res.status(200).json({ message: "User Found", user });
    } catch (error) {
        console.log("Admin Error While Finding User :", error);
        return res.status(500).json({ message: "Something went Wrong." });
    }
}

const deleteUser = async (req, res) => {
    const { username } = req.params;
    try {
        const user = await Score.findOne({ username: username });
        if (!user) {
            return res.status(404).json({ message: "There is no such User." });
        };
        user.score = 0;
        await user.save();
        return res.status(200).json({message: "Score reseted successfully"});
    } catch (error) {
        console.log("Admin Error Deleting User : ", error);
        return res.status(500).json({ message: "Something Went Wrong" });
    }
}

export { findUser, deleteUser };