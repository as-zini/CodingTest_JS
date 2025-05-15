function solution(numlist, n){
    var answer = numlist.sort((a,b) => {
        if(Math.abs(n-a) === Math.abs(n-b)){
            return b-a
        }else{
            return Math.abs(n-a) - Math.abs(n-b)
        }
    })
    return answer
}










// function solution(numlist, n) {
//     return numlist.sort((a, b) => {
//         const distA = Math.abs(a - n);
//         const distB = Math.abs(b - n);
        
//         if (distA === distB) {
//             return b - a; // 값이 클수록 앞에 위치
//         }
//         return distA - distB; // 거리 기준 정렬
//     });
// }

// // 테스트
// console.log(solution([1, 2, 3, 4, 5, 6], 4)); 
// // ➝ [4, 5, 3, 6, 2, 1]

// console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30)); 
// // ➝ [36, 40, 20, 47, 10, 6, 7000, 10000]