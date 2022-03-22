/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    //very easy, just trying to solve the problem, not worrying about time complexity
    /*let x = -1; //I don't think this is best practice, to initialize a variable outside of the loop
    for(i = 0; i < nums.length; i++) { //for loop goes through every index of nums
        
        if(nums[i] === (target)) { //if there is an integer in the nums array that is equal to the target, then we do something
            x = i; //if we find the target, we want to return the index of where we found the target
        }
    }
    return x;
    
    
    //Using a very simple indexOf
    //return nums.indexOf(target); //indexOf function automatically returns the index of the target if the target is in nums, and also returns -1 if it is not
    
    The for loop and indexOf solutions both use linear search*/
    
    //ATTEMPT WITH BINARY SEARCH ALGORITHM
    
    //nums is the array
    //target is the target
    
    let L = 0; //L is at index 0
    let R = nums.length -1; //R is at the last index of array nums
    let mid = Math.floor((L + R)/2);
    
    while(!(L>R)){ //as long as L is not greater than R, because in the case that L and R are equal, mid could still be the correct answer
        if(target === nums[mid]){ //if the target is equal to the numer at the middle index then we found the index where the target number is
            return mid;
        } else if (target > nums[mid]){ //if the target is greater then
            L = mid + 1;
            mid = Math.floor((L + R)/2);
        } else {
            R = mid - 1;
            mid = Math.floor((L + R)/2);
        }
    }
    // we only reach here if the target was not found in the array, and if the target isn't in the array we return -1;
    return -1;
    
};