//3으로 나누어떨어지는 경우 =>
//3이 들어간 경우


function solution(n) {
    function solution(n2){
        //n2가 3의 배수가 아니고 3이 들어가지 않을때까지 반복
        //n2가 3의 배수이거나 3이 들어가면 반복
        while(n2 % 3 === 0 || String(n2).includes("3")){
            n2 += 1
            console.log(n2)
        }
        return n2
    }
    var answer = 1;
    for(let i = 1; i < n; i++){
        answer = solution(answer+1)
        
    }
    return answer;
}