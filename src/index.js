// require('dotenv').config({path: './env'})
// iska improved version
import dotenv from "dotenv"
 
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server runnig at port: ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGO db connnection failed !!!!", err)
})






///ye bulky hogya thoda index file ke liye ifi banake, thik hai 
/*
import express from "express";

const app = express();

//ifi fxn in js
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log('ERROR', error)
        throw error
    }
 }) ()
 */