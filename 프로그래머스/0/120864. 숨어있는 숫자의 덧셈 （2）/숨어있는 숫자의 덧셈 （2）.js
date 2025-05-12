function solution(my_string){
    const reg = /[\D+]/g
    return my_string.split(reg).reduce((sum,el) => el ? sum+=Number(el) : sum, 0)
}











// function solution(my_string) {
//     return (my_string.match(/\d+/g) || []).reduce((sum, num) => sum + Number(num), 0);
// }