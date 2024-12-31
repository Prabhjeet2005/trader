import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const Orders = () => {
	const [allOrders, setAllOrders] = useState([]);
	const [cost, setCost] = useState(0);

	useEffect(() => {
		axios.get("http://localhost:8000/getOrders").then((res) => {
			setAllOrders(res.data);
		});
	}, []);

	return (
		<>
			{/* <div className="no-orders">
				<p>You haven't placed any orders today</p>

				<Link to={"/"} className="btn">
					Get started
				</Link>
			</div> */}

			{allOrders.length == 0 && (
				<div className="text-5xl pt-48 text-center font-semibold">
					No Orders Placed Yet! <RemoveShoppingCartIcon />{" "}
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
									</tr>
								);
							})}
						</table>
					</div>
				</div>
			)}
		</>
	);
};

export default Orders;
