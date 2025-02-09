import React, { useContext, useState } from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ClearIcon from "@mui/icons-material/Clear";
import { Bounce, ToastContainer, toast } from "react-toastify";
import GeneralContext from "./GeneralContext";
import Draggable from "react-draggable";
import axios from "axios";

const SellStockWindow = ({ uid, price }) => {
	const [stockQuantity, setStockQuantity] = useState(1);
	const [stockPrice, setStockPrice] = useState(price);
	const [priceRequired, setPriceRequired] = useState(price);

	const generalContext = useContext(GeneralContext);

	const handleCancelClick = () => {
		generalContext.closeSellWindow();
	};
	axios.defaults.withCredentials = true;

	const handleBuyClick = () => {
		axios.post(
			"https://trader-backend-six.vercel.app/sellOrder",
			{
				name: uid,
				qty: stockQuantity,
				price: stockPrice,
				mode: "SELL",
			},
			{
				withCredentials: true,
			}
		);
		toast("Sell Order Placed Successfully!", {
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
		generalContext.closeSellWindow();
	};

	return (
		<Draggable>
			<div className="pb-4 shadow-2xl absolute left-[33%] bottom-0 h-[45%] border-red-500 border-2 bg-red-100 flex rounded-xl flex-col gap-2 text-xs max-h-fit w-2/6">
				<div className="text-center text-xl p-1 font-medium">
					Sell Window ({uid})
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
									setPriceRequired(e.target.value * stockPrice);
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

					<div>Amount Recievable: ₹{priceRequired.toFixed(2)}</div>
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
		</Draggable>
	);
};

export default SellStockWindow;
