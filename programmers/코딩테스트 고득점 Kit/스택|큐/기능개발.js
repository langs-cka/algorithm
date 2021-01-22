function solution(progresses, speeds) {
    let date = 0;
    let count = 0;
    let answer = [];
    let temp = 0;
    
    progresses.forEach((p, i) => {
        temp = p + speeds[i] * date;
        if (temp < 100) {
            if (count) {
                answer.push(count);
                count = 0;
            }
            date += Math.ceil((100 - temp) / speeds[i]);
        }
        count++;
    });
    
    if (count) {
        answer.push(count);
        count = 0;
    }
    
    return answer;
}