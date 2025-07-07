import React from 'react'
import Navbar from '../components/Navbar'
import Dashboard from './DashboardGiftIdeas'
import Ideas from './Ideas'

const page = () => {
  return (
<div className='w-full my-5 px-6 sm:px-12 md:px-8 xl:px-10 max-w-7xl mx-auto'>
      <Navbar/>
      <Dashboard/>
      <Ideas/>
    </div>
  )
}

export default page