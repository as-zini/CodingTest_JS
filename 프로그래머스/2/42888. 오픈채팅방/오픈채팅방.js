function solution(record) {
    var answer = [];
    var nameObj = {}
    
    record.forEach((el) => {
        var [method, id, name] = el.split(" ")
        if(method === "Enter" || method === "Change")nameObj[id] = name
    })
    
    record.forEach((el) => {
        var [method, id] = el.split(" ")
        if(method === "Enter"){
            answer.push(`${nameObj[id]}님이 들어왔습니다.`)
        }else if(method === "Leave"){
            answer.push(`${nameObj[id]}님이 나갔습니다.`)
        }
    })
    return answer;
}