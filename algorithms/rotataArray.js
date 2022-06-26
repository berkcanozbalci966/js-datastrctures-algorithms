var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    shiftArray(nums);
  }

  return nums;
};

function shiftArray(arr) {
  const tmp = [];
  for (let i = 0 - 1; i < arr.length; i++) {
    if (i === arr.length - 1) {
      tmp[0] = arr[i];
      continue;
    }

    tmp[i + 1] = arr[i];
  }

  arr = tmp;
}

let nums = [1, 2, 3, 4, 5, 6, 7];

console.log(rotate(nums, 3));

console.log(nums);
