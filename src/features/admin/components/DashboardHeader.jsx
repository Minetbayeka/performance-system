import React from 'react'
import { Bell } from 'lucide-react';
import image1 from '../../../assets/images/girl.jpeg'

const DashboardHeader = () => {
  return (
    <div className='flex justify-between items-center '>
    <div>
      <h1>Dashboard</h1>
      </div>
      <div className='flex px-96  border'>
      <Bell/>
      <img src={image1} alt='profile' className='h-10 w-10 rounded-full' />
       </div>
    </div>
  )
}

export default DashboardHeader
