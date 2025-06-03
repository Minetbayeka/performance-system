import React from 'react'
import Sidebar from '../admin/components/Sidebar'
import UserDashboard from './components/UserDashboard'
import UserHeader from './components/UserHeader'

const UserManagement = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <div className='flex gap-4'>
      <Sidebar/>
      <div className='mt-10'>
        <UserHeader/>
        <UserDashboard/>
      </div>
      </div>
    </div>
  )
}

export default UserManagement
