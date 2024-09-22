import mongoose from 'mongoose';

const birthApplicationSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    DOB:{
        type: Date,
        required: true
    },
    Parents:{
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    panchayat: {
        type:String,
       
        required: true
    },
    village: {
        type:String,
        required: true
    },
    
},{timestamps:true})

export const birthapplications=new mongoose.model("birthapplications",birthApplicationSchema)