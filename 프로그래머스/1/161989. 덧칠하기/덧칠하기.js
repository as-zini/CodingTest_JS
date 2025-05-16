function solution(n, m, section){
    var arr = new Array(9).fill(true)
    for(let i of section){
        arr[i] = false
    }
    var answer = 0
    while(arr.includes(false)){
        var target = arr.indexOf(false)
        for(let i = target;i<target+m;i++){
            if(arr[i] === false)arr[i]=true
        }
        answer += 1
    }
    return answer
}








// function solution(n, m, section) {
//     var answer = 0;
//     var count = 0
//     var section = section
//     while(section.length >=1){
//         if(section[1] - section[0] >= m){section.shift()}
//         else{section.shift();section.shift()}
//         answer += 1
//     }
    
//     return answer;
// }

// function solution(n, m, section) {
//     let answer = 0;
//     let lastPainted = 0; // 마지막으로 칠한 위치

//     for (let s of section) {
//         if (s > lastPainted) { // 롤러가 덮지 못하는 구역이면 새로 칠해야 함
//             answer++;  
//             lastPainted = s + m - 1; // 롤러의 오른쪽 끝 위치 업데이트
//         }
//     }

//     return answer;
// }