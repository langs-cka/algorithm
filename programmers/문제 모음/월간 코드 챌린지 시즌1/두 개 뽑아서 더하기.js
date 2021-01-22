function solution(numbers) {
    let answer = new Set();
    for (let i = 0, len = numbers.length; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            answer.add(numbers[i] + numbers[j]);
        }
    }
    
    return Array.from(answer).sort((a, b) => a - b);
}