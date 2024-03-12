function romanToInt(s: string): number {
  let array = s.split("");

  let answer = 0;

  for (let i = 0; i < array.length; i++) {
    let letter = array[i];
    let nextLetter = array[i + 1];

    switch (letter) {
      case "I":
        switch (nextLetter) {
          case "V":
          case "X":
            answer -= 1;
            break;
          default:
            answer += 1;
            break;
        }
        break;
      case "X":
        switch (nextLetter) {
          case "L":
          case "C":
            answer -= 10;
            break;
          default:
            answer += 10;
            break;
        }
        break;
      case "C":
        switch (nextLetter) {
          case "D":
          case "M":
            answer -= 100;
            break;
          default:
            answer += 100;
            break;
        }
        break;
      case "V":
        answer += 5;
        break;
      case "L":
        answer += 50;
        break;
      case "D":
        answer += 500;
        break;
      case "M":
        answer += 1000;
        break;
      default:
        console.log("not a valid roman numeral");
    }
  }

  return answer;
}
