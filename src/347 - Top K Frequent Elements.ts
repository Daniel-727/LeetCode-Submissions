function topKFrequent(nums: number[], k: number): number[] {
  let hash = {}; // Hashmap
  let result = []; // Result to return

  for (let item of nums) {
    if (hash[item]) {
      // If item is in hashmap
      let preVal = hash[item];
      hash[item] = preVal + 1;
    } else {
      hash[item] = 1;
    }
  }

  for (let i = 0; i < k; i++) {
    // On2, nested loop
    let max = 0;
    Object.values(hash).forEach((val) => {
      if (typeof val === "number") {
        // Typescript doesn't know the datatype for val, so it assigns it as type unknown, which can not be compared with a number, so we find the type using typeof so typescript knows it's a number.
        if (max < val) {
          max = val;
        }
      }
    });

    let key = Object.keys(hash).find((key) => hash[key] === max);
    result.push(key); // Push the key with the most occurences onto Result array
    delete hash[key]; // Remove the key from the hashTable
  }

  return result;
}
