/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  return compareNumbers(x);
};

function compareNumbers(x) {
  let y = String(x).split("").reverse().join("");
  return x == y;
}
