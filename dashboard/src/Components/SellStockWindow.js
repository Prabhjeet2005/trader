import React, { useContext, useState } from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ClearIcon from "@mui/icons-material/Clear";
import { Bounce, ToastContainer, toast } from "react-toastify";
import GeneralContext from "./GeneralContext";
import axios from "axios";

const SellStockWindow = ({ uid,price }) => {
	const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(price);
	const [priceRequired, setPriceRequired] = useState(price);
  

	const generalContext = useContext(GeneralContext);

	const handleCancelClick = () => {
		generalContext.closeSellWindow();
	};

  const handleBuyClick = () => {
    axios.post("http://localhost:8000/sellOrder", {
			name: uid,
			qty: stockQuantity,
			price: stockPrice,
			mode: "SELL",
		});
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
		<div className="pb-4 absolute left-[33%] bottom-0 h-[45%]  bg-gray-50 flex flex-col gap-2 text-xs max-h-fit w-2/6">
			<div className="text-center p-1 font-medium bg-blue-300 rounded-t-xl">
				Sell Window ({uid})
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
                setPriceRequired(e.target.value * stockPrice);
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
                setPriceRequired(e.target.value * stockQuantity);

							}}
							value={stockPrice}
						/>
					</div>
				</div>

        <div>Amount Recievable: ₹{ priceRequired.toFixed(2) }</div>
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

export default SellStockWindow;
