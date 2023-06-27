import { useSelector, useDispatch } from "react-redux";
import { getTickets } from "../../store/Tickets/ticketSlice";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditTicketModal from "../Modals/EditTicketModal";
import { logout } from "../../store/Auth/authSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TicketTable from "./TicketTable";
import AddTicketModal from "../Modals/AddTicketModal";


function Content({modalIsOpenAdd,setIsOpenAdd}) {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [ticket, setTicket] = useState(null);

	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const tickets = useSelector((state) => state.tickets);
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getTickets(auth.token));
	}, [auth.token, dispatch]);


	useEffect(() => {
		if (tickets.error) {
			console.log(tickets.error);
			toast.error(tickets.error.message);
			dispatch(logout());
			localStorage.removeItem("token");
			navigate("/login");
		}
	}, [tickets.error]);

	return (
		<>
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<EditTicketModal
				ticket={ticket}
				setTicket={setTicket}
				modalIsOpen={modalIsOpen}
				setIsOpen={setIsOpen}
			/>
			<AddTicketModal modalIsOpenAdd={modalIsOpenAdd} setIsOpenAdd={setIsOpenAdd} />

			<div className="mt-7 overflow-x-auto">
				{tickets && tickets.tickets && (
					<TicketTable tickets={tickets} rowsPerPage={7} ticket={ticket} setTicket={setTicket} setIsOpen={setIsOpen} />
				)}
			</div>
		</>
	);
}

export default Content;
