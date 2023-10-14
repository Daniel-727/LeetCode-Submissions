// Solution using binary search took 49sec (beats 88%) took 44.93MB (beats 5%)
function searchMatrix(matrix: number[][], target: number): boolean {
  for (let array of matrix) {
    let left = 0;
    let right = array.length - 1;

    if (array[left] <= target && target <= array[right]) {
      // If target is in between the left and right values for this array

      let mid = Math.floor((left + right) / 2); // Only need to calculate mid once we know target is in this array
      console.log(mid);

      while (left <= right) {
        if (target === array[mid]) {
          // We found the target, return true
          console.log("hi");
          return true;
        } else if (target > array[mid]) {
          left = mid + 1;
          mid = Math.floor((left + right) / 2);
          console.log(mid);
        } else {
          right = mid - 1;
          mid = Math.floor((left + right) / 2);
          console.log(mid);
        }
      }
      // If target is in between the first and last values of this array and we couldn't find it in the array, then it's not in the matrix.
      return false;
    } else {
      // If not, then look for target in another array
      continue;
    }
  }
  return false; // Need to return false here as well in case the target is never in between the values of the matrices e.g. matrix = [[1]], target = 0
}
