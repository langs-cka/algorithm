function solution(n, times) {
    times.sort((a, b) => a - b);
    let min = 1;
    let max = n * times[times.length - 1];
    let answer = max;
    
    while(min <= max) {
        let mid = Math.floor((min + max) / 2);
        let count = 0;
        
        times.forEach(time => {
            count += Math.floor(mid / time);
            if (count >= n) {
                answer = Math.min(answer, mid);
                return;
            }
        });
        
        if (count >= n) {
            max = mid - 1;
        } else if (count < n) {
            min = mid + 1;
        }
    } 
    return answer;
}