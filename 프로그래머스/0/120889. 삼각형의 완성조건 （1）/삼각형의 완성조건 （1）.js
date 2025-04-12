function solution(sides) {
    var max = Math.max(...sides);
    var count = 0;
    var same = 0;
    sides.forEach((el) => {
        if(el<max){
            count = count + el;
        }else if(el = max){
            same++;
        }
    })
    
    var answer = count > max ? 1 : 2;
    if(same>=2){
        answer = 1;
    }
    return answer;
}