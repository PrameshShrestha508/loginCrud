import express from "express";
import conn from "./db/conn.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";
const app = express();
dotenv.config();
conn;
// import routes
// const productRoutes = require("./routes/users.js");

// Middleware
// app.use(express.json());
app.use("users/", userRoutes);

const PORT = process.env.PORT || 5000;
// App Listen
app.listen(PORT, () => {
  console.log(`server app running in port ${PORT}`);
});
