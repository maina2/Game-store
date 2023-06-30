// order-model.js

import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  OrderID: { type: Number, required: true },
  UserName: { type: String, required: true },
  GameID: { type: Number, required: true },
  OrderDate: { type: Date },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
