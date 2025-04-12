function solution(slice, n) {
    var answer = n%slice !==0 ? Math.trunc(n/slice)+1 : Math.trunc(n/slice);
    return answer;
}