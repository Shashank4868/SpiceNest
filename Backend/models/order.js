const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  name: { type: String, required: true },
  products: { type: Array, required: true },
  totalPrice: { type: Number, required: true },
  address: { type: String, required: true },
  phone: { type: Number, required: true },
});

module.exports = mongoose.model("Order", orderSchema);
