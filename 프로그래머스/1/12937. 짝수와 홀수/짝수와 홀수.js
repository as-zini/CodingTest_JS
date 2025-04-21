function solution(num) {
    var answer = num === 0 ? "Even" : num % 2 === 0 ? "Even" : "Odd";
    return answer;
}