import React from 'react'
import { Button } from './DashboardButton'
import { Users, User, Pi, CircleCheck } from "lucide-react"; 
import Charts from '../../../components/atoms/Charts';
import DepartmentCharts from './DepartmentCharts';
import TrendChart from './TrendChart';
import WeeklyChart from './WeeklyChart';
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <main className='ml-52 pt-24 px-6 '>
      <div className='flex space-x-4 flex-wrap ml-80'>
        <Link to="/addintern">
          <Button 
            icon={<Users size={16} />} 
            title="Add Interns " 
            lg
          />
        </Link>
        <Button 
          icon={<User size={16} />} 
          title="Add Users " 
          lg
        />
        <Button 
          icon={<Pi size={16} />} 
          title="Run Calculation " 
          lg
        />
        <Button 
          icon={<Pi size={16} />} 
          title="Export Data " 
          lg
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
        {/* Total intern */}
        <div className='bg-white border rounded-lg p-4 shadow-sm'>
          <h1 className='font-semibold'>Total intern</h1>
          <p className='font-bold text-2xl'>100</p>
          <p className='text-gray-400 text-sm'>Count of all interns in the system</p>
        </div>
        {/* Pending Reviews */}
        <div className='bg-white border rounded-lg p-4 shadow-sm'>
          <h1 className='font-semibold'>Pending Reviews</h1>
          <p className='font-bold text-2xl'>20</p>
          <p className='text-gray-400 text-sm'>Number of data submission awaiting review</p>
        </div>
        {/* Active Users */}
        <div className='bg-white border rounded-lg p-4 shadow-sm'>
          <h1 className='font-semibold'>Active Users</h1>
          <p className='font-bold text-2xl'>5</p>
          <p className='text-gray-400 text-sm'>Current active users</p>
        </div>
        {/* Performance alerts */}
        <div className='bg-white border rounded-lg p-4 shadow-sm'>
          <h1 className='font-semibold'>Performance alerts</h1>
          <p className='font-bold text-2xl'>20</p>
          <p className='text-gray-400 text-sm'>Count of interns with performance below threshold</p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
        <div className='bg-white border rounded-lg p-4 shadow-sm'>
          <h1 className='font-semibold mb-2'>Recent Submisssion</h1>
          <div className='flex text-xs gap-4'>
            <div className='space-y-2'>
              <p>Olivia Ryne</p>
              <p>Phoenix Baker</p>
              <p>Lana Steiner</p>
              <p>Demi Wikinson</p>
              <p>Candice wu</p>
            </div>
            <div className='space-y-2'>
              {Array(5).fill(<div className='flex items-center gap-1'><CircleCheck className='text-green-400' size={16}/> Data submitted</div>)}
            </div>
          </div>
        </div>

        <div className='bg-white border rounded-lg p-4 shadow-sm '>
          <h1 className='font-semibold mb-2'>Recent evaluation</h1>
          <div className='flex gap-4 text-xs'>
            <div className='space-y-2'>
              <p>Olivia Ryne</p>
              <p>Phoenix Baker</p>
              <p>lana Steriner</p>
            </div>
            <div className='space-y-2'>
              <p>Completed</p>
              <p>Uncompleted</p>
              <p>Uncompleted</p>
            </div>
          </div>
        </div>

        <div className='bg-white border rounded-lg p-4 shadow-sm'>
          <h1 className='font-semibold mb-2'>User action</h1>
          <div className='flex gap-4 text-xs'>
            <div className='space-y-2'>
              <p>Rodolfo</p>
              <p>Elena</p>
              <p>Rufus</p>
              <p>Johnnie</p>
            </div>
            <div className='space-y-2'>
              <p>Creating intern</p>
              <p>Creating user</p>
              <p>Intern info</p>
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

        <div className='bg-white border rounded-lg p-4 shadow-sm'>
          <h1 className='font-semibold mb-2'>System Updates</h1>
          <p className='text-xs'>v1.1 System update available</p>
          <div className='pt-4'>
            <Button title="Update System" />
          </div>
        </div>
      </div>

      <div className='bg-white border rounded-lg mt-6 p-4 shadow-sm'>
        <h1 className='font-semibold mb-2'>Performance Distribution</h1>
        <Charts />
      </div>

      <div className='bg-white border rounded-lg mt-6 p-4 shadow-sm'>
        <h1 className='font-semibold'>Department Comparism</h1>
        <p className='text-gray-400 text-sm mb-4'>Averages performance score across different department</p>
        <DepartmentCharts />
      </div>

      <div className='bg-white border rounded-lg mt-6 p-4 shadow-sm'>
        <TrendChart />
      </div>

      <div className='bg-white border rounded-lg mt-6 p-4 shadow-sm'>
        <WeeklyChart />
      </div>
    </main>
  )
}

