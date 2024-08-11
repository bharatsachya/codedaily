import React from 'react';
import Split from 'react-split';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import PlayGround from '@/app/components/workspace/playground/playground';
const Workspace = () => {
    return (
      <>
        <Split className='split' minSize={0}>
            <ProblemDescription />
            <PlayGround/>
        </Split>
      </>
    );
}

export default Workspace;
