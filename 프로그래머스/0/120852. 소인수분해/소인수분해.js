function solution(n){
    var answer = new Set()
    var num = n
    var current = 2
    while(num !== 1){
        if(num%current === 0){
            answer.add(current)
            num = num/current
        }else{
            current += 1
        }
    }
    return [...answer]
}










// function solution(n) {
//     let factors = new Set();
//     let divisor = 2;
    
//     while (n >= 2) {
//         if (n % divisor === 0) {
//             factors.add(divisor);
//             n /= divisor;
//         } else {
//             divisor++;
//         }
//     }
    
//     return [...factors];
// }