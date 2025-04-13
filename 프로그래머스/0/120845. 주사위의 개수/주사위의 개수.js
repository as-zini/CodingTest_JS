function solution(box, n) {
    var total = box[0]*box[1]*box[2]
    var answer = (Math.floor(box[0]/n)*Math.floor(box[1]/n))*Math.floor(box[2]/n)
    return answer;
}