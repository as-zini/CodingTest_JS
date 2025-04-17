function solution(a, b) {
  // 최대공약수를 구하는 함수 (유클리드 호제법)
  function gcd(x, y) {
    while (y !== 0) {
      let temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  }

  // 기약분수로 만들기 위해 a와 b의 최대공약수로 나누기
  let gcdValue = gcd(a, b);
  let denominator = b / gcdValue;

  // 분모의 소인수가 2와 5만 있는지 확인
  while (denominator % 2 === 0) {
    denominator /= 2;
  }
  while (denominator % 5 === 0) {
    denominator /= 5;
  }

  // 1이 되었다면 2와 5만 존재하는 것, 아니면 다른 소인수가 있음
  return denominator === 1 ? 1 : 2;
}

// 테스트
console.log(solution(7, 20));  // 1
console.log(solution(11, 22)); // 1
console.log(solution(12, 21)); // 2
console.log(solution(1, 10));  // 1
console.log(solution(1, 3));   // 2