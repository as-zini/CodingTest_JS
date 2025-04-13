function solution(my_string) {
    var result1 = [];
    var num_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i of my_string) {
        if (num_list.includes(Number(i))) {
            result1.push(Number(i));
        }
    }
    var answer = result1.sort((a,b) => a-b)
    return answer;
}
