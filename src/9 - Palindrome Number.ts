function isPalindrome(x: number): boolean {
  let sX = String(x);

  let array = sX.split("");

  let reverse = [];

  for (let i = array.length - 1; i > -1; i--) {
    reverse.push(array[i]);
  }

  console.log(array);
  console.log(reverse);

  for (let i = 0; i < array.length; i++) {
    if (array[i] != reverse[i]) {
      return false;
    }
  }

  return true;
}
