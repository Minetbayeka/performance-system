import React from 'react'

const Pagination = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-4">
    <button className="text-sm text-gray-500 hover:underline">&larr; Previous</button>
    <div className="space-x-2">
      <button className="px-3 py-1 text-sm bg-purple-100  text-primary rounded">1</button>
      <button className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded">2</button>
      <span className="text-gray-500">...</span>
      <button className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded">8</button>
      <button className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded">9</button>
      <button className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded">10</button>
    </div>
    <button className="text-sm text-gray-500 hover:underline">Next &rarr;</button>
  </div>
    </div>
  )
}

export default Pagination
