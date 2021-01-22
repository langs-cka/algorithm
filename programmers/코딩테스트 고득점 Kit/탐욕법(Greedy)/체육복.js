function solution(n, lost, reserve) {
    const lostSet = new Set(lost);
    const reserveSet = new Set(reserve);
    let count = 0;
    
    reserve.forEach(r => {
        if (lostSet.has(r)) {
            reserveSet.delete(r);
            lostSet.delete(r);
        }
    });
    
    lostSet.forEach(lost => {
        if (reserveSet.has(lost - 1)) {
            reserveSet.delete(lost - 1);
            lostSet.delete(lost);
        } else if (reserveSet.has(lost + 1)) {
            reserveSet.delete(lost + 1);
            lostSet.delete(lost);
        }
    });
    
    return n - lostSet.size;
}