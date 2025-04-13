function solution(n) {
    let pizza = 1;
    while ((pizza * 6) % n !== 0) { // 6조각씩 있는 피자가 n명의 배수가 될 때까지 반복
        pizza++;
    }
    return pizza;
}

// 실행 예제
console.log(solution(6));  // 1
console.log(solution(10)); // 5
console.log(solution(4));  // 2