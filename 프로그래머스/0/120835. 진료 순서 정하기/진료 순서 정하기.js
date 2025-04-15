function solution(emergency) {
    var answer = [];
    var count = 1;
    for(let i = 0; i <emergency.length; ++i){
        emergency.forEach((el) => {
            count = emergency[i] < el ? ++count : count + 0
        })
        answer[i] = count;
        count=1;
    }
    return answer;
}