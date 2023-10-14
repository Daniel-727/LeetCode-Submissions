// Brute force O(n)squared solution, time limit exceeded, so not entirely sure if this solution
/* function maxArea(height: number[]): number {

    let max = 0;

    for (let i = 0; i < height.length; i++){
        for (let j = i + 1; j < height.length; j++){
            let distance = j - i;
            let tempMax;
            if (height[i] <= height[j]){
                tempMax = height[i] * distance;
            } else {
                tempMax = height[j] * distance;
            }

            if (tempMax > max){
                max = tempMax;
            }
        }
    }

    return max;
}; */

// better O(n) solution using pointers on the opposite ends of the array (took 1110ms beats 5.07% took 83.18MB beats 6.04%)
function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    let lVal = height[left];
    let rVal = height[right];

    if (lVal <= rVal) {
      let tempMax = lVal * (right - left);
      console.log(tempMax);
      if (tempMax > max) {
        max = tempMax;
      }
      left++;
    } else {
      let tempMax = rVal * (right - left);
      console.log(tempMax);
      if (tempMax > max) {
        max = tempMax;
      }
      right--;
    }
  }

  return max;
}
