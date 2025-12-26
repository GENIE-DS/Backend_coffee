// require('dotenv').config({path: './env'})
import dotenv from "dotenv";

dotenv.config();



// import mongoose from "mongoose" ;
// import { DB_NAME } from "./constants.js";

import connectDB from "./db/index.js";
connectDB();


/*

// we could have connected the DB in index file itself but its not standurd prectice as you see ...  so we added this in index.js in DB folder 
import express from "express" ;
const app = express() ;

( async ()=> {      // remember daatabase is always in another continent
    try {
        await mongoose.connect( `${process.env.MONGODB_URI}/${DB_NAME}` ) ;
        app.on("errror", ( error ) => {
            console.log( "ERROR:", error ) ;
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
} catch (error){
    console.error("ERROR ", error)
    throw err
}
function connectDB(){}


connectDB()


*/
