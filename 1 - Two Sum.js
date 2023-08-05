/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // HashMap Solution

  const hashMap = new Map();

  for (i = 0; i < nums.length; i++) {
    let missingVal = target - nums[i];
    if (hashMap.get(missingVal)) {
      if (hashMap.get(missingVal).length > 1) {
        // If the value has more than 1 index
        let one = hashMap.get(missingVal)[0]; // Gets only the first index
        return [one, i];
      } else {
        return [hashMap.get(missingVal), i].flat(Infinity);
      }
    }
    let val = nums[i];
    if (hashMap.get(val)) {
      hashMap.set(val, [...hashMap.get(val), i]);
    } else {
      hashMap.set(val, [i]);
    }
  }

  return -1; // If going through the loop no array was returned then there is no answer
};
