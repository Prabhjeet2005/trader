const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema(
	{
		name: {
			type: String,
		},
		qty: {
			type: Number,
		},
		price: {
			type: Number,
		},
		mode: {
			//BUY or Sell
			type: String,
		},
	},
	{ timestamps: true }
);

const Orders = mongoose.model("Orders", ordersSchema);
module.exports = { Orders };
