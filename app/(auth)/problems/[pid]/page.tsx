"use client"
import Topbar from '@/app/components/topbar'
import Workspace from '@/app/components/workspace/workspace'
export default function Home() {   
    return <div>
           <Topbar ProblemPage={true}/>
           <Workspace/>
    </div>
}