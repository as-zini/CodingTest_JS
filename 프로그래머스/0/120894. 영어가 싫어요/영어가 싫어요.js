function solution(numbers) {
    const num_string = ["zero","one","two","three", "four", "five", "six", "seven", "eight", "nine"]
    var answer = numbers;
    for (let i = 0;i<10; i++){
        answer = answer.replaceAll(num_string[i], i)
        
    }
    
    return Number(answer);
}