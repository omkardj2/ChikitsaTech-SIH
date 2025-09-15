import mongoose from 'mongoose'
import 'dotenv/config'

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`✅ MongoDB Connected`);
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
    }
};

export default connectDB;