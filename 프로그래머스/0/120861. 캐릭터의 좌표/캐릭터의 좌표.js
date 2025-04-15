function solution(keyinput, board) {
    var max_width = (board[0]-1) / 2
    var max_height = (board[1]-1) / 2
    var init = [0,0];
    var width_count = 0;
    var height_count = 0;
    keyinput.forEach((el) => {
        if(el === "left"){
            width_count = width_count <= -max_width ? -max_width : width_count - 1
        }else if(el === "right"){
            width_count = width_count >= max_width ? max_width : width_count + 1
        }else if(el === "up"){
            height_count = height_count >= max_height ? max_height : height_count + 1
        }else if(el === "down"){
            height_count = height_count <= -max_height ? -max_height : height_count - 1
            console.log(max_width)
        }
    })
    
    var answer = [width_count, height_count];
    return answer;
}