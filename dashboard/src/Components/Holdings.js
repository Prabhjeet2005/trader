import React, { useEffect, useState } from "react";
// import { holdings } from "../data/data";
import axios from "axios";
import {VerticalGraph} from "./VerticalGraph.js"

const Holdings = () => {
	const [allHoldings, setAllHoldings] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:8000/allHoldings").then((res) => {
			setAllHoldings(res.data);
		});
	}, []);

	const labels = allHoldings.map((arr) =>  arr["name"] );

	const data = {
		labels,
		datasets: [
			{
				label: "Stock Qty",
				data: allHoldings.map((stock) => stock.qty),
				backgroundColor: "orange",
			},
			
		],
	};


	return (
		<>
			<h3 className="title">Holdings ({allHoldings.length})</h3>
			<div className="row mb-5">
				<div className="col">
					<p>Total investment</p>
					<h5>
						29,875.<span>55</span>{" "}
					</h5>
				</div>
				<div className="col">
					<p>Current value</p>
					<h5>
						31,428.<span>95</span>{" "}
					</h5>
				</div>
				<div className="col">
					<p>P & L</p>
					<h5>
						1,553.40 <span className="text-xs">(+5.20%)</span>
					</h5>
				</div>
			</div>
			<div className="order-table">
				<table>
					<tr>
						<th>Instrument</th>
						<th>Qty.</th>
						<th>Avg. cost</th>
						<th>LTP</th>
						<th>Cur. val</th>
						<th>P&L</th>
						<th>Net chg.</th>
						<th>Day chg.</th>
					</tr>

					{allHoldings.map((stock, index) => {
						const currValue = stock.price * stock.qty;
						const isProfit = currValue - stock.avg * stock.qty >= 0.0;
						const profClass = isProfit ? "profit" : "loss";
						const dayClass = stock.day[0]=='+'?"profit":"loss";
						return (
							<tr key={index}>
								<td>{stock.name}</td>
								<td>{stock.qty}</td>
								<td>{stock.avg.toFixed(2)}</td>
								<td>{stock.price.toFixed(2)}</td>
								<td>{currValue.toFixed(2)}</td>
								<td className={profClass}>
									{(currValue - stock.avg * stock.qty).toFixed(2)}
								</td>
								<td className={profClass}>{stock.net}</td>
								<td className={dayClass}>{stock.day}</td>
							</tr>
						);
					})}
				</table>
			</div>
			<VerticalGraph data={data} />

		</>
	);
};

export default Holdings;
