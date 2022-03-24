/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    squaredArray = nums.map(num => num*num);
    sortedArray = squaredArray.sort((a,b) => a-b);
    console.log(sortedArray);
    return sortedArray;
};