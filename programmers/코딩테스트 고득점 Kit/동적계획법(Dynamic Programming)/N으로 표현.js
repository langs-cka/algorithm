function solution(N, number) {
    const max = 8;
    // const set = Array(max).fill(new Set());
    const set = Array(max).fill().map(v => new Set());
    
    for (let i = 0; i < max; i++) {
        set[i].add(+((N + '').repeat(i + 1)));
        
        for (let j = 0; j < i; j++) {
            for (const a of set[j]) {
                for (const b of set[i - j - 1]) {
                    set[i].add(a + b);
                    set[i].add(a - b);
                    set[i].add(a * b);
                    set[i].add(a / b);
                }
            }
        }
        
        if (set[i].has(number)) {
            return i + 1;
        }
    }
    return -1;
}