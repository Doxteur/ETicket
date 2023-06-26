import React, { useEffect, useState } from "react";
import UserTicketTable from './UserTicketTable'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllTickets, getTickets } from "../../store/Tickets/ticketSlice";
import EditTicketModal from "../Modals/EditTicketModal";
import { logout } from "../../store/Auth/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Stats from "./Stats";

function Content() {
  const [modalIsOpen, setIsOpen] = useState(false);
	const [ticket, setTicket] = useState(null);

	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const tickets = useSelector((state) => state.tickets);
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getAllTickets(auth.token));
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
      <Stats tickets={tickets} />

      <div className="mt-7 overflow-x-auto">
				{tickets && tickets.tickets && (
					<UserTicketTable tickets={tickets} rowsPerPage={7} ticket={ticket} setTicket={setTicket} setIsOpen={setIsOpen} />
				)}
			</div>
    </>
  )
}

export default Content
