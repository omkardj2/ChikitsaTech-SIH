import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import connectDB from "./config/connectDB.js";
import userRouter from "./routes/userRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
connectDB();


// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user',userRouter)



app.get('/', (req,res) => {
    res.send("API working!!");
});

// creating the server
app.listen(PORT, () => {
    console.log(`🚀Server is live at PORT ${PORT}`)
})