function solution(my_string){
    var set = new Set(my_string.split(""))
    return [...set].join("")
    
}










// function solution(my_string) {
//     var answer = '';
//     var my_string = my_string.split("");
//     var result = [];
//     for(let i = 0; i < my_string.length; i++){
//         if(!result.includes(my_string[i])){
//             result.push(my_string[i])
//         }
//     }
//     return result.join("");
// }