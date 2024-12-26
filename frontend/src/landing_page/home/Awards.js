import React from "react";

const Awards = () => {
	return (
		<>
			<div className="grid mt-14 px-5 sm:px-10  grid-cols-1 sm:grid-cols-2 text-center gap-5">
				<div>
					<img
						src="media/images/largestBroker.svg"
						alt="Largest Broker"
						className="mx-auto"
					/>
				</div>
				<div className="space-y-3">
					<div className="font-semibold text-2xl">
						Largest stock broker in India
					</div>
					<div className="font-medium text-left">
						2+ million Zerodha clients contribute to over 15% of all retail
						order volumes in India daily by trading and investing in:
					</div>
					<div className="grid mt-3 text-md text-left grid-cols-1 sm:grid-cols-2 gap-3">
						<div>
							<ul className="list-disc list-inside">
								<li>Futures and Options</li>
								<li>Commodity derivatives</li>
								<li>Currency derivatives</li>
							</ul>
						</div>
						<div>
							<ul className="list-disc list-inside">
								<li>Stocks & IPOs</li>
								<li>Direct mutual funds</li>
								<li>Bonds and Govt. Securities</li>
							</ul>
						</div>
						<div></div>
					</div>
				</div>
			</div>
      <div className="flex mt-2 justify-center">
      <img  src="/media/images/pressLogos.png" alt="" />
      </div>
		</>
	);
};

export default Awards;
