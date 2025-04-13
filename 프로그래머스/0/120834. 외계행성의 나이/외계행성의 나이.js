function solution(age) {
    var num_list = String(age).split("");
    var alphabet = ["a","b","c","d","e","f","g","h","i","j"]
    var result = [];
    for (let i of num_list){
        result.push(alphabet[Number(i)])
    }
    var answer = result.join("");
    return answer;
}