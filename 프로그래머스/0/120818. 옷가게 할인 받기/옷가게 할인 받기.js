function solution(price) {
    var total = price < 100000 ? price : price <300000 ? price*0.95 : price < 500000 ? price*.9 : price*.8
    var answer = Math.trunc(total)
    return answer;
}