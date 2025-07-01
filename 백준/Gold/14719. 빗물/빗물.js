const fs = require("fs")
const data = fs.readFileSync("/dev/stdin","utf8").trim().split("\n")

const [h, w] = data[0].split(" ").map(Number)

// (생략) fs, input parsing 부분은 그대로

const arr = data[1].split(" ").map(Number);

// 1) 왼쪽에서의 최대 높이(prefix max) 구하기
const leftMax = new Array(w).fill(0);
leftMax[0] = arr[0];
for (let i = 1; i < w; i++) {
  leftMax[i] = Math.max(leftMax[i - 1], arr[i]);
}

// 2) 오른쪽에서의 최대 높이(suffix max) 구하기
const rightMax = new Array(w).fill(0);
rightMax[w - 1] = arr[w - 1];
for (let i = w - 2; i >= 0; i--) {
  rightMax[i] = Math.max(rightMax[i + 1], arr[i]);
}

// 3) 각 칸에 고이는 물 = min(leftMax, rightMax) - height
let total = 0;
for (let i = 0; i < w; i++) {
  const waterHere = Math.min(leftMax[i], rightMax[i]) - arr[i];
  if (waterHere > 0) total += waterHere;
}

console.log(total);
