// function solution(n)
// {
//     var answer = String(n).split("")?.reduce((sum, el) => Number(sum) + Number(el,0))

//     // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
//     return answer;
// }

function solution(N) {
    return String(N) // 숫자를 문자열로 변환
        .split('')   // 각 자리 숫자를 배열로 분할
        .map(Number) // 문자열을 숫자로 변환
        .reduce((a, b) => a + b, 0); // 합산
}

// 테스트
console.log(solution(123)); // 6
console.log(solution(987)); // 24