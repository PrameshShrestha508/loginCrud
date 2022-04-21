import mongoose from "mongoose";
// const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please add a username"],
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please add an email"],
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  address: {
    type: String,
    required: [true, "Please add an address"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    trim: true,
    minlength: [6, "Minimum password length is 6 character"],
  },
});

// module.exports = mongoose.model("Product", productSchema
export default mongoose.model("Login", productSchema);
