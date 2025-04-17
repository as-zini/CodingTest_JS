function solution(score) {
  // 각 학생의 평균 점수를 계산하여 배열에 저장
  let avgScores = score.map(([eng, math], index) => ({
    index: index,
    avg: (eng + math) / 2
  }));

  // 평균 점수를 기준으로 내림차순 정렬
  avgScores.sort((a, b) => b.avg - a.avg);

  // 등수를 저장할 배열 생성
  let ranks = new Array(score.length).fill(0);

  // 등수를 계산하여 할당
  let rank = 1;
  for (let i = 0; i < avgScores.length; i++) {
    if (i > 0 && avgScores[i].avg === avgScores[i - 1].avg) {
      // 이전과 같은 점수라면 동일한 등수 부여
      ranks[avgScores[i].index] = ranks[avgScores[i - 1].index];
    } else {
      // 새로운 등수 부여
      ranks[avgScores[i].index] = rank;
    }
    rank++;
  }

  return ranks;
}

// 테스트
console.log(solution([[80, 70], [90, 50], [40, 70], [50, 80]])); 
// [1, 2, 4, 3]

console.log(solution([[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]])); 
// [4, 4, 6, 2, 2, 1, 7]