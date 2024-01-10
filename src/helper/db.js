import mongoose from "mongoose";

const config ={
    inConnected:0,
};

export const connectDb = async () => {

    if (config.inConnected) {
        return;
    }
    
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "work_manager",
        });
        console.log("db connected...");
        console.log(connection.readyState);
        config.inConnected = connection.readyState;

        
    } catch (error) {
        console.log("failed to connet database!!");
        console.log(error)
    }
}