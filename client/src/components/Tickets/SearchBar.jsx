import React,{useState} from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoFilterSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

function SearchBar({setIsOpenAdd}) {
	const tickets = useSelector((state) => state.tickets);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className=" bg-white h-12 border-b flex items-center">
      <div className="flex justify-between w-full">
        <div className="flex items-center mx-6">
          <AiOutlineSearch className="text-gray-500 mx-2 " size="1.2em" />
          <input className="font-semibold text-gray-500 focus:outline-none focus:border-none" placeholder="Search"/>
        </div>
        <div className="mx-10 flex">
          <button className="btn bg-green-500 text-white font-semibold px-4 py-1 rounded-md"
          onClick={()=>setIsOpenAdd(true)}
          >Add Ticket</button>
                 
        </div>
        
      </div>
      
    </div>
  );
}

export default SearchBar;
