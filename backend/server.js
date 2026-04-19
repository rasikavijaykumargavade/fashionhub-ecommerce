const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const authRoutes = require("./routes/authRoutes");
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/orders", orderRoutes);
app.use("/auth", authRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerce")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/products", productRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
