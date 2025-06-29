"use client"
import TextInputs from '@/app/components/TextInputs'
import React, {useState} from 'react'
import { useRouter } from "next/navigation";

const Page = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter();
  return (
    <div className='min-h-screen items-center justify-center flex mx-auto max-w-7xl'>
    
        <form className='bg-white p-9 shadow-md drop-shadow-black w-2xl'>
        <h1 className='text-2xl mb-5 font-semibold'>Sign Up</h1>
         <label className="">Username</label>
        <TextInputs
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
         <label className="mb-10">Email</label>
      <TextInputs
        type="email"
        placeholder="Password"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        Sign up
      </button>
      <p className='mt-4'>Dont have an account? <a href='/authentication/login' className='text-blue-600'><span>Log in</span></a></p>
        </form>
    </div>
  )
}

export default Page