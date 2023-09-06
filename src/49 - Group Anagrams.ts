// Study this solution
/* Takeaways

use npx tsc to compile typescript into javascript code

1. object keys can only be string or number.
2. [key: string]: string[], this syntax means that the object will have keys of type string and values of type string array
3. Object.keys(obj) enumerates through the keys of the object obj

/* javascript Array.includes returns true for empty string
 str = "haha" str.includes("") will return true */
/* function groupAnagrams(strs: string[]): string[][] {
  // Creating a hashtable by using an object
  // This hashtable object's key is an array of strings, yes you can make a key an array and it is initialized as an empty object. Not quite sure why it's not giving errors that the object has no key or value
  const hash: {
    [key: string]: string[]; // Javascript only allows string or numbers as keys, and typescript extends this
  } = {}; // Const declarations must be initialized

  strs.forEach((str) => {
    let doesExist = false;

    Object.keys(hash).forEach((key) => {
      // I believe this loop runs because well first empty objects are considered truthy, but then the key...
      if (isAnagram(str, key)) {
        //What key are we inputting for the isAnagram function?
        hash[key].push(str);
        doesExist = true;
      }
    });

    if (!doesExist) {
      hash[str] = [str];
    }
  });

  /* console.log(`hash: ${JSON.stringify(hash)}`);

  return [...Object.keys(hash).map((k) => hash[k])];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
/* strs = ["eat","tea","tan","ate","nat","bat"] 

// Study this function next
function isAnagram(s: string, t: string) {
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

// Solution by sorting the strings (this took 9091ms beast 5% and 62.86MB of memory beast 8%)
function groupAnagrams(strs: string[]): string[][] {
  let hash = {}; // Create hashTable/Map using javascript object
  for (let str of strs) {
    const key = str.split("").sort().join(""); // Split the string and sort them

    if (Object.keys(hash).length === 0) {
      hash[key] = [str];
    } else {
      // Hash is not empty
      if (Object.keys(hash).includes(key)) {
        let preVal = hash[key]; // Figure out why object . notation doesn't work here since hash should have key values here and is not made dynamically?
        hash[key] = [...preVal, str];
      } else {
        hash[key] = [str];
      }
    }
  }

  const result = []; // Create array to return because this function should return a 2 dimensional string array
  Object.values(hash).forEach((val) => {
    // Our hash object values are arrays of strings so we just push each value which is an array onto our result array creating a 2-d array
    result.push(val);
  });

  return result;
}
