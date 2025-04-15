function solution(balls, share) {
    const fact = (num) => {
        var result = 1;
        for(let i = 1; i <= num; i++){
            result = result * i
        }
        return result
    }
    var answer = Math.round(fact(balls) / (fact(balls-share) * fact(share)))
    return answer;
}