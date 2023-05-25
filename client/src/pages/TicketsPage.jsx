import React from 'react'
import SideBar from '../components/Sidebar'
import Content from '../components/Tickets/Content'
import SearchBar from '../components/Tickets/SearchBar'
import Header from '../components/Tickets/Header'

function TicketsPage() {
  return (
    <div>
      <SideBar/>
      <Header/>
      <Content/>
    </div>
  )
}

export default TicketsPage
