'use client'
import react from 'react'
import { AiFillLike,AiFillDislike } from 'react-icons/ai'
import { BiFontColor } from 'react-icons/bi'
import { BsCheck2Circle } from 'react-icons/bs'
import { TiStarOutline } from 'react-icons/ti'

const ProblemDescription = () =>{
   return <>
       <div className='bg-gradient-to-b from-gray-800 to-gray-600'>
            <div className='flex h-11 w-full items-center pt-2 text-white bg-slate-500 overflow-x-hidden'>
                <div className='bg-gradient-to-b from-gray-800 to-gray-600 p-1rounded-t-[5px] p-5 py-[10px] text-sm cursor-pointer'>
                    Description
                </div>
            </div>
        <div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto'>
            <div className='px-5'>
               <div className='flex space-x-4'>
               <div className='text-white font-medium text-lg mr-2 flex-1'>
                    1. Two Sum
                </div>
               </div>
               <div className='flex items-center mt-3 space-x-1 text-md'>
                  <div className='olive rounded-[21px] px-2.5 py-1 inline-block text-xs font-medium capitalize'>Easy</div>
                <div  className='rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-400 text-green-600'>
                    <BsCheck2Circle/>
                </div>
                <div className='flex items-center cursor-pointer hover:text-white rounded-p-[3px] ml-4 text-lg transition-colors duration-200 text-gray-600'>
                    <AiFillLike/>
                    <span className='text-sm'>120</span>
                </div>
                <div className='flex items-center cursor-pointer hover:text-white rounded-p-[3px] ml-4 text-lg transition-colors duration-200 text-gray-600'>
                    <AiFillDislike/>
                    <span className='text-sm'>2</span>
                </div>
                <div className='cursor-pointer hover:bg-gray-800 rounded-p-[3px] ml-4 text-xl transition-colors duration-200 text-green-400 text-gray-800'>
                    <TiStarOutline/>
                </div>
               </div>
               <div className='text-white text-sm'>
							<p className='mt-3'>
								Given an array of integers <code>nums</code> and an integer <code>target</code>, return
								<em>indices of the two numbers such that they add up to</em> <code>target</code>.
							</p>
							<p className='mt-3'>
								You may assume that each input would have <strong>exactly one solution</strong>, and you
								may not use thesame element twice.
							</p>
							<p className='mt-3'>You can return the answer in any order.</p>			
                        </div>
                        <div className='mt-4'>
			
							<div>
								<p className='font-medium text-white '>Example 1: </p>
								<div className='example-card'>
									<pre>
										<strong className='text-white'>Input: </strong> nums = [2,7,11,15], target = 9{" "}
										<br />
										<strong>Output:</strong> [0,1] <br />
										<strong>Explanation:</strong>Because nums[0] + nums[1] == 9, we return [0, 1].
									</pre>
								</div>
							</div>

							
							<div>
								<p className='font-medium text-white '>Example 2: </p>
								<div className='example-card'>
									<pre>
										<strong className='text-white'>Input: </strong> nums = [3,2,4], target = 6{" "}
										<br />
										<strong>Output:</strong> [1,2] <br />
										<strong>Explanation:</strong>Because nums[1] + nums[2] == 6, we return [1, 2].
									</pre>
								</div>
							</div>
							<div>
								<p className='font-medium text-white '>Example 3: </p>
								<div className='example-card'>
									<pre>
										<strong className='text-white'>Input: </strong> nums = [3,3], target = 6
										<br />
										<strong>Output:</strong> [0,1] <br />
									</pre>
								</div>
							</div>
						</div>
                        <div className='my-5'>
							<div className='text-white text-sm font-medium'>Constraints:</div>
							<ul className='text-white ml-5 list-disc'>
								<li className='mt-2'>
									<code>2 ≤ nums.length ≤ 10</code>
								</li>

								<li className='mt-2'>
									<code>-10 ≤ nums[i] ≤ 10</code>
								</li>
								<li className='mt-2'>
									<code>-10 ≤ target ≤ 10</code>
								</li>
								<li className='mt-2 text-sm'>
									<strong>Only one valid answer exists.</strong>
								</li>
							</ul>
						</div>
                        <div className='text-white bg-gray-500 p-2 text-center'>
                            Discussion
                        </div>
            </div>
        </div>     
      </div>
   </>
}

export default ProblemDescription