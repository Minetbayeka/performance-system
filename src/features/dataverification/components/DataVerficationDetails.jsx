
import React, { useState, useRef, useEffect} from 'react';
import { Search, ListFilter, SlidersHorizontal } from 'lucide-react'; // Using SlidersHorizontal for Sort icon
import Filter from './Filter';
import Sort from './Sort'


import { internsData } from '../../data';
import Pagination from '@components/atoms/Pagination';

// Helper function to get status badge classes
const getStatusBadgeClasses = (status) => {
  switch (status) {
    case 'Pending':
      return 'bg-blue-100 text-blue-800';
    case 'In Review':
      return 'bg-yellow-100 text-yellow-800';
    case 'Verified':
      return 'bg-green-100 text-green-800';
    case 'Rejected':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

// Helper function to get priority badge classes
const getPriorityBadgeClasses = (priority) => {
  switch (priority) {
    case 'High priority':
      return 'bg-red-100 text-red-800';
    case 'Medium priority':
      return 'bg-orange-100 text-orange-800';
    case 'Low priority':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const DataVerficationDetails = () => {
  const [search, setSearch] = useState("");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isSortModalOpen, setIsSortModalOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({});
  const [activeSort, setActiveSort] = useState({});
  const menuRefs = useRef({});

  // Extract unique filter options from your data
  const internNames = [...new Set(internsData.map(intern => intern.name))];
  const submitters = [...new Set(internsData.map(intern => intern.submittedBy))];
  const statuses = [...new Set(internsData.map(intern => intern.status))];
  const priorities = [...new Set(internsData.map(intern => intern.priority))];
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const filteredAndSortedInterns = internsData
    .filter((intern) => {
      const searchLower = search.toLowerCase();
      const matchesSearch = (
        intern.name.toLowerCase().includes(searchLower) ||
        intern.priority.toLowerCase().includes(searchLower) ||
        intern.submittedBy.toLowerCase().includes(searchLower) ||
        intern.status.toLowerCase().includes(searchLower)
      );

      const matchesFilters =
        (!activeFilters.internName || intern.name === activeFilters.internName) &&
        (!activeFilters.submitter || intern.submittedBy === activeFilters.submitter) &&
        (!activeFilters.verificationStatus || intern.status === activeFilters.verificationStatus) &&
        (!activeFilters.priorityLevel || intern.priority === activeFilters.priorityLevel);
      // Date range filtering would be more complex and require date parsing/comparison

      return matchesSearch && matchesFilters;
    })
    .sort((a, b) => {
      // Apply sorting logic
      if (activeSort.internName === 'name-az') {
        return a.name.localeCompare(b.name);
      }
      if (activeSort.internName === 'name-za') {
        return b.name.localeCompare(a.name);
      }
      // Add other sorting logic based on activeSort values (priority, status, date)
      // Example for priority (you'd need a defined order for priorities, e.g., High > Medium > Low)
      if (activeSort.priority) { 
          const priorityOrder = { 'High priority': 3, 'Medium priority': 2, 'Low priority': 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
      }
      // Example for submission date
      if (activeSort.submissionDate === 'newest-oldest') {
          return new Date(b.submissionDateTime).getTime() - new Date(a.submissionDateTime).getTime();
      }
      if (activeSort.submissionDate === 'oldest-newest') {
          return new Date(a.submissionDateTime).getTime() - new Date(b.submissionDateTime).getTime();
      }
      return 0; // No sort applied or equal
    });

  const handleApplyFilters = (filters) => {
    setActiveFilters(filters);
  };

  const handleApplySort = (sortOptions) => {
    setActiveSort(sortOptions);
  };

 

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  
  // Close dropdown if clicked outside
useEffect(() => {
    const handleClickOutside = (event) =>{
      const isClickInsideAny = Object.values(menuRefs.current).some(ref => ref?.contains(event.target));
      if (!isClickInsideAny)  setIsOpen(null);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <section className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section (Interns count, Search, Filters, Sort) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Interns</h1>
            <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
              {internsData.length}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white shadow-sm flex-grow sm:flex-grow-0">
              <Search className="text-gray-400 w-5 h-5 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none text-gray-900 placeholder-gray-400 flex-grow"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button
              onClick={() => setIsFilterModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <ListFilter className="w-5 h-5" />
              Filters
              {Object.keys(activeFilters).some(key => activeFilters[key]) && ( // Show indicator if filters are active
                <span className="ml-1 px-1.5 py-0.5 bg-blue-500 text-white text-xs rounded-full">
                  •
                </span>
              )}
            </button>
            <button
              onClick={() => setIsSortModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5" />
              Sort
              {Object.keys(activeSort).some(key => activeSort[key]) && ( // Show indicator if sort is active
                <span className="ml-1 px-1.5 py-0.5 bg-blue-500 text-white text-xs rounded-full">
                  •
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Interns Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority Level
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitted by
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Week Number
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submission date/time
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Current Status
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAndSortedInterns.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-4 whitespace-nowrap text-center text-gray-500">
                      No interns match your criteria.
                    </td>
                  </tr>
                ) : (
                  filteredAndSortedInterns.map((intern) => (
                    <tr key={intern.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full object-cover" src={intern.imgUrl} alt={intern.name} />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{intern.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityBadgeClasses(intern.priority)}`}>
                          {intern.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {intern.submittedBy}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {intern.weekNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {intern.submissionDateTime}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClasses(intern.status)}`}>
                          {intern.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium "  ref={(el) => (menuRefs.current[intern.id] = el)}>
                        <button className="text-gray-500 hover:text-gray-900 ml-3"
                        onClick={() => setIsOpen(!isOpen === intern.id ? null : intern.id)} >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                       {isOpen === intern.id && (
                       <div className="absolute right-0 mt-2 w-48 bg-white border border-blue-400 rounded-md shadow-lg z-10">
                       <ul className="py-1 text-sm text-gray-700">
                       <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit User</li>
                       <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-t border-gray-200">Delete user account</li>
                       <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-t border-gray-200">View action logs</li>
                      </ul>
                     </div>
                      )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        {/* Pagination might need adjustment for this layout */}
        <Pagination/>
      </div>

      {/* Filter Modal */}
      <Filter
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApplyFilters={handleApplyFilters}
        internNames={internNames}
        submitters={submitters}
        statuses={statuses}
        priorities={priorities}
      />

      {/* Sort Modal */}
      <Sort
        isOpen={isSortModalOpen}
        onClose={() => setIsSortModalOpen(false)}
        onApplySort={handleApplySort}
        internNames={internNames}
        priorities={priorities}
        statuses={statuses}
      />
    </section>
  );
};

export default DataVerficationDetails


























































































// import React, { useState } from 'react';
// import { Search, ListFilter, SlidersHorizontal } from 'lucide-react'; // Using SlidersHorizontal for Sort icon


// import { internsData } from '../../data/Index';
// import Pagination from '../../../components/atoms/Pagination';
// // Helper function to get status badge classes
// const getStatusBadgeClasses = (status) => {
//   switch (status) {
//     case 'Pending':
//       return 'bg-blue-100 text-blue-800';
//     case 'In Review':
//       return 'bg-yellow-100 text-yellow-800';
//     case 'Verified':
//       return 'bg-green-100 text-green-800';
//     case 'Rejected':
//       return 'bg-red-100 text-red-800';
//     default:
//       return 'bg-gray-100 text-gray-800';
//   }
// };

// // Helper function to get priority badge classes
// const getPriorityBadgeClasses = (priority) => {
//   switch (priority) {
//     case 'High priority':
//       return 'bg-red-100 text-red-800';
//     case 'Medium priority':
//       return 'bg-orange-100 text-orange-800';
//     case 'Low priority':
//       return 'bg-gray-100 text-gray-800';
//     default:
//       return 'bg-gray-100 text-gray-800';
//   }
// };


// const DataVerficationDetails = () => {
//   const [search, setSearch] = useState("");

//   const filteredInterns = internsData.filter((intern) => {
//     const searchLower = search.toLowerCase();
//     return (
//       intern.name.toLowerCase().includes(searchLower) ||
//       intern.priority.toLowerCase().includes(searchLower) ||
//       intern.submittedBy.toLowerCase().includes(searchLower) ||
//       intern.status.toLowerCase().includes(searchLower)
//     );
//   });

//   return (
    // <section className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
    //   <div className="max-w-7xl mx-auto">
    //     {/* Header Section (Interns count, Search, Filters, Sort) */}
    //     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
    //       <div className="flex items-center gap-2">
    //         <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Interns</h1>
    //         <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
    //           {internsData.length}
    //         </span>
    //       </div>

    //       <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
    //         <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white shadow-sm flex-grow sm:flex-grow-0">
    //           <Search className="text-gray-400 w-5 h-5 mr-2" />
    //           <input
    //             type="text"
    //             placeholder="Search"
    //             className="outline-none text-gray-900 placeholder-gray-400 flex-grow"
    //             value={search}
    //             onChange={(e) => setSearch(e.target.value)}
    //           />
    //         </div>
    //         <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-100 transition-colors">
    //           <ListFilter className="w-5 h-5" />
    //           Filters
    //         </button>
    //         <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-100 transition-colors">
    //           <SlidersHorizontal className="w-5 h-5" /> {/* Using SlidersHorizontal for Sort */}
    //           Sort
    //         </button>
    //       </div>
    //     </div>

    //     {/* Interns Table */}
    //     <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
    //       <div className="overflow-x-auto"> {/* Ensures horizontal scrolling on small screens */}
    //         <table className="min-w-full divide-y divide-gray-200">
    //           <thead className="bg-gray-50">
    //             <tr>
    //               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //                 Name
    //               </th>
    //               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //                 Priority Level
    //               </th>
    //               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //                 Submitted by
    //               </th>
    //               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //                 Week Number
    //               </th>
    //               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //                 Submission date/time
    //               </th>
    //               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //                 Current Status
    //               </th>
    //               <th scope="col" className="relative px-6 py-3">
    //                 <span className="sr-only">Actions</span>
    //               </th>
    //             </tr>
    //           </thead>
    //           <tbody className="bg-white divide-y divide-gray-200">
    //             {filteredInterns.length === 0 ? (
    //               <tr>
    //                 <td colSpan="7" className="px-6 py-4 whitespace-nowrap text-center text-gray-500">
    //                   No interns match your search.
    //                 </td>
    //               </tr>
    //             ) : (
    //               filteredInterns.map((intern) => (
    //                 <tr key={intern.id} className="hover:bg-gray-50">
    //                   <td className="px-6 py-4 whitespace-nowrap">
    //                     <div className="flex items-center">
    //                       <div className="flex-shrink-0 h-10 w-10">
    //                         <img className="h-10 w-10 rounded-full object-cover" src={intern.imgUrl} alt={intern.name} />
    //                       </div>
    //                       <div className="ml-4">
    //                         <div className="text-sm font-medium text-gray-900">{intern.name}</div>
    //                       </div>
    //                     </div>
    //                   </td>
    //                   <td className="px-6 py-4 whitespace-nowrap">
    //                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityBadgeClasses(intern.priority)}`}>
    //                       {intern.priority}
    //                     </span>
    //                   </td>
    //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    //                     {intern.submittedBy}
    //                   </td>
    //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    //                     {intern.weekNumber}
    //                   </td>
    //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    //                     {intern.submissionDateTime}
    //                   </td>
    //                   <td className="px-6 py-4 whitespace-nowrap">
    //                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClasses(intern.status)}`}>
    //                       {intern.status}
    //                     </span>
    //                   </td>
    //                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
    //                     <button className="text-gray-500 hover:text-gray-900 ml-3">
    //                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    //                         <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
    //                       </svg>
    //                     </button>
    //                   </td>
    //                 </tr>
    //               ))
    //             )}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //     {/* Pagination might need adjustment for this layout */}
    //      <Pagination /> 
    //   </div>
    // </section>
//   );
// }

// export default DataVerficationDetails









