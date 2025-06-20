
import React, { useState } from 'react';
import { Search, ListFilter, SlidersHorizontal } from 'lucide-react'; // Using SlidersHorizontal for Sort icon

import { internsData } from '../../data/Index';
import Pagination from '../../../components/atoms/Pagination';
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

  const filteredInterns = internsData.filter((intern) => {
    const searchLower = search.toLowerCase();
    return (
      intern.name.toLowerCase().includes(searchLower) ||
      intern.priority.toLowerCase().includes(searchLower) ||
      intern.submittedBy.toLowerCase().includes(searchLower) ||
      intern.status.toLowerCase().includes(searchLower)
    );
  });

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
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-100 transition-colors">
              <ListFilter className="w-5 h-5" />
              Filters
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-100 transition-colors">
              <SlidersHorizontal className="w-5 h-5" /> {/* Using SlidersHorizontal for Sort */}
              Sort
            </button>
          </div>
        </div>

        {/* Interns Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="overflow-x-auto"> {/* Ensures horizontal scrolling on small screens */}
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
                {filteredInterns.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-4 whitespace-nowrap text-center text-gray-500">
                      No interns match your search.
                    </td>
                  </tr>
                ) : (
                  filteredInterns.map((intern) => (
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
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-gray-500 hover:text-gray-900 ml-3">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        {/* Pagination might need adjustment for this layout */}
         <Pagination /> 
      </div>
    </section>
  );
}

export default DataVerficationDetails









