function solution(s){
    
    var pCount = 0;
    var yCount = 0;
    s.toLowerCase().split("").forEach((el) => el==="p" ? pCount += 1 : el ==="y" ? yCount += 1 : "")
    var answer = pCount === yCount ? true : false;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(s.toLowerCase())

    return answer;
}