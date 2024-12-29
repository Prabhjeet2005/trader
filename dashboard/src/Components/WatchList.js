import React from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import WatchListItem from "./WatchListItem";


const WatchList = () => {
	return (
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
					return (<WatchListItem key={index} stock={stock} />);
				})}
			</ul>
			
		</div>
	);
};

export default WatchList;
