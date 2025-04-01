import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const connect = await mongoose.connect('mongodb://localhost:27017/your-db-name');
        if(connect){
            console.log("DB Connection Successful.")
        }
    } catch (err) {
        console.error("DB Connection Failed", err);
    }
}



export default connectDB;