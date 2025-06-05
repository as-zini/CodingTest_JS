const fs = require('fs');

const input = fs.readFileSync('/dev/stdin',"utf8").split("\n").map(Number);

const arr = new Array(30).fill(false);
input.forEach((el) => {
  arr[el-1] = true;
})
console.log(`${arr.indexOf(false)+1}\n${arr.lastIndexOf(false)+1}`)