function solution(dot) {
    var answer = 0;
    var x = dot[0];
    var y = dot[1];
    answer = x>0? y>0 ? 1 : 4 : y<0 ? 3 : 2
    return answer;
}