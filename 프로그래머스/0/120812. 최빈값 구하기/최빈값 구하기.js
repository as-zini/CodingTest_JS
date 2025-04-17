function solution(array) {
    let freqMap = new Map();

    // 1. 각 숫자의 빈도수 계산
    array.forEach(num => {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    });

    // 2. 최빈값 찾기
    let maxCount = 0;
    let mode = -1;
    let isMultiple = false;

    for (let [num, count] of freqMap) {
        if (count > maxCount) {
            maxCount = count;
            mode = num;
            isMultiple = false;
        } else if (count === maxCount) {
            isMultiple = true;
        }
    }

    return isMultiple ? -1 : mode;
}

// 테스트
console.log(solution([1, 2, 3, 3, 3, 4])); // ➝ 3
console.log(solution([1, 1, 2, 2]));       // ➝ -1
console.log(solution([1]));               // ➝ 1