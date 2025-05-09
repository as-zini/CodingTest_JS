function solution(n){
    var answer = 0
    for(let i = 1;i*i<=n;i++){
        if(n%i === 0){
            if(i*i === n)answer+=1
            else answer += 2
        }
        
    }
    return answer
}






// function solution(n) {
//     let count = 0;
    
//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0) { // i가 n의 약수인지 확인
//             count++; // 순서쌍 (i, n / i) 추가
//         }
//     }
    
//     return count;
// }