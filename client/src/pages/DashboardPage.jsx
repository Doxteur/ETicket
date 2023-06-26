import React from 'react'
import SideBar from '../components/Sidebar'
import Header from '../components/Dashboard/Header'
import Content from '../components/Dashboard/Content'

function DashboardPage() {
  return (
    <div>
      <SideBar />
      <Header />
      <Content />
    </div>
  )
}

export default DashboardPage
