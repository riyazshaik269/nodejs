const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    order_id: { type: Number, unique: true },
    item_name: { type: String },
    cost: { type: Number, default:1 },
    order_date: { type: Date },
    delivery_date: { type: Date, default:Date.now }
});

module.exports = mongoose.model('Order', orderSchema)