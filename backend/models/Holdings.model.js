const mongoose = require("mongoose");

const holdingsSchema = new mongoose.Schema(
	{
		name: {
			type: String,
		},
		qty: {
			type: Number,
		},
		avg: {
			type: Number,
		},
		price: {
			type: Number,
		},
		net: {
			type: String,
		},
		day: {
			type: String,
		},
	},
	{ timestamps: true }
);

const Holdings = mongoose.model("Holdings", holdingsSchema);
 module.exports = {Holdings}
