import React, { useContext, useEffect, useState } from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ClearIcon from "@mui/icons-material/Clear";
import GeneralContext from "./GeneralContext";
import { Bounce, ToastContainer, toast } from "react-toastify";
import Draggable from "react-draggable"
import axios from "axios";

const BuyStockWindow = ({ uid, price }) => {
	const [stockQuantity, setStockQuantity] = useState(1);
	const [stockPrice, setStockPrice] = useState(price);
	const [priceRequired, setPriceRequired] = useState(price);

	const generalContext = useContext(GeneralContext);

	const handleCancelClick = () => {
		generalContext.closeBuyWindow();
	};

	const handleBuyClick = () => {
		axios.post("http://localhost:8000/placeOrder", {
			name: uid,
			qty: stockQuantity,
			price: stockPrice,
			mode: "BUY",
		});
		toast("Buy Order Placed Successfully!", {
			position: "top-center",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			transition: Bounce,
		});
		generalContext.closeBuyWindow();
	};

	return (
		<Draggable>
			<div className="pb-4 shadow-2xl absolute left-[33%] bottom-0 h-[45%] border-teal-500 border-2 bg-teal-50 flex rounded-xl flex-col gap-2 text-xs max-h-fit w-2/6">
				<div className="text-center text-xl p-1 font-medium ">
					Purchase Window ({uid})
				</div>

				<div className="flex items-center gap-3  pl-2 flex-col ">
					<div className="flex gap-2 ">
						<div>
							<div>Qty</div>
							<input
								className="rounded  border outline-none p-2 w-14"
								type="number"
								placeholder="qty"
								name="qty"
								id="qty"
								onChange={(e) => {
									setStockQuantity(e.target.value);
									setPriceRequired(stockPrice * e.target.value);
								}}
								value={stockQuantity}
							/>
						</div>
						<div>
							<div>Price</div>
							<input
								className="rounded border outline-none p-2 w-20"
								placeholder="price"
								type="number"
								name="price"
								id="price"
								onChange={(e) => {
									setStockPrice(e.target.value);
									setPriceRequired(e.target.value * stockQuantity);
								}}
								value={stockPrice}
							/>
						</div>
					</div>

					<div>Margin Required: ₹{priceRequired.toFixed(2)} </div>
					<div className="flex ">
						<button
							onClick={handleBuyClick}
							className="rounded p-2 min-w-14 mr-3 text-white transitions hover:bg-green-600 hover:scale-105 bg-green-500">
							<AttachMoneyIcon />
						</button>
						<button
							onClick={handleCancelClick}
							className="rounded min-w-14 p-2 text-white transitions hover:bg-red-600 hover:scale-105 bg-red-500">
							<ClearIcon />
						</button>
					</div>
				</div>
			</div>
		</Draggable>
	);
};

export default BuyStockWindow;
