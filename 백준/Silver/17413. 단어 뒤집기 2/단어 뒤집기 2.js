//문자열 추출
//태그와 단어 구분 
//단어는 배열에 넣어서 reverse로 뒤집기

const fs = require("fs")
const string = fs.readFileSync("/dev/stdin",'utf8').trim()

var wordArr = []
var answer = ""
var tag = false;
var current = 0


for(let i = 0;i<string.length;i++){
  var el = string[i]
  if(el === "<"){
    if(wordArr.length > 0){
      answer += wordArr.reverse().join("")
      wordArr = []
    }
    tag = true;
    answer += el
  }else if(el === ">"){
    tag = false;
    answer +=el
  }else if(tag){
    answer += el
  }else if(!tag){
    if(el !== " "){
      wordArr.push(el)
    }else if(el === " "){
      answer += wordArr.reverse().join("")
      answer += " "
      wordArr = []
    }
  }
  
}

if(wordArr.length > 0){
  answer += wordArr.reverse().join("")
  wordArr = []
}

console.log(answer)