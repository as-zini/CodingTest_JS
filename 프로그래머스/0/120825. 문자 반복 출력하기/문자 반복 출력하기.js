function solution(my_string, n) {
    var result = [];
    for (let i of my_string){
        result.push(i.repeat(n))
        
    }
    var answer = result.join("");
    
    return answer;
}