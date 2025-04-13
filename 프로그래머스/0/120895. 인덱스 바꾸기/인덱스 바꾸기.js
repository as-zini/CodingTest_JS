function solution(my_string, num1, num2) {
    var answer = "";
    var my_string = my_string.split("");
    var first_char = my_string[num1];
    var answer = my_string.splice(num1,1,my_string[num2])
    var answer = my_string.splice(num2,1,first_char)
    console.log(my_string)
    
    return my_string.join("");
}