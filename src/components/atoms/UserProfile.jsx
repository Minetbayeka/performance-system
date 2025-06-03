import React from 'react'
import Sidebar from '../../features/admin/components/Sidebar'
import { Button } from '../../features/admin/components/DashboardButton'
import { User, Users, Pi} from 'lucide-react'
import image from '../../assets/images/girl.jpeg'
import PerformanceGauge from './PerformanceGuage'
import { Link } from 'react-router-dom'

const UserProfile = () => {
  return (
    <div className='max-w-6xl mx-auto'>
       <div className='flex'>
      <Sidebar/>
      <div className='mt-8'>
        <button>&larr; Intern Profile</button>
          <div className='flex space-x-10 ml-64 pt-5'>
        <Link to="/addintern">
        <Button 
        icon={<Users size={16} />}
        title ="Add Interns " lg
        />
        </Link>
        <Button 
        icon={<User size={16} />}
        title ="Add Users " lg
        />

         <Button 
        icon={<Pi size={16} />}
        title ="Run Calculation " lg
        />

         <Button 
        icon={<Pi size={16} />}
        title ="Export Data " lg
        />

      </div>

      <div className='border p-3 mt-4'>
          <h1 className='pb-3 text-2xl font-semibold'>Personal Information</h1>
          <div className='flex justify-between '>
            <div className='flex gap-2'>
                <img src={image} alt='' className='w-24 h-24 rounded-full' />
                <div>
                    <p>First Name:<span className='font-semibold'>Olivia</span></p>
                    <p>Middle Name:<span className='font-semibold'>Ryne</span></p>
                    <p>Last Name:<span className='font-semibold'>Lynn</span></p>
                    <p>Email:<span className='font-semibold'>Olivia</span></p>
                    <p>Department:<span className='font-semibold'>Product Designer</span></p>
                    <p>Internship duration:<span className='font-semibold'>3 months</span></p>

                </div>
            </div>
            <div>
               <PerformanceGauge/> 
            </div>

          </div>
      </div>
      {/* weekly Data */}
      <div className='border mt-3 p-4'>
        <h1>Weekly Data</h1>

      </div>
      {/*  performance History */}
      <div className='border mt-3 p-4'>
        <p>Performance History</p>

      </div>
      {/*  Evalution History */}
        <div className='border mt-3 p-4'>
        <p>Evalution History</p>

      </div>
      </div>
    </div>

      
    </div>
  )
}

export default UserProfile
