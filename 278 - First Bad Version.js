/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    
    //binary search would still work here wouldn't it? it's not exactly "ranked", but we do know that all the good versions would be on the left side and the bad versions on the right, but this isn't an array, we only know the number n versions that we have
    
    //console.log(isBadVersion(4));
    
    return function(n) { 
        
        //"binary search" here would just split the versions in half if we find mid to be a bad version on the first iteration, then we'd just search for the first bad version from 1 to n/2.
        //if we haven't found a bad version at mid during the first iteration, we can do another iteration and split half of the versions into quarters and if there is a bad mid then we can search in the first quarter, and if not, then we can search in the 2nd quarter.
        
        let L = 1;
        let R = n;
        let mid = Math.floor((L + R)/2);
        let count;
        
        for(i = 1; i < 3; i++){
            count = i;
            if (isBadVersion(mid)) {//if the mid is a bad version in the 1st iteration then
                break; 
            } else {
                if (count === 2) { //if we haven't found a bad version after two iterations just break out of the loop         
                    count = 3;//set count to be 3 so we can distinguish between finding a bad version or not finding a bad version
                    break;
                }
                L = mid + 1;
                mid = Math.floor((L + R)/2);
            }
        } //at this point there are 3 paths, first count was 1 and we found a bad verion after the 1st iteration. second, count is 2 and we found a bad version after the 2nd iteration, or lastly, count is also 2 but we set it to 3, and we didn't find a bad version
        console.log(count);
        if(count !== 3) {//if mid was a bad version during 2 iterations then
            for (i = L; i < mid + 1; i++) {
                if (isBadVersion(i)) {
                    return i;
                }
            } 
        } else {
            for (i = mid + 1; i < R + 1; i++) {
                if (isBadVersion(i)) {
                    return i;
                }
            }
        }
        // after doing binary search twice for a bad version, there are a few possibilities
        //1. we found mid to be a bad version and we broke out of the for loop
        //2. we didn't find a bad version and didn't break out of the for loop and the first bad version is still to the right of mid
        //this solution got accepted, but it's pretty inefficient.
        
    };
};