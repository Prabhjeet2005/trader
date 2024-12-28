import React from "react";

const Stats = () => {
	return (
		<div className="flex flex-col md:flex-row gap-8 mt-32">
			<div className="space-y-6 p-5 text-sm md:text-base">
				<div className="">
					<h2 className="font-semibold text-3xl mb-16">
						Trust with confidence
					</h2>
					<p className="font-medium text-xl">Customer-first always</p>
					<p className="font-light mt-2">
						That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
						of equity investments and contribute to 15% of daily retail exchange
						volumes in India.
					</p>
				</div>
				<div>
					<h2 className="font-medium text-xl mb-2">No spam or gimmicks</h2>
					<p>
						No gimmicks, spam, "gamification", or annoying push notifications.
						High quality apps that you use at your pace, the way you like.
					</p>
				</div>
				<div>
					<h2 className="font-medium text-xl mb-2">The Zerodha universe</h2>
					<p>
						Not just an app, but a whole ecosystem. Our investments in 30+
						fintech startups offer you tailored services specific to your needs.
					</p>
				</div>
				<div>
					<h2 className="font-medium text-xl mb-2">Do better with money</h2>
					<p>
						With initiatives like Nudge and Kill Switch, we don't just
						facilitate transactions, but actively help you do better with your
						money.
					</p>
				</div>
			</div>
			<div className="mt-5 md:mt-0">
				<img
					src="/media/images/ecosystem.png"
					alt="Ecosystem"
					className="w-full md:w-auto max-w-md mx-auto md:mx-0"
				/>
				<div className="flex justify-around text-center">
					<a
						href="/"
						className="transition-all font-medium text-blue-500 hover:scale-110">
						Explore our products <i class="fa-solid fa-arrow-right-long"></i>
					</a>
					<a href="/" className="transition-all font-medium text-blue-500 hover:scale-110">
						Try Kite demo <i class="fa-solid fa-arrow-right-long"></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Stats;
