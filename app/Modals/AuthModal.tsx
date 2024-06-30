import React, { useEffect } from 'react'
import Login from './login'
import Signup from './signup'
import PasswordReset from './passwordreset'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { authModalState } from '@/app/atom/authModalAtom'
import firebase from 'firebase/compat/app'
import { auth } from '../firebase/firebase'
import { useState } from 'react'
export default function AuthModal() {
	const setAuthModalState = useSetRecoilState(authModalState)
	const authModal = useRecoilValue(authModalState)
	
	const handleClick = () => {
		setAuthModalState((prev) => ({...prev, isOpen: false}))
	}
	
	useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setAuthModalState(prev => ({
                    ...prev,
                    isOpen: false,
                    type: 'login'
                }));
            }
        };
        window.addEventListener('keydown', handleEsc);
 
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);
  return <>
	<div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60'></div>
	<div className='w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center'>
		<div className='relative w-full h-full mx-auto flex items-center justify-center'>
			<div className='bg-white rounded-lg shadow relative w-full bg-gradient-to-b from-red-300 to-black mx-6'>
				<div className='flex justify-end p-2'>
					<button
						type='button'
						className='bg-transparent rounded-xl text-sm p-1.5 px-2 ml-auto inline-flex items-center hover:bg-black hover:text-white text-white'
					    onClick={handleClick}
					>
						<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path></svg>
					</button>
				</div>
        {authModal.type === 'login' ? <Login/> : authModal.type === 'signup' ? <Signup/> : <PasswordReset/>}
			</div>
		</div>
	</div>
	</>
}