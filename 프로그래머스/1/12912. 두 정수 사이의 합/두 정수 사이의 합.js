function solution(a, b) {
    var answer = 0
    
    function sum(x,y){
        for(let i = x;i<=y;i++){
            answer += i
        }
    }
    if(a<=b){
        sum(a,b)
    }else{
        sum(b,a)
    }
    return answer;
}