function solution(num_list, n) {
    var answer = [];
    var length = num_list.length
    for(let i = 0; i <= length/n-1; ++i){
        var result = num_list.splice(0, n);
        answer.push(result)
        
    }
    return answer;
}