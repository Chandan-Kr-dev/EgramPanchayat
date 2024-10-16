import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    userRole:{
        type:String,
        
    }
},{timestamps:true})

export const User=new mongoose.model("User",userSchema)