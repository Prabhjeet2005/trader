import React from "react";

const Pricing = () => {
	return (
		<div className="flex md:flex-row  flex-col items-center p-5 gap-10 ">
			{/* Left Section */}
			<div className="space-y-4 md:w-1/2">
				<h2 className="text-2xl font-semibold">Unbeatable pricing</h2>
				<h3 className="text-lg mb-2 font-light">
					We pioneered the concept of discount broking and price transparency in
					India. Flat fees and no hidden charges.
				</h3>
				<a
					href="/"
					className="transition-all font-medium text-blue-500 hover:scale-110">
					See Pricing <i className="fa-solid fa-arrow-right-long"></i>
				</a>
			</div>

			{/* Right Section */}
			<div className="flex flex-wrap  text-sm">
				{/* Card 1 */}
				<div className="flex rounded w-64 bg-yellow-50 p-4 items-center space-x-3">
					<img
						src="/media/images/pricingeq.svg"
						className="scale-150 w-14 h-14"
						alt="Free account opening"
					/>
					<p className="text-xs">Free account opening</p>
				</div>

				{/* Card 2 */}
				<div className="flex rounded w-64 bg-yellow-50 p-4 items-center space-x-3">
					<img
						src="/media/images/pricingeq.svg"
						className="scale-150 w-14 h-14"
						alt="Free equity delivery"
					/>
					<div className="text-xs ">
						<p>Free equity delivery</p> <p>and direct mutual funds</p>
					</div>
				</div>

				{/* Card 3 */}
				<div className="flex rounded w-64 bg-yellow-50 p-4 items-center space-x-3">
					<img
						src="/media/images/other-trades.svg"
						className="scale-150 w-14 h-14"
						alt="Intraday and F&O"
					/>
					<p className="text-xs">Intraday and F&O</p>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
