function solution(numbers) {
    var numbers = numbers.sort((a,b) => b-a);
    
    var result= numbers[0]*numbers[1]
    console.log(numbers)
    return result
}