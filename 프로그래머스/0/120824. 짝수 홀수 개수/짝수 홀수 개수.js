function solution(num_list) {
    
    var even = 0;
    var odd = 0;
    num_list.forEach((el) => {
        if(el % 2 === 0){
            even++
        }else{
            odd++
        }
    })
    var answer = [even, odd]
    return answer;
}