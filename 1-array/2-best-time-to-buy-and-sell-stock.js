// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.


// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 1) {
    return 0;
  };

  var left = prices[0];
  var right = prices[1];
  for (let i = 0; i < prices.length; i++) {
    // if (prices[i+1] === undefined && left >= right) {
    //   return 0
    // }
    if (prices[i] < left) {
      left = prices[i];
      if (prices[i+1] === undefined) {
        return 0
      }
      right = prices[i+1]
    }
    if (right < left) {
      left = right;
    }
    if (prices[i+1] > right) {
      right =  prices[i+1];
    }
    // console.log(left, right)
  }
  if (right > left) {
    return (right - left)
  } else {
    return 0;
  }
};

console.log('should return 5:', maxProfit([7,1,5,3,6,4]));
console.log('should return 0:', maxProfit([7,6,4,3,1]));
console.log('should return 2:', maxProfit([2,1,2,1,0,1,2]));
console.log('should return 0:', maxProfit([7,6,4,3,1]));
console.log('should return 2:', maxProfit([2,4,1]));