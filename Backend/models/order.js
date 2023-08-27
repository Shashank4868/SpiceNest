const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  products: [{ type: mongoose.Types.ObjectId, required: true, ref: "Product" }],
  totalPrice: { type: Number, required: true },
  date: { type: Date, required: true },
  status: { type: String, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model("Order", orderSchema);
