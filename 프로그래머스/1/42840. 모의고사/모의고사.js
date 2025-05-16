function solution(answers){
    var num1 = [1,2,3,4,5]
    var num2 = [2,1,2,3,2,4,2,5]
    var num3 = [3,3,1,1,2,2,4,4,5,5]
    var result = {"1":0,"2":0,"3":0}
    var a1 = 0
    var a2 = 0
    var a3 = 0
    answers.forEach((el,index) => {
        if(el === num1[index%num1.length])result[1] +=1
        if(el === num2[index%num2.length])result[2] +=1
        if(el === num3[index%num3.length])result[3] +=1
        
    })
    return Object.entries(result).sort((a,b) => b[1]-a[1]).filter((el,index,arr) => el[1] === arr[0][1]).map((el) => Number(el[0]))
}










// function solution(answers) {
//     var num1 = '12345'
//     var num2 = '21232425'
//     var num3 = '3311224455'
//     var resultObj = {
//         count1 : 0,
//         count2 : 0,
//         count3 : 0
//     }
//     answers.forEach((el,index) =>{
//         if(num1[index%5] == el){resultObj.count1+=1}
//         if(num2[index%8] == el){resultObj.count2+=1}
//         if(num3[index%10] == el){resultObj.count3 += 1}
//     })
//     var answer = [resultObj.count1,resultObj.count2,resultObj.count3].sort((a,b) => b-a).filter((el) => el !== 0).map((el,index) => index+1)
    
//     return answer;
// }

// // function solution(answers) {
// //     const patterns = [
// //         [1, 2, 3, 4, 5], // 1번 수포자 패턴
// //         [2, 1, 2, 3, 2, 4, 2, 5], // 2번 수포자 패턴
// //         [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] // 3번 수포자 패턴
// //     ];
    
// //     // 각 수포자의 정답 개수를 저장할 배열
// //     const scores = [0, 0, 0];

// //     // 문제를 하나씩 확인하며 맞춘 개수를 카운트
// //     answers.forEach((answer, index) => {
// //         patterns.forEach((pattern, person) => {
// //             if (answer === pattern[index % pattern.length]) {
// //                 scores[person]++;
// //             }
// //         });
// //     });

// //     // 최고 점수 찾기
// //     const maxScore = Math.max(...scores);

// //     // 최고 점수를 받은 사람 찾기 (1번부터 시작하므로 +1)
// //     return scores
// //         .map((score, index) => (score === maxScore ? index + 1 : null))
// //         .filter(v => v !== null);
// // }