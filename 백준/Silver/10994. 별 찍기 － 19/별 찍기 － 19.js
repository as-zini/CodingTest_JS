//가로, 세로 모두 전 스텝보다 왼쪽,오른쪽으로 2개씩 증가
//출력함수 작성
//입력받은 숫자를 통해 출력함수 호출
const fs = require('fs')
const number = Number(fs.readFileSync('/dev/stdin','utf8').trim())
const resultArr = []

  if(number === 1){
    console.log("*")
  }else{
    var f1 = 1
    
    var size = 0;
    for(let i = 2;i<=number;i++){
      size = f1 + 4
      f1 = size
    }

    for(let i = 0;i<size;i++){
      if(i%2 !== 0){
        // resultArr.push("\n")
      }else if(i<size){
        if(i % 4 === 0){
          var arr = new Array(size).fill("*")
          for(j = 0; j<i/4; j++){
            arr[2*j+1] = " "
            arr[arr.length-2-2*j] = " "
          }
          resultArr.push(arr.join(""))
        }else{
          var arr = new Array(size).fill(" ")
          for(j = 0;j<(i+2)/4;j++){
              arr[j*2] = "*"
              arr[arr.length-1-(j*2)] = "*"
            
          }
          resultArr.push(arr.join(""))
        }
        
      }
    }
    resultArr.forEach((el) => console.log(el))
    resultArr.slice(0,Math.floor(size/2)).reverse().forEach((el) => console.log(el))

  }

