const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim();

const order = "quack";
const states = []; // 진행 중인 오리들의 상태
let maxConcurrent = 0;

for (const ch of input) {
  const idx = order.indexOf(ch); // 현재 문자가 quack 중 몇 번째인지
  if (idx === 0) {
    // 'q' → 새로운 울음 시작
    let found = false;
    for (let i = 0; i < states.length; i++) {
      if (states[i] === 0) {
        states[i] = 1;
        found = true;
        break;
      }
    }
    if (!found) states.push(1); // 새로운 오리 추가
  } else {
    let found = false;
    for (let i = 0; i < states.length; i++) {
      if (states[i] === idx) {
        states[i]++;
        if (states[i] === 5) states[i] = 0; // k까지 완료 → 다시 초기 상태
        found = true;
        break;
      }
    }
    if (!found) {
      console.log(-1);
      process.exit(0);
    }
  }

  const current = states.filter(s => s > 0).length;
  maxConcurrent = Math.max(maxConcurrent, current);
}

if (states.some(s => s !== 0)) {
  console.log(-1); // 일부 오리가 울다 만 경우
} else {
  console.log(maxConcurrent);
}
