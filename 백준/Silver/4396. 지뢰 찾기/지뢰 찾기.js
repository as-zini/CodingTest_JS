//n, 지뢰지도, 현재지도 추출
//현재지도를 돌면서 .인곳은 . 출력, X인곳은 그 곳의 지뢰지도에서 지뢰가 몇개인지를 8방향을 돌면서 확인 후 반영


const fs = require('fs')
const data = fs.readFileSync('/dev/stdin','utf8').trim().split("\n")
const n = Number(data[0])
const xMap = []
const currentMap = []
const dir = [[-1,-1],[-1,0],[-1,1],[0,1],[0,-1],[1,1],[1,-1],[1,0]]
var explode = false

for(let i = 0;i<n;i++){
  xMap.push(data[i+1].split(""))
}

for(let i = n+1;i<2*n+1;i++){
  currentMap.push(data[i].split(""))
}

for(let i = 0;i<n;i++){
  for(let j = 0;j<n;j++){
    if(currentMap[i][j] === "x" && xMap[i][j] === "*"){
      explode = true
      break;
    }
  }
  if (explode) break
}


for(let i = 0;i<n;i++){
  for(let j = 0;j<n;j++){
    if(currentMap[i][j] === "x"){
      var count = 0
      for(let el of dir){
        const [x,y] = el
        const newX = j+x
        const newY = i+y
        if(newX >= 0 && newY >= 0 && newX<n && newY<n){
          if(xMap[newY][newX] === "*"){
            count +=1 
          }
        }
      }
      currentMap[i][j] = count
    }
    
  }



}

if(explode){
  for(let i = 0;i<n;i++){
    for(let j = 0;j<n;j++){
      if(xMap[i][j] === "*"){
        currentMap[i][j] = "*"
      }
    }
  }
}



for(let i of currentMap){
  console.log(i.join(""))
}