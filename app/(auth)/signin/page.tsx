"use client"
import AuthModal from '@/app/Modals/AuthModal'
import Navbar from '@/app/components/navbar'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { authModalState } from '@/app/atom/authModalAtom'
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth}from '@/app/firebase/firebase'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useEffect } from 'react'
export default function Signin() {
      const authModal = useRecoilValue(authModalState);   
      const [user,loading,error] = useAuthState(auth);
      const [pageloading,setpageLoading] = React.useState(true)
      const router = useRouter()
      useEffect(() => {
        if(user) router.push('/')
        if(!loading && !user) setpageLoading(false) 
      },[user,router,loading])

     if(pageloading) return null;
  return <>
     <div className='bg-gradient-to-b from-red-300 to-black h-screen relative'>
         <div className="max-w-7xl mx-auto">
         <Navbar/>
        <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none animate-fade-left animate-delay-700'>
              <Image src="/hero.png" alt="hero" height={600} width={600}/>
        </div>
        {authModal.isOpen && <AuthModal/>}
        </div>
        </div>
  </>
}
