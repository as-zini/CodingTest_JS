function solution(s){
    var answer = s.split("").sort().reverse().join("")
    return answer
    
}








// function solution(s){
//     var result = s.split("").reverse().join("")
    
//     var answer = result;
//     return answer
// }





// function solution(s) {
//     var array = s.split("")
//     var lower = [];
//     var upper = []
//     function isAllLowerCase(str) {
//     return /^[A-Z]+$/.test(str);
// }   
//     for(let i = 0; i<s.length; i++){
//         if(isAllLowerCase(array[i])){
//            upper.push(array[i])
//            }else{
//                lower.push(array[i])
//            }
//     }
//     var answer = [...lower.sort((a,b) => b-a), ...upper.reverse()].join("")
//     return answer;
// }

// function solution(s) {
//     return s.split('').sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0)).join('');
// }

// // 테스트
// console.log(solution("Zbcdefg")); // "gfedcbZ"