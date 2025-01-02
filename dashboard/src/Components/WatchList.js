import React, { useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import WatchListItem from "./WatchListItem";
import { HorizontalGraph } from "./HorizontalGraph";
import GeneralContext from "./GeneralContext";

const WatchList = () => {
	const labels = watchlist.map((arr) => arr["name"]);

	const data = {
		labels,
		datasets: [
			{
				label: "Price Today",
				data: watchlist.map((stock) => stock.price),
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
		],
	};

	const generalContext = useContext(GeneralContext);
	return (
		<>
			<div className="watchlist-container w-[35%]">
				<div className="search-container">
					<input
						type="text"
						name="search"
						id="search"
						placeholder="Search eg: Nifty, weekly, gold mcx"
						className="search text-black outline-none"
					/>
					<span className="counts"> {watchlist.length}/50</span>
				</div>
				<div className="mt-4 text-md px-1 text-gray-400 border-b">
					WatchList <i class="fa-solid fa-binoculars"></i>
				</div>
				<ul className="text-sm">
					{watchlist.map((stock, index) => {
						return <WatchListItem key={index} stock={stock} />;
					})}
				</ul>

				{generalContext.isgraphOpen && <HorizontalGraph data={data}  />}
			</div>
		</>
	);
};

export default WatchList;
