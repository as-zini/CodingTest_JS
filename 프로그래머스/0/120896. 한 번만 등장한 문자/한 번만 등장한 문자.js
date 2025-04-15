function solution(s) {
    
    var result = {};
    var string_list = s.split("");
    string_list.forEach((el) =>{
        result[el] = (result[el] || 0)+1;
    })
    var real_answer = []
    var answer = Object.entries(result).filter((el) => el[1]===1)
    answer.forEach((el) => real_answer.push(el[0]))
    answer = real_answer.sort().join("")
    return answer;
}