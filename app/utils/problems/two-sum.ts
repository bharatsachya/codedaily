import assert from "assert";
import { Problem } from "../types/problems";

const starterCodeTwoSum = `function(twoSums(nums: number[], target: number): number[] {
        // Your code here
};` 

const handlerFunctionTwoSum = (fn:any) =>{
    try{
        const nums = [
            [2,7,11,15],
            [3,2,4],
            [3,3]
        ]
        const targets = [9,6,6]
        const answers = [
            [0,1],
            [1,2],
            [0,1]
        ]
        for(let i=0; i<nums.length; i++){
            assert.deepStrictEqual(fn(nums[i], targets[i]), answers[i])
        }
        return true;
    }
    catch(e:any){
        console.log('two sum handler function error')
        throw new Error(e);
    }
}
export const twoSum: Problem = {
  id: "two-sum",
  title: "1. Two Sum", 
  problemStatement: `<p class='mt-3'>
								Given an array of integers <code>nums</code> and an integer <code>target</code>, return
								<em>indices of the two numbers such that they add up to</em> <code>target</code>.
							</p>
							<p class='mt-3'>
								You may assume that each input would have <strong>exactly one solution</strong>, and you
								may not use thesame element twice.
							</p>
							<p class='mt-3'>You can return the answer in any order.</p>	`,
  constraints: `
							
								<li class='mt-2'>
									<code>2 ≤ nums.length ≤ 10</code>
								</li>

								<li class='mt-2'>
									<code>-10 ≤ nums[i] ≤ 10</code>
								</li>
								<li class='mt-2'>
									<code>-10 ≤ target ≤ 10</code>
								</li>
								<li class='mt-2 text-sm'>
									<strong>Only one valid answer exists.</strong>
								</li>
							`,
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
  starterCode: starterCodeTwoSum,
  handlerFunction: handlerFunctionTwoSum,
  starterFunctionName: 'function twoSums(nums: number[], target: number): number[] {'
};

