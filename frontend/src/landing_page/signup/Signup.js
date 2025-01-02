import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
const Signup = () => {
	const navigate = useNavigate();
	const [emailForm, setEmailForm] = useState("");
	const [nameForm, setNameForm] = useState("");
	const [passwordForm, setPasswordlForm] = useState("");
	axios.defaults.withCredentials = true;

	const handleGuest = async () => {
		try {
			const { data } = await axios.post(
				"https://trader-pied-phi.vercel.app/login",
				{
					email: "Guest",
					password: "Guest",
				},
				{
					withCredentials: true,
				}
			);
			const { success, message } = data;
			console.log("Success: ", success);
			console.log("Message: ", message);
			if (success) {
				toast("User Logged in", {
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

				window.location.href = "https://trader-dashboard-final.vercel.app";
			} else {
				toast(
					{ message },
					{
						position: "top-center",
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
						transition: Bounce,
					}
				);
			}
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong. Please try again.", {
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
		}
		setEmailForm("");
		setPasswordlForm("");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(
				"https://trader-pied-phi.vercel.app/signup",
				{
					username: nameForm,
					email: emailForm,
					password: passwordForm,
				},
				{
					withCredentials: true,
				}
			);
			const { success, message } = data;
			console.log("Success: ", success);
			console.log("Message: ", message);
			if (success) {
				toast("User Registered", {
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

				window.location.href = "https://trader-dashboard-final.vercel.app";
			} else {
				toast(
					{ message },
					{
						position: "top-center",
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
						transition: Bounce,
					}
				);
			}
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong. Please try again.", {
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
		}
		setEmailForm("");
		setNameForm("");
		setPasswordlForm("");
	};

	return (
		<>
			<div className="flex justify-center mt-24 mb-24">
				<form
					onSubmit={handleSubmit}
					className=" flex gap-2 rounded-3xl shadow-lg flex-col font-medium items-center min-h-96 p-4 bg-blue-100 w-[70%]">
					<div className="text-3xl mb-5 font-semibold">Signup</div>
					<div className="grid text-xl  grid-cols-2 items-center ">
						<label htmlFor="ione" className="hover:cursor-pointer">
							Username{" "}
						</label>
						<input
							id="ione"
							className="p-2 ione rounded outline-none"
							placeholder="Enter Username"
							value={nameForm}
							onChange={(e) => {
								setNameForm(e.target.value);
							}}
						/>
					</div>
					<div className="text-xl grid grid-cols-2 items-center ">
						<label htmlFor="ione" className="hover:cursor-pointer">
							Email{" "}
						</label>
						<input
							id="ine"
							className="p-2 ione rounded outline-none"
							placeholder="Enter Email"
							value={emailForm}
							onChange={(e) => {
								setEmailForm(e.target.value);
							}}
						/>
					</div>
					<div className="text-xl grid grid-cols-2 items-center ">
						<label htmlFor="ione" className="hover:cursor-pointer">
							Password{" "}
						</label>
						<input
							type="password"
							id="ion"
							className="p-2 flex items-center ione rounded outline-none"
							placeholder="•••••••••••••"
							value={passwordForm}
							onChange={(e) => {
								setPasswordlForm(e.target.value);
							}}
						/>
					</div>
					<button className="p-2 mt-5 rounded-xl bg-blue-500 w-1/2 text-white transitions hover:bg-blue-600 hover:scale-110">
						Signup
					</button>
					<Link
						to={"/login"}
						className="text-blue-600 underline hover:scale-110 font-medium">
						Already A User? Login
					</Link>
					<button
						className="w-48 flex flex-col items-center p-2 text-white bg-orange-400 hover:bg-orange-600 hover:scale-110 rounded transition"
						onClick={handleGuest}>
						Guest <span>(Explore Without Login)</span>
					</button>
				</form>
			</div>
		</>
	);
};

export default Signup;
