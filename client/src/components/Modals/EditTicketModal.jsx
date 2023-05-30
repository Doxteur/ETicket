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

	return (
		<div>
			{ticket && (
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
			)}
		</div>
	);
}

export default EditTicketModal;

