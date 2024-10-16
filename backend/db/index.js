import mongoose from 'mongoose';

const connectdb=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/EGram`)
        console.log(`Mongo Db connected successfully ||DB Host : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log('MongoDb connection error : ',error)
        process.exit(1)
    }
}

export default connectdb;