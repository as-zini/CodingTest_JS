function solution(wallpaper){
    var isFileArr = []
    for(let i = 0;i<wallpaper.length;i++){
        for(let j = 0;j<wallpaper[0].length;j++){
            if(wallpaper[i][j] === "#")isFileArr.push([i,j])
        }
    }
    const lux = isFileArr[0][0]
    const luy = isFileArr[isFileArr.length-1][0]+1
    const rdx = isFileArr.sort((a,b) => a[1] - b[1])[0][1]
    const rdy = isFileArr[isFileArr.length-1][1]+1
    return [lux,rdx,luy,rdy]
}









// function solution(wallpaper) {
//     var length = wallpaper[0].length
//     var maxX = 0
//     var minX = 0
//     var maxY = 0
//     var minY = 0
//     var result = []
//     // wallpaper.forEach((el,index) => {
//     //     while(el.includes("#")){
//     //         let y = el.indexOf("#")
//     //         let x = index
//     //         result = [...result, [x,y]] 
//     //         el.replace("#",".")
//     //     }
//     // })
//     console.log(wallpaper[0].includes("#"))
//     // result.sort((a,b) => a[0]-b[0])
//     // console.log(result)
//     // minX = result[0][0]
//     // maxX = result[result.length-1][0]+1
//     // result.sort((a,b) => a[1]-b[1])
//     // minY = result[0][1]
//     // maxY = result[result.length-1][1]+1
//     var answer = []
//     // console.log(result)
//     return answer;
// }

// // function solution(wallpaper) {
// //     let minX = Infinity, maxX = -Infinity;
// //     let minY = Infinity, maxY = -Infinity;

// //     // 2차원 배열을 순회하며 '#'이 있는 위치 찾기
// //     for (let i = 0; i < wallpaper.length; i++) {
// //         for (let j = 0; j < wallpaper[i].length; j++) {
// //             if (wallpaper[i][j] === "#") {
// //                 minX = Math.min(minX, i);
// //                 maxX = Math.max(maxX, i);
// //                 minY = Math.min(minY, j);
// //                 maxY = Math.max(maxY, j);
// //             }
// //         }
// //     }

// //     // rdx와 rdy는 마지막 파일이 있는 좌표보다 +1
// //     return [minX, minY, maxX + 1, maxY + 1];
// // }