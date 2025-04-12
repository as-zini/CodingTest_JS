function solution(s1, s2) {
    var answer = 0;
    s1.forEach((el1) => {
        s2.forEach((el2) => {
            answer = el1===el2 ? ++answer : answer
        })
    })
    return answer;
}