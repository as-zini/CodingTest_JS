function solution(n) {
    var answer = n%7===0 ? Math.trunc(n/7) : Math.trunc(n/7)+1
    return answer;
}