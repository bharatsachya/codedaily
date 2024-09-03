import React from 'react';
import { AiOutlineSetting, AiOutlineFullscreen } from 'react-icons/ai';

export default function Preference() {
    return (
        <div className='flex h-11 w-full items-center pt-2 text-white bg-slate-500 justify-between'>
            {/* Left Section */}
            <div className='flex items-center'>
                <button className='flex cursor-pointer items-center bg-slate-600 px-2 py-1.5 hover:bg-slate-700 rounded focus:outline-none'>
                    <div className='flex items-center px-1'>
                        <div>JavaScript</div>
                    </div>
                </button>
            </div>

            {/* Right Section */}
            <div className='flex items-center'>
                <button className='preferenceBtn group'>
                    <div className='h-4 w-4 text-grey font-bold text-lg'>
                        <AiOutlineSetting />
                    </div>
                    <div className='preferenceBtn-tooltip'>Settings</div>
                </button>

                <button className='preferenceBtn group'>
                    <div className='h-4 w-4 text-grey font-bold text-lg'>
                        <AiOutlineFullscreen />
                    </div>
                    <div className='preferenceBtn-tooltip'>Full Screen</div>
                </button>
            </div>
        </div>
    );
}
