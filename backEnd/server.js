import express from 'express'; 
import dotenv from 'dotenv';
import { dbConnection } from '../backEnd/connection/connectionMongo.js';
import loginRoute from '../backEnd/routes/loginRoute.js';
import  messageRoute  from '../backEnd/routes/messageRoute.js';
import userRoute from '../backEnd/routes/userRoute.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config({path: "./config/config.env"})
app.listen(process.env.PORT , () =>{
    console.log(`server is running on port ${process.env.PORT}`);
})
dbConnection()
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1" , loginRoute);
app.use("/api/v1/messages" , messageRoute);
app.use("/api/v1/users" , userRoute);