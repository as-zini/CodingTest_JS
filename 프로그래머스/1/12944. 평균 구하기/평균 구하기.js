function solution(arr) {
    var answer = arr.reduce((sum, el) => sum+el)/arr.length;
    return answer;
}