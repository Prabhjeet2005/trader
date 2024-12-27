import React from 'react'

const RightImageLeftText = ({
	imageURL,
	productName,
	productDescription,
	learnMore,
}) => {
	return (
		<div style={{ lineHeight: [1.8] }} className="flex items-center gap-2 p-5">
			<div className="flex flex-col gap-2">
				<h3 className="font-semibibold text-3xl">{productName}</h3>
				<p className="text-[rgb(66,66,66)]">{productDescription}</p>
						<a href={learnMore}>Learn More</a>
			</div>
			<div className="min-w-[60%]">
				<img src={imageURL} alt="kite" className="" />
			</div>
		</div>
	);
};

export default RightImageLeftText