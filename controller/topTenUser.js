import Score from "../model/score.js"


const handleGetTopTenUser = async (req,res) => {
    try {
        const topUsers = await Score.find().sort({score : -1}).limit(10);
        return res.status(200).json(topUsers);
    } catch (error) {
        console.log("Error fetching Top 10 Users.",error);
        return res.status(500).json({message : "Something went Wrong"});
    }
}

export default handleGetTopTenUser;