import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("DAta base is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share prompt",
      useNewUrlParser: true,
      useUnifiedTopoogy: true,
    });
    isConnected = true;
    console.log("mongo db connected");
  } catch (error) {
    console.log(error);
  }
};
