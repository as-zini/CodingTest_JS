function solution(a, b, n){
    var coke = n
    var newCoke = 0
    while(coke >= a){
        newCoke += Math.floor(coke/a)*b
        coke = Math.floor(coke/a)*b + coke%a
    }
    return newCoke
}










// function solution(a, b, n){
//     var totalCoke = n;
//     var answer = 0;
//     while(totalCoke >= a){
//         answer += Math.floor(totalCoke/a)*b
//         totalCoke = Math.floor(totalCoke/a)*b + totalCoke%a
//         console.log(answer, totalCoke)
//     }
    
//     return answer
// }











// function solution(a, b, n) {
//     let totalCola = 0;
    
//     while (n >= a) {
//         let newCola = Math.floor(n / a) * b;
//         totalCola += newCola;
//         n = (n % a) + newCola;
//     }
    
//     return totalCola;
// }