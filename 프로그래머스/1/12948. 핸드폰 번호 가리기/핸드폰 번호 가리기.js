function solution(phone_number) {
    var answer = phone_number.split("").map((el,index) => phone_number.length - index < 5 ? el : "*").join("");
    return answer;
}