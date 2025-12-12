import mongoose from "mongoose";

const connectMongoose = async (url) => {
    try {
        await mongoose.connect(url).then(() =>{
            console.log("MongoDB connected.")
        })
    } catch (error) {
        console.log("Mongo connection error: ",error);
    }
}

export default connectMongoose;