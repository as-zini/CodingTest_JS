function solution(dots) {
    var w_point = dots[0][0];
    var h_point = dots[0][1];
    var d_point = dots.filter((el) => el[0] !== w_point && el[1] !== h_point)[0]
    var answer = Math.abs((w_point - d_point[0]) * (h_point - d_point[1]))
    
    return answer;
}