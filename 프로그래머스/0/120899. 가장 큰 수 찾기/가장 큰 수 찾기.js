function solution(array) {
    var unsort_array = [...array]
    var sort_array = array.sort((a,b) => b-a);
    var index = unsort_array.indexOf(sort_array[0])
    var answer = [sort_array[0], index];
    console.log(unsort_array)
    return answer;
}