// 2620. Counter

/**
 * @param {number} num
 * @return {Function} counter
 */

var createCounter = function (num) {
  return function () {
    return ++num - 1;
  };
};
