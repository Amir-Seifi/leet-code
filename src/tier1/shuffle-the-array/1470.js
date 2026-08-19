// 1470. Shuffle the Array

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const firstSlice = nums.slice(0, n);
  const lastSlice = nums.slice(n, 2 * n);
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(firstSlice[i], lastSlice[i]);
  }
  return result;
};
