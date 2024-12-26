import React from "react";

const Education = () => {
	return (
		<>
			<div className="grid mt-10 mb-10 grid-cols-2 gap-2 p-5">
				<div className="w-[90%] flex-col justify-center">
					<img src="/media/images/index-education.svg" alt="index education" />
				</div>
				<div className="grid grid-rows-5">
					<div className="font-semibold text-2xl"><p>Free and open market education</p></div>
					<div>
						Varsity, the largest online stock market education book in the world
						covering everything from the basics to advanced trading.
					</div>
					<a
						href="/"
						className="transition-all font-medium text-blue-500 hover:scale-105 hover:text-blue-600">
						Varsity <i className="fa-solid fa-arrow-right-long"></i>
					</a>
					<div>
						TradingQ&A, the most active trading and investment community in
						India for all your market related queries.
					</div>
					<a
						href="/"
						className="transition-all font-medium text-blue-500 hover:scale-105 hover:text-blue-600">
						TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
					</a>
				</div>
			</div>
		</>
	);
};

export default Education;
