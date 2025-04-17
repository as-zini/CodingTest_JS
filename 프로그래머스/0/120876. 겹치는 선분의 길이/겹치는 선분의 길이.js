function solution(lines) {
    let minX = Math.min(...lines.flat()); // 선분의 최소 시작점
    let maxX = Math.max(...lines.flat()); // 선분의 최대 끝점
    let arr = new Array(maxX - minX + 1).fill(0); // 좌표 기록 배열

    // 1. 선분이 위치하는 좌표에 카운트 추가
    lines.forEach(([start, end]) => {
        for (let i = start; i < end; i++) {
            arr[i - minX]++; // minX를 기준으로 정규화하여 배열 인덱스 보정
        }
    });

    // 2. 두 개 이상의 선분이 겹치는 부분의 길이 계산
    return arr.filter(count => count >= 2).length;
}

// 테스트
console.log(solution([[0, 1], [2, 5], [3, 9]])); // ➝ 2
console.log(solution([[-1, 1], [1, 3], [3, 9]])); // ➝ 0
console.log(solution([[0, 5], [3, 9], [1, 10]])); // ➝ 8