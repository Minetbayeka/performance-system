import React from 'react'
import image1 from '@assets/images/girl.jpeg'
import { Bell } from "lucide-react"


const DataHeader = () => {
  return (
    <div>
        <div className='sticky  flex justify-between items-center px-6 py-4 h-20'>
      <h1 className='font-semibold text-xl ml-32'>Data Verification</h1>
      <div className='flex items-center gap-4'>
        <button><Bell /></button>
        <img src={image1} alt='profile' className='h-10 w-10 rounded-full' />
      </div>
    </div>
    </div>
  )
}

export default DataHeader
