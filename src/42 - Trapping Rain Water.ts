function trap(height: number[]): number {
  let L = 0;
  let R = height.length - 1;
  let lMax = height[L];
  let rMax = height[R];
  let answer = 0;

  while (L < R) {
    if (height[L] <= height[R]) {
      L++;
      if (lMax - height[L] >= 0) {
        answer += lMax - height[L];
      } else {
        lMax = height[L];
      }
    } else {
      R--;
      if (rMax - height[R] >= 0) {
        answer += rMax - height[R];
      } else {
        rMax = height[R];
      }
    }
  }

  return answer;
}
