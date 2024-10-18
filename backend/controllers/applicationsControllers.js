import mongoose from 'mongoose';
import express from 'express';
import { appliedSchemes } from '../models/appliedSchemes.models.js';

const applySchemes=async(req,res)=>{
    const {Name,Related,Gender,Address,State,PinCode,Education,Occupation,Contact,Email,Documents,applyFor}=req.body;
    const user=await appliedSchemes.findOne({Name})
    if(user){
        const application=await appliedSchemes.findOne({applyFor})
        if(application){
            res.json({message:'You have already applied for this Scheme',
                data:user
            })
        }
        else{
            const newAppliacation=await appliedSchemes.create({Name,Related,Gender,Address,State,PinCode,Education,Occupation,Contact,Email,Documents,applyFor})
            res.json({message:'Success'})
        }
    }
}

const getApplications=async(req,res)=>{
    const applications=await appliedSchemes.find();
    res.json({data:applications})
}

export default {applySchemes,getApplications}