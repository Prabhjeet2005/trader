import React from "react";
import { Route, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";


import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
	return (
		<div className="dashboard-container">
			<ToastContainer
				position="top-center"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				transition={Bounce}
			/>
			;
			<GeneralContextProvider>
				<WatchList />
			</GeneralContextProvider>
			<div className="content">
				<Routes>
					<Route exact path="/" element={<Summary />} />
					<Route path="/orders" element={<Orders />} />
					<Route path="/holdings" element={<Holdings />} />
					<Route path="/positions" element={<Positions />} />
					<Route path="/funds" element={<Funds />} />
					<Route path="/apps" element={<Apps />} />
				</Routes>
			</div>
		</div>
	);
};

export default Dashboard;
