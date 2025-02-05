import mongoose from 'mongoose'
const connectDB = async ()=>{

    mongoose.connection.on('connected',()=>{
        console.log("Data connected");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/QuickClearBG`)
}
export default connectDB