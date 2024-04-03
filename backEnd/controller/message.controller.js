import { Conversation } from "../model/conversation.model.js";
import {Message} from "../model/message.model.js";
import errorHandler from "../error/error.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });
        
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        // await newMessage.save();
        // await conversation.save();
        await Promise.all([newMessage.save(), conversation.save()]); // Save both at the same time becuase of Promiser.all

    
        res.status(200).json({
            success: true,
            message: "Message sent successfully",
            data: newMessage
        });
    } catch (error) {
        console.error(error);
        throw new errorHandler("Error sending message", 500);
    }
};

export const getMessage = async(req , res) =>{
    try {

        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId , userToChatId]},
        }).populate("messages")

        res.status(200).json(conversation.messages);
        
    } catch (error) {
        console.log(err);
        throw new errorHandler("Error getting messages", 500);
    }
}
