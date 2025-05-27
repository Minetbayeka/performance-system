import { Pen, Search , Trash2, Users} from 'lucide-react'
import React from 'react'
import { Button } from '../../admin/components/DashboardButton'
// import image1 from '../../../assets/images/girl.jpeg'
import Pagination from '../../../components/atoms/Pagination'
// import PerformanceButton from '../../../components/atoms/PerformanceButton'
import { interns } from "../../data";
import { Buttons } from './InternsButton'


const Dashboard = () => {
  return (
    <section className='pt-4'>
      <div className='flex gap-80'>
    <div class="border  rounded px-2 py-1 flex items-center w-80 bg-gray-50">
  <Search/>
  <input 
    type="text" 
    placeholder="Search" 
    class="bg-gray-50 outline-none w-full text-[#E4E7EC] placeholder-[#E4E7EC] mx-5"
  />
</div>

<div>
    <Button 
        icon={<Users size={16} />}
        title ="Add Interns " lg
        />
</div>

      </div>
      <div className='flex gap-2 pt-4 pb-3'>
        <h1>Interns</h1>
        <button className='bg-[#E4E7EC] rounded-full px-2 text-primary'>100</button>
      </div>
      <div>
   <div class="overflow-x-auto">
  <table class="min-w-full bg-white border border-gray-200 text-sm text-left">
    <thead class="bg-gray-100 text-gray-700 uppercase">
      <tr>
        <th class="px-6 py-3">Name</th>
        <th class="px-6 py-3">Performance</th>
        <th class="px-6 py-3">Department</th>
        <th class="px-6 py-3">Supervisor</th>
        <th class="px-6 py-3">Internship duration</th>
        <th class="px-6 py-3">Actions</th>
      </tr>
    </thead>
    <tbody>
       {/* Row 1  */}
       {interns.map((intern, index)=>(

       
      <tr className="border-t" key={index}>
        <td className="flex items-center px-6 py-4 space-x-3 whitespace-nowrap">
           <img src={intern.imgUrl}  alt='profile'  className='h-10 w-10 rounded-full'/>
          <span>{intern.name}</span>
        </td>

        <td class="px-6 py-4">
          <span class="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">{intern.performance}</span>
        </td>
        <td className="px-6 py-4"> {intern.departments}</td>
        <td className="px-6 py-4">{intern.supervisor}</td>
        <td className="px-6 py-4">{intern.internshipdur}</td>
        <td className="px-6 py-4 flex space-x-3 items-center">
          <button className="text-gray-500 hover:text-red-600"><Trash2/></button>
          <button className="text-gray-500 hover:text-blue-600"><Pen/></button>
          <a href="#" className="text-blue-600 hover:underline">{intern.profile}</a>
        </td>
      </tr>

     
    ))}
    </tbody>
  </table>

   {/* Pagination  */}
  <Pagination/>
</div>



      </div>
    </section>
  )
}

export default Dashboard
 {/* <Trash2 /> */}
          {/* <Pen /> */}