import React, { useState } from "react";
import BuyStockWindow from "./BuyStockWindow";
import SellStockWindow from "./SellStockWindow";

const GeneralContext = React.createContext({
	openBuyWindow: ({ uid, price }) => {},
	closeBuyWindow: () => {},

	openSellWindow: ({ uid, price }) => {},
	closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
	const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
	const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
	const [selectStockUID, setSelectStockUID] = useState("");
	const [stockPrice, setStockPrice] = useState(0);

	const handleOpenBuyWindow = ({ uid, price }) => {
		setIsBuyWindowOpen(true);
		setSelectStockUID(uid); // Coming from WatchListItem
		setStockPrice(price);
		setIsSellWindowOpen(false);
	};

	const handleCloseBuyWindow = () => {
		setIsBuyWindowOpen(false);
		setSelectStockUID("");
		setStockPrice(0);

		setIsSellWindowOpen(false);
	};

	const handleSellWindowOpen = ({ uid, price }) => {
		setIsSellWindowOpen(true);
		setSelectStockUID(uid);
		setStockPrice(price);

		setIsBuyWindowOpen(false);
	};

	const handleSellWindowClose = () => {
		setIsSellWindowOpen(false);
		setSelectStockUID("");
		setStockPrice(0);

		setIsBuyWindowOpen(false);
	};

	return (
		<GeneralContext.Provider
			value={{
				openBuyWindow: handleOpenBuyWindow,
				closeBuyWindow: handleCloseBuyWindow,
				openSellWindow: handleSellWindowOpen,
				closeSellWindow: handleSellWindowClose,
			}}>
			{props.children}
			{isBuyWindowOpen && (
				<BuyStockWindow price={stockPrice} uid={selectStockUID} />
			)}
			{isSellWindowOpen && (
				<SellStockWindow price={stockPrice} uid={selectStockUID} />
			)}
		</GeneralContext.Provider>
	);
};

export default GeneralContext;
