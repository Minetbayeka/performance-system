import React from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import DashboardHeader from './components/DashboardHeader'

const AdminDashboard = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <div className='flex gap-5 pt-11'>
      <Sidebar/>

      <div>
      <DashboardHeader/>
      <Dashboard/>
      </div>
       </div>
    </div>
  )
}

export default AdminDashboard
