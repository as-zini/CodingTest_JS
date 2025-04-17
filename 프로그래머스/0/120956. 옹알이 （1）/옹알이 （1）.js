function solution(babbling) {
    var answer = 0;
    for(let i = 0; i<babbling.length; i++){
        var result = babbling[i].replace("aya"," ")
        result = result.replace("ye", " ")
        result = result.replace("woo"," ")
        result = result.replace("ma"," ")
        console.log(result)
        if(result.trim().length === 0){
            answer += 1
        }
    }
    return answer;
}