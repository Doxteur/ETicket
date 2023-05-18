import React from "react";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <>
      <div className="w-full bg-white border-b">
        <h1 className="p-6 px-56 font-bold text-2xl">Support</h1>
      </div>
      <SearchBar />
    </>
  );
}

export default Header;
