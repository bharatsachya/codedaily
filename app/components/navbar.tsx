import Link from 'next/link'
import React from 'react'
export default function Navbar() {
    return <div className='flex items-center justify-between sm:px-12 px-2 md:px-24'>
       <Link rel="stylesheet" href="/" className='flex items-center justify-center h-20' >
              <img src="/leetcode.svg" className='h-12 w-12'/>
              <div className='text-2xl font-bold'>LeetCode</div>
       </Link>
       <div className='flex items-center '>
             <button className='bg-violet-400 p-2 rounded-3xl text-white sm:px-4 rounded-md text-sm font-medium hover:text-black hover:bg-white hover:border transition duration-300 ease-in-out'>
                SignIn
             </button>                        
       </div>
    </div>
}
