import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="bg-gray-50 sticky z-1 top-0 shadow">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link to="/">
							<img
								src="/media/images/logo.svg"
								alt="ZerodhaLogo"
								className="h-8 p-1"
							/>
						</Link>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex space-x-6 items-center">
						<Link
							to="/signup"
							className="text-gray-700 hover:scale-110 active:bg-blue-600 rounded-lg px-2 py-2 font-medium hover:bg-blue-500 hover:text-white transition">
							Signup
						</Link>
						<Link
							to="/about"
							className="text-gray-700 hover:scale-110 active:bg-blue-600 rounded-lg px-2 py-2 font-medium hover:bg-blue-500 hover:text-white transition">
							About
						</Link>
						<Link
							to="/products"
							className="text-gray-700 hover:scale-110 active:bg-blue-600 rounded-lg px-2 py-2 font-medium hover:bg-blue-500 hover:text-white transition">
							Products
						</Link>
						<Link
							to="/pricing"
							className="text-gray-700 hover:scale-110 active:bg-blue-600 rounded-lg px-2 py-2 font-medium hover:bg-blue-500 hover:text-white transition">
							Pricing
						</Link>
						<Link
							to="/support"
							className="text-gray-700 hover:scale-110 active:bg-blue-600 rounded-lg px-2 py-2 font-medium hover:bg-blue-500 hover:text-white transition">
							Support
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<div className="flex md:hidden">
						<button
							onClick={() => setMenuOpen(!menuOpen)}
							className="text-gray-700 hover:text-blue-500 focus:outline-none">
							<i className="fa-solid fa-bars text-lg"></i>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="md:hidden bg-gray-50">
					<div className="space-y-2 p-4">
						<Link
							to="/signup"
							className="block text-gray-700  active:bg-blue-600 rounded-lg px-2 py-2 font-medium hover:bg-blue-500 hover:text-white transition">
							Signup
						</Link>
						<Link
							to="/about"
							className="block text-gray-700  active:bg-blue-600 rounded-lg px-2 py-2 font-medium hover:bg-blue-500 hover:text-white transition">
							About
						</Link>
						<Link
							to="/products"
							className="block text-gray-700  active:bg-blue-600 rounded-lg px-2 py-2 font-medium hover:bg-blue-500 hover:text-white transition">
							Products
						</Link>
						<Link
							to="/pricing"
							className="block text-gray-700  active:bg-blue-600 rounded-lg px-2 py-2 font-medium hover:bg-blue-500 hover:text-white transition">
							Pricing
						</Link>
						<Link
							to="/support"
							className="block text-gray-700  active:bg-blue-600 rounded-lg px-2 py-2 font-medium hover:bg-blue-500 hover:text-white transition">
							Support
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
