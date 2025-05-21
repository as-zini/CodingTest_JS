function solution(n, lost, reserve){
    var arr = new Array(n+1).fill(1)
    reserve.forEach((el) => arr[el] = 2)
    lost.forEach((el) => arr[el] -= 1)
    var num = 0
    arr.forEach((el,index) => {
        if(el === 0){
            if(arr[index-1] === 2){
                arr[index-1] -= 1
                arr[index] = 1
            }else{
                if(arr[index+1] === 2){
                    arr[index+1] -= 1
                    arr[index] = 1
                }
            }
        }
    })
    return arr.filter((el) => el >= 1).length-1
}






// function solution(n, lost, reserve){
//     var answer = 0
//     var result = new Array(n+1).fill(1);
//     reserve.forEach((el) => {
//         result[el] = 2
//     })
//     lost.forEach((el) => {
//         if(result[el] === 2){
//             result[el] = 1
//         }else{
//             result[el] = 0
//         }
        
//     })
    
//     for(let i = 1; i<=result.length;i++){
//         if(result[i] === 0){
//             if (result[i - 1] === 2) {
//                 result[i] = 1;
//                 result[i - 1] = 1;
//             } else if (result[i + 1] === 2) {
//                 result[i] = 1;
//                 result[i + 1] = 1;
//             }
//         }else{
//             continue
//         }
//     }
//     answer = result.filter((el) => el >= 1).length-1
    
//     return answer
// }






// // function solution(n, lost, reserve) {
// //     var checkList = new Array(n + 1).fill(0);

// //     // 여벌 체육복 처리
// //     reserve.forEach(el => checkList[el] = 2);
    
// //     // 도난 처리 (여벌 있는 경우와 없는 경우 구분)
// //     lost.forEach(el => {
// //         if (checkList[el] === 2) {
// //             checkList[el] = 1;  // 여벌이 있지만 도난당한 경우
// //         } else {
// //             checkList[el] = 0;  // 도난당했지만 여벌이 없는 경우
// //         }
// //     });

// //     // 체육복 빌려주기
// //     for (let i = 1; i <= n; i++) {
// //         if (checkList[i] === 0) {  // 도난당한 학생일 때
// //             if (checkList[i - 1] === 2) {
// //                 checkList[i] = 1;
// //                 checkList[i - 1] = 1;
// //             } else if (checkList[i + 1] === 2) {
// //                 checkList[i] = 1;
// //                 checkList[i + 1] = 1;
// //             }
// //         }
// //     }

// //     // 체육복이 있는 학생의 수 계산
// //     var answer = checkList.filter(el => el >= 1).length;
// //     return answer;
// // }

// // // 🔄 테스트 케이스
// // console.log(solution(5, [2, 4], [1, 3, 5]));  // 5
// // console.log(solution(5, [2, 4], [3]));          // 4
// // console.log(solution(3, [3], [1]));             // 2