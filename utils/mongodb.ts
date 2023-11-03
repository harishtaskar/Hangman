import mongoose from "mongoose";

let isConnected = false;

const uri: string = process.env.MONGODB_URI as string;

export const connectToDB = async () => {
  if (isConnected) {
    console.log("mongoDB is Connected");
    return;
  }

  try {
    await mongoose.connect(uri, {
      dbName: "Hangman",
    });
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
