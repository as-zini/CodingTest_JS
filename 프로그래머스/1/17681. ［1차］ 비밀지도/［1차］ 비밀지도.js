function solution(n, arr1, arr2){
    var answer = arr1.map((el,index) => {
        var result = (el | arr2[index]).toString(2)
        if(result.length !== n){
            result = "0".repeat(n-result.length) + result   
        }
        result = result.replaceAll("1","#")
        result = result.replaceAll("0"," ")
        return result
    })
    return answer
}








// //각 array의 주어진 10진수 2진수화
// //두 array에서 벽인 부분 구하기
// //출력


// function solution(n, arr1, arr2){
//     var answer = [];
//     var binaryArr1 = arr1.map((el) => {
//         let result = el.toString(2)
//         return result
//     })
//     var binaryArr2 = arr2.map((el) => {
//         let result = el.toString(2)
//         return result
//     })
//     for(let i = 0; i<arr1.length;i++){
//         let result = []
//         for(let j = n-1; j>0;j--){
            
//             binaryArr1[i][j] || binaryArr2[i][j] ? result.push("#") : result.push(" ")
//         }
//         answer.push(result.join(""))
//     }
//     return answer
// }

// // function solution(n, arr1, arr2) {
// //     var answer = [];
// //     var map1 = arr1.map((el) => el.toString(2))
// //     var map2 = arr2.map((el) => el.toString(2))
// //     for(let i = 0;i<map1.length;i++){
// //         let result = []
// //         let value1 = 0
// //         let value2 = 0
// //         if(map1[i].length < n){
// //             value1 = 0
// //         } else{
// //             value1 = Number(map1[i][0])
// //         }
// //         if(map2[i].length < n){
// //             value2 = 0
// //         }else{
// //             value2 = Number(map2[i][0])
            
// //         }
// //         result.push(value1+value2)
// //         value1=0
// //         value2=0
// //         for(let j = 1;i<map1.length;i++){
// //         value1 = Number(map1[i][j])
// //         value2 = Number(map2[i][j])
// //         result.push(value1+value2 === 2 ? 1 : value1+value2)
// //         value1=0
// //         value2=0
// //         }
        
// //         console.log(result) 
// //         }
// //     console.log(map1)
// //     console.log(map2)
    
    
// //     return answer;
// // }

// // function solution(n, arr1, arr2) {
// //     return arr1.map((num, i) => {
// //         // OR 연산을 수행하여 벽(#)과 공백( )을 판별
// //         let binary = (num | arr2[i]).toString(2).padStart(n, '0');
// //         return binary.replace(/1/g, "#").replace(/0/g, " ");
// //     });
// // }