const fs = require("fs");
const [assetLine, priceLine] = fs
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");
const initCash = Number(assetLine);
const prices = priceLine.split(" ").map(Number);

// --- 1) BNP 전략 초기화 ---
let bnpCash = initCash;
let bnpStock = 0;

// --- 2) TIMING 전략 초기화 ---
let timCash = initCash;
let timStock = 0;
let upCount = 0;
let downCount = 0;

// --- 3) 매일 시뮬레이션 ---
for (let i = 0; i < prices.length; i++) {
  const today = prices[i];
  
  // 3-1) TIMING: 가격 변동 카운트 갱신
  if (i > 0) {
    if (today > prices[i - 1]) {
      upCount++;
      downCount = 0;
    } else if (today < prices[i - 1]) {
      downCount++;
      upCount = 0;
    } else {
      // 같으면 둘 다 리셋
      upCount = 0;
      downCount = 0;
    }
  }

  // 3-2) BNP: 매일 가능한 한도 내 전량 매수
  {
    const canBuy = Math.floor(bnpCash / today);
    if (canBuy > 0) {
      bnpStock += canBuy;
      bnpCash -= canBuy * today;
    }
  }

  // 3-3) TIMING 전략 매매
  if (downCount >= 3) {
    // 3일 연속 하락 → 전량 매수
    const canBuy = Math.floor(timCash / today);
    if (canBuy > 0) {
      timStock += canBuy;
      timCash -= canBuy * today;
    }
  } else if (upCount >= 3) {
    // 3일 연속 상승 → 전량 매도
    if (timStock > 0) {
      timCash += timStock * today;
      timStock = 0;
    }
  }
}

// --- 4) 최종 자산 계산 (1월 14일 가격 = prices[13]) ---
const finalPrice = prices[prices.length - 1];
const bnpTotal = bnpCash + bnpStock * finalPrice;
const timTotal = timCash + timStock * finalPrice;

// --- 5) 결과 출력 ---
if (bnpTotal > timTotal) {
  console.log("BNP");
} else if (bnpTotal < timTotal) {
  console.log("TIMING");
} else {
  console.log("SAMESAME");
}
