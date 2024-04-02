import mongoose from "mongoose";
import { Register } from "./user.model.js";

const messageSchema = new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        req:Register,
        required:true,
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        req:Register,
        required:true,
    },
    message:{
        type:String,
        required:true,
    }
},{timestamps:true});

export const Message = mongoose.model("Message" , messageSchema)