'use client'
import { Problem } from '@/app/utils/types/problems';
import react from 'react'
import { AiFillLike,AiFillDislike } from 'react-icons/ai'
import { BiFontColor } from 'react-icons/bi'
import { BsCheck2Circle } from 'react-icons/bs'
import { TiStarOutline } from 'react-icons/ti'

type ProblemDescriptionProps = {
	problem: Problem
}
const ProblemDescription:React.FC<ProblemDescriptionProps> = ({problem}) =>{
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
                    {problem.title}
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
						<div dangerouslySetInnerHTML={{ __html:problem.problemStatement}}/>
                        </div>
                        <div className='mt-4'>
			             {problem.examples.map((example,index) => (
							<div key={example.id}>
							<p className='font-medium text-white'>Example {index+1}: </p>
							{example.img && <img src={example.img} alt='example' className='mt-3 '/>}
							<div className='example-card'>
								<pre>
									<strong className='text-white'>Input: </strong> {example.inputText}<br />
									<strong>Output:</strong>{example.outputText}<br />
									
									{
										example.explanation && (
											<>
											  <br />
											  <strong>Explanation:</strong>{example.explanation}
											</>
										)
									}
								</pre>
							</div>
						</div>

						 ))}
							
							
						</div>
                        <div className='my-5'>
							<div className='text-white text-sm font-medium'>Constraints:</div>
							<ul className='text-white ml-5 list-disc'>
							<div dangerouslySetInnerHTML={{ __html:problem.constraints}}/>
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