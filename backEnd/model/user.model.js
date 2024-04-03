import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const registerSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    refreshToken:{
        type:String,
    },
}, {timestamps:true});

// registerSchema.pre("save" , async function(next){
//     if(!this.isModified("password")){
//         next();
//     }
//     this.password = await bcrypt.hash(this.password , 3);
// })

registerSchema.methods.isPasswordCorrect = async function(password){
    if(password === this.password){
        return true;
    }else{
        return false;
    }
}

registerSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRE
        }
    )
}

registerSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRE
        }
    )

}
export const Register = mongoose.model("Register" , registerSchema);