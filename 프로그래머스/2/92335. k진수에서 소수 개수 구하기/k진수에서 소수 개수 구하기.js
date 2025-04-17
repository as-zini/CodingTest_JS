function solution(n, k) {
    var answer = 0;
    var num = n.toString(k)
    function isPrime(n){
        if(n <= 1)return false
        else{
            for(let i = 2;i<=Math.sqrt(n);i++){
                if(n%i === 0)return false
                
            }
        }
        return true
    }
    
    num.split("0").forEach((el) => {
        var el = Number(el)
        answer = isPrime(el) ? answer+=1 : answer
    })

    return answer;
}