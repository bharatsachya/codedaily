'use client'
import React, { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore'; 
import { firestore } from './firebase/firebase';
import Topbar from './components/topbar';
import ProblemTable from './components/problemstable/problemstable';

export default function Home() {
  const [loadingtable, setLoading] = useState(true);
  return (
    <>
      <main className='bg-gradient-to-t from-gray-900 to-gray-400 min-h-screen'>
        <Topbar ProblemPage={false} />
        <h1 className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium uppercase mt-10 mb-5'>
          &ldquo; QUALITY OVER QUANTITY &rdquo; 👇
        </h1>
       <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
       {loadingtable && (
          <div className='max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse'>
           {[...Array(10)].map((_, i) => (
              <LoadingSkeleton key={i} />
           ))}
          </div>
           )}
       </div>
        <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
          <table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
             {!loadingtable && ( <thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b'>
              <tr>
                <th scope='col' className='px-6 py-4 w-0 font-medium'>
                  Status
                </th>
                <th scope='col' className='px-6 py-4 w-0 font-medium'>
                  Title
                </th>
                <th scope='col' className='px-6 py-4 w-0 font-medium'>
                  Difficulty
                </th>
                <th scope='col' className='px-6 py-4 w-0 font-medium'>
                  Category
                </th>
                <th scope='col' className='px-6 py-4 w-0 font-medium'>
                  Solution
                </th>
              </tr>
            </thead>)
            }
            <ProblemTable setLoading = {setLoading}/>
          </table>
        </div>
      </main>
    </>
  );
}

const LoadingSkeleton = () => {
	return (
		<div className='flex items-center space-x-12 mt-4 px-6'>
			<div className='w-6 h-6 shrink-0 rounded-full bg-gray-800'></div>
			<div className='h-4 sm:w-52  w-32  rounded-full bg-gray-800'></div>
			<div className='h-4 sm:w-52  w-32 rounded-full bg-gray-800'></div>
			<div className='h-4 sm:w-52 w-32 rounded-full bg-gray-800'></div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};