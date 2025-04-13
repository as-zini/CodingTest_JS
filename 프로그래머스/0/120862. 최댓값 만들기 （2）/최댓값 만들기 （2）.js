function solution(numbers) {
    var numbers = numbers.sort((a,b) => b-a);
    console.log(numbers[numbers.length-1] * numbers[numbers.length-2])
    var answer = Math.max(numbers[0] * numbers[1] , numbers[numbers.length-1] * numbers[numbers.length-2])
    return answer;
}