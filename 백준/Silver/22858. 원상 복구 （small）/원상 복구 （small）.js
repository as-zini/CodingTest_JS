//카드 섞은 횟수, D, P 추출
//D배열을 돌면서 P에서 Di번째에 있는 카드를 D에서의 인덱스로 이동
//원래 배열, 새로운 배열 생성
//새로운 횟수에 들어갈때는 새로운 배열을 원래 배열로, 새로운 배열을 초기화

const fs = require("fs")
const data = fs.readFileSync("/dev/stdin","utf8").trim().split("\n")
const [length, count] = data[0].split(" ").map(Number) 
const dArray = data[2].split(" ").map(Number)
var pArray = data[1].split(" ").map(Number)
var newArray = new Array(length).fill(0)

for(let i = 0;i<count;i++){
  dArray.forEach((el,idx) => {
    var index = el-1
    newArray[index] = pArray[idx]
  })
  pArray = [...newArray]
  newArray= new Array(length).fill(0)
}

console.log(pArray.join(" "))