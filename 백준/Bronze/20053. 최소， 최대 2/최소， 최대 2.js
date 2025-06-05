const fs = require('fs');

const input = fs.readFileSync("/dev/stdin","utf8").trim().split("\n");
const finishNum = Number(input[0])

for(let i = 1;i<=finishNum;i++){
  var arr = input[2*i].split(" ").map(Number);
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  console.log(`${min} ${max}`)
}
