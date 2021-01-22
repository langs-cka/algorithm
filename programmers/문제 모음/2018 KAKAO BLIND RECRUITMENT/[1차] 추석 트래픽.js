function solution(lines) {
    const logTimes = [];
    const logPoints = [];
    if (lines.length === 1) {
        return 1;
    }
    lines.forEach(line => {
        const [date, time, duration] = line.split(' ');
        const [h, m, s] = time.split(':');
        // const ms = s.split('.')[1];
        const d = duration.substring(0, duration.length - 1);
        const endTime = (h * 60 * 60) + (m * 60) + +s;
        const startTime = endTime - +d + 0.001;
        logTimes.push([startTime, endTime]);
        logPoints.push(startTime, endTime);
    });
    
    let max = 0;
    logPoints.forEach(point => {
        const startTime = point;
        const endTime = point + 1;
        let count = 0;
        logTimes.forEach(logTime => {
            const [logStartTime, logEndTime] = logTime;
            if (logStartTime >= startTime && logStartTime < endTime ||
                logEndTime >= startTime && logEndTime < endTime ||
                logStartTime <= startTime && logEndTime >= endTime) {
                count++;
            } 
        });
        if (max < count) {
            max = count;
        }
    });
    return max;
}