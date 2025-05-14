function solution(before, after){
    var before = before.split("").sort().join("")
    var after = after.split("").sort().join("")
    return before === after ? 1 : 0
}









// function solution(before, after) {
//     return before.split("").sort().join("") === after.split("").sort().join("") ? 1 : 0;
// }