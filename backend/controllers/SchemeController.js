import mongoose from 'mongoose';

import { services } from '../models/services.models.js';

const createScheme=async(req,res)=>{
    const {ServiceName,StartDate, EndDate, ValidFor}=req.body;
    const service=await services.findOne({ServiceName:ServiceName})
    if(service){
        return res.json({message: "Service Already Exists || please create a new One"})
    }else{

        const newService=await services.create({ServiceName,StartDate, EndDate, ValidFor})
    }
}

const getSchmemes=async(req,res)=>{
    const services=await services.find();
    res.json(services)
}

export default {createScheme,getSchmemes}