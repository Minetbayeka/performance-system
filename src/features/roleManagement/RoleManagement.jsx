import React from 'react'
import RoleDetails from './components/RoleDetails'
import Sidebar from '../components/Sidebar'


const RoleManagement = () => {
  return (
   <div className='flex bg-gray-50'>
    <Sidebar/>
    <div className='ml-96'>
    <RoleDetails/>
    </div>
   </div>
  )
}

export default RoleManagement
