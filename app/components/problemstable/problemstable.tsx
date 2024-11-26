import { problems,DBProblem } from "@/app/mockProblems/problem"
import react, { use, useEffect, useState } from "react"
import { LuPanelTopClose } from "react-icons/lu";
import { BsCheckCircle } from "react-icons/bs";
import Link from 'next/link'
import { AiFillYoutube } from "react-icons/ai";
import { GiClosedBarbute } from "react-icons/gi";
import { LuTimer } from "react-icons/lu";

type ProblemTableProps = {
    setLoading : React.Dispatch<React.SetStateAction<boolean>>
}

import YouTube from 'react-youtube';
import React from "react";
import { collection, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import { firestore } from "@/app/firebase/firebase";
import { Anybody } from "next/font/google";
const ProblemTable:React.FC<ProblemTableProps> = ({setLoading}) => {
   const [youtube, setYoutube] = react.useState({
    isOpen: false,
    videoId: ""
   })
   useEffect(()=>{
        window.addEventListener('keydown', (e:KeyboardEvent)=>{
            if(e.key === 'Escape'){
                setYoutube({isOpen:false,videoId:""})
            }
        })
   },[])
   const problems = useGetProblems(setLoading);
  return <>
      <tbody className="text-white">
    {
        problems.map((problem,idx)=>{
            const difficultyColor = problem.difficulty === 'Easy' ? 'text-green-500' : problem.difficulty === 'Medium' ? 'text-yellow-500' : 'text-red-500'
            return(
                <tr className={`${idx%2==0 ? 'bg-gray-700' :''}`}  key={problem.id}>
                    <td className="px-2 py-4 font-sans text-sm whitespace-nowrap text-green-400 ">
                        <BsCheckCircle fontSize={"19"} width="18"/>
                    </td>
                    <td className="px-6 py-4">
                        {problem.link ? (
                         <Link href = {problem.link} className="hover:text-blue-600 " target="_blank">
                           {problem.title}
                         </Link>
                        ):
                        (<Link className="hover:text-blue-600 " href={`/problems/${problem.id}`}>
                            {problem.title} 
                        </Link>)}
                    </td>
                    <td className={`px-6 py-4 ${difficultyColor}`}>
                    {problem.difficulty}
                    </td>
                    <td className="px-6 py-4">
                    {problem.category}
                    </td>
                    <td className="px-6 py-4">
                      {problem.videoId? (<AiFillYoutube className="hover:text-red-600 ease-in ease-out" 
                      onClick={()=>setYoutube({isOpen:true, videoId:problem.videoId as string})}
                      fontSize={"28"}/>):
                      (<p className="text-gray-400"
                     >Coming soon</p>)}
                    </td>
                </tr>
            )
        })
    }
</tbody>
   {youtube.isOpen && (<tfoot className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
        <div className="bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute"></div>
        <div className="W-full z-50 h-full px-6 relative max-w-4xl">
            <div className="w-full h-full flex items-center jutify-center relative">
                <div className="w-full relative">
                    <GiClosedBarbute fontSize={"35"} className="absolute top-0 right-0 absolute" onClick={()=>{setYoutube({isOpen:false,videoId:""})}}/>
                    <YouTube videoId={youtube.videoId} loading="lazy" iframeClassName="min-w-[700px] min-h-[500px]"/>
                </div>
            </div>
        </div>
    </tfoot>)}
 </>  
};

export default ProblemTable

const useGetProblems = (setLoading:React.Dispatch<React.SetStateAction<boolean>>) =>{
    const [problems,setProblem] = useState<DBProblem[]>([])
    useEffect(()=>{
        const getProblem = async() =>{
            setLoading(true)
            const q = query(collection(firestore,"problems"),orderBy("order","asc"))
            const querySnapshot = await getDocs(q)
            const tmp:any = []
            querySnapshot.forEach((doc)=>{
                tmp.push({id:doc.id,...doc.data()})
            })
            setProblem(tmp)
            setLoading(false)
        }
            getProblem()
    },[setLoading])
    return problems      
}