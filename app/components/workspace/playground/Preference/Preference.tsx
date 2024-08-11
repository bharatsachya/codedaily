import React from 'react'
import { AiOutlineSetting } from 'react-icons/ai'

export default function Preference() {
    return (
        <div className='flex h-11 w-full items-center pt-2 text-white bg-slate-500 justify-betwween'>
           <div className='flex items-center'>
           <button className='flex cursor-pointer items-center bg-slate-600 px-2 py-1.5 mb-hover:bg-slate-700 rounded text-left focus:outline-none'>
             <div className='flex items-center px-1'>
                <div>
                     JavaScript
                </div>
             </div>
           </button>
           </div>
           <div className=''>
           <div className='flex justify-end m-2'>
				<button
					className='preferenceBtn group'>
					<div className='h-4 w-4  font-bold text-lg'>
						<AiOutlineSetting/>
					</div>
					<div className='preferenceBtn-tooltip'>Settings</div>
				</button>

			</div>
           </div>
        </div>
    )
}