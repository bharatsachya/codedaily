import react from 'react'
import { BsChevronUp } from 'react-icons/bs'
export default function EditorFooter(){
   return(
    <div className='flex b absolute bottom-0 z-10 w-full'>
	<div className='mx-5 my-[10px] flex justify-between w-full'>
		<div className='mr-2 flex flex-1 flex-nowrap items-center space-x-4'>
			<button className='text-white px-3 py-1.5 font-medium items-center transition-all inline-flex fk text-sm hover:bg-gray-400 text-dark-label-2 rounded-lg pl-3 pr-2'>
				Console
				<div className='ml-1 transform transition flex items-center'>
					<BsChevronUp className='fill-gray-6 mx-1 fill-dark-gray-6' />
				</div>
			</button>
		</div>
		<div className='ml-auto flex items-center space-x-4'>
			<button className='px-3 py-1.5 text-sm font-medium items-center whitespace-nowrap transition-all focus:outline-none inline-flex fk text-white  hover:bg-gray-800 text-dark-label-2 rounded-lg'>
				Run
			</button>
			<button className='px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm text-white bg-green-600 hover:bg-green-800 rounded-lg'>
				Submit
			</button>
		</div>
	</div>
    </div>
   )
};

