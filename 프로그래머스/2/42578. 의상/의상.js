function solution(clothes) {
    var answer = 0;
    var obj = {}
    clothes.forEach((el) => {
        if(!obj[el[el.length-1]]){
            obj[el[el.length-1]] = new Set()
        }
        for(let i = 0;i<el.length-1;i++){
            obj[el[el.length-1]].add(el[i])
        }
    })
    answer = Object.values(obj).reduce((sum,el) => sum *= el.size+1, 1)-1
    return answer;
}