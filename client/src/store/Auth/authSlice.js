import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { REACT_APP_API_URL } from "../../config";
// createasyncThunk

// asyncthunk login
export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  // log env
  try {
    const response = await fetch(
      `${REACT_APP_API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();
    if (!response.ok) {
      return thunkAPI.rejectWithValue(responseData);
    }

    return responseData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg1MDg5MDE1LCJleHAiOjE2ODUxNzU0MTV9.fS8azdFYXTLaW0nMhohL9sBCa_nt-1rpCQ4BC3nXppk',
    isAuthenticated: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state, action) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = action.payload.error || action.payload.message;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
