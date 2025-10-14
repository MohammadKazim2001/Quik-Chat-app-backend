import mongoose from "mongoose";
import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";

// create express app and HTTP server
const app = express();
const server = http.createServer(app);

// Middleware setup
app.use(express.json({ limit: "4mb" }));
app.use(cors());

// Test route
app.use("/api/status", (req, res) => res.send("server is live"));
app.use("/api/auth", userRouter);

// MongoDB connection
await connectDB();

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log("🚀 Server is running on PORT:" + PORT));
