import React from "react";

const Hero = () => {
	return (
		<div>
			<div className="font-normal  text-[rgb(66,66,66)]">
				<div className="flex  flex-col p-20 space-y-2">
					<h1 className="text-center text-4xl   font-medium text- ">
						We pioneered the discount broking model in India.
					</h1>
					<h1 className="text-center text-4xl  text-[rgb(66,66,66)] font-medium text- ">
						Now, we are breaking ground with our technology.
					</h1>
				</div>

				<hr />
				<div className="flex p-20 gap-5">
					<div className="max-w-[45%] flex  flex-col gap-4 ">
						<p>
							We kick-started operations on the 15th of August, 2010 with the
							goal of breaking all barriers that traders and investors face in
							India in terms of cost, support, and technology. We named the
							company Zerodha, a combination of Zero and "Rodha", the Sanskrit
							word for barrier.
						</p>
						<p>
							Today, our disruptive pricing models and in-house technology have
							made us the biggest stock broker in India.
						</p>
						<p>
							Over 1+ Crore clients place millions of orders every day through
							our powerful ecosystem of investment platforms, contributing over
							15% of all Indian retail trading volumes.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<p>
							In addition, we run a number of popular open online educational
							and community initiatives to empower retail traders and investors.
						</p>
						<p>
							<a
								className="text-blue-500 font-medium"
								href="https://rainmatter.com/">
								Rainmatter
							</a>
							, our fintech fund and incubator, has invested in several fintech
							startups with the goal of growing the Indian capital markets.
						</p>
						<p>
							And yet, we are always up to something new every day. Catch up on
							the latest updates on our blog or see what the media is saying
							about us.
						</p>
					</div>
				</div>
				<div className="p-10 text-center  font-medium text-4xl">
					<h2>People</h2>
				</div>
				<div className="flex items-start gap-6 px-28 p-10">
					<div className="flex-col flex items-center">
						<div className="p-2">
							<img
								src="/media/images/nithinKamath.jpg"
								className="rounded-full"
								alt="People Image"
							/>
						</div>
						<p className="mt-2 mb-1 font-medium text-xl">Nitin Kamath</p>
						<p className="text-sm mt-2">Founder, CEO</p>
					</div>
					<div className="w-[75%] flex flex-col gap-4 font-normal">
						<p>
							Nithin bootstrapped and founded Zerodha in 2010 to overcome the
							hurdles he faced during his decade long stint as a trader. Today,
							Zerodha has changed the landscape of the Indian broking industry.
						</p>
						<p>
							He is a member of the SEBI Secondary Market Advisory Committee
							(SMAC) and the Market Data Advisory Committee (MDAC).
						</p>
						<p>
							Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a>

						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
