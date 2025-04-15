function solution(array, n) {
    var answer = []
    array.forEach((el) => answer.push(Math.abs(el-n)))
    var sorted_answer = answer.sort((a,b) => a-b)
    answer = array.includes(n-sorted_answer[0]) ? n-sorted_answer[0] : n + sorted_answer[0]
    return answer;
}