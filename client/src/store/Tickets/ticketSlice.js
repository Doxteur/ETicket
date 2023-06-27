import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { REACT_APP_API_URL } from "../../config";
import { toast } from "react-toastify";

export const getTickets = createAsyncThunk(
	"tickets/getTickets",
	async (data, thunkAPI) => {
		try {
			const response = await fetch(`${REACT_APP_API_URL}/tickets`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + data,
				},
			});

			const responseData = await response.json();
			if (!response.ok) {
				return thunkAPI.rejectWithValue(responseData);
			}

			return responseData;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

export const setTicket = createAsyncThunk(
	"tickets/setTicket",
	async (data, thunkAPI) => {
		const ticketToCreate = {
			title: data?.title,
			content: data?.content || "",
			typeNoteId: data?.typeNoteId,
			priority: data?.priority,
			statusId: data?.statusId,
			dateLimit: data?.dateLimit,
			affectedUserId: data?.affectedUserId,
		};
		try {
			const response = await fetch(`${REACT_APP_API_URL}/tickets`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + data?.token,
				},
				body: JSON.stringify(ticketToCreate),
			});
			const responseData = await response.json();
			if (!response.ok) {
				return thunkAPI.rejectWithValue(responseData);
			}

			return responseData;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

export const updateTicket = createAsyncThunk(
	"tickets/updateTicket",
	async (data, thunkAPI) => {
		try {
			const response = await fetch(`${REACT_APP_API_URL}/tickets`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + data.token,
				},
				body: JSON.stringify(data),
			});
			const responseData = await response.json();
			if (!response.ok) {
				return thunkAPI.rejectWithValue(responseData);
			}

			return responseData;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

export const deleteTicket = createAsyncThunk(
	"tickets/deleteTicket",
	async (data, thunkAPI) => {
		try {
			const response = await fetch(`${REACT_APP_API_URL}/admin/tickets`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + data.token,
				},
				body: JSON.stringify(data.value),
			});
			const responseData = await response.json();
			if (!response.ok) {
				return thunkAPI.rejectWithValue(responseData);
			}

			return responseData;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

export const getAllTickets = createAsyncThunk(
	"tickets/getAllTickets",
	async (data, thunkAPI) => {
		try {
			const response = await fetch(`${REACT_APP_API_URL}/admin/tickets`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + data,
				},
			});
			const responseData = await response.json();
			if (!response.ok) {
				return thunkAPI.rejectWithValue(responseData);
			}

			return responseData;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

export const ticketsSlice = createSlice({
	name: "tickets",
	initialState: {
		tickets: [],
		isLoading: false,
		error: null,
	},
	reducers: {
		changeTicket: (state, action) => {
			const ticket = state.tickets.find(
				(ticket) => ticket.id === action.payload.id,
			);
			// update tickets
			if (ticket) {
				state.tickets = state.tickets.map((ticket) => {
					if (ticket.id === action.payload.id) {
						return action.payload;
					}
					return ticket;
				});
				updateTicket(ticket);
			}
		},
	},
	extraReducers: {
		[getTickets.pending]: (state, action) => {
			state.isLoading = true;
		},
		[getTickets.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.tickets = action.payload;
		},
		[getTickets.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		[setTicket.pending]: (state, action) => {
			state.isLoading = true;
		},
		[setTicket.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.tickets = action.payload;
			toast.success("🦄 Votre ticket a été ajouté !", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		},
		[setTicket.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
			toast.error("❌ Une erreur s'est produit!", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		},
		[updateTicket.pending]: (state, action) => {
			state.isLoading = true;
		},
		[updateTicket.fulfilled]: (state, action) => {
			state.isLoading = false;
			// update only thje ticket that has been updated
			state.tickets = state.tickets.map((ticket) => {
				if (ticket.id === action.payload.id) {
					return action.payload;
				}
				return ticket;
			});
			toast.success("🦄 Votre ticket s'est mis à jour !", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		},
		[updateTicket.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = "Un erreur s'est produit !";
			toast.error("❌ Une erreur s'est produit!", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		},
		[getAllTickets.pending]: (state, action) => {
			state.isLoading = true;
		},
		[getAllTickets.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.tickets = action.payload;
		},
		[getAllTickets.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		[deleteTicket.pending]: (state, action) => {
			state.isLoading = true;
		},
		[deleteTicket.fulfilled]: (state, action) => {
			state.isLoading = false;
			console.log(action.payload);
			state.tickets = state.tickets.filter(
				(ticket) => ticket.id !== action.payload.id,
			);
			toast.success("🦄 Votre ticket a été supprimé !", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		},
		[deleteTicket.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
			toast.error("❌ Une erreur s'est produit!", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		},
	},
});

export const { changeTicket } = ticketsSlice.actions;
export default ticketsSlice.reducer;
