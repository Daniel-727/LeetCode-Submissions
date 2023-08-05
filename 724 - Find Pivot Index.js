/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let left = 0;

  for (i = 0; i < nums.length; i++) {
    if (i == 0) {
      left = 0;
    } else {
      left += nums[i - 1];
    }
    let right = 0;
    for (j = i + 1; j < nums.length; j++) {
      right += nums[j];
    }

    /*console.log(`left sum: ${left}`);
        console.log(`right sum: ${right}`);*/

    if (left === right) {
      return i;
    }
  }
  return -1;
};
