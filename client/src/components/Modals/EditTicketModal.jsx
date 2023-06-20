import { useEffect } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { setTicket } from "../../store/Tickets/ticketSlice";

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

	return (
		<div>
			{/* {ticket && (
				<Modal
					isOpen={modalIsOpen}
					style={customStyles}
					contentLabel="Example Modal"
				>
					<button
						className="bg-red-500 text-white p-2 px-4 rounded-md mt-2 float-right"
						onClick={() => setIsOpen(false)}
					>
						X
					</button>

					
					<h2 className="text-2xl font-bold p-4">Ticket :</h2>
					<form action="" onSubmit={handleSubmit(onSubmit)}>
						<div className="grid grid-cols-3 gap-10">
							<input
								type="text"
								className=" border border-gray-300 rounded-md p-2"
								defaultValue={ticket.title}
								{...register("title", { required: true })}
							/>
							<input
								type="text"
								value={ticket.author.name}
								className=" border border-gray-300 rounded-md p-2"
								disabled
							/>
							<div>
								<label htmlFor="status">Status</label>
								<select
									name="status"
									id="status"
									className="border border-gray-300 rounded-md p-2"
									defaultValue={ticket.status}
									{...register("status", { required: true })}
								>
									<option value="OPEN">OPEN</option>
									<option value="CLOSE">CLOSE</option>
								</select>
							</div>
							<div>
								<label htmlFor="priority">Priority</label>
								<select
									name="priority"
									id="priority"
									className="border border-gray-300 rounded-md p-2"
									defaultValue={ticket.priority}
									{...register("priority", {
										required: true,
									})}
								>
									<option value="LOW">LOW</option>
									<option value="MEDIUM">MEDIUM</option>
									<option value="HIGH">HIGH</option>
								</select>
							</div>
							<div>
								<label htmlFor="type">Type</label>
								<select
									name="type"
									id="type"
									className="border border-gray-300 rounded-md p-2"
									defaultValue={ticket.type}
									{...register("type", { required: true })}
								>
									<option value="BUG">BUG</option>
									<option value="FEATURE">FEATURE</option>
									<option value="SUPPORT">SUPPORT</option>
								</select>
							</div>
							{errors.exampleRequired && (
								<span>This field is required</span>
							)}
						</div>
						<button className="bg-green-500 text-white p-2 rounded-md mt-2 float-right">
							Changer
						</button>
					</form>
				</Modal>
			)} */}
			<div className="absolute z-50 opacity-100">

			
			<Modal
				isOpen={modalIsOpen}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<section
					class=" py-1 bg-blueGray-50 z-50"
					style={{ height: "70vh" }}
				>
					<div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
						<div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
							<div class="rounded-t bg-white mb-0 px-6 py-6">
								<div class="text-center flex justify-between">
									<h6 class="text-blueGray-700 text-xl font-bold">
										My account
									</h6>
									<button
										class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setIsOpen(false)}
									>
										close
									</button>
								</div>
							</div>
							<div class="flex-auto px-4 lg:px-10 py-10 pt-0">
								<h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
									User Information
								</h6>
								<div class="flex flex-wrap">
									<div class="w-full lg:w-6/12 px-4">
										<div class="relative w-full mb-3">
											<label
												class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlfor="grid-password"
											>
												Username
											</label>
											<input
												type="text"
												class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												value="lucky.jesse"
											/>
										</div>
									</div>
									<div class="w-full lg:w-6/12 px-4">
										<div class="relative w-full mb-3">
											<label
												class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlfor="grid-password"
											>
												Email address
											</label>
											<input
												type="email"
												class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												value="jesse@example.com"
											/>
										</div>
									</div>
									<div class="w-full lg:w-6/12 px-4">
										<div class="relative w-full mb-3">
											<label
												class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlfor="grid-password"
											>
												First Name
											</label>
											<input
												type="text"
												class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												value="Lucky"
											/>
										</div>
									</div>
									<div class="w-full lg:w-6/12 px-4">
										<div class="relative w-full mb-3">
											<label
												class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlfor="grid-password"
											>
												Last Name
											</label>
											<input
												type="text"
												class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												value="Jesse"
											/>
										</div>
									</div>
								</div>

								<hr class="mt-6 border-b-1 border-blueGray-300" />

								<h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
									Contact Information
								</h6>
								<div class="flex flex-wrap">
									<div class="w-full lg:w-12/12 px-4">
										<div class="relative w-full mb-3">
											<label
												class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlfor="grid-password"
											>
												Address
											</label>
											<input
												type="text"
												class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
											/>
										</div>
									</div>
									<div class="w-full lg:w-4/12 px-4">
										<div class="relative w-full mb-3">
											<label
												class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlfor="grid-password"
											>
												City
											</label>
											<input
												type="email"
												class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												value="New York"
											/>
										</div>
									</div>
									<div class="w-full lg:w-4/12 px-4">
										<div class="relative w-full mb-3">
											<label
												class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlfor="grid-password"
											>
												Country
											</label>
											<input
												type="text"
												class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												value="United States"
											/>
										</div>
									</div>
									<div class="w-full lg:w-4/12 px-4">
										<div class="relative w-full mb-3">
											<label
												class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlfor="grid-password"
											>
												Postal Code
											</label>
											<input
												type="text"
												class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												value="Postal Code"
											/>
										</div>
									</div>
								</div>

								<hr class="mt-6 border-b-1 border-blueGray-300" />

								<h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
									About Me
								</h6>
								<div class="flex flex-wrap">
									<div class="w-full lg:w-12/12 px-4">
										<div class="relative w-full mb-3">
											<label
												class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlfor="grid-password"
											>
												About me
											</label>
											<textarea
												type="text"
												class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												rows="4"
											></textarea>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Modal>
			</div>
			{modalIsOpen && (
				<div className="w-screen h-screen bg-black absolute top-0 opacity-30"></div>
			)}
		</div>
	);
}

export default EditTicketModal;
