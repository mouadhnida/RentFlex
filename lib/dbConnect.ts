import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI environment variable is not defined.");
    }
    await mongoose.connect(uri);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};
export default dbConnect;
