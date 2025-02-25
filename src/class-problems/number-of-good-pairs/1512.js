// 1512. Number of Good Pairs

/**
 * @param {number[]} nums
 * @return {number}
 */

var numIdenticalPairs = function (nums) {
  let gPairs = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        gPairs += 1;
      }
    }
  }
  return gPairs;
};
