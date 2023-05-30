import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./Auth/authSlice";
import { ticketsSlice } from "./Tickets/ticketSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import thunk from "redux-thunk";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";


const persistConfig = {
	key: "auth",
	storage,
	whitelist: ["auth"],
};

const rootReducer = persistCombineReducers(persistConfig, {
	auth: authSlice.reducer,
	tickets: ticketsSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk, logger],

});

export const persistor = persistStore(store);
