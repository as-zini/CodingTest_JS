function solution(hp) {
    var answer = hp % 5 === 0 ? hp/5 : hp % 5 === 1 || hp % 5 === 2 ? Math.trunc(hp/5) + hp % 5 : Math.trunc(hp/5) + Math.trunc(hp%5/3) + (hp%5)%3
    
    return answer;
}