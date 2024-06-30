import React, { ReactHTMLElement } from 'react'
import Link from 'next/link'
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/app/atom/authModalAtom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {auth} from '@/app/firebase/firebase'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
export default function Signup() { 
   const setAuthModalState = useSetRecoilState(authModalState)
  const handleClick = () => {
         setAuthModalState((prev) => ({...prev, type: 'login'}))
   }
   const [inputs,setInputs] = React.useState({"name":"", "email":"", "password":""})
   const router = useRouter()
   const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth);
   const handleInput = (event:React.ChangeEvent<HTMLInputElement>) =>{
       setInputs((prev) => ({...prev, [event.target.name]: event.target.value}))
   }
   const handleRegister = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!inputs.email || !inputs.password || !inputs.name) return alert('Please fill all the fields')
     try{
        const user = await createUserWithEmailAndPassword(inputs.email, inputs.password)         
        if(!user) return 
        router.push('/')
     }
     catch(error:any){
       toast.error(error.message,{position:"top-center",autoClose:5000,theme:"dark"})
     }    
   }

   useEffect(() => {
     if(error) alert(error.message)
  },[error])
   return  <>
   <form className='space-y-6 px-6 pb-4' onSubmit={handleRegister}>
       <h1 className='font-medium text-white text-md'>Hola User</h1>
       <div>
       <label htmlFor="Name" className='block text-sm font-medium mb-2 text-gray'>Your Name</label>
       <input onChange={handleInput} name="name" type="name" className='block rounded-lg w-full border-2 text-sm font-medium p-2 bg-gray-300 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-600 outline-none' placeholder='UserName'/>
       </div>
       <div>
       <label htmlFor="email" className='block text-sm font-medium mb-2 text-gray'>Your Email</label>
       <input onChange={handleInput} type="email" name="email" className='block rounded-lg w-full border-2 text-sm font-medium p-2 bg-gray-300 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-600 outline-none' placeholder='example@xyz.com'/>
       </div>
       <div>
       <label htmlFor="email" className='block text-sm font-medium mb-2 text-gray'>Your Password</label>
       <input onChange={handleInput} type="password" name='password' className='rounded-lg w-full border-2 text-sm font-medium p-2 bg-gray-300 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-600 outline-none' placeholder='passcode'/>
       </div>
       <button className='flex items-center bg-red-300  rounded-lg p-2 justify-center mx-auto hover:bg-gray-800 hover:text-white'>
           {loading ? 'Registering...' : 'Register'}
       </button>
       <div className='text-white text-sm flex justify-center flex-col'>
       Already Have an Account?
       <button onClick={handleClick}>
       <div className='text-white text-right outline-none hover:text-blue-700 hover:underline'>
           SignIn
       </div>
       </button>
       </div>
   </form>
 </>
}