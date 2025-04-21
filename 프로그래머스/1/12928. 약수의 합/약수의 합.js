function solution(n) {
    var result = new Set();
    if(n === 0)return 0
    for(let i = 1; i<=n; i++){
        if(n%i===0){
            result.add(i)
        }
    }
    var answer = [...result].reduce((i, el) => el + i)
    return answer;
}