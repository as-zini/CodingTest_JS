function solution(numer1, denom1, numer2, denom2) {
    var under = denom1 * denom2
    var top1 = numer1 * denom2
    var top2 = numer2 * denom1
    let n = 1;
    for (let i = 1; i <= Math.min(top1+top2,under); i++) {
    //a와 b둘다 나눠진다면 n을 나누는 수로 할당
        if ((top1+top2)%i===0 && under%i===0) n = i;
    }
    var answer = [(top1+top2)/n, under/n];
    return answer;
}