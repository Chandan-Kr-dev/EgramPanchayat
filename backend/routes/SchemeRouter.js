import mongoose from 'mongoose';
import express from 'express';

import SchemeController from '../controllers/SchemeController.js'


const SchemeRouter=express.Router();

SchemeRouter.post('/createSchems',SchemeController.createScheme)
SchemeRouter.get('/getSchemes',SchemeController.getSchmemes)

export default SchemeRouter;