function solution(brown, yellow) {
    for (let i = 1, iLen = Math.sqrt(yellow);i <= iLen; i++) {
        if (yellow % i === 0) {
            const a = i + 2;
            const b = yellow / i + 2;
            if (a * b === brown + yellow) {
                return a < b ? [b , a] : [a, b];
            }
        }
    }
}