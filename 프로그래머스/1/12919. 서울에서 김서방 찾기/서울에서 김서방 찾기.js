function solution(seoul) {
    var answer = seoul.findIndex((el) => el === "Kim");
    return `김서방은 ${answer}에 있다`;
}