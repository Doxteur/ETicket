import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { setTicket } from "../../store/Tickets/ticketSlice";
import EditorComment from "./EditorComment";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

Modal.setAppElement("#root");
function EditTicketModal({ ticket, modalIsOpen, setIsOpen }) {
	const [createdAt, setCreatedAt] = useState();
	const [deadline, setDeadline] = useState();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
		setTicket(data);
	};
	useEffect(() => {
		console.log(ticket);
	}, [ticket]);

	const formatDate = (date) => {
		const newdate = new Date(ticket.createdAt).toISOString().slice(0, 10);
		return newdate;
	};
	const handleChangeCreateAt = (event) => {
		setCreatedAt(event.target.value);
	};
	const handleChangeDeadline = (event) => {
		setDeadline(event.target.value);
	};
	return (
		<div>
			{ticket && (
				<div className="absolute z-50 opacity-100">
					<Modal
						isOpen={modalIsOpen}
						style={customStyles}
						contentLabel="Example Modal"
					>
						<header>
							<div className="rounded-t bg-white mb-0 px-6 py-6">
								<div className="text-center flex justify-between">
									<h6 className="text-blueGray-700 text-xl font-bold">
										{ticket.title}
									</h6>
									<button
										className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setIsOpen(false)}
									>
										fermer
									</button>
								</div>
							</div>
						</header>

						<section
							className=" py-1 bg-blueGray-50 z-50"
							style={{ height: "70vh" }}
						>
							<form action="" onSubmit={handleSubmit(onSubmit)}>
								<div className="w-full px-4 mx-auto mt-6">
									<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
										<div className="flex-auto px-4 lg:px-10 py-10 pt-0 ">
											<div className="flex justify-between">
												<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
													Info Ticket
												</h6>
												<button className="m-4  bg-green-500 text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
													Sauvegarder
												</button>
											</div>
											<div className="flex flex-wrap">
												<div className="w-full lg:w-6/12 px-4">
													<div className="relative w-full mb-3">
														<label
															className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
															htmlFor="grid-password"
														>
															Titre du ticket
														</label>
														<input
															type="text"
															className=" border border-gray-300 rounded-md p-2"
															defaultValue={
																ticket.title
															}
															{...register(
																"title",
																{
																	required: true,
																},
															)}
														/>
													</div>
												</div>
												<div className="w-full lg:w-6/12 px-4">
													<div className="relative w-full mb-3">
														<label
															className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
															htmlFor="grid-password"
														>
															Auteur
														</label>
														<input
															type="text"
															value={
																ticket.author
																	.name
															}
															className=" border border-gray-300 rounded-md p-2"
															disabled
														/>
													</div>
												</div>
												<div className="w-full lg:w-6/12 px-4">
													<div className="relative w-full mb-3">
														<label
															className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
															htmlFor="grid-password"
														>
															Date de création
														</label>
														<input
															type="date"
															value={
																createdAt ||
																formatDate(
																	ticket.createdAt,
																)
															}
															onChange={(e) =>
																handleChangeCreateAt(
																	e,
																)
															}
															className=" border border-gray-300 rounded-md p-2"
														/>
													</div>
												</div>
												<div className="w-full lg:w-6/12 px-4">
													<div className="relative w-full mb-3">
														<label
															className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
															htmlFor="grid-password"
														>
															Date limite
														</label>
														<input
															type="date"
															className=" border border-gray-300 rounded-md p-2"
															value={
																deadline ||
																"2023-06-01"
															}
															onChange={(e) =>
																handleChangeDeadline(
																	e,
																)
															}
														/>
													</div>
												</div>
											</div>

											<hr className="mt-6 border-b-1 border-blueGray-300" />

											<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
												Statut du ticket
											</h6>
											<div className="flex flex-wrap">
												<div className="w-full lg:w-6/12 px-4">
													<div className="relative w-full mb-3">
														<label
															className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
															htmlFor="grid-password"
														>
															Etat
														</label>
														<select
															name="status"
															id="status"
															className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-10/12 ease-linear transition-all duration-150"
															defaultValue={
																ticket.status
															}
															{...register(
																"status",
																{
																	required: true,
																},
															)}
														>
															<option value="OPEN">
																OPEN
															</option>
															<option value="CLOSE">
																CLOSE
															</option>
														</select>
													</div>
												</div>
												<div className="w-full lg:w-6/12 px-4">
													<div className="relative w-full mb-3">
														<label
															className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
															htmlFor="grid-password"
														>
															Priorité
														</label>
														<select
															name="priority"
															id="priority"
															className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-10/12 ease-linear transition-all duration-150"
															defaultValue={
																ticket.priority
															}
															{...register(
																"priority",
																{
																	required: true,
																},
															)}
														>
															<option value="3">
																LOW
															</option>
															<option value="2">
																MEDIUM
															</option>
															<option value="1">
																HIGH
															</option>
														</select>
													</div>
												</div>
												<div className="w-full lg:w-6/12 px-4">
													<div>
														<label
															htmlFor="type"
															className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
														>
															Type
														</label>
														<select
															name="type"
															id="type"
															className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
															defaultValue={
																ticket.type
															}
															{...register(
																"type",
																{
																	required: true,
																},
															)}
														>
															<option value="BUG">
																BUG
															</option>
															<option value="FEATURE">
																FEATURE
															</option>
															<option value="SUPPORT">
																SUPPORT
															</option>
														</select>
													</div>
												</div>
											</div>

											<hr className="mt-6 border-b-1 border-blueGray-300" />

											<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
												Contenu du ticket
											</h6>
											<div className="flex flex-wrap">
												<div className="w-full lg:w-12/12 px-4">
													<div className="relative w-full mb-3">
														{ticket.content && (
															<EditorComment ticket={ticket}/>
														)}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</section>
					</Modal>
				</div>
			)}

			{modalIsOpen && (
				<div className="w-screen h-screen bg-black absolute top-0 opacity-30"></div>
			)}
		</div>
	);
}

export default EditTicketModal;
