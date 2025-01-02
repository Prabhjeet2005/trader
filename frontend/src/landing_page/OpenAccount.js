import React from 'react'
import { Link } from "react-router-dom"

const OpenAccount = () => {
  return (
		<div className="text-center mt-20 space-y-2 p-5">
			<h1 className="mt-5 mb-4 text-3xl font-bold">Open a Zerodha account</h1>
			<p>
				Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
				trades.
			</p>
			<Link to={"/signup"}>
				<button className="rounded-lg mt-3 text-white font-semibold min-w-64 p-2 w-[30%] transition-all bg-blue-500 hover:bg-blue-600 hover:scale-110 focus:bg-blue-700">
					Signup For Free
				</button>
			</Link>
		</div>
	);
}

export default OpenAccount