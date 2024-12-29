import React from "react";
import Menu from "./Menu";

const NavBar = () => {
	return (
		<div className="flex border items-center">
			<div className="flex flex-col md:flex-row border-r  p-4 justify-evenly w-[32%] ">
				<div className="flex gap-2 ">
					<div className="flex gap-1">
						<p>NIFTY 50</p>
						<p className="text-red-600">100.2</p>
					</div>
				</div>
				<div className="flex gap-2">
					<p>SENSEX</p>
					<p className="text-green-600">50.32 </p>
				</div>
			</div>
			<div className="w-[68%]">
				<Menu />
			</div>
		</div>
	);
};

export default NavBar;
