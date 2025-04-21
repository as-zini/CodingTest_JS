function solution(absolutes, signs) {
    var answer = absolutes.map((el, index) => {
        if(signs[index] === false){
            return -el
        }else{
            return el
        }
    }).reduce((sum,el) => sum+el)
    return answer;
}