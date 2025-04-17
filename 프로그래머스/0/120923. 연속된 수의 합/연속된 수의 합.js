function solution(num, total) {
    var answer = [];
    var result = 0;
    if(num % 2 !==0){
        for(let i = 0; i<=total; i++){
            if(i*num === total){
                result = i;
                console.log(result)
                break;
            }
        }
        for(let i = -(Math.floor(num/2)); i<num-(Math.floor(num/2)); i++){
        answer.push(result+i)
    }
    }else{
        for(let i = 0; i<=total; i++){
            if((i+i+1)/2 * num === total){
                result = i;
                console.log(result)
                
                break;
            }
        }
        for(let i = -(Math.floor(num/2)-1); i<num-(Math.floor(num/2)-1); i++){
        answer.push(result+i)
    }
    }
    
    console.log(answer);
    
    return answer;
}