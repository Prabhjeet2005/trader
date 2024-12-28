import React from "react";

const LeftImageRightText = ({
	imageURL,
	productName,
	productDescription,
	tryDemo,
	learnMore,
	googlePlay,
	appStore,
}) => {
	return (
		<div className="flex text-[rgb(66,66,66)] items-center gap-2 p-5" style={{lineHeight:[1.8]}}>
			<div className="min-w-[60%]">
				<img src={imageURL} alt="kite" className="" />
			</div>
			<div className="flex flex-col gap-2">
				<h3 className="font-semibibold text-3xl">{productName}</h3>
				<p className="">{productDescription}</p>
				<div className="flex gap-3">
					<div className="flex gap-4 flex-col">
						<a href={tryDemo}>Try Demo</a>
						<img src={googlePlay} alt="google play" />
					</div>
					<div className="flex gap-4 flex-col">
						<a href={learnMore}>Learn More</a>
						<img src={appStore} alt="app store" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeftImageRightText;
