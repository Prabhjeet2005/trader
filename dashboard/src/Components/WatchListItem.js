import React, { useState } from "react";
import { Tooltip } from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
const WatchListItem = ({ stock, index }) => {
	const [showWatchListActions, setShowWatchListActions] = useState(false);

	const handleMouseEnter = (e) => {
		setShowWatchListActions(true);
	};
	const handleMouseLeave = (e) => {
		setShowWatchListActions(false);
	};

	return (
		<li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			{/* Css item is Written otherwise hover won't work */}
			<div className="item p-1 text-xs">
				<p className={stock.isDown ? "text-green-500" : "text-red-600"}>
					{stock.name}
				</p>
				<div className=" ">
					<span>{stock.price}</span>
					{stock.isDown ? (
						<KeyboardArrowDown className=" text-red-600 " />
					) : (
						<KeyboardArrowUp className=" text-green-500 " />
					)}
					<span className={stock.isDown ? "text-red-600" : "text-green-500"}>
						{stock.percent}
					</span>
				</div>
      {showWatchListActions && <WatchListAction uid={stock.name} />}
      </div>
		</li>
	);
};

const WatchListAction = ({ uid }) => {
	return (
		<div className="absolute min-w-40 bg-white right-0 m-1">
			<div className="flex justify-evenly">
				<Tooltip title="Buy Stock" placement="top" arrow>
					<button className="bg-green-500 watchActionWidth text-white p-1 font-medium rounded ">
						Buy
					</button>
				</Tooltip>
				<Tooltip color="red" title="Sell Stock" placement="top" arrow>
					<button className="bg-red-600 watchActionWidth text-white p-1 font-medium rounded ">
						Sell
					</button>
				</Tooltip>
				<Tooltip title="Analyse" placement="top" arrow>
					<button className="bg-orange-500 watchActionWidth text-white p-1 font-medium rounded ">
						<AutoGraphIcon />
					</button>
				</Tooltip>
			</div>
		</div>
	);
};

export default WatchListItem;