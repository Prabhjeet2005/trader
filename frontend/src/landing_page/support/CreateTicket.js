import React from "react";

const CreateTicket = () => {
	return (
		<div className="text-muted p-4 mt-4 ">
			<h3 className="text-2xl">To create a ticket, select a relevant topic</h3>
			<div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
				<div className="mt-7">
					<p>
						<i class="fa-solid fa-user-plus"></i>
						<span> Account Opening</span>
						<div className="flex ml-6 font-extralight text-sm gap-2 mt-2 flex-col">
							<a href="/support">Getting started</a>
							<a href="/support">Online</a>
							<a href="/support">Offline</a>
							<a href="/support">Charges</a>
							<a href="/support">Company, Partnership and HUF</a>
							<a href="/support">Non Resident Indian (NRI)</a>
						</div>
					</p>
				</div>
				<div className="mt-7">
					<p>
						<i class="fa-regular fa-user"></i>
						<span> Your Zerodha Account</span>
						<div className="flex ml-6 font-extralight text-sm gap-2 mt-2 flex-col">
							<a href="/support">Login credentials</a>
							<a href="/support">Your Profile</a>
							<a href="/support">Account modification and segment addition</a>
							<a href="/support">CMR & DP ID</a>
							<a href="/support">Nomination</a>
							<a href="/support">Transfer and conversion of shares</a>
						</div>
					</p>
				</div>
				<div className="mt-7">
					<p>
						<i class="fa-solid fa-chart-column"></i>
						<span> Trading and Markets</span>
						<div className="flex ml-6 font-extralight text-sm gap-2 mt-2 flex-col">
							<a href="/support">Trading FAQs</a>
							<a href="/support">Kite</a>
							<a href="/support">Margins</a>
							<a href="/support">Product and order types</a>
							<a href="/support">Corporate actions</a>
							<a href="/support">Kite features</a>
						</div>
					</p>
				</div>
				<div className="mt-7">
					<p>
						<i class="fa-regular fa-credit-card"></i>
						<span> Funds</span>
						<div className="flex ml-6 font-extralight text-sm gap-2 mt-2 flex-col">
							<a href="/support">Fund withdrawal</a>
							<a href="/support">Adding funds</a>
							<a href="/support">Adding bank accounts</a>
							<a href="/support">eMandates</a>
						</div>
					</p>
				</div>
				<div className="mt-7">
					<p>
						<i class="fa-solid fa-terminal"></i>
						<span> Console</span>
						<div className="flex ml-6 font-extralight text-sm gap-2 mt-2 flex-col">
							<a href="/support">IPO</a>
							<a href="/support">Portfolio</a>
							<a href="/support">Funds statement</a>
							<a href="/support">Profile</a>
							<a href="/support">Reports</a>
							<a href="/support">Referral program</a>
						</div>
					</p>
				</div>
				<div className="mt-7">
					<p>
						<i class="fa-solid fa-coins"></i>
						<span> Coin</span>
						<div className="flex ml-6 font-extralight text-sm gap-2 mt-2 flex-col">
							<a href="/support">Understanding mutual funds and Coin</a>
							<a href="/support">Coin app</a>
							<a href="/support">Coin web</a>
							<a href="/support">Transactions and reports</a>
							<a href="/support">National Pension Scheme (NPS)</a>
						</div>
					</p>
				</div>
			</div>
		</div>
	);
};

export default CreateTicket;
