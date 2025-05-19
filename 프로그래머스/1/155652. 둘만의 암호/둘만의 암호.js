function solution(s, skip, index){
    var skipNum = skip.split("").map((el) => el.charCodeAt(0))
    var aNum = "a".charCodeAt(0)
    var zNum = "z".charCodeAt(0)
    var answer = s.split("").map((el) => {
        var charNum = el.charCodeAt(0)
        for(let i = 1; i<=index;i++){
            charNum += 1
            if(charNum > zNum){
                charNum = aNum
            }
            while(skipNum.includes(charNum)){
                charNum+=1
                if(charNum > zNum){
                charNum = aNum
            }
            }
            
            console.log(String.fromCharCode(charNum))
        }
        
        return String.fromCharCode(charNum)
    })
    return answer.join("")
}









// function solution(s, skip, index){
//     var start = 'a'.charCodeAt(0)
//     var end = 'z'.charCodeAt(0)
//     var skipList = skip.split("").map((el) => el.charCodeAt(0))
//     console.log(skipList)
//     var answer = s.split("").map((el) => {
//         let char = el.charCodeAt(0)
//         let count = skipList.filter((el) => el < char + index && el> char).length + index
//         let result = ''
//         console.log(char, count)
//         if(char + count > end){
//             result = String.fromCharCode(start -1 + ((char+count) - end)%26)
//         }else{
//             result = String.fromCharCode(char + count)
//         }
//         return result
//     }).join("")
     
//     return answer
// }






// function solution(s, skip, index) {
//     const skipSet = new Set(skip);  // 제외할 알파벳들을 Set으로 저장 (빠른 탐색을 위해)
//     const aCode = 'a'.charCodeAt(0);  // 'a'의 아스키 코드 (97)
//     const zCode = 'z'.charCodeAt(0);  // 'z'의 아스키 코드 (122)
//     let result = '';  // 결과 문자열

//     for (let char of s) {
//         let count = 0;  // 건너뛴 알파벳 개수
//         let currentCode = char.charCodeAt(0);  // 현재 문자의 아스키 코드

//         while (count < index) {  // index만큼 이동할 때까지 반복
//             currentCode++;  // 다음 알파벳으로 이동
//             if (currentCode > zCode) currentCode = aCode;  // 'z'를 넘어가면 'a'로 돌아감
//             if (!skipSet.has(String.fromCharCode(currentCode))) {
//                 count++;  // skip에 없는 알파벳일 때만 count 증가
//             }
//         }

//         result += String.fromCharCode(currentCode);  // 변환된 알파벳 추가
//     }

//     return result;  // 변환된 전체 문자열 반환
// }

// // 🔄 테스트 케이스
// console.log(solution("aukks", "wbqd", 5));  // "happy"