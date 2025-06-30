import React from 'react'
import Navbar from '../components/Navbar'
import SearchInput from './SearchInput'
import Details from './Details'
import AddPerson from './AddPerson'


const page = () => {
  return (
    <div className='w-full my-5 px-6 sm:px-12 md:px-8 xl:px-10 max-w-7xl mx-auto'>
        <Navbar/>
        <AddPerson/>
        <SearchInput/>
        <Details/>
        
    </div>
  )
}

export default page