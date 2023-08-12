// Beats 5.4% Runtime, beats 5.12% Memory
function isValid(s: string): boolean {
  // Don't actually need this check
  /* if (s.length === 1) {
    // If there's only 1 paren in the string, then it is not a valid parentheses
    return false;
  } */

  let stack = [];

  for (let el of s) {
    switch (
      el // Wouldn't work with || operator, you have to create individual cases for (,[, and {
    ) {
      case "(":
      case "[":
      case "{":
        stack.push(el);
        break;
      case ")":
        let paren = stack.pop();
        if (paren != "(") {
          return false;
        }
        break;
      case "]":
        let bracket = stack.pop();
        if (bracket != "[") {
          return false;
        }
        break;
      case "}":
        let curly = stack.pop();
        if (curly != "{") {
          return false;
        }
    }
  }

  if (stack.length > 0) {
    // At this point the only way it could still return true and not be valid is if there are just multiple beginning parentheses and we never encountered a closing paren. The length of stack must be 0 or else it's not a valid paren
    return false;
  }

  return true; // If after going through all the elements in string we didn't return false, then the parentheses are valid
}
