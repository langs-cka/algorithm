function solution(answers) {
    const supo = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    let score = [0, 0, 0];
    let max = 0;
    
    answers.forEach((answer, i) => {
        supo.forEach((s, j) => {
            if (answer === s[i % s.length]) {
                score[j]++;
            }
        });
    });
    max = Math.max(...score);
    
    return score.map((v, i) => v === max ? i + 1 : 0).filter(v => v);
}