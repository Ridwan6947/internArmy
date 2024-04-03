import errorHandler from "../error/error.js";
import { Register } from "../model/user.model.js";

export const getUserForSidebar = async(req, res) =>{
    try {
        const loggedInUser = req.user._id;
        const allUsers = await Register.find({_id: {$ne:loggedInUser}}).select("-password");

        res.status(200).json(allUsers);

    } catch (error) {
        console.log("Error in getUserForSidebar: ", error.message);
        throw new errorHandler("Error getting user", 500);
    }
}