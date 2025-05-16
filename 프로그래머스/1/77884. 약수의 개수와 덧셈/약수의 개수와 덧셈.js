function solution(left, right){
    var answer = 0
    for(let i = left;i<=right;i++){
        var result = 0
        for(let j = 1;j*j<=i;j++){
            if(i%j === 0){
                result = j*j===i?result+=1:result+=2
            }
        }
        console.log(result)
        answer = result%2 === 0 ? answer += i : answer -= i
    }
    
    return answer
}









// function solution(left, right){
//     var answer = 0
//     for(let i = left;i<=right;i++){
//         var sum = 0
//         for(let j = 1; j<=Math.sqrt(i);j++){
//             if(i%j === 0){
//                sum += 1
//                 if(j !== i/j)sum+=1
//             }
//         }
//         if(sum%2 === 0){
//             answer += i
//         }else{
//             answer -= i
//         }
//     }
    
//     return answer
// }








// // function solution(left, right) {
// //     var answer = [];
// //     var count = 0;
// //     function dirtn(num){
// //         for(let i = 1; i<=num;i++){
// //             if(num % i === 0)count+=1
// //         }
// //         if(count%2===0){
// //             answer.push(num)
// //         }else{
// //             answer.push(-num)
// //         }
// //         count = 0
// //     }
// //     for(let i = left; i <=right;i++){
// //         dirtn(i)
// //     }
// //     return answer.reduce((sum, el) => sum+el, 0);
// // }