function solution(rsp) {
    var array = rsp.split("");
    var answer = array.map((el) => el==='2'? el='0' : el==='0'? el='5' : el='2').join("")
    console.log(answer)
    return answer;
}