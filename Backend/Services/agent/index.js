import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";
import router from "./agents/routes/agent.route.js";


const port = process.env.PORT || 8002;

const app = express();
app.use(express.json());
app.use("/", router)


app.get("/", (req, res) => {
    res.send("Agent is running");
})



connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Agent is started on port ${port}`);
    });
});

