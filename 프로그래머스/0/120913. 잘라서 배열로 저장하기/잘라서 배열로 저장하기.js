function solution(my_str, n) {
    var answer = [];
    for(let i = 0; i < my_str.length ; i += n){
        answer.push(my_str.split("").splice(i, n).join(""))
        console.log(my_str.split("").splice(3,6).join(""))
    }
    
    return answer;
}