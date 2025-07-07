import { Gift, Lightbulb, ShoppingCart } from 'lucide-react'
import React from 'react'

const DashboardGiftIdeas = () => {
  return (
    <div>
         <h1 className="text-2xl font-semibold">Gift Ideas</h1>
         <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
            <div className='bg-blue-100 border border-blue-300 p-6 rounded-lg'>
                <div className='flex items-center'>
                <h1 className='text-blue-800 font-semibold text-xl'>Ideas</h1>
                 <Lightbulb className='ml-auto mt-3 text-yellow-500'/>
              </div>
                  <p className='text-blue-900 font-semibold text-2xl'>2</p>
            </div>
         <div className='bg-yellow-100 border border-yellow-300 p-6 rounded-lg'>
                <div className='flex items-center'>
                <h1 className='text-yellow-800 font-semibold text-xl'>Purchased</h1>
                 <ShoppingCart className='ml-auto mt-3 text-gray-500'/>
              </div>
                  <p className='text-yellow-900 font-semibold text-2xl'>2</p>
            </div>
          <div className='bg-green-100 border border-green-300 p-6 rounded-lg'>
                <div className='flex items-center'>
                <h1 className='text-green-800 font-semibold text-xl'>Given</h1>
                 <Gift className='ml-auto mt-3 text-green-500'/>
              </div>
                  <p className='text-green-900 font-semibold text-2xl'>2</p>
            </div>
         </div>
    </div>
  )
}

export default DashboardGiftIdeas