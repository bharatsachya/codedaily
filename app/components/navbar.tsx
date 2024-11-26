import Link from 'next/link'
import React from 'react'
import { authModalState } from '../atom/authModalAtom'
import { useSetRecoilState } from 'recoil'
export default function Navbar() {
    const setAuthModalState = useSetRecoilState(authModalState)
    const handleclick = () => {
         setAuthModalState((prev) => ({...prev, isOpen: true,type:"login"}))
     }
    return <div className='flex items-center justify-between sm:px-12 px-2 md:px-24'>
    <Link rel="stylesheet" href="/" className='flex items-center justify-center h-20' >
              <div className='text-2xl font-bold animate-fade-left animate-delay-500'>Code</div>
               <div className='text-2xl font-bold text-violet-400'>Junkie</div>
    </Link>
       <div className='flex items-center animate-fade-down animate-delay-500'>
             <button className='bg-violet-400 p-2  text-white sm:px-4 rounded-2xl text-sm font-medium  hover:text-black hover:bg-white hover:border transition duration-300 ease-in-out' onClick={handleclick}>
                SignIn
             </button>                        
       </div>
    </div>
}
