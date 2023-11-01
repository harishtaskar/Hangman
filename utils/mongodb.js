import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery");
  if (isConnected) {
    console.log("mongoDB is Connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "Hangman",
    });
    isConnected = true;
    console.log("mongoDB is Connected");
  } catch (error) {
    console.log(error.message);
  }
};