export default Dashboard


{/* <div class="p-6 bg-gray-100 min-h-screen">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    <!-- Total Interns -->
    <div class="bg-white p-4 rounded-lg shadow">
      <h3 class="text-sm font-semibold text-gray-500">Total interns</h3>
      <p class="text-3xl font-bold mt-2">100</p>
      <p class="text-sm text-gray-400">Count of all interns in the system</p>
    </div>

    <!-- Pending Reviews -->
    <div class="bg-white p-4 rounded-lg shadow">
      <h3 class="text-sm font-semibold text-gray-500">Pending reviews</h3>
      <p class="text-3xl font-bold mt-2">20</p>
      <p class="text-sm text-gray-400">Number of data submission awaiting review</p>
    </div>

    <!-- Active Users -->
    <div class="bg-white p-4 rounded-lg shadow">
      <h3 class="text-sm font-semibold text-gray-500">Active users</h3>
      <p class="text-3xl font-bold mt-2">5</p>
      <p class="text-sm text-gray-400">Current active users</p>
    </div>

    <!-- Performance Alerts -->
    <div class="bg-white p-4 rounded-lg shadow">
      <h3 class="text-sm font-semibold text-gray-500">Performance alerts</h3>
      <p class="text-3xl font-bold mt-2">20</p>
      <p class="text-sm text-gray-400">Count of interns with performance below threshold</p>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
    <!-- Recent submission -->
    <div class="bg-white p-4 rounded-lg shadow">
      <h3 class="text-sm font-semibold text-gray-500 mb-2">Recent submission</h3>
      <ul class="text-sm space-y-1">
        <li>Olivia Ryhe <span class="text-green-500">✔️ Data Submitted</span></li>
        <li>Phoenix Baker <span class="text-green-500">✔️ Data Submitted</span></li>
        <li>Lana Steiner <span class="text-green-500">✔️ Data Submitted</span></li>
        <li>Demi Wilkinson <span class="text-green-500">✔️ Data Submitted</span></li>
        <li>Candice Wu <span class="text-green-500">✔️ Data Submitted</span></li>
      </ul>
    </div>

    <!-- Recent evaluation -->
    <div class="bg-white p-4 rounded-lg shadow">
      <h3 class="text-sm font-semibold text-gray-500 mb-2">Recent evaluation</h3>
      <ul class="text-sm space-y-1">
        <li>Olivia Ryhe <span class="text-gray-500">Completed</span></li>
        <li>Phoenix Baker <span class="text-gray-500">Uncompleted</span></li>
        <li>Lana Steiner <span class="text-gray-500">Uncompleted</span></li>
      </ul>
    </div>

    <!-- User actions -->
    <div class="bg-white p-4 rounded-lg shadow">
      <h3 class="text-sm font-semibold text-gray-500 mb-2">User actions</h3>
      <ul class="text-sm space-y-1">
        <li class="flex justify-between">
          <span>Rodolfo Hand</span><span>Creating intern</span><span>8:00 - 13:00</span>
        </li>
        <li class="flex justify-between">
          <span>Elena Herzog</span><span>Creating user</span><span>9:30 - 13:00</span>
        </li>
        <li class="flex justify-between">
          <span>Rufus Langosh</span><span>Editing intern infor</span><span>9:30 - 13:00</span>
        </li>
        <li class="flex justify-between">
          <span>Della Stoltenberg</span><span>Editing intern infor</span><span>9:30 - 13:00</span>
        </li>
        <li class="flex justify-between">
          <span>Johnnie Gutkowski</span><span>View submitted data</span><span>9:30 - 13:00</span>
        </li>
      </ul>
    </div>
  </div>

  <!-- System update -->
  <div class="mt-6 bg-white p-4 rounded-lg shadow max-w-sm">
    <h3 class="text-sm font-semibold text-gray-500 mb-2">System updates</h3>
    <p class="text-sm text-gray-600">v1.1 system update available</p>
    <button class="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md">Update System</button>
  </div>
</div> */}










// import React from 'react';
// import { Button } from './DashboardButton';
// import { Users, User, Pi, CircleCheck } from "lucide-react"; 
// import Charts from '../../../components/atoms/Charts';
// import DepartmentCharts from './DepartmentCharts';
// import TrendChart from './TrendChart';
// import WeeklyChart from './WeeklyChart';

// const Dashboard = () => {
//   return (
//     <section className="poppins p-4">
//       {/* Buttons Section */}
//       <div className="flex flex-wrap gap-4 md:gap-6 md:ml-64 pt-5">
//         <Button icon={<Users size={16} />} title="Add Interns" lg />
//         <Button icon={<User size={16} />} title="Add Users" lg />
//         <Button icon={<Pi size={16} />} title="Run Calculation" lg />
//         <Button icon={<Pi size={16} />} title="Export Data" lg />
//       </div>

