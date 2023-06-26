import React, { useEffect, useState } from "react";

function Pagination({ range, setPage, page, slice }) {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex">
        {range.map((el, index) => (
          <li>
            <button
              className={`h-10 px-5 text-black transition-colors duration-150 focus:shadow-outline ${
                
                el === page ? "bg-blue-600 text-white" : "bg-white"
              }`}
              onClick={() => setPage(el)}
            >
              {el}
            </button>
          </li>
        ))}

        {/* <li><button className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-l-lg focus:shadow-outline hover:bg-indigo-100">Prev</button></li>
      <li><button className="h-10 px-5 text-white transition-colors duration-150 bg-blue-600 focus:shadow-outline">1</button></li>
      <li><button className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white focus:shadow-outline hover:bg-indigo-100">2</button></li>
      <li><button className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white focus:shadow-outline hover:bg-indigo-100">3</button></li>
      <li><button className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100">Next</button></li> */}
      </ul>
    </nav>
  )
}

export default Pagination
