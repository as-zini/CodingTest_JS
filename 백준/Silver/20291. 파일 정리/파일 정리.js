//파일목록 추출
//확장자 객체 만들기
//파일목록 돌면서 split으로 파일이름과 확장자 분리
//확장자 객체 값 ++
//sort로 사전순으로 정리

const fs = require("fs")
var data = fs.readFileSync("/dev/stdin","utf8").trim().split("\n")
var files = data.slice(1)
var fileObj = {}

files.forEach((el) => {
  var [name, extension] = el.split(".")
  fileObj[extension] = fileObj[extension] ?  fileObj[extension] += 1 : 1
})

Object.entries(fileObj).sort().forEach(el => console.log(`${el[0]} ${el[1]}`)) 