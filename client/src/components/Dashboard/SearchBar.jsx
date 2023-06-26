import React,{useState} from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoFilterSharp } from "react-icons/io5";

function SearchBar() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className=" bg-white h-12 border-b flex items-center">
      <div className="flex justify-between w-full">
        <div className="flex items-center mx-6">
          <AiOutlineSearch className="text-gray-500 mx-2 " size="1.2em" />
          <input className="font-semibold text-gray-500 focus:outline-none focus:border-none" placeholder="Search"/>
        </div>
        <div className="mx-10 flex">
          <div className="relative inline-block text-left">
            <h1 className="mx-6 bg-gray-200 bg-opacity-70 px-4 rounded-lg font-semibold text-sm cursor-pointer select-none"
            onClick={() => setShowMenu(!showMenu)}

            >
              Aujourd'hui
            </h1>
            <div
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
              style={{ display: showMenu ? "block" : "none" }}
            >
              <div className="py-1" role="none">
                <a
                  href="/"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                  style={{ backgroundColor: "#F3F4F6" }}
                >
                  Aujourd'hui
                </a>
                <a
                  href="/"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                >
                  Semaine
                </a>
                <a
                  href="/"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  Mois
                </a>
                <form method="POST" action="#" role="none">
                  <button
                    type="submit"
                    className="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-3"
                  >
                    Année
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="flex align-middle ">
            <IoFilterSharp
              className="text-black mx-2  font-bold  mt-0.5"
              size="1.2em"
            />
            <h1>Filter</h1>
            {/* Descending arrow */}
            <svg
              className="w-5 h-5 text-gray-500 mx-1 mt-0.5 "
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                // eslint-disable-next-line max-len
                d="M10.7071 13.7071C10.3166 14.0976 9.68342 14.0976 9.29289 13.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L10 11.5858L12.2929 9.29289C12.6834 8.90237 13.3166 8.90237 13.7071 9.29289C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071L10.7071 13.7071Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
