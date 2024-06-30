import React from 'react'
import Link from 'next/link'
import { useSetRecoilState } from 'recoil'
import { authModalState } from '@/app/atom/authModalAtom'
import { useAuthState, useSendPasswordResetEmail  } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import { useEffect,useState } from 'react';
import { toast } from 'react-toastify';
export default function PasswordReset() {

  const setAuthModalState = useSetRecoilState(authModalState)
	const user = useAuthState(auth)
  const [email, setEmail] = useState("")
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
    auth
  );
  const handleIn = async(e:React.FormEvent<HTMLFormElement>) =>{
     e.preventDefault()
        const suc = await sendPasswordResetEmail(email)
        if(suc){
          toast.success("Password reset email sent",{position:"top-right",autoClose:5000});
        }   
  }
  useEffect(() => {
    if(error){
      toast.error(error.message,{position:"top-center",autoClose:5000,theme:"dark"});
    }
  },[error])

  const handleClick = () => { 
    setAuthModalState((prev) => ({...prev, type:"passwordreset"}))
  }
  return <>
       <form className='space-y-6 px-6 pb-4' onSubmit={handleIn}>
        <h1 className='font-medium text-white text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, cumque deserunt recusandae alias soluta architecto deleniti eveniet in nesciunt reiciendis dolorem modi fuga consequuntur necessitatibus maxime saepe unde laudantium aliquid.</h1>
        <div>
        <label htmlFor="email" className='block text-sm font-medium mb-2 text-gray'>Your Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} type="email" className='block rounded-lg w-full border-2 text-sm font-medium p-3 bg-gray-300 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-600 outline-none' placeholder='example@xyz.com'/>
        </div>
        <button type="submit" onClick={handleClick} className='mb-1/2 flex items-center bg-red-300  rounded-lg p-2 justify-center mx-auto hover:bg-gray-800 hover:text-white transition duration-200 ease-in-out'>
            <div className='text-md'>Sumbit</div>
        </button>
    </form>
  </>
}