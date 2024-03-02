function longestConsecutive(nums: number[]): number {
  let sortedNums = nums.sort((a, b) => a - b);

  let longestSequence = 1;
  let tempSequence = 0;

  if (sortedNums.length === 0) {
    return 0;
  }

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] === sortedNums[i + 1]) {
      // If value at array[i] is the same as the value at array[i+1] then skip
      continue;
    }

    if (sortedNums[i] + 1 === sortedNums[i + 1]) {
      // If value at array[i+1] is 1 more than value at array[i]
      if (tempSequence === 0) {
        tempSequence = 2;
      } else {
        tempSequence++;
      }
    } else {
      if (longestSequence < tempSequence) {
        longestSequence = tempSequence;
      }
      tempSequence = 0;
    }
  }

  return longestSequence;
}
