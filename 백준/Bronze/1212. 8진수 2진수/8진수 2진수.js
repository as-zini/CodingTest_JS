const fs = require("fs");
const oct = fs.readFileSync("/dev/stdin", "utf8").trim();

// 특별 케이스: 입력이 "0" 하나뿐이면 그냥 "0" 출력
if (oct === "0") {
  console.log("0");
  process.exit();
}

// 8진수 한 자리 → 2진수 세 자리 매핑 테이블
const map3 = {
  "0": "000",
  "1": "001",
  "2": "010",
  "3": "011",
  "4": "100",
  "5": "101",
  "6": "110",
  "7": "111",
};

// 1) 첫 글자는 "1"로 시작해야 하므로, 맨 앞만 2진수 그대로(불필요한 0 제거)
// 2) 나머지 글자는 3자릿수 고정 패딩
let ans = "";
ans += parseInt(oct[0], 8).toString(2);  // 예: "3" → "11", "1" → "1", "7" → "111"
for (let i = 1; i < oct.length; i++) {
  ans += map3[oct[i]];
}

console.log(ans);