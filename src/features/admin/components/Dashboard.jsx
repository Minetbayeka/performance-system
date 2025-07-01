import React from 'react';
import { Link } from 'react-router-dom';
import { Users, User, Pi, CircleCheck } from 'lucide-react';
import { Button } from './DashboardButton';
import Charts from '../../../components/atoms/Charts';
import DepartmentCharts from './DepartmentCharts';
import TrendChart from './TrendChart';
import WeeklyChart from './WeeklyChart';
import interns from '../../data';

const Dashboard = () => {
  const statCards = [
    {
      title: 'Total Interns',
      value: interns.length,
      desc: 'Count of all interns in the system',
    },
    {
      title: 'Pending Reviews',
      value: 20,
      desc: 'Number of data submissions awaiting review',
    },
    {
      title: 'Active Users',
      value: 5,
      desc: 'Current active users',
    },
    {
      title: 'Performance Alerts',
      value: 20,
      desc: 'Interns with performance below threshold',
    },
  ];

  const submissions = ['Olivia Ryne', 'Phoenix Baker', 'Lana Steiner', 'Demi Wilkinson', 'Candice Wu'];

  const evaluations = [
    { name: 'Olivia Ryne', status: 'Completed' },
    { name: 'Phoenix Baker', status: 'Uncompleted' },
    { name: 'Lana Steiner', status: 'Uncompleted' },
  ];

  const userActions = [
    { user: 'Rodolfo', action: 'Created intern', time: '8:00 - 14:00' },
    { user: 'Elena', action: 'Created user', time: '8:00 - 14:00' },
    { user: 'Rufus', action: 'Updated intern info', time: '8:00 - 14:00' },
    { user: 'John', action: 'Viewed submit', time: '8:00 - 14:00' },
  ];

  return (
    <main className="ml-52 pt-24 px-6">

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-end mb-6">
        <Link to="/addintern">
          <Button icon={<Users size={16} />} title="Add Interns" lg />
        </Link>
        <Button icon={<User size={16} />} title="Add Users" lg />
        <Button icon={<Pi size={16} />} title="Run Calculation" lg />
        <Button icon={<Pi size={16} />} title="Export Data" lg />
         <Button icon={<Pi size={16} />} title="Import Data" lg />
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {statCards.map((stat, idx) => (
          <div key={idx} className="bg-white border rounded-lg p-4 shadow-sm">
            <h2 className="font-semibold">{stat.title}</h2>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm text-gray-400">{stat.desc}</p>
          </div>
        ))}
      </div>

      {/* Activity Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 mb-6">

        {/* Recent Submissions */}
        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <h2 className="font-semibold mb-2">Recent Submissions</h2>
          {submissions.map((name, i) => (
            <div key={i} className="flex justify-between text-xs mb-2">
              <p className="font-medium">{name}</p>
              <div className="flex items-center gap-1 ">
                <CircleCheck size={16} className='text-green-500' />
                <span>Data submitted</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Evaluations */}
        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <h2 className="font-semibold mb-2">Recent Evaluations</h2>
          {evaluations.map((evalu, i) => (
            <div key={i} className="flex justify-between text-xs mb-2">
              <span>{evalu.name}</span>
              <span className={evalu.status === 'Completed' ? 'text-green-600' : 'text-yellow-500'}>
                {evalu.status}
              </span>
            </div>
          ))}
        </div>

        {/* User Actions */}
        <div className="bg-white border rounded-lg p-4 shadow-sm ">
          <h2 className="font-semibold mb-2">User Actions</h2>
          {userActions.map((action, i) => (
            <div key={i} className="flex justify-between text-xs mb-2">
              <span>{action.user}</span>
              <span>{action.action}</span>
              <span className="text-gray-400">{action.time}</span>
            </div>
          ))}
        </div>

        {/* System Updates */}
        <div className="bg-white border rounded-lg p-4 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="font-semibold mb-2">System Updates</h2>
            <p className="text-xs">v1.1 System update available</p>
          </div>
          <div className="pt-4">
            <Button title="Update System" />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="bg-white border rounded-lg p-4 shadow-sm mb-6">
        <h2 className="font-semibold mb-2">Performance Distribution</h2>
        <Charts />
      </div>

      <div className="bg-white border rounded-lg p-4 shadow-sm mb-6">
        <h2 className="font-semibold">Department Comparison</h2>
        <p className="text-sm text-gray-400 mb-4">
          Average performance score across different departments
        </p>
        <DepartmentCharts />
      </div>

      <div className="bg-white border rounded-lg p-4 shadow-sm mb-6">
        <TrendChart />
      </div>

      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <WeeklyChart />
      </div>
    </main>
  );
};

export default Dashboard;




























// import React from 'react'
// import { Button } from './DashboardButton'
// import { Users, User, Pi, CircleCheck } from "lucide-react"; 
// import Charts from '../../../components/atoms/Charts';
// import DepartmentCharts from './DepartmentCharts';
// import TrendChart from './TrendChart';
// import WeeklyChart from './WeeklyChart';
// import { Link } from 'react-router-dom'
// import interns from '../../data';

// const Dashboard = () => {
//   return (
//     <main className='ml-52 pt-24 px-6'>
//       <div className='flex space-x-4 flex-wrap ml-80'>
//         <Link to="/addintern">
//           <Button 
//             icon={<Users size={16} />} 
//             title="Add Interns " 
//             lg
//           />
//         </Link>
//         <Button 
//           icon={<User size={16} />} 
//           title="Add Users " 
//           lg
//         />
//         <Button 
//           icon={<Pi size={16} />} 
//           title="Run Calculation " 
//           lg
//         />
//         <Button 
//           icon={<Pi size={16} />} 
//           title="Export Data " 
//           lg
//         />
//       </div>

//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
//         {/* Total intern */}
//         <div className='bg-white border rounded-lg p-4 shadow-sm'>
//           <h1 className='font-semibold'>Total intern</h1>
//           <p className='font-bold text-2xl'>{interns.length}</p>
//           <p className='text-gray-400 text-sm'>Count of all interns in the system</p>
//         </div>
//         {/* Pending Reviews */}
//         <div className='bg-white border rounded-lg p-4 shadow-sm'>
//           <h1 className='font-semibold'>Pending Reviews</h1>
//           <p className='font-bold text-2xl'>20</p>
//           <p className='text-gray-400 text-sm'>Number of data submission awaiting review</p>
//         </div>
//         {/* Active Users */}
//         <div className='bg-white border rounded-lg p-4 shadow-sm'>
//           <h1 className='font-semibold'>Active Users</h1>
//           <p className='font-bold text-2xl'>5</p>
//           <p className='text-gray-400 text-sm'>Current active users</p>
//         </div>
//         {/* Performance alerts */}
//         <div className='bg-white border rounded-lg p-4 shadow-sm'>
//           <h1 className='font-semibold'>Performance alerts</h1>
//           <p className='font-bold text-2xl'>20</p>
//           <p className='text-gray-400 text-sm'>Count of interns with performance below threshold</p>
//         </div>
//       </div>

//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
//         <div className='bg-white border rounded-lg p-4 shadow-sm'>
//           <h1 className='font-semibold mb-2'>Recent Submisssion</h1>
//           <div className='flex text-xs gap-4'>
//             <div className='space-y-2'>
//               <p>Olivia Ryne</p>
//               <p>Phoenix Baker</p>
//               <p>Lana Steiner</p>
//               <p>Demi Wikinson</p>
//               <p>Candice wu</p>
//             </div>
//             <div className='space-y-2'>
//               {Array(5).fill(<div className='flex items-center gap-1'><CircleCheck className='text-green-400' size={16}/> Data submitted</div>)}
//             </div>
//           </div>
//         </div>

//         <div className='bg-white border rounded-lg p-4 shadow-sm '>
//           <h1 className='font-semibold mb-2'>Recent evaluation</h1>
//           <div className='flex gap-4 text-xs'>
//             <div className='space-y-2'>
//               <p>Olivia Ryne</p>
//               <p>Phoenix Baker</p>
//               <p>lana Steriner</p>
//             </div>
//             <div className='space-y-2'>
//               <p>Completed</p>
//               <p>Uncompleted</p>
//               <p>Uncompleted</p>
//             </div>
//           </div>
//         </div>

//         <div className='bg-white border rounded-lg p-4 shadow-sm'>
//           <h1 className='font-semibold mb-2'>User action</h1>
//           <div className='flex gap-4 text-xs'>
//             <div className='space-y-2'>
//               <p>Rodolfo</p>
//               <p>Elena</p>
//               <p>Rufus</p>
//               <p>Johnnie</p>
//             </div>
//             <div className='space-y-2'>
//               <p>Creating intern</p>
//               <p>Creating user</p>
//               <p>Intern info</p>
//               <p>View submitted</p>
//             </div>
//             <div className='space-y-2'>
//               <p>8-14</p>
//               <p>8-14</p>
//               <p>8-14</p>
//               <p>8-14</p>
//             </div>
//           </div>
//         </div>

//         <div className='bg-white border rounded-lg p-4 shadow-sm'>
//           <h1 className='font-semibold mb-2'>System Updates</h1>
//           <p className='text-xs'>v1.1 System update available</p>
//           <div className='pt-4'>
//             <Button title="Update System" />
//           </div>
//         </div>
//       </div>

//       <div className='bg-white border rounded-lg mt-6 p-4 shadow-sm'>
//         <h1 className='font-semibold mb-2'>Performance Distribution</h1>
//         <Charts />
//       </div>

//       <div className='bg-white border rounded-lg mt-6 p-4 shadow-sm'>
//         <h1 className='font-semibold'>Department Comparism</h1>
//         <p className='text-gray-400 text-sm mb-4'>Averages performance score across different department</p>
//         <DepartmentCharts />
//       </div>

//       <div className='bg-white border rounded-lg mt-6 p-4 shadow-sm'>
//         <TrendChart />
//       </div>

//       <div className='bg-white border rounded-lg mt-6 p-4 shadow-sm'>
//         <WeeklyChart />
//       </div>
//     </main>
//   )
// }

// export default Dashboard










