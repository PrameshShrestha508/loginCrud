import mongoose from "mongoose";
// const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please add a username"],
    trim: true,
  },
  email: {
    type: String,
    // unique: true,
    required: [true, "Please add an email"],
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  message: {
    type: String,
    required: [true, "Please add an message"],
    trim: true,
  },
});

// module.exports = mongoose.model("Product", productSchema
export default mongoose.model("Contact", contactSchema);
