function solution(n, t, m, p) {
    let answer = '';
    let maxLen = t * m;
    let temp = '';
    let num = 0;
    while(temp.length < maxLen) {
        temp += num.toString(n);
        num++;
    }
    temp = temp.toUpperCase();
    for (let i = 0; i < t; i++) {
        answer += temp[i * m + p - 1];
    }
    return answer;
}