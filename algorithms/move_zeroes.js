/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zeroCounter = 0;
  let newArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      newArr.push(nums[i]);
    } else {
      zeroCounter++;
    }
  }

  for (let i = 0; i < zeroCounter; i++) {
    newArr.push(0);
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = newArr[i];
  }
};
