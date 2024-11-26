'use client'
import { auth } from '@/app/firebase/firebase';
import { Problem } from '@/app/utils/types/problems';
import react from 'react'
import { AiFillLike,AiFillDislike } from 'react-icons/ai'
import { BiFontColor } from 'react-icons/bi'
import { BsCheck2Circle } from 'react-icons/bs'
import { TiStarOutline } from 'react-icons/ti'
import { useState } from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
import { doc, runTransaction } from 'firebase/firestore';
import { firestore } from '@/app/firebase/firebase';
import { getDoc } from 'firebase/firestore';
import { DBProblem } from '@/app/mockProblems/problem';
import  RectangleSkeleton  from '@/app/components/skeletons/RectangularSkeleton';
import  CircleSkeleton  from '@/app/components/skeletons/CircleSkeleton';
import { authModalState } from '@/app/atom/authModalAtom';
import { useAuthState } from 'react-firebase-hooks/auth';
import {toast} from 'react-toastify'
type ProblemDescriptionProps = {
	problem: Problem
}

const ProblemDescription:React.FC<ProblemDescriptionProps> = ({problem}) =>{
    const { currentProblem, loading, problemDifficultyClass, setCurrentProblem } = useGetCurrentProblem(problem.id);
    const {liked,disliked,starred,solved,setData} = useGetUserDataProblem(problem.id)
	const [user] = useAuthState(auth)
    const handleLike = async() =>{
	   if(!user){
		toast.error("you must be logged in to like problem",{position:"top-left",theme:"dark"})
		return ;
	   }
	   await runTransaction(firestore,async (transaction)=>{
           const userRef = doc(firestore,"users",user.uid)
		   const problemRef = doc(firestore,"problems",problem.id)
		   const userDoc = await transaction.get(userRef)
		   const problemDoc = await transaction.get(problemRef)

		   if(liked){
			  transaction.update(userRef,{
				likedPro: userDoc.data()?.likedPro?.filter((id:string)=>id!=problem.id) || []
			  })
			  transaction.update(problemRef,{
				likes: (problemDoc.data()?.likes || 0) - 1
			  })
			  setData(prev=>({...prev,liked:false}))
			  setCurrentProblem(prev => {
				  if (prev && prev.likes !== undefined) {
					  return { ...prev, likes: prev.likes - 1 };
				  }
				  return prev;
			  });
		   }
		   else if(disliked){
			transaction.update(userRef,{
				likedPro: [...(userDoc.data()?.likedPro || []), problem.id],
				dislikedPro: userDoc.data()?.dislikedPro?.filter((id:string)=>id!==problem.id) || []
			})
			transaction.update(problemRef,{
				likes: (problemDoc.data()?.likes || 0) + 1,
				dislikes: (problemDoc.data()?.dislikes || 0) - 1
			})
			setCurrentProblem(prev => {
				if (prev) {
					return { ...prev, likes: prev.likes + 1, dislikes: prev.dislikes - 1 };
				}
				return prev;
			});
			setData(prev=>({...prev,liked:true,disliked:false}))
		   }
		   else{
			transaction.update(userRef,{
				likedPro: [...(userDoc.data()?.likedPro || []), problemRef]

			})
			transaction.update(problemRef,{
				likes: problemDoc.data()?.likes + 1
			})
			setCurrentProblem(prev => {
				if (prev) {
					return { ...prev, likes: prev.likes + 1 };
				}
				return prev;
			})
			setData(prev=>({...prev,liked:true}))
		   }
	   })
	}

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
               {!loading && currentProblem && (<div className='flex items-center mt-3 space-x-2.5 text-md'>
               <div className={`${problemDifficultyClass}`}>{currentProblem.difficulty}</div>)

                <div  className='rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-600'>
                    <BsCheck2Circle/>
                </div>
                <div onClick={handleLike} className='flex items-center cursor-pointer hover:text-white rounded-p-[3px] ml-4 text-lg transition-colors duration-200 text-gray-600'>
                     {liked && (<AiFillLike className='text-blue-800 '/>)}
					 {!liked && (<AiFillLike/>)}
                    <span className='text-sm'>120</span>
                </div>
                <div className='flex items-center cursor-pointer hover:text-white rounded-p-[3px] ml-4 text-lg transition-colors duration-200 text-gray-600'>
                    <AiFillDislike/>
                    <span className='text-sm'>2</span>
                </div>
                <div className='cursor-pointer hover:bg-gray-800 rounded-p-[3px] ml-4 text-xl transition-colors duration-200 text-gray-800'>
                    <TiStarOutline/>
                </div>
               </div>)}
               
			   {loading && (
				<div className='mt-3 flex space-x-2 text-sm'>
				   
				   
				   <CircleSkeleton/>
                   <RectangleSkeleton/>
				   <CircleSkeleton/>
				   <CircleSkeleton/>
				   <RectangleSkeleton/>
				   
				 
				</div>
			   )}
               <div className='text-white text-sm'>
						<div dangerouslySetInnerHTML={{ __html:problem.problemStatement}}/>
                        </div>
                        <div className='mt-4'>
			             {problem.examples.map((example,index) => (
							<div key={example.id}>
							<p className='font-medium text-white'>Example {index+1}: </p>
							{example.img && <Image src={example.img} alt='example' className='mt-3 '/>}
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


function useGetCurrentProblem(problemId: string) {
	const [currentProblem, setCurrentProblem] = useState<DBProblem | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [problemDifficultyClass, setProblemDifficultyClass] = useState<string>("");
    

	useEffect(() => {
		// Get problem from DB
		const getCurrentProblem = async () => {
			setLoading(true);
			const docRef = doc(firestore, "problems", problemId);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				const problem = docSnap.data();
				setCurrentProblem({ id: docSnap.id, ...problem } as DBProblem);
				// easy, medium, hard
				setProblemDifficultyClass(
					problem.difficulty === "Easy"
						? "text-green-500"
						: problem.difficulty === "Medium"
						? "text-yellow-500"
						: " text-red-500"
				);
			}
			setLoading(false);
		};
		getCurrentProblem();
	}, [problemId]);

	return { currentProblem, loading, problemDifficultyClass, setCurrentProblem };
}

const useGetUserDataProblem = (problemId:string) =>{
	const [data,setData] = useState({liked:false,disliked:false,starred:false,solved:false})
	const [user] = useAuthState(auth) 
	useEffect(()=>{
      const GetUserDataProblem = async()=>{
        const useRef  = doc(firestore,"users",user!.uid)
        const userSnap = await getDoc(useRef)
        if(userSnap.exists()){
			const data = userSnap.data()
			const {solvedProblems,likedPro,dislikedPro,starredPro} = data;
			setData({
				liked:likedPro.includes(problemId),
				disliked:dislikedPro.includes(problemId),
				solved:solvedProblems.includes(problemId),
				starred:starredPro.includes(problemId)
			})

		}
	  }
	  if(user){
		GetUserDataProblem()
	  }
      return()=>setData({liked:false,disliked:false,starred:false,solved:false})
	},[problemId,user])

	return {...data,setData}
}




export default ProblemDescription

