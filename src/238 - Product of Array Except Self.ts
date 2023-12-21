// O(n)2 solution, this solution fails on Leetcode because it requires a O(n) solution
function productExceptSelf(nums: number[]): number[] {
  let obj = {};
  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    obj[i] = nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (const [key, val] of Object.entries(obj)) {
      let numKey = Number(key);
      if (numKey !== i) {
        // using key as unknown as number still types key as a string
        product *= val as number;
      }
    }
    answer.push(product);
  }

  return answer;
}

// Another O(n)2 solution
function productExceptSelf(nums: number[]): number[] {
  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (j !== i) {
        product *= nums[j];
      }
    }
    answer.push(product);
  }

  return answer;
}

// O(n) solution, create 2 arrays

function productExceptSelf(nums: number[]): number[] {
  let answer = [];

  let prefix = [];
  let postfix = [];

  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    let pre = nums[i - 1];
    if (pre === undefined) {
      pre = 1;
    }
    product *= pre;
    prefix.push(product);
  }

  product = 1;

  for (let i = nums.length - 1; i > -1; i--) {
    let post = nums[i + 1];
    if (post === undefined) {
      post = 1;
    }
    product *= post;
    postfix.unshift(product);
  }

  for (let i = 0; i < nums.length; i++) {
    let returnProduct = prefix[i] * postfix[i];
    answer.push(returnProduct);
  }

  return answer;
}
