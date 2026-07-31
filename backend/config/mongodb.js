import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log("Database Connected"));
    mongoose.connection.on('error', (err) => console.error("Database Error:", err.message));

    const uri = process.env.MONGODB_URI;
    if (!uri || uri.includes("MongoDB URI here") || uri.includes("------")) {
        console.error("CRITICAL: MONGODB_URI environment variable is missing or using placeholder text! Please set a valid MONGODB_URI in your host Environment Variables.");
        return;
    }

    try {
        await mongoose.connect(uri, { dbName: 'prescripto' });
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
    }

}

export default connectDB;