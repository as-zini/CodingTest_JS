function solution(my_string) {
    var string_list = my_string.split(" ");
    var stack = []
    stack.push(Number(string_list[0]))
    var answer = 0;
    for(let i = 1; i<string_list.length; i++){
        if(string_list[i] === "+"){
            var result = stack.shift() + Number(string_list[i+1]);
            stack.push(result)
            console.log(result)
        }else if(string_list[i] === "-"){
            var result = stack.shift() - Number(string_list[i+1])
            stack.push(result)
            console.log(result)
            
        }else{
            continue
        }
        console.log(stack)
    }
    console.log(string_list)
    return stack[0];
}