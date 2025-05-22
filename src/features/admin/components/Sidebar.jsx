import React from 'react'
import image from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { Power } from 'lucide-react';

const Sidebar = () => {
  return (
    <div>
      <nav>
        <img src={image}  alt="logo" className='h-28 w-24'/>

        <ul className='mt-10 space-y-4  font-semibold'>
            <li><Link>Dashboard</Link></li>
            <li> <Link>Intern Management</Link></li>
            <li><Link>User Management</Link></li>
            <li> <Link>Performance Analysis</Link></li>
            <li><Link>Data Verification</Link></li>
            <li className='pb-40'><Link>Reports and Analytics</Link></li>

            <li><Link>Setting</Link></li>
            <li><Link>Help & Support</Link></li>
            <Link className='flex text-secondary gap-3 font-semibold'><Power/>
            <li className=' font-semibold'>Log Out</li></Link>

             <li className='pt-12'>Current System</li>
              <li>Skye8 Company Ltd CopyRight</li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
