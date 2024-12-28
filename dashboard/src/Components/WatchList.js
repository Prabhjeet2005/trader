import React from "react";

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
				<span className="counts"> 0/50</span>
			</div>

			<ul className="list"></ul>
		</div>
	);
};

export default WatchList;
