import mongoose from "mongoose";
// const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectImage: {
    type: String,
    // required: [true, "Please add an image"],
    trim: true,
  },
  projectTitle: {
    type: String,
    required: [true, "Please add an project title"],
    trim: true,
  },
  projectDate: {
    type: Date,
    required: [true, "Please add an published date"],
    trim: true,
  },
  projectLink: {
    type: String,
    required: [true, "Please provide link to your github"],
    trim: true,
  },
});

// module.exports = mongoose.model("Product", productSchema
export default mongoose.model("Projects", projectSchema);
