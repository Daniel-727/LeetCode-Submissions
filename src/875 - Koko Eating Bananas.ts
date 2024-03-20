// O(nlogn) solution
function minEatingSpeed(piles: number[], h: number): number {
  let L = 1;
  let R = Math.max(...piles);

  let answer: number;

  while (L <= R) {
    let k = Math.floor((L + R) / 2);
    let kHours = 0;

    piles.forEach((pile) => {
      kHours += Math.ceil(pile / k);
    });

    if (kHours <= h) {
      answer = k;
      R = k - 1;
    } else {
      L = k + 1;
    }
  }

  return answer;
}
