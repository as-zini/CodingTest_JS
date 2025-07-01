//데이터 추출
//첫 짝수부터 시작
//포인터 두개 0, 1부터 시작
//포인터 범위에서 홀수값이 나오면 odd ++
//odd값이 제한 이상이면 left +1

const fs = require("fs")
const data = fs.readFileSync("/dev/stdin","utf8").trim().split("\n")

const [length, limit] = data[0].split(" ").map(Number)
const arr = data[1].split(" ").map(Number)

let left = 0
let right = 0
let odd = arr[0]%2 === 0 ? 0 : 1


let even = arr[0]%2 === 0 ? 1 : 0
let max = even


while(right < length -1){
  if(odd < limit){
    right++
    if(arr[right]%2 === 0){
      even++
      max = even > max ? even : max
    }
    else odd++
  }else{
    if(odd === limit){
      if(arr[right+1]%2 === 0){
        even++
        max = even > max ? even : max
        right++
      }else{
        if(arr[left] % 2 === 0){
          even--
        }else{
          odd--
        }
        left++
      }
    }else{
      if(arr[left] % 2 === 0){
        even--
      }else{
        odd--
      }
      left++
    }
  }
}

console.log(max)
