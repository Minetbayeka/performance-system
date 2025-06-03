import { Pen, Search, Trash2, Users } from 'lucide-react';
import { Button } from '../../admin/components/DashboardButton';
import Pagination from '../../../components/atoms/Pagination';
import { Link } from 'react-router-dom';
import { interns } from "../../data";
import { useContext, useState } from 'react';
import { AppContext } from '../../../provider/AppContext';

const Dashboard = (intern) => {
  const {removeIntern, interns} = useContext(AppContext)

const [searchTerm, setSearchTerm] = useState("");

const filteredInterns = interns.filter((intern) => {
  const searchLower = searchTerm.toLowerCase();
  return (
    intern.name.toLowerCase().includes(searchLower) ||
    intern.departments.toLowerCase().includes(searchLower)
  );
});

   
  
  // Handler to edit an intern
  const editIntern = (intern) => {
    // Example: Alert intern's data
    alert(`Editing intern: ${intern.name}`);
    // In a real app, you might navigate to an edit page or open a modal:
    // navigate(`/editintern/${intern.id}`);
  };

  return (
    <section className="pt-4 ml-56 mt-16">
      <div className="flex gap-80">
        <div className="border rounded px-2 py-1 flex items-center w-80 bg-gray-50">
          <Search />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 outline-none w-full text-[#E4E7EC] placeholder-[#E4E7EC] mx-5"
             value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          
          />
          
        </div>

        <div>
          <Link to="/addintern">
            <Button
              icon={<Users size={16} />}
              title="Add Interns"
              lg
            />
          </Link>
        </div>
      </div>

      <div className="flex gap-2 pt-4 pb-3">
        <h1>Interns</h1>
        <button className="bg-[#E4E7EC] rounded-full px-2 text-primary">{interns.length}</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Performance</th>
              <th className="px-6 py-3">Department</th>
              <th className="px-6 py-3">Supervisor</th>
              <th className="px-6 py-3">Internship duration</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInterns.map((intern) => (
              <tr className="border-t" key={intern.id}>
                <td className="flex items-center px-6 py-4 space-x-3 whitespace-nowrap">
                  <img src={intern.imgUrl} alt="profile" className="h-10 w-10 rounded-full" />
                  <span
                   onChange={(e) => setSearchName(e.target.value)}>{intern.name}</span>
                </td>

                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {intern.performance}
                  </span>
                </td>
                <td className="px-6 py-4">{intern.departments}</td>
                <td className="px-6 py-4">{intern.supervisor}</td>
                <td className="px-6 py-4">{intern.internshipdur}</td>
                <td className="px-6 py-4 flex space-x-3 items-center">
                  <button
                    className="text-gray-500 hover:text-red-600"
                    onClick={() => removeIntern(intern.id)}
                  >
                    <Trash2 />
                  </button>
                  <button
                    className="text-gray-500 hover:text-blue-600"
                    onClick={() => editIntern(intern)}
                  >
                    <Pen />
                  </button>
                  <a
                    href={intern.profile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Profile
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination />
      </div>
    </section>
  );
};

export default Dashboard;











// import { Pen, Search, Trash2, Users } from 'lucide-react';
// import { Button } from '../../admin/components/DashboardButton';
// import Pagination from '../../../components/atoms/Pagination';
// import { interns } from "../../data";
// import { Link } from 'react-router-dom';
// import { CARTACTIONS } from '../../../provider/CartReducer';
// // import { useContext } from 'react';
// // import { AppContext } from '../../../provider/AppContext';


// const Dashboard = () => {

//   //  const { dispatch } = useContext(AppContext)

//   return (
//     <section className="pt-4">
//       <div className="flex gap-80">
//         <div className="border rounded px-2 py-1 flex items-center w-80 bg-gray-50">
//           <Search />
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-gray-50 outline-none w-full text-[#E4E7EC] placeholder-[#E4E7EC] mx-5"
//           />
//         </div>

//         <div>
//           <Link to="/addintern">
//             <Button
//               icon={<Users size={16} />}
//               title="Add Interns"
//               lg
//             />
//           </Link>
//         </div>
//       </div>

//       <div className="flex gap-2 pt-4 pb-3">
//         <h1>Interns</h1>
//         <button className="bg-[#E4E7EC] rounded-full px-2 text-primary">100</button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200 text-sm text-left">
//           <thead className="bg-gray-100 text-gray-700 uppercase">
//             <tr>
//               <th className="px-6 py-3">Name</th>
//               <th className="px-6 py-3">Performance</th>
//               <th className="px-6 py-3">Department</th>
//               <th className="px-6 py-3">Supervisor</th>
//               <th className="px-6 py-3">Internship duration</th>
//               <th className="px-6 py-3">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {interns.map((intern) => (
//               <tr className="border-t" key={intern.id}>
//                 <td className="flex items-center px-6 py-4 space-x-3 whitespace-nowrap">
//                   <img src={intern.imgUrl} alt="profile" className="h-10 w-10 rounded-full" />
//                   <span>{intern.name}</span>
//                 </td>

//                 <td className="px-6 py-4">
//                   <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
//                     {intern.performance}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4">{intern.departments}</td>
//                 <td className="px-6 py-4">{intern.supervisor}</td>
//                 <td className="px-6 py-4">{intern.internshipdur}</td>
//                 <td className="px-6 py-4 flex space-x-3 items-center">
//                   <button
//                     className="text-gray-500 hover:text-red-600"
//                   // onClick={() => dispatch({ type: CARTACTIONS.REMOVE, intern })}
//                   >
//                     <Trash2 />
//                   </button>
//                   <button className="text-gray-500 hover:text-blue-600">
//                     <Pen />
//                   </button>
//                   <a
//                     href={intern.profile}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:underline"
//                   >
//                     View Profile
//                   </a>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <Pagination />
//       </div>
//     </section>
//   );
// };

// export default Dashboard;


//tracking

// import { Pen, Search, Trash2, Users } from 'lucide-react';
// import { Button } from '../../admin/components/DashboardButton';
// import Pagination from '../../../components/atoms/Pagination';
// import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { AppContext } from '../../../provider/AppContext';

// const Dashboard = () => {
//   const { removeIntern, interns } = useContext(AppContext);

//   // Function to determine performance
//   const getPerformance = (duration) => {
//     if (duration >= 3) {
//       return 'Excellent';
//     } else if (duration === 2) {
//       return 'Good';
//     } else if (duration === 1) {
//       return 'Average';
//     } else {
//       return 'Poor';
//     }
//   };

//   // Handler to edit an intern
//   const editIntern = (intern) => {
//     alert(`Editing intern: ${intern.name}`);
//   };

//   return (
//     <section className="pt-4">
//       <div className="flex gap-80">
//         <div className="border rounded px-2 py-1 flex items-center w-80 bg-gray-50">
//           <Search />
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-gray-50 outline-none w-full text-[#E4E7EC] placeholder-[#E4E7EC] mx-5"
//           />
//         </div>

//         <div>
//           <Link to="/addintern">
//             <Button icon={<Users size={16} />} title="Add Interns" lg />
//           </Link>
//         </div>
//       </div>

//       <div className="flex gap-2 pt-4 pb-3">
//         <h1>Interns</h1>
//         <button className="bg-[#E4E7EC] rounded-full px-2 text-primary">{interns.length}</button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200 text-sm text-left">
//           <thead className="bg-gray-100 text-gray-700 uppercase">
//             <tr>
//               <th className="px-6 py-3">Name</th>
//               <th className="px-6 py-3">Performance</th>
//               <th className="px-6 py-3">Department</th>
//               <th className="px-6 py-3">Supervisor</th>
//               <th className="px-6 py-3">Internship duration</th>
//               <th className="px-6 py-3">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {interns.map((intern) => (
//               <tr className="border-t" key={intern.id}>
//                 <td className="flex items-center px-6 py-4 space-x-3 whitespace-nowrap">
//                   <img src={intern.imgUrl} alt="profile" className="h-10 w-10 rounded-full" />
//                   <span>{intern.name}</span>
//                 </td>

//                 <td className="px-6 py-4">
//                   <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
//                     {getPerformance(intern.internshipdur)}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4">{intern.departments}</td>
//                 <td className="px-6 py-4">{intern.supervisor}</td>
//                 <td className="px-6 py-4">{intern.internshipdur} months</td>
//                 <td className="px-6 py-4 flex space-x-3 items-center">
//                   <button
//                     className="text-gray-500 hover:text-red-600"
//                     onClick={() => removeIntern(intern.id)}
//                   >
//                     <Trash2 />
//                   </button>
//                   <button
//                     className="text-gray-500 hover:text-blue-600"
//                     onClick={() => editIntern(intern)}
//                   >
//                     <Pen />
//                   </button>
//                   <a
//                     href={intern.profile}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:underline"
//                   >
//                     View Profile
//                   </a>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <Pagination />
//       </div>
//     </section>
//   );
// };

// export default Dashboard;
