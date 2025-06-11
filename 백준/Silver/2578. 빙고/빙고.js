//철수의 빙고판, 사회자 숫자 추출
//사회자 숫자를 for문으로 돌면서 어떤 숫자가 체크되는 순간에 그 숫자의 칸 기준으로 세로, 가로, 대각선 검사
//검사 후 값 업데이트
//빙고값이 3이되는 순간 return

const fs = require('fs')
const data = fs.readFileSync('/dev/stdin','utf8').trim().split("\n")
const bingoBoard = data.slice(0,5).map((el) => el.split(" "))
const numberArr = []
var count = 0;
var answer = 0;


for(let i of data.slice(5)){
  numberArr.push(...i.split(" "))
}

function checkBingo(){
  //가로검사
  var count = 0;
  for(let i = 0; i<5;i++){
      var result = 0
      for(let j = 0;j<5;j++){
          if(bingoBoard[i][j] === "x"){
              result += 1
          }
      }
      if(result === 5)count+=1
  }
  for(let i = 0; i<5;i++){
      var result = 0
      for(let j = 0;j<5;j++){
          if(bingoBoard[j][i] === "x"){
              result += 1
          }
      }
      if(result === 5)count+=1
  }
  for(let k = 0;k<2;k++){
      var result = 0
   for(let i = 0;i<5;i++){
      if(k === 0){
          if(bingoBoard[i][i] === "x")result +=1
      }else{
          if(bingoBoard[4-i][i] === "x")result += 1
      }
   } 
   if(result === 5){
       count+=1
   }
  }
  return count 
}

for(let num of numberArr){
  if(count >= 3)break;
  answer += 1;
  for(let i = 0;i<5;i++){
    if(count >= 3)break;
    for(let j = 0;j<5;j++){
      var tag = false;
      if(bingoBoard[i][j] === num){
        bingoBoard[i][j] = "x"
        tag = true;
        count = checkBingo()
      }
      if(tag)break;
    }
  }

}

console.log(answer)




