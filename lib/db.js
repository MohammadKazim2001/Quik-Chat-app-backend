import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // connect to MongoDB
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // successful connection log
    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB connected successfully!");
    });

    // handle disconnects
    mongoose.connection.on("disconnected", () => {
      console.log("⚠️ MongoDB disconnected!");
    });
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};
