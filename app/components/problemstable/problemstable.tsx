import { problems } from "@/app/mockProblems/problem"
import react, { useEffect } from "react"
import { LuPanelTopClose } from "react-icons/lu";
import { BsCheckCircle } from "react-icons/bs";
import Link from 'next/link'
import { AiFillYoutube } from "react-icons/ai";
import { GiClosedBarbute } from "react-icons/gi";
import { LuTimer } from "react-icons/lu";

import YouTube from 'react-youtube';
const ProblemTable = () => {
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
  return <>
      <tbody className="text-white">
    {
        problems.map((doc,idx)=>{
            const difficultyColor = doc.difficulty === 'Easy' ? 'text-green-500' : doc.difficulty === 'Medium' ? 'text-yellow-500' : 'text-red-500'
            return(
                <tr className={`${idx%2==0 ? 'bg-gray-700' :''}`}  key={doc.id}>
                    <td className="px-2 py-4 font-sans text-sm whitespace-nowrap text-green-400 ">
                        <BsCheckCircle fontSize={"19"} width="18"/>
                    </td>
                    <td className="px-6 py-4">
                        <Link className="hover:text-blue-600 " href={`/problems/${doc.id}`}>
                            {doc.title}
                        </Link>
                    </td>
                    <td className={`px-6 py-4 ${difficultyColor}`}>
                    {doc.difficulty}
                    </td>
                    <td className="px-6 py-4">
                    {doc.category}
                    </td>
                    <td className="px-6 py-4">
                      {doc.videoId? (<AiFillYoutube className="hover:text-red-600 ease-in ease-out" 
                      onClick={()=>setYoutube({isOpen:true, videoId:doc.videoId as string})}
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

