import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Bounce, ToastContainer, toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import { PieChart } from "./PieChart.js";
const Orders = () => {
	const [allOrders, setAllOrders] = useState([]);

	useEffect(() => {
		axios.get("https://trader-backend-six.vercel.app/getOrders").then((res) => {
			setAllOrders(res.data);
		});
	}, []);

	const handleDelete = (e) => {
		axios
			.post("https://trader-backend-six.vercel.app/deleteOrders", {
				_id: e,
			})
			.then((res) => {
				setAllOrders(res.data);
				toast("Order Deleted Successfully!", {
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
			});
	};

	const modeCounts = allOrders.reduce(
		(acc, order) => {
			if (order.mode === "BUY") acc.BUY += 1;
			else if (order.mode === "SELL") acc.SELL += 1;
			return acc;
		},
		{ BUY: 0, SELL: 0 }
	);

	const data = {
		labels: ["BUY", "SELL"],
		datasets: [
			{
				label: "Buy|Sell Split",
				data: [modeCounts.BUY, modeCounts.SELL],
				backgroundColor: ["teal", "pink"],
				borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
				borderWidth: 1,
			},
		],
	};

	return (
		<>
			{/* <div className="no-orders">
				<p>You haven't placed any orders today</p>

				<Link to={"/"} className="btn">
					Get started
				</Link>
			</div> */}
			{allOrders.length === 0 && (
				<div className="text-5xl pt-48 text-center font-semibold">
					No Orders Placed Yet! <RemoveShoppingCartIcon fontSize="inherit" />{" "}
				</div>
			)}
			{allOrders.length > 0 && (
				<div className="orders">
					<h3 className="title">Orders ({allOrders.length})</h3>
					<div className="order-table">
						<table>
							<tr>
								<th>Instrument</th>
								<th>Qty.</th>
								<th>Avg. cost</th>
								<th>Mode</th>
							</tr>

							{allOrders.map((stock, index) => {
								return (
									<tr key={index}>
										<td>{stock.name}</td>
										<td>{stock.qty}</td>
										<td>{(stock.qty * stock.price).toFixed(2)}</td>
										<td
											className={`${
												stock.mode === "BUY" ? "buyorder" : "sellorder"
											}`}>
											{stock.mode}
										</td>
										<td
											onClick={() => {
												handleDelete(stock._id);
											}}>
											<button className="text-red-600">
												<DeleteIcon />
											</button>
										</td>
									</tr>
								);
							})}
						</table>
					</div>
				</div>
			)}
			{console.log("Data for Pie Chart:", data)}
			<PieChart data={data} />
		</>
	);
};

export default Orders;
