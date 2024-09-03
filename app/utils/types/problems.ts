export type Example = {
    id:number;
    inputText:string;
    outputText:string;
    img?:string;
    explanation?:string;
}
export type Problem = {
	id: string;
    title: string;
    problemStatement: string;
    constraints: string;
    examples: Example[];
    order: number;
    starterCode: string;
    handlerFunction: ((fn:any)=> boolean) | string;
    starterFunctionName: string;
};