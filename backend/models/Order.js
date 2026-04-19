const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: Array,
  total: Number,
  address: String,
  paymentMethod: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
