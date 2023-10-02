// Solution creating hashtable (this took 1639 ms beats 5% and 138.92MB of memory beats 5%)
/*function twoSum(numbers: number[], target: number): number[] {
  const hashTable = {};

  for (let i = 0; i < numbers.length; i++) {
    let val = numbers[i];
    if (!hashTable[val]) {
      // If hashtable doesn't contain a key of val
      hashTable[val] = [i + 1]; // Set val as key and index + 1 as value, because this is a 1-indexed array
    } else {
      // If hashtable does contain a key of val
      let preVal = hashTable[val];
      hashTable[val] = [...preVal, i + 1];
    }
  }

  //console.log(hashTable);

  for (let key in hashTable) {
    let numberVal = target - Number(key);
    let stringVal = numberVal.toString();
    if (hashTable[stringVal]) {
      // Check if hashTable has the value (as key)
      if (key === stringVal) {
        // Check if missing value and key are the same
        if (hashTable[key].length > 1) {
          // Check if key has more than 1 index stored
          return [hashTable[key][0], hashTable[key][1]];
        } else {
          // If not then go to next loop
          continue;
        }
      } else {
        // If string value and key are not the same
        if (hashTable[key][0] > hashTable[stringVal][0]) {
          // Make sure indices are in ascending order
          return [hashTable[stringVal][0], hashTable[key][0]];
        } else {
          return [hashTable[key][0], hashTable[stringVal][0]];
        }
      }
    }
  }

  // If code reaches here, it means there were no two indices that add up to target, so return empty array?
  return [];
} */

// Solution just using two pointers at the opposite ends of the array (took 58ms beats 69% and 43.91MB of memory beats 26%)
function twoSum(numbers: number[], target: number): number[] {
  let L = 0;
  let R = numbers.length - 1;

  while (L < R) {
    if (numbers[L] + numbers[R] === target) {
      return [L + 1, R + 1];
    } else if (numbers[L] + numbers[R] < target) {
      L++;
    } else {
      R--;
    }
  }

  // If code reaches this point then there are no numbers that add up to target

  return [];
}
