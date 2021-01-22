function solution(skill, skill_trees) {
    let answer = 0;
    let index = 1;
    let skillObj = {};
    let checkSkill = true;
    
    skill.split('').forEach((v, i) => {
        skillObj[v] = ++i;
    });
    
    skill_trees.forEach(v => {
        index = 1;
        checkSkill = true;
        for (let ix = 0, len = v.length; ix < len; ix++) {
            if (skillObj[v[ix]]) {
                if (skillObj[v[ix]] == index) {
                    ++index;
                } else {
                    checkSkill = false;
                    break;
                }
            }
        }
        if (checkSkill) {
            answer++;
        }
    });
    
    return answer;
}