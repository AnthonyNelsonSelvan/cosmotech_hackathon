import { model, Schema } from "mongoose";


const ScoreSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    }, score: {
        type: Number,
        required: true,
        default: 0
    },
    badgeNumber: {
        type: String,
        required: true,
    }, avatar: {
        type: Number,
        default: 1
    }, responded: {
        type: [Number]
    }
}, { timestamps: true })

const Score = model("score", ScoreSchema);

export default Score;


