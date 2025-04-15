function solution(sides) {
    big_one = Math.max(...sides);
    small_one = Math.min(...sides);
    var answer = 0;
    for(let i = big_one - small_one+1; i + small_one > big_one; i++ ){
        if(i <= big_one){
        answer = answer + 1
        console.log("1"+i)
        }else{
            break
        }
    }
    for(let i = big_one+1; i < small_one + big_one; i++){
        answer = answer + 1
        console.log("2"+i)
        
    }
    return answer;
}