export type DBProblem = {
	uid: string;
	id: string;
	title: string;
	difficulty: string;
	category: string;
	order: number;
	videoId?: string;
	link?:string;
	likes:number,
	dislikes:number
};