function solution(quiz) {
    var answer = [];
    quiz.forEach((el) => {
        var quizEl = el.split(" ");
        var a = Number(quizEl[0]);
        var b = Number(quizEl[2]);
        var result = Number(quizEl[4]);
        var operator = quizEl[1]
        if(operator === "+"){
            a+b === result ? answer.push("O") : answer.push("X")
        }else{
            a-b === result ? answer.push("O") : answer.push("X")
        }
    })
    return answer;
}