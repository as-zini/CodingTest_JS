function solution(schedules, timelogs, startday){
    return timelogs.map((el,index) => {
        var string = [schedules[index]]+""
        var [tTime,tMin] = [string.length === 4 ? string.slice(0,2) :string.slice(0,1), string.length === 4 ? string.slice(2) :string.slice(1)]
        var target = tTime*60 + Number(tMin) + 10
        var result = el.map((time,index) => {
            if((index+startday)%7 === 6 || (index+startday)%7 === 0){
                return true
            }else{
                var tString = time+""
                var[time, min] = [tString.length === 4 ? tString.slice(0,2) :tString.slice(0,1), tString.length === 4 ? tString.slice(2) :tString.slice(1)]
                var total = time*60 + Number(min)
                return total > target ? false : true
            }
            
        })
        return result.includes(false) ? false : true
                            
    }).filter((el) => el === true).length
    
}











// function solution(schedules, timelogs, startday) {
//     //timelogs map 메소드 돌리기
//     //토요일, 일요일 판명
//     //시간 비교해서 지정시간 + 10보다 늦는다면 X리턴
//     //X가 하나도 없는 직원의 수 세기
//     var answer = timelogs.filter((el,index) => {
//         let result = el.map((time, dayIndex) => {
//             let currentDay = (startday+dayIndex)%7
//             console.log(currentDay)
//             return  currentDay=== 6 || currentDay === 0 ? "O" : (!time ||time > schedules[index] + 10) ? "X" : "O"
//         })
//         return !result.includes("X")
//     }).length
//     console.log(answer)
//     return answer;
// }

// // function solution(schedules, timelogs, startday) {
// //     var answer = timelogs.filter((el, index) => {
// //         let result = el.map((time, dayIndex) => {
// //             // 출근 시각이 월요일을 0으로 시작하여, 0~6(일요일까지)의 값이 되도록 계산
// //             const currentDay = (startday + dayIndex - 1) % 7;

// //             // 토요일(6)과 일요일(0)은 출근 시간 체크에서 제외
// //             if (currentDay === 6 || currentDay === 0) {
// //                 return "O";
// //             }

// //             // 출근 시각이 설정한 출근 시각 + 10분을 초과하는지 체크
// //             return time <= schedules[index] + 10 ? "O" : "X";
// //         });

// //         // "X"가 하나라도 있으면 상품을 받을 수 없음
// //         return !result.includes("X");
// //     }).length;

// //     return answer;
// // }