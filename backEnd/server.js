import express from 'express'; 
import dotenv from 'dotenv';
import { dbConnection } from '../backEnd/connection/connectionMongo.js';
import loginRoute from '../backEnd/routes/loginRoute.js';

const app = express();
dotenv.config({path: "./config/config.env"})
app.listen(process.env.PORT , () =>{
    console.log(`server is running on port ${process.env.PORT}`);
})
dbConnection()
app.use(express.json());
app.use("/api/v1" , loginRoute);