import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/connectDB.js";

const app = express();
connectDB();
dotenv.config();

app.get('/', (req,res) => {
    res.send("API working!!");
});


const PORT = process.env.PORT || 5000

// creating the server
app.listen(PORT, () => {
    console.log(`🚀Server is live at PORT ${PORT}`)
})