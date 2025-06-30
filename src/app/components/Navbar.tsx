"use client"
import React, {useState} from 'react'
import { Gift, Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isNavOpen, setIsNavOpen]= useState (false)
  const toggleNav = ()=>{
     setIsNavOpen(!isNavOpen)
  }
  
  return (
    <div className='w-full my-5 px-6 sm:px-12 md:px-12 lg:px-15 xl:px-20 max-w-7xl mx-auto'>
        <header className='flex items-center'>
           <h1 className="text-2xl font-bold flex items-center gap-2">
          <Gift className="text-pink-500" size={28} />
          GiftLoop
        </h1>
         <div className='md:hidden ml-auto'>
          <button onClick={toggleNav}>
            {isNavOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
            <nav className="space-x-6 mx-auto text-sm items-center font-medium hidden md:flex">
          <a href="/dashboard" className="hover:text-pink-500 transition">Dashboard</a>
          <a href="/people" className="hover:text-pink-500 transition">People</a>
          <a href="/giftideas" className="hover:text-pink-500 transition">Gift Ideas</a>
          <a href="/reminders" className="hover:text-pink-500 transition">Reminders</a>
        
        </nav>
       </header>
        
        {/* Mobile Nav */}
      {isNavOpen && (
        <nav className="flex mx-auto items-center flex-col mt-9 gap-3 text-sm font-medium md:hidden">
          <a href="#dashboard" className="hover:text-pink-500 transition">Dashboard</a>
          <a href="#people" className="hover:text-pink-500 transition">People</a>
          <a href="#gifts" className="hover:text-pink-500 transition">Gift Ideas</a>
          <a href="#reminders" className="hover:text-pink-500 transition">Reminders</a>
        </nav>
      )}
        
    </div>
  )
}

export default Navbar