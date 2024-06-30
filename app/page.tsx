'use client'
import Image from "next/image";
import React from 'react';
import Link from 'next/link';
import Navbar from "./components/navbar";
import Topbar from "./components/topbar";
import { auth } from "./firebase/firebase";
import { useSignOut } from "react-firebase-hooks/auth";
import ProblemTable from "./components/problemstable/problemstable";
export default function Home() {
  return (
   <>
    <main className="bg-gradient-to-t from-gray-900 to-gray-400 min-h-screen">
  <Topbar ProblemPage={false}/>
    <h1
  className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium uppercase mt-10 mb-5'>
    &ldquo; QUALITY OVER QUANTITY &rdquo; 👇
  </h1>

  <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
  <table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
    <thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b '>
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
    </thead>
    <ProblemTable/>
  </table>  
  </div>
    </main>
   </>
  );
}
