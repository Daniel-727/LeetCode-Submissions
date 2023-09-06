"use strict";
// Study this solution
/* Takeaways

use npx tsc to compile typescript into javascript code

1. object keys can only be string or number.
2. [key: string]: string[], this syntax means that the object will have keys of type string and values of type string array
3. Object.keys(obj) enumerates through the keys of the object obj

/* javascript Array.includes returns true for empty string
 str = "haha" str.includes("") will return true */
function groupAnagrams(strs) {
    // Creating a hashtable by using an object
    // This hashtable object's key is an array of strings, yes you can make a key an array and it is initialized as an empty object. Not quite sure why it's not giving errors that the object has no key or value
    const hash = {}; // Const declarations must be initialized
    strs.forEach((str) => {
        let doesExist = false;
        Object.keys(hash).forEach((key) => {
            console.log(key);
            /* if (isAnagram(str, key)) {
              //What key are we inputting for the isAnagram function?
              hash[key].push(str);
              doesExist = true;
            } */
        });
        if (!doesExist) {
            hash[str] = [str];
        }
    });
    /* console.log(`hash: ${JSON.stringify(hash)}`); */
    return [...Object.keys(hash).map((k) => hash[k])];
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
/* strs = ["eat","tea","tan","ate","nat","bat"] */
// Study this function next
/* function isAnagram(s: string, t: string) {
  if (s.length !== t.length) return false;

  var first: Array<string | null> = s.split(""); // First will be an array of string of an empty array

  const second = t.split(""); // How are we getting the input for t?

  for (let i = 0; i < second.length; i++) {
    const element = second[i];

    let found = first.indexOf(element);

    if (found !== -1) {
      first[found] = null;
    } else {
      return false;
    }
  }

  return true;
} */
