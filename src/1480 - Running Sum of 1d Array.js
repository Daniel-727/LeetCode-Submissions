/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let output = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    output.push(sum);
  }

  return output;
};
