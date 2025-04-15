function solution(s) {
    var char_list = s.split(" ");
    var cost = 0;
    var before_num = 0;
    var answer = char_list.forEach((el) => {
        if(el === "Z"){
            cost = cost - before_num;
            
        }else{
            cost = cost + Number(el);
            before_num = Number(el);
            
        }
        
    })
    
    return cost;
}