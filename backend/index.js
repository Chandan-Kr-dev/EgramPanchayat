import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"
import cors from 'cors';
import { services } from './models/services.models.js';




const app = express()
const port = 8080

app.use(express.json())
app.use(cors())

dotenv.config()

const dbconn=()=>{
  //connect to the databse here 
  const conn=mongoose.connect(process.env.MONGODB_URL)
  .then(res=>console.log("Mongo DB Connected Successfully"))
  .catch(err=>console.log(err))
}
dbconn()



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/addSchemes',(req,res)=>{
  const {schemename,startdata,enddate,validfor}=req.body
  console.log(req.body)
  try {
    services.create({ServiceName:schemename,StartDate:startdata,EndDate:enddate,ValidFor:validfor})
    .then(()=>res.json("Scheme Added Successfully"))
    .catch(err=>res.json(err))
  } catch (error) {
    console.log(error)
    res.status(500).json("Server Error")
  }
})

app.get('/api/getschemes',(req,res)=>{
  try {
    const schemes=services.find()

    res.json(schemes)
  } catch (error) {
    // res.json(error)
    res.status(500).json(error)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})