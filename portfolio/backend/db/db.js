import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error("MONGODB_URI not found in environment variables");
    }

    await mongoose.connect(mongoUri);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error.message);
  }
};

export default connectDb;
