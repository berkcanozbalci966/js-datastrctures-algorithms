/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let newNums = nums;
  for (let i = 0; i < newNums.length; i++) {
    for (let j = newNums.length - 1; j > i; j--) {
      if (newNums[i] == newNums[j]) {
        newNums.splice(j, 1);
      }
    }
  }
  nums = newNums;
};
