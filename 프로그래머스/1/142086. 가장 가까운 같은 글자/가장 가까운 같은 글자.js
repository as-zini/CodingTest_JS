function solution(s){
    var answer = s.split("").map((el,index) => {
        var result = s.slice(0,index).lastIndexOf(el)
        return  result === -1 ? -1 : index - result
    })
    return answer
}







// function solution(s) {
//     var sArray  = s.split("")
//     var answer = sArray.map((el,index) => {
//         let count = 0;
//         let isEqual = false
//         for(let i = index-1; i>=0; i--){
//             if(sArray[i] === el){
//                 isEqual = true
//                 break
//             }else{
//                 count += 1
//             }
//         }
//         console.log(el)
//         return isEqual ? count+1 : -1
        
//     })
//     return answer;
// }

// // function solution(s) {
// //     let lastSeen = {};  // 각 문자의 마지막 등장 위치 저장
// //     let result = [];    // 결과를 저장할 배열

// //     for (let i = 0; i < s.length; i++) {
// //         let char = s[i];  

// //         if (lastSeen[char] !== undefined) {
// //             // 이전에 등장한 적이 있다면 거리 계산
// //             result.push(i - lastSeen[char]);
// //         } else {
// //             // 처음 등장한 문자라면 -1 저장
// //             result.push(-1);
// //         }

// //         // 현재 문자의 위치 업데이트
// //         lastSeen[char] = i;
// //     }

// //     return result;
// // }

// // // 테스트
// // console.log(solution("banana"));  // [ -1, -1, -1, 2, 2, 2 ]
// // console.log(solution("foobar"));  // [ -1, -1, 1, -1, -1, -1 ]