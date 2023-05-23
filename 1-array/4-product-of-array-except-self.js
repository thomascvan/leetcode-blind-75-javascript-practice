// https://leetcode.com/problems/product-of-array-except-self/
// Difficulty: Medium

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.


// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

  // create 2 arrays that will hold the products of the array going from left and from right
  let leftProducts = new Array(nums.length).fill(1);
  let rightProducts = new Array(nums.length).fill(1);

  // loop through and fill products from left
  for (let i = 1; i < nums.length; i++) {
    leftProducts[i] = leftProducts[i-1] * nums[i-1]
  }

  // loop through and fill products from right
  for (let i = nums.length-2; i >= 0; i--) {
    rightProducts[i] = rightProducts[i+1] * nums[i+1]
  }

  // multiply to find solution
  for (let i = 0; i < nums.length; i++) {
    nums[i] = leftProducts[i] * rightProducts[i];
  }
  return nums
};

console.log('should return [24,12,8,6]:', productExceptSelf([1,2,3,4]))
console.log('should return [0,0,9,0,0]:', productExceptSelf([-1,1,0,-3,3]))