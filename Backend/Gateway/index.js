import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy";
import cors from "cors";
import cookieParser from "cookie-parser";
import protect  from "./middlewares/auth.middleware.js";
import { getCurrentUser } from "./controllers/user.controller.js";

dotenv.config();
 const port = process.env.PORT || 8000;

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));

app.use(cookieParser());
app.get("/me",protect, getCurrentUser)

app.use("/auth", proxy(process.env.AUTH_SERVICE_URL))
app.get("/", (req, res) => {
    res.send("Gateway is running");
})



app.listen(port, () => {
    console.log(`Gateway is started on port ${port}`);
    })

