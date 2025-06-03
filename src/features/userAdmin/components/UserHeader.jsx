
import { Bell } from 'lucide-react';
import image1 from '../../../assets/images/girl.jpeg'
import {users} from '../../data'

const UserHeader = () => {
  return (
<div className='fixed top-0 left-64 right-0 z-10 flex justify-between items-center px-6 py-4 bg-white shadow-md h-20'>

  <div><h1 className='font-semibold text-xl'>User Management</h1></div>
  <div className='flex items-center gap-2'>
    <button>
     <Bell className='relative' />
     <span className='absolute top-11 text-lg bg-[#E4E7EC]  text-center
     w-6 h-6 rounded-full text-primary'>{users.length}</span>
    </button>
    
    <img src={image1}  alt='profile' className='h-10 w-10 rounded-full'/>
  </div>

 </div>  )
}

export default UserHeader
