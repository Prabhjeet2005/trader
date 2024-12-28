import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Education from "./Education";
import Stats from "./Stats";
import Pricing from "./Pricing";
import OpenAccount from "../OpenAccount";

const HomePage = () => {
	return (
		<>
			<Hero />
			<Awards />
			<Stats />
			<Pricing />
			<Education />
			<OpenAccount />
		</>
	);
};

export default HomePage;
