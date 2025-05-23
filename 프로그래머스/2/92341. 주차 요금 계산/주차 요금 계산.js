function solution(fees, records){
    const [baseTime, baseFee, unitTime, unitFee] = fees
    var timeObj = {}
    var costObj = {}
    var inOutObj = {}
    records.forEach((el) => {
        var [time, num, method] = el.split(" ")
        time = time.split(":").reduce((sum, timeEl,index) => index === 0 ? sum+= timeEl*60 : sum+= Number(timeEl),0)
        if(method === "IN"){
            timeObj[num] = timeObj[num] ? timeObj[num] = time : time
            
        }else{
            var cost = time - timeObj[num]
            costObj[num] = costObj[num] ? costObj[num] += cost : cost
            timeObj[num] = 0
        }
        inOutObj[num] = method
        
    })
    Object.entries(inOutObj).filter((el) => el[1] === "IN").forEach((el) => {
        var cost = (23*60 + 59) - timeObj[el[0]]
        costObj[el[0]] = costObj[el[0]] ? costObj[el[0]] += cost : cost
    })
    return Object.entries(costObj).sort((a,b) => Number(a[0])-Number(b[0])).map((el) => el[1] > baseTime ? baseFee + Math.ceil((el[1] - baseTime)/unitTime)*unitFee : baseFee)
    
}







// function solution(fees, records) {
//     var answer = [];
//     var [baseTime, baseFee, extraTime, extraFee] = fees
//     var recordObj = {}
//     var stack = []
//     records.forEach((el) => {
//         var [time, car, method] = el.split(" ")
//         time = time.split(":").reduce((sum, min, index) =>{
//             return index === 0 ? sum + Number(min)*60 : sum + Number(min)
//         },0)
//         if(method === "IN"){
//             recordObj[Number(car)] ? recordObj[Number(car)] += time : recordObj[Number(car)] =  time
//             stack.push(car)
//         }else{
//             recordObj[Number(car)] += (time-recordObj[Number(car)])
//             stack.splice(stack.indexOf(car),1)
//         }
//         console.log(stack)
//     })
//     console.log(recordObj)
//     if(stack.length > 0){
//         stack.forEach((el) => {
            
//         })
//     }
//     console.log(Object.keys(recordObj).sort((a,b) => a-b).map((el) => {
//         if(el-baseTime > 0){
//             return baseFee + Math.floor((el-baseTime)/extraTime)*extraFee
//         }else{
//             return baseFee
//         }
//     }))
    
//     return answer;
// }