function solution(array) {
    var answer = 0;
    array.forEach((el) => {
        el.toString().split("").forEach((num) => {
            answer = num === '7' ? answer+1 : answer+0
            
        })
        console.log(el.toString())
    })
    
    return answer;
}