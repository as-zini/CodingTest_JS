// function solution(p) {
//     //올바른 문자열인지 확인하는 함수 만들기
//     //1-4단계 구현
//     var answer = '';
//     var p = p;
//     var checkCorrect = (str) => {
//         var stack = [];
//         for(let char of str){
//             if(char === "("){
//                 stack.push(char)
//             }else{
//                 if(stack.pop() === ")")return false
                
//             }
//         }
//         if(stack.length === 0)return true
//     }
//     const checkBalance = (str) => {
//         var leftC = 0
//         var rightC = 0
//         for(let i=0; i<str.length; i++){
//             if(str[i] === "(")leftC+=1
//             else rightC += 1
//             if(leftC === rightC){
                
//                 return i === str.length-1? [str.slice(0,i+1), ""] : [str.slice(0,i+1), str.slice(i+1)]
//             }
//         }
//     }
//     if(p === "" || checkCorrect(p))return p
    
//     function op(str){
//         var [u,v] = checkBalance(str);
//         console.log("u",u,"v",v)
//         if(checkCorrect(u)){
//             if(v !== ""){
//                 v = op(v)
//                 return u + v
//             }else return u
//         }else{
//             var newV = op(v)
//             var newStr = "(" + newV + ")"
//             newStr += u.slice(1,u.length-1).split("").map((el) => el === ")" ? "(" : ")").join("")
//             return newStr
            
//         }
//     }
    
//     var answer = op(p)
    
//     return answer;
// }

function solution(p) {
  const isCorrect = str => {
    const stack = [];
    for (const c of str) {
      if (c === "(") stack.push(c);
      else {
        if (!stack.length) return false;
        stack.pop();
      }
    }
    return stack.length === 0;
  };

  const splitBalanced = str => {
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
      cnt += str[i] === "(" ? 1 : -1;
      if (cnt === 0) return [ str.slice(0, i+1), str.slice(i+1) ];
    }
  };

  function transform(str) {
    if (!str) return "";                    // 1단계
    const [u, v] = splitBalanced(str);      // 2단계
    if (isCorrect(u)) {                     // 3단계
      return u + transform(v);
    } else {                                // 4단계
      let tmp = "(";
      tmp += transform(v);
      tmp += ")";
      // u의 앞뒤 잘라서 방향 뒤집기
      const flipped = u
        .slice(1, -1)
        .split("")
        .map(c => (c === "(" ? ")" : "("))
        .join("");
      return tmp + flipped;
    }
  }

  return transform(p);
}
