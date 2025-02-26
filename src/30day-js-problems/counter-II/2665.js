// 2665. Counter II

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let currentCount = init;

  function increment() {
    return ++currentCount;
  }
  function decrement() {
    return --currentCount;
  }
  function reset() {
    return (currentCount = init);
  }
  return { increment, decrement, reset };
};
