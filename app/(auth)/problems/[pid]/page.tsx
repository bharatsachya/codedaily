import Topbar from '@/app/components/topbar';
import Workspace from '@/app/components/workspace/workspace';
import { problems } from '@/app/utils/problems';
import { notFound } from 'next/navigation';
import { Problem } from '@/app/utils/types/problems';

// Generate static paths for dynamic routes
export async function generateStaticParams() {
    const paths = Object.keys(problems).map((pid) => ({
        pid,
    }));
    return paths;
}

type ProblemPageProps = {
    params: { pid: string };
};

// The dynamic page component
const ProblemPage: React.FC<ProblemPageProps> = ({ params }) => {
    const { pid } = params;
    const problem: Problem | undefined = problems[pid];

    // If the problem is not found, trigger the 404 page
    if (!problem) {
        notFound();
    }

    console.log(problem);  // This will log the problem to the terminal if server-side or browser if client-side.
    problem.handlerFunction = problem.handlerFunction.toString();
    return (
        <>
            <Topbar ProblemPage={true} />
            <Workspace problem = {problem}/>
        </>
    );
};

export default ProblemPage;
