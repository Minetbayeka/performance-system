import React from 'react'

import Dashboard from './components/Dashboard'
import DashboardHeader from './components/DashboardHeader'
import Charts from '../../components/atoms/Charts'
import Sidebar from '../components/Sidebar'

const AdminDashboard = () => {
  return (
    <div className='max-w-7xl mx-auto '>
      <div className='flex gap-5 pt-11'>
        <div className=''>
      <Sidebar/>
      </div>
      <div className=''>
      <DashboardHeader/>
      <div>
        <Dashboard/>
      </div>
      
      </div>
       </div>
    </div>
  )
}

export default AdminDashboard
