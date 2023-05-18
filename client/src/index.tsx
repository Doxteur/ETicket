import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { Provider } from 'react-redux';
import store from './store/store.js';
import "./styles/index.css";
import "./styles/tailwind.css";
import "./styles/titlebar.css";
const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router />
		</Provider>
	</React.StrictMode>,
);
