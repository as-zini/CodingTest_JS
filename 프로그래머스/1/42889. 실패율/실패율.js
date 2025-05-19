function solution(N, stages){
    var answer = {}
    new Array(N).fill(0).forEach((el,index) => {
        const stageNum = index+1
        const a = stages.filter((el) => el === stageNum).length
        const b = stages.filter((el) => el >= stageNum).length
        answer[index+1]=a/b
    })
    return Object.entries(answer).sort((a,b) => b[1]-a[1]).map((el) => Number(el[0]))
}










// function solution(N, stages){
//     var answer = [];
//     var result = {}
//     for(let i = 1; i<=N;i++){
//         let a = stages.filter((el) => el === i).length
//         let b = stages.filter((el) => el >= i).length
//         result[i] = a/b
//     }
//     console.log(Object.values(result))
//     return answer
// }





// function solution(N, stages) {
//     const result = [];
//     let players = stages.length; // 총 도전 중인 플레이어 수

//     // 1. 실패율 계산
//     for (let i = 1; i <= N; i++) {
//         const notCleared = stages.filter(stage => stage === i).length; // i번 스테이지에 머물러있는 플레이어 수
//         const failureRate = notCleared / players; // 실패율 계산

//         result.push({ stage: i, failureRate }); // 스테이지와 실패율 저장
//         players -= notCleared; // 다음 스테이지를 위해 도전자 수 갱신
//     }

//     // 2. 실패율을 기준으로 내림차순, 같으면 스테이지 번호 오름차순 정렬
//     result.sort((a, b) => {
//         if (b.failureRate !== a.failureRate) {
//             return b.failureRate - a.failureRate; // 실패율 내림차순
//         }
//         return a.stage - b.stage; // 스테이지 번호 오름차순
//     });

//     // 3. 정렬된 스테이지 번호만 반환
//     return result.map(item => item.stage);
// }

// // 예시 테스트
// console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]
// console.log(solution(4, [4, 4, 4, 4, 4]));          // [4,1,2,3]