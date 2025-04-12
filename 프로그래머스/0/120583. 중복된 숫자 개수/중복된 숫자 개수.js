function solution(array, n) {
    var result = array.filter((el) => el===n)
    var answer = result.length;
    return answer;
}