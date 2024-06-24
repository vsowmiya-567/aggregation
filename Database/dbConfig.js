import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const mongoURL = process.env.MONGODBCONNECTIONSTRING
const connectDb = async()=>{
    try {
        const connection = await mongoose.connect(mongoURL)
        console.log("mongo db connected");
        return connection;
    } catch (error) {
        console.log(error)
    }
} 
export default connectDb;