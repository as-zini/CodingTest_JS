function solution(polynomial) {
    var xResult = 0;
    var constResult = 0;
    polynomial.split(" ").forEach((el) => {
        if(el[el.length-1] === "x"){
            xResult += el.length===1 ? 1 : Number(el.replace("x",""))
        }else if(el === "+"){
            
        }else{
            constResult += Number(el)
        }
    })
    console.log(xResult, constResult)
    var answer = `${xResult === 0 ? "" : xResult === 1? "x" : `${xResult}x`}${constResult === 0 ? "": xResult === 0 ? `${constResult}` :  ` + ${constResult}`}`
    return answer;
}