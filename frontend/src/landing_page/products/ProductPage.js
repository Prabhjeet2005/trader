import React from "react";
import Hero from "../products/Hero";
import LeftImageRightText from "./LeftImageRightText";
import RightImageLeftText from "./RightImageLeftText";
import Universe from "./Universe";
import Card from "./Card";

const ProductPage = () => {
	return (
		<>
			<Hero />

			{/* Product Sections */}
			<div className="space-y-16">
				<LeftImageRightText
					imageURL="/media/images/kite.png"
					productName="Kite"
					productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
					tryDemo=""
					learnMore=""
					googlePlay="/media/images/googlePlayBadge.svg"
					appStore="/media/images/appstoreBadge.svg"
				/>
				<RightImageLeftText
					imageURL="/media/images/Console.png"
					productName="Console"
					productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
					learnMore=""
				/>
				<LeftImageRightText
					imageURL="/media/images/Coin.png"
					productName="Coin"
					productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
					tryDemo=""
					learnMore=""
					googlePlay="/media/images/googlePlayBadge.svg"
					appStore="/media/images/appstoreBadge.svg"
				/>
				<RightImageLeftText
					imageURL="/media/images/kiteconnect.png"
					productName="Kite Connect API"
					productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
					learnMore=""
				/>
				<LeftImageRightText
					imageURL="/media/images/varsity.png"
					productName="Varsity mobile"
					productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
					tryDemo=""
					learnMore=""
					googlePlay="/media/images/googlePlayBadge.svg"
					appStore="/media/images/appstoreBadge.svg"
				/>
			</div>

			{/* Technology Stack Section */}
			<p className="text-center p-4 text-lg md:text-xl text-[rgb(66,66,66)]">
				Want to know more about our technology stack? Check out the{" "}
				<a
					href="https://zerodha.tech/"
					className="text-blue-500 underline hover:text-blue-600">
					Zerodha.tech
				</a>{" "}
				blog.
			</p>

			{/* Universe Section */}
			<Universe />

			{/* Cards Section */}
			<div className="flex-col mb-20 items-center flex">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
					<Card
						logo="/media/images/zerodhaFundhouse.png"
						logoDescription="Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
					/>
					<Card
						logo="/media/images/sensibullLogo.svg"
						logoDescription="Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
					/>
					<Card
						logo="/media/images/tijori.svg"
						logoDescription="Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
					/>
					<Card
						logo="/media/images/streakLogo.png"
						logoDescription="Systematic trading platform
that allows you to create and backtest
strategies without coding."
					/>
					<Card
						logo="/media/images/smallcaseLogo.png"
						logoDescription="Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
					/>
					<Card
						logo="/media/images/dittoLogo.png"
						logoDescription="Personalized advice on life and health insurance. No spam and no mis-selling."
					/>
				</div>
				<button className="rounded-lg mt-3 text-white font-semibold min-w-64 p-2 w-[30%] transition-all bg-blue-500 hover:bg-blue-600 hover:scale-110 focus:bg-blue-700">
					Signup Now
				</button>
			</div>
		</>
	);
};

export default ProductPage;
