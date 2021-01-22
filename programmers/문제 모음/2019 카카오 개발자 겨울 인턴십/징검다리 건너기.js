function solution(stones, k) {
    let left = 1;
    let right = 200000000;
    
    function checkStone(mid) {
        let step = 0;
        for (let i = 0, len = stones.length; i < len; i++) {
            if (stones[i] < mid) {
                step++;
            } else {
                step = 0;
            }
            if (step >= k) {
                return false;
            }
        }
        return true;
    }
    
    while(left < right - 1) {
        let mid = (left + right) / 2 | 0;
        if (checkStone(mid)) {
            left = mid;
        } else {
            right = mid;
        }
    }
    
    return left;
}