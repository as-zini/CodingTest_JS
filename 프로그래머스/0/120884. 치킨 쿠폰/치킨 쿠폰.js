function solution(chicken) {
  let serviceChicken = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    let newChicken = Math.floor(coupon / 10); // 서비스 치킨 수
    serviceChicken += newChicken;
    coupon = (coupon % 10) + newChicken; // 남은 쿠폰 + 새로 받은 쿠폰
  }

  return serviceChicken;
}

// 테스트
console.log(solution(100));  // 11
console.log(solution(1081)); // 120