import React from 'react'
import { Bell } from 'lucide-react';
import image1 from '../../../assets/images/girl.jpeg'

const HeaderIntern = () => {
  return (
<div className='flex justify-between space-x-96'>

  <div><h1 className='font-semibold text-xl'>Intern Management</h1></div>
  <div className='flex items-center gap-2'>
    <Bell />
    <img src={image1}  alt='profile' className='h-10 w-10 rounded-full'/>
  </div>

 </div>
  )
}

export default HeaderIntern
