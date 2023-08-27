"use strict";
const readline = require("readline");
const checkPalindrome = (line) => {
    let odd = 0;
    let hashMap = new Map();
    for (let i = 0; i < line.length; i++) {
        if (hashMap.has(line[i])) {
            let prev = hashMap.get(line[i]);
            hashMap.set(line[i], prev + 1);
        }
        else {
            hashMap.set(line[i], 1);
        }
    }
    hashMap.forEach((val, key) => {
        if (val % 2 === 1) {
            odd += 1;
        }
    });
    if (odd > 1) {
        process.stdout.write("NO");
    }
    else {
        process.stdout.write("YES");
    }
};
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
rl.on("line", (line) => {
    checkPalindrome(line);
});
rl.once("close", () => {
    // end of input
});
