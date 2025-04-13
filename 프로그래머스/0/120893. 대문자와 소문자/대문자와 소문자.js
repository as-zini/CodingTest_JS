function solution(my_string) {
    
    var answer = my_string.split("").map((el) => {
        if(el===el.toUpperCase()){
            return el.toLowerCase()
            console.log(el.toLowerCase())
        } else {
            return el.toUpperCase()
        }
    }).join("")
    return answer;
}