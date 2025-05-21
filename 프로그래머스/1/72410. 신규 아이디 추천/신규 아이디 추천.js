function solution(new_id){
    var step1 = new_id.toLowerCase()
    console.log(step1)
    var step2 = step1.replace(/[^a-z0-9\-\_\.]/g,"")
    console.log(step2)
    var step3 = step2.replace(/\.{2,}/g,".")
    console.log(step3)
    var step4 = step3.replace(/^\.|\.$/g,"")
    console.log(step4)
    var step5 = step4.length === 0 ? "a" : step4
    console.log(step5)
    var step6 = step5.length >= 16 ?  step5.slice(0,15).replace(/^\.|\.$/g,""): step5
    console.log(step6)
    var step7 = step6.length <= 2 ? step6 + step6[step6.length-1].repeat(3-step6.length) : step6
    
    return step7
    
}








// function solution(new_id) {
//     var answer = new_id
//     //정규표현식 배우고 다시 풀기
//     return answer;
// }