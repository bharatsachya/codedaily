import assert from "assert";
import { Problem } from "../types/problems";

export const twoSum: Problem = {
  id: "two-sum",
  title: "1. Two Sum", 
  problemStatement: '',
  constraints: '',
  examples:[{
      id:1,
        inputText:'twoSums([2, 7, 11, 15], 9)',
        outputText:'[0, 1]',
        img:'',
        explanation:''
  },{
        id:2,
            inputText:'twoSums([3,2,4], 6)',
            outputText:'[1, 2]',
            img:'',
            explanation:''
  },{
        id:3,
            inputText:'twoSums([3,3], 6)',
            outputText:'[0, 1]',
            img:'',
            explanation:''
  }],
  order: 1,
  starterCode: '',
  handlerFunction: ()=>true,
  starterFunctionName: ''
};


export function twoSums(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }
  return [];
}

assert.deepStrictEqual(twoSums([2, 7, 11, 15], 9), [0, 1]);