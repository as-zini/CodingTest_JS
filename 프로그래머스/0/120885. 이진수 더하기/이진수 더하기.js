function solution(bin1, bin2){
    var num1 = parseInt(bin1, 2)
    var num2 = parseInt(bin2, 2)
    console.log(num1,num2)
    var answer = (num1+num2).toString(2)
    return answer
}









// function solution(bin1, bin2) {
//   // 2진수를 10진수로 변환 후 더하기
//   const sum = parseInt(bin1, 2) + parseInt(bin2, 2);
  
//   // 다시 2진수 문자열로 변환하여 반환
//   return sum.toString(2);
// }

// // 테스트
// console.log(solution("10", "11"));    // "101"
// console.log(solution("1001", "1111")); // "11000"