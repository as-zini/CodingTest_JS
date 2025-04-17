function solution(common) {
    var type = "";
    var cd = 0;
    var cr = 0;
    
    if(common[1] - common[0] === common[2] - common[1]){
        type = "sub";
        cd = common[1] - common[0]
    }
    if(common[1]/common[0] === common[2]/common[1]){
        type="mul";
        cr = common[1]/common[0]
    }
    console.log(type, cd, cr)
    var answer = type === "sub" ? common[common.length-1] + cd : common[common.length-1] * cr
    return answer;
}