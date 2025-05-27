import React from 'react'

const Pagination = () => {
  return (
    <div>
      <div class="flex justify-between items-center mt-4">
    <button class="text-sm text-gray-500 hover:underline">&larr; Previous</button>
    <div class="space-x-2">
      <button class="px-3 py-1 text-sm bg-purple-100 text-purple-600 rounded">1</button>
      <button class="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded">2</button>
      <span class="text-gray-500">...</span>
      <button class="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded">8</button>
      <button class="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded">9</button>
      <button class="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded">10</button>
    </div>
    <button class="text-sm text-gray-500 hover:underline">Next &rarr;</button>
  </div>
    </div>
  )
}

export default Pagination
