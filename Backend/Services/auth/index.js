import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/auth.route.js";

dotenv.config({ path: "../.env" });
const port = process.env.PORT || 8001;

const app = express();
app.use(express.json());

app.use("/", router);

app.get("/", (req, res) => {
    res.send("Auth is running");
})



connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Auth is started on port ${port}`);
    });
});

