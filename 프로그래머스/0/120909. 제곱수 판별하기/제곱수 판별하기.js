function solution(n) {
    var answer = Math.sqrt(n) > Math.floor(Math.sqrt(n)) ? 2 : 1
    return answer;
}