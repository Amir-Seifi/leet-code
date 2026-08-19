// 20. Valid Parentheses

/**
 * @param {string} s
 * @returns {boolean}
 */
const isValid = (str) => {
  const stacks = [];
  const brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (char of str) {
    if (Object.values(brackets).includes(char)) {
      stacks.push(char);
    } else if (brackets[char] !== stacks.pop()) {
      return false;
    }
  }
  return stacks.length === 0;
};
