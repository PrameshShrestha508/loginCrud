import express from "express";
import conn from "./db/conn.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();
conn;
// import routes
// const productRoutes = require("./routes/product");

// Middleware
// app.use(express.json());
// app.use("/api/products/", productRoutes);

const PORT = process.env.PORT || 5000;
// App Listen
app.listen(PORT, () => {
  console.log(`server app running in port ${PORT}`);
});
