function solution(s) {
    
    var result = s.split(" ").map((el) => Number(el)).sort((a,b) => a-b)
    var answer = [result[0],result[result.length-1]].join(" ")
    return answer;
}