function solution(s){
    var list = s.split("").sort()
    var answer = []
    list.forEach((el,index) => {
        if(el !== list[index+1] && el !== list[index-1])answer.push(el)
    })
    return answer.join("")
}




// function solution(s) {
    
//     var result = {};
//     var string_list = s.split("");
//     string_list.forEach((el) =>{
//         result[el] = (result[el] || 0)+1;
//     })
//     var real_answer = []
//     var answer = Object.entries(result).filter((el) => el[1]===1)
//     answer.forEach((el) => real_answer.push(el[0]))
//     answer = real_answer.sort().join("")
//     return answer;
// }