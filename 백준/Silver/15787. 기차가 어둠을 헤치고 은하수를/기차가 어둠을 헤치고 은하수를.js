//기차수, 명령 추출
//길이가 20인배열 * 기차수 생성
//명령대로 배열 수정
//set만들어서 배열을 문자열로 만든후 첫번째 배열부터 기록
//set의 size가 정답

const fs = require("fs")
const data = fs.readFileSync("/dev/stdin","utf8").trim().split("\n")
const [tLength, oLength] = data[0].split(" ").map(Number)
const obeyArr = data.slice(1).map((el) => el.split(" ").map(Number))
const trainArr = new Array(tLength).fill(0).map((el) => new Array(20).fill(0))
const set = new Set()


obeyArr.forEach((el) => {
  var [category, i, x] = el
  if(category === 1){
   if(trainArr[i-1][x-1] === 0){
    trainArr[i-1][x-1] = 1
   }
  }else if(category === 2){
    if(trainArr[i-1][x-1] === 1){
      trainArr[i-1][x-1] = 0
     }
  }else if(category === 3){
    trainArr[i-1] = trainArr[i-1].slice(0,19)
    trainArr[i-1].unshift(0)
  }else if(category === 4){
      trainArr[i-1] = trainArr[i-1].slice(1)
      trainArr[i-1].push(0) 
  }
})


trainArr.forEach((el) => {
  set.add(el.join(""))
})

console.log(set.size)


