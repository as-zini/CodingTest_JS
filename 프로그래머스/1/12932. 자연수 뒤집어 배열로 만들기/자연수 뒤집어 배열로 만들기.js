function solution(n) {
    var result = String(n).split("").map((el) => Number(el))
    var answer = [];
    for(let i = result.length-1; i>=0;i--){
        answer.push(result[i])
    }
    return answer;
}