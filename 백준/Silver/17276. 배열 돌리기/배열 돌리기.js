const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const T = Number(input[0]);
let index = 1;

for (let t = 0; t < T; t++) {
    const [nStr, dStr] = input[index++].split(" ");
    const n = Number(nStr);
    const d = Number(dStr);
    const map = [];

    // 입력 배열 파싱
    for (let i = 0; i < n; i++) {
        map.push(input[index++].split(" ").map(Number));
    }

    // 회전 횟수 계산 (시계 방향 45도 단위로 1, 2, ..., 7 / 0이면 그대로)
    let k = (d / 45 + 8) % 8;
    for (let r = 0; r < k; r++) {
        rotateOnce(map, n);
    }

    // 결과 출력
    for (let i = 0; i < n; i++) {
        console.log(map[i].join(" "));
    }
}

// 단일 45도 시계방향 회전 함수
function rotateOnce(matrix, n) {
    const half = Math.floor(n / 2);
    
    // 4라인 따로 추출
    const mainDiag = Array(n).fill(0);
    const subDiag = Array(n).fill(0);
    const midRow  = Array(n).fill(0);
    const midCol  = Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
        mainDiag[i] = matrix[i][i];
        subDiag[i] = matrix[i][n - 1 - i];
        midRow[i]  = matrix[half][i];
        midCol[i]  = matrix[i][half];
    }

    // 시계방향 회전: mainDiag → midCol → subDiag → midRow → mainDiag
    for (let i = 0; i < n; i++) {
        matrix[i][half] = mainDiag[i];             // main → midCol
        matrix[i][n - 1 - i] = midCol[i];          // midCol → subDiag
        matrix[half][i] = subDiag[n - 1 - i];      // subDiag → midRow
        matrix[i][i] = midRow[i];                  // midRow → mainDiag
    }
}
