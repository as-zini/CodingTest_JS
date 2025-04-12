function solution(n, numlist) {
    var answer = [];
    for(let i of numlist){
        i % n === 0 ? answer.push(i) : 0
    }
    return answer;
}