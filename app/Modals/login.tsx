"use client"
import React from 'react'
import  Link  from 'next/link'
import { handleClientScriptLoad } from 'next/script'
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/app/atom/authModalAtom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/firebase';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
export default function Login() {
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = (type:"login" | "signup" | "passwordreset") => {
     setAuthModalState((prev) => ({...prev, type:type}))
  }
  const router = useRouter()
  const [inputs,setInputs] = React.useState({"email":"", "password":""})
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const handleInput = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setInputs((prev) => ({...prev, [event.target.name]: event.target.value}))
  }
  const handleIn = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try{
          const user = await signInWithEmailAndPassword(inputs.email, inputs.password)
          if(!user) return
          console.log(user.operationType)
          router.push('/')
    }
    catch(error:any){
      toast.error(error.message,{position:"top-center",autoClose:5000,theme:"dark"})
    }
  }

  useEffect(() => {
    if(error) alert(error.message)
  },[error])

  return <>
    <form className='space-y-6 px-6 pb-4' onSubmit={handleIn}>
        <h1 className='font-medium text-white text-md'>SignIn to LeetClone</h1>
        <div>
        <label htmlFor="email" className='block text-sm font-medium mb-2 text-gray'>Your Email</label>
        <input onChange={handleInput} name="email" type="email" className='block rounded-lg w-full border-2 text-sm font-medium p-2 bg-gray-300 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-600 outline-none' placeholder='example@xyz.com'/>
        </div>
        <div>
        <label htmlFor="email" className='block text-sm font-medium mb-2 text-gray'>Your Password</label>
        <input onChange={handleInput} name="password" type="password" className='rounded-lg w-full border-2 text-sm font-medium p-2 bg-gray-300 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-600 outline-none' placeholder='passcode'/>
        </div>
        <button type="submit" className='mb-1/2 flex items-center bg-red-300  rounded-lg p-2 justify-center mx-auto hover:bg-gray-800 hover:text-white transition duration-200 ease-in-out'>
            SignIn
        </button>
        <button className='flex w-full justify-end'>
        <div className='text-orange-700' onClick={()=>{handleClick("passwordreset")}}>
            forgot password?
            </div>
        </button>
        <div className='text-green-700 text-sm flex justify-center flex-col'>
        Not Have an Account?
        <button onClick={()=>handleClick("signup")}>
          <div className='text-white text-right hover:underline hover:text-blue-500'>
            Create Account
          </div>
        </button>
        </div>
    </form>
  </>
}