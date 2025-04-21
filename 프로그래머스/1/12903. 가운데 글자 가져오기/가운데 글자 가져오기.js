function solution(s) {
    var answer = s.length % 2 === 0 ? s.split("").splice(s.length/2-1, 2).join("") : s.split("").splice(Math.floor(s.length/2),1).join("")
    return answer;
}