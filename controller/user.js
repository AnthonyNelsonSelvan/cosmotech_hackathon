import Score from "../model/score.js";

const isUserNameAvailable = async (req, res) => {
    const username = req.params.username;
    try {
        const user = await Score.findOne({ username: username });
        if (!user) {
            return res.status(200).json({ message: "Name Available" });
        }
        return res.status(400).json({ message: "Name not available." });
    } catch (error) {
        console.log("Error while checking username availability: ", error);
        return res.status(500).json({ message: "Something went Wrong" })
    }
}

export const login = async (req, res) => {
    try {
        const { username, badgeNumber } = req.body;
        const user = await Score.findOne({ username: username, badgeNumber: badgeNumber });
        if (!user) {
            return res.status(404).json({ message: "Name or BadgeNumber Wrong." });
        }
        return res.status(200).json({ message: "Successfully logged In", user });
    } catch (error) {
        console.log("Error while login: ", error);
        return res.status(500).json({ message: "Something went Wrong." })
    }
}

export const signUp = async (req, res) => {
    try {
        const { username, badgeNumber} = req.body;
        const existingUser = await Score.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already taken." });
        }

        const newUser = await Score.create({
            username,
            badgeNumber,
            avatar: 1,
            score: 0,
            responded: []
        });

        return res.status(201).json({ message: "Account created!", user: newUser });

    } catch (error) {
        console.log("Error while signup: ", error);
        return res.status(500).json({ message: "Something went Wrong." })
    }
}

const getScore = async (req,res) => {
    const {username} = req.params;
    console.log(username)
    const score = await Score.findOne({
        username: username
    })
    console.log(score)
    return res.status(200).json({score: score.score});
}

export { isUserNameAvailable, getScore }