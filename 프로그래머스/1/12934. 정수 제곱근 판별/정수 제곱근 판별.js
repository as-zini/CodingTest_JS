// function solution(n) {
//     var answer = -1;
//     for(let i = 2; i<=Math.sqrt(n)+1;i++){
//         if(Math.pow(i,2)===n){
//             answer = Math.pow(i+1,2)
//             break
//         }
//     }
//     return answer;
// }

function solution(n) {
    let sqrt = Math.sqrt(n); // n의 제곱근을 구함
    if (Number.isInteger(sqrt)) { // 제곱근이 정수인지 확인
        return Math.pow(sqrt + 1, 2); // (sqrt + 1)의 제곱을 반환
    }
    return -1; // 정수가 아니면 -1 반환
}

// // 테스트
// console.log(solution(121)); // 144
// console.log(solution(3));   // -1
// console.log(solution(625)); // 676
// console.log(solution(10));  // -1