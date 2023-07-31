import mongoose from "mongoose";

const connectDB= async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log(`Successfully connected to MongoDB database`);
    } catch (error) {
        console.log(`Error occured : ${error}`)
    }
}

export default connectDB;