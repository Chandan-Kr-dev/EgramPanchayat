import mongoose from 'mongoose';

const AppliedSchemesSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Related:{
        type:String,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    PinCode:{
        type:Number,
        required:true
    },
    Education:{
        type:String,
        required:true
    },
    Occupation:{
        type:String,
        required:true
    },
    Income:{
        type:Number,
        required:true
    },
    Contact:{
        type:Number,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Documents:{
        type:Array,
        required:true
    },

    applyfor:{
        type:String,
        required:true
    }
},{timestamps:true})

export const appliedSchemes=new mongoose.model('appliedSchemes',AppliedSchemesSchema)