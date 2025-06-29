"use client"
import TextInputs from '@/app/components/TextInputs'
import React, {useState} from 'react'
import { useRouter } from "next/navigation";

const Page = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")
    const router = useRouter();
  return (
    <div className='min-h-screen items-center justify-center flex'>
    
        <form className='bg-white p-9 shadow-md drop-shadow-black'>
        <h1 className='text-2xl mb-5 font-semibold'>Login</h1>
         <label className="">Username</label>
        <TextInputs
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
         <label className="mb-10">Password</label>
      <TextInputs
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button 
      className='cursor-pointer bg-gradient-to-r from-pink-300 to-yellow-200 w-full p-2 mt-4 rounded-sm'  
      onClick={(e) => {
      e.preventDefault();
      router.push("/dashboard");
      }}>
        Login
      </button>
      <p className='mt-4'>Dont have an account? <a href='/authentication/signup' className='text-blue-600'><span>Sign up</span></a></p>
        </form>
    </div>
  )
}

export default Page