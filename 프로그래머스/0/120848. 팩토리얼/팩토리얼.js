function solution(n){
    var f1 = 1
    var f2 = 2
    var current = f1*f2
    if(n<=5 && n>1)return 2
    else if(n===1) return 1
    for(let i = 3;i<=10;i++){
        var current = current*i
        if(current>n){
            return i-1
        }else if(current === n){
            return i
        }
    }
}








// function solution(n) {
//     const fact_func = (n) => {
//         var result = 1;
//         for(let i = 1; i <= n; ++i){
//             result = result * i
//         }
//         return result
//     }
//     var answer = 0;
//     var fact_list = [fact_func(1), fact_func(2), fact_func(3), fact_func(4), fact_func(5), fact_func(6), fact_func(7), fact_func(8), fact_func(9), fact_func(10)]
//     for(let j = 1; j <= fact_list.length+1; ++j){
//         if(n <= fact_list[j] && n >= fact_list[j-1]){
//             if(n=== fact_list[j]){
//                 answer = j+1
//             }else{
//                 answer = j
//             }
//         }
//     }
    
//     console.log(fact_list)
//     return answer;
// }