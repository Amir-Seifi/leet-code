// 2623. Memoize

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const output = new Map();

  return function (...args) {
    const strArg = JSON.stringify(args);

    if (output.has(strArg)) {
      return output.get(strArg);
    } else {
      output.set(strArg, fn(...args));
      return output.get(strArg);
    }
  };
}
