import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { Provider } from "react-redux";
import { persistor } from "./store/store";
import {store} from "./store/store";
import "./styles/index.css";
import "./styles/tailwind.css";
import "./styles/titlebar.css";
import { PersistGate } from "redux-persist/integration/react";


const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
);
