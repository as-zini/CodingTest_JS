function solution(skill, skill_trees) {
    var answer = 0;
    
    skill_trees.forEach((el) => {
        var tag = true
        var stack = []
        for(let i of el){
            if(skill.includes(i) && skill.indexOf(i) !==0){
                if(stack[stack.length-1] === skill[skill.indexOf(i)-1]){
                    stack.push(i)
                }else{
                    tag = false
                    break
                }
            }
            if(skill.indexOf(i) === 0){
                stack.push(i)
            }
        }
        if(tag)answer+=1
    })
    return answer;
}