function solution(my_string) {
    var answer = '';
    var string = my_string.split("");
    var result = string.filter((el) => el!=="a" && el!=="e" && el!=="i" && el!=="o" && el!=="u");
    answer = result.join("")
    return answer;
}