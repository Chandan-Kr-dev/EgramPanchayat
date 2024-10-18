import mongoose from 'mongoose';

const ServicesSchema=new mongoose.Schema({
    ServiceName:{
        type:String,
        required:true
    },
    StartDate:{
        type:Date,
        required:true
    },
    EndDate:{
        type:Date,
        required:true
    },
    ValidFor:{
        type:String,
        required:true
    },
    applications:{
        type:Number,
        default:0
    }
},{timestamps:true})

export const services=new mongoose.model("services",ServicesSchema)