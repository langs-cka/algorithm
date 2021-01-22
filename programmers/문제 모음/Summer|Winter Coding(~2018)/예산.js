function solution(d, budget) {
    let total = 0;
    let len = d.length;
    d.sort((a, b) => a - b);
    for (let ix = 0; ix < len; ix++) {
        total += d[ix];
        if (total > budget) {
            return ix;
        }
    }
    return len;
}