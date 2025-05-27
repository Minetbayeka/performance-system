import React from 'react'
import { Button } from './DashboardButton'
import { Users,User, Pi, CircleCheck } from "lucide-react"; 
import Charts from '../../../components/atoms/Charts';
import DepartmentCharts from './DepartmentCharts';
import TrendChart from './TrendChart';
import WeeklyChart from './WeeklyChart';

const Dashboard = () => {
  return (
    <section className='poppins '>
      <div className='flex space-x-10 ml-64 pt-5'>

        <Button 
        icon={<Users size={16} />}
        title ="Add Interns " lg
        />
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

      <div className='flex gap-4 pt-4'>
        <div className='border rounded-lg border-[#E4E7EC] w-[210px] h-[125px] '>
          <div className='ml-5 space-y-2'>
          <h1 className='font-semibold'>Total intern</h1>
          <p className='font-bold text-2xl'>100</p>
          <p className='text-[#E4E7EC] text-sm'>Count of all interns in the system</p>
          </div>
        </div>
         <div className='border rounded-lg border-[#E4E7EC] w-[210px] h-[125px]'>
          <div className='ml-5 space-y-2'>
          <h1 className='font-semibold'>Pending Reviews</h1>
          <p className='font-bold text-2xl'>20</p>
          <p className='text-[#E4E7EC] text-sm'>Number of data submission awaiting review</p>
          </div>
        </div>
         <div className='border rounded-lg border-[#E4E7EC] w-[210px] h-[125px]'>
          <div className='ml-5 space-y-2'>
          <h1 className='font-semibold'>Active Users</h1>
          <p className='font-bold text-2xl'>5</p>
          <p className='text-[#E4E7EC] text-sm'>Current active users</p>
         </div>
        </div>
         <div className='border rounded-lg border-[#E4E7EC] w-[210px] h-[125px]'>
          <div className='ml-5 space-y-2'>
          <h1 className='font-semibold'>Performance alerts</h1>
          <p className='font-bold text-2xl'>20</p>
          <p className='text-[#E4E7EC] text-sm'>Count of  interns with performance below threshold</p>
          </div>
        </div>
      </div>

      <div className='flex  pt-5 gap-4 '>
        <div className='border border-[#E4E7EC] rounded-lg w-[210px] h-[160px]  '>
         <h1 className='pl-2 font-semibold pt-1 pb-1'>Recent Submisssion</h1>
         <div className='flex  gap-2 pl-2'>
          <div className='text-xs space-y-2'>
            <p>Olivia Ryne</p>
            <p>Phoenix Baker</p>
            <p>Lana Steiner</p>
            <p>Demi Wikinson</p>
            <p>Candice wu</p>
          </div>
          <div className='text-xs space-y-2'>
            <div className='flex gap-1'><CircleCheck className='text-green-400' size={16}/> Data submitted</div>
            <div className='flex gap-1'><CircleCheck className='text-green-400' size={16}/> Data submitted</div>
            <div className='flex gap-1'><CircleCheck className='text-green-400' size={16}/> Data submitted</div>
            <div className='flex gap-1'><CircleCheck className='text-green-400' size={16}/> Data submitted</div>
            <div className='flex gap-1'><CircleCheck className='text-green-400' size={16}/> Data submitted</div>
          </div>
         </div>
        </div>

        <div className='border border-[#E4E7EC] rounded-lg w-[210px] h-[160px] space-y-2'>
          <h1 className='pl-2 font-semibold pt-1 pb-1'>Recent evaluation</h1>
          <div className='flex gap-4 text-xs pl-2'>
            <div className='space-y-2'>
              <p>Olivia Ryne</p>
              <p>Phoenix Baker</p>
                <p>lana Steriner</p>
             
              </div>
              <div className='space-y-2'>
               <p>Completed</p>
              <p>Uncompleted</p>
              <p>uncompleted</p>
              </div>
          </div>
        </div>
        <div className='border border-[#E4E7EC] rounded-lg w-[210px] h-[160px] pl-2 '>
          <h1 className='pl-2 font-semibold pt-1 pb-1'>User action</h1>
          <div className='flex gap-4 text-xs '>
            <div className='space-y-2'>
              <p>Rodolfo </p>
              <p>Elena </p>
              <p>Rufus </p>
              <p>Johnnie </p>
            </div>
            <div className='space-y-2'>
              <p>Creating intern</p>
              <p>Creating user</p>
              <p>intern infor</p>
              <p>View submitted</p>
            </div>
            <div className='space-y-2'>
              <p>8-14</p>
              <p>8-14</p>
              <p>8-14</p>
              <p>8-14</p>
            </div>
          </div>
        </div>

        <div className='border border-[#E4E7EC] rounded-lg w-[210px] h-[160px]  space-y-2'>
          <h1 className='pl-2 font-semibold pt-1 pb-1'>System Updates</h1>
          <p className='text-xs pl-2 '>v1.1 System update available</p>
          <div className=' pl-2 pt-5'>
          <Button 
          title ="Update System"
          
          />
          </div>
        </div>
      </div>
     <div className='border border-[#E4E7EC] mt-5 h-[400px]'>
      <h1 className='font-semibold mx-6 pt-6'>Performance Distribution</h1>
     <Charts/>
    
     </div>
     <div className='border border-[#E4E7EC] mt-5 space-y-2 h-[400px]'>
       <h1 className='font-semibold mx-6 pt-6'>Department Comparism</h1>
       <p className='text-[#E4E7EC] mx-6'>Averages performance score across different department</p>
      <DepartmentCharts/>
      </div>
      <div className='border border-[#E4E7EC] mt-5 space-y-2 h-[400px]'>
        <TrendChart/>
      </div>

      <div className='border border-[#E4E7EC] mt-5 space-y-2  h-[500px]'>
        <WeeklyChart/>
      </div>
    </section>
  )
}

export default Dashboard
