"use strict";
function isPalindrome(s) {
    const valid = s.toLowerCase();
    let newStr = ""; // Javascript strings are immutable
    for (let i = 0; i < valid.length; i++) {
        if (valid.charCodeAt(i) < 48 ||
            (valid.charCodeAt(i) > 57 && valid.charCodeAt(i) < 97) ||
            valid.charCodeAt(i) > 122) {
        }
        else {
            newStr += valid[i];
        }
    }
    let start = 0;
    let end = newStr.length - 1;
    while (start <= end) {
        if (newStr[start] !== newStr[end]) {
            return false;
        }
        start += 1;
        end -= 1;
    }
    return true; // If we get past the previous loop without returning false, then the string is a palindrome
}
