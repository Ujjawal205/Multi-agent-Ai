import { getAuth } from "firebase-admin/auth";
import { app } from "../config/firebase.js"
import User from "../models/user.model.js";
import crypto from "node:crypto";
import redis from "../../../shared/redis/redis.js";

export const login = async (req, res) => {

    try{
        const {token} = req.body;
        const decoded = await getAuth(app).verifyIdToken(token);
        let user = await User.findOne({
            firebaseId: decoded.uid
        })

        if(!user){
            user = await User.create({
                firebaseId: decoded.uid,
                email: decoded.email,
                name: decoded.name,
                avatar: decoded.picture
            })
        }

        const sessionId = crypto.randomUUID()

       await redis.set(`session:${sessionId}`, JSON.stringify({
            userId: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar
        }), 'EX', 7*24*60*60) // 7 days expiration


        res.cookie("session", sessionId, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7*24*60*60*1000
        })

        res.status(200).json(user)

    } catch(error){
        console.error("Login error:", error)
        res.status(500).json({message: "Internal server error"})

    }
}

export const logout = async (req, res) => {
    try{
        const sessionId = req.cookies?.session
        await redis.del(`session:${sessionId}`)

        res.clearCookie("session")
        res.status(200).json({message: "Logged out successfully"})
    } catch(error){
        res.status(500).json({message: "Internal server error"})
    }}