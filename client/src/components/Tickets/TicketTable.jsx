import React from 'react'

function TicketTable() {
  return (
    <div>
        {/* {ticket && (
				<EditTicketModal
					ticket={ticket}
					modalIsOpen={modalIsOpen}
					setIsOpen={setIsOpen}
				/>
			)} */}
			
      	<div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8 mt-10">
				<div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
					<table className="min-w-full">
						{/* Table Header */}
						
						{/* Ticket Listing */}
						<tbody className="bg-white">
							{tickets.tickets &&
								tickets.tickets.map((ticket) => (
									<tr key={ticket.id}>
										<td className="px-6  whitespace-no-wrap border-b border-gray-500">
											<div className="flex items-center">
												<div>
													<div className="text-sm leading-5 text-gray-800">
														{ticket.id}
													</div>
												</div>
											</div>
										</td>
										<td className="px-6  whitespace-no-wrap border-b border-gray-500">
											<div className="text-sm leading-5 text-blue-900">
												{ticket.title}
											</div>
										</td>
										<td className="px-6  whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
											{ticket.affectedUser.name}
										</td>
										<td className="px-6  whitespace-no-wrap border-b text-blue-900  border-gray-500 text-sm leading-5">
											<span className="bg-slate-500 rounded p-1 text-white">
												{ticket.status.name}
											</span>
										</td>
										<td className="px-6  whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
											{/* Switch priority */}
											{ticket.priority === 1 ? (
												<span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
													<span
														aria-hidden
														className="absolute inset-0 bg-green-400 opacity-50 rounded-full"
													></span>
													<span className="relative">
														LOW
													</span>
												</span>
											) : ticket.priority === 2 ? (
												<span className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
													<span
														aria-hidden
														className="absolute inset-0 bg-yellow-400 opacity-50 rounded-full"
													></span>
													<span className="relative">
														MEDIUM
													</span>
												</span>
											) : (
												<span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
													<span
														aria-hidden
														className="absolute inset-0 bg-red-400 opacity-50 rounded-full"
													></span>
													<span className="relative">
														HIGH
													</span>
												</span>
											)}
										</td>
										<td className="px-6  whitespace-no-wrap border-b border-gray-500  text-xs text-center ">
											<div
												className="w-20 rounded-lg py-1"
												style={getColor(
													ticket.typeNote.name,
												)}
											>
												<div className="flex items-center justify-center">
													{ticket.typeNote.name ===
													"BUG" ? (
														<AiFillBug />
													) : ticket.typeNote.name ===
													  "FEATURE" ? (
														<BsFillGearFill />
													) : (
														<HiDotsHorizontal />
													)}

													<span className="px-1 font-bold ">
														{ticket.typeNote.name}
													</span>
												</div>
											</div>
										</td>
										<td className="px-6  whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
											<button
												className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
												onClick={() => {
													setTicket(ticket);
													setIsOpen(true);
												}}
											>
												Editer
											</button>
										</td>
									</tr>
								))}
						</tbody>
					</table>
					{/* Bottom Pagination */}
					<div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
						<div>
							<p className="text-sm leading-5 text-blue-700">
								30 Tickets · Page 1 sur 3
							</p>
						</div>
						<div>
							<nav className="relative z-0 inline-flex shadow-sm">
								<div>
									<a
										href="/"
										className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
										aria-label="Previous"
									>
										<svg
											className="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
								</div>
								<div>
									<a
										href="/"
										className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
									>
										1
									</a>
									<a
										href="/"
										className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
									>
										2
									</a>
									<a
										href="/"
										className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
									>
										3
									</a>
								</div>
								<div v-if="pagination.current_page < pagination.last_page">
									<a
										href="/"
										className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
										aria-label="Next"
									>
										<svg
											className="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}

export default TicketTable
