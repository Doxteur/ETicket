import { Link, useLocation, useNavigate } from "react-router-dom";
import {BiLogOut} from 'react-icons/bi'
import { useDispatch } from "react-redux";
import { logout } from "../store/Auth/authSlice";

function SideBar() {
	let location = useLocation();
	const dispatch = useDispatch();
	const navigate = useNavigate();


	const handleLogout = () => {
		console.log("logout");
		dispatch(logout())
		localStorage.removeItem("token");
		navigate("/login");

	};

	return (
		<div className="h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 float-left">
			<div className=" flex flex-col top-0 left-0 w-52 bg-white h-full border-r">
				<div className="flex items-center justify-left mx-4 font-bold text-xl h-14 border-b">
					<div>ETicket</div>
				</div>
				<div className="overflow-y-auto overflow-x-hidden flex-grow">
					<ul className="flex flex-col py-4 space-y-1">
						<li className="px-5">
							<div className="flex flex-row items-center h-8">
								<div className="text-sm font-light tracking-wide text-gray-500">
									Menu
								</div>
							</div>
						</li>
						<li className="">
							<div
								href="/"
								className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
								style={
									location.pathname === "/dashboard"
										? { borderLeftColor: "#6366F1" }
										: {}
								}
							>
								<span className="inline-flex justify-center items-center ml-4">
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
										></path>
									</svg>
								</span>
								<Link
									className="ml-2 text-sm tracking-wide truncate "
									to={"/dashboard"}
								>
									Dashboard
								</Link>
							</div>
						</li>
						<li>
							<div
								href="/"
								className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
								style={
									location.pathname === "/tickets"
										? { borderLeftColor: "#6366F1" }
										: {}
								}
							>
								<span className="inline-flex justify-center items-center ml-4">
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
										></path>
									</svg>
								</span>
								<Link
									to={"/tickets"}
									className="ml-2 text-sm tracking-wide truncate"
								>
									Ticket
								</Link>
								<span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
									New
								</span>
							</div>
						</li>
					</ul>
				</div>
				{/* Logout  */}
				<div className="flex flex-col items-center justify-center pb-4 mb-4 ">
					<div className="flex items-center">
						<div className="flex-shrink-0 w-10 h-10"
							onClick={handleLogout}

						>
							<button className="flex items-center justify-center w-full h-full text-black bg-blue-500 rounded-full">
								<BiLogOut
									className="w-6 h-6"
									color="white"
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SideBar;
