import { useSetRecoilState } from "recoil";
import { authModalState } from "@/app/atom/authModalAtom";
import { useRecoilValue } from "recoil";
export default function SignOut() { 
   
  return <>
       

<button className='ml-2'>
<div className='flex '>
<div className='bg-violet-400 p-1 px-2 hover:bg-white hover:text-black transition duration-300 ease-in-out'>
    SignOut
</div>

</div>
</button>
  
  </>
}