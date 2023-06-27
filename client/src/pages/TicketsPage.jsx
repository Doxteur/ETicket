import SideBar from "../components/Sidebar";
import Content from "../components/Tickets/Content";
import Header from "../components/Tickets/Header";
import React, { useState } from "react";


function TicketsPage() {
	const [modalIsOpenAdd, setIsOpenAdd] = useState(false);

	return (
		<div>
			<SideBar />
			<Header setIsOpenAdd={setIsOpenAdd}/>
			<Content modalIsOpenAdd={modalIsOpenAdd} setIsOpenAdd={setIsOpenAdd} />
		</div>
	);
}

export default TicketsPage;
