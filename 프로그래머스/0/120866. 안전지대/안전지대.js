function solution(board) {
    let n = board.length;
    let dangerBoard = board.map(row => [...row]); // 원본 배열을 복사하여 사용
    
    // 8방향 (상, 하, 좌, 우, 대각선)
    const directions = [
        [-1, -1], [-1, 0], [-1, 1], // 위쪽 대각선, 위, 위쪽 대각선
        [0, -1],         [0, 1],    // 왼쪽, 오른쪽
        [1, -1], [1, 0], [1, 1]     // 아래쪽 대각선, 아래, 아래쪽 대각선
    ];

    // 1. 지뢰가 있는 위치를 찾고 위험지역 표시
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                // 현재 지뢰 위치도 위험지역(-1)로 설정
                dangerBoard[i][j] = -1;

                // 8방향 위험지역 설정
                for (let [dx, dy] of directions) {
                    let ni = i + dx, nj = j + dy;
                    if (ni >= 0 && ni < n && nj >= 0 && nj < n && board[ni][nj] === 0) {
                        dangerBoard[ni][nj] = -1;
                    }
                }
            }
        }
    }

    // 2. 안전한 지역 개수 세기 (0인 칸의 개수)
    let safeCount = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (dangerBoard[i][j] === 0) safeCount++;
        }
    }

    return safeCount;
}

// 테스트
console.log(solution([
    [0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0], 
    [0, 0, 1, 0, 0], 
    [0, 0, 0, 0, 0]
])); // ➝ 16

console.log(solution([
    [0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0], 
    [0, 0, 1, 1, 0], 
    [0, 0, 0, 0, 0]
])); // ➝ 13

console.log(solution([
    [1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1]
])); // ➝ 0