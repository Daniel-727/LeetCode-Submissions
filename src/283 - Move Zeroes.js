/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//we are getting an error because we are splicing and changing the array, so if there's a 0 at index 0 we splice it and then there will be a new element at index 0 which we skip because the for loop will then go to index 1
var moveZeroes = function(nums) {
    
    let count = 0;
    
    while (nums.indexOf(0) !== -1){ //while you can still find a 0 in the nums array
        
        let i = nums.indexOf(0); //find the index of the 1st 0
        nums.splice(i,1); //modify the array so the 0 is gone and therefore there is either no 0s left or there is another 0 somewhere
        count++; //add to the count whenever we splice a 0 from nums
    }
    
    for (i=0; i < count; i++){ 
        nums.push(0);
    }
    
    console.log(count);
    console.log(nums);
};