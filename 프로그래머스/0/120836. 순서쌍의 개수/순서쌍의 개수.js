function solution(n) {
    let count = 0;
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) { // i가 n의 약수인지 확인
            count++; // 순서쌍 (i, n / i) 추가
        }
    }
    
    return count;
}