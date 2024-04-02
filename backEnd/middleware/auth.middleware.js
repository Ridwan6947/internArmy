import jwt from 'jsonwebtoken';
import errorHandler from '../error/error.js';
import { Register } from '../model/user.model.js';

export const verifyJWT = async(req , _ , next) =>{
    try{
        const token = req.cookies?.accessToken || req.header("Authorizattion")?.replace("Bearer " , "");
        if(!token){
            throw new errorHandler("Token not found" , 401);
        }
        
        const decode = jwt.verify(token , process.env.ACCESS_TOKEN_SECRET);
        const user = await Register.findById(decode?._id).select("-password -refreshToken");

        if(!user){
            throw new errorHandler("User not found" , 404);
        }
        req.user = user;
        next();
    }catch(err){
        throw new errorHandler("Invalid token" , 401);
    }
}