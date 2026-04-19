const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  images: [String], // multiple images
  category: String,
  description: String,
});

module.exports = mongoose.model("Product", productSchema);
