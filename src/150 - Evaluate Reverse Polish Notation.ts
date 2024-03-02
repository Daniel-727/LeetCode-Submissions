function evalRPN(tokens: string[]): number {
  let stack = [];

  function evalTokens(str: string): number {
    switch (str) {
      case "+":
        if (stack.length < 2) {
          return -1;
        }
        let sum = Number(stack.pop()) + Number(stack.pop());
        stack.push(sum);
        break;
      case "-":
        if (stack.length < 2) {
          return -1;
        }
        let subtrahend = Number(stack.pop());
        let minuend = Number(stack.pop());
        let difference = minuend - subtrahend;
        stack.push(difference);
        break;
      case "*":
        if (stack.length < 2) {
          return -1;
        }
        let product = Number(stack.pop()) * Number(stack.pop());
        stack.push(product);
        break;
      case "/":
        if (stack.length < 2) {
          return -1;
        }
        let quotient: number;
        let divisor = Number(stack.pop());
        let dividend = Number(stack.pop());
        if (dividend / divisor > 0) {
          quotient = Math.floor(dividend / divisor);
        } else {
          quotient = Math.ceil(dividend / divisor);
        }
        stack.push(quotient);
        break;
      default:
        stack.push(str);
    }
  }

  for (let i = 0; i < tokens.length; i++) {
    evalTokens(tokens[i]);
  }

  return stack.pop();
}
