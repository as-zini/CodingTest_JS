function solution(numbers) {
    var cost = 0;
    numbers.map((num) => {
        cost = cost + num
    })
    var answer = cost / numbers.length;
    return answer;
}