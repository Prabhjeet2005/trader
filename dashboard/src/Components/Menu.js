import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Menu = () => {
	const navigate = useNavigate();
	const [selectedMenu, setSelectedMenu] = useState(0);
	const [profileOpen, setProfileOpen] = useState(false);

	const handleMenuClick = (index) => {
		setSelectedMenu(index);
	};
	const handleProfileOpen = () => {
		setProfileOpen(!profileOpen);
	};

	const [cookies, removeCookie] = useState([]);
	const handleLogOut = () => {
		removeCookie("token");
		window.location.href = "http://localhost:3000";
	};
	return (
		<div className="flex font-medium justify-between items-center p-4 ">
			<div>
				<Link
					to="/"
					onClick={() => {
						handleMenuClick(0);
					}}>
					<img
						className="w-40 hover:scale-125 flex-shrink-0 resize-none"
						src="/images/logo.svg"
						alt="logo"
					/>
				</Link>
			</div>
			<div className="md:flex hidden w-full justify-evenly">
				<div>
					<Link to="/holdings">
						<p
							onClick={() => {
								handleMenuClick(1);
							}}
							className={
								selectedMenu === 1
									? "text-white bg-blue-600 p-2 rounded transition"
									: "hover:text-white hover:bg-blue-500 p-2 rounded transition"
							}>
							Holdings
						</p>
					</Link>
				</div>
				<div>
					<Link to="/orders">
						<p
							onClick={() => {
								handleMenuClick(5);
							}}
							className={
								selectedMenu === 5
									? "text-white bg-blue-600 p-2 rounded transition"
									: "hover:text-white hover:bg-blue-500 p-2 rounded transition"
							}>
							Orders
						</p>
					</Link>
				</div>
				<div>
					<Link to="/positions">
						<p
							onClick={() => {
								handleMenuClick(2);
							}}
							className={
								selectedMenu === 2
									? "text-white bg-blue-600 p-2 rounded transition"
									: "hover:text-white hover:bg-blue-500 p-2 rounded transition"
							}>
							Posititons
						</p>
					</Link>
				</div>
				<div>
					<Link to="/funds">
						<p
							onClick={() => {
								handleMenuClick(3);
							}}
							className={
								selectedMenu === 3
									? "text-white bg-blue-600 p-2 rounded transition"
									: "hover:text-white hover:bg-blue-500 p-2 rounded transition"
							}>
							Funds
						</p>
					</Link>
				</div>
			</div>

			<div
				className=""
				onClick={() => {
					handleProfileOpen();
				}}>
				<Link className="disabled">
					<i
						className="fa-regular hover:scale-110 fa-circle-user fa-2xl fa-flip"
						style={{ animation: "fa-flip 1s" }}></i>
				</Link>
				{/**********  Profile open Link ***********/}
				<div className="md:hidden flex">
					{profileOpen && (
						<div className="flex absolute shadow-lg w-40 rounded-xl text-center bg-white mt-4 right-7 z-1 flex-col">
							<div className="border-b">
								<Link to="/holdings">
									<p
										onClick={() => {
											handleMenuClick(1);
										}}
										className={
											selectedMenu === 1
												? "text-white bg-blue-600 p-2 rounded transition"
												: "hover:text-white hover:bg-blue-500 p-2 rounded transition"
										}>
										Holdings
									</p>
								</Link>
							</div>
							<div>
								<Link to="/orders">
									<p
										onClick={() => {
											handleMenuClick(5);
										}}
										className={
											selectedMenu === 5
												? "text-white bg-blue-600 border-b p-2 rounded transition"
												: "hover:text-white hover:bg-blue-500 border-b p-2 rounded transition"
										}>
										Orders
									</p>
								</Link>
							</div>
							<div className="border-b">
								<Link to="/positions">
									<p
										onClick={() => {
											handleMenuClick(2);
										}}
										className={
											selectedMenu === 2
												? "text-white bg-blue-600 p-2 rounded transition"
												: "hover:text-white hover:bg-blue-500 p-2 rounded transition"
										}>
										Posititons
									</p>
								</Link>
							</div>
							<div className="border-b">
								<Link to="/funds">
									<p
										onClick={() => {
											handleMenuClick(3);
										}}
										className={
											selectedMenu === 3
												? "text-white bg-blue-600 p-2 rounded transition"
												: "hover:text-white hover:bg-blue-500 p-2 rounded transition"
										}>
										Funds
									</p>
								</Link>
							</div>
							<div className="border-b">
								<Link to="/apps">
									<p
										onClick={() => {
											handleMenuClick(4);
										}}
										className={
											selectedMenu === 4
												? "text-white bg-blue-600 p-2 rounded transition"
												: "hover:text-white hover:bg-blue-500 p-2 rounded transition"
										}>
										Apps
									</p>
								</Link>
							</div>
							<div className="border-b">
								<Link>
									<p
										onClick={handleLogOut}
										className={
											selectedMenu === 6
												? "text-white bg-red-600 p-2 rounded transition"
												: "hover:text-white hover:bg-red-500 p-2 rounded transition"
										}>
										Logout
									</p>
								</Link>
							</div>
						</div>
					)}
				</div>
				<div className="hidden md:flex">
					{profileOpen && (
						<div className="absolute mt-3 w-28 bg-white rounded-lg  z-1 text-center shadow-lg right-5 ">
							<div
								className="bg-red-600 p-2 hover:cursor-pointer rounded-lg text-white"
								onClick={handleLogOut}>
								Logout <i class="fa-solid fa-right-from-bracket"></i>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Menu;
