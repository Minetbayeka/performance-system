import React, { useContext } from 'react'
import { Bell } from 'lucide-react';
import image1 from '../../../assets/images/girl.jpeg'
// import {interns} from '../../data'
import { AppContext } from '../../../provider/AppContext';


const HeaderIntern = () => {
  const {interns} = useContext(AppContext)
  return (
<div className='sticky  flex justify-between items-center px-6 py-4 h-20'>

  <div><h1 className='font-semibold text-xl  ml-36'>Intern Management</h1></div>
  <div className='flex items-center gap-2'>
    <button>
     <Bell className='relative' />
     {/* <span className='absolute top-11 text-lg bg-[#E4E7EC]  text-center
     w-6 h-6 rounded-full text-primary'>{interns.length}</span> */}
    </button>
    
    <img src={image1}  alt='profile' className='h-10 w-10 rounded-full'/>
  </div>

 </div>
  )
}

export default HeaderIntern
