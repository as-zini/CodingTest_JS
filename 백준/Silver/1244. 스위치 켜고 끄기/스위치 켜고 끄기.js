const fs = require("fs");
const data = fs
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const switchCount = Number(data[0]);
const switchArr = data[1].split(" "); // ["0","1",...]
const studentCount = Number(data[2]);

const flip = v => (v === "1" ? "0" : "1");

for (let i = 0; i < studentCount; i++) {
  const [sex, numStr] = data[3 + i].split(" ");
  const num = Number(numStr);

  if (sex === "1") {
    // 남학생
    for (let k = num; k <= switchCount; k += num) {
      switchArr[k - 1] = flip(switchArr[k - 1]);
    }
  } else {
    // 여학생
    let l = num - 1, r = num - 1;
    switchArr[l] = flip(switchArr[l]);
    for (let d = 1; l - d >= 0 && r + d < switchCount; d++) {
      if (switchArr[l - d] !== switchArr[r + d]) break;
      switchArr[l - d] = flip(switchArr[l - d]);
      switchArr[r + d] = flip(switchArr[r + d]);
    }
  }
}

// 20개씩 출력
for (let i = 0; i < switchCount; i += 20) {
  console.log(switchArr.slice(i, i + 20).join(" "));
}
