function solution(citations) {
    citations.sort((a, b) => b - a);
    let answer = 0;
    for(let i = 0, len = citations.length; i < len; i++) {
        if (citations[i] >= i + 1) {
            answer = i + 1;
        } else {
            break;
        }
    }
    
    return answer;
}