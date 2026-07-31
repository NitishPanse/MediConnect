import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log("Database Connected"))
    
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        console.error("MONGODB_URI environment variable is missing!");
        return;
    }

    await mongoose.connect(uri, { dbName: 'prescripto' })

}

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.