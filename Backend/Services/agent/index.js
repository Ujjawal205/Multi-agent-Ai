import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();


const port = process.env.PORT || 8002;

const app = express();
app.use(express.json());



app.get("/", (req, res) => {
    res.send("Agent is running");
})



connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Agent is started on port ${port}`);
    });
});

