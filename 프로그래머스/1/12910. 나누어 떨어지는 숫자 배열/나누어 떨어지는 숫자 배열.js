function solution(arr, divisor) {
    var result = arr.filter((el) => el%divisor === 0).sort((a,b) => a-b)
    var answer = result.length === 0 ? [-1] : result
    return answer;
}