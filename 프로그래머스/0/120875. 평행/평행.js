function solution(dots) {
    const getDiff = (a,b) => {
        return (a[1]-b[1])/(a[0]-b[0])
    }
    var answer = 0;
    if(getDiff(dots[0],dots[1]) === getDiff(dots[2],dots[3]))answer=1;
    if(getDiff(dots[0],dots[2]) === getDiff(dots[1],dots[3]))answer=1;
    if(getDiff(dots[0],dots[3]) === getDiff(dots[1],dots[2]))answer=1;
    return answer;
}