/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const hashMap = new Map();

  for (i = 0; i < nums.length; i++) {
    if (hashMap.get(nums[i])) {
      return true;
    } else {
      hashMap.set(nums[i], 1);
    }
  }

  // If loop hasn't returned true then there are no duplicates and return false
  return false;
};
