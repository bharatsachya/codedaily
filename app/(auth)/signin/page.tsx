import AuthModal from '@/app/Modals/AuthModal'
import Navbar from '@/app/components/navbar'
import React from 'react'

export default function Signin() {
  return <>
   
     <div className='bg-gradient-to-b from-red-300 to-black h-screen relative'>
         <div className="max-w-7xl mx-auto">
         <Navbar/>
        <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
              <img src="/hero.png" alt="hero" />
        </div>
        <AuthModal/>
        </div>
        </div>
  </>
}
