function solution(n, w, num){
    var totalFloor = Math.floor((n-1)/w)+1
    var currentFloor = Math.floor((num-1)/w)+1
    var current = currentFloor%2 === 0 ? num%w === 0 ? 1 : w - (num%w)+1 : num%w === 0 ? w : num%w
    var finish = totalFloor % 2 === 0 ? n%w === 0 ? 1 : w - (n%w)+1 : n%w === 0 ? w : n%w
    var answer = 0
    if(totalFloor%2 === 0){
        if(finish <= current){
            answer = totalFloor-currentFloor+1
        }else{
            answer = totalFloor-currentFloor
        }
    }else{
        if(finish < current){
            answer = totalFloor-currentFloor
        }else{
            answer = totalFloor-currentFloor+1
        }
    }
    console.log(totalFloor, currentFloor, finish, current)
    return answer
}






// function solution(n, w, num) {
//     var answer = 0;
//     var boxList = []
//     var floorCount = 0
//     for(let i = 1; i<= n; i +=w){
//         if(i+w>n){
//             if(floorCount % 2 !== 0){
//                 boxList = [...boxList, [...new Array(w-n%w).fill(false),...new Array(n%w).fill(true)]]
//             }else{
//                 boxList = [...boxList, new Array(n%w).fill(true)]
//             }
//         }else{
//             boxList = [...boxList, new Array(w).fill(true)]
            
//         }
//         floorCount += 1
//     }
//     var index = Math.trunc(num/w) % 2 !== 0 ? w-(num%w) : num%w
//     boxList.forEach((el,floor) => {
//         answer = el[index] && Math.trunc((num-1)/w) <= floor ? answer += 1 : answer
//     })
    
//     return answer;
// }

// function solution(n, w, num) {
//     var answer = 0;
//     var boxList = [];
//     var floorCount = 0;

//     // 📦 박스 리스트 생성 (패턴 유지)
//     for (let i = 1; i <= n; i += w) {
//         if (i + w > n) {
//             let remaining = n % w;
//             if (floorCount % 2 !== 0) {
//                 boxList.push([...new Array(w - remaining).fill(false), ...new Array(remaining).fill(true)]);
//             } else {
//                 boxList.push([...new Array(remaining).fill(true)]);
//             }
//         } else {
//             boxList.push(new Array(w).fill(true));
//         }
//         floorCount += 1;
//     }

//     // 🔢 num의 위치 찾기
//     var row = Math.floor((num - 1) / w);
//     var col = (row % 2 === 0) ? (num - 1) % w : (w - 1) - ((num - 1) % w); // 짝수=왼→오, 홀수=오→왼

//     // 🏗 해당 column 위의 상자 개수 계산
//     for (let floor = row; floor < boxList.length; floor++) {
//         if (boxList[floor][col] !== undefined) {
//             answer += 1;
//         }
//     }

//     return answer;
// }



// function solution(n, w, num) {
//     // 1. num의 위치 찾기
//     let row = Math.floor((num - 1) / w);  // num이 위치한 층
//     let col = (row % 2 === 0) ? (num - 1) % w : w - 1 - ((num - 1) % w); // 방향에 따라 위치 계산
    
//     let count = 0;
    
//     // 2. num이 있는 열의 위층들을 검사
//     for (let r = row; r < Math.ceil(n / w); r++) {
//         let maxNum = Math.min((r + 1) * w, n);  // 해당 층의 마지막 번호
//         let minNum = r * w + 1;  // 해당 층의 첫 번호

//         // 짝수 층(왼→오)일 때는 그대로, 홀수 층(오→왼)일 때는 반대로 접근
//         let columnIndex = (r % 2 === 0) ? col : w - 1 - col;

//         // 현재 층에 해당 열의 상자가 존재하는지 확인
//         let boxNum = minNum + columnIndex;
//         if (boxNum <= maxNum) count++;
//     }
    
//     return count;
// }