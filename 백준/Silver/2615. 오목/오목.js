const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map(line => line.split(" ").map(Number));

const dx = [0, 1, 1, -1]; // →
const dy = [1, 0, 1, 1];  // ↓ ↘ ↗

function isValid(x, y) {
  return x >= 0 && x < 19 && y >= 0 && y < 19;
}

for (let x = 0; x < 19; x++) {
  for (let y = 0; y < 19; y++) {
    const stone = input[x][y];
    if (stone === 0) continue;

    for (let dir = 0; dir < 4; dir++) {
      const nx = x - dx[dir];
      const ny = y - dy[dir];

      // 이전 방향에 같은 돌 있으면 시작점 아님 (중복 방지)
      if (isValid(nx, ny) && input[nx][ny] === stone) continue;

      let cnt = 1;
      let cx = x;
      let cy = y;

      while (true) {
        cx += dx[dir];
        cy += dy[dir];
        if (!isValid(cx, cy) || input[cx][cy] !== stone) break;
        cnt++;
      }

      if (cnt === 5) {
        console.log(stone);
        console.log(`${x + 1} ${y + 1}`);
        process.exit(0);
      }
    }
  }
}

console.log(0);
