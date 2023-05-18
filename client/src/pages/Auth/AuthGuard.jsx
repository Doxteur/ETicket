import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet,Navigate } from "react-router-dom"; 

const AuthGuard = () => {

	const auth = useSelector((state) => state.auth);
	const token = JSON.parse(localStorage.getItem("token"));

	// return ( auth.isAuthenticated && token ? <Outlet /> : <Navigate to="/login" /> );
	return (token ? <Outlet /> : <Navigate to="/login" /> );
	
};

export default AuthGuard;