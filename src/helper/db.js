import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "work_manager",
        });
        console.log("db connected...");
        console.log(connection);

        
    } catch (error) {
        console.log("failed to connet database!!");
        console.log(error)
    }
}