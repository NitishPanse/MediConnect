import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log("Database Connected"))
    
    let uri = process.env.MONGODB_URI;
    if (uri && !uri.includes('/prescripto')) {
        if (uri.endsWith('/')) {
            uri = `${uri}prescripto`;
        } else if (!uri.includes('mongodb.net/')) {
            uri = `${uri}/prescripto`;
        }
    }
    await mongoose.connect(uri || process.env.MONGODB_URI)

}

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.