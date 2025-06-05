import { User } from 'lucide-react';
import React from 'react';
import Sidebar from '../../admin/components/Sidebar';

const ActivityHistory = () => {
  const activities = [
    { date: 'Feb 12, 2025 8:00 AM', action: 'Lorem ipsum dolor sit amet consectetur.' },
    { date: 'Feb 12, 2025 8:00 AM', action: 'Consectetur adipiscing elit.' },
    { date: 'Feb 12, 2025 8:00 AM', action: 'Sed do eiusmod tempor incididunt.' },
    // Add more activities as needed
  ];

  return (
    <section className=''>
        <Sidebar/>
    <div className=" max-w-6xl mx-auto p-6  rounded-lg shadow-md ml-48">
      <div className="flex items-center mb-4 bg-gray-100 ">
        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center ml-4">
          <span className="text-2xl text-primary"><User/></span> {/* Placeholder for user avatar */}
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold">Dani Wilkinson</h2>
          <p className="text-gray-600">Email: dani@example.com</p>
          <p className="text-gray-500">Role: Editor</p>
          <p className="text-gray-500">Last seen: 30 mins ago</p>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2">Action Logs</h3>
      <p className='text-gray-500'>vIew all individual action logs auditing purpose</p>
      <div className="p-4 rounded-lg">
        {activities.map((activity, index) => (
          <div key={index} className="mb-2 flex gap-24">
            <p className="text-gray-500">{activity.date}</p>
            <p className="text-gray-700">{activity.action}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default ActivityHistory;









// import React, { useState, useEffect } from 'react';

// // Helper function to format date/time
// const formatDateTime = (timestamp) => {
//   const date = new Date(timestamp);
//   return date.toLocaleString(); // e.g., "6/3/2025, 3:40:00 PM"
// };

// const ActivityHistory = () => {
//   const [activityLog, setActivityLog] = useState([]);
//   const [newAction, setNewAction] = useState('');

//   // Simulate loading initial history (e.g., from local storage or API)
//   useEffect(() => {
//     const storedLog = localStorage.getItem('userActivityLog');
//     if (storedLog) {
//       try {
//         setActivityLog(JSON.parse(storedLog));
//       } catch (e) {
//         console.error("Failed to parse activity log from localStorage:", e);
//         setActivityLog([]); // Reset if parsing fails
//       }
//     }
//   }, []);

//   // Effect to persist history to local storage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('userActivityLog', JSON.stringify(activityLog));
//   }, [activityLog]);

//   const addActivity = (action, details) => {
//     const newLogItem = {
//       id: Date.now().toString(), // Simple unique ID
//       timestamp: Date.now(),
//       action,
//       details,
//     };
//     setActivityLog((prevLog) => [newLogItem, ...prevLog]); // Add new item to the top
//   };

//   const handleAddCustomActivity = () => {
//     if (newAction.trim()) {
//       addActivity(newAction.trim());
//       setNewAction('');
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">User Dashboard</h1>

//       {/* Simulate user actions */}
//       <div className="mb-8 p-4 bg-blue-50 rounded-lg shadow-sm">
//         <h2 className="text-xl font-semibold mb-3 text-blue-700">Simulate Actions</h2>
//         <div className="flex flex-wrap gap-3 mb-4">
//           <button
//             onClick={() => addActivity('Logged in')}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
//           >
//             Simulate Login
//           </button>
//           <button
//             onClick={() => addActivity('Updated Profile', 'Changed avatar')}
//             className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors"
//           >
//             Simulate Profile Update
//           </button>
//           <button
//             onClick={() => addActivity('Viewed Report', 'Sales Performance')}
//             className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"
//           >
//             Simulate Report View
//           </button>
//         </div>
//         <div className="flex gap-2">
//           <input
//             type="text"
//             value={newAction}
//             onChange={(e) => setNewAction(e.target.value)}
//             placeholder="Add custom activity..."
//             className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//             onClick={handleAddCustomActivity}
//             className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md transition-colors"
//           >
//             Add
//           </button>
//         </div>
//       </div>

//       {/* Activity History Display */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800">Activity History</h2>
//         {activityLog.length === 0 ? (
//           <p className="text-gray-500 italic">No activity recorded yet.</p>
//         ) : (
//           <ul className="space-y-3">
//             {activityLog.map((item) => (
//               <li key={item.id} className="p-3 bg-gray-50 border border-gray-200 rounded-md flex justify-between items-start">
//                 <div>
//                   <p className="font-medium text-gray-900">{item.action}</p>
//                   {item.details && (
//                     <p className="text-sm text-gray-600 italic">{item.details}</p>
//                   )}
//                 </div>
//                 <span className="text-xs text-gray-400 whitespace-nowrap">
//                   {formatDateTime(item.timestamp)}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ActivityHistory;
