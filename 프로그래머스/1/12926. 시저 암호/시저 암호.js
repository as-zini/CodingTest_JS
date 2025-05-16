function solution(s, n){
    var ANum = "A".charCodeAt(0)
    var aNum = 'a'.charCodeAt(0)
    var answer = s.split("").map((el,index) => {
        if(el === " "){
            return el
        }else{
            var charNum = el.charCodeAt(0)
            if(el.charCodeAt(0) < aNum){
                charNum = (charNum + n - ANum)%26 + ANum
            }else{
                charNum = (charNum + n - aNum)%26 + aNum
            }
            return String.fromCharCode(charNum)
        }
    })
    return answer.join("")
}








// function solution(s, n){
//     var answer = s.split("").map((el) => {
//         var result = ' '
//         if(el !== " "){
//             var codeNum = el.charCodeAt(0)+n
//             result = String.fromCharCode(codeNum)
//         }
//         return result
//     })
    
    
//     return answer.join('')
// }






// // function solution(s, n) {
// //     return s.split('').map(char => {
// //         if (char === ' ') return ' '; // 공백은 그대로 유지
// //         const isUpperCase = char >= 'A' && char <= 'Z';
// //         const isLowerCase = char >= 'a' && char <= 'z';
        
// //         if (isUpperCase || isLowerCase) {
// //             const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
// //             return String.fromCharCode(((char.charCodeAt(0) - base + n) % 26) + base);
// //         }
        
// //         return char;
// //     }).join('');
// // }

// // // 테스트
// // console.log(solution("AB", 1));   // "BC"
// // console.log(solution("z", 1));    // "a"
// // console.log(solution("a B z", 4)); // "e F d"