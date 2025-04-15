function solution(letter) {
    var morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    var letter_list = letter.split(" ");
    var result = [];
    letter_list.forEach((el) => {
        for(let i = 0; i < morse.length; ++i){
            el === morse[i] ? result.push(i) : null
        }
    })
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r','s','t','u','v','w','x','y','z']
    var answer = result.map((el) => alphabet[el]).join("");
    console.log(answer);
    return answer;
}