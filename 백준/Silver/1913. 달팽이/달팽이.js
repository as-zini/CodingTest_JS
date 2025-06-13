//배열 만들기 => 맨끝숫자부터 시작
//숫자의 위치찾기

const fs = require("fs")
var [n, target] = fs.readFileSync('/dev/stdin','utf8').trim().split("\n").map(Number)
const arr = new Array(n).fill([]).map((el) => new Array(n).fill(0))
var answer = ""

var dir = "down"
var count = 0
var currentY = 0
var currentX = 0
var rowCount = 0

for(let i = 0;i<n*n;i++){
  
  arr[currentY][currentX] = n*n-count
  if(n*n-count === target){
    answer = `${currentY+1} ${currentX+1}`
  }
  if(dir === "down"){
    if(currentY+1 >= n || arr[currentY+1][currentX]){
      dir = "right"
      currentX += 1
    }else{
      currentY += 1
    }
  }else if(dir === "right"){
    if(currentX+1 >= n || arr[currentY][currentX+1]){
      dir = "up"
      currentY -= 1
    }else{
      currentX += 1
    }
  }else if(dir === "up"){
    if(currentY-1 < 0 || arr[currentY-1][currentX]){
      dir = "left"
      currentX -= 1
    }else{
      currentY -= 1
    }
  }else if(dir === "left"){
    if(currentX-1 < 0 || arr[currentY][currentX-1]){
      dir = "down"
      currentY += 1
    }else{
      currentX -= 1
    }
  }
  
  rowCount += 1
  count += 1
}

arr.forEach((el) => console.log(el.join(" ")))
console.log(answer)

