import mongoose from "mongoose";
import app from "./app.js"

( asycn () => {
    try {
        mongoose.connect("mongodb:localhost:27017")

    }catch (error) {
        console.log("error:", error);
        throw error;
    }
})()
