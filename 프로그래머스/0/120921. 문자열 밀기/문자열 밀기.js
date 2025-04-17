function solution(A, B) {
  if (A === B) return 0; // 이미 같은 경우

  let rotated = A;
  for (let i = 1; i < A.length; i++) {
    rotated = rotated.slice(-1) + rotated.slice(0, -1); // 오른쪽으로 한 칸 밀기
    if (rotated === B) return i; // 원하는 문자열이 되면 횟수 반환
  }
  
  return -1; // 만들 수 없는 경우
}

// 테스트
console.log(solution("hello", "ohell")); // 1
console.log(solution("apple", "elppa")); // -1
console.log(solution("atat", "tata"));   // 1
console.log(solution("abc", "abc"));     // 0