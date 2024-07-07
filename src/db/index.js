import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        const connectionInstnce = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected !! DB HOST : ${connectionInstnce.connection.host}`)
    } catch (error) {
        console.error("MongoDB connection error", error);
        process.exit(1)
    }
}

export default connectDB