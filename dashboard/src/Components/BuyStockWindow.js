import React, { useContext, useState } from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ClearIcon from "@mui/icons-material/Clear";
import GeneralContext from "./GeneralContext";

const BuyStockWindow = () => {
	const [stockQuantity, setStockQuantity] = useState(1);
	const [stockPrice, setStockPrice] = useState(0.0);

	const generalContext = useContext(GeneralContext);

	const handleCancelClick = () => {
		generalContext.closeBuyWindow();
	};

	const handleBuyClick = () => {
		generalContext.closeBuyWindow();
	};

	return (
		<div className="pb-4 absolute left-[33%] bottom-0 h-[45%]  bg-gray-50 flex flex-col gap-2 text-xs max-h-fit w-2/6">
			<div className="text-center p-1 font-medium bg-blue-300 rounded-t-xl">
				Purchase Window
			</div>
			<div className="flex items-center gap-3  pl-2 flex-col ">
				<div className="flex gap-2 ">
					<div>
						<div>Qty</div>
						<input
							className="  border outline-none p-2 w-14"
							type="number"
							placeholder="qty"
							name="qty"
							id="qty"
							onChange={(e) => {
								setStockQuantity(e.target.value);
							}}
							value={stockQuantity}
						/>
					</div>
					<div>
						<div>Price</div>
						<input
							className="border outline-none p-2 w-20"
							placeholder="price"
							type="number"
							name="price"
							id="price"
							onChange={(e) => {
								setStockPrice(e.target.value);
							}}
							value={stockPrice}
						/>
					</div>
				</div>

				<div>Margin Required: ₹100 </div>
				<div className="flex ">
					<button
						onClick={handleBuyClick}
						className="rounded p-2 min-w-14 mr-3 text-white transitions bg-green-500">
						<AttachMoneyIcon />
					</button>
					<button
						onClick={handleCancelClick}
						className="rounded min-w-14 p-2 text-white transitions bg-red-600">
						<ClearIcon />
					</button>
				</div>
			</div>
		</div>
	);
};

export default BuyStockWindow;
