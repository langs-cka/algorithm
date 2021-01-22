function solution(number, k) {
    let answer = [];
    let temp = 0;
    for (let i = 0, len = number.length; i < len; i++) {
        temp = number[i];
        while(k > 0 && answer[answer.length - 1] < temp) {
            answer.pop();
            k--;
        }
        answer.push(temp);
    }
    
    return answer.slice(0, answer.length - k).join('');
}