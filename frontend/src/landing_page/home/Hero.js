import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<div className="text-center space-y-2 p-5">
			<img className="p-14" src="media/images/homeHero.png" alt="" />
			<h1 className="mt-5 mb-4 text-gray-600 text-6xl font-medium ">
				Invest in everything
			</h1>
			<p className="text-xl">
				Online platform to invest in stocks, derivatives, mutual funds, and more
			</p>
			<Link to={"/signup"}>
				<button className="rounded-lg mt-3 text-white font-semibold min-w-64 p-2 w-[30%] transition-all bg-blue-500 hover:bg-blue-600 hover:scale-110 focus:bg-blue-700">
					Signup Now
				</button>
			</Link>
		</div>
	);
};

export default Hero;
