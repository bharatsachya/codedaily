import React from 'react'
import Preference from './Preference/Preference'
import Split from 'react-split'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { cppLanguage } from '@codemirror/lang-cpp'
import EditorFooter from './editorfooter'
import { useState } from 'react'
import {Problem} from '@/app/utils/types/problems'
type PlaygroundProps = {
    problem:Problem
}

const Playground:React.FC<PlaygroundProps> = ({problem})  =>{
    const boilerPlate = `function twoSums(nums,target){
          //code here function
}`;  
    const [activeTestCase, setActiveTestCase] = useState<number>(0);
    return (

        
        <div className='flex flex-col b relative overflow-x-hidden'>
            <Preference/>
            <Split className='h-[calc(100vh-94px)]' direction='vertical' minSize={60} sizes={[60,40]}>
                <div className=' overflow-auto w-full text-white'>
                <CodeMirror value={problem.starterCode} 
                theme={vscodeDark} extensions={[javascript()]} style={{fontSize:16}}/>
                </div>
               <div className='w-full px-5 overflow-auto text-white'>
               <div className='flex items-center h-10 space-x-6'>
                <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                    <div className='text-sm font-medium leading-5'>
                        Test Cases
                    </div>
                    <hr className='absolute bg-white rounded-full bottom-0 h-0.5 w-12'/>
                </div>
               </div>
               <div className="flex">
                    {problem.examples.map((example,index) => (
                        <div onClick={()=>setActiveTestCase(index)}
                         key={example.id} className="mr-2 items-start mt-2 text-white">
                        <div className="flex flex-wrap items-center gap-y-4">
                               <div className={`font-medium items-center transition-all focus:outline-none inline-flex fk hover:bg-gray-700 relative rounded-lg px-4 py-1 cursor-pointer whitespace nowrap ${activeTestCase === index ? "text-white" : "text-gray-500"}`}>
                                  Case {index+1}
                               </div>
                        </div>
                        </div>
                        
                    ))}
                   
                   
               </div>
               <div className='font-semibold my-4'>
                   <p className='text-sm font-medium mt-4 text-white mr-4'>Input:</p>
                   <div className='w-full fk cursor-text rounded-lg border-black px-3 py-[10px] mt-2'>{problem.examples[activeTestCase].inputText}</div>
                   <p className='text-sm font-medium mt-4 text-white mr-4'>Output:</p>
                   <div className='w-full fk cursor-text rounded-lg border-black px-3 py-[10px] mt-2'>{problem.examples[activeTestCase].outputText}</div>
                             
               </div>
               </div>
            </Split>
            <div><EditorFooter/></div>
        </div>
    )
}
  
export default Playground