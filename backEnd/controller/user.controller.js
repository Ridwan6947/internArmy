import errorHandler from "../error/error.js";
import {Register} from '../model/user.model.js';
import bcrypt from 'bcrypt';
import  jwt  from "jsonwebtoken";
import ApiResponse from "../response/ApiResponse.js";

const generateAccessTokenRefreshToken = async(userId) =>{
    try {
        const user = await Register.findOne(userId);

        if(!user){
            throw new errorHandler("User not found" , 404);
        }

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        user.refreshToken = refreshToken;

        return {accessToken , refreshToken};
    } catch (error) {
        console.log("Error generating access token and refresh token:", error);
        throw new errorHandler("Error generating access token and refresh token", 500);
    }
}

export const registerUser = async(req , res , next) =>{
    const {fullname , email , password , username} = req.body;
    try{
        if(!fullname || !email || !password || !username){
            throw new errorHandler("All fields are required" , 400);
        }

        const userExist = await Register.findOne({
            $or:[{email} , {username}]
        })
        if(userExist){
            throw new errorHandler("User already exist" , 400);
        }
        const hashedPassword = await bcrypt.hash(password , 3);

        const newUser = await Register.create({
            fullname,
            email,
            password: hashedPassword,
            username
        });
        res.status(200).json({
            success:true,
            message:"User created successfully",
            user:newUser
        });
    }catch (error) {
        // Handle validation errors and other unexpected errors
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new errorHandler(validationErrors.join(', '), 400));
        } else {
            console.error(error);
            return next(new errorHandler("Internal server error", 500));
        }
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password){
        throw new errorHandler("Please fill all the details", 400);
    }

    const user = await Register.findOne({email});

    if(!user){
        throw new errorHandler("User not found", 404);
    }

    const isPasswordvalid = await user.isPasswordCorrect(password);

    if(!isPasswordvalid){
        throw new errorHandler("Incorrect password", 400);
    }

    const {accessToken , refreshToken} = await generateAccessTokenRefreshToken(user._id)

    const loggedInUser = await Register.findById(user._id).select("-password")

    const options = {
        httpOnly: true,     // cookies can only be modified when we use httponly and secure 
        secure: true,
    }

    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
        new ApiResponse(
            200 , 
            {
                user:loggedInUser,accessToken,refreshToken
            } , 
            "Login Successful"
        )
    )
}; 