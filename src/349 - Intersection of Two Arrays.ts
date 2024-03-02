function intersection(nums1: number[], nums2: number[]): number[] {
  let nums1Hash = {};
  let nums2Hash = {};
  let answer = [];

  for (let i = 0; i < nums1.length; i++) {
    if (nums1Hash[nums1[i]]) {
      nums1Hash[nums1[i]]++;
    } else {
      nums1Hash[nums1[i]] = 1;
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (nums2Hash[nums2[i]]) {
      nums2Hash[nums2[i]]++;
    } else {
      nums2Hash[nums2[i]] = 1;
    }
  }

  for (let key of Object.keys(nums1Hash)) {
    if (nums2Hash[key]) {
      answer.push(key);
    }
  }

  return answer;
}
