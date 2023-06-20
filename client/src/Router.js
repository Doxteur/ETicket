// router react
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import TicketsPage from "./pages/TicketsPage";
import AuthGuard from "./pages/Auth/AuthGuard";
import React,{useEffect} from "react";

export default function Router() {
  

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<LoginPage />} path="/" />
				<Route element={<LoginPage />} path="/login" />

				<Route element={<AuthGuard />}>
					<Route element={<DashboardPage />} path="/dashboard" />
					<Route element={<TicketsPage />} path="/tickets" />
				</Route>

			</Routes>
		</BrowserRouter>
	);
}
