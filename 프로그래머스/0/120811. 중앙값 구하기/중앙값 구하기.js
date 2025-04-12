function solution(array) {
    var array = array.sort((a,b) => a-b)
    var answer = array[Math.trunc(array.length/2)]
    return answer;
}