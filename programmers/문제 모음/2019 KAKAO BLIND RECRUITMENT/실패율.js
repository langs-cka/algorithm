function solution(N, stages) {
    let answer = new Array(N);
    let len = stages.length;
    let count = 0;
    
    stages.sort((a, b) => a - b);
    for (let ix = 1; ix <= N; ix++) {
        count = stages.filter(v => v === ix).length;
        answer[ix - 1] = {
            i: ix,
            rate: count / len || 0,
        };
        len -= count;
    }
    
    return answer.sort((a, b) => b.rate === a.rate ? a.i - b.i : b.rate - a.rate).map(v => v.i);
}