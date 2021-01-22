function solution(participant, completion) {
    let obj = {};
    completion.forEach(v => {
        obj[v] = obj[v] ? obj[v] + 1 : 1;
    });
    for (let i = 0, len = participant.length; i < len; i++) {
        if (!obj[participant[i]]) {
            return participant[i]
        }
        obj[participant[i]] = obj[participant[i]] - 1; 
    }
}