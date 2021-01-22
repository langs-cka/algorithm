function getMinutes(time) {
    const [h, m] = time.split(':');
    return h * 60 + m * 1;
}

function getTimes(minutes) {
    const h = (minutes / 60 | 0) + "";
    const m = (minutes % 60) + "";
    
    return `${h.padStart(2, '0')}:${m.padStart(2, '0')}`;
}

function solution(n, t, m, timetable) {
    // 셔틀 운행 횟수 n, 셔틀 운행 간격 t, 한 셔틀에 탈 수 있는 최대 크루 수 m
    let startTime = 9 * 60;
    const lastTime = startTime + (n - 1) * t;
    let crews = timetable.map(getMinutes).filter(time => time <= lastTime).sort((a, b) => a - b);
    
    while (startTime <= lastTime) {
        if (!crews.length) {
            return getTimes(lastTime);
        }
        
        if (startTime === lastTime) {
            if (crews.length >= m) {
                return getTimes(crews[m - 1] - 1);
            } else {
                return getTimes(startTime);
            }
        }
        let count = crews.filter(time => time <= startTime).length;
        count = count > m ? m : count;
        // console.log(count);
        
        crews.splice(0, count);
        startTime += t;
    }
}