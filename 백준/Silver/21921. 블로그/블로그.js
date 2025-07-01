//데이터 추출
//두개의 포인터 두고 현재 결과에 첫번째 포인터 값을 빼고 포인터 두개를 움직여 두번째 포인터 값을 더한다

const fs = require("fs")
const data = fs.readFileSync("/dev/stdin","utf8").trim().split("\n")

const [length, X] = data[0].split(" ").map(Number)
const arr = data[1].split(" ").map(Number)

let pointer1 = 0;
let pointer2 = pointer1+X-1

let max = arr.slice(pointer1, pointer2+1).reduce((sum, el) => sum+=el,0)
let sum = arr.slice(pointer1, pointer2+1).reduce((sum, el) => sum+=el,0)
let count = 1

while(pointer2 < arr.length-1){
    sum -= arr[pointer1]
    pointer1++
    pointer2++
    sum += arr[pointer2]
    if(sum > max){
      max = sum
      count = 1
    }else if(sum === max){
      count++
    }

}

console.log(max === 0 ? "SAD" : `${max}\n${count}` )