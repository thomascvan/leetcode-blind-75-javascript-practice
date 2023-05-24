// https://leetcode.com/problems/maximum-subarray/
// Difficulty: Medium

// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
  let maxSum = nums[0]; // Initialize maxSum with the first element
  let currentSum = nums[0]; // Initialize currentSum with the first element

  for (let i = 1; i < nums.length; i++) {
    // Check if including the current element in the subarray gives a larger sum
    // or starting a new subarray with the current element would be better
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // Update the maximum sum found so far
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

console.log('should return 6:', maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log('should return 1:', maxSubArray([1]))
console.log('should return 23:', maxSubArray([5,4,-1,7,8]))
console.log('should return 3:', maxSubArray([1,2]))