require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

const { Holdings } = require("./models/Holdings.model");
const { Position } = require("./models/Position.model");
const bodyParser = require("body-parser");
const { Orders } = require("./models/Order.model");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute.js");

const app = express();

const allowedOrigins = [
	"https://trader-dashboard-final.vercel.app",
	"https://trader-frontend-omega.vercel.app",
	"http://localhost:8000",
];

app.use((req, res, next) => {
	res.setHeader("Referrer-Policy", "unsafe-url"); // Or use "no-referrer-when-downgrade"
	next();
});

const corsOptions = {
	origin: "*",
	methods: "GET,POST", // Allow necessary methods
	allowedHeaders: "*",
	credentials: true, // Allow cookies or credentials to be sent across origins
};
app.options("*", cors());
app.use(cors(corsOptions));
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*"); // Allows all origins
	res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
	if (req.method === "OPTIONS") {
		return res.status(200).end(); // Respond immediately to OPTIONS
	}
	next();
});


app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

app.use("/", authRoute);
app.get("/", (req, res) => {
	res.send("Hi");
});

app.get("/allPositions", async (req, res) => {
	const allPositions = await Position.find({});
	res.json(allPositions);
});

app.get("/allHoldings", async (req, res) => {
	const allHoldings = await Holdings.find({});
	res.status(201).json(allHoldings);
});

app.post("/placeOrder", async (req, res) => {
	const tempOrder = new Orders({
		name: req.body.name,
		qty: req.body.qty,
		price: req.body.price,
		mode: "BUY",
	});

	tempOrder.save();
	res.json(tempOrder);
});

app.post("/sellOrder", async (req, res) => {
	const tempSell = new Orders({
		name: req.body.name,
		qty: req.body.qty,
		price: req.body.price,
		mode: "SELL",
	});
	tempSell.save();
	res.json(tempSell);
});

app.get("/getOrders", async (_, res) => {
	const tempOrder = await Orders.find({});
	res.json(tempOrder);
});

app.post("/deleteOrders", async (req, res) => {
	const { _id } = req.body;
	const tempOrder = await Orders.findByIdAndDelete({ _id });
	const updatedOrder = await Orders.find({});
	res.json(updatedOrder);
});

app.listen(process.env.PORT || 8000, () => {
	console.log(`Server Listening PORT: ${process.env.PORT}`);
});

/*
app.get("/addPosition", async (req, res) => {
	const positionData = [
		{
			product: "CNC",
			name: "EVEREADY",
			qty: 2,
			avg: 316.27,
			price: 312.35,
			net: "+0.58%",
			day: "-1.24%",
			isLoss: true,
		},
		{
			product: "CNC",
			name: "JUBLFOOD",
			qty: 1,
			avg: 3124.75,
			price: 3082.65,
			net: "+10.04%",
			day: "-1.35%",
			isLoss: true,
		},
	];

	positionData.forEach((item) => {
		const addPositions = new Position({
			product: item.product,
			name: item.name,
			qty: item.qty,
			avg: item.avg,
			price: item.price,
			net: item.net,
			day: item.day,
			isLoss: item.isLoss,
		});
		addPositions.save();
	});
	res.send("Positions Done!");
});

app.get("/addHoldings", async (_, res) => {
	const tempHoldings = [
		{
			name: "BHARTIARTL",
			qty: 2,
			avg: 538.05,
			price: 541.15,
			net: "+0.58%",
			day: "+2.99%",
		},
		{
			name: "HDFCBANK",
			qty: 2,
			avg: 1383.4,
			price: 1522.35,
			net: "+10.04%",
			day: "+0.11%",
		},
		{
			name: "HINDUNILVR",
			qty: 1,
			avg: 2335.85,
			price: 2417.4,
			net: "+3.49%",
			day: "+0.21%",
		},
		{
			name: "INFY",
			qty: 1,
			avg: 1350.5,
			price: 1555.45,
			net: "+15.18%",
			day: "-1.60%",
			isLoss: true,
		},
		{
			name: "ITC",
			qty: 5,
			avg: 202.0,
			price: 207.9,
			net: "+2.92%",
			day: "+0.80%",
		},
		{
			name: "KPITTECH",
			qty: 5,
			avg: 250.3,
			price: 266.45,
			net: "+6.45%",
			day: "+3.54%",
		},
		{
			name: "M&M",
			qty: 2,
			avg: 809.9,
			price: 779.8,
			net: "-3.72%",
			day: "-0.01%",
			isLoss: true,
		},
		{
			name: "RELIANCE",
			qty: 1,
			avg: 2193.7,
			price: 2112.4,
			net: "-3.71%",
			day: "+1.44%",
		},
		{
			name: "SBIN",
			qty: 4,
			avg: 324.35,
			price: 430.2,
			net: "+32.63%",
			day: "-0.34%",
			isLoss: true,
		},
		{
			name: "SGBMAY29",
			qty: 2,
			avg: 4727.0,
			price: 4719.0,
			net: "-0.17%",
			day: "+0.15%",
		},
		{
			name: "TATAPOWER",
			qty: 5,
			avg: 104.2,
			price: 124.15,
			net: "+19.15%",
			day: "-0.24%",
			isLoss: true,
		},
		{
			name: "TCS",
			qty: 1,
			avg: 3041.7,
			price: 3194.8,
			net: "+5.03%",
			day: "-0.25%",
			isLoss: true,
		},
		{
			name: "WIPRO",
			qty: 4,
			avg: 489.3,
			price: 577.75,
			net: "+18.08%",
			day: "+0.32%",
		},
	];

	tempHoldings.forEach((item) => {
		let newHoldings = new Holdings({
			name: item.name,
			qty: item.qty,
			avg: item.avg,
			price: item.price,
			net: item.net,
			day: item.day,
		});
		newHoldings.save();
	});
	res.send("Holdings Done!");
});
*/
