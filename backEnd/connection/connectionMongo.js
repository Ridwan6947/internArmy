import mongoose from 'mongoose';

export const dbConnection = () =>{
    mongoose.connect(process.env.mongodb_URL , {dbName:"chatApp"})
    .then(() =>{
        console.log('connected to mongoDB')
    })
    .catch((err) =>{
        console.log(err)
    })
}