function solution(dartResult) {
    let answer = ['', '', ''];
    let i = 0;
    let temp = 0;
    dartResult.split('').forEach(v => {
        if (v >= '0' && v <= '9') {
            answer[i] += v;
        } else {
            temp = answer[i];
            if (v === 'S') {
                i++;
            } else if (v === 'D') {
                answer[i] = temp ** 2;
                i++;
            } else if (v === 'T') {
                answer[i] = temp ** 3;
                i++;
            } else if (v === '*') {
                if (answer[i - 2]) {
                    answer[i - 2] *= 2;
                }
                answer[i - 1] *=2;
            } else if (v === '#') {
                answer[i - 1] = -answer[i - 1]
            }
        }
    })
    
    return answer.reduce((acc, cur) => acc + +cur, 0);
}