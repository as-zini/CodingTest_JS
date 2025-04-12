function solution(array, height) {
    var result = array.filter((el) => el > height)
    var answer = result.length
    return answer;
}