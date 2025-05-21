function solution(survey, choices){
    var result = {"R":0, "T":0,"C":0,"F":0,"J":0,"M":0,"A":0,"N":0}
    var category = ["RT", "CF", "JM", "AN"]
    survey.forEach((el,index) => {
        var score = choices[index]
        if(score >= 4){
            result[el[1]] ? result[el[1]] += score%4 : result[el[1]] = score%4
        }else{
            result[el[0]] ? result[el[0]] += 4-score:result[el[0]] = 4-score
        }
    })
    const answer = category.map((el,index) => {
        var [c1,c2] = el.split("")
        if(result[c1] === result[c2]){
            return c1 > c2 ? c2 : c1
        }else{
            return result[c1] > result[c2] ? c1 : c2
        }
    }).join("")
    return answer
}










// function solution(survey, choices) {
//     var answer = {"R":0,"T":0,"C":0,"F":0,"J":0,"M":0,"A":0,"N":0};
//     var kind = ["RT","CF","JM","AN"]
//     var result = []
//     survey.forEach((el,index) => {
//         let choice = choices[index];
//         let [disagree, agree] = el;
//         if (choice > 4) {
//             answer[agree] += choice - 4;  // 동의 선택지일 경우 점수 추가
//         } else if (choice < 4) {
//             answer[disagree] += 4 - choice; // 비동의 선택지일 경우 점수 추가
//         }
//     })
//     function getTestResult(A,B){
//         if(answer[A] > answer[B]){
//             result = [...result,A]
//         }else if(answer[A]<answer[B]){
//             result = [...result,B]
//         }else if(answer[A]===answer[B]){
//             result = [...result, A< B ? A : B]
//         }
//     }
//     kind.forEach((el) => {
//         getTestResult(el[0],el[1])
//     })
//     console.log(answer)
//     return result.join("");
// }

// function solution(survey, choices) {
//     let answer = { "R": 0, "T": 0, "C": 0, "F": 0, "J": 0, "M": 0, "A": 0, "N": 0 };
//     let kind = ["RT", "CF", "JM", "AN"];
//     let result = [];

//     survey.forEach((el, index) => {
//         let choice = choices[index];
//         let score = Math.abs(choice - 4);

//         if (choice > 4) {
//             answer[el[1]] += score;  // 동의 선택 시 두 번째 유형에 점수 추가
//         } else if (choice < 4) {
//             answer[el[0]] += score;  // 비동의 선택 시 첫 번째 유형에 점수 추가
//         }
//     });

//     function getTestResult(A, B) {
//         if (answer[A] > answer[B]) {
//             result.push(A);
//         } else if (answer[A] < answer[B]) {
//             result.push(B);
//         } else {
//             result.push(A < B ? A : B); // 사전순 비교
//         }
//     }

//     kind.forEach(el => {
//         getTestResult(el[0], el[1]);
//     });

//     return result.join("");
// }

// // 테스트
// console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])); // "TCMA"
// console.log(solution(["TR", "RT", "TR"], [7, 1, 3])); // "RCJA"