function solution(msg){
    var currentIndex = 0
    var dic = [""]
    var answer = []
    var msg = msg;
    for(let i = 0;i<26;i++){
        dic.push(String.fromCharCode(65 + i))
    }
    while(currentIndex < msg.length){
    
        var range = 1
        
        while(dic.includes(currentIndex + range <= msg.length &&msg.slice(currentIndex, currentIndex+range))){
            range += 1
        }
        answer.push(dic.indexOf(msg.slice(currentIndex,currentIndex+range-1)))
        dic.push(msg.slice(currentIndex,currentIndex+range))
        currentIndex += range -1
        
        
    }
    return answer
    
    
}








// function solution(msg) {
//     //전체 로직은 얼추 맞는데 좀 문제인 부분들이 있음(예를들어 마지막 처리 등등) 그거 고쳐보자
//     var answer = [];
//     var strList = msg.split("")
//     var dir = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","Y","V","W","X","Y","Z"]
//     while(strList.length > 1){
//         var result = ""
        
//         for(let i = 0;i<strList.length;i++){
//          result += strList[i]
//             if(!dir.includes(result)){
//                 console.log("Break",i)
//                 dir.push(result)
//                 result = result.slice(0,result.length-1)
//                 strList = strList.slice(i)
//                 break
//             }
//             console.log(result)
//         }
//         console.log(strList)
//         if(dir.includes(result)){
//             answer.push(dir.indexOf(result)+1)
//         }
        
//     }
//     return answer;
// }