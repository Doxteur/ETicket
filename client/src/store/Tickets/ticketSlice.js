import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { REACT_APP_API_URL } from "../../config";

export const getTickets = createAsyncThunk("tickets/getTickets", async (data, thunkAPI) => {
  console.log("Get Tickets",data)
  try {
    const response = await fetch(
      `${REACT_APP_API_URL}/tickets`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + data
        },
      }
    );

    const responseData = await response.json();
    console.log(responseData)
    if (!response.ok) {
      return thunkAPI.rejectWithValue(responseData);
    }

    return responseData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState: {
    tickets: [],
    isLoading: false,
    error: null,
  },
  reducers: {
 
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
  },
});


export default ticketsSlice.reducer;