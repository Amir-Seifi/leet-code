// 67. Add Binary

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  return numToBinary(binaryToNum(a) + binaryToNum(b));
};

/**
 *
 * @param {string} str
 * @returns {number}
 */
const binaryToNum = (str) => {
  let result = 0;
  let j = str.length - 1;

  for (let i = 0; i < str.length; i++) {
    result += Number(str[i]) * 2 ** j;
    --j;
  }
  return result;
};

/**
 *
 * @param {number} num
 * @returns {string}
 */
const numToBinary = (num) => {
  if (num === 0) return "0";

  let binary = "";

  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }
  return binary;
};

// ----------

var addBinary = function (a, b) {
  a = a.split("").reverse().join("");
  b = b.split("").reverse().join("");
  len = a.length > b.length ? a.length : b.length;
  result = [];
  for (let i = 0; i < len; i += 1) {
    num1 = Number(a[i] || 0);
    num2 = Number(b[i] || 0);
    curr = Number(result[i] || 0) + num1 + num2;
    if (curr >= 2) {
      result[i] = curr % 2;
      result.push(1);
    } else {
      result[i] = curr;
    }
  }
  return result.reverse().join("");
};