//       {/* Summary Cards */}
//       <div className="flex flex-wrap gap-4 pt-4">
//         {[
//           { title: 'Total intern', value: 100, desc: 'Count of all interns in the system' },
//           { title: 'Pending Reviews', value: 20, desc: 'Number of data submission awaiting review' },
//           { title: 'Active Users', value: 5, desc: 'Current active users' },
//           { title: 'Performance alerts', value: 20, desc: 'Count of interns with performance below threshold' },
//         ].map((card, index) => (
//           <div key={index} className="border rounded-lg border-[#E4E7EC] w-full sm:w-[210px] h-[125px] p-4 flex flex-col justify-between">
//             <h1 className="font-semibold">{card.title}</h1>
//             <p className="font-bold text-2xl">{card.value}</p>
//             <p className="text-[#6B7280] text-xs">{card.desc}</p>
//           </div>
//         ))}
//       </div>

//       {/* Recent Activities */}
//       <div className="flex flex-wrap gap-4 pt-5">
//         {/* Recent Submissions */}
//         <div className="border border-[#E4E7EC] rounded-lg w-full sm:w-[210px] p-2">
//           <h1 className="font-semibold pt-1 pb-1">Recent Submisssion</h1>
//           <div className="flex gap-2">
//             <div className="text-xs space-y-2">
//               <p>Olivia Ryne</p>
//               <p>Phoenix Baker</p>
//               <p>Lana Steiner</p>
//               <p>Demi Wikinson</p>
//               <p>Candice Wu</p>
//             </div>
//             <div className="text-xs space-y-2">
//               {[...Array(5)].map((_, idx) => (
//                 <div key={idx} className="flex gap-1">
//                   <CircleCheck className="text-green-400" size={16} /> Data submitted
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Recent Evaluation */}
//         <div className="border border-[#E4E7EC] rounded-lg w-full sm:w-[210px] p-2">
//           <h1 className="font-semibold pt-1 pb-1">Recent Evaluation</h1>
//           <div className="flex gap-4 text-xs">
//             <div className="space-y-2">
//               <p>Olivia Ryne</p>
//               <p>Phoenix Baker</p>
//               <p>Lana Steiner</p>
//             </div>
//             <div className="space-y-2">
//               <p>Completed</p>
//               <p>Uncompleted</p>
//               <p>Uncompleted</p>
//             </div>
//           </div>
//         </div>

//         {/* User Action */}
//         <div className="border border-[#E4E7EC] rounded-lg w-full sm:w-[210px] p-2">
//           <h1 className="font-semibold pt-1 pb-1">User Action</h1>
//           <div className="flex gap-4 text-xs">
//             <div className="space-y-2">
//               <p>Rodolfo</p>
//               <p>Elena</p>
//               <p>Rufus</p>
//               <p>Johnnie</p>
//             </div>
//             <div className="space-y-2">
//               <p>Creating intern</p>
//               <p>Creating user</p>
//               <p>Intern info</p>
//               <p>View submitted</p>
//             </div>
//             <div className="space-y-2">
//               <p>8-14</p>
//               <p>8-14</p>
//               <p>8-14</p>
//               <p>8-14</p>
//             </div>
//           </div>
//         </div>

//         {/* System Updates */}
//         <div className="border border-[#E4E7EC] rounded-lg w-full sm:w-[210px] p-2">
//           <h1 className="font-semibold pt-1 pb-1">System Updates</h1>
//           <p className="text-xs">v1.1 System update available</p>
//           <div className="pt-5">
//             <Button title="Update System" />
//           </div>
//         </div>
//       </div>

//       {/* Charts */}
//       <div className="border border-[#E4E7EC] mt-5 h-[400px] w-full overflow-x-auto">
//         <h1 className="font-semibold mx-6 pt-6">Performance Distribution</h1>
//         <Charts />
//       </div>

//       <div className="border border-[#E4E7EC] mt-5 h-[400px] w-full overflow-x-auto space-y-2">
//         <h1 className="font-semibold mx-6 pt-6">Department Comparism</h1>
//         <p className="text-[#6B7280] mx-6 text-sm">Averages performance score across different department</p>
//         <DepartmentCharts />
//       </div>

//       <div className="border border-[#E4E7EC] mt-5 h-[400px] w-full overflow-x-auto">
//         <TrendChart />
//       </div>

//       <div className="border border-[#E4E7EC] mt-5 h-[500px] w-full overflow-x-auto">
//         <WeeklyChart />
//       </div>
//     </section>
//   );
// };

// export default Dashboard;





