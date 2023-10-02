// Solution using two pointers. Getting no duplicates was the tricky part. (took 162 ms, beats 56%, used 59.27MB beats 57%)
function threeSum(nums: number[]): number[][] {
  // Sort the array
  const sorted = nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] === sorted[i - 1]) {
      // To skip duplicate is
      continue;
    }
    let target = -sorted[i];
    let L = i + 1;
    let R = sorted.length - 1;

    while (L < R) {
      if (L > i + 1) {
        // Once L is not longer next to i, we want to check the previous L for duplicates
        if (sorted[L] === sorted[L - 1]) {
          L++;
          continue;
        }
      }

      if (sorted[L] + sorted[R] === target) {
        if (sorted[R] === sorted[R + 1]) {
          // Checking for duplicate Rs
          R--;
          continue;
        } else {
          let array = [sorted[i], sorted[L], sorted[R]];
          result.push(array);
          L++;
        }
      } else if (sorted[L] + sorted[R] < target) {
        L++;
      } else {
        R--;
      }
    }
  }

  return result;
}
