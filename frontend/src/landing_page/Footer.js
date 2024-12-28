import React from "react";

const Footer = () => {
	return (
		<div className="bg-gray-100 pt-5">
			<hr className="border-gray-300" />
			<div className="flex flex-col md:flex-row px-6 md:px-10">
				{/* Left Section */}
				<div className="md:w-1/4 flex flex-col font-light text-xs items-start mb-5 md:mb-0">
					<img
						src="media/images/logo.svg"
						className="mb-3"
						style={{ width: 150 }}
						alt="Zerodha Logo"
					/>
					<p className="">© 2010 - 2024, Zerodha Broking Ltd.</p>
					<p>All rights reserved.</p>
					<div className="flex gap-3 mt-4">
						<i className="fa-brands scale-150 fa-x-twitter"></i>
						<i className="fa-brands scale-150 fa-facebook"></i>
						<i className="fa-brands scale-150 fa-instagram"></i>
						<i className="fa-brands scale-150 fa-linkedin-in"></i>
					</div>
					<hr className="my-4 w-full border-gray-400" />
					<div className="flex gap-3">
						<i className="fa-brands scale-150 fa-youtube"></i>
						<i className="fa-brands scale-150 fa-whatsapp"></i>
						<i className="fa-brands scale-150 fa-telegram"></i>
					</div>
				</div>

				{/* Additional Columns */}
				<div className="md:w-3/4 grid grid-cols-1 ml-2 md:grid-cols-3 gap-7 text-sm font-light">
					<div className="grid">
						<h4 className="font-semibold text-xl mb-2">Company</h4>
						<h5>About</h5>
						<h5>Products</h5>
						<h5>Pricing</h5>
						<h5>Referral programme</h5>
						<h5>Careers</h5>
						<h5>Zerodha.tech</h5>
						<h5>Press & media</h5>
						<h5>Zerodha Cares (CSR)</h5>
					</div>
					<div className="grid">
						<h4 className="font-semibold text-xl mb-2">Support</h4>

						<h5>Support portal</h5>
						<h5>Z-Connect blog</h5>
						<h5>List of charges</h5>
						<h5>Market overview</h5>
						<h5>Downloads & resources</h5>
						<h5>Videos</h5>
						<h5>How to file a complaint?</h5>
						<h5>Status of your complaints</h5>
					</div>
					<div className="">
						<h4 className="font-semibold row-2 text-xl mb-2">Account</h4>
						<h5 className="row-2 mb-1">Open an account</h5>
						<h5 className="row-2">Fund transfer</h5>
						<div className="row-6"></div>
					</div>
				</div>
			</div>
			<div className="text-[10px] space-y-2 mt-5 p-4 font-extralight">
				<p>
					Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
					no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
					Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
					through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
					Registration no.: INZ000038238 Registered Address: Zerodha Broking
					Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
					School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
					any complaints pertaining to securities broking please write to
					complaints@zerodha.com, for DP related to dp@zerodha.com. Please
					ensure you carefully read the Risk Disclosure Document as prescribed
					by SEBI | ICF
				</p>
				<p>
					Procedure to file a complaint on SEBI SCORES: Register on SCORES
					portal. Mandatory details for filing complaints on SCORES: Name, PAN,
					Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
					Speedy redressal of the grievances
				</p>
				<p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
			</div>
			<div className="flex justify-evenly p-4 font-extralight text-sm">
				<div>NSE</div>
				<div>BSE</div>
				<div>MCX</div>
				<div>Terms & conditions</div>
				<div>Policies & procedures</div>
				<div>Disclosure</div>
				<div>For investor's attention</div>
				<div>Investor charter</div>
			</div>
		</div>
	);
};

export default Footer;
