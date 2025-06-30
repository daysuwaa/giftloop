import React from 'react'
import Navbar from '../components/Navbar'
import Header from './Header'
import Stats from './Stats'
import Upcoming from './Upcoming'
import YourPeeps from './YourPeeps'

const page = () => {
  return (
    <div className='w-full my-5 px-6 sm:px-12 md:px-8 xl:px-10 max-w-7xl mx-auto'>
        <Navbar/>
        <Header/>
        <Stats/>
        <Upcoming/>
       <YourPeeps/>
    </div>
  )
}

export default page