function solution(n, k) {
    var answer;
    if(n<10){
        answer = n * 12000 + k * 2000;
    } else{
        answer = n * 12000 + (k-Math.trunc(n/10))*2000;
    }
    return answer;
}