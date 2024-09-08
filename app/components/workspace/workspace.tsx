"use client"
import React from 'react';
import Split from 'react-split';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import PlayGround from '@/app/components/workspace/playground/playground';
import {Problem} from '@/app/utils/types/problems';
type workspaceProps = {
    problem: Problem
}
const Workspace:React.FC<workspaceProps> = ({problem}) => {
    return (
      <>
        <Split className='split' minSize={0}>
            <ProblemDescription problem={problem}/>
            <PlayGround problem={problem}/>
        </Split>
      </>
    );
}

export default Workspace;
