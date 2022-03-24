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
    
    return function(n) {
        let L = 1;
        let R = n;
        let mid = Math.floor((R+L)/2);
        
        while(L < R+1) { //this is actually still a binary search problem, although there are no arrays
            if (isBadVersion(mid) && !isBadVersion(mid-1)) { //so only if mid is bad and the version before it is NOT bad then can we say mid is the first bad version
                return mid;
                
            } else if (isBadVersion(mid)) { //although we have found the mid to be a bad version that doesn't mean this is the FIRST bad version 
                R = mid - 1;
                mid = Math.floor((R+L)/2);
            } else { //if we haven't found the bad version yet then keep going
                L = mid + 1;
                mid = Math.floor((R+L)/2);
            }
        }
        //we can actually solve this whole problem using only binary search, and not just doing two iterations
    };
};