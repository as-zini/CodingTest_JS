function solution(numbers, k) {
    var answer = 0;
    var current = 0;
    for(let i = 1; i < k; i++){
        if(numbers.length%2===0){
            answer = numbers[(current+2)%numbers.length]
            current = (current+2)%numbers.length
        }else{
            answer = numbers[(current+2)%numbers.length]
            current = (current+2)%numbers.length
        }
    }
    return answer;
}