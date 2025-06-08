const fs = require("fs")

const info = fs.readFileSync('/dev/stdin','utf8').trim().split("\n");
const arr = new Array(Number(Number(info[0])+1)).fill(false);
var answer = 0;

for(let i = 1;i<info.length;i++){
  var [num, dir] = info[i].split(" ")
  num = Number(num)
  if(arr[num] === false){
    arr[num] = dir
  }else{
    if(arr[num] !== dir){
      answer +=1
      arr[num] = dir
    }
  }
}

console.log(answer)

