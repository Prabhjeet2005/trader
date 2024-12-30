require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);
const app = express();

app.listen(process.env.PORT||8000, () => {
	console.log(`Server Listening PORT: ${process.env.PORT}`);
});
