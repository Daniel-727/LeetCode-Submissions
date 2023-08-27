/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let L = 0;
    let R = nums.length -1;
    let mid = Math.floor((R+L)/2);
    
    while (L < R + 1) {
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            L = mid + 1;
            mid = Math.floor((R+L)/2);
        } else {
            R = mid - 1;
            mid = Math.floor((R+L)/2);
        }
    }
    //if at the end of the loop target was not found then we need to return the index where target would have been in the array which I believe would be mid + 1
    return mid + 1;
    
};