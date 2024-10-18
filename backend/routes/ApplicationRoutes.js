import mongoose from 'mongoose';

import express from 'express';
import applicationcontroller from '../controllers/applicationsControllers.js'


const applicationRouter=express.Router()

applicationRouter.post('/apply',applicationcontroller.applySchemes)

applicationRouter.get('/getApplications',applicationcontroller.getApplications)

export default applicationRouter