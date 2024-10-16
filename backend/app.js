import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"
import cors from 'cors';
import connectdb from './db';
import userRouter from './routes/userRouter.js'



const app = express()
const port = 8080

app.use(express.json())
app.use(cors({
  origin :'*',
  methods : 'GET, POST, PUT, DELETE',
  credentials : true,
  allowedHeaders : ['Content-Type', 'Authorization']  // Add your headers here if needed.
}))

dotenv.config()

connectdb()

app.use('/users',userRouter)

app.get('/', (req, res) => {
  res.send('Application working..')
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})