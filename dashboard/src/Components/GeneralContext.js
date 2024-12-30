import React,{useState} from "react";
import BuyStockWindow from "./BuyStockWindow";

const GeneralContext = React.createContext({
	openBuyWindow: (uid) => {},
	closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
	const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
	const [selectStockUID, setSelectStockUID] = useState("");

	const handleOpenBuyWindow = (uid) => {
		setIsBuyWindowOpen(true);
		setSelectStockUID(uid);
	};

	const handleCloseBuyWindow = () => {
		setIsBuyWindowOpen(false);
		setSelectStockUID("");
	};

	return (
		<GeneralContext.Provider
			value={{
				openBuyWindow: handleOpenBuyWindow,
				closeBuyWindow: handleCloseBuyWindow,
			}}>
			{props.children}
			{isBuyWindowOpen && <BuyStockWindow uid={selectStockUID} />}
		</GeneralContext.Provider>
	);
};

export default GeneralContext;
