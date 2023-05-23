// https://leetcode.com/problems/contains-duplicate/
// Difficulty: Easy

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
  let hashmap = {};

  for (let number of nums) {
    if (!hashmap[number]) {
      hashmap[number] = 1;
    }
    else return true;
  }

  return false;
};

console.log('should return true:', containsDuplicate([1,2,3,1]))
console.log('should return false:', containsDuplicate([1,2,3,4]))
console.log('should return true:', containsDuplicate([1,1,1,3,3,4,3,2,4,2]))