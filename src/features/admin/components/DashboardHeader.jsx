
import image1 from '../../../assets/images/girl.jpeg'
import { Bell } from "lucide-react"

const DashboardHeader = () => {
  return (
    <div className='fixed top-0 left-64 right-0 z-10 flex justify-between items-center px-6 py-4 bg-white shadow-md h-20'>
      <h1 className='font-semibold text-xl'>Dashboard</h1>
      <div className='flex items-center gap-4'>
        <button><Bell /></button>
        <img src={image1} alt='profile' className='h-10 w-10 rounded-full' />
      </div>
    </div>
  )
}

export default  DashboardHeader 



// import React from 'react'
// import { Bell, Link } from 'lucide-react';
// import image1 from '../../../assets/images/girl.jpeg'

// import { Bell } from "lucide-react"


// const DashboardHeader = () => {
//   return (
//  <div className='flex justify-between space-x-96 p-6 bg-white shadow-md'>

//   <div><h1 className='font-semibold text-xl'>Dashboard</h1></div>
//   <div className='flex items-center gap-2'>
//     <button><Bell />
//     </button>
//     <img src={image1}  alt='profile' className='h-10 w-10 rounded-full'/>
   
//   </div>

//  </div>
//   )
// }

// export default DashboardHeader