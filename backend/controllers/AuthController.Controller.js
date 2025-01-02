const { User } = require("../models/User.model.js");
const { createSecretToken } = require("../util/SecretToken.js");
const bcrypt = require("bcrypt");

module.exports.SignUp = async (req, res, next) => {
	try {
		const { email, password, username } = req.body;
		console.log(req.body);
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res
				.status(401)
				.json({ message: "User Already Exists!", success: false });
		}
		const user = await User.create({ email, password, username });
		const token = createSecretToken(user._id);

		res.cookie("token", token, {
			withCredentials: true,
		});
		res
			.status(201)
			.json({ message: "User Created Successfully", success: true, user });
		next();
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "User Signup Problem", success: false });
	}
};

module.exports.Login = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) {
			return res
				.status(401)
				.json({ message: "User isn't Registered", success: false });
		}
		const auth = await bcrypt.compare(password, user.password);
		if (!auth) {
			return res
				.status(402)
				.json({ message: "Incorrect Username or Password" });
		}
		const token = createSecretToken(user._id);
		res.cookie("token", token, {
			httpOnly: false,
			withCredentials: true,
		});

		res
			.status(201)
			.json({ message: "User Logged In Successfully", success: true });
		next();
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Login Error", success: false });
	}
};
