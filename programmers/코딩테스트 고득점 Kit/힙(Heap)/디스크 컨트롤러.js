function solution(jobs) {
    jobs.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    
    let jobsLen = jobs.length;
    let time = 0;
    let answer = 0;
    
    
    while(jobs.length) {
        let target = jobs[0];
        let index = 0;
        for (let i = 1, len = jobs.length; i < len; i++) {
            if (jobs[i][0] <= time && jobs[i][1] < target[1]) {
                target = jobs[i];
                index = i;
            }
        }
        if (time < target[0]) {
            time = target[0];
        }
        time = time + target[1];
        answer += time - target[0];
        jobs.splice(index, 1);
    }
    
    return answer / jobsLen | 0;
}