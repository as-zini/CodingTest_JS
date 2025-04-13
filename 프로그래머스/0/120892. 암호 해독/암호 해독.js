function solution(cipher, code) {
    var text = [];
    for(let i = 0; i < cipher.length; ++i){
        if((i+1)%code === 0){
            text.push(cipher[i])
        }
    }
    var answer = text.join("");
    return answer;
}