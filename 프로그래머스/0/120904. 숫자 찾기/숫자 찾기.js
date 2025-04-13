function solution(num, k) {
    var answer = String(num).indexOf(k) === -1 ? -1 : String(num).indexOf(k)+1
    return answer;
}