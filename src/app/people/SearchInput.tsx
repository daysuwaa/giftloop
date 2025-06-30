import React from 'react'

const SearchInput = () => {
  return (
    <div>
        <div className='flex items-center justify-between mb-5'>
        {/* <Search className='left-[9rem] absolute text-gray-400  '/> */}
        <input
            type="text"
            placeholder="Search for a person..."
            className="w-full p-3  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"/>
            </div>
    </div>
  )
}

export default SearchInput