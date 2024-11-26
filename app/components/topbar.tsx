"use client"
import react from 'react';
import Link from 'next/link';
import { auth } from '../firebase/firebase';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { authModalState } from '@/app/atom/authModalAtom';
import { FaSignOutAlt } from "react-icons/fa";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { FaArrowCircleLeft,FaArrowCircleRight } from "react-icons/fa";
import { LuTimer } from "react-icons/lu";
import { BsList } from 'react-icons/bs';
import Image from 'next/image';
import { AiFillYoutube } from "react-icons/ai";
import Timer from '@/app/components/timer/timer';
type Props = {
     ProblemPage: boolean;
}
const Topbar: React.FC<Props> = ({ProblemPage}) => {
    const setAuthModalState = useSetRecoilState(authModalState)
    const [user] = useAuthState(auth);
    const handleClick = () => {
        console.log('clicked');
    }
    const [signOut, loading, error] = useSignOut(auth);
  const handleclick = () =>{
    setAuthModalState((prev) => ({...prev, isOpen: true, type: 'login'}))
    try{
      signOut()
    }
    catch(error:any){
      alert(error.message)
   }
  }
  const handleTimer = () => {
    
  }
    return (
        <div className='bg-gradient-to-b from-gray-800 to-gray-600 p-1'>
            <div className='flex items-center justify-between mx-20 mr-20 p-2'>
        <Link rel="stylesheet" href="/" className='flex'>
        <Image src="/om.svg" className="h-12 w-12 object-cover" width={100} height={100} alt="OM symbol" />

            <div className="bg-cover bg-center w-10 h-10 mt-1.5">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path
            fillRule="evenodd"
            d="M13.672 1.672a1 1 0 00-1.414 0l-8 8a1 1 0 000 1.414l8 8a1 1 0 001.414-1.414L6.414 10l7.258-7.258a1 1 0 000-1.414z"
            clipRule="evenodd"
        />
    </svg>
</div>
     <div className='font-mono text-yellow-200 text-2xl mt-2 animate-fade-left animate-delay-500'>CodeJunkie</div>
     <div className='flex flex-col items-center'>
     </div>
       </Link>
       { ProblemPage && ( <div className="text-white text-xl font-mono flex gap-4 items-center ease">
       <FaArrowCircleLeft className='hover:text-gray-800 transition duration-300 ease-in-out'/>
             <BsList className='text-white'/>
           <div className="backdrop-blur-lgf relativ">ProblemList</div>
       <FaArrowCircleRight className='hover:text-gray-800 transition duration-300 ease-in-out'/>
       </div>)}
        <div className='flex items-center text-white'>
           <Link href="/payment">
           <button className="">
                <div className='bg-violet-400 p-1 px-2 hover:bg-white hover:text-black transition duration-300 ease-in-out'>
                    buyMeCoffee
                </div>
            </button>   
           </Link>
        {user && ProblemPage && (<Timer/>)}


           {!user && (<Link rel="stylesheet" href="/signin">
           <button className='ml-2' onClick={handleClick}>
                <div className='bg-violet-400 p-1 px-2 hover:bg-white hover:text-black transition duration-300 ease-in-out'>
                    SignIn
                </div>
            </button>
            </Link>)}
           {user && (<Link rel="stylesheet" href="/signin">
           <button className='ml-2' onClick={handleclick}>
               <div className="flex">
               <div className='cursor-pointer group relative'>
               <Image src="/Profile.png" alt="user profile" width={40} height={40} />

               <div
                className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto text-white p-4 rounded shadow-lg 
                z-40 group-hover:scale-100 scale-0 
                transition-all duration-300 ease-in-out'
            >
                <p className='text-sm'>{user.email}</p>
                </div>
                </div>
                  <div className='py-1 px-2 hover:text-black transition duration-300 ease-in-out text-2xl'>
               <FaSignOutAlt/>
                </div>
               </div>
            </button>
            </Link>)}
        </div>
    </div>
    </div>
    )
}
export default Topbar
