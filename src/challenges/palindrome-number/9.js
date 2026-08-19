/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const strX = x.toString();
  let result = "";

  for (let i = strX.length - 1; i >= 0; i--) {
    result += strX[i];
  }

  return strX === result;
};
