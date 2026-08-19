// 1684. Count the Number of Consistent Strings

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let counter = words.length;
  let allowedSet = new Set(allowed);

  for (word of words) {
    for (char of word) {
      if (!allowedSet.has(char)) {
        counter--;
        break;
      }
    }
  }
  return counter;
};
