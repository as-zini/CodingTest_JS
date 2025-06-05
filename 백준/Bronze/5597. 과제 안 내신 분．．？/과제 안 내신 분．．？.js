const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map(Number);

const present = Array(31).fill(false);
for (const num of input) {
  present[num] = true;
}

const missing = [];
for (let i = 1; i <= 30; i++) {
  if (!present[i]) missing.push(i);
}

missing.sort((a, b) => a - b);
console.log(missing[0]);
console.log(missing[1]);
