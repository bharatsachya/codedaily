import { Problem } from "../types/problems";
import { jumpGame } from "./jump-game";
import { reverseLinkedList } from "./reverse-linked-list";
import { twoSum } from "./two-sum";
import { validParentheses } from "./valid-paranthesis";
import { search2DMatrix } from "./search-a-2d-matrix";

interface ProblemMap {  [key: string]: Problem; }

export const problems: ProblemMap = {
    "two-sum": twoSum,
    "valid-parentheses": validParentheses,
    "jump-game": jumpGame,
    "reverse-linked-list": reverseLinkedList,
    "search-a-2d-matrix": search2DMatrix,
}