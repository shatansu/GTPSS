const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const gatePassRoutes = require("./routes/gatePassRoutes");


const app = express(); // ✅ YE SABSE PEHLE BANNA CHAHIYE

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/pass", gatePassRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// DB connect
connectDB();

// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});