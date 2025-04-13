function solution(order) {
    var count = 0;
    var answer = String(order).split("").map((el) => {count = Number(el) !== 0 ?Number(el)%3 === 0 ? count+1 : count+0 : count+0});
    console.log(String(order).split(""))
    return count;
}