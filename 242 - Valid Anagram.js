/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sMap = new Map();
  const tMap = new Map();

  for (letter of s) {
    if (sMap.get(letter)) {
      let prev = sMap.get(letter);
      sMap.set(letter, prev + 1);
    } else {
      sMap.set(letter, 1);
    }
  }

  for (letter of t) {
    if (tMap.get(letter)) {
      let prev = tMap.get(letter);
      tMap.set(letter, prev + 1);
    } else {
      tMap.set(letter, 1);
    }
  }

  if (sMap.size != tMap.size) {
    return false;
  }

  for (let [key, value] of sMap) {
    if (sMap.get(key) === tMap.get(key)) {
    } else {
      return false;
    }
  }

  return true;

  /* for (i = 0; i < s.length; i++){
        console.log(s[i]);
    }

    for (i = 0; i < t.length; i++){
        console.log(t[i]);
    } */
};
