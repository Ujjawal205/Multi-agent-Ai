import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    title: {
        type: String,
        default: "New Chat",
    },
    userId: {
        type: string
    }
},{
    timestamps : true
});

const conversation = mongoose.Model("Conversation", "conversationSchema")
export default conversation

    