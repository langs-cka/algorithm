function solution(priorities, location) {
    priorities = priorities.map((priority, i) => ({
        i,
        priority,
    }));
    let max = getMax(priorities);
    let answer = 0;
    
    while(true) {
        if (priorities[0].priority === max) {
            if (priorities[0].i === location) {
                return answer + 1;
            } else {
                answer++;
                priorities.shift();
                max = getMax(priorities);
            }
        } else {
            priorities.push(priorities.shift());
        }   
    }
}

function getMax(priorities) {
    return Math.max(...priorities.map(v => v.priority));
}