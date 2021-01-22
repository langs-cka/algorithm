function solution(distance, rocks, n) {
    rocks.sort((a, b) => a - b);
    let left = 1;
    let right = distance;
    
    let answer=  0;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let prevRock = 0;
        let removeCount = 0;
        
        rocks.forEach(rock => {
            if (rock - prevRock < mid) {
                removeCount++;
            } else {
                prevRock = rock;
            }
        });
        if (distance - prevRock < mid) {
            removeCount++;
        }
        if (removeCount <= n) {
            answer = Math.max(mid, answer);
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return answer;
}