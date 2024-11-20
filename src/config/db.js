import mongoose from "mongoose";

const connectdb = async () => {
    try {
        const connectionInstance = await mongoose.connect('mongodb+srv://rohan:rohan123@library-management.llv9l.mongodb.net/?retryWrites=true&w=majority&appName=library-management', {
            useNewUrlParser: true,
        
        });
        console.log(`MongoDB connected!! Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection failed", error);
    }
};

export default connectdb;
