// function solution(spell, dic) {
//     var count = 0;
//     dic.forEach((el) => {
//         spell.forEach((el1) => {
//             if(el.includes(el1)){
//                 count += 1
//             }
//         })
//         if(count !== spell.length){
//             count = 0;
//         }
//     })
//     console.log(count)
//     var answer = count === spell.length ? 1 : 2
//     return answer;
// }

function solution(spell, dic) {
  // spell을 정렬하여 하나의 문자열로 변환
  const target = spell.sort().join("");

  // dic의 각 단어를 정렬한 후 spell과 비교하여 존재하면 1, 없으면 2 반환
  return dic.some(word => word.split("").sort().join("") === target) ? 1 : 2;
}

// 테스트
console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])); // 2
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]));       // 1
console.log(solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])); // 2