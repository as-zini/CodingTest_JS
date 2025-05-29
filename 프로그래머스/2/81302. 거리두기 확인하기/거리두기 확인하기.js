// function solution(places) {
//     //places 반복문을 돌며 P일 경우 맨해튼 거리 2 이하인 범위내에 다른 응시자가 있는지 확인
//     //응시자가 수평, 수직에 있다면 그 사이에 파티션 있는지 확인
//     //응시자가 대각선에 있다면 두개의 파티션 있는지 확인
//     var arr = [[0,1],[1,0],[1,1],[1,-1],[0,2],[2,0]]
    
//     var answer = places.map((room) => {
//         for(let i = 0;i<room.length;i++){
//             for(let j = 0;j<room[0].length;j++){
//                 if(room[i][j] === "P"){
//                     for(let dir of arr){
//                         var [x,y] = dir
//                         if(i+x<5 && j+y<5 && i+x>=0 && j+y>=0){
//                             console.log(i+x, j+y)
//                             if(room[i+x][j+y] === "P"){
//                                 if(x === 2 && y === 0){
//                                     if(room[i+1][j] === "O")return 0
//                                 }else if( x === 0 && y === 2){
//                                     if(room[i][j+1] === "O")return 0
//                                 }else if(x === 1 && y=== 1) {
//                                     if(room[i][j+1] === "O" || room[i+1][j] === "O") return 0
                                
//                                 }else if(x === 1 && y === -1){
//                                     if(j-1 > 0){
//                                         if(room[i][j-1] === "O" || room[i+1][j] === "O") return 0
//                                     }
                                    
//                                 }else{
//                                     return 0
//                                 }
                                    
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//         return 1
//     })
    
//     return answer;
// }

function solution(places) {
  const dirs = [
    [0, 1], [1, 0],        // 거리 1
    [0, 2], [2, 0],        // 거리 2 직선
    [1, 1], [1, -1],       // 대각선
  ];

  const result = [];

  for (const room of places) {
    let ok = 1;
    // 2D 접근 편의용
    const grid = room.map(r => r.split(""));

    for (let i = 0; i < 5 && ok; i++) {
      for (let j = 0; j < 5 && ok; j++) {
        if (grid[i][j] !== "P") continue;

        for (const [dx, dy] of dirs) {
          const x = i + dx, y = j + dy;
          // 상하좌우 & 대각선 모두 포함해서,
          // 경계(0 ≤ x,y < 5) 벗어나면 skip
          if (x < 0 || x >= 5 || y < 0 || y >= 5) continue;
          if (grid[x][y] !== "P") continue;

          // P–P 만났으니 중간에 파티션 있는지 검사
          if (dx === 0 && Math.abs(dy) === 1) {
            // 거리 1 바로 옆: 무조건 위반
            ok = 0;
          }
          else if (Math.abs(dx) === 1 && dy === 0) {
            // 거리 1 바로 아래/위: 무조건 위반
            ok = 0;
          }
          else if (dx === 0 && Math.abs(dy) === 2) {
            // 거리 2 수평: 중간 한 칸이 X 여야 함
            const my = j + (dy / 2);
            if (grid[i][my] === "O") ok = 0;
          }
          else if (Math.abs(dx) === 2 && dy === 0) {
            // 거리 2 수직: 중간 한 칸이 X 여야 함
            const mx = i + (dx / 2);
            if (grid[mx][j] === "O") ok = 0;
          }
          else if (dx === 1 && Math.abs(dy) === 1) {
            // 대각선: 양쪽 경로에 모두 X 여야 함
            if (grid[i][j + dy] === "O" || grid[i + dx][j] === "O") {
              ok = 0;
            }
          }

          if (!ok) break;
        }
      }
    }

    result.push(ok);
  }

  return result;
}
