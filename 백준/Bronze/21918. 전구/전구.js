const fs = require("fs")

const info = fs.readFileSync("/dev/stdin", "utf8").trim()
const infoArr = info.split("\n")
const arr = infoArr[1].split(" ")


for(let i = 2;i<infoArr.length;i++){
  var [category, num1, num2] = infoArr[i].split(" ")
  num1 = Number(num1)
  if(category === "1"){
    arr[num1-1] = num2
  }else {
    for(let j = num1-1;j<num2;j++){
      if(category === "2"){
        arr[j] = arr[j] === "0" ? "1" : "0"
      }else if(category === "3"){
        arr[j] = "0"
      }else if(category === "4"){
        arr[j] = "1"
      }
    }
  }
}

console.log(arr.join(" "))


