function solution(n, t, m, p){
    //n:진법수, t: 미리구할 숫자 갯수 m:게임참가인원, p:튜브순서
    var count = 0
    var current = 0
    var answer = ""
    var currentIndex = 0
    while(true){
        var string = current.toString(n)
        for(let el of string.split("")){
            if(currentIndex+1 === p){
                answer += el
                count += 1
                if(count === t)return answer.toUpperCase()
            }
            currentIndex = (currentIndex+1)%m
        }
        
        current+=1
    }
}







// function solution(n, t, m, p) {
//     var answer = '';
//     var currentNum = 0;
//     var current = 0
    
//     while(answer.length < t){
//         var str = currentNum.toString(n)
//         for(let i = 1;i<=str.length;i++){
//             current = current+i > m ? (current+i)%m : current+i
//             console.log("current",current)
//             if(current === p){
//                 answer += str[i-1]
//                 console.log("answer",answer)
//             }
            
//             console.log("str",str)
//         }
//         currentNum += 1
//     }
//     return answer;
// }