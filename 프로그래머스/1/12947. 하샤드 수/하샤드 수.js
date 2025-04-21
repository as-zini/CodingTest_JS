function solution(x) {
    var divide = String(x).split("").reduce((sum,el) => sum + Number(el),0)
    var answer = x%divide === 0 ? true : false
    return answer;
}