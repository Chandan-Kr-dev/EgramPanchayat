import mongoose from 'mongoose';
import express from 'express';

import {createScheme,getSchmemes} from '../controllers/SchemeController.js'

const SchemeRouter=express.Router();

SchemeRouter.post('/createSchems',createScheme)
SchemeRouter.get('/getSchemes',getSchmemes)