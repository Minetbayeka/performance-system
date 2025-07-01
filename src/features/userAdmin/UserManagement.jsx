import React from 'react'
import UserDashboard from './components/UserDashboard'
import UserHeader from './components/UserHeader'
import Sidebar from '../components/Sidebar'


const UserManagement = () => {
  return (
    <div className=' bg-gray-50'>
        <div className='flex gap-4'>
      <Sidebar/>
      <div className='mt-10 ml-48'>
        <UserHeader/>
        <UserDashboard/>
      </div>
      </div>
    </div>
  )
}

export default UserManagement
