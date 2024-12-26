import React from "react";

const Hero = () => {
	return (
		<div className="text-center space-y-2 p-5">
			<img className="p-2" src="media/images/homeHero.png" alt="" />
			<h1 className="mt-5 text-3xl font-bold">Invest in everything</h1>
			<p>
				Online platform to invest in stocks, derivatives, mutual funds, and more
			</p>
			<button className="rounded-lg text-white font-semibold min-w-64 p-2 w-[30%] transition-all bg-blue-500 hover:bg-blue-600 hover:scale-110 focus:bg-blue-700">
				Signup Now
			</button>
		</div>
	);
};

export default Hero;
