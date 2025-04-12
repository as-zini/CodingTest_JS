function solution(n) {
    var answer = 0
    n.toString().split("").map((el) => answer = answer + Number(el))
    return answer;
}