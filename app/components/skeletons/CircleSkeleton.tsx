const CircleSkeleton = () => {
  return <>
    <div className='animate-pulse flex space-y-2.5'>
        <div className="flex items-center w-full space-x-2">
           <div className="h-6 w-12 rounded-full bg-gray-500"></div>
        </div>
    </div>
  </>
}

export default CircleSkeleton