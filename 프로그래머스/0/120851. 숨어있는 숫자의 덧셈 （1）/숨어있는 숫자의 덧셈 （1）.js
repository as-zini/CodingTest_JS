// function solution(my_string) {
//     var answer = 0;
//     my_string.split("").map((el) => {if(el in ["1","2","3","4","5","6","7","8","9"]){
//         answer = answer + Number(el)
//     }})
//     console.log(answer)
//     return answer;
// }

// function solution(my_string) {
//     return my_string
//         .split('')  // 문자열을 문자 하나씩 쪼갬
//         .filter(char => !isNaN(char) && char !== ' ')  // 숫자인 문자만 필터링
//         .map(Number)  // 문자형 숫자를 실제 숫자로 변환
//         .reduce((acc, num) => acc + num, 0);  // 모든 숫자를 더함
// }

// // 실행 예제
// console.log(solution("aAb1B2cC34oOp")); // 10
// console.log(solution("1a2b3c4d123"));   // 16
function solution(my_string) {
    let answer = 0;
    
    my_string.split("").forEach((el) => {
        if(["1","2","3","4","5","6","7","8","9"].includes(el)) {
            answer += Number(el);
        }
    });

    return answer;
}

// 실행 예제
console.log(solution("aAb1B2cC34oOp")); // 10
console.log(solution("1a2b3c4d123"));   // 16