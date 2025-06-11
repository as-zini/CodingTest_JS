//현재 위치 및 문자열 추출
//키보드 객체 생성
//문자열을 돌면서 해당 문자와 전 문자간의 차이 구하기+1

const fs = require("fs")

const [current, string] = fs.readFileSync('/dev/stdin','utf8').trim().split("\n")
var [currentL, currentR] = current.split(" ")
const keyBoard = {
  "q":[[0,0],"L"],"w":[[1,0],"L"],"e":[[2,0],"L"],"r":[[3,0],"L"],"t":[[4,0],"L"],"y":[[5,0],"R"],"u":[[6,0],"R"],"i":[[7,0],"R"],
  "o":[[8,0],"R"],"p":[[9,0],"R"],"a":[[0,1],"L"],"s":[[1,1],"L"],"d":[[2,1],"L"],"f":[[3,1],"L"],"g":[[4,1],"L"],"h":[[5,1],"R"],
  "j":[[6,1],"R"],"k":[[7,1],"R"],"l":[[8,1],"R"],"z":[[0,2],"L"],"x":[[1,2],"L"],"c":[[2,2],"L"],"v":[[3,2],"L"],"b":[[4,2],"R"],
  "n":[[5,2],"R"],"m":[[6,2],"R"],
}
var answer = 0

for(let i of string){
  if(i === currentL){
    
    currentL = i
  }else if(i === currentR){
    
    currentR = i
  }else{
    var [x2,y2] = keyBoard[i][0]
    var hand = keyBoard[i][1]
    if(hand === "R"){
      var [x1,y1] = keyBoard[currentR][0]
      answer += Math.abs(x2-x1) + Math.abs(y2-y1)
      currentR = i
    }else{
      var [x1,y1] = keyBoard[currentL][0]
      answer += Math.abs(x2-x1) + Math.abs(y2-y1)
      currentL = i
    }
  }
  answer += 1
}

console.log(answer)
