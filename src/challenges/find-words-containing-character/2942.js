// 2942. Find Words Containing Character

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  let result = new Set();

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        result.add(i);
      }
    }
  }
  return Array.from(result);
};
