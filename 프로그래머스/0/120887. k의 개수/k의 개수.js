function solution(i,j,k){
    var count = 0
    var stringJ = String(j)
    for(let x = i;x<=j;x++){
        String(x).split("").forEach((el) => {
            count = el === stringJ ? count += 1 : count
        })
    }
    return count
}










// function solution(i, j, k) {
//     var answer = 0;
//     for(let x = i; x <= j; x++){
//         if(String(x).includes(String(k))){
//             var result = String(x).replaceAll(String(k), "/")
//             console.log(result.split("/"))
//             console.log(result.length)
//             answer += result.length-1
//         }
//     }
//     return answer;
// }

function solution(i, j, k) {
    let count = 0;
    const target = k.toString(); // 숫자 k를 문자열로 변환
    
    for (let num = i; num <= j; num++) {
        count += num.toString().split('').filter(digit => digit === target).length;
    }
    
    return count;
}