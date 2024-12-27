import React from "react";

const Hero = () => {
	return (
		<div
			style={{ backgroundColor: "rgb(56, 126, 209)" }}
			className="flex flex-col sm:flex-row p-4 text-white bg-blue-400 gap-4">
			<div className="flex flex-col gap-4">
				<h3 className="text-2xl ">Support Portal</h3>
				<p className="text-lg">
					Search for an answer or browse help topics to create a ticket
        </p>
        <input className="p-2 max-w-lg rounded-lg" placeholder="Eg: how do i activate F&O, why is my order getting rejected...." />
				<div className="flex flex-col gap-2 flex-wrap md:flex-row ">
					<a className="text-white  border-b pb-2" href="/support">
						Track account opening
					</a>
					<a className="text-white  border-b pb-2" href="/support">
						Track segment activation
					</a>
					<a className="text-white border-b pb-2" href="/support">
						Intraday margins
					</a>
					<a className="text-white border-b pb-2" href="/support">
						Kite user manual
					</a>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<h3 className="border-b pt-1 mt-20 sm:mt-0  sm:pt-0 pb-1 text-center border-white mb-10">Track Tickets</h3>
				<p className="text-2xl" style={{ textDecoration: "none" }}>
					Featured
				</p>
				<ol className="p-2 list-decimal ml-5">
					<li className="underline">
						Latest Intraday leverages and Square-off timings
					</li>
					<li className="underline">
						Surveillance measure on scrips - December 2024
					</li>
				</ol>
			</div>
		</div>
	);
};

export default Hero;
